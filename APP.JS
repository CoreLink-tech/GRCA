const UPDATE_STORAGE_KEY = "grca_updates";
const LEADERSHIP_STORAGE_KEY = "grca_leadership_profiles";
const EVENTS_STORAGE_KEY = "grca_events";
const LIVE_SERVICE_STORAGE_KEY = "grca_live_service";
const PREVIOUS_SERVICES_STORAGE_KEY = "grca_previous_services";

const DEFAULT_EVENTS = [
  {
    id: "default_event_1",
    title: "Sunday Worship Service",
    description:
      "Join us for an uplifting time of worship, prayer, and the Word of God. All are welcome — bring a friend!",
    dateLabel: "Sunday, Feb 23 · 9:00 AM",
    timeRange: "9:00 AM – 12:00 PM",
    location: "Main Sanctuary",
    theme: "gold",
    createdAt: "2026-02-01T00:00:00.000Z"
  },
  {
    id: "default_event_2",
    title: "Midweek Prayer & Bible Study",
    description:
      "Deepen your faith and connect with the church family through prayer, fellowship, and in-depth scripture study.",
    dateLabel: "Wednesday, Feb 26 · 6:00 PM",
    timeRange: "6:00 PM – 8:00 PM",
    location: "Fellowship Hall",
    theme: "red",
    createdAt: "2026-02-02T00:00:00.000Z"
  },
  {
    id: "default_event_3",
    title: "Annual Church Thanksgiving & Convention",
    description:
      "A special gathering to celebrate God's faithfulness to Grace Redemption Christian Assembly. Guest ministers, music, and more.",
    dateLabel: "Saturday, Mar 8 · 10:00 AM",
    timeRange: "10:00 AM – 6:00 PM",
    location: "Church Auditorium",
    theme: "blue",
    createdAt: "2026-02-03T00:00:00.000Z"
  }
];

const EVENT_THEME_STYLES = {
  gold: "linear-gradient(90deg, #C9A84C, #E8C96A)",
  red: "linear-gradient(90deg, #8B1A1A, #C0392B)",
  blue: "linear-gradient(90deg, #1B3461, #2a4f8a)"
};

let revealObserver = null;
let openLiveLinksBanner = null;

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function ensureDefaultEvents() {
  if (!localStorage.getItem(EVENTS_STORAGE_KEY)) {
    writeJson(EVENTS_STORAGE_KEY, DEFAULT_EVENTS);
  }
}

function normalizeLiveLinks(payload) {
  const normalizeEntry = (entry, index) => {
    if (!entry || typeof entry !== "object") {
      return null;
    }

    const url = typeof entry.url === "string" ? entry.url.trim() : "";
    if (!url) {
      return null;
    }

    const label =
      typeof entry.label === "string" && entry.label.trim()
        ? entry.label.trim()
        : `Link ${index + 1}`;

    return {
      id: entry.id || `live_link_${index + 1}`,
      label,
      url
    };
  };

  if (Array.isArray(payload)) {
    return payload.map(normalizeEntry).filter(Boolean);
  }

  if (payload && typeof payload === "object") {
    if (Array.isArray(payload.links)) {
      return payload.links.map(normalizeEntry).filter(Boolean);
    }

    if (typeof payload.url === "string" && payload.url.trim()) {
      return [
        {
          id: "live_link_legacy",
          label:
            typeof payload.label === "string" && payload.label.trim()
              ? payload.label.trim()
              : "Link 1",
          url: payload.url.trim()
        }
      ];
    }
  }

  return [];
}

function getLiveLinks() {
  const payload = readJson(LIVE_SERVICE_STORAGE_KEY, {});
  return normalizeLiveLinks(payload);
}

function observeRevealElements(root = document) {
  if (!revealObserver) {
    return;
  }

  root.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
}

function initScrollReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  observeRevealElements(document);
}

function initPageNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".page-nav a[href^='#']");

  if (!sections.length || !navLinks.length) {
    return;
  }

  const updateActiveLink = () => {
    let current = "";

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 140) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink);
}

function initLeadershipDropdowns() {
  const triggers = document.querySelectorAll(".leadership-dropdown-trigger[data-dropdown-target]");
  if (!triggers.length) {
    return;
  }

  triggers.forEach((trigger) => {
    const targetId = trigger.getAttribute("data-dropdown-target");
    const content = targetId ? document.getElementById(targetId) : null;
    const icon = trigger.querySelector(".dropdown-icon");
    if (!content) {
      return;
    }

    const syncIcon = () => {
      if (!icon) {
        return;
      }
      icon.textContent = trigger.getAttribute("aria-expanded") === "true" ? "−" : "+";
    };

    syncIcon();

    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", expanded ? "false" : "true");
      content.hidden = expanded;
      syncIcon();
    });
  });
}

function showComingSoon(message) {
  const toast = document.getElementById("coming-soon-toast");
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  if (showComingSoon.timeoutId) {
    clearTimeout(showComingSoon.timeoutId);
  }

  showComingSoon.timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function initComingSoonLinks() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a.coming-soon-link");
    if (!link) {
      return;
    }

    event.preventDefault();
    const label = link.getAttribute("data-label") || link.textContent.trim() || "This page";
    showComingSoon(`${label} coming soon.`);
  });
}

function initLiveLinksBanner() {
  const banner = document.getElementById("live-links-banner");
  const closeBtn = document.getElementById("live-links-close");
  const empty = document.getElementById("live-links-empty");
  const list = document.getElementById("live-links-list");

  if (!banner || !closeBtn || !empty || !list) {
    openLiveLinksBanner = null;
    return;
  }

  const close = () => {
    banner.hidden = true;
    document.body.style.overflow = "";
  };

  const open = (links) => {
    list.innerHTML = "";

    if (!links.length) {
      empty.classList.remove("hidden");
    } else {
      empty.classList.add("hidden");

      links.forEach((entry, index) => {
        const row = document.createElement("div");
        row.className = "live-link-item";

        const label = document.createElement("span");
        label.textContent = `Link ${index + 1}: ${entry.label}`;

        const anchor = document.createElement("a");
        anchor.href = entry.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.textContent = "Open";

        row.appendChild(label);
        row.appendChild(anchor);
        list.appendChild(row);
      });
    }

    banner.hidden = false;
    document.body.style.overflow = "hidden";
  };

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-live-banner='true']")) {
      close();
    }
  });

  closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !banner.hidden) {
      close();
    }
  });

  openLiveLinksBanner = open;
}

function applyLiveWatchState() {
  const liveLinks = document.querySelectorAll(".live-watch-link");
  if (!liveLinks.length) {
    return;
  }

  const links = getLiveLinks();
  const isActive = links.length > 0;

  liveLinks.forEach((link) => {
    link.setAttribute("href", "#");
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.classList.toggle("live-active", isActive);
    link.classList.toggle("live-inactive", !isActive);
  });
}

function initLiveWatchLinks() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a.live-watch-link");
    if (!link) {
      return;
    }

    event.preventDefault();

    const links = getLiveLinks();
    if (openLiveLinksBanner) {
      openLiveLinksBanner(links);
      return;
    }

    if (!links.length) {
      showComingSoon("COMING SOON");
    }
  });
}

function getStoredUpdates() {
  const updates = readJson(UPDATE_STORAGE_KEY, []);
  return Array.isArray(updates) ? updates : [];
}

function getStoredLeadershipProfiles() {
  const profiles = readJson(LEADERSHIP_STORAGE_KEY, {});
  return profiles && typeof profiles === "object" ? profiles : {};
}

function getStoredEvents() {
  const events = readJson(EVENTS_STORAGE_KEY, []);
  return Array.isArray(events) ? events : [];
}

function getStoredPreviousServices() {
  const services = readJson(PREVIOUS_SERVICES_STORAGE_KEY, []);
  return Array.isArray(services) ? services : [];
}

function appendMeta(container, value) {
  if (!value) {
    return;
  }

  const item = document.createElement("span");
  item.textContent = value;
  container.appendChild(item);
}

function renderEvents() {
  const list = document.getElementById("events-list");
  if (!list) {
    return;
  }

  const events = getStoredEvents()
    .slice()
    .sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));

  list.innerHTML = "";

  if (!events.length) {
    const emptyCard = document.createElement("article");
    emptyCard.className = "event-card events-empty-card";

    const body = document.createElement("div");
    body.className = "event-body";

    const title = document.createElement("h3");
    title.textContent = "No upcoming event yet";

    const text = document.createElement("p");
    text.textContent = "Upcoming events will appear here once published from the admin dashboard.";

    body.appendChild(title);
    body.appendChild(text);
    emptyCard.appendChild(body);
    list.appendChild(emptyCard);
    return;
  }

  events.forEach((eventItem) => {
    const card = document.createElement("article");
    card.className = "event-card reveal";

    const banner = document.createElement("div");
    banner.className = "event-banner";
    banner.style.background = EVENT_THEME_STYLES[eventItem.theme] || EVENT_THEME_STYLES.gold;

    const body = document.createElement("div");
    body.className = "event-body";

    const chip = document.createElement("div");
    chip.className = "event-date-chip";
    chip.textContent = `📅 ${eventItem.dateLabel || "Date Coming Soon"}`;

    const title = document.createElement("h3");
    title.textContent = eventItem.title || "Church Event";

    const description = document.createElement("p");
    description.textContent = eventItem.description || "";

    const meta = document.createElement("div");
    meta.className = "event-meta";

    const time = document.createElement("span");
    time.textContent = `🕘 ${eventItem.timeRange || "Time TBA"}`;

    const location = document.createElement("span");
    location.textContent = `📍 ${eventItem.location || "Location TBA"}`;

    meta.appendChild(time);
    meta.appendChild(location);

    const action = document.createElement("a");
    action.href = "#";
    action.className = "btn-event coming-soon-link";
    action.setAttribute("data-label", `${eventItem.title || "Event"} Details`);
    action.textContent = "Learn More";

    body.appendChild(chip);
    body.appendChild(title);
    body.appendChild(description);
    body.appendChild(meta);
    body.appendChild(action);

    card.appendChild(banner);
    card.appendChild(body);
    list.appendChild(card);
  });

  observeRevealElements(list);
}

function renderUpdates() {
  const list = document.getElementById("updates-list");
  const empty = document.getElementById("updates-empty");

  if (!list || !empty) {
    return;
  }

  const updates = getStoredUpdates()
    .slice()
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

  list.innerHTML = "";

  if (!updates.length) {
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");

  updates.forEach((update) => {
    const card = document.createElement("article");
    card.className = "update-card";

    const title = document.createElement("h3");
    title.className = "update-title";
    title.textContent = update.title || "Church Update";

    const body = document.createElement("p");
    body.className = "update-body";
    body.textContent = update.description || "";

    const meta = document.createElement("div");
    meta.className = "update-meta";
    appendMeta(meta, update.date || "");
    appendMeta(meta, update.time || "");
    appendMeta(meta, update.location || "");

    card.appendChild(title);
    card.appendChild(body);
    if (meta.childElementCount > 0) {
      card.appendChild(meta);
    }

    list.appendChild(card);
  });
}

function formatServiceDate(value) {
  if (!value) {
    return "Date not set";
  }

  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function renderPreviousServices() {
  const list = document.getElementById("previous-services-list");
  const empty = document.getElementById("previous-services-empty");

  if (!list || !empty) {
    return;
  }

  const services = getStoredPreviousServices()
    .filter((service) => service && typeof service === "object" && typeof service.url === "string" && service.url.trim())
    .slice()
    .sort((a, b) => new Date(b.serviceDate || b.createdAt || 0) - new Date(a.serviceDate || a.createdAt || 0));

  list.innerHTML = "";

  if (!services.length) {
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");

  services.forEach((service) => {
    const card = document.createElement("article");
    card.className = "previous-service-card reveal";

    const date = document.createElement("div");
    date.className = "previous-service-date";
    date.textContent = `📅 ${formatServiceDate(service.serviceDate)}`;

    const title = document.createElement("h3");
    title.className = "previous-service-title";
    title.textContent = service.title || "Sermon";

    const action = document.createElement("a");
    action.className = "btn-event previous-service-watch";
    action.href = service.url;
    action.target = "_blank";
    action.rel = "noopener noreferrer";
    action.textContent = "WATCH NOW";

    card.appendChild(date);
    card.appendChild(title);
    card.appendChild(action);
    list.appendChild(card);
  });

  observeRevealElements(list);
}

function renderCustomExecutives(profiles) {
  const executivesRow = document.getElementById("executives-row");
  if (!executivesRow) {
    return;
  }

  executivesRow.querySelectorAll(".custom-executive-card").forEach((card) => {
    card.remove();
  });

  const customExecutives = Object.entries(profiles)
    .filter(([id, profile]) => id.startsWith("executive_custom_") && profile && typeof profile === "object")
    .sort((a, b) => new Date(b[1].createdAt || 0) - new Date(a[1].createdAt || 0));

  customExecutives.forEach(([id, profile]) => {
    const card = document.createElement("div");
    card.className = "card-leader profile-card custom-executive-card";
    card.setAttribute("data-profile-id", id);

    const avatar = document.createElement("div");
    avatar.className = "avatar avatar-xs";

    const image = document.createElement("img");
    image.src =
      profile.imageDataUrl ||
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=260&q=80";
    image.alt = profile.imageAlt || profile.name || "Executive portrait";
    avatar.appendChild(image);

    const role = document.createElement("div");
    role.className = "role profile-role";
    role.textContent = profile.role || "Executive";

    const name = document.createElement("h4");
    name.className = "profile-name";
    name.textContent = profile.name || "[Full Name]";

    const bio = document.createElement("p");
    bio.className = "profile-bio";
    bio.textContent = profile.bio || "Executive profile.";

    const verse = document.createElement("p");
    verse.className = "profile-verse";
    verse.hidden = true;
    verse.textContent = profile.verse || "";

    card.appendChild(avatar);
    card.appendChild(role);
    card.appendChild(name);
    card.appendChild(bio);
    card.appendChild(verse);

    executivesRow.appendChild(card);
  });
}

function applyLeadershipProfiles() {
  const profiles = getStoredLeadershipProfiles();
  renderCustomExecutives(profiles);
  const cards = document.querySelectorAll(".profile-card[data-profile-id]");

  cards.forEach((card) => {
    const id = card.getAttribute("data-profile-id");
    const profile = profiles[id];

    if (!profile || typeof profile !== "object") {
      return;
    }

    const roleEl = card.querySelector(".profile-role");
    const nameEl = card.querySelector(".profile-name");
    const bioEl = card.querySelector(".profile-bio");
    const verseEl = card.querySelector(".profile-verse");
    const imageEl = card.querySelector("img");

    if (roleEl && profile.role) {
      roleEl.textContent = profile.role;
    }
    if (nameEl && profile.name) {
      nameEl.textContent = profile.name;
    }
    if (bioEl && profile.bio) {
      bioEl.textContent = profile.bio;
    }
    if (verseEl && profile.verse) {
      verseEl.textContent = profile.verse;
      verseEl.hidden = false;
    }
    if (imageEl && profile.imageDataUrl) {
      imageEl.src = profile.imageDataUrl;
    }
    if (imageEl && profile.imageAlt) {
      imageEl.alt = profile.imageAlt;
    }
  });
}

function initProfileModal() {
  const modal = document.getElementById("profile-modal");
  const closeButton = document.getElementById("profile-modal-close");
  const image = document.getElementById("profile-modal-image");
  const role = document.getElementById("profile-modal-role");
  const name = document.getElementById("profile-modal-name");
  const bio = document.getElementById("profile-modal-bio");
  const verse = document.getElementById("profile-modal-verse");

  if (!modal || !closeButton || !image || !role || !name || !bio || !verse) {
    return;
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function openModal(card, avatar) {
    const roleEl = card.querySelector(".profile-role");
    const nameEl = card.querySelector(".profile-name");
    const bioEl = card.querySelector(".profile-bio");
    const verseEl = card.querySelector(".profile-verse");
    const imageEl = card.querySelector("img");

    role.textContent = roleEl ? roleEl.textContent.trim() : "";
    name.textContent = nameEl ? nameEl.textContent.trim() : "";
    bio.textContent = bioEl ? bioEl.textContent.trim() : "";
    verse.textContent = verseEl ? verseEl.textContent.trim() : "";

    if (imageEl) {
      image.src = imageEl.src;
      image.alt = imageEl.alt || "Leadership profile";
    }

    if (avatar) {
      avatar.classList.add("bulge");
      window.setTimeout(() => {
        avatar.classList.remove("bulge");
      }, 380);
    }

    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  document.addEventListener("click", (event) => {
    const avatar = event.target.closest(".profile-card .avatar");
    if (avatar) {
      const card = avatar.closest(".profile-card");
      if (card) {
        event.preventDefault();
        openModal(card, avatar);
      }
      return;
    }

    if (event.target.closest("[data-close-modal='true']")) {
      closeModal();
    }
  });

  closeButton.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}

function initEventCardBulge() {
  const triggerBulge = (card) => {
    card.classList.remove("bulge");
    void card.offsetWidth;
    card.classList.add("bulge");
    window.setTimeout(() => {
      card.classList.remove("bulge");
    }, 340);
  };

  document.addEventListener(
    "pointerdown",
    (event) => {
      const card = event.target.closest(".event-card");
      if (!card || card.classList.contains("events-empty-card")) {
        return;
      }

      triggerBulge(card);
    },
    { passive: true }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ensureDefaultEvents();
  initScrollReveal();
  initPageNav();
  initLeadershipDropdowns();
  initComingSoonLinks();
  initLiveLinksBanner();
  initLiveWatchLinks();
  renderEvents();
  renderPreviousServices();
  renderUpdates();
  applyLeadershipProfiles();
  applyLiveWatchState();
  initProfileModal();
  initEventCardBulge();
});

window.addEventListener("storage", (event) => {
  if (event.key === UPDATE_STORAGE_KEY) {
    renderUpdates();
  }

  if (event.key === LEADERSHIP_STORAGE_KEY) {
    applyLeadershipProfiles();
  }

  if (event.key === EVENTS_STORAGE_KEY) {
    renderEvents();
  }

  if (event.key === PREVIOUS_SERVICES_STORAGE_KEY) {
    renderPreviousServices();
  }

  if (event.key === LIVE_SERVICE_STORAGE_KEY) {
    applyLiveWatchState();
  }
});

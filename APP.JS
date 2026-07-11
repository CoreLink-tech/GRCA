const DEFAULT_EVENTS = [
  {
    id: "default_event_1",
    title: "Sunday Worship Service",
    description:
      "Join us for an uplifting time of worship, prayer, and the Word of God. All are welcome - bring a friend!",
    dateLabel: "Sunday, Feb 23 · 9:00 AM",
    timeRange: "9:00 AM - 12:00 PM",
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
    timeRange: "6:00 PM - 8:00 PM",
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
    timeRange: "10:00 AM - 6:00 PM",
    location: "Church Auditorium",
    theme: "blue",
    createdAt: "2026-02-03T00:00:00.000Z"
  }
];

const DEFAULT_UPDATES = [
  {
    id: "default_update_1",
    title: "Welcome to Grace Redemption Christian Assembly",
    description:
      "We are excited to worship with you. Expect heartfelt praise, prayer, the Word, and a warm church family ready to receive you.",
    date: "2026-04-13",
    time: "09:00",
    location: "Main Sanctuary",
    createdAt: "2026-04-01T09:00:00.000Z"
  },
  {
    id: "default_update_2",
    title: "Midweek Prayer Gathering",
    description:
      "Join us this week for a focused time of intercession, thanksgiving, and Bible encouragement as we grow together in faith.",
    date: "2026-04-16",
    time: "18:00",
    location: "Fellowship Hall",
    createdAt: "2026-04-02T18:00:00.000Z"
  }
];

const DEFAULT_PREVIOUS_SERVICES = [
  {
    id: "default_previous_service_1",
    title: "Walking In Grace",
    serviceDate: "2026-03-31",
    url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    createdAt: "2026-04-03T12:00:00.000Z"
  },
  {
    id: "default_previous_service_2",
    title: "Redeemed For Purpose",
    serviceDate: "2026-03-24",
    url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    createdAt: "2026-04-02T12:00:00.000Z"
  }
];

const DEFAULT_PROFILES = {
  senior_pastor: {
    id: "senior_pastor",
    kind: "static",
    role: "Senior Pastor",
    name: "Pastor [Full Name]",
    bio: "A servant of God with a heart for the lost and a vision for community transformation. Replace this text with the Senior Pastor's biography, calling, and ministry vision.",
    verse: '"For God so loved the world..." — John 3:16',
    imageDataUrl: "",
    imageAlt: "Senior Pastor portrait",
    createdAt: "2026-04-01T08:00:00.000Z"
  },
  assistant_1: {
    id: "assistant_1",
    kind: "static",
    role: "Assistant",
    name: "[Full Name]",
    bio: "Short bio for this assistant. Highlight ministry focus and God-given gifts.",
    verse: "",
    imageDataUrl: "",
    imageAlt: "Assistant Pastor portrait",
    createdAt: "2026-04-01T08:05:00.000Z"
  },
  assistant_2: {
    id: "assistant_2",
    kind: "static",
    role: "Assistant",
    name: "[Full Name]",
    bio: "Add this assistant's profile, service areas, and a short ministry description.",
    verse: "",
    imageDataUrl: "",
    imageAlt: "Assistant portrait",
    createdAt: "2026-04-01T08:10:00.000Z"
  },
  assistant_3: {
    id: "assistant_3",
    kind: "static",
    role: "Assistant",
    name: "[Full Name]",
    bio: "Add this assistant's profile, service areas, and a short ministry description.",
    verse: "",
    imageDataUrl: "",
    imageAlt: "Assistant portrait",
    createdAt: "2026-04-01T08:15:00.000Z"
  },
  executive_1: {
    id: "executive_1",
    kind: "static",
    role: "Chairman, Board of Elders",
    name: "[Full Name]",
    bio: "Brief role description or ministry quote.",
    verse: "",
    imageDataUrl: "",
    imageAlt: "Chairman portrait",
    createdAt: "2026-04-01T08:20:00.000Z"
  },
  executive_2: {
    id: "executive_2",
    kind: "static",
    role: "Church Secretary",
    name: "[Full Name]",
    bio: "Brief role description or ministry quote.",
    verse: "",
    imageDataUrl: "",
    imageAlt: "Secretary portrait",
    createdAt: "2026-04-01T08:25:00.000Z"
  },
  executive_3: {
    id: "executive_3",
    kind: "static",
    role: "Treasurer",
    name: "[Full Name]",
    bio: "Brief role description or ministry quote.",
    verse: "",
    imageDataUrl: "",
    imageAlt: "Treasurer portrait",
    createdAt: "2026-04-01T08:30:00.000Z"
  },
  executive_4: {
    id: "executive_4",
    kind: "static",
    role: "Worship Director",
    name: "[Full Name]",
    bio: "Brief role description or ministry quote.",
    verse: "",
    imageDataUrl: "",
    imageAlt: "Worship director portrait",
    createdAt: "2026-04-01T08:35:00.000Z"
  }
};

const DEFAULT_SITE_CONTENT = {
  pageTitle: "Grace Redemption Christian Assembly",
  churchName: "Grace Redemption Christian Assembly",
  logoMark: "GRCA",
  heroBadge: "? Welcome to Our Family",
  heroTitleLineOne: "Grace Redemption",
  heroTitleLineTwo: "Christian Assembly",
  heroTagline: '"Where Grace Meets Redemption — and Lives Are Transformed"',
  heroPrimaryCtaText: "Join Us Sunday",
  heroPrimaryCtaLabel: "Join Us Sunday",
  leadershipLabel: "? Our Shepherds",
  leadershipTitle: "Meet the Leadership",
  leadershipSubtitle:
    "Godly men and women committed to guiding our congregation with wisdom, grace, and the love of Christ.",
  connectLabel: "? Stay Connected",
  connectTitle: "Follow Us Online",
  connectSubtitle:
    "We're active across platforms — join the conversation, watch our sermons, and stay updated on everything God is doing here.",
  facebookUrl: "https://www.facebook.com/share/1FRdzk1977/",
  youtubeUrl: "",
  instagramUrl: "",
  tiktokUrl: "",
  twitterUrl: "",
  whatsappUrl: "https://wa.me/2347034450043",
  footerBrandLineOne: "Grace",
  footerBrandAccent: "Redemption",
  footerBrandLineTwo: "Christian Assembly",
  footerDescription:
    '"Where Grace Meets Redemption — and Lives Are Transformed." Join us every Sunday as we worship, grow, and serve together.',
  serviceSunday: "Sunday: 8:30 AM",
  serviceWednesday: "Wednesday: 5:00 PM",
  serviceSaturday: "Saturday: 6:30 AM",
  serviceRehearsals: "Rehearsals: 2:00 PM",
  contactAddress: "No. 1, imasuen street",
  contactPhone: "+234 703 445 0043",
  contactEmail: "graceredemptionchristis@gmail.com",
  contactWebsiteUrl: "",
  footerCopyright: ""
};

const EVENT_THEME_STYLES = {
  gold: "linear-gradient(90deg, #C9A84C, #E8C96A)",
  red: "linear-gradient(90deg, #8B1A1A, #C0392B)",
  blue: "linear-gradient(90deg, #1B3461, #2a4f8a)"
};

let revealObserver = null;
let openLiveLinksBanner = null;
let openMediaModal = null;

const dataApi = window.GRCA_DATA && window.GRCA_DATA.api;
const appState = {
  updates: [],
  profiles: {},
  events: [],
  liveLinks: [],
  previousServices: [],
  siteContent: { ...DEFAULT_SITE_CONTENT }
};

async function ensureDefaultEvents() {
  if (!dataApi) {
    appState.events = DEFAULT_EVENTS.slice();
    return;
  }

  const existingEvents = await dataApi.listEvents();
  if (existingEvents.length) {
    appState.events = existingEvents;
    return;
  }

  await dataApi.saveEvents(DEFAULT_EVENTS);
  appState.events = await dataApi.listEvents();
}

async function ensureDefaultUpdates() {
  if (!dataApi) {
    appState.updates = DEFAULT_UPDATES.slice();
    return;
  }

  const existingUpdates = await dataApi.listUpdates();
  if (existingUpdates.length) {
    appState.updates = existingUpdates;
    return;
  }

  await Promise.all(DEFAULT_UPDATES.map((item) => dataApi.saveUpdate(item)));
  appState.updates = await dataApi.listUpdates();
}

async function ensureDefaultPreviousServices() {
  if (!dataApi) {
    appState.previousServices = DEFAULT_PREVIOUS_SERVICES.slice();
    return;
  }

  const existingServices = await dataApi.listPreviousServices();
  if (existingServices.length) {
    appState.previousServices = existingServices;
    return;
  }

  await Promise.all(DEFAULT_PREVIOUS_SERVICES.map((item) => dataApi.savePreviousService(item)));
  appState.previousServices = await dataApi.listPreviousServices();
}

async function ensureDefaultProfiles() {
  if (!dataApi) {
    appState.profiles = { ...DEFAULT_PROFILES };
    return;
  }

  const existingProfiles = await dataApi.listLeadershipProfiles();
  if (Object.keys(existingProfiles).length) {
    appState.profiles = existingProfiles;
    return;
  }

  await Promise.all(
    Object.values(DEFAULT_PROFILES).map((item) => dataApi.saveLeadershipProfile(item))
  );
  appState.profiles = await dataApi.listLeadershipProfiles();
}

async function ensureDefaultSiteContent() {
  if (!dataApi) {
    appState.siteContent = { ...DEFAULT_SITE_CONTENT };
    return;
  }

  const existingContent = await dataApi.getSiteContent();
  if (existingContent && Object.keys(existingContent).length) {
    appState.siteContent = { ...DEFAULT_SITE_CONTENT, ...existingContent };
    return;
  }

  await dataApi.saveSiteContent(DEFAULT_SITE_CONTENT);
  const savedContent = await dataApi.getSiteContent();
  appState.siteContent = { ...DEFAULT_SITE_CONTENT, ...savedContent };
}

async function loadAppData() {
  if (!dataApi) {
    appState.updates = DEFAULT_UPDATES.slice();
    appState.profiles = { ...DEFAULT_PROFILES };
    appState.events = DEFAULT_EVENTS.slice();
    appState.previousServices = DEFAULT_PREVIOUS_SERVICES.slice();
    appState.liveLinks = [];
    appState.siteContent = { ...DEFAULT_SITE_CONTENT };
    return;
  }

  try {
    const [updates, profiles, liveLinks, previousServices, siteContent] = await Promise.all([
      dataApi.listUpdates(),
      dataApi.listLeadershipProfiles(),
      dataApi.listLiveLinks(),
      dataApi.listPreviousServices(),
      dataApi.getSiteContent()
    ]);

    appState.updates = Array.isArray(updates) ? updates : [];
    appState.profiles = profiles && typeof profiles === "object" ? profiles : {};
    appState.liveLinks = Array.isArray(liveLinks) ? liveLinks : [];
    appState.previousServices = Array.isArray(previousServices) ? previousServices : [];
    appState.siteContent = { ...DEFAULT_SITE_CONTENT, ...(siteContent || {}) };
  } catch (error) {
    console.error("Failed to load data from Supabase, falling back to defaults.", error);
    if (!appState.updates || !appState.updates.length) {
      appState.updates = DEFAULT_UPDATES.slice();
    }
    if (!appState.profiles || !Object.keys(appState.profiles).length) {
      appState.profiles = { ...DEFAULT_PROFILES };
    }
    if (!appState.events || !appState.events.length) {
      appState.events = DEFAULT_EVENTS.slice();
    }
    if (!appState.previousServices || !appState.previousServices.length) {
      appState.previousServices = DEFAULT_PREVIOUS_SERVICES.slice();
    }
    appState.liveLinks = appState.liveLinks || [];
    appState.siteContent = { ...DEFAULT_SITE_CONTENT, ...(appState.siteContent || {}) };
    return;
  }

  try {
    await ensureDefaultUpdates();
    await ensureDefaultProfiles();
    await ensureDefaultPreviousServices();
    await ensureDefaultEvents();
    await ensureDefaultSiteContent();
  } catch (error) {
    console.error("Failed to seed default data into Supabase.", error);
  }
}

function getLiveLinks() {
  return Array.isArray(appState.liveLinks) ? appState.liveLinks : [];
}

function getSiteContent() {
  return appState.siteContent && typeof appState.siteContent === "object"
    ? appState.siteContent
    : { ...DEFAULT_SITE_CONTENT };
}

function getYouTubeEmbedUrl(rawUrl) {
  if (typeof rawUrl !== "string" || !rawUrl.trim()) {
    return "";
  }

  try {
    const parsed = new URL(rawUrl.trim());
    const host = parsed.hostname.replace(/^www\./, "").toLowerCase();
    let videoId = "";

    if (host === "youtu.be") {
      videoId = parsed.pathname.split("/").filter(Boolean)[0] || "";
    } else if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v") || "";
      } else {
        const segments = parsed.pathname.split("/").filter(Boolean);
        if (["live", "embed", "shorts"].includes(segments[0])) {
          videoId = segments[1] || "";
        } else if (segments[segments.length - 1] === "live" && segments.length >= 2) {
          videoId = parsed.searchParams.get("v") || "";
        }
      }
    }

    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1&playsinline=1` : "";
  } catch (error) {
    return "";
  }
}

function setEmbedSource(frame, url, options = {}) {
  if (!frame) {
    return;
  }

  if (setEmbedSource.timeoutId) {
    clearTimeout(setEmbedSource.timeoutId);
  }

  frame.src = "";

  if (!url) {
    return;
  }

  if (options.immediate) {
    frame.src = url;
    return;
  }

  setEmbedSource.timeoutId = window.setTimeout(() => {
    frame.src = url;
  }, 60);
}

function buildWatchItems(items) {
  return (Array.isArray(items) ? items : [])
    .filter((item) => item && typeof item.url === "string" && item.url.trim())
    .map((item, index) => ({
      id: item.id || `watch_item_${index + 1}`,
      label:
        typeof item.label === "string" && item.label.trim()
          ? item.label.trim()
          : `Link ${index + 1}`,
      url: item.url.trim(),
      embedUrl: getYouTubeEmbedUrl(item.url)
    }));
}

function getActiveLiveWatchItems() {
  return buildWatchItems(getLiveLinks());
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
      icon.textContent = trigger.getAttribute("aria-expanded") === "true" ? "-" : "+";
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
  const intro = document.getElementById("live-links-intro");
  const empty = document.getElementById("live-links-empty");
  const embedWrap = document.getElementById("live-embed-wrap");
  const embedFrame = document.getElementById("live-embed-frame");
  const list = document.getElementById("live-links-list");

  if (!banner || !closeBtn || !intro || !empty || !embedWrap || !embedFrame || !list) {
    openLiveLinksBanner = null;
    return;
  }

  const close = () => {
    banner.hidden = true;
    setEmbedSource(embedFrame, "");
    document.body.style.overflow = "";
  };

  const open = (links) => {
    const watchItems = buildWatchItems(links);
    list.innerHTML = "";
    const embeddedLink = watchItems.find((entry) => entry.embedUrl);

    if (!watchItems.length) {
      intro.textContent = "Our livestream will appear here when service begins.";
      embedWrap.classList.add("hidden");
      empty.classList.remove("hidden");
    } else {
      if (embeddedLink) {
        intro.textContent = `${embeddedLink.label} is streaming live below.`;
        setEmbedSource(embedFrame, embeddedLink.embedUrl, { immediate: true });
        embedWrap.classList.remove("hidden");
      } else {
        intro.textContent = "A live link is active. Use the button below to watch on the streaming platform.";
        setEmbedSource(embedFrame, "");
        embedWrap.classList.add("hidden");
      }

      empty.classList.add("hidden");

      watchItems.forEach((entry, index) => {
        const row = document.createElement("div");
        row.className = "live-link-item";

        const label = document.createElement("span");
        label.textContent = `Link ${index + 1}: ${entry.label}`;

        const anchor = document.createElement("a");
        anchor.href = entry.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.textContent = entry.embedUrl ? "Open in YouTube" : "Open stream";

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

function renderLiveNowSection() {
  const section = document.getElementById("live-now");
  const badge = document.getElementById("live-now-badge");
  const title = document.getElementById("live-now-title");
  const description = document.getElementById("live-now-description");
  const actions = document.getElementById("live-now-actions");
  const playerWrap = document.getElementById("live-now-player-wrap");
  const player = document.getElementById("live-now-player");

  if (!section || !badge || !title || !description || !actions || !playerWrap || !player) {
    return;
  }

  const links = getActiveLiveWatchItems();
  const primary = links[0];
  const embedded = links.find((entry) => entry.embedUrl);

  if (!primary) {
    section.hidden = true;
    setEmbedSource(player, "");
    playerWrap.classList.add("hidden");
    actions.innerHTML =
      '<a href="#" class="btn-primary live-watch-link" data-live-active-text="WATCH LIVE ?" data-live-inactive-text="COMING SOON">WATCH LIVE ?</a>';
    return;
  }

  section.hidden = false;
  badge.textContent = "Live Now";
  title.textContent = embedded
    ? `${embedded.label || "Live Service"} is streaming now`
    : `${primary.label || "Live Service"} is available now`;
  description.textContent = embedded
    ? "Click WATCH LIVE to open the stream on the website, or use the backup link if you prefer the full streaming page."
    : "A live service is active right now. Use the button below to open the stream on its platform.";

  setEmbedSource(player, "");
  playerWrap.classList.add("hidden");

  actions.innerHTML = "";

  const watchButton = document.createElement("a");
  watchButton.href = "#";
  watchButton.className = "btn-primary live-watch-link live-active";
  watchButton.setAttribute("data-live-active-text", "WATCH LIVE ?");
  watchButton.setAttribute("data-live-inactive-text", "COMING SOON");
  watchButton.textContent = "WATCH LIVE ?";
  actions.appendChild(watchButton);

  const externalButton = document.createElement("a");
  externalButton.href = primary.url;
  externalButton.target = "_blank";
  externalButton.rel = "noopener noreferrer";
  externalButton.className = "btn-outline";
  externalButton.textContent = embedded ? "OPEN ON YOUTUBE" : "OPEN STREAM";
  actions.appendChild(externalButton);
}

function initMediaModal() {
  const modal = document.getElementById("media-modal");
  const closeBtn = document.getElementById("media-modal-close");
  const tag = document.getElementById("media-modal-tag");
  const title = document.getElementById("media-modal-title");
  const description = document.getElementById("media-modal-description");
  const embedWrap = document.getElementById("media-modal-embed-wrap");
  const embed = document.getElementById("media-modal-embed");
  const empty = document.getElementById("media-modal-empty");
  const actions = document.getElementById("media-modal-actions");

  if (!modal || !closeBtn || !tag || !title || !description || !embedWrap || !embed || !empty || !actions) {
    openMediaModal = null;
    return;
  }

  const close = () => {
    modal.hidden = true;
    setEmbedSource(embed, "");
    document.body.style.overflow = "";
  };

  const open = ({ modalTag, modalTitle, modalDescription, items }) => {
    const watchItems = buildWatchItems(items);
    const embedded = watchItems.find((item) => item.embedUrl);

    tag.textContent = modalTag || "Watch";
    title.textContent = modalTitle || "Watch Service";
    description.textContent = modalDescription || "Watch right here on the website.";
    actions.innerHTML = "";

    if (embedded) {
      setEmbedSource(embed, embedded.embedUrl, { immediate: true });
      embedWrap.classList.remove("hidden");
      empty.classList.add("hidden");
    } else {
      setEmbedSource(embed, "");
      embedWrap.classList.add("hidden");
      empty.classList.remove("hidden");
    }

    watchItems.forEach((item) => {
      const row = document.createElement("div");
      row.className = "live-link-item";

      const label = document.createElement("span");
      label.textContent = item.label;

      const anchor = document.createElement("a");
      anchor.href = item.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = item.embedUrl ? "Open in YouTube" : "Open stream";

      row.appendChild(label);
      row.appendChild(anchor);
      actions.appendChild(row);
    });

    modal.hidden = false;
    document.body.style.overflow = "hidden";
  };

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-media-modal='true']")) {
      close();
    }
  });

  closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      close();
    }
  });

  openMediaModal = open;
}

function applyLiveWatchState() {
  const liveLinks = document.querySelectorAll(".live-watch-link");
  if (!liveLinks.length) {
    return;
  }

  const isActive = getActiveLiveWatchItems().length > 0;

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

    const links = getActiveLiveWatchItems();
    if (!links.length) {
      showComingSoon("COMING SOON");
      return;
    }

    if (openLiveLinksBanner) {
      openLiveLinksBanner(links);
    }
  });
}

function getStoredUpdates() {
  return Array.isArray(appState.updates) ? appState.updates : [];
}

function getStoredLeadershipProfiles() {
  return appState.profiles && typeof appState.profiles === "object" ? appState.profiles : {};
}

function getProfileImageSource(profile, fallback) {
  return (profile && profile.imageDataUrl) || fallback;
}

function getStoredEvents() {
  return Array.isArray(appState.events) ? appState.events : [];
}

function getStoredPreviousServices() {
  return Array.isArray(appState.previousServices) ? appState.previousServices : [];
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
    chip.textContent = `• ${eventItem.dateLabel || "Date Coming Soon"}`;

    const title = document.createElement("h3");
    title.textContent = eventItem.title || "Church Event";

    const description = document.createElement("p");
    description.textContent = eventItem.description || "";

    const meta = document.createElement("div");
    meta.className = "event-meta";

    const time = document.createElement("span");
    time.textContent = `• ${eventItem.timeRange || "Time TBA"}`;

    const location = document.createElement("span");
    location.textContent = `• ${eventItem.location || "Location TBA"}`;

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
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("data-service-title", service.title || "Sermon");
    card.setAttribute("data-service-url", service.url);
    card.setAttribute("data-service-date", service.serviceDate || "");

    const date = document.createElement("div");
    date.className = "previous-service-date";
    date.textContent = `• ${formatServiceDate(service.serviceDate)}`;

    const title = document.createElement("h3");
    title.className = "previous-service-title";
    title.textContent = service.title || "Sermon";

    const action = document.createElement("a");
    action.className = "btn-event previous-service-watch";
    action.href = "#";
    action.dataset.serviceTitle = service.title || "Sermon";
    action.dataset.serviceUrl = service.url;
    action.dataset.serviceDate = service.serviceDate || "";
    action.textContent = "WATCH NOW";

    card.appendChild(date);
    card.appendChild(title);
    card.appendChild(action);
    list.appendChild(card);
  });

  observeRevealElements(list);
}

function initPreviousServiceWatchLinks() {
  const openPreviousService = (serviceTitle, serviceUrl, serviceDate) => {
    if (!openMediaModal) {
      return;
    }

    const title = serviceTitle || "Service Replay";
    const date = serviceDate ? formatServiceDate(serviceDate) : "";
    const url = serviceUrl || "";

    if (!url) {
      showComingSoon("This service link is not available yet.");
      return;
    }

    openMediaModal({
      modalTag: "Service Replay",
      modalTitle: title,
      modalDescription: date
        ? `Originally streamed on ${date}. Watch it here or open it on the source platform.`
        : "Watch this service here or open it on the source platform.",
      items: [
        {
          label: title,
          url
        }
      ]
    });
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a.previous-service-watch");
    if (!link) {
      const card = event.target.closest(".previous-service-card");
      if (!card) {
        return;
      }

      event.preventDefault();
      openPreviousService(
        card.getAttribute("data-service-title"),
        card.getAttribute("data-service-url"),
        card.getAttribute("data-service-date")
      );
      return;
    }

    event.preventDefault();
    openPreviousService(link.dataset.serviceTitle, link.dataset.serviceUrl, link.dataset.serviceDate);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const card = document.activeElement && document.activeElement.closest(".previous-service-card");
    if (!card) {
      return;
    }

    event.preventDefault();
    openPreviousService(
      card.getAttribute("data-service-title"),
      card.getAttribute("data-service-url"),
      card.getAttribute("data-service-date")
    );
  });
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
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View profile for ${profile.name || profile.role || "leadership profile"}`);

    const avatar = document.createElement("div");
    avatar.className = "avatar avatar-xs";

    const image = document.createElement("img");
    image.src = getProfileImageSource(
      profile,
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=260&q=80"
    );
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
    const cardLabel = (profile && (profile.name || profile.role)) || "leadership profile";

    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View profile for ${cardLabel}`);

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

  function getModalProfile(card) {
    const id = card.getAttribute("data-profile-id");
    const profile = getStoredLeadershipProfiles()[id] || {};
    const roleEl = card.querySelector(".profile-role");
    const nameEl = card.querySelector(".profile-name");
    const bioEl = card.querySelector(".profile-bio");
    const verseEl = card.querySelector(".profile-verse");
    const imageEl = card.querySelector("img");

    return {
      role: profile.role || (roleEl ? roleEl.textContent.trim() : ""),
      name: profile.name || (nameEl ? nameEl.textContent.trim() : ""),
      bio: profile.bio || (bioEl ? bioEl.textContent.trim() : ""),
      verse: profile.verse || (verseEl ? verseEl.textContent.trim() : ""),
      imageSrc: getProfileImageSource(profile, imageEl ? imageEl.src : ""),
      imageAlt: profile.imageAlt || (imageEl ? imageEl.alt : "") || "Leadership profile"
    };
  }

  function openModal(card) {
    const avatar = card.querySelector(".avatar");
    const profile = getModalProfile(card);

    role.textContent = profile.role;
    name.textContent = profile.name;
    bio.textContent = profile.bio;
    verse.textContent = profile.verse;

    if (profile.imageSrc) {
      image.src = profile.imageSrc;
      image.alt = profile.imageAlt;
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
    const card = event.target.closest(".profile-card[data-profile-id]");
    if (card) {
      event.preventDefault();
      openModal(card);
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
      return;
    }

    if ((event.key === "Enter" || event.key === " ") && document.activeElement) {
      const card = document.activeElement.closest(".profile-card[data-profile-id]");
      if (card) {
        event.preventDefault();
        openModal(card);
      }
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

function initNavbarScrollState() {
  const nav = document.querySelector("nav");
  if (!nav) {
    return;
  }

  const syncNavState = () => {
    nav.classList.toggle("nav-scrolled", window.scrollY > 60);
  };

  syncNavState();
  window.addEventListener("scroll", syncNavState, { passive: true });
}

function applyLinkState(element, url, fallbackLabel) {
  if (!element) {
    return;
  }

  const hasUrl = typeof url === "string" && url.trim();
  if (hasUrl) {
    element.href = url.trim();
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    element.classList.remove("coming-soon-link");
  } else {
    element.href = "#";
    element.removeAttribute("target");
    element.removeAttribute("rel");
    element.classList.add("coming-soon-link");
    element.setAttribute("data-label", fallbackLabel);
  }
}

function setOptionalText(element, value) {
  if (!element) {
    return;
  }

  const text = typeof value === "string" ? value.trim() : "";
  element.textContent = text;
  element.hidden = !text;
}

function applySiteContent() {
  const content = getSiteContent();

  if (content.pageTitle) {
    document.title = content.pageTitle;
  }

  const navLogo = document.getElementById("nav-logo");
  const navLogoText = document.getElementById("nav-logo-text");
  const navLogoMark = document.getElementById("nav-logo-mark");
  const heroBadge = document.getElementById("hero-badge");
  const heroTitleLineOne = document.getElementById("hero-title-line-one");
  const heroTitleLineTwo = document.getElementById("hero-title-line-two");
  const heroTagline = document.getElementById("hero-tagline");
  const heroPrimaryCta = document.getElementById("hero-primary-cta");
  const leadershipLabel = document.getElementById("leadership-section-label");
  const leadershipTitle = document.getElementById("leadership-section-title");
  const leadershipSubtitle = document.getElementById("leadership-section-subtitle");
  const connectLabel = document.getElementById("connect-section-label");
  const connectTitle = document.getElementById("connect-section-title");
  const connectSubtitle = document.getElementById("connect-section-subtitle");
  const footerBrandHeading = document.getElementById("footer-brand-heading");
  const footerBrandDescription = document.getElementById("footer-brand-description");
  const serviceSunday = document.getElementById("service-time-sunday");
  const serviceWednesday = document.getElementById("service-time-wednesday");
  const serviceSaturday = document.getElementById("service-time-saturday");
  const serviceRehearsals = document.getElementById("service-time-rehearsals");
  const contactAddress = document.getElementById("contact-address");
  const contactPhone = document.getElementById("contact-phone");
  const contactEmail = document.getElementById("contact-email");
  const contactWebsite = document.getElementById("contact-website");
  const footerCopyright = document.getElementById("footer-copyright");

  if (navLogo) {
    navLogo.setAttribute("aria-label", content.churchName || DEFAULT_SITE_CONTENT.churchName);
  }
  if (navLogoText) navLogoText.textContent = content.churchName || DEFAULT_SITE_CONTENT.churchName;
  if (navLogoMark) navLogoMark.textContent = content.logoMark || DEFAULT_SITE_CONTENT.logoMark;
  if (heroBadge) heroBadge.textContent = content.heroBadge || DEFAULT_SITE_CONTENT.heroBadge;
  if (heroTitleLineOne) heroTitleLineOne.textContent = content.heroTitleLineOne || DEFAULT_SITE_CONTENT.heroTitleLineOne;
  if (heroTitleLineTwo) heroTitleLineTwo.textContent = content.heroTitleLineTwo || DEFAULT_SITE_CONTENT.heroTitleLineTwo;
  if (heroTagline) heroTagline.textContent = content.heroTagline || DEFAULT_SITE_CONTENT.heroTagline;
  if (heroPrimaryCta) {
    heroPrimaryCta.textContent = content.heroPrimaryCtaText || DEFAULT_SITE_CONTENT.heroPrimaryCtaText;
    heroPrimaryCta.setAttribute("data-label", content.heroPrimaryCtaLabel || DEFAULT_SITE_CONTENT.heroPrimaryCtaLabel);
  }
  if (leadershipLabel) leadershipLabel.textContent = content.leadershipLabel || DEFAULT_SITE_CONTENT.leadershipLabel;
  if (leadershipTitle) leadershipTitle.textContent = content.leadershipTitle || DEFAULT_SITE_CONTENT.leadershipTitle;
  if (leadershipSubtitle) leadershipSubtitle.textContent = content.leadershipSubtitle || DEFAULT_SITE_CONTENT.leadershipSubtitle;
  if (connectLabel) connectLabel.textContent = content.connectLabel || DEFAULT_SITE_CONTENT.connectLabel;
  if (connectTitle) connectTitle.textContent = content.connectTitle || DEFAULT_SITE_CONTENT.connectTitle;
  if (connectSubtitle) connectSubtitle.textContent = content.connectSubtitle || DEFAULT_SITE_CONTENT.connectSubtitle;

  if (footerBrandHeading) {
    footerBrandHeading.innerHTML = `${content.footerBrandLineOne || DEFAULT_SITE_CONTENT.footerBrandLineOne} <span>${content.footerBrandAccent || DEFAULT_SITE_CONTENT.footerBrandAccent}</span><br>${content.footerBrandLineTwo || DEFAULT_SITE_CONTENT.footerBrandLineTwo}`;
  }
  if (footerBrandDescription) {
    footerBrandDescription.textContent = content.footerDescription || DEFAULT_SITE_CONTENT.footerDescription;
  }
  if (serviceSunday) serviceSunday.textContent = DEFAULT_SITE_CONTENT.serviceSunday;
  if (serviceWednesday) serviceWednesday.textContent = DEFAULT_SITE_CONTENT.serviceWednesday;
  if (serviceSaturday) serviceSaturday.textContent = DEFAULT_SITE_CONTENT.serviceSaturday;
  if (serviceRehearsals) serviceRehearsals.textContent = DEFAULT_SITE_CONTENT.serviceRehearsals;
  setOptionalText(contactAddress, DEFAULT_SITE_CONTENT.contactAddress);
  setOptionalText(contactPhone, DEFAULT_SITE_CONTENT.contactPhone);
  setOptionalText(contactEmail, DEFAULT_SITE_CONTENT.contactEmail);
  if (contactWebsite) {
    const websiteItem = contactWebsite.closest("li");
    const hasWebsite = typeof DEFAULT_SITE_CONTENT.contactWebsiteUrl === "string" && DEFAULT_SITE_CONTENT.contactWebsiteUrl.trim();
    contactWebsite.textContent = "?? Website";
    applyLinkState(contactWebsite, DEFAULT_SITE_CONTENT.contactWebsiteUrl, "Website");
    if (websiteItem) {
      websiteItem.hidden = !hasWebsite;
    }
  }
  setOptionalText(footerCopyright, DEFAULT_SITE_CONTENT.footerCopyright);

  applyLinkState(document.getElementById("social-facebook"), content.facebookUrl, "Facebook Page");
  applyLinkState(document.getElementById("social-youtube"), content.youtubeUrl, "YouTube Page");
  applyLinkState(document.getElementById("social-instagram"), content.instagramUrl, "Instagram Page");
  applyLinkState(document.getElementById("social-tiktok"), content.tiktokUrl, "TikTok Page");
  applyLinkState(document.getElementById("social-twitter"), content.twitterUrl, "X Page");
  applyLinkState(document.getElementById("social-whatsapp"), content.whatsappUrl, "WhatsApp");
}

function rerenderApp() {
  applySiteContent();
  renderEvents();
  renderLiveNowSection();
  renderPreviousServices();
  renderUpdates();
  applyLeadershipProfiles();
  applyLiveWatchState();
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await loadAppData();
  } catch (error) {
    console.error("loadAppData failed unexpectedly.", error);
  }

  // Scroll reveal must always run so the page is never stuck invisible,
  // even if data loading or a later init step throws.
  initScrollReveal();

  try {
    initLeadershipDropdowns();
    initComingSoonLinks();
    initLiveLinksBanner();
    initMediaModal();
    initLiveWatchLinks();
    initPreviousServiceWatchLinks();
    initNavbarScrollState();
    rerenderApp();
    initProfileModal();
    initEventCardBulge();

    if (dataApi) {
      dataApi.subscribeToChanges(async () => {
        try {
          await loadAppData();
          rerenderApp();
        } catch (error) {
          console.error("Failed to refresh data on change.", error);
        }
      });
    }

    window.addEventListener("focus", async () => {
      try {
        await loadAppData();
        rerenderApp();
      } catch (error) {
        console.error("Failed to refresh data on focus.", error);
      }
    });
  } catch (error) {
    console.error("Page initialization failed.", error);
  }
});







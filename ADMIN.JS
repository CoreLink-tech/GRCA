const PROFILE_LABELS = {
  senior_pastor: "Senior Pastor",
  assistant_1: "Assistant 1",
  assistant_2: "Assistant 2",
  assistant_3: "Assistant 3",
  executive_1: "Executive 1",
  executive_2: "Executive 2",
  executive_3: "Executive 3",
  executive_4: "Executive 4"
};

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

const form = document.getElementById("update-form");
const message = document.getElementById("form-message");
const list = document.getElementById("admin-updates-list");
const empty = document.getElementById("admin-empty");
const clearAllBtn = document.getElementById("clear-all-btn");
const updateFormTitle = document.getElementById("update-form-title");
const updateSubmitBtn = document.getElementById("update-submit-btn");
const cancelEditBtn = document.getElementById("cancel-edit-btn");

const eventForm = document.getElementById("event-form");
const eventFormTitle = document.getElementById("event-form-title");
const eventSubmitBtn = document.getElementById("event-submit-btn");
const cancelEventEditBtn = document.getElementById("cancel-event-edit-btn");
const eventMessage = document.getElementById("event-message");
const adminEventsList = document.getElementById("admin-events-list");
const eventsEmpty = document.getElementById("events-empty");

const liveForm = document.getElementById("live-form");
const liveLabel = document.getElementById("live-label");
const liveUrl = document.getElementById("live-url");
const liveMessage = document.getElementById("live-message");
const liveStatus = document.getElementById("live-status");
const endLiveBtn = document.getElementById("end-live-btn");
const liveLinksAdminList = document.getElementById("live-links-admin-list");
const liveLinksEmpty = document.getElementById("live-links-empty");

const previousServiceForm = document.getElementById("previous-service-form");
const previousServiceTitle = document.getElementById("previous-service-title");
const previousServiceDate = document.getElementById("previous-service-date");
const previousServiceUrl = document.getElementById("previous-service-url");
const previousServiceSubmitBtn = document.getElementById("previous-service-submit-btn");
const cancelPreviousServiceEditBtn = document.getElementById("cancel-previous-service-edit-btn");
const previousServiceMessage = document.getElementById("previous-service-message");
const adminPreviousServicesList = document.getElementById("admin-previous-services-list");
const adminPreviousServicesEmpty = document.getElementById("admin-previous-services-empty");

const leadershipForm = document.getElementById("leadership-form");
const leadershipMessage = document.getElementById("leadership-message");
const profileSelect = document.getElementById("profile-id");
const leadRole = document.getElementById("lead-role");
const leadName = document.getElementById("lead-name");
const leadBio = document.getElementById("lead-bio");
const leadVerse = document.getElementById("lead-verse");
const leadImage = document.getElementById("lead-image");
const leadershipPreview = document.getElementById("leadership-preview");
const clearProfileImageBtn = document.getElementById("clear-profile-image-btn");
const leadershipList = document.getElementById("leadership-list");
const leadershipEmpty = document.getElementById("leadership-empty");

const newExecutiveForm = document.getElementById("new-executive-form");
const newExecutiveRole = document.getElementById("new-exec-role");
const newExecutiveName = document.getElementById("new-exec-name");
const newExecutiveBio = document.getElementById("new-exec-bio");
const newExecutiveVerse = document.getElementById("new-exec-verse");
const newExecutiveImage = document.getElementById("new-exec-image");
const newExecutiveMessage = document.getElementById("new-executive-message");

let editingUpdateId = null;
let editingEventId = null;
let editingPreviousServiceId = null;

const supabaseApi = window.GRCA_SUPABASE && window.GRCA_SUPABASE.api;
const adminState = {
  updates: [],
  events: [],
  previousServices: [],
  liveLinks: [],
  profiles: {}
};

function generateId(prefix) {
  if (crypto.randomUUID) {
    return `${prefix}_${crypto.randomUUID()}`;
  }

  return `${prefix}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
}

async function ensureDefaultEvents() {
  if (!supabaseApi) {
    adminState.events = DEFAULT_EVENTS.slice();
    return;
  }

  const existingEvents = await supabaseApi.listEvents();
  if (existingEvents.length) {
    adminState.events = existingEvents;
    return;
  }

  await supabaseApi.saveEvents(DEFAULT_EVENTS);
  adminState.events = await supabaseApi.listEvents();
}

async function ensureDefaultUpdates() {
  if (!supabaseApi) {
    adminState.updates = DEFAULT_UPDATES.slice();
    return;
  }

  const existingUpdates = await supabaseApi.listUpdates();
  if (existingUpdates.length) {
    adminState.updates = existingUpdates;
    return;
  }

  await Promise.all(DEFAULT_UPDATES.map((item) => supabaseApi.saveUpdate(item)));
  adminState.updates = await supabaseApi.listUpdates();
}

async function ensureDefaultPreviousServices() {
  if (!supabaseApi) {
    adminState.previousServices = DEFAULT_PREVIOUS_SERVICES.slice();
    return;
  }

  const existingServices = await supabaseApi.listPreviousServices();
  if (existingServices.length) {
    adminState.previousServices = existingServices;
    return;
  }

  await Promise.all(DEFAULT_PREVIOUS_SERVICES.map((item) => supabaseApi.savePreviousService(item)));
  adminState.previousServices = await supabaseApi.listPreviousServices();
}

async function ensureDefaultProfiles() {
  if (!supabaseApi) {
    adminState.profiles = { ...DEFAULT_PROFILES };
    return;
  }

  const existingProfiles = await supabaseApi.listLeadershipProfiles();
  if (Object.keys(existingProfiles).length) {
    adminState.profiles = existingProfiles;
    return;
  }

  await Promise.all(
    Object.values(DEFAULT_PROFILES).map((item) => supabaseApi.saveLeadershipProfile(item))
  );
  adminState.profiles = await supabaseApi.listLeadershipProfiles();
}

async function loadAdminData() {
  if (!supabaseApi) {
    adminState.updates = DEFAULT_UPDATES.slice();
    adminState.previousServices = DEFAULT_PREVIOUS_SERVICES.slice();
    adminState.profiles = { ...DEFAULT_PROFILES };
    adminState.events = DEFAULT_EVENTS.slice();
    adminState.liveLinks = [];
    return;
  }

  const [updates, previousServices, liveLinks, profiles] = await Promise.all([
    supabaseApi.listUpdates(),
    supabaseApi.listPreviousServices(),
    supabaseApi.listLiveLinks(),
    supabaseApi.listLeadershipProfiles()
  ]);

  adminState.updates = Array.isArray(updates) ? updates : [];
  adminState.previousServices = Array.isArray(previousServices) ? previousServices : [];
  adminState.liveLinks = Array.isArray(liveLinks) ? liveLinks : [];
  adminState.profiles = profiles && typeof profiles === "object" ? profiles : {};

  await ensureDefaultUpdates();
  await ensureDefaultPreviousServices();
  await ensureDefaultProfiles();
  await ensureDefaultEvents();
}

function isCustomExecutiveId(profileId) {
  return typeof profileId === "string" && profileId.startsWith("executive_custom_");
}

function getUpdates() {
  return Array.isArray(adminState.updates) ? adminState.updates : [];
}

async function setUpdates(updates) {
  if (!supabaseApi) {
    adminState.updates = Array.isArray(updates) ? updates : [];
    return;
  }

  adminState.updates = Array.isArray(updates) ? updates : [];
  const existing = await supabaseApi.listUpdates();
  const existingIds = new Set(existing.map((item) => item.id));
  const nextIds = new Set(adminState.updates.map((item) => item.id));

  await Promise.all(
    adminState.updates.map((item) => supabaseApi.saveUpdate(item))
  );

  await Promise.all(
    [...existingIds].filter((id) => !nextIds.has(id)).map((id) => supabaseApi.deleteUpdate(id))
  );
}

function getEvents() {
  return Array.isArray(adminState.events) ? adminState.events : [];
}

async function setEvents(events) {
  if (!supabaseApi) {
    adminState.events = Array.isArray(events) ? events : [];
    return;
  }

  adminState.events = Array.isArray(events) ? events : [];
  const existing = await supabaseApi.listEvents();
  const existingIds = new Set(existing.map((item) => item.id));
  const nextIds = new Set(adminState.events.map((item) => item.id));

  await Promise.all(
    adminState.events.map((item) => supabaseApi.saveEvent(item))
  );

  await Promise.all(
    [...existingIds].filter((id) => !nextIds.has(id)).map((id) => supabaseApi.deleteEvent(id))
  );
}

function getPreviousServices() {
  return Array.isArray(adminState.previousServices) ? adminState.previousServices : [];
}

async function setPreviousServices(services) {
  if (!supabaseApi) {
    adminState.previousServices = Array.isArray(services) ? services : [];
    return;
  }

  adminState.previousServices = Array.isArray(services) ? services : [];
  const existing = await supabaseApi.listPreviousServices();
  const existingIds = new Set(existing.map((item) => item.id));
  const nextIds = new Set(adminState.previousServices.map((item) => item.id));

  await Promise.all(
    adminState.previousServices.map((item) => supabaseApi.savePreviousService(item))
  );

  await Promise.all(
    [...existingIds].filter((id) => !nextIds.has(id)).map((id) => supabaseApi.deletePreviousService(id))
  );
}

function getLiveLinks() {
  return Array.isArray(adminState.liveLinks) ? adminState.liveLinks : [];
}

async function setLiveLinks(links) {
  if (!supabaseApi) {
    adminState.liveLinks = Array.isArray(links) ? links : [];
    return;
  }

  adminState.liveLinks = Array.isArray(links) ? links : [];
  const existing = await supabaseApi.listLiveLinks();
  const existingIds = new Set(existing.map((item) => item.id));
  const nextIds = new Set(adminState.liveLinks.map((item) => item.id));

  await Promise.all(
    adminState.liveLinks.map((item) => supabaseApi.saveLiveLink(item))
  );

  await Promise.all(
    [...existingIds].filter((id) => !nextIds.has(id)).map((id) => supabaseApi.deleteLiveLink(id))
  );
}

async function removeStorage() {
  adminState.liveLinks = [];
  if (supabaseApi) {
    await supabaseApi.clearLiveLinks();
  }
}

function getProfiles() {
  return adminState.profiles && typeof adminState.profiles === "object" ? adminState.profiles : {};
}

async function setProfiles(profiles) {
  if (!supabaseApi) {
    adminState.profiles = profiles && typeof profiles === "object" ? profiles : {};
    return;
  }

  adminState.profiles = profiles && typeof profiles === "object" ? profiles : {};
  const existing = await supabaseApi.listLeadershipProfiles();
  const existingIds = new Set(Object.keys(existing));
  const nextIds = new Set(Object.keys(adminState.profiles));

  await Promise.all(
    Object.entries(adminState.profiles).map(([id, item]) =>
      supabaseApi.saveLeadershipProfile({ ...item, id })
    )
  );

  await Promise.all(
    [...existingIds].filter((id) => !nextIds.has(id)).map((id) => supabaseApi.deleteLeadershipProfile(id))
  );
}

function setUpdateFormMode(isEditing) {
  if (!updateFormTitle || !updateSubmitBtn || !cancelEditBtn) {
    return;
  }

  updateFormTitle.textContent = isEditing ? "Edit Update" : "Create Update";
  updateSubmitBtn.textContent = isEditing ? "Update Post" : "Publish Update";
  cancelEditBtn.classList.toggle("hidden", !isEditing);
}

function resetUpdateForm() {
  editingUpdateId = null;
  if (form) {
    form.reset();
  }
  setUpdateFormMode(false);
}

function setEventFormMode(isEditing) {
  if (!eventFormTitle || !eventSubmitBtn || !cancelEventEditBtn) {
    return;
  }

  eventFormTitle.textContent = isEditing ? "Edit Upcoming Event" : "Create Upcoming Event";
  eventSubmitBtn.textContent = isEditing ? "Update Event" : "Add Event";
  cancelEventEditBtn.classList.toggle("hidden", !isEditing);
}

function resetEventForm() {
  editingEventId = null;
  if (eventForm) {
    eventForm.reset();
  }
  setEventFormMode(false);
}

function setPreviousServiceFormMode(isEditing) {
  if (!previousServiceSubmitBtn || !cancelPreviousServiceEditBtn) {
    return;
  }

  previousServiceSubmitBtn.textContent = isEditing ? "Update Service" : "Add Service";
  cancelPreviousServiceEditBtn.classList.toggle("hidden", !isEditing);
}

function resetPreviousServiceForm() {
  editingPreviousServiceId = null;
  if (previousServiceForm) {
    previousServiceForm.reset();
  }
  setPreviousServiceFormMode(false);
}

function buildUpdateMeta(update) {
  return [update.date || "", update.time || "", update.location || ""].filter(Boolean).join(" • ");
}

function renderUpdates() {
  if (!list || !empty) {
    return;
  }

  const updates = getUpdates()
    .slice()
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

  list.innerHTML = "";
  empty.classList.toggle("hidden", updates.length > 0);

  updates.forEach((update) => {
    const card = document.createElement("article");
    card.className = "admin-card";

    const title = document.createElement("h3");
    title.textContent = update.title || "Untitled Update";

    const body = document.createElement("p");
    body.textContent = update.description || "";

    const meta = document.createElement("div");
    meta.className = "admin-meta";
    const metaText = buildUpdateMeta(update);
    if (metaText) {
      const span = document.createElement("span");
      span.textContent = metaText;
      meta.appendChild(span);
    }

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.dataset.id = update.id;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.id = update.id;

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    card.appendChild(title);
    card.appendChild(body);
    if (meta.childElementCount > 0) {
      card.appendChild(meta);
    }
    card.appendChild(actions);

    list.appendChild(card);
  });
}

function renderAdminEvents() {
  if (!adminEventsList || !eventsEmpty) {
    return;
  }

  const events = getEvents()
    .slice()
    .sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));

  adminEventsList.innerHTML = "";
  eventsEmpty.classList.toggle("hidden", events.length > 0);

  events.forEach((eventItem) => {
    const card = document.createElement("article");
    card.className = "admin-card";

    const title = document.createElement("h3");
    title.textContent = eventItem.title || "Untitled Event";

    const body = document.createElement("p");
    body.textContent = eventItem.description || "";

    const meta = document.createElement("div");
    meta.className = "admin-meta";
    [eventItem.dateLabel, eventItem.timeRange, eventItem.location, `Theme: ${eventItem.theme || "gold"}`]
      .filter(Boolean)
      .forEach((text) => {
        const span = document.createElement("span");
        span.textContent = text;
        meta.appendChild(span);
      });

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.dataset.id = eventItem.id;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.id = eventItem.id;

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(meta);
    card.appendChild(actions);

    adminEventsList.appendChild(card);
  });
}

function renderLiveStatus() {
  if (!liveStatus) {
    return;
  }

  const links = getLiveLinks();
  const isActive = links.length > 0;

  if (isActive) {
    liveStatus.textContent = `Status: LIVE NOW (${links.length} link${links.length > 1 ? "s" : ""} active)`;
    liveStatus.classList.add("active");
    return;
  }

  liveStatus.textContent = "Status: COMING SOON";
  liveStatus.classList.remove("active");
}

function renderLiveLinksAdminList() {
  if (!liveLinksAdminList || !liveLinksEmpty) {
    return;
  }

  const links = getLiveLinks();
  liveLinksAdminList.innerHTML = "";
  liveLinksEmpty.classList.toggle("hidden", links.length > 0);

  links.forEach((entry, index) => {
    const card = document.createElement("article");
    card.className = "admin-card";

    const title = document.createElement("h3");
    title.textContent = `Link ${index + 1}: ${entry.label || `Link ${index + 1}`}`;

    const body = document.createElement("p");
    body.textContent = entry.url;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Remove";
    deleteBtn.dataset.id = entry.id;

    actions.appendChild(deleteBtn);
    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(actions);

    liveLinksAdminList.appendChild(card);
  });
}

function formatPreviousServiceDate(value) {
  if (!value) {
    return "Date not set";
  }

  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function renderPreviousServicesAdminList() {
  if (!adminPreviousServicesList || !adminPreviousServicesEmpty) {
    return;
  }

  const services = getPreviousServices()
    .slice()
    .sort((a, b) => new Date(b.serviceDate || b.createdAt || 0) - new Date(a.serviceDate || a.createdAt || 0));

  adminPreviousServicesList.innerHTML = "";
  adminPreviousServicesEmpty.classList.toggle("hidden", services.length > 0);

  services.forEach((service) => {
    const card = document.createElement("article");
    card.className = "admin-card";

    const title = document.createElement("h3");
    title.textContent = service.title || "Untitled Service";

    const body = document.createElement("p");
    body.textContent = service.url || "";

    const meta = document.createElement("div");
    meta.className = "admin-meta";

    const dateSpan = document.createElement("span");
    dateSpan.textContent = `Date: ${formatPreviousServiceDate(service.serviceDate)}`;
    meta.appendChild(dateSpan);

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.dataset.id = service.id;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.id = service.id;

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(meta);
    card.appendChild(actions);

    adminPreviousServicesList.appendChild(card);
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(new Error("Unable to read file."));
    reader.readAsDataURL(file);
  });
}

async function saveLeadershipImage(profileId, file) {
  if (!file) {
    return {
      src: "",
      viaStorage: false,
      fellBackToInline: false
    };
  }

  if (supabaseApi && typeof supabaseApi.uploadLeadershipImage === "function") {
    try {
      const uploaded = await supabaseApi.uploadLeadershipImage(profileId, file);
      if (uploaded && uploaded.url) {
        return {
          src: uploaded.url,
          viaStorage: true,
          fellBackToInline: false
        };
      }
    } catch (error) {
      console.error("Supabase Storage upload failed. Falling back to inline image storage.", error);
    }
  }

  return {
    src: await readFileAsDataUrl(file),
    viaStorage: false,
    fellBackToInline: true
  };
}

async function removeStoredLeadershipImage(imageSrc) {
  if (!imageSrc || !supabaseApi || typeof supabaseApi.deleteLeadershipImageByUrl !== "function") {
    return;
  }

  try {
    await supabaseApi.deleteLeadershipImageByUrl(imageSrc);
  } catch (error) {
    console.error("Could not remove leadership image from Supabase Storage.", error);
  }
}

function setPreview(src) {
  if (!leadershipPreview) {
    return;
  }

  if (!src) {
    leadershipPreview.hidden = true;
    leadershipPreview.removeAttribute("src");
    return;
  }

  leadershipPreview.src = src;
  leadershipPreview.hidden = false;
}

function getProfileLabel(profileId, profile) {
  if (PROFILE_LABELS[profileId]) {
    return PROFILE_LABELS[profileId];
  }

  if (profile && profile.name) {
    return `Custom Executive: ${profile.name}`;
  }

  return "Custom Executive";
}

function ensureProfileOption(profileId, label) {
  if (!profileSelect) {
    return;
  }

  let option = Array.from(profileSelect.options).find((item) => item.value === profileId);
  if (!option) {
    option = document.createElement("option");
    option.value = profileId;
    profileSelect.appendChild(option);
  }

  option.textContent = label;
}

function removeProfileOption(profileId) {
  if (!profileSelect || PROFILE_LABELS[profileId]) {
    return;
  }

  const option = Array.from(profileSelect.options).find((item) => item.value === profileId);
  if (option) {
    option.remove();
  }
}

function syncCustomProfileOptions() {
  if (!profileSelect) {
    return;
  }

  const profiles = getProfiles();

  Array.from(profileSelect.options).forEach((option) => {
    if (isCustomExecutiveId(option.value) && !profiles[option.value]) {
      option.remove();
    }
  });

  Object.entries(profiles).forEach(([id, profile]) => {
    if (isCustomExecutiveId(id)) {
      ensureProfileOption(id, getProfileLabel(id, profile));
    }
  });
}

function populateLeadershipForm(profileId) {
  if (!profileSelect) {
    return;
  }

  const profiles = getProfiles();
  const profile = profiles[profileId] || {};

  ensureProfileOption(profileId, getProfileLabel(profileId, profile));
  profileSelect.value = profileId;

  leadRole.value = profile.role || "";
  leadName.value = profile.name || "";
  leadBio.value = profile.bio || "";
  leadVerse.value = profile.verse || "";
  leadImage.value = "";

  setPreview(profile.imageDataUrl || "");
}

function renderLeadershipList() {
  if (!leadershipList || !leadershipEmpty) {
    return;
  }

  const profiles = getProfiles();
  leadershipList.innerHTML = "";

  const entries = Object.entries(profiles)
    .filter(([, profile]) => profile && typeof profile === "object")
    .sort((a, b) => {
      const aStatic = PROFILE_LABELS[a[0]] ? 0 : 1;
      const bStatic = PROFILE_LABELS[b[0]] ? 0 : 1;
      if (aStatic !== bStatic) {
        return aStatic - bStatic;
      }
      return getProfileLabel(a[0], a[1]).localeCompare(getProfileLabel(b[0], b[1]));
    });

  leadershipEmpty.classList.toggle("hidden", entries.length > 0);

  entries.forEach(([id, profile]) => {
    const item = document.createElement("article");
    item.className = "leadership-item";

    const title = document.createElement("h4");
    title.className = "leadership-item-title";
    title.textContent = getProfileLabel(id, profile);

    const meta = document.createElement("p");
    meta.className = "leadership-item-meta";
    meta.textContent = `${profile.role || "Role not set"} • ${profile.name || "Name not set"}`;

    const actions = document.createElement("div");
    actions.className = "leadership-item-actions";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "profile-edit-btn";
    editBtn.textContent = "Edit";
    editBtn.dataset.profileId = id;

    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.className = "profile-clear-btn";
    clearBtn.textContent = "Clear";
    clearBtn.dataset.profileId = id;

    actions.appendChild(editBtn);
    actions.appendChild(clearBtn);

    item.appendChild(title);
    item.appendChild(meta);
    item.appendChild(actions);

    leadershipList.appendChild(item);
  });
}

function initAdminLeadershipDropdown() {
  const triggers = document.querySelectorAll(".admin-dropdown-trigger[data-admin-dropdown-target]");
  triggers.forEach((trigger) => {
    const targetId = trigger.getAttribute("data-admin-dropdown-target");
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

function openAdminLeadershipDropdown() {
  openAdminDropdown("admin-leadership-toggle", "admin-leadership-content");
}

function openAdminDropdown(triggerId, contentId) {
  const trigger = document.getElementById(triggerId);
  const content = document.getElementById(contentId);
  if (!trigger || !content) {
    return;
  }

  trigger.setAttribute("aria-expanded", "true");
  content.hidden = false;

  const icon = trigger.querySelector(".dropdown-icon");
  if (icon) {
    icon.textContent = "-";
  }
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = form.title.value.trim();
    const description = form.description.value.trim();
    const date = form.date.value.trim();
    const time = form.time.value.trim();
    const location = form.location.value.trim();

    if (!title || !description) {
      message.textContent = "Title and description are required.";
      return;
    }

    const updates = getUpdates();

    if (editingUpdateId) {
      const index = updates.findIndex((item) => item.id === editingUpdateId);
      if (index >= 0) {
        updates[index] = {
          ...updates[index],
          title,
          description,
          date,
          time,
          location,
          updatedAt: new Date().toISOString()
        };

        await setUpdates(updates);
        message.textContent = "Update edited successfully.";
      }

      resetUpdateForm();
      renderUpdates();
      return;
    }

    updates.unshift({
      id: generateId("update"),
      title,
      description,
      date,
      time,
      location,
      createdAt: new Date().toISOString()
    });

    await setUpdates(updates);
    resetUpdateForm();
    message.textContent = "Update published successfully.";
    renderUpdates();
  });
}

if (cancelEditBtn) {
  cancelEditBtn.addEventListener("click", () => {
    resetUpdateForm();
    message.textContent = "Edit cancelled.";
  });
}

if (list) {
  list.addEventListener("click", async (event) => {
    const editButton = event.target.closest(".edit-btn");
    if (editButton) {
      const updates = getUpdates();
      const update = updates.find((item) => item.id === editButton.dataset.id);
      if (!update) {
        return;
      }

      editingUpdateId = update.id;
      form.title.value = update.title || "";
      form.description.value = update.description || "";
      form.date.value = update.date || "";
      form.time.value = update.time || "";
      form.location.value = update.location || "";

      setUpdateFormMode(true);
      message.textContent = "Editing selected post.";
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const deleteButton = event.target.closest(".delete-btn");
    if (!deleteButton) {
      return;
    }

    const updates = getUpdates().filter((item) => item.id !== deleteButton.dataset.id);
    await setUpdates(updates);

    if (editingUpdateId === deleteButton.dataset.id) {
      resetUpdateForm();
    }

    message.textContent = "Update deleted.";
    renderUpdates();
  });
}

if (clearAllBtn) {
  clearAllBtn.addEventListener("click", async () => {
    const confirmed = window.confirm("Delete all updates?");
    if (!confirmed) {
      return;
    }

    await setUpdates([]);
    resetUpdateForm();
    message.textContent = "All updates cleared.";
    renderUpdates();
  });
}

if (eventForm) {
  eventForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("event-title").value.trim();
    const description = document.getElementById("event-description").value.trim();
    const dateLabel = document.getElementById("event-date-label").value.trim();
    const timeRange = document.getElementById("event-time-range").value.trim();
    const location = document.getElementById("event-location").value.trim();
    const theme = document.getElementById("event-theme").value;

    if (!title || !description || !dateLabel || !timeRange || !location) {
      eventMessage.textContent = "All event fields are required.";
      return;
    }

    const events = getEvents();

    if (editingEventId) {
      const index = events.findIndex((item) => item.id === editingEventId);
      if (index >= 0) {
        events[index] = {
          ...events[index],
          title,
          description,
          dateLabel,
          timeRange,
          location,
          theme,
          updatedAt: new Date().toISOString()
        };

        await setEvents(events);
        eventMessage.textContent = "Event edited successfully.";
        openAdminDropdown("admin-events-toggle", "admin-events-content");
      }

      resetEventForm();
      renderAdminEvents();
      return;
    }

    events.push({
      id: generateId("event"),
      title,
      description,
      dateLabel,
      timeRange,
      location,
      theme,
      createdAt: new Date().toISOString()
    });

    await setEvents(events);
    resetEventForm();
    eventMessage.textContent = "Event added successfully.";
    renderAdminEvents();
    openAdminDropdown("admin-events-toggle", "admin-events-content");
  });
}

if (cancelEventEditBtn) {
  cancelEventEditBtn.addEventListener("click", () => {
    resetEventForm();
    eventMessage.textContent = "Event edit cancelled.";
  });
}

if (adminEventsList) {
  adminEventsList.addEventListener("click", async (event) => {
    const editButton = event.target.closest(".edit-btn");
    if (editButton) {
      const events = getEvents();
      const current = events.find((item) => item.id === editButton.dataset.id);
      if (!current) {
        return;
      }

      editingEventId = current.id;
      document.getElementById("event-title").value = current.title || "";
      document.getElementById("event-description").value = current.description || "";
      document.getElementById("event-date-label").value = current.dateLabel || "";
      document.getElementById("event-time-range").value = current.timeRange || "";
      document.getElementById("event-location").value = current.location || "";
      document.getElementById("event-theme").value = current.theme || "gold";

      setEventFormMode(true);
      eventMessage.textContent = "Editing selected event.";
      openAdminDropdown("admin-events-toggle", "admin-events-content");
      eventForm.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const deleteButton = event.target.closest(".delete-btn");
    if (!deleteButton) {
      return;
    }

    const filtered = getEvents().filter((item) => item.id !== deleteButton.dataset.id);
    await setEvents(filtered);

    if (editingEventId === deleteButton.dataset.id) {
      resetEventForm();
    }

    eventMessage.textContent = "Event deleted.";
    renderAdminEvents();
    openAdminDropdown("admin-events-toggle", "admin-events-content");
  });
}

if (liveForm) {
  liveForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const label = liveLabel ? liveLabel.value.trim() : "";
    const url = liveUrl.value.trim();
    if (!url) {
      liveMessage.textContent = "Please enter a live stream URL.";
      return;
    }

    const links = getLiveLinks();
    links.push({
      id: generateId("live_link"),
      label: label || `Link ${links.length + 1}`,
      url
    });
    await setLiveLinks(links);

    if (liveLabel) {
      liveLabel.value = "";
    }
    liveUrl.value = "";
    liveMessage.textContent = "Live link added.";
    renderLiveStatus();
    renderLiveLinksAdminList();
    openAdminDropdown("admin-live-links-toggle", "admin-live-links-content");
  });
}

if (endLiveBtn) {
  endLiveBtn.addEventListener("click", async () => {
    await removeStorage();
    if (liveLabel) {
      liveLabel.value = "";
    }
    if (liveUrl) {
      liveUrl.value = "";
    }
    liveMessage.textContent = "All live links cleared. Watch Live now shows COMING SOON.";
    renderLiveStatus();
    renderLiveLinksAdminList();
    openAdminDropdown("admin-live-links-toggle", "admin-live-links-content");
  });
}

if (liveLinksAdminList) {
  liveLinksAdminList.addEventListener("click", async (event) => {
    const deleteButton = event.target.closest(".delete-btn");
    if (!deleteButton) {
      return;
    }

    const id = deleteButton.dataset.id;
    const links = getLiveLinks().filter((entry) => entry.id !== id);

    if (links.length) {
      await setLiveLinks(links);
    } else {
      await removeStorage();
    }

    liveMessage.textContent = "Live link removed.";
    renderLiveStatus();
    renderLiveLinksAdminList();
    openAdminDropdown("admin-live-links-toggle", "admin-live-links-content");
  });
}

if (previousServiceForm) {
  previousServiceForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = previousServiceTitle.value.trim();
    const serviceDate = previousServiceDate.value.trim();
    const url = previousServiceUrl.value.trim();

    if (!title || !serviceDate || !url) {
      previousServiceMessage.textContent = "Title, date, and link are required.";
      return;
    }

    const services = getPreviousServices();

    if (editingPreviousServiceId) {
      const index = services.findIndex((item) => item.id === editingPreviousServiceId);
      if (index >= 0) {
        services[index] = {
          ...services[index],
          title,
          serviceDate,
          url,
          updatedAt: new Date().toISOString()
        };
        await setPreviousServices(services);
        previousServiceMessage.textContent = "Previous service updated.";
      }

      resetPreviousServiceForm();
      renderPreviousServicesAdminList();
      openAdminDropdown("admin-previous-services-toggle", "admin-previous-services-content");
      return;
    }

    services.push({
      id: generateId("previous_service"),
      title,
      serviceDate,
      url,
      createdAt: new Date().toISOString()
    });

    await setPreviousServices(services);
    resetPreviousServiceForm();
    previousServiceMessage.textContent = "Previous service posted.";
    renderPreviousServicesAdminList();
    openAdminDropdown("admin-previous-services-toggle", "admin-previous-services-content");
  });
}

if (cancelPreviousServiceEditBtn) {
  cancelPreviousServiceEditBtn.addEventListener("click", () => {
    resetPreviousServiceForm();
    previousServiceMessage.textContent = "Edit cancelled.";
  });
}

if (adminPreviousServicesList) {
  adminPreviousServicesList.addEventListener("click", async (event) => {
    const editButton = event.target.closest(".edit-btn");
    if (editButton) {
      const services = getPreviousServices();
      const current = services.find((item) => item.id === editButton.dataset.id);
      if (!current) {
        return;
      }

      editingPreviousServiceId = current.id;
      previousServiceTitle.value = current.title || "";
      previousServiceDate.value = current.serviceDate || "";
      previousServiceUrl.value = current.url || "";
      setPreviousServiceFormMode(true);
      previousServiceMessage.textContent = "Editing selected previous service.";
      openAdminDropdown("admin-previous-services-toggle", "admin-previous-services-content");
      previousServiceForm.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const deleteButton = event.target.closest(".delete-btn");
    if (!deleteButton) {
      return;
    }

    const filtered = getPreviousServices().filter((item) => item.id !== deleteButton.dataset.id);
    await setPreviousServices(filtered);

    if (editingPreviousServiceId === deleteButton.dataset.id) {
      resetPreviousServiceForm();
    }

    previousServiceMessage.textContent = "Previous service deleted.";
    renderPreviousServicesAdminList();
    openAdminDropdown("admin-previous-services-toggle", "admin-previous-services-content");
  });
}

if (leadershipForm) {
  profileSelect.addEventListener("change", () => {
    populateLeadershipForm(profileSelect.value);
    leadershipMessage.textContent = "";
  });

  leadImage.addEventListener("change", async () => {
    const file = leadImage.files && leadImage.files[0];
    if (!file) {
      populateLeadershipForm(profileSelect.value);
      return;
    }

    try {
      const dataUrl = await readFileAsDataUrl(file);
      setPreview(dataUrl);
    } catch (error) {
      leadershipMessage.textContent = "Could not read the selected image.";
    }
  });

  if (clearProfileImageBtn) {
    clearProfileImageBtn.addEventListener("click", async () => {
      const id = profileSelect.value;
      const profiles = getProfiles();
      const current = profiles[id] || {};
      await removeStoredLeadershipImage(current.imageDataUrl || "");

      profiles[id] = {
        ...current,
        kind: current.kind || (isCustomExecutiveId(id) ? "executive_custom" : "static"),
        imageDataUrl: ""
      };

      await setProfiles(profiles);
      populateLeadershipForm(id);
      renderLeadershipList();
      leadershipMessage.textContent = "Saved image removed.";
    });
  }

  leadershipForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = profileSelect.value;
    const profiles = getProfiles();
    const existing = profiles[id] || {};

    let imageDataUrl = existing.imageDataUrl || "";
    let imageSavedToBucket = false;
    let imageFellBackToInline = false;

    try {
      const file = leadImage.files && leadImage.files[0];
      if (file) {
        const uploadedImage = await saveLeadershipImage(id, file);
        imageDataUrl = uploadedImage.src;
        imageSavedToBucket = uploadedImage.viaStorage;
        imageFellBackToInline = uploadedImage.fellBackToInline;

        if (existing.imageDataUrl && existing.imageDataUrl !== imageDataUrl) {
          await removeStoredLeadershipImage(existing.imageDataUrl);
        }
      }

      profiles[id] = {
        kind: existing.kind || (isCustomExecutiveId(id) ? "executive_custom" : "static"),
        createdAt: existing.createdAt || new Date().toISOString(),
        role: leadRole.value.trim(),
        name: leadName.value.trim(),
        bio: leadBio.value.trim(),
        verse: leadVerse.value.trim(),
        imageDataUrl,
        imageAlt: leadName.value.trim() || existing.imageAlt || "Leadership profile"
      };

      await setProfiles(profiles);
      ensureProfileOption(id, getProfileLabel(id, profiles[id]));
      leadershipMessage.textContent = imageSavedToBucket
        ? "Leadership profile saved. Image uploaded to Supabase Storage."
        : imageFellBackToInline
          ? "Leadership profile saved. The image is working, but it fell back to inline storage because the Supabase bucket is not ready yet."
          : "Leadership profile saved.";
      populateLeadershipForm(id);
      renderLeadershipList();
    } catch (error) {
      leadershipMessage.textContent = "Failed to save leadership profile.";
    }
  });

  leadershipList.addEventListener("click", async (event) => {
    const editButton = event.target.closest(".profile-edit-btn");
    if (editButton) {
      const id = editButton.dataset.profileId;
      openAdminLeadershipDropdown();
      populateLeadershipForm(id);
      leadershipMessage.textContent = "Editing selected leadership profile.";
      leadershipForm.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const clearButton = event.target.closest(".profile-clear-btn");
    if (!clearButton) {
      return;
    }

    const id = clearButton.dataset.profileId;
    const profiles = getProfiles();
    const current = profiles[id] || {};
    await removeStoredLeadershipImage(current.imageDataUrl || "");
    delete profiles[id];
    await setProfiles(profiles);

    if (isCustomExecutiveId(id)) {
      removeProfileOption(id);
    }

    syncCustomProfileOptions();
    renderLeadershipList();

    const currentId = profileSelect.value;
    const profilesAfterDelete = getProfiles();
    const hasCurrent =
      !!PROFILE_LABELS[currentId] || !!profilesAfterDelete[currentId];
    populateLeadershipForm(hasCurrent ? currentId : "senior_pastor");
    leadershipMessage.textContent = "Leadership profile cleared.";
  });

  syncCustomProfileOptions();
  populateLeadershipForm(profileSelect.value);
  renderLeadershipList();
}

if (newExecutiveForm) {
  newExecutiveForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const role = newExecutiveRole.value.trim();
    const name = newExecutiveName.value.trim();
    const bio = newExecutiveBio.value.trim();
    const verse = newExecutiveVerse.value.trim();

    if (!role || !name || !bio) {
      newExecutiveMessage.textContent = "Role, name, and bio are required.";
      return;
    }

    const id = generateId("executive_custom");
    const profiles = getProfiles();

    let imageDataUrl = "";
    let imageSavedToBucket = false;
    let imageFellBackToInline = false;
    try {
      const file = newExecutiveImage.files && newExecutiveImage.files[0];
      if (file) {
        const uploadedImage = await saveLeadershipImage(id, file);
        imageDataUrl = uploadedImage.src;
        imageSavedToBucket = uploadedImage.viaStorage;
        imageFellBackToInline = uploadedImage.fellBackToInline;
      }

      profiles[id] = {
        kind: "executive_custom",
        createdAt: new Date().toISOString(),
        role,
        name,
        bio,
        verse,
        imageDataUrl,
        imageAlt: name
      };

      await setProfiles(profiles);
      ensureProfileOption(id, getProfileLabel(id, profiles[id]));
      syncCustomProfileOptions();
      renderLeadershipList();
      populateLeadershipForm(id);
      newExecutiveForm.reset();
      newExecutiveMessage.textContent = imageSavedToBucket
        ? "New executive created successfully. Image uploaded to Supabase Storage."
        : imageFellBackToInline
          ? "New executive created successfully. The image fell back to inline storage because the Supabase bucket is not ready yet."
          : "New executive created successfully.";
    } catch (error) {
      newExecutiveMessage.textContent = "Failed to create executive.";
    }
  });
}

function rerenderAdmin() {
  renderUpdates();
  renderAdminEvents();
  renderLiveStatus();
  renderLiveLinksAdminList();
  renderPreviousServicesAdminList();
  syncCustomProfileOptions();
  populateLeadershipForm(profileSelect.value || "senior_pastor");
  renderLeadershipList();

  const initialLiveLinks = getLiveLinks();
  if (liveUrl) {
    liveUrl.value = initialLiveLinks.length > 0 ? initialLiveLinks[0].url : "";
  }
  if (liveLabel) {
    liveLabel.value = initialLiveLinks.length > 0 ? initialLiveLinks[0].label : "";
  }
}

async function initializeAdmin() {
  await loadAdminData();
  setUpdateFormMode(false);
  setEventFormMode(false);
  setPreviousServiceFormMode(false);
  rerenderAdmin();
  initAdminLeadershipDropdown();

  if (supabaseApi) {
    supabaseApi.subscribeToChanges(async () => {
      await loadAdminData();
      rerenderAdmin();
    });
  }
}

initializeAdmin();






(function () {
  const STORAGE_KEYS = {
    updates: "grca_updates",
    events: "grca_events",
    previousServices: "grca_previous_services",
    liveLinks: "grca_live_links",
    leadershipProfiles: "grca_leadership_profiles",
    siteContent: "grca_site_content"
  };

  function readJson(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      console.error(error);
      return fallback;
    }
  }

  function writeJson(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("grca-data-change"));
  }

  function asArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function asObject(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  }

  function upsertById(items, item) {
    const list = asArray(items);
    const index = list.findIndex(function (entry) {
      return entry && entry.id === item.id;
    });

    if (index >= 0) {
      list[index] = item;
      return list;
    }

    return list.concat(item);
  }

  const api = {
    async listUpdates() {
      return asArray(readJson(STORAGE_KEYS.updates, []));
    },
    async saveUpdate(item) {
      const next = upsertById(readJson(STORAGE_KEYS.updates, []), item);
      writeJson(STORAGE_KEYS.updates, next);
      return item;
    },
    async deleteUpdate(id) {
      const next = asArray(readJson(STORAGE_KEYS.updates, [])).filter(function (item) {
        return item.id !== id;
      });
      writeJson(STORAGE_KEYS.updates, next);
    },
    async clearUpdates() {
      writeJson(STORAGE_KEYS.updates, []);
    },

    async listEvents() {
      return asArray(readJson(STORAGE_KEYS.events, []));
    },
    async saveEvent(item) {
      const next = upsertById(readJson(STORAGE_KEYS.events, []), item);
      writeJson(STORAGE_KEYS.events, next);
      return item;
    },
    async saveEvents(items) {
      writeJson(STORAGE_KEYS.events, asArray(items));
      return asArray(items);
    },
    async deleteEvent(id) {
      const next = asArray(readJson(STORAGE_KEYS.events, [])).filter(function (item) {
        return item.id !== id;
      });
      writeJson(STORAGE_KEYS.events, next);
    },

    async listPreviousServices() {
      return asArray(readJson(STORAGE_KEYS.previousServices, []));
    },
    async savePreviousService(item) {
      const next = upsertById(readJson(STORAGE_KEYS.previousServices, []), item);
      writeJson(STORAGE_KEYS.previousServices, next);
      return item;
    },
    async deletePreviousService(id) {
      const next = asArray(readJson(STORAGE_KEYS.previousServices, [])).filter(function (item) {
        return item.id !== id;
      });
      writeJson(STORAGE_KEYS.previousServices, next);
    },

    async listLiveLinks() {
      return asArray(readJson(STORAGE_KEYS.liveLinks, []));
    },
    async saveLiveLink(item) {
      const next = upsertById(readJson(STORAGE_KEYS.liveLinks, []), item);
      writeJson(STORAGE_KEYS.liveLinks, next);
      return item;
    },
    async deleteLiveLink(id) {
      const next = asArray(readJson(STORAGE_KEYS.liveLinks, [])).filter(function (item) {
        return item.id !== id;
      });
      writeJson(STORAGE_KEYS.liveLinks, next);
    },
    async clearLiveLinks() {
      writeJson(STORAGE_KEYS.liveLinks, []);
    },

    async listLeadershipProfiles() {
      return asObject(readJson(STORAGE_KEYS.leadershipProfiles, {}));
    },
    async saveLeadershipProfile(item) {
      const next = asObject(readJson(STORAGE_KEYS.leadershipProfiles, {}));
      next[item.id] = item;
      writeJson(STORAGE_KEYS.leadershipProfiles, next);
      return item;
    },
    async deleteLeadershipProfile(id) {
      const next = asObject(readJson(STORAGE_KEYS.leadershipProfiles, {}));
      delete next[id];
      writeJson(STORAGE_KEYS.leadershipProfiles, next);
    },

    async getSiteContent() {
      return asObject(readJson(STORAGE_KEYS.siteContent, {}));
    },
    async saveSiteContent(content) {
      const next = asObject(content);
      writeJson(STORAGE_KEYS.siteContent, next);
      return next;
    },

    subscribeToChanges(callback) {
      function handleChange(event) {
        if (!event || !event.key || Object.values(STORAGE_KEYS).indexOf(event.key) >= 0) {
          callback();
        }
      }

      function handleLocalChange() {
        callback();
      }

      window.addEventListener("storage", handleChange);
      window.addEventListener("grca-data-change", handleLocalChange);

      return function unsubscribe() {
        window.removeEventListener("storage", handleChange);
        window.removeEventListener("grca-data-change", handleLocalChange);
      };
    }
  };

  window.GRCA_DATA = {
    enabled: true,
    api: api
  };
})();

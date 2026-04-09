(function () {
  const SUPABASE_URL = "https://ggzlpinfouybgfwuhmvm.supabase.co";
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnemxwaW5mb3V5Ymdmd3VobXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTg4ODgsImV4cCI6MjA5MTA3NDg4OH0.VntupvwRSYBCNXnw27apiXt5f1fVPoX1ntsH08s2sD8";

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.error("Supabase client library is not loaded.");
    window.GRCA_SUPABASE = { enabled: false, api: null };
    return;
  }

  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  });
  const LEADERSHIP_BUCKET = "leadership-images";

  function unwrap(result, fallback) {
    if (result.error) {
      console.error(result.error);
      return fallback;
    }

    return result.data ?? fallback;
  }

  function sanitizeFileName(value) {
    return String(value || "image")
      .toLowerCase()
      .replace(/[^a-z0-9._-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "image";
  }

  function getFileExtension(file) {
    const fromName = typeof file.name === "string" ? file.name.split(".").pop() : "";
    if (fromName && fromName !== file.name) {
      return sanitizeFileName(fromName);
    }

    const mime = typeof file.type === "string" ? file.type.toLowerCase() : "";
    if (mime === "image/jpeg") return "jpg";
    if (mime === "image/png") return "png";
    if (mime === "image/webp") return "webp";
    if (mime === "image/gif") return "gif";

    return "jpg";
  }

  function extractLeadershipStoragePath(imageUrl) {
    if (typeof imageUrl !== "string" || !imageUrl.trim()) {
      return "";
    }

    const publicPrefix = `${SUPABASE_URL}/storage/v1/object/public/${LEADERSHIP_BUCKET}/`;
    if (!imageUrl.startsWith(publicPrefix)) {
      return "";
    }

    return decodeURIComponent(imageUrl.slice(publicPrefix.length).split("?")[0] || "");
  }

  function mapUpdate(row) {
    return {
      id: row.id,
      title: row.title || "",
      description: row.description || "",
      date: row.date || "",
      time: row.time || "",
      location: row.location || "",
      createdAt: row.created_at || "",
      updatedAt: row.updated_at || ""
    };
  }

  function serializeUpdate(item) {
    return {
      id: item.id,
      title: item.title || "",
      description: item.description || "",
      date: item.date || "",
      time: item.time || "",
      location: item.location || "",
      created_at: item.createdAt || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  function mapEvent(row) {
    return {
      id: row.id,
      title: row.title || "",
      description: row.description || "",
      dateLabel: row.date_label || "",
      timeRange: row.time_range || "",
      location: row.location || "",
      theme: row.theme || "gold",
      createdAt: row.created_at || "",
      updatedAt: row.updated_at || ""
    };
  }

  function serializeEvent(item) {
    return {
      id: item.id,
      title: item.title || "",
      description: item.description || "",
      date_label: item.dateLabel || "",
      time_range: item.timeRange || "",
      location: item.location || "",
      theme: item.theme || "gold",
      created_at: item.createdAt || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  function mapPreviousService(row) {
    return {
      id: row.id,
      title: row.title || "",
      serviceDate: row.service_date || "",
      url: row.url || "",
      createdAt: row.created_at || "",
      updatedAt: row.updated_at || ""
    };
  }

  function serializePreviousService(item) {
    return {
      id: item.id,
      title: item.title || "",
      service_date: item.serviceDate || "",
      url: item.url || "",
      created_at: item.createdAt || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  function mapLiveLink(row) {
    return {
      id: row.id,
      label: row.label || "",
      url: row.url || "",
      createdAt: row.created_at || "",
      updatedAt: row.updated_at || ""
    };
  }

  function serializeLiveLink(item) {
    return {
      id: item.id,
      label: item.label || "",
      url: item.url || "",
      created_at: item.createdAt || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  function mapProfile(row) {
    return {
      id: row.id,
      kind: row.kind || "static",
      role: row.role || "",
      name: row.name || "",
      bio: row.bio || "",
      verse: row.verse || "",
      imageDataUrl: row.image_data_url || "",
      imageAlt: row.image_alt || "",
      createdAt: row.created_at || "",
      updatedAt: row.updated_at || ""
    };
  }

  function serializeProfile(item) {
    return {
      id: item.id,
      kind: item.kind || "static",
      role: item.role || "",
      name: item.name || "",
      bio: item.bio || "",
      verse: item.verse || "",
      image_data_url: item.imageDataUrl || "",
      image_alt: item.imageAlt || "",
      created_at: item.createdAt || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }

  const api = {
    async listUpdates() {
      const result = await client.from("updates").select("*").order("created_at", { ascending: false });
      return unwrap(result, []).map(mapUpdate);
    },
    async saveUpdate(item) {
      const result = await client.from("updates").upsert(serializeUpdate(item), { onConflict: "id" }).select().single();
      return result.error ? null : mapUpdate(result.data);
    },
    async deleteUpdate(id) {
      return client.from("updates").delete().eq("id", id);
    },
    async clearUpdates() {
      return client.from("updates").delete().neq("id", "");
    },

    async listEvents() {
      const result = await client.from("events").select("*").order("created_at", { ascending: true });
      return unwrap(result, []).map(mapEvent);
    },
    async saveEvent(item) {
      const result = await client.from("events").upsert(serializeEvent(item), { onConflict: "id" }).select().single();
      return result.error ? null : mapEvent(result.data);
    },
    async saveEvents(items) {
      const payload = items.map(serializeEvent);
      const result = await client.from("events").upsert(payload, { onConflict: "id" }).select();
      return unwrap(result, []).map(mapEvent);
    },
    async deleteEvent(id) {
      return client.from("events").delete().eq("id", id);
    },

    async listPreviousServices() {
      const result = await client.from("previous_services").select("*").order("service_date", { ascending: false });
      return unwrap(result, []).map(mapPreviousService);
    },
    async savePreviousService(item) {
      const result = await client
        .from("previous_services")
        .upsert(serializePreviousService(item), { onConflict: "id" })
        .select()
        .single();
      return result.error ? null : mapPreviousService(result.data);
    },
    async deletePreviousService(id) {
      return client.from("previous_services").delete().eq("id", id);
    },

    async listLiveLinks() {
      const result = await client.from("live_links").select("*").order("created_at", { ascending: true });
      return unwrap(result, []).map(mapLiveLink);
    },
    async saveLiveLink(item) {
      const result = await client.from("live_links").upsert(serializeLiveLink(item), { onConflict: "id" }).select().single();
      return result.error ? null : mapLiveLink(result.data);
    },
    async deleteLiveLink(id) {
      return client.from("live_links").delete().eq("id", id);
    },
    async clearLiveLinks() {
      return client.from("live_links").delete().neq("id", "");
    },

    async listLeadershipProfiles() {
      const result = await client.from("leadership_profiles").select("*").order("created_at", { ascending: true });
      const rows = unwrap(result, []).map(mapProfile);
      return rows.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    },
    async saveLeadershipProfile(item) {
      const result = await client
        .from("leadership_profiles")
        .upsert(serializeProfile(item), { onConflict: "id" })
        .select()
        .single();
      return result.error ? null : mapProfile(result.data);
    },
    async deleteLeadershipProfile(id) {
      return client.from("leadership_profiles").delete().eq("id", id);
    },
    async uploadLeadershipImage(profileId, file) {
      const extension = getFileExtension(file);
      const baseName = sanitizeFileName((file && file.name ? file.name.replace(/\.[^.]+$/, "") : profileId) || profileId);
      const filePath = `${sanitizeFileName(profileId)}/${Date.now()}-${baseName}.${extension}`;
      const result = await client.storage.from(LEADERSHIP_BUCKET).upload(filePath, file, {
        cacheControl: "3600",
        upsert: false
      });

      if (result.error) {
        throw result.error;
      }

      const publicUrlResult = client.storage.from(LEADERSHIP_BUCKET).getPublicUrl(filePath);
      return {
        path: filePath,
        url: publicUrlResult.data && publicUrlResult.data.publicUrl ? publicUrlResult.data.publicUrl : ""
      };
    },
    async deleteLeadershipImageByUrl(imageUrl) {
      const filePath = extractLeadershipStoragePath(imageUrl);
      if (!filePath) {
        return false;
      }

      const result = await client.storage.from(LEADERSHIP_BUCKET).remove([filePath]);
      if (result.error) {
        console.error(result.error);
        return false;
      }

      return true;
    },

    subscribeToChanges(callback) {
      const channel = client
        .channel("grca-site-sync")
        .on("postgres_changes", { event: "*", schema: "public", table: "updates" }, callback)
        .on("postgres_changes", { event: "*", schema: "public", table: "events" }, callback)
        .on("postgres_changes", { event: "*", schema: "public", table: "previous_services" }, callback)
        .on("postgres_changes", { event: "*", schema: "public", table: "live_links" }, callback)
        .on("postgres_changes", { event: "*", schema: "public", table: "leadership_profiles" }, callback)
        .subscribe();

      return function unsubscribe() {
        client.removeChannel(channel);
      };
    }
  };

  window.GRCA_SUPABASE = {
    enabled: true,
    url: SUPABASE_URL,
    anonKey: SUPABASE_ANON_KEY,
    leadershipBucket: LEADERSHIP_BUCKET,
    client,
    api
  };
})();

import { supabase } from "./supabase";
import type {
  AttractionList,
  AttractionDetail,
  PaginatedResponse,
  Category,
  Bookmark,
  Itinerary,
  ItineraryDetail,
  ItineraryStop,
  UserProfile,
  UserPreferences,
  UserStats,
  ChatMessage,
  AISuggestion,
  GeneratedItinerary,
} from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

async function getAuthHeader(): Promise<Record<string, string>> {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const authHeader = await getAuthHeader();
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...authHeader,
      ...options?.headers,
    },
  });

  if (!res.ok) {
    let detail = "";
    try {
      const body = await res.json();
      detail = body.detail ?? JSON.stringify(body);
    } catch {
      detail = await res.text();
    }
    throw new Error(detail || `Request failed with status ${res.status}`);
  }

  // 204 No Content / empty body (e.g. DELETE)
  if (res.status === 204 || res.headers.get("content-length") === "0") {
    return undefined as T;
  }
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as T;
}

export const api = {
  attractions: {
    list(params?: Record<string, string>): Promise<PaginatedResponse<AttractionList>> {
      const qs = params ? `?${new URLSearchParams(params)}` : "";
      return apiFetch(`/attractions/${qs}`);
    },
    detail(id: number | string): Promise<AttractionDetail> {
      return apiFetch(`/attractions/${id}/`);
    },
    categories(): Promise<Category[]> {
      return apiFetch("/attractions/categories/");
    },
  },

  bookmarks: {
    list(): Promise<Bookmark[]> {
      return apiFetch("/bookmarks/");
    },
    add(attractionId: number): Promise<Bookmark> {
      return apiFetch("/bookmarks/", {
        method: "POST",
        body: JSON.stringify({ attraction_id: attractionId }),
      });
    },
    remove(attractionId: number): Promise<void> {
      return apiFetch(`/bookmarks/${attractionId}/`, { method: "DELETE" });
    },
    check(attractionId: number): Promise<{ is_saved: boolean; bookmark_id: number | null }> {
      return apiFetch(`/bookmarks/check/${attractionId}/`);
    },
  },

  itineraries: {
    list(): Promise<Itinerary[]> {
      return apiFetch("/itineraries/");
    },
    detail(id: number | string): Promise<ItineraryDetail> {
      return apiFetch(`/itineraries/${id}/`);
    },
    create(body: Partial<Itinerary>): Promise<ItineraryDetail> {
      return apiFetch("/itineraries/", {
        method: "POST",
        body: JSON.stringify(body),
      });
    },
    update(id: number | string, body: Partial<Itinerary>): Promise<ItineraryDetail> {
      return apiFetch(`/itineraries/${id}/`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
    },
    remove(id: number | string): Promise<void> {
      return apiFetch(`/itineraries/${id}/`, { method: "DELETE" });
    },
    addStop(id: number | string, body: Partial<ItineraryStop>): Promise<ItineraryStop> {
      return apiFetch(`/itineraries/${id}/stops/`, {
        method: "POST",
        body: JSON.stringify(body),
      });
    },
    updateStop(
      id: number | string,
      stopId: number,
      body: Partial<ItineraryStop>,
    ): Promise<ItineraryStop> {
      return apiFetch(`/itineraries/${id}/stops/${stopId}/`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
    },
    removeStop(id: number | string, stopId: number): Promise<void> {
      return apiFetch(`/itineraries/${id}/stops/${stopId}/`, { method: "DELETE" });
    },
    reorderStops(id: number | string, order: number[]): Promise<{ stops: ItineraryStop[] }> {
      return apiFetch(`/itineraries/${id}/stops/reorder/`, {
        method: "POST",
        body: JSON.stringify({ order }),
      });
    },
  },

  ai: {
    chat(
      messages: ChatMessage[],
      context?: Record<string, unknown>,
    ): Promise<{ role: string; content: string }> {
      return apiFetch("/ai/chat/", {
        method: "POST",
        body: JSON.stringify({ messages, context: context ?? {} }),
      });
    },
    generateItinerary(body: {
      destination: string;
      duration_days?: number;
      preferences?: Record<string, unknown>;
    }): Promise<GeneratedItinerary> {
      return apiFetch("/ai/generate-itinerary/", {
        method: "POST",
        body: JSON.stringify(body),
      });
    },
    matchScores(attractionIds: number[]): Promise<{ scores: Record<string, number> }> {
      return apiFetch("/ai/match-scores/", {
        method: "POST",
        body: JSON.stringify({ attraction_ids: attractionIds }),
      });
    },
    suggestions(limit = 5): Promise<{ suggestions: AISuggestion[]; count: number }> {
      return apiFetch(`/ai/suggestions/?limit=${limit}`);
    },
  },

  users: {
    me(): Promise<UserProfile> {
      return apiFetch("/users/me/");
    },
    updateMe(body: Partial<UserProfile>): Promise<UserProfile> {
      return apiFetch("/users/me/", {
        method: "PUT",
        body: JSON.stringify(body),
      });
    },
    deleteMe(): Promise<void> {
      return apiFetch("/users/me/", { method: "DELETE" });
    },
    preferences(): Promise<UserPreferences> {
      return apiFetch("/users/me/preferences/");
    },
    updatePreferences(body: Partial<UserPreferences>): Promise<UserPreferences> {
      return apiFetch("/users/me/preferences/", {
        method: "PUT",
        body: JSON.stringify(body),
      });
    },
    stats(): Promise<UserStats> {
      return apiFetch("/users/me/stats/");
    },
  },
};

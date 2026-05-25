export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  attraction_count?: number;
}

export interface AttractionList {
  id: number;
  name: string;
  slug: string;
  image: string;
  location: string;
  state: string;
  latitude: number | null;
  longitude: number | null;
  category: Category;
  tags: string[];
  rating: number;
  price_display: string;
  budget_level: string;
  is_saved: boolean;
}

export interface OpeningHour {
  day: string;
  time: string;
}

export interface AttractionDetail extends AttractionList {
  description: string;
  latitude: number | null;
  longitude: number | null;
  entry_fee: string;
  fee_subtext: string;
  hours: OpeningHour[];
  accessibility: string;
  ai_best_time: string;
  ai_dont_miss: string;
  is_active: boolean;
  created_at: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  total_pages?: number;
  current_page?: number;
  results: T[];
}

export interface UserPreferences {
  interests: string[];
  budget: string;
  travel_style: string;
  activities: string[];
  time_availability: string;
  transport_modes: string[];
  accessibility_needs: string[];
  notifications_enabled: boolean;
  dark_mode: boolean;
  updated_at?: string;
}

export interface UserProfile {
  id: number;
  supabase_uid: string;
  email: string;
  full_name: string;
  location: string;
  avatar_url: string;
  bio: string;
  preferences: UserPreferences | null;
  created_at: string;
  updated_at: string;
}

export interface UserStats {
  trips_count: number;
  saved_count: number;
  states_visited: string[];
  states_count: number;
}

export interface Bookmark {
  id: number;
  attraction: AttractionList;
  created_at: string;
}

export interface ItineraryStop {
  id: number;
  attraction: number | null;
  attraction_detail: AttractionList | null;
  title: string;
  location: string;
  category: string;
  visit_time: string;
  duration: string;
  estimated_cost: string;
  description: string;
  order: number;
}

export interface Itinerary {
  id: number;
  title: string;
  destination: string;
  duration: string;
  cover_image: string;
  total_budget: string;
  is_public: boolean;
  stops_count: number;
  created_at: string;
  updated_at: string;
}

export interface ItineraryDetail extends Itinerary {
  stops: ItineraryStop[];
}

export interface ChatMessage {
  role: "user" | "assistant" | "model";
  content: string;
}

export interface AISuggestion extends AttractionList {
  match_score: number;
  match_reason: string;
}

export interface GeneratedStop {
  title: string;
  location: string;
  category: string;
  visit_time: string;
  duration: string;
  estimated_cost: string;
  description: string;
  order: number;
}

export interface GeneratedItinerary {
  title: string;
  destination: string;
  duration: string;
  total_budget: string;
  cover_image: string;
  stops: GeneratedStop[];
}

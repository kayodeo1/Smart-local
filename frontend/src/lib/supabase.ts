import { createClient } from "@supabase/supabase-js";

// Fallbacks keep `createClient` from throwing during the build's static
// prerender (e.g. /_not-found) when env vars aren't inlined yet. The real
// NEXT_PUBLIC_* values must be set in Vercel for auth to work at runtime.
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: "pkce",
  },
});

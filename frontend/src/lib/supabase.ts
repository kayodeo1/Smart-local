import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// In the browser (runtime) the env vars MUST be present — fail loudly rather
// than silently degrade. On the server during the build's static prerender
// (no `window`) they may be absent, so we fall back to a NON-routable sentinel:
// `http://localhost` cannot leak auth traffic to an attacker-registerable host
// the way a real-looking domain (e.g. *.supabase.co) could.
if (typeof window !== "undefined" && (!supabaseUrl || !supabaseAnonKey)) {
  throw new Error(
    "Supabase env vars missing at runtime: set NEXT_PUBLIC_SUPABASE_URL and " +
      "NEXT_PUBLIC_SUPABASE_ANON_KEY in the deployment environment.",
  );
}

export const supabase = createClient(
  supabaseUrl ?? "http://localhost",
  supabaseAnonKey ?? "invalid",
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      flowType: "pkce",
    },
  },
);

"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function CallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const next = searchParams.get("next") || "/dashboard";

    async function finish() {
      // With detectSessionInUrl enabled, supabase-js auto-exchanges the OAuth
      // code on load. Give it a moment, then confirm the session exists.
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.replace(next);
        return;
      }

      const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
          listener.subscription.unsubscribe();
          router.replace(next);
        }
      });

      const timeout = setTimeout(() => {
        listener.subscription.unsubscribe();
        setError("Sign-in could not be completed. Please try again.");
        setTimeout(() => router.replace("/login"), 1500);
      }, 6000);

      return () => {
        clearTimeout(timeout);
        listener.subscription.unsubscribe();
      };
    }

    finish();
  }, [router, searchParams]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-on-background gap-4">
      {error ? (
        <p className="font-body-md text-body-md text-error">{error}</p>
      ) : (
        <>
          <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
            progress_activity
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Completing sign-in…
          </p>
        </>
      )}
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-background">
          <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
            progress_activity
          </span>
        </main>
      }
    >
      <CallbackInner />
    </Suspense>
  );
}

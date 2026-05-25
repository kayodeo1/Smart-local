"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";
import { useRequireAuth } from "@/lib/use-require-auth";
import { api } from "@/lib/api";
import type { Itinerary } from "@/lib/types";

const FALLBACK_COVER =
  "https://images.unsplash.com/photo-1620246403639-71409c17084b?w=800&q=80&fit=crop";

export default function ItinerariesPage() {
  const { user, loading } = useRequireAuth();
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    api.itineraries
      .list()
      .then(setItineraries)
      .catch(() => setItineraries([]))
      .finally(() => setDataLoading(false));
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
          progress_activity
        </span>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <div className="fixed inset-0 pattern-overlay-1 pointer-events-none opacity-50 z-0" />
      <Header />

      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-24 md:pb-12 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">
              My Itineraries
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Your personalized travel plans, all in one place.
            </p>
          </div>
          <Link
            href="/ai-planner"
            className="bg-secondary text-on-secondary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-lg shadow-secondary/20"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Create New Itinerary
          </Link>
        </div>

        {dataLoading ? (
          <div className="flex justify-center py-24">
            <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
              progress_activity
            </span>
          </div>
        ) : itineraries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {itineraries.map((it) => (
              <Link
                key={it.id}
                href={`/itineraries/${it.id}`}
                className="group rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    alt={it.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={it.cover_image || FALLBACK_COVER}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex justify-end items-end">
                    <span className="bg-white/90 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                      {it.duration || `${it.stops_count} stops`}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">{it.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mb-3">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {it.destination}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">tour</span>
                      <span>{it.stops_count} stops</span>
                    </div>
                    {it.total_budget && (
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">payments</span>
                        <span>{it.total_budget}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                      <span>{new Date(it.updated_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">map</span>
            <h2 className="font-headline-md text-headline-md text-on-surface-variant mb-2">
              No itineraries yet
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Plan your first trip with our AI travel assistant.
            </p>
            <Link
              href="/ai-planner"
              className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Plan a Trip
            </Link>
          </div>
        )}
      </main>

      <Footer />
      <MobileNav />

      <Link
        href="/ai-planner"
        className="fixed bottom-24 md:bottom-8 right-6 w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg ai-glow hover:scale-110 transition-transform z-50 cursor-pointer"
      >
        <span
          className="material-symbols-outlined text-[28px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          auto_awesome
        </span>
      </Link>
    </div>
  );
}

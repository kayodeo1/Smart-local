"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import Header from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import MobileNav from "@/components/layout/mobile-nav";
import { useRequireAuth } from "@/lib/use-require-auth";
import { api } from "@/lib/api";
import type { Itinerary } from "@/lib/types";

const FALLBACK_COVER =
  "https://images.unsplash.com/photo-1620246403639-71409c17084b?w=800&q=80&fit=crop";

export default function DashboardItinerariesPage() {
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

  async function remove(id: number, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    const prev = itineraries;
    setItineraries((list) => list.filter((i) => i.id !== id));
    try {
      await api.itineraries.remove(id);
      toast.success("Itinerary deleted");
    } catch {
      setItineraries(prev);
      toast.error("Could not delete itinerary");
    }
  }

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
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col relative">
      <Header />
      <DashboardSidebar />

      <main className="md:ml-64 pt-24 md:pt-28 pb-24 md:pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">
              My Itineraries
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Manage your planned trips and saved routes.
            </p>
          </div>
          <Link
            href="/ai-planner"
            className="bg-secondary text-on-secondary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-lg shadow-secondary/20"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Create New
          </Link>
        </div>

        {dataLoading ? (
          <div className="flex justify-center py-24">
            <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
              progress_activity
            </span>
          </div>
        ) : itineraries.length === 0 ? (
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {itineraries.map((it) => (
              <div
                key={it.id}
                className="group rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 hover:-translate-y-1 transition-all duration-300 relative"
              >
                <div className="h-44 relative overflow-hidden">
                  <Link href={`/itineraries/${it.id}`}>
                    <img
                      alt={it.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={it.cover_image || FALLBACK_COVER}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </Link>
                  <button
                    onClick={() => remove(it.id, it.title)}
                    title="Delete itinerary"
                    className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-error text-[20px]">delete</span>
                  </button>
                  <span className="absolute bottom-3 left-4 bg-white/90 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                    {it.duration || `${it.stops_count} stops`}
                  </span>
                </div>
                <Link href={`/itineraries/${it.id}`} className="block p-4">
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">{it.title}</h3>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-3">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {it.destination}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">tour</span>
                      {it.stops_count} stops
                    </span>
                    {it.total_budget && (
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">payments</span>
                        {it.total_budget}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                      {new Date(it.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>

      <MobileNav />
    </div>
  );
}

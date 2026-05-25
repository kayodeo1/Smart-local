"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";
import { useRequireAuth } from "@/lib/use-require-auth";
import { api } from "@/lib/api";
import type { ItineraryDetail, ItineraryStop } from "@/lib/types";

const VISIT_ICONS: Record<string, string> = {
  morning: "wb_twilight",
  afternoon: "wb_sunny",
  evening: "nights_stay",
  night: "bedtime",
  flexible: "schedule",
};

export default function ItineraryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { user, loading } = useRequireAuth();
  const router = useRouter();
  const [itinerary, setItinerary] = useState<ItineraryDetail | null>(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!user) return;
    api.itineraries
      .detail(id)
      .then(setItinerary)
      .catch(() => setNotFound(true))
      .finally(() => setDataLoading(false));
  }, [user, id]);

  async function deleteStop(stop: ItineraryStop) {
    if (!itinerary) return;
    const prev = itinerary;
    setItinerary({
      ...itinerary,
      stops: itinerary.stops.filter((s) => s.id !== stop.id),
      stops_count: itinerary.stops_count - 1,
    });
    try {
      await api.itineraries.removeStop(id, stop.id);
      toast.success("Stop removed");
    } catch {
      setItinerary(prev);
      toast.error("Could not remove stop");
    }
  }

  async function deleteItinerary() {
    if (!itinerary) return;
    if (!confirm(`Delete "${itinerary.title}"?`)) return;
    try {
      await api.itineraries.remove(id);
      toast.success("Itinerary deleted");
      router.push("/dashboard/itineraries");
    } catch {
      toast.error("Could not delete itinerary");
    }
  }

  if (loading || !user || dataLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
          progress_activity
        </span>
      </div>
    );
  }

  if (notFound || !itinerary) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4 text-on-surface-variant">
        <span className="material-symbols-outlined text-6xl">map</span>
        <p className="font-body-lg">Itinerary not found.</p>
        <Link
          href="/dashboard/itineraries"
          className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-md"
        >
          Back to My Itineraries
        </Link>
      </div>
    );
  }

  const stops = [...itinerary.stops].sort((a, b) => a.order - b.order);

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-24 md:pb-12">
        <Link
          href="/dashboard/itineraries"
          className="inline-flex items-center gap-1 text-on-surface-variant hover:text-primary mb-6 font-label-md text-label-md"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to itineraries
        </Link>

        <div className="relative rounded-xl overflow-hidden mb-10 h-56 md:h-72 flex flex-col justify-end p-6 md:p-8">
          <img
            alt={itinerary.title}
            className="absolute inset-0 w-full h-full object-cover"
            src={
              itinerary.cover_image ||
              "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=1200"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="relative z-10 text-white">
            <h1 className="font-display-lg-mobile md:font-display-lg mb-2">{itinerary.title}</h1>
            <div className="flex flex-wrap gap-4 font-body-md text-white/90">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {itinerary.destination}
              </span>
              {itinerary.duration && (
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {itinerary.duration}
                </span>
              )}
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">tour</span>
                {itinerary.stops_count} stops
              </span>
              {itinerary.total_budget && (
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">payments</span>
                  {itinerary.total_budget}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={deleteItinerary}
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full backdrop-blur-md cursor-pointer"
            title="Delete itinerary"
          >
            <span className="material-symbols-outlined text-error">delete</span>
          </button>
        </div>

        <div className="glass-panel rounded-xl p-6 md:p-8">
          <h2 className="font-headline-md text-headline-md text-primary mb-8">Trip Plan</h2>
          {stops.length === 0 ? (
            <p className="font-body-md text-on-surface-variant text-center py-8">
              This itinerary has no stops yet.
            </p>
          ) : (
            <div className="relative pl-2 md:pl-4">
              {stops.map((stop, i) => (
                <div key={stop.id} className="relative pl-12 md:pl-16 mb-8 group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-surface-bright rounded-full border-2 border-secondary flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      {VISIT_ICONS[stop.visit_time] ?? "place"}
                    </span>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-4 md:p-5 border border-outline-variant/20">
                    <div className="flex justify-between items-start mb-2 gap-3">
                      <div>
                        <h4 className="font-headline-md text-headline-md text-primary">
                          {stop.title}
                        </h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {stop.location}
                          {stop.category ? ` • ${stop.category}` : ""}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteStop(stop)}
                        className="text-on-surface-variant hover:text-error transition-colors cursor-pointer shrink-0"
                        title="Remove stop"
                      >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                      </button>
                    </div>
                    {stop.description && (
                      <p className="font-body-md text-body-md text-on-surface mb-3">
                        {stop.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-on-surface-variant text-sm">
                      {stop.visit_time && (
                        <span className="flex items-center gap-1 capitalize">
                          <span className="material-symbols-outlined text-sm">
                            {VISIT_ICONS[stop.visit_time] ?? "schedule"}
                          </span>
                          {stop.visit_time}
                        </span>
                      )}
                      {stop.duration && (
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {stop.duration}
                        </span>
                      )}
                      {stop.estimated_cost && (
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">payments</span>
                          {stop.estimated_cost}
                        </span>
                      )}
                      {stop.attraction_detail && (
                        <Link
                          href={`/discover/${stop.attraction_detail.id}`}
                          className="flex items-center gap-1 text-secondary hover:underline ml-auto"
                        >
                          View attraction
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      )}
                    </div>
                  </div>
                  {i < stops.length - 1 && (
                    <div className="absolute left-[23px] md:left-[31px] top-14 bottom-[-16px] w-0.5 bg-outline-variant/40" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

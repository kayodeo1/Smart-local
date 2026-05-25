"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import MobileNav from "@/components/layout/mobile-nav";
import { useRequireAuth } from "@/lib/use-require-auth";
import { api } from "@/lib/api";
import type { Bookmark, Itinerary, UserProfile, UserStats } from "@/lib/types";

export default function DashboardPage() {
  const { user, loading } = useRequireAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    Promise.all([
      api.users.me().catch(() => null),
      api.users.stats().catch(() => null),
      api.itineraries.list().catch(() => []),
      api.bookmarks.list().catch(() => []),
    ]).then(([me, s, its, bks]) => {
      setProfile(me);
      setStats(s);
      setItineraries(its);
      setBookmarks(bks);
      setDataLoading(false);
    });
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

  const firstName =
    profile?.full_name?.split(" ")[0] ||
    (user.user_metadata?.full_name as string)?.split(" ")[0] ||
    user.email?.split("@")[0] ||
    "Traveller";

  const upcomingTrip = itineraries[0] ?? null;
  const savedGems = bookmarks.slice(0, 4);

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col relative">
      <Header />
      <DashboardSidebar />

      <main className="md:ml-64 pt-24 md:pt-28 pb-24 md:pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen w-full">
        <header className="mb-10">
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">
            Welcome back, {firstName}.
          </h1>
          <p className="font-body-lg text-on-surface-variant">
            Here is your travel overview for today.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Upcoming / latest trip */}
          <section className="col-span-1 md:col-span-8 glass-panel rounded-xl p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 min-h-[300px]">
            {upcomingTrip ? (
              <>
                <div className="absolute inset-0 z-0">
                  <img
                    alt={upcomingTrip.title}
                    className="w-full h-full object-cover opacity-80"
                    src={
                      upcomingTrip.cover_image ||
                      "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-end text-on-primary min-h-[300px]">
                  <div className="flex items-center gap-2 mb-4 bg-secondary-container/90 text-on-secondary-container px-3 py-1 rounded-full w-max backdrop-blur-sm">
                    <span className="material-symbols-outlined text-sm">flight_takeoff</span>
                    <span className="font-label-sm text-label-sm font-bold">
                      {upcomingTrip.duration || "Trip"} • {upcomingTrip.stops_count} stops
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg mb-2 text-white">
                    {upcomingTrip.title}
                  </h2>
                  <p className="font-body-md text-white/90 mb-6 max-w-md">
                    {upcomingTrip.destination}
                    {upcomingTrip.total_budget ? ` • Est. ${upcomingTrip.total_budget}` : ""}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href={`/itineraries/${upcomingTrip.id}`}
                      className="bg-white text-primary font-label-md text-label-md px-6 py-2 rounded-full hover:bg-surface-bright transition-colors cursor-pointer"
                    >
                      View Itinerary
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative z-10 flex flex-col h-full justify-center items-start gap-4 min-h-[300px]">
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  No trips planned yet
                </h2>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  Let our AI planner craft your first Nigerian adventure.
                </p>
                <Link
                  href="/ai-planner"
                  className="bg-secondary text-on-secondary font-label-md text-label-md px-6 py-2 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  Plan a Trip
                </Link>
              </div>
            )}
          </section>

          {/* Travel stats */}
          <section className="col-span-1 md:col-span-4 glass-panel rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md text-primary">Your Stats</h3>
                <span className="material-symbols-outlined text-secondary-container ai-pulse bg-primary/5 rounded-full p-2">
                  insights
                </span>
              </div>
              <div className="space-y-5">
                <StatRow icon="map" label="Trips Planned" value={stats?.trips_count ?? 0} />
                <StatRow icon="bookmark" label="Places Saved" value={stats?.saved_count ?? 0} />
                <StatRow
                  icon="public"
                  label="States Explored"
                  value={stats?.states_count ?? 0}
                />
              </div>
            </div>
            <Link
              href="/dashboard/itineraries"
              className="w-full mt-6 text-primary font-label-md text-label-md border border-outline-variant/50 rounded-xl py-2 hover:bg-surface-variant/30 transition-colors cursor-pointer text-center block"
            >
              View All Trips
            </Link>
          </section>

          {/* Saved gems */}
          <section className="col-span-1 md:col-span-12 mt-4">
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-headline-md text-headline-md text-primary">Saved Gems</h2>
              <Link
                className="font-label-md text-label-md text-secondary hover:underline"
                href="/dashboard/saved"
              >
                View All
              </Link>
            </div>
            {dataLoading ? (
              <div className="flex justify-center py-10">
                <span className="material-symbols-outlined text-secondary animate-spin text-3xl">
                  progress_activity
                </span>
              </div>
            ) : savedGems.length === 0 ? (
              <div className="glass-panel rounded-xl p-10 text-center text-on-surface-variant">
                <span className="material-symbols-outlined text-4xl mb-2">bookmark_border</span>
                <p className="font-body-md">
                  You haven&apos;t saved any places yet.{" "}
                  <Link href="/discover" className="text-secondary hover:underline">
                    Discover attractions
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                {savedGems.map((bookmark) => (
                  <Link
                    key={bookmark.id}
                    href={`/discover/${bookmark.attraction.id}`}
                    className="glass-panel rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="h-40 relative">
                      <img
                        alt={bookmark.attraction.name}
                        className="w-full h-full object-cover"
                        src={bookmark.attraction.image}
                      />
                      <span className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-md">
                        <span
                          className="material-symbols-outlined text-secondary"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          bookmark
                        </span>
                      </span>
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-bold text-secondary tracking-wider uppercase mb-1 block">
                        {bookmark.attraction.category?.name ?? "Attraction"}
                      </span>
                      <h4 className="font-label-md text-label-md text-primary mb-1 truncate">
                        {bookmark.attraction.name}
                      </h4>
                      <p className="text-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {bookmark.attraction.location}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Link
        href="/ai-planner"
        className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-secondary-container text-on-secondary-container p-4 rounded-full shadow-[0_0_20px_rgba(108,248,187,0.5)] ai-pulse hover:scale-110 transition-transform cursor-pointer"
      >
        <span className="material-symbols-outlined text-3xl">smart_toy</span>
      </Link>

      <MobileNav />
    </div>
  );
}

function StatRow({ icon, label, value }: { icon: string; label: string; value: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
        <span className="material-symbols-outlined text-sm text-secondary">{icon}</span>
        {label}
      </span>
      <span className="font-headline-md text-headline-md text-primary font-bold">{value}</span>
    </div>
  );
}

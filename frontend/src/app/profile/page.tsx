"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";
import { useRequireAuth } from "@/lib/use-require-auth";
import { api } from "@/lib/api";
import type { Bookmark, Itinerary, UserProfile, UserStats } from "@/lib/types";

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${Math.max(mins, 1)} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs > 1 ? "s" : ""} ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days} day${days > 1 ? "s" : ""} ago`;
  return new Date(iso).toLocaleDateString();
}

export default function ProfilePage() {
  const { user, loading } = useRequireAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    if (!user) return;
    Promise.all([
      api.users.me().catch(() => null),
      api.users.stats().catch(() => null),
      api.bookmarks.list().catch(() => []),
      api.itineraries.list().catch(() => []),
    ]).then(([me, s, bks, its]) => {
      setProfile(me);
      setStats(s);
      setBookmarks(bks);
      setItineraries(its);
    });
  }, [user]);

  const activity = useMemo(() => {
    const items: { action: string; time: string; icon: string; at: number }[] = [];
    bookmarks.slice(0, 5).forEach((b) =>
      items.push({
        action: `Saved ${b.attraction.name}`,
        time: timeAgo(b.created_at),
        icon: "bookmark",
        at: new Date(b.created_at).getTime(),
      }),
    );
    itineraries.slice(0, 5).forEach((it) =>
      items.push({
        action: `Planned ${it.title}`,
        time: timeAgo(it.updated_at),
        icon: "map",
        at: new Date(it.updated_at).getTime(),
      }),
    );
    return items.sort((a, b) => b.at - a.at).slice(0, 5);
  }, [bookmarks, itineraries]);

  const prefTags = useMemo(() => {
    const p = profile?.preferences;
    if (!p) return [];
    return [...(p.interests ?? []), ...(p.activities ?? [])]
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
      .filter((v, i, arr) => arr.indexOf(v) === i);
  }, [profile]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
          progress_activity
        </span>
      </div>
    );
  }

  const name =
    profile?.full_name || (user.user_metadata?.full_name as string) || user.email?.split("@")[0] || "Traveller";
  const location = profile?.location || "Add your location";
  const avatar = profile?.avatar_url || (user.user_metadata?.avatar_url as string) || "";

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-24 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden ring-4 ring-secondary/20">
                {avatar ? (
                  <img alt={name} className="w-full h-full object-cover" src={avatar} />
                ) : (
                  <span className="material-symbols-outlined text-5xl text-primary">person</span>
                )}
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-1">{name}</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex items-center justify-center md:justify-start gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {location}
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link
                  href="/dashboard/settings"
                  className="bg-primary text-on-primary font-label-md text-label-md px-5 py-2.5 rounded-full hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">settings</span>
                  Edit Profile
                </Link>
                <Link
                  href="/dashboard/itineraries"
                  className="border border-outline-variant text-on-surface-variant font-label-md text-label-md px-5 py-2.5 rounded-full hover:bg-surface-container-low transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">map</span>
                  My Trips
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { label: "Trips Planned", value: stats?.trips_count ?? 0 },
              { label: "Places Saved", value: stats?.saved_count ?? 0 },
              { label: "States", value: stats?.states_count ?? 0 },
            ].map((stat) => (
              <div key={stat.label} className="glass-panel rounded-xl p-5 text-center">
                <p className="font-display-lg-mobile text-display-lg-mobile text-primary font-bold">
                  {stat.value}
                </p>
                <p className="font-label-md text-label-md text-on-surface-variant mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
            <section className="glass-panel rounded-xl p-6">
              <h2 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">history</span>
                Recent Activity
              </h2>
              {activity.length === 0 ? (
                <p className="font-body-md text-on-surface-variant text-sm">
                  No activity yet. Start by saving a place or planning a trip.
                </p>
              ) : (
                <div className="space-y-4">
                  {activity.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-sm text-secondary">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface">{item.action}</p>
                        <p className="text-xs text-on-surface-variant">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="glass-panel rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">bookmark</span>
                  Saved Places
                </h2>
                <Link href="/dashboard/saved" className="text-sm text-secondary hover:underline">
                  View All
                </Link>
              </div>
              {bookmarks.length === 0 ? (
                <p className="font-body-md text-on-surface-variant text-sm">
                  Nothing saved yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {bookmarks.slice(0, 3).map((b) => (
                    <Link
                      key={b.id}
                      href={`/discover/${b.attraction.id}`}
                      className="flex gap-3 p-2 rounded-lg hover:bg-surface-container-low transition-colors"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                        <img
                          alt={b.attraction.name}
                          className="w-full h-full object-cover"
                          src={b.attraction.image}
                        />
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface">
                          {b.attraction.name}
                        </p>
                        <p className="text-xs text-secondary">{b.attraction.category?.name}</p>
                        <p className="text-xs text-on-surface-variant">{b.attraction.location}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </div>

          <section className="glass-panel rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                AI Preferences
              </h2>
              <Link href="/onboarding" className="text-sm text-secondary hover:underline">
                Update
              </Link>
            </div>
            {prefTags.length === 0 ? (
              <p className="font-body-md text-on-surface-variant text-sm">
                You haven&apos;t set your travel preferences yet.{" "}
                <Link href="/onboarding" className="text-secondary hover:underline">
                  Complete onboarding
                </Link>
                .
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {prefTags.map((pref) => (
                  <span
                    key={pref}
                    className="bg-secondary/10 text-secondary font-label-sm text-label-sm px-3 py-1.5 rounded-full"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <MobileNav />
      <Footer />
    </div>
  );
}

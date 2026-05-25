"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import Header from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import MobileNav from "@/components/layout/mobile-nav";
import { useRequireAuth } from "@/lib/use-require-auth";
import { api } from "@/lib/api";
import type { Bookmark } from "@/lib/types";

export default function DashboardSavedPage() {
  const { user, loading } = useRequireAuth();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (!user) return;
    api.bookmarks
      .list()
      .then(setBookmarks)
      .catch(() => toast.error("Could not load saved places"))
      .finally(() => setDataLoading(false));
  }, [user]);

  const categories = useMemo(() => {
    const names = new Set<string>();
    bookmarks.forEach((b) => b.attraction.category?.name && names.add(b.attraction.category.name));
    return ["All", ...Array.from(names)];
  }, [bookmarks]);

  const visible = useMemo(
    () =>
      activeCategory === "All"
        ? bookmarks
        : bookmarks.filter((b) => b.attraction.category?.name === activeCategory),
    [bookmarks, activeCategory],
  );

  async function unsave(attractionId: number) {
    const prev = bookmarks;
    setBookmarks((b) => b.filter((x) => x.attraction.id !== attractionId));
    try {
      await api.bookmarks.remove(attractionId);
      toast.success("Removed from saved");
    } catch {
      setBookmarks(prev);
      toast.error("Could not remove bookmark");
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
        <div className="mb-10">
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">
            Saved Places
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Your collection of favourite attractions and hidden gems.
          </p>
        </div>

        {categories.length > 1 && (
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label-sm text-label-sm px-4 py-2 rounded-full border transition-colors cursor-pointer ${
                  cat === activeCategory
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-surface text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {dataLoading ? (
          <div className="flex justify-center py-24">
            <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
              progress_activity
            </span>
          </div>
        ) : visible.length === 0 ? (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">
              bookmark_border
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface-variant mb-2">
              No saved places {activeCategory !== "All" ? "in this category" : "yet"}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Browse attractions and tap the bookmark icon to save them here.
            </p>
            <Link
              href="/discover"
              className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined text-sm">explore</span>
              Discover Attractions
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {visible.map((bookmark) => {
              const a = bookmark.attraction;
              return (
                <div
                  key={bookmark.id}
                  className="group rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-44 relative overflow-hidden">
                    <Link href={`/discover/${a.id}`}>
                      <img
                        alt={a.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={a.image}
                      />
                    </Link>
                    <button
                      onClick={() => unsave(a.id)}
                      title="Remove from saved"
                      className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white transition-colors"
                    >
                      <span
                        className="material-symbols-outlined text-secondary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        bookmark
                      </span>
                    </button>
                  </div>
                  <Link href={`/discover/${a.id}`} className="block p-4">
                    <span className="text-xs font-bold text-secondary tracking-wider uppercase mb-1 block">
                      {a.category?.name ?? "Attraction"}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary mb-1">{a.name}</h3>
                    <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-2">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      {a.location}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-on-surface-variant">{a.price_display}</span>
                      <span className="text-xs text-on-surface-variant flex items-center gap-0.5 ml-auto">
                        <span className="material-symbols-outlined text-[16px] text-amber-500">
                          star
                        </span>
                        {a.rating}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <MobileNav />
    </div>
  );
}

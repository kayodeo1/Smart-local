"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import { api } from "@/lib/api";
import type { AttractionList } from "@/lib/types";

export default function MapPage() {
  const [attractions, setAttractions] = useState<AttractionList[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    api.attractions
      .list({ page_size: "100" })
      .then((d) => setAttractions(d.results))
      .catch(() => setAttractions([]))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const names = new Set<string>();
    attractions.forEach((a) => a.category?.name && names.add(a.category.name));
    return ["All", ...Array.from(names)];
  }, [attractions]);

  const visible = useMemo(
    () =>
      activeCategory === "All"
        ? attractions
        : attractions.filter((a) => a.category?.name === activeCategory),
    [attractions, activeCategory],
  );

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col relative">
      <div className="fixed inset-0 pattern-overlay-1 pointer-events-none opacity-50 z-0" />
      <Header />

      <main className="flex-grow flex flex-col lg:flex-row w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop gap-gutter overflow-hidden z-10 pt-28">
        <aside className="hidden md:flex lg:flex-col w-full lg:w-80 shrink-0 gap-4 overflow-y-auto custom-scrollbar pr-2 max-h-[calc(100vh-200px)] lg:max-h-none">
          <div className="mb-2">
            <h1 className="font-headline-lg text-headline-lg text-primary">Explore Map</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {loading ? "Loading…" : `${attractions.length} attractions to explore`}
            </p>
          </div>
          {categories.length > 1 && (
            <div className="flex gap-2 flex-wrap mb-2">
              {categories.slice(0, 6).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-label-sm text-label-sm px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
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
          <div className="space-y-3">
            {visible.map((attraction) => (
              <Link
                key={attraction.id}
                href={`/discover/${attraction.id}`}
                className="group flex gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all hover:-translate-y-0.5"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                  <img
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={attraction.image}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-label-md text-label-md text-primary truncate">
                    {attraction.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant truncate flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {attraction.location}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[12px]">star</span>
                      {attraction.rating}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {attraction.price_display}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </aside>

        <section className="flex-1 rounded-xl overflow-hidden bg-surface-container-low relative min-h-0 flex flex-col">
          <div className="flex-1 bg-surface-container-high relative min-h-[300px] lg:min-h-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.8%2C6.2%2C4.0%2C6.7&amp;layer=mapnik&amp;marker=6.5244%2C3.3792"
                className="w-full h-full border-0"
                title="Map of Lagos attractions"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center pointer-events-none">
                <div className="bg-surface/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg flex items-center gap-3 pointer-events-auto text-sm">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    my_location
                  </span>
                  <span className="text-on-surface font-medium">Nigeria</span>
                  <span className="w-px h-4 bg-outline-variant" />
                  <span className="text-on-surface-variant">{visible.length} pins</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar p-3 bg-surface-container-low">
            {visible.map((attraction) => (
              <Link
                key={attraction.id}
                href={`/discover/${attraction.id}`}
                className="snap-start shrink-0 w-48 group"
              >
                <div className="rounded-xl overflow-hidden bg-surface shadow-sm">
                  <div className="h-24 overflow-hidden">
                    <img
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={attraction.image}
                    />
                  </div>
                  <div className="p-2.5">
                    <h4 className="font-label-sm text-label-sm text-primary truncate">
                      {attraction.name}
                    </h4>
                    <p className="text-[11px] text-on-surface-variant truncate">
                      {attraction.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

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

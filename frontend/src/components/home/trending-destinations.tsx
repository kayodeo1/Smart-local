"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import type { AttractionList } from "@/lib/types";

export default function TrendingDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [trending, setTrending] = useState<AttractionList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.attractions
      .list({ ordering: "-rating", page_size: "6" })
      .then((d) => setTrending(d.results))
      .catch(() => setTrending([]))
      .finally(() => setLoading(false));
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
            Trending Destinations
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Curated spots based on real-time local activity.
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_left</span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_right</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
            progress_activity
          </span>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-gutter overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
        >
          {trending.map((destination, index) => {
            const isFeatured = index === 0;
            return (
              <Link
                key={destination.id}
                href={`/discover/${destination.id}`}
                className={`snap-start shrink-0 group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                  isFeatured ? "w-full md:w-[580px] h-[400px]" : "w-[320px] h-[400px]"
                }`}
              >
                <img
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={destination.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full glass-card border-none bg-white/10 backdrop-blur-md rounded-t-xl rounded-b-none translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start">
                    <div className="min-w-0">
                      <span className="inline-block px-3 py-1 bg-secondary text-on-secondary rounded-full font-label-sm text-label-sm mb-2 flex items-center gap-1 w-max">
                        <span className="material-symbols-outlined text-[14px]">star</span>
                        {destination.rating}
                      </span>
                      <h3 className="font-headline-md text-headline-md text-white mb-1 truncate">
                        {destination.name}
                      </h3>
                      <p className="font-body-md text-body-md text-white/80 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {destination.location.split(",")[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import type { AttractionList } from "@/lib/types";

export default function HiddenGems() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [gems, setGems] = useState<AttractionList[]>([]);

  useEffect(() => {
    // "Hidden gems" = attractions beyond the top-rated headline spots.
    api.attractions
      .list({ ordering: "rating", page_size: "8" })
      .then((d) => setGems(d.results.slice(0, 6)))
      .catch(() => setGems([]));
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-primary text-on-primary overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="font-label-md bg-secondary px-3 py-1 rounded-full mb-4 inline-block">
              Off the Beaten Path
            </span>
            <h2 className="font-headline-lg text-white">Hidden Gems</h2>
            <p className="font-body-md text-white/70">
              Escape the crowds and discover Nigeria&apos;s best-kept secrets.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-white">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-white">chevron_right</span>
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-gutter overflow-x-auto pb-8 snap-x no-scrollbar">
          {gems.map((gem) => (
            <Link
              key={gem.id}
              href={`/discover/${gem.id}`}
              className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer"
            >
              <div className="h-[500px] rounded-xl overflow-hidden relative mb-4">
                <img
                  alt={gem.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={gem.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-headline-md text-white mb-2">{gem.name}</h3>
                  <p className="font-body-md text-white/60 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    {gem.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

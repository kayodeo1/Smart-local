"use client";

import AttractionCard from "./attraction-card";
import type { AttractionList, Category } from "@/lib/types";

interface Props {
  attractions: AttractionList[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  categories: Category[];
  activeCategory: string;
  onCategory: (slug: string) => void;
  search: string;
  onSearch: (value: string) => void;
}

export default function DiscoverGrid({
  attractions,
  loading,
  error,
  onRetry,
  categories,
  activeCategory,
  onCategory,
  search,
  onSearch,
}: Props) {
  if (loading) {
    return (
      <section className="flex-grow flex flex-col h-full overflow-hidden">
        <div className="flex-grow flex items-center justify-center">
          <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
            progress_activity
          </span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex-grow flex flex-col h-full overflow-hidden">
        <div className="flex-grow flex flex-col items-center justify-center gap-4 text-on-surface-variant">
          <span className="material-symbols-outlined text-4xl">error</span>
          <p className="font-body-md text-body-md">{error}</p>
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-secondary text-on-secondary rounded-full font-label-md text-label-md cursor-pointer"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex-grow flex flex-col h-full overflow-hidden">
      {/* Mobile search + category pills */}
      <div className="lg:hidden flex flex-col gap-3 mb-4 flex-shrink-0">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
            search
          </span>
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search attractions…"
            className="w-full bg-surface rounded-full py-2.5 pl-10 pr-4 font-body-md text-sm border border-outline-variant/50 outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => onCategory("all")}
            className={`px-4 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap cursor-pointer ${
              activeCategory === "all"
                ? "bg-primary text-on-primary"
                : "bg-surface border border-outline-variant text-on-surface-variant"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategory(cat.slug)}
              className={`px-4 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap cursor-pointer ${
                activeCategory === cat.slug
                  ? "bg-primary text-on-primary"
                  : "bg-surface border border-outline-variant text-on-surface-variant"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scrollbar pb-24 md:pb-0 pr-2">
        {attractions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-on-surface-variant gap-3">
            <span className="material-symbols-outlined text-4xl">travel_explore</span>
            <p className="font-body-md text-body-md">No attractions match your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

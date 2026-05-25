"use client";

import type { Category } from "@/lib/types";

const BUDGETS: { value: string; label: string }[] = [
  { value: "free", label: "Free" },
  { value: "budget", label: "$ (Under ₦5,000)" },
  { value: "mid", label: "$$ (₦5,000 – ₦20,000)" },
  { value: "luxury", label: "$$$ (Over ₦20,000)" },
];

interface Props {
  categories: Category[];
  activeCategory: string;
  onCategory: (slug: string) => void;
  budgets: string[];
  onToggleBudget: (value: string) => void;
  search: string;
  onSearch: (value: string) => void;
  onReset: () => void;
  resultCount: number;
}

export default function DiscoverFilters({
  categories,
  activeCategory,
  onCategory,
  budgets,
  onToggleBudget,
  search,
  onSearch,
  onReset,
  resultCount,
}: Props) {
  return (
    <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 glass-panel rounded-xl p-6 shadow-lg h-full overflow-y-auto custom-scrollbar">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline-md text-headline-md text-primary">Filters</h2>
        <button
          onClick={onReset}
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-label-sm text-label-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">restart_alt</span> Reset
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
            search
          </span>
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search attractions…"
            className="w-full bg-surface-container-low rounded-full py-2.5 pl-10 pr-4 font-body-md text-sm border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary outline-none transition-all"
          />
        </div>
      </div>

      {/* Budget Filter */}
      <div className="mb-8 border-b border-outline-variant/30 pb-6">
        <h3 className="font-label-md text-label-md text-on-surface mb-4">Budget</h3>
        <div className="flex flex-col gap-3">
          {BUDGETS.map((b) => (
            <label key={b.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={budgets.includes(b.value)}
                onChange={() => onToggleBudget(b.value)}
                className="peer h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary transition-all cursor-pointer"
              />
              <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">
                {b.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8 border-b border-outline-variant/30 pb-6">
        <h3 className="font-label-md text-label-md text-on-surface mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategory("all")}
            className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-primary text-on-primary shadow-sm border border-transparent"
                : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary bg-surface"
            }`}
          >
            All
          </button>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => onCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-on-primary shadow-sm border border-transparent"
                    : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary bg-surface"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-auto pt-6 bg-secondary-container/20 p-4 rounded-xl border border-secondary/10">
        <div className="flex items-center gap-2 mb-2 text-on-secondary-container">
          <span className="material-symbols-outlined text-[20px]">travel_explore</span>
          <h3 className="font-label-md text-label-md font-bold">
            {resultCount} {resultCount === 1 ? "match" : "matches"}
          </h3>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm">
          Adjust the filters above to refine what you see on the grid and map.
        </p>
      </div>
    </aside>
  );
}

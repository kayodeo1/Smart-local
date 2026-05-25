"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/header";
import DiscoverFilters from "@/components/discover/discover-filters";
import DiscoverGrid from "@/components/discover/discover-grid";
import DiscoverMap from "@/components/discover/discover-map";
import MobileNav from "@/components/layout/mobile-nav";
import { api } from "@/lib/api";
import type { AttractionList, Category } from "@/lib/types";

export default function DiscoverPage() {
  const [attractions, setAttractions] = useState<AttractionList[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all"); // category slug
  const [budgets, setBudgets] = useState<string[]>([]); // budget_level values

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [list, cats] = await Promise.all([
        api.attractions.list({ page_size: "100" }),
        api.attractions.categories().catch(() => []),
      ]);
      setAttractions(list.results);
      setCategories(cats);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load attractions");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return attractions.filter((a) => {
      if (activeCategory !== "all" && a.category?.slug !== activeCategory) return false;
      if (budgets.length > 0 && !budgets.includes(a.budget_level)) return false;
      if (q) {
        const hay = `${a.name} ${a.location} ${a.state} ${a.tags.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [attractions, activeCategory, budgets, search]);

  const toggleBudget = (b: string) =>
    setBudgets((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));

  const reset = () => {
    setActiveCategory("all");
    setBudgets([]);
    setSearch("");
  };

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col relative">
      <div className="fixed inset-0 pattern-overlay-1 pointer-events-none opacity-50 z-0"></div>

      <Header />

      <main className="flex-grow flex w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-gutter gap-gutter h-[calc(100vh-80px)] overflow-hidden z-10 pt-28">
        <DiscoverFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategory={setActiveCategory}
          budgets={budgets}
          onToggleBudget={toggleBudget}
          search={search}
          onSearch={setSearch}
          onReset={reset}
          resultCount={filtered.length}
        />

        <DiscoverGrid
          attractions={filtered}
          loading={loading}
          error={error}
          onRetry={load}
          categories={categories}
          activeCategory={activeCategory}
          onCategory={setActiveCategory}
          search={search}
          onSearch={setSearch}
        />

        <DiscoverMap attractions={filtered} />
      </main>

      <MobileNav />

      <Link
        href="/ai-planner"
        className="fixed bottom-24 md:bottom-8 right-6 w-14 h-14 bg-[#006c49] rounded-full flex items-center justify-center text-white shadow-lg ai-glow hover:scale-110 transition-transform z-50 cursor-pointer"
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

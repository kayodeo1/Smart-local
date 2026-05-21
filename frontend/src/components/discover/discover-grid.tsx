import AttractionCard from "./attraction-card";
import { MOCK_ATTRACTIONS } from "@/lib/mock-data";

export default function DiscoverGrid() {
  return (
    <section className="flex-grow flex flex-col h-full overflow-hidden">
      {/* Mobile Filter Toggle & Quick Filters */}
      <div className="lg:hidden flex items-center justify-between mb-4 flex-shrink-0">
        <button className="flex items-center gap-2 bg-surface border border-outline-variant/50 px-4 py-2 rounded-full font-label-md text-label-md text-on-surface shadow-sm cursor-pointer">
          <span className="material-symbols-outlined text-[18px]">tune</span> Filters
        </button>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          <button className="px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm whitespace-nowrap cursor-pointer">
            Culture
          </button>
          <button className="px-4 py-1.5 rounded-full border border-outline-variant/50 bg-surface font-label-sm text-label-sm whitespace-nowrap cursor-pointer">
            Nature
          </button>
        </div>
      </div>

      {/* Cards Grid Container */}
      <div className="flex-grow overflow-y-auto custom-scrollbar pb-24 md:pb-0 pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_ATTRACTIONS.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      </div>
    </section>
  );
}

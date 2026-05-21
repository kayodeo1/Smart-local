export default function DiscoverFilters() {
  return (
    <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 glass-panel rounded-xl p-6 shadow-lg h-full overflow-y-auto custom-scrollbar">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-headline-md text-headline-md text-primary">Filters</h2>
        <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-label-sm text-label-sm cursor-pointer">
          <span className="material-symbols-outlined text-[16px]">restart_alt</span> Reset
        </button>
      </div>

      {/* Budget Filter */}
      <div className="mb-8 border-b border-outline-variant/30 pb-6">
        <h3 className="font-label-md text-label-md text-on-surface mb-4">Budget</h3>
        <div className="flex flex-col gap-3">
          {["Free", "$ (Under ₦5,000)", "$$ (₦5,000 - ₦20,000)", "$$$ (Over ₦20,000)"].map((budget, i) => (
            <label key={budget} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  defaultChecked={i === 1}
                  className="peer h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary transition-all"
                />
              </div>
              <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">
                {budget}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8 border-b border-outline-variant/30 pb-6">
        <h3 className="font-label-md text-label-md text-on-surface mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {["Nature", "Culture & Art", "Food", "Nightlife", "Historical"].map((cat, i) => {
            const isActive = i === 1;
            return (
              <button
                key={cat}
                className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-on-primary shadow-sm border border-transparent"
                    : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary bg-surface"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Recommended */}
      <div className="mt-auto pt-6 bg-secondary-container/20 p-4 rounded-xl border border-secondary/10">
        <div className="flex items-center gap-2 mb-2 text-on-secondary-container">
          <span className="material-symbols-outlined text-[20px]">smart_toy</span>
          <h3 className="font-label-md text-label-md font-bold">AI Suggestion</h3>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm">
          Based on your love for modern art and local cuisine, we prioritized vibrant cultural hubs in Lagos.
        </p>
      </div>
    </aside>
  );
}

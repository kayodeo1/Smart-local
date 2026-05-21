import Header from "@/components/layout/header";
import DiscoverFilters from "@/components/discover/discover-filters";
import DiscoverGrid from "@/components/discover/discover-grid";
import DiscoverMap from "@/components/discover/discover-map";
import MobileNav from "@/components/layout/mobile-nav";

export default function DiscoverPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col relative">
      <div className="fixed inset-0 pattern-overlay-1 pointer-events-none opacity-50 z-0"></div>

      {/* Global Header */}
      <Header />

      <main className="flex-grow flex w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-gutter gap-gutter h-[calc(100vh-80px)] overflow-hidden z-10 pt-28">
        
        {/* Left Sidebar: Filters */}
        <DiscoverFilters />

        {/* Center: Grid of Attractions */}
        <DiscoverGrid />

        {/* Right: Interactive Map */}
        <DiscoverMap />
      </main>

      {/* Bottom Nav for Mobile */}
      <MobileNav />

      {/* Floating AI Assistant Widget */}
      <button className="fixed bottom-24 md:bottom-8 right-6 w-14 h-14 bg-[#006c49] rounded-full flex items-center justify-center text-white shadow-lg ai-glow hover:scale-110 transition-transform z-50 cursor-pointer">
        <span
          className="material-symbols-outlined text-[28px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          auto_awesome
        </span>
      </button>
    </div>
  );
}

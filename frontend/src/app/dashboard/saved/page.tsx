import Header from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import { MOCK_ATTRACTIONS } from "@/lib/mock-data";
import Link from "next/link";

const CATEGORIES = ["All", "Art & Culture", "Nature & Parks", "Beaches"];

export default function DashboardSavedPage() {
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

        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`font-label-sm text-label-sm px-4 py-2 rounded-full border transition-colors cursor-pointer ${
                cat === "All"
                  ? "bg-primary text-on-primary border-primary"
                  : "bg-surface text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {MOCK_ATTRACTIONS.map((attraction) => (
            <Link
              key={attraction.id}
              href={`/discover/${attraction.id}`}
              className="group rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={attraction.image}
                />
                <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white transition-colors">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bookmark
                  </span>
                </button>
              </div>
              <div className="p-4">
                <span className="text-xs font-bold text-secondary tracking-wider uppercase mb-1 block">
                  {attraction.category}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-1">
                  {attraction.name}
                </h3>
                <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {attraction.location}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                    {attraction.matchScore || Math.round(attraction.rating * 20)}% Match
                  </span>
                  <span className="text-xs text-on-surface-variant">{attraction.price}</span>
                  <span className="text-xs text-on-surface-variant flex items-center gap-0.5 ml-auto">
                    <span className="material-symbols-outlined text-[16px] text-amber-500">star</span>
                    {attraction.rating}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface/80 backdrop-blur-2xl border-t border-white/40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-lg">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant" href="/">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant" href="/discover">
          <span className="material-symbols-outlined">explore</span>
          <span className="font-label-sm text-label-sm">Explore</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant" href="/ai-planner">
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="font-label-sm text-label-sm">AI Guide</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-secondary-container bg-secondary-container/50 rounded-full px-4 py-1" href="/dashboard">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            person
          </span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </Link>
      </nav>
    </div>
  );
}

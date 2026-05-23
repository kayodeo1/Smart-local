import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Link from "next/link";

const MOCK_ITINERARIES = [
  {
    id: "lagos-culture-day",
    title: "Lagos Culture Day",
    destination: "Lagos, Nigeria",
    duration: "1 Day",
    stops: 3,
    budget: "₦24,500",
    date: "Nov 16, 2024",
    image:
      "https://images.unsplash.com/photo-1620246403639-71409c17084b?w=800&q=80&fit=crop",
    match: "98%",
  },
  {
    id: "lekki-weekend",
    title: "Lekki Weekend Explorer",
    destination: "Lekki, Lagos",
    duration: "2 Days",
    stops: 5,
    budget: "₦85,000",
    date: "Dec 7, 2024",
    image:
      "https://images.unsplash.com/photo-1504541316369-51f315861945?w=800&q=80&fit=crop",
    match: "92%",
  },
  {
    id: "lagos-coastal",
    title: "Lagos Coastal Escape",
    destination: "Lagos Harbour",
    duration: "1 Day",
    stops: 2,
    budget: "₦35,000",
    date: "Jan 12, 2025",
    image:
      "https://images.unsplash.com/photo-1773325724090-e46d4838ab6f?w=800&q=80&fit=crop",
    match: "85%",
  },
];

export default function ItinerariesPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <div className="fixed inset-0 pattern-overlay-1 pointer-events-none opacity-50 z-0" />

      <Header />

      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-24 md:pb-12 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">
              My Itineraries
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Your personalized travel plans, all in one place.
            </p>
          </div>
          <Link
            href="/ai-planner"
            className="bg-secondary text-on-secondary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-lg shadow-secondary/20"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Create New Itinerary
          </Link>
        </div>

        {MOCK_ITINERARIES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {MOCK_ITINERARIES.map((itinerary) => (
              <Link
                key={itinerary.id}
                href={`/itineraries/${itinerary.id}`}
                className="group rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    alt={itinerary.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={itinerary.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                    <span className="bg-secondary/90 text-on-secondary text-xs font-bold px-2.5 py-1 rounded-full">
                      {itinerary.match} Match
                    </span>
                    <span className="bg-white/90 text-primary text-xs font-bold px-2.5 py-1 rounded-full">
                      {itinerary.duration}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">
                    {itinerary.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mb-3">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {itinerary.destination}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">tour</span>
                      <span>{itinerary.stops} stops</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">payments</span>
                      <span>{itinerary.budget}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                      <span>{itinerary.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">
              map
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface-variant mb-2">
              No itineraries yet
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Plan your first trip with our AI travel assistant.
            </p>
            <Link
              href="/ai-planner"
              className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Plan a Trip
            </Link>
          </div>
        )}
      </main>

      <MobileNav />

      <button className="fixed bottom-24 md:bottom-8 right-6 w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg ai-glow hover:scale-110 transition-transform z-50 cursor-pointer">
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

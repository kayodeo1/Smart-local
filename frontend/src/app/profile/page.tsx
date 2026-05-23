import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";
import Link from "next/link";

const RECENT_ACTIVITY = [
  { action: "Saved Nike Art Gallery", time: "2 hours ago", icon: "bookmark" },
  { action: "Planned Lagos Culture Day", time: "Yesterday", icon: "map" },
  { action: "Explored Lekki Conservation Centre", time: "3 days ago", icon: "explore" },
  { action: "Completed onboarding", time: "1 week ago", icon: "celebration" },
];

const SAVED_PLACES = [
  {
    name: "Terra Kulture",
    category: "Restaurant",
    location: "Victoria Island, Lagos",
    image: "https://images.unsplash.com/photo-1620246403639-71409c17084b?w=400&q=80&fit=crop",
  },
  {
    name: "Nike Art Gallery",
    category: "Art & Culture",
    location: "Lekki, Lagos",
    image: "https://images.unsplash.com/photo-1504541316369-51f315861945?w=400&q=80&fit=crop",
  },
];

export default function ProfilePage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-24 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden ring-4 ring-secondary/20">
                <span className="material-symbols-outlined text-5xl text-primary">person</span>
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-on-secondary shadow-md cursor-pointer">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-1">Alex</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex items-center justify-center md:justify-start gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Lagos, Nigeria
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link
                  href="/dashboard/settings"
                  className="bg-primary text-on-primary font-label-md text-label-md px-5 py-2.5 rounded-full hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">settings</span>
                  Edit Profile
                </Link>
                <Link
                  href="/dashboard/itineraries"
                  className="border border-outline-variant text-on-surface-variant font-label-md text-label-md px-5 py-2.5 rounded-full hover:bg-surface-container-low transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">map</span>
                  My Trips
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { label: "Trips Planned", value: "3" },
              { label: "Places Saved", value: "5" },
              { label: "Countries", value: "1" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-panel rounded-xl p-5 text-center"
              >
                <p className="font-display-lg-mobile text-display-lg-mobile text-primary font-bold">
                  {stat.value}
                </p>
                <p className="font-label-md text-label-md text-on-surface-variant mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
            <section className="glass-panel rounded-xl p-6">
              <h2 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">history</span>
                Recent Activity
              </h2>
              <div className="space-y-4">
                {RECENT_ACTIVITY.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-sm text-secondary">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">{item.action}</p>
                      <p className="text-xs text-on-surface-variant">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-panel rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">bookmark</span>
                  Saved Places
                </h2>
                <Link href="/dashboard/saved" className="text-sm text-secondary hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {SAVED_PLACES.map((place, i) => (
                  <div key={i} className="flex gap-3 p-2 rounded-lg hover:bg-surface-container-low transition-colors">
                    <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                      <img
                        alt={place.name}
                        className="w-full h-full object-cover"
                        src={place.image}
                      />
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">{place.name}</p>
                      <p className="text-xs text-secondary">{place.category}</p>
                      <p className="text-xs text-on-surface-variant">{place.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="glass-panel rounded-xl p-6">
            <h2 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">auto_awesome</span>
              AI Preferences
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Culture", "Nature", "Food", "Budget-Friendly", "Walking Tours", "Photography"].map(
                (pref) => (
                  <span
                    key={pref}
                    className="bg-secondary/10 text-secondary font-label-sm text-label-sm px-3 py-1.5 rounded-full"
                  >
                    {pref}
                  </span>
                )
              )}
            </div>
          </section>
        </div>
      </main>

      <MobileNav />
      <Footer />
    </div>
  );
}

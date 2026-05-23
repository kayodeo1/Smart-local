import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-4">
              About Smart Local
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Your intelligent companion for exploring Nigeria authentically through AI-powered personalization.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Mission</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
              Smart Local Tourism Guide was created to solve a fundamental problem: travelers visiting new places in Nigeria often struggle to plan enjoyable, well-organized trips. They rely on scattered information from blogs, social media, and general apps that miss smaller local businesses, hidden cultural sites, and practical details.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our platform brings together AI-powered recommendations, smart itinerary planning, and local insights to help you discover the authentic Nigeria — from hidden gems to cultural landmarks — all tailored to your interests, budget, and schedule.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-6">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { year: "2023", title: "The Idea", desc: "Born from the challenge of helping first-time visitors navigate Nigeria's rich cultural landscape." },
                { year: "2024", title: "The Build", desc: "Developed as a comprehensive web platform combining AI, maps, and local knowledge." },
                { year: "2025", title: "The Vision", desc: "Expanding to cover more destinations and deeper AI personalization." },
              ].map((milestone) => (
                <div key={milestone.year} className="glass-panel rounded-xl p-6 text-center">
                  <span className="text-secondary font-bold text-sm">{milestone.year}</span>
                  <h3 className="font-headline-md text-headline-md text-primary mt-2 mb-2">{milestone.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Why Smart Local?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "auto_awesome", title: "AI-Powered", desc: "Smart recommendations based on your preferences, budget, and available time." },
                { icon: "route", title: "Smart Itineraries", desc: "Optimized day plans with visit times, transit info, and cost estimates." },
                { icon: "map", title: "Interactive Maps", desc: "Visualize attractions and plan efficient routes across your destination." },
                { icon: "storefront", title: "Local Focus", desc: "Discover hidden gems and support local businesses and communities." },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 p-5 rounded-xl bg-surface-container-low">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-primary mb-1">{feature.title}</h3>
                    <p className="text-sm text-on-surface-variant">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <MobileNav />
      <Footer />
    </div>
  );
}

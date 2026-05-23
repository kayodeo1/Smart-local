import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";

export default function AIPlannerPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      
      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 flex flex-col lg:flex-row gap-gutter pattern-overlay pt-24">
        {/* AI Travel Assistant Sidebar */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-6 sticky top-28 h-[calc(100vh-140px)]">
          <div className="glass-card rounded-xl p-6 flex flex-col h-full shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/30">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">AI Travel Assistant</h2>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Your local guide in Lagos</p>
              </div>
            </div>
            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-2 mb-4 hide-scrollbar">
              {/* User Message */}
              <div className="self-end bg-surface-container rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                <p className="font-body-md text-body-md text-on-surface">Plan a 1-day culture tour in Lagos under ₦30,000</p>
              </div>
              {/* AI Response */}
              <div className="self-start flex gap-3 max-w-[90%]">
                <div className="w-8 h-8 rounded-full bg-secondary-container shrink-0 flex items-center justify-center text-on-secondary-container mt-1">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <div className="bg-surface-bright border border-outline-variant/30 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <p className="font-body-md text-body-md text-on-surface mb-2">I&apos;ve crafted a 1-day cultural deep-dive in Lagos for you, staying comfortably within your ₦30,000 budget.</p>
                  <p className="font-body-md text-body-md text-on-surface">We&apos;ll start at the Nike Art Gallery, grab some local food, and end at Freedom Park. How does this look?</p>
                  {/* AI Suggestion Pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <button className="font-label-sm text-label-sm bg-surface-container hover:bg-surface-variant text-on-surface px-3 py-1.5 rounded-full transition-colors cursor-pointer">Add more food stops</button>
                    <button className="font-label-sm text-label-sm bg-surface-container hover:bg-surface-variant text-on-surface px-3 py-1.5 rounded-full transition-colors cursor-pointer">Make it cheaper</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Input Area */}
            <div className="relative mt-auto">
              <input className="w-full bg-surface-container-highest border-0 rounded-full py-4 pl-6 pr-14 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-secondary focus:outline-none placeholder-on-surface-variant transition-all" placeholder="Ask for changes or new ideas..." type="text" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Timeline Area */}
        <section className="w-full lg:w-2/3 flex flex-col gap-6">
          {/* Trip Header & Widgets */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
            <div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface">Lagos Culture Day</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">1 Day • 3 Locations • Est. ₦24,500</p>
            </div>
            <div className="flex gap-3">
              <button className="glass-card flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/80 dark:hover:bg-black/50 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-on-surface-variant">tune</span>
                <span className="font-label-md text-label-md text-on-surface">Settings</span>
              </button>
              <button className="bg-secondary-container text-on-secondary-container ai-glow flex items-center gap-2 px-5 py-2 rounded-full hover:bg-secondary-fixed transition-colors font-label-md text-label-md cursor-pointer">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span>Auto-Optimize</span>
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="glass-card rounded-xl p-6 md:p-8 flex-1">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-headline-md text-headline-md text-on-surface">Day 1</h3>
              <span className="font-label-sm text-label-sm bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">Saturday, Nov 16</span>
            </div>
            <div className="relative pl-2 md:pl-4">
              {/* Route Line */}
              <div className="route-line"></div>

              {/* Stop 1 */}
              <div className="relative pl-12 md:pl-16 mb-10 group">
                <div className="absolute left-0 top-1 w-14 h-14 bg-surface-bright rounded-full border-2 border-secondary flex items-center justify-center timeline-dot shadow-sm group-hover:scale-110 transition-transform cursor-grab">
                  <span className="font-label-md text-label-md text-secondary">09:00</span>
                </div>
                <div className="glass-card rounded-lg p-4 md:p-5 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Nike Art Gallery</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Lekki Phase 1 • Art &amp; Culture</p>
                    </div>
                    <div className="bg-secondary text-on-secondary px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-sm text-label-sm">98% Match</span>
                    </div>
                  </div>
                  <div className="flex gap-4 text-on-surface-variant">
                    <div className="flex items-center gap-1 font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      2.5 hours
                    </div>
                    <div className="flex items-center gap-1 font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      Free Entry
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit Info */}
              <div className="relative pl-12 md:pl-16 mb-10 h-8 flex items-center">
                <div className="bg-surface-container-highest rounded-full px-4 py-1.5 flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant z-10 shadow-sm">
                  <span className="material-symbols-outlined text-sm">directions_car</span>
                  35 min drive (Est. ₦4,500 Uber)
                </div>
              </div>

              {/* Stop 2 */}
              <div className="relative pl-12 md:pl-16 mb-10 group">
                <div className="absolute left-0 top-1 w-14 h-14 bg-surface-bright rounded-full border-2 border-secondary flex items-center justify-center timeline-dot shadow-sm group-hover:scale-110 transition-transform cursor-grab">
                  <span className="font-label-md text-label-md text-secondary">12:30</span>
                </div>
                <div className="glass-card rounded-lg p-4 md:p-5 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Terra Kulture</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Victoria Island • Food &amp; Art</p>
                    </div>
                    <div className="bg-secondary text-on-secondary px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-sm text-label-sm">95% Match</span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mb-3 line-clamp-2">Authentic Nigerian cuisine in a vibrant cultural center. The AI suggests trying the Ofada rice or Asun.</p>
                  <div className="flex gap-4 text-on-surface-variant">
                    <div className="flex items-center gap-1 font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      1.5 hours
                    </div>
                    <div className="flex items-center gap-1 font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      Est. ₦15,000
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit Info */}
              <div className="relative pl-12 md:pl-16 mb-10 h-8 flex items-center">
                <div className="bg-surface-container-highest rounded-full px-4 py-1.5 flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant z-10 shadow-sm">
                  <span className="material-symbols-outlined text-sm">directions_car</span>
                  15 min drive (Est. ₦2,000 Uber)
                </div>
              </div>

              {/* Stop 3 */}
              <div className="relative pl-12 md:pl-16 group">
                <div className="absolute left-0 top-1 w-14 h-14 bg-surface-bright rounded-full border-2 border-secondary flex items-center justify-center timeline-dot shadow-sm group-hover:scale-110 transition-transform cursor-grab">
                  <span className="font-label-md text-label-md text-secondary">14:30</span>
                </div>
                <div className="glass-card rounded-lg p-4 md:p-5 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Freedom Park</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">Lagos Island • History &amp; Leisure</p>
                    </div>
                    <div className="bg-secondary text-on-secondary px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-sm text-label-sm">90% Match</span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface mb-3 line-clamp-2">A memorial and leisure park born from the ruins of a colonial prison. Great for a late afternoon stroll.</p>
                  <div className="flex gap-4 text-on-surface-variant">
                    <div className="flex items-center gap-1 font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      2 hours
                    </div>
                    <div className="flex items-center gap-1 font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-sm">payments</span>
                      ₦1,000 Entry
                    </div>
                  </div>
                </div>
              </div>

              {/* Add Stop Button */}
              <div className="relative pl-12 md:pl-16 mt-8">
                <button className="w-full border-2 border-dashed border-outline-variant/50 rounded-lg p-4 text-on-surface-variant hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all flex items-center justify-center gap-2 font-label-md text-label-md cursor-pointer">
                  <span className="material-symbols-outlined">add_circle</span>
                  Add another stop
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MobileNav />
    </div>
  );
}

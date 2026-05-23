import Header from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col relative">
      <Header />
      <DashboardSidebar />

      {/* Main Content */}
      <main className="md:ml-64 pt-24 md:pt-28 pb-24 md:pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen w-full">
        <header className="mb-10">
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">Welcome back, Alex.</h1>
          <p className="font-body-lg text-on-surface-variant">Here is your travel overview for today.</p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Upcoming Trip (Spans 8 cols on desktop) */}
          <section className="col-span-1 md:col-span-8 glass-panel rounded-xl p-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 z-0">
              <img
                alt="Zanzibar Beach"
                className="w-full h-full object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-nT_xKaU8PWnIPVheMDxJPQYu_0EA4QQv6HeY-M29cM78glYKdPK-6fsqbDKuZQyEPpzUZ1-g3_76zO75mceQIpt8mKunGcPrxqb6_fiUG6DeW3bjd3KUDKb4xk_R2yg2-HdAmR5MYugw3e39iAdvD_AQT5cd3hyiUtMBJKPaQahQyaOG5qVp4Msnymq_xXIILSzvf8RY4yocHpPT1ZY-GEy7AHewt4HhHjeC2vOZ3CoCJTyF33_jGC7y2NYrR5pwFFOL23PvqJhC"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col h-full justify-end text-on-primary min-h-[300px]">
              <div className="flex items-center gap-2 mb-4 bg-secondary-container/90 text-on-secondary-container px-3 py-1 rounded-full w-max backdrop-blur-sm">
                <span className="material-symbols-outlined text-sm">flight_takeoff</span>
                <span className="font-label-sm text-label-sm font-bold">Upcoming in 12 Days</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg mb-2 text-white">Zanzibar Coastal Retreat</h2>
              <p className="font-body-md text-white/90 mb-6 max-w-md">
                Get ready for your 7-day exploration of Stone Town and the pristine northern beaches.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-primary font-label-md text-label-md px-6 py-2 rounded-full hover:bg-surface-bright transition-colors cursor-pointer">
                  View Itinerary
                </button>
              </div>
            </div>
          </section>

          {/* AI Insights Mini (Spans 4 cols on desktop) */}
          <section className="col-span-1 md:col-span-4 glass-panel rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline-md text-headline-md text-primary">AI Insights</h3>
                <span className="material-symbols-outlined text-secondary-container ai-pulse bg-primary/5 rounded-full p-2">
                  psychology
                </span>
              </div>
              <div className="space-y-6">
                {/* Carbon Footprint */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">eco</span> Carbon Footprint
                    </span>
                    <span className="font-label-md text-label-md text-primary">1.2t CO2</span>
                  </div>
                  <div className="h-2 bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-3/4 rounded-full"></div>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">20% lower than average traveler.</p>
                </div>
                {/* Budget Tracker */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">account_balance_wallet</span> Monthly Budget
                    </span>
                    <span className="font-label-md text-label-md text-primary">$850 / $1200</span>
                  </div>
                  <div className="h-2 bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3 rounded-full"></div>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">On track to save for next trip.</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 text-primary font-label-md text-label-md border border-outline-variant/50 rounded-xl py-2 hover:bg-surface-variant/30 transition-colors cursor-pointer">
              View Full Report
            </button>
          </section>

          {/* Saved Gems (Spans 12 cols) */}
          <section className="col-span-1 md:col-span-12 mt-4">
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-headline-md text-headline-md text-primary">Saved Gems</h2>
              <Link className="font-label-md text-label-md text-secondary hover:underline" href="/dashboard/saved">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              {/* Gem 1 */}
              <div className="glass-panel rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="h-40 relative">
                  <img
                    alt="Restaurant"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ0B2jFkjQA9IsT1rbSkkHfzEmKMdnhKaGOoH3s-aL6q_HOLcZvK2cZ5cHhGasCYUS4K_CllcEsJ6G1qFFUzgKGXcdW4NDHUUKlXD6f3xNAcpw0M6sOb1UfaIFPUa0RKxDKnX5ETD2dZAe2ph4mGKRRIU0xvRRLhs0c_eqm2E71spB6_o8rE2cIThGnjEyvQG5iHpQDtGUnU-qvsYlc3Dqe4UvsjT_MSPZ6mhGqP0-nwvcUOSuKn-C9ckfDLGYmhawI8bxYEbQiTwS"
                  />
                  <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      bookmark
                    </span>
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-secondary tracking-wider uppercase mb-1 block">
                    Restaurant
                  </span>
                  <h4 className="font-label-md text-label-md text-primary mb-1">Terra Kulture</h4>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Gem 2 */}
              <div className="glass-panel rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="h-40 relative">
                  <img
                    alt="Art Gallery"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaTPHBKhRAY6JSz6upfnXxouiaYsuCD_dM7cRFVsnEFQfKvKaQamCrUpl6SdELU4sUqQkdtzCVeeLim3VVO-oCmmFaFyAucY-24yNff7VW9zeMXavXdiFn1RA3z5kqv4nubZNuty98zMkQ0k8rsd59UH7s3sqtRUpM2xdZahkyNLGwnQ3mMfXPw3PjBB00s8BS81VduNQxKo2Wl1ylNqU0u_4X2Vr7EDn6koFAhbaUiHjDMKMIftkTcV7BC1Pk7EUR3DP5VC4nS8J9"
                  />
                  <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      bookmark
                    </span>
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-secondary tracking-wider uppercase mb-1 block">
                    Attraction
                  </span>
                  <h4 className="font-label-md text-label-md text-primary mb-1">Nike Art Gallery</h4>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* Gem 3 */}
              <div className="glass-panel rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 hidden md:block">
                <div className="h-40 relative">
                  <img
                    alt="Nature Reserve"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD5gxQbKdMA2AM0bAsP97388XXkqGLasls9JVH1GbSPTp6yG8ImxCSnH6_N2Wz9i9SLSgjz66nN0-yNm8btMGaJN2aS2vIsUFtZiL-TcEUMs6zvM9J9ZUb1ATHdbyOftFZM1QHGe4xxBROKR0p1m6X3Tovv3i4rrg71oqs0MfDzzz7QER78-LNbS4gA4355urqogVSvZQw28Ur6szhBeboQF1MWfotHqswMJTzFOu3BcwYQYEvehZfBwM6BepeYgpYIa0hWgaXk_g4"
                  />
                  <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      bookmark
                    </span>
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-secondary tracking-wider uppercase mb-1 block">
                    Nature
                  </span>
                  <h4 className="font-label-md text-label-md text-primary mb-1">Lekki Conservation</h4>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* AI Assistant Widget (Floating) */}
      <button className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-secondary-container text-on-secondary-container p-4 rounded-full shadow-[0_0_20px_rgba(108,248,187,0.5)] ai-pulse hover:scale-110 transition-transform cursor-pointer">
        <span className="material-symbols-outlined text-3xl">smart_toy</span>
      </button>

      {/* Mobile Bottom Nav */}
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

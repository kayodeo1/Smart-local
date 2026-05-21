export default function FeaturesSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-12 text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
          Smarter Exploration
        </h2>
        <p className="font-body-md text-on-surface-variant">
          Technology designed to make local travel seamless.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="glass-card p-8 rounded-xl shadow-sm border-none bg-surface-container-high/40 hover:bg-white/80 transition-all duration-300">
          <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-secondary mb-6">
            <span className="material-symbols-outlined">payments</span>
          </div>
          <h3 className="font-headline-md text-[22px] mb-3">Smart Budgeting</h3>
          <p className="font-body-md text-on-surface-variant">
            Real-time local price tracking helps you stay on budget without
            missing out on premium experiences.
          </p>
        </div>
        <div className="glass-card p-8 rounded-xl shadow-sm border-none bg-surface-container-high/40 hover:bg-white/80 transition-all duration-300">
          <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-secondary mb-6">
            <span className="material-symbols-outlined">map</span>
          </div>
          <h3 className="font-headline-md text-[22px] mb-3">
            Route Optimization
          </h3>
          <p className="font-body-md text-on-surface-variant">
            Efficient planning that accounts for local traffic, weather, and
            peak hours at popular spots.
          </p>
        </div>
        <div className="glass-card p-8 rounded-xl shadow-sm border-none bg-surface-container-high/40 hover:bg-white/80 transition-all duration-300">
          <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-secondary mb-6">
            <span className="material-symbols-outlined">forum</span>
          </div>
          <h3 className="font-headline-md text-[22px] mb-3">Local Insights</h3>
          <p className="font-body-md text-on-surface-variant">
            Deep-dive data from local residents ensuring you find the most
            authentic hidden gems.
          </p>
        </div>
      </div>
    </section>
  );
}

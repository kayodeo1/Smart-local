export default function HowItWorks() {
  return (
    <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-xl glass-card flex items-center justify-center text-secondary mb-6 shadow-sm border-secondary/20">
              <span className="material-symbols-outlined text-4xl">tune</span>
            </div>
            <h3 className="font-headline-md text-[20px] mb-3">
              Select Preferences
            </h3>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              Tell us your travel style, budget, and interests in a few clicks.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-xl glass-card flex items-center justify-center text-secondary mb-6 shadow-sm border-secondary/20">
              <span className="material-symbols-outlined text-4xl">
                auto_awesome
              </span>
            </div>
            <h3 className="font-headline-md text-[20px] mb-3">AI Generates</h3>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              Our engine builds a custom route with the best local spots.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-xl glass-card flex items-center justify-center text-secondary mb-6 shadow-sm border-secondary/20">
              <span className="material-symbols-outlined text-4xl">
                explore
              </span>
            </div>
            <h3 className="font-headline-md text-[20px] mb-3">
              Explore &amp; Navigate
            </h3>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              Follow your guide with offline maps and real-time updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

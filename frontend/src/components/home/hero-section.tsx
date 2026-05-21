

export default function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center pt-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Zuma Rock at sunset"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzhKENf3YJeZs86J5oq4to49kJKBofEaYugXiL1sX5hJXz16uIGmYoj9U73-S99jjMgZ7OrQpTW_R2ncuU-PNVyc9YFLDOWO6X04gVR_wRmzMWJfgWMmSRnj2w9bFp51gntTNIoPctmrBmmcjNemRv2-BrG1mdJFEnzkzIvnoeOM54_HVR6Msyu3DJQFqOS3AvYo0_QE97J8n5V_GBnwjkkSeRiJvEk44B_gDwDgoL-WKpd5pJEBKb1YHxD6g-krAddYAed4DvFx-z"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-transparent to-background"></div>
      </div>
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center mt-12 md:mt-24">
        <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-sm text-label-sm mb-6">
          <span className="material-symbols-outlined text-[18px]">
            psychology
          </span>
          <span>AI-Powered Local Insights</span>
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 drop-shadow-sm">
          Discover Nigeria,
          <br />
          Intelligently.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Your personalized AI guide to the authentic local experience. From
          hidden waterfalls to bustling markets, perfectly tailored to your
          style.
        </p>
        <div className="relative w-full max-w-2xl mx-auto glass-card rounded-full p-2 flex items-center shadow-lg focus-within:ring-2 focus-within:ring-secondary-container group">
          <span className="material-symbols-outlined text-outline ml-4">
            search
          </span>
          <input
            className="w-full bg-transparent border-none focus:ring-0 font-body-md text-body-md text-on-surface px-4 placeholder-outline outline-none"
            placeholder="Where do you want to explore?"
            type="text"
          />
          <button className="bg-primary text-on-primary rounded-full px-6 py-3 font-label-md text-label-md hover:bg-primary/90 transition-colors flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">
              auto_awesome
            </span>
            Plan
          </button>
        </div>
      </div>
    </section>
  );
}

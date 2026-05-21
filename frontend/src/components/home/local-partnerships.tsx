export default function LocalPartnerships() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Supporting Local Businesses
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
          We partner with verified local entrepreneurs to bring you the best
          stays, meals, and experiences while boosting the local economy.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center justify-center p-8 bg-surface-container-low rounded-xl border border-outline-variant/10">
          <span className="font-headline-md text-outline italic">
            Heritage Stay
          </span>
        </div>
        <div className="flex items-center justify-center p-8 bg-surface-container-low rounded-xl border border-outline-variant/10">
          <span className="font-headline-md text-outline italic">
            EcoGuide NG
          </span>
        </div>
        <div className="flex items-center justify-center p-8 bg-surface-container-low rounded-xl border border-outline-variant/10">
          <span className="font-headline-md text-outline italic">
            Artisans Co.
          </span>
        </div>
        <div className="flex items-center justify-center p-8 bg-surface-container-low rounded-xl border border-outline-variant/10">
          <span className="font-headline-md text-outline italic">
            Lagos Bites
          </span>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button className="font-label-md text-secondary border border-secondary/30 px-8 py-3 rounded-full hover:bg-secondary/5 transition-colors cursor-pointer">
          Apply for Partnership
        </button>
      </div>
    </section>
  );
}

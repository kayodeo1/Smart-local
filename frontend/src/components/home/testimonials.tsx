export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-highest/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-12 text-center">
          Community Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                JD
              </div>
              <div>
                <h4 className="font-label-md font-bold text-on-surface">
                  James Daniel
                </h4>
                <p className="font-label-sm text-on-surface-variant">
                  Lagos Resident
                </p>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-6 italic">
              &quot;The AI guide found a hidden cafe in Victoria Island I never
              knew existed. Truly changes how you see your own city.&quot;
            </p>
            <div className="flex text-secondary-fixed-dim">
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
            </div>
          </div>
          {/* Review 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                SO
              </div>
              <div>
                <h4 className="font-label-md font-bold text-on-surface">
                  Sarah Okoro
                </h4>
                <p className="font-label-sm text-on-surface-variant">
                  Solo Traveler
                </p>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-6 italic">
              &quot;Planning my Abuja trip was a breeze. The safety alerts and
              curated itineraries made me feel so confident exploring.&quot;
            </p>
            <div className="flex text-secondary-fixed-dim">
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
            </div>
          </div>
          {/* Review 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold">
                AK
              </div>
              <div>
                <h4 className="font-label-md font-bold text-on-surface">
                  Ahmed Kabir
                </h4>
                <p className="font-label-sm text-on-surface-variant">Expat</p>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-6 italic">
              &quot;The local insights section is pure gold. Found authentic
              experiences that aren&apos;t on any other major travel site.&quot;
            </p>
            <div className="flex text-secondary-fixed-dim">
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
              <span className="material-symbols-outlined text-[18px]">
                star
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

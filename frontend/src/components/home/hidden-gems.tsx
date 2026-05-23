export default function HiddenGems() {
  return (
    <section className="py-24 bg-primary text-on-primary overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="font-label-md bg-secondary px-3 py-1 rounded-full mb-4 inline-block">
              Off the Beaten Path
            </span>
            <h2 className="font-headline-lg text-white">Hidden Gems</h2>
            <p className="font-body-md text-white/70">
              Escape the crowds and discover Nigeria&apos;s best-kept secrets.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-white">
                chevron_left
              </span>
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-white">
                chevron_right
              </span>
            </button>
          </div>
        </div>
        <div className="flex gap-gutter overflow-x-auto pb-8 snap-x no-scrollbar">
          {/* Gem Card 1 */}
          <div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
            <div className="h-[500px] rounded-xl overflow-hidden relative mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Olumo Rock"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1504541316369-51f315861945?w=800&q=80&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-headline-md text-white mb-2">Olumo Rock</h3>
                <p className="font-body-md text-white/60">
                  Abeokuta, Ogun State
                </p>
              </div>
            </div>
          </div>
          {/* Gem Card 2 */}
          <div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
            <div className="h-[500px] rounded-xl overflow-hidden relative mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Kajuru Castle"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1773325724090-e46d4838ab6f?w=800&q=80&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-headline-md text-white mb-2">
                  Kajuru Castle
                </h3>
                <p className="font-body-md text-white/60">
                  Kajuru, Kaduna State
                </p>
              </div>
            </div>
          </div>
          {/* Gem Card 3 */}
          <div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
            <div className="h-[500px] rounded-xl overflow-hidden relative mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Gurara Falls"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1620246403639-71409c17084b?w=800&q=80&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-headline-md text-white mb-2">
                  Gurara Falls
                </h3>
                <p className="font-body-md text-white/60">Niger State</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

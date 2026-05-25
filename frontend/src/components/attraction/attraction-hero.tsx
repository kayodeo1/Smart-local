import type { AttractionDetail } from "@/lib/types";

export default function AttractionHero({ attraction }: { attraction: AttractionDetail }) {
  return (
    <section
      className="relative w-full rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[614px] flex flex-col justify-end p-6 md:p-8"
      style={{
        backgroundImage: `url('${attraction.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6 w-full">
        <div className="text-white">
          <div className="flex items-center gap-3 mb-4">
            <span className="glass-panel text-white font-label-sm text-label-sm px-3 py-1 rounded-full flex items-center gap-1 border-white/20 bg-white/20">
              <span className="material-symbols-outlined text-[16px]">art_track</span>
              {attraction.category.name}
            </span>
          </div>
          
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg font-bold mb-2">
            {attraction.name}
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 flex items-center gap-2">
            <span className="material-symbols-outlined">location_on</span>
            {attraction.location}
          </p>
        </div>
        
        <button className="bg-secondary text-on-secondary font-label-md text-label-md px-8 py-4 rounded-full shadow-lg flex items-center gap-2 hover:-translate-y-1 transition-transform w-full md:w-auto justify-center cursor-pointer">
          <span className="material-symbols-outlined">bookmark_add</span>
          Add to Itinerary
        </button>
      </div>
    </section>
  );
}

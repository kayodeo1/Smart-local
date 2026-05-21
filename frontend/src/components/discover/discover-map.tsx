export default function DiscoverMap() {
  return (
    <aside className="hidden xl:block w-1/3 flex-shrink-0 h-full relative rounded-xl overflow-hidden glass-panel shadow-lg border border-outline-variant/30">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-surface-container-high">
        {/* Abstract map representation */}
        <div className="w-full h-full pattern-bg-dots opacity-50"></div>

        {/* Map Markers */}
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
          <div className="bg-secondary text-on-secondary p-2 rounded-full shadow-lg ai-glow relative z-10 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[20px]">museum</span>
          </div>
          <div className="bg-surface text-on-surface px-2 py-1 rounded shadow-md font-label-sm text-[10px] mt-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Nike Art Gallery
          </div>
        </div>
        
        <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
          <div className="bg-primary text-on-primary p-1.5 rounded-full shadow-lg relative z-10 group-hover:scale-110 transition-transform border-2 border-surface">
            <span className="material-symbols-outlined text-[16px]">park</span>
          </div>
        </div>
      </div>

      {/* Map Overlay UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          <span className="font-label-sm text-label-sm text-on-surface">Lagos Area</span>
        </div>
        <button className="glass-panel p-2 rounded-full shadow-sm hover:bg-surface transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-[20px] text-on-surface">
            my_location
          </span>
        </button>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="glass-panel p-4 rounded-xl shadow-md">
          <h4 className="font-label-md text-label-md text-primary mb-1">Explore Nearby</h4>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">
            3 top matches within 5km of your current view.
          </p>
        </div>
      </div>
    </aside>
  );
}

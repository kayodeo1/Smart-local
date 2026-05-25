"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { AttractionList } from "@/lib/types";

// Fallback bounding box roughly covering Nigeria.
const DEFAULT_BBOX = "2.7,4.2,14.6,13.9";
const DEFAULT_MARKER = "6.5244,3.3792";

export default function DiscoverMap({ attractions }: { attractions: AttractionList[] }) {
  const { src, withCoords } = useMemo(() => {
    const pts = attractions
      .filter((a) => a.latitude != null && a.longitude != null)
      .map((a) => ({ lat: Number(a.latitude), lon: Number(a.longitude) }));

    if (pts.length === 0) {
      return {
        src: `https://www.openstreetmap.org/export/embed.html?bbox=${DEFAULT_BBOX}&layer=mapnik&marker=${DEFAULT_MARKER}`,
        withCoords: [] as AttractionList[],
      };
    }

    const lats = pts.map((p) => p.lat);
    const lons = pts.map((p) => p.lon);
    const pad = 0.15;
    const minLat = Math.min(...lats) - pad;
    const maxLat = Math.max(...lats) + pad;
    const minLon = Math.min(...lons) - pad;
    const maxLon = Math.max(...lons) + pad;
    const centerLat = (minLat + maxLat) / 2;
    const centerLon = (minLon + maxLon) / 2;

    return {
      src: `https://www.openstreetmap.org/export/embed.html?bbox=${minLon},${minLat},${maxLon},${maxLat}&layer=mapnik&marker=${centerLat},${centerLon}`,
      withCoords: attractions.filter((a) => a.latitude != null && a.longitude != null),
    };
  }, [attractions]);

  return (
    <aside className="hidden xl:flex flex-col w-1/3 flex-shrink-0 h-full relative rounded-xl overflow-hidden glass-panel shadow-lg border border-outline-variant/30">
      <iframe
        key={src}
        src={src}
        title="Map of Nigerian attractions"
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
      />

      {/* Top overlay */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
        <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm pointer-events-auto">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          <span className="font-label-sm text-label-sm text-on-surface">
            {attractions.length} {attractions.length === 1 ? "place" : "places"}
          </span>
        </div>
      </div>

      {/* Bottom overlay: scrollable list of visible attractions */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="glass-panel rounded-xl shadow-md max-h-48 overflow-y-auto custom-scrollbar">
          {withCoords.length === 0 ? (
            <p className="font-body-md text-sm text-on-surface-variant p-4">
              {attractions.length === 0
                ? "No attractions match your filters."
                : "Showing all attractions on the map."}
            </p>
          ) : (
            <ul className="divide-y divide-outline-variant/20">
              {withCoords.map((a) => (
                <li key={a.id}>
                  <Link
                    href={`/discover/${a.id}`}
                    className="flex items-center gap-3 p-3 hover:bg-surface-container-low transition-colors"
                  >
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      location_on
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-label-sm text-label-sm text-primary truncate">
                        {a.name}
                      </span>
                      <span className="block text-xs text-on-surface-variant truncate">
                        {a.location}
                      </span>
                    </span>
                    <span className="text-xs text-on-surface-variant flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px] text-amber-500">
                        star
                      </span>
                      {a.rating}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
}

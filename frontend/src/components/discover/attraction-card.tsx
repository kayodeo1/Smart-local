import Link from "next/link";
import { AttractionData } from "@/lib/mock-data";

export default function AttractionCard({ attraction }: { attraction: AttractionData }) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col relative">
      {/* AI Match Badge */}
      {attraction.matchScore && (
        <div className="absolute top-4 left-4 z-10 bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 shadow-md">
          <span className="material-symbols-outlined text-[14px]">auto_awesome</span>{" "}
          {attraction.matchScore}% Match
        </div>
      )}

      {/* Save Button */}
      <button className="absolute top-4 right-4 z-10 bg-surface/80 backdrop-blur-md p-2 rounded-full text-on-surface hover:text-primary transition-colors shadow-sm cursor-pointer">
        <span className="material-symbols-outlined text-[20px]">bookmark_border</span>
      </button>

      <div className="h-48 relative overflow-hidden bg-surface-container-high">
        <Link href={`/discover/${attraction.id}`}>
          <img
            alt={attraction.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            src={attraction.image}
          />
        </Link>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/discover/${attraction.id}`}>
            <h3 className="font-headline-md text-[20px] leading-tight text-primary group-hover:text-secondary transition-colors cursor-pointer">
              {attraction.name}
            </h3>
          </Link>
          <div className="flex items-center text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-2 py-1 rounded-md">
            <span
              className="material-symbols-outlined text-[16px] text-[#F59E0B] mr-1"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            {attraction.rating}
          </div>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4 line-clamp-2">
          {attraction.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {attraction.tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface-container border border-outline-variant/20 px-2.5 py-1 rounded-md font-label-sm text-[11px] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-label-md text-label-md text-primary">{attraction.price}</span>
        </div>
      </div>
    </div>
  );
}

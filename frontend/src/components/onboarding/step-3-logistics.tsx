"use client";

import { Dispatch, SetStateAction } from "react";

const TIMES = [
  { id: "half", label: "Half Day", desc: "4-6 Hours" },
  { id: "full", label: "Full Day", desc: "8-12 Hours" },
  { id: "multi", label: "Multiple Days", desc: "Expeditions" },
];

const TRANSPORTS = [
  { id: "walking", label: "Walking" },
  { id: "rideshare", label: "Ride-sharing" },
  { id: "public", label: "Public Transit" },
  { id: "car", label: "Car Rental" },
];

const ACCESSIBILITY = [
  { id: "wheelchair", label: "Wheelchair access", icon: "accessible" },
  { id: "low_walk", label: "Low walking", icon: "directions_walk" },
  { id: "audio", label: "Audio guides", icon: "volume_up" },
  { id: "contrast", label: "High contrast info", icon: "visibility" },
];

interface Props {
  time: string | null;
  setTime: Dispatch<SetStateAction<string | null>>;
  transports: string[];
  setTransports: Dispatch<SetStateAction<string[]>>;
  access: string[];
  setAccess: Dispatch<SetStateAction<string[]>>;
}

export default function Step3Logistics({
  time,
  setTime,
  transports,
  setTransports,
  access,
  setAccess,
}: Props) {
  const toggleTransport = (id: string) => {
    setTransports((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleAccess = (id: string) => {
    setAccess((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      {/* Header Section */}
      <header className="p-8 pb-4 text-center">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">
          The Logistics
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
          Help us tailor the pace and movement of your Nigerian adventure for
          ultimate comfort.
        </p>
      </header>

      {/* Form Content */}
      <div className="px-8 pb-10 space-y-10">
        {/* Section 1: Available Time */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary">
              schedule
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Available Time
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {TIMES.map((t) => {
              const isSelected = time === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTime(t.id)}
                  className={`group border transition-all p-4 rounded-lg flex flex-col items-center gap-2 cursor-pointer
                    ${
                      isSelected
                        ? "bg-secondary-container/30 border-secondary scale-95"
                        : "bg-surface-container-lowest/50 border-outline-variant hover:border-secondary"
                    }
                  `}
                >
                  <span className="font-label-md text-label-md text-on-surface">
                    {t.label}
                  </span>
                  <span
                    className={`font-label-sm text-label-sm
                      ${
                        isSelected
                          ? "text-on-secondary-fixed-variant"
                          : "text-outline group-hover:text-on-secondary-fixed-variant"
                      }
                    `}
                  >
                    {t.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Section 2: Preferred Transportation */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary">
              commute
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Preferred Transportation
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {TRANSPORTS.map((t) => {
              const isSelected = transports.includes(t.id);
              return (
                <label
                  key={t.id}
                  className={`relative flex items-center p-4 rounded-lg border cursor-pointer transition-colors group
                    ${
                      isSelected
                        ? "bg-secondary-container/30 border-secondary"
                        : "bg-surface-container-lowest/50 border-outline-variant hover:bg-white"
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    className="hidden peer"
                    checked={isSelected}
                    onChange={() => toggleTransport(t.id)}
                  />
                  <div
                    className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center transition-all
                      ${
                        isSelected
                          ? "bg-secondary border-secondary"
                          : "border-outline-variant"
                      }
                    `}
                  >
                    {isSelected && (
                      <span className="material-symbols-outlined text-white text-[16px]">
                        check
                      </span>
                    )}
                  </div>
                  <span className="font-label-md text-label-md text-on-surface">
                    {t.label}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {/* Section 3: Accessibility Needs */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary">
              accessibility_new
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Accessibility Needs
            </h2>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {ACCESSIBILITY.map((a) => {
                const isSelected = access.includes(a.id);
                return (
                  <button
                    key={a.id}
                    onClick={() => toggleAccess(a.id)}
                    className={`px-4 py-2 border rounded-full font-label-md text-label-md transition-all flex items-center gap-2 cursor-pointer
                      ${
                        isSelected
                          ? "bg-secondary-container text-on-secondary-container border-transparent"
                          : "border-outline-variant text-on-surface-variant bg-surface-container-lowest/50 hover:bg-surface-container-low"
                      }
                    `}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {a.icon}
                    </span>{" "}
                    {a.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import { Dispatch, SetStateAction } from "react";

const INTERESTS = [
  { id: "culture", label: "Culture & Arts", icon: "palette" },
  { id: "food", label: "Local Food", icon: "restaurant" },
  { id: "adventure", label: "Adventure", icon: "hiking" },
  { id: "nightlife", label: "Nightlife", icon: "nightlife" },
  { id: "shopping", label: "Shopping", icon: "shopping_bag" },
  { id: "history", label: "History", icon: "history_edu" },
];

interface Props {
  selectedInterests: string[];
  setSelectedInterests: Dispatch<SetStateAction<string[]>>;
}

export default function Step1Interests({ selectedInterests, setSelectedInterests }: Props) {
  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-2">
        What moves you?
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
        Select a few interests to help our AI craft your perfect local experience.
      </p>
      <div className="flex flex-wrap gap-4 mb-10">
        {INTERESTS.map((interest) => {
          const isSelected = selectedInterests.includes(interest.id);
          return (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              className={`border rounded-full px-6 py-3 font-label-md text-label-md transition-all duration-200 flex items-center gap-2 cursor-pointer
                ${
                  isSelected
                    ? "bg-secondary-container text-on-secondary-container border-secondary-container -translate-y-[2px] shadow-[0_4px_12px_rgba(108,248,187,0.3)]"
                    : "border-outline-variant hover:bg-surface-variant/50"
                }
              `}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}
              >
                {interest.icon}
              </span>
              {interest.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

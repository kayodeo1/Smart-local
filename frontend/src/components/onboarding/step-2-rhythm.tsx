"use client";

import { Dispatch, SetStateAction } from "react";

const BUDGETS = [
  { id: "low", label: "Low", icon: "payments" },
  { id: "medium", label: "Medium", icon: "local_atm" },
  { id: "high", label: "High", icon: "account_balance" },
];

const TRAVEL_STYLES = ["Solo", "Family", "Couple", "Group"];

const ACTIVITIES = [
  { id: "nature", label: "Nature", icon: "forest" },
  { id: "food", label: "Food", icon: "restaurant" },
  { id: "nightlife", label: "Nightlife", icon: "nightlife" },
  { id: "history", label: "History", icon: "history_edu" },
];

interface Props {
  budget: string | null;
  setBudget: Dispatch<SetStateAction<string | null>>;
  travelStyle: string | null;
  setTravelStyle: Dispatch<SetStateAction<string | null>>;
  activities: string[];
  setActivities: Dispatch<SetStateAction<string[]>>;
}

export default function Step2Rhythm({
  budget,
  setBudget,
  travelStyle,
  setTravelStyle,
  activities,
  setActivities,
}: Props) {
  const toggleActivity = (id: string) => {
    setActivities((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center mb-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          What&apos;s your rhythm?
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
          Tell our AI a bit about how you like to move so we can tailor your
          Lagos experience.
        </p>
      </div>

      {/* Section 1: Budget Selection */}
      <section className="mb-12">
        <label className="font-label-md text-label-md text-primary mb-6 block uppercase tracking-widest text-center">
          Budget Range
        </label>
        <div className="grid grid-cols-3 gap-4">
          {BUDGETS.map((item) => {
            const isSelected = budget === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setBudget(item.id)}
                className={`budget-card group flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 cursor-pointer border
                  ${
                    isSelected
                      ? "bg-secondary-container border-secondary/40 scale-105"
                      : "bg-surface-container-low border-transparent hover:border-secondary/20"
                  }
                `}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-white flex items-center justify-center transition-transform
                    ${
                      isSelected
                        ? "text-secondary scale-110"
                        : "text-on-surface-variant group-hover:text-secondary group-hover:scale-110"
                    }
                  `}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <span className="font-label-md text-label-md">{item.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Section 2: Travel Style */}
      <section className="mb-12">
        <label className="font-label-md text-label-md text-primary mb-4 block uppercase tracking-widest text-center">
          Travel Style
        </label>
        <div className="flex flex-wrap justify-center gap-3">
          {TRAVEL_STYLES.map((style) => {
            const isSelected = travelStyle === style;
            return (
              <button
                key={style}
                onClick={() => setTravelStyle(style)}
                className={`px-6 py-2 rounded-full border font-label-md transition-colors cursor-pointer
                  ${
                    isSelected
                      ? "bg-secondary text-white border-transparent"
                      : "border-outline-variant text-on-surface-variant hover:bg-secondary-container/20"
                  }
                `}
              >
                {style}
              </button>
            );
          })}
        </div>
      </section>

      {/* Section 3: Preferred Activities */}
      <section className="mb-12">
        <label className="font-label-md text-label-md text-primary mb-4 block uppercase tracking-widest text-center">
          Preferred Activities
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ACTIVITIES.map((act) => {
            const isSelected = activities.includes(act.id);
            return (
              <button
                key={act.id}
                onClick={() => toggleActivity(act.id)}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center gap-3 transition-all duration-300 group cursor-pointer
                  ${
                    isSelected
                      ? "bg-secondary-container"
                      : "bg-surface-container-high/50 hover:bg-secondary-container"
                  }
                `}
              >
                <span
                  className={`material-symbols-outlined text-3xl 
                    ${
                      isSelected
                        ? "text-on-secondary-container"
                        : "text-on-surface-variant group-hover:text-on-secondary-container"
                    }
                  `}
                >
                  {act.icon}
                </span>
                <span
                  className={`font-label-md text-label-md
                    ${
                      isSelected
                        ? "text-on-secondary-container"
                        : "group-hover:text-on-secondary-container"
                    }
                  `}
                >
                  {act.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { toast } from "sonner";
import Step1Interests from "@/components/onboarding/step-1-interests";
import Step2Rhythm from "@/components/onboarding/step-2-rhythm";
import Step3Logistics from "@/components/onboarding/step-3-logistics";
import LoadingScreen from "@/components/onboarding/loading-screen";
import { useRequireAuth } from "@/lib/use-require-auth";
import { api } from "@/lib/api";

// Map onboarding UI values to the backend's accepted preference choices.
const BUDGET_MAP: Record<string, string> = { low: "budget", medium: "mid", high: "luxury" };
const TIME_MAP: Record<string, string> = {
  half: "half_day",
  full: "full_day",
  multi: "weekend",
};
const STYLE_MAP: Record<string, string> = {
  Solo: "explorer",
  Couple: "relaxer",
  Family: "cultural",
  Group: "adventurer",
};

export default function OnboardingPage() {
  const { user, loading } = useRequireAuth();
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [travelStyle, setTravelStyle] = useState<string | null>(null);
  const [activities, setActivities] = useState<string[]>([]);
  const [time, setTime] = useState<string | null>(null);
  const [transports, setTransports] = useState<string[]>([]);
  const [access, setAccess] = useState<string[]>([]);

  const handleBack = () => setStep((prev) => prev - 1);

  async function handleFinish() {
    setSaving(true);
    try {
      await api.users.updatePreferences({
        interests: selectedInterests,
        budget: budget ? BUDGET_MAP[budget] ?? "budget" : "budget",
        travel_style: travelStyle ? STYLE_MAP[travelStyle] ?? "explorer" : "explorer",
        activities,
        time_availability: time ? TIME_MAP[time] ?? "full_day" : "full_day",
        transport_modes: transports,
        accessibility_needs: access,
      });
    } catch {
      toast.error("Could not save preferences, but you can update them later.");
    } finally {
      setSaving(false);
      setStep(4);
    }
  }

  const handleNext = () => {
    if (step === 3) {
      handleFinish();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
          progress_activity
        </span>
      </div>
    );
  }

  if (step === 4) {
    return <LoadingScreen />;
  }

  const progress = Math.round((step / 3) * 100);

  return (
    <main className="bg-surface text-on-surface antialiased min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 pattern-bg-dots-lg opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 -left-48 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="flex-grow z-10 flex flex-col items-center justify-center py-12 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto relative">
        <header className="w-full flex justify-between items-center mb-12">
          <div className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            Smart Local
          </div>
          <button
            onClick={() => setStep(4)}
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            Skip
          </button>
        </header>

        <div className="glass-panel rounded-xl w-full max-w-2xl p-6 md:p-10 shadow-lg relative overflow-hidden transition-all duration-500">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {step === 3 ? "Onboarding Completion" : `Step ${step} of 3`}
              </span>
              <span className="font-label-sm text-label-sm text-secondary font-bold">
                {progress}%
              </span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden flex">
              <div
                className="h-full bg-secondary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="min-h-[400px]">
            {step === 1 && (
              <Step1Interests
                selectedInterests={selectedInterests}
                setSelectedInterests={setSelectedInterests}
              />
            )}
            {step === 2 && (
              <Step2Rhythm
                budget={budget}
                setBudget={setBudget}
                travelStyle={travelStyle}
                setTravelStyle={setTravelStyle}
                activities={activities}
                setActivities={setActivities}
              />
            )}
            {step === 3 && (
              <Step3Logistics
                time={time}
                setTime={setTime}
                transports={transports}
                setTransports={setTransports}
                access={access}
                setAccess={setAccess}
              />
            )}
          </div>

          <div className="flex justify-between items-center mt-8 border-t border-outline-variant/20 pt-6">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`font-label-md text-label-md transition-colors cursor-pointer ${
                step === 1
                  ? "text-transparent pointer-events-none"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={saving}
              className="bg-primary text-on-primary rounded-full px-8 py-3 font-label-md text-label-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-60"
            >
              {saving ? "Saving…" : step === 3 ? "Finish Setup" : "Continue"}
              <span className="material-symbols-outlined text-sm">
                {step === 3 ? "celebration" : "arrow_forward"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

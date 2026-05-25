"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoadingScreen() {
  const router = useRouter();
  const [loadingState, setLoadingState] = useState(0); // 0 = start, 1 = check 3, 2 = finish button

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoadingState(1);
    }, 4500);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-50 bg-background text-on-surface font-body-md overflow-hidden flex flex-col items-center justify-center">
      {/* Background Layer with Local Context Pattern */}
      <div className="absolute inset-0 pattern-overlay-2 z-0"></div>
      
      {/* Large Blur Background Accents */}
      <div className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
      <div className="absolute -bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-primary-fixed/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
      
      <div className="z-10 w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center">
        {/* Brand Header */}
        <div className="absolute top-10 left-0 w-full flex justify-center opacity-40">
          <h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            Smart Local
          </h1>
        </div>

        {/* AI Core Animation Section */}
        <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
          {/* Pulsing Emerald Core */}
          <div className="absolute w-32 h-32 bg-on-secondary-container rounded-full ai-glow opacity-90 animate-pulse"></div>
          
          {/* Rotating Orbits */}
          <div className="absolute w-2 h-2 bg-primary rounded-full animate-[orbit_4s_infinite_linear]"></div>
          <div className="absolute w-1.5 h-1.5 bg-secondary rounded-full animate-[orbit_6s_infinite_linear_reverse]"></div>
          <div className="absolute w-1 h-1 bg-outline rounded-full animate-[orbit_3s_infinite_linear]"></div>
          
          {/* Glassmorphic Inner Shield */}
          <div className="w-40 h-40 glass-panel rounded-full flex items-center justify-center shadow-xl z-10">
            <span
              className="material-symbols-outlined text-on-secondary-container text-5xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-2xl space-y-6 animate-[fade-in-up_0.8s_ease-out_forwards]">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            {loadingState >= 1
              ? "Lagos is ready for you."
              : "Crafting your perfect Lagos experience..."}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant px-4">
            Our AI is analyzing thousands of local gems to find your perfect matches.
          </p>
        </div>

        {/* Dynamic Loading Status Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl px-6 opacity-0 translate-y-4 animate-[fade-in-up_1s_ease-out_0.4s_forwards]">
          <div className="glass-panel bg-white/40 p-4 rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm text-on-secondary-container">check</span>
            </div>
            <span className="font-label-md text-label-md">Art Galleries</span>
          </div>
          
          <div className="glass-panel bg-white/40 p-4 rounded-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm text-on-secondary-container">check</span>
            </div>
            <span className="font-label-md text-label-md">Local Cuisine</span>
          </div>
          
          <div className="glass-panel bg-white/40 p-4 rounded-xl flex items-center gap-3">
            {loadingState >= 1 ? (
              <div className="w-8 h-8 rounded-full bg-secondary-container/50 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-on-secondary-container">check</span>
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full border-2 border-on-secondary-container/20 border-t-on-secondary-container animate-spin"></div>
            )}
            <span className="font-label-md text-label-md">Hidden Gems</span>
          </div>
          
          <div className={`glass-panel bg-white/40 p-4 rounded-xl flex items-center gap-3 transition-opacity ${loadingState >= 1 ? 'opacity-100' : 'opacity-50'}`}>
            <div className="w-8 h-8 rounded-full bg-outline-variant/20 flex items-center justify-center">
              {loadingState >= 1 ? (
                <span className="material-symbols-outlined text-sm">check</span>
              ) : (
                <span className="material-symbols-outlined text-sm">schedule</span>
              )}
            </div>
            <span className="font-label-md text-label-md">Finalizing...</span>
          </div>
        </div>

        {/* Action Area */}
        <div className="mt-16 h-20 flex items-center justify-center">
          {loadingState >= 1 ? (
            <button
              onClick={() => router.push("/dashboard")}
              className="group relative flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md transition-all duration-500 hover:shadow-2xl active:scale-90 animate-[fade-in-up_0.5s_ease-out] cursor-pointer"
            >
              <span>Enter Dashboard</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          ) : (
            <div className="w-64 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-on-secondary-container transition-all duration-[4000ms] ease-out w-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

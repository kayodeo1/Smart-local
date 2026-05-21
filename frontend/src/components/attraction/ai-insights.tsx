import { AIInsights as AIInsightsType } from "@/lib/mock-data";

export default function AIInsights({ insights }: { insights?: AIInsightsType }) {
  if (!insights) return null;

  return (
    <div className="md:col-span-8 glass-panel rounded-xl p-8 shadow-sm flex flex-col gap-6">
      <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-[0_0_15px_rgba(108,248,187,0.5)]">
          <span className="material-symbols-outlined">psychology</span>
        </div>
        <div>
          <h2 className="font-headline-md text-headline-md text-primary">AI Travel Guide</h2>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Personalized insights for your trip
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-surface-container-low rounded-lg p-5 border border-white/50">
          <h3 className="font-label-md text-label-md text-primary flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary">schedule</span>
            Best Time to Visit
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {insights.bestTime}
          </p>
        </div>
        
        <div className="bg-surface-container-low rounded-lg p-5 border border-white/50">
          <h3 className="font-label-md text-label-md text-primary flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary">palette</span>
            Don&apos;t Miss
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {insights.dontMiss}
          </p>
        </div>
      </div>
    </div>
  );
}

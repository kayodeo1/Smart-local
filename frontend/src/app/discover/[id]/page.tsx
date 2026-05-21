import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import AttractionHero from "@/components/attraction/attraction-hero";
import AIInsights from "@/components/attraction/ai-insights";
import EssentialInfo from "@/components/attraction/essential-info";
import { getAttractionById } from "@/lib/mock-data";

export default async function AttractionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const attraction = getAttractionById(id);

  if (!attraction) {
    notFound();
  }

  return (
    <div className="bg-background text-on-background antialiased min-h-screen pb-24 md:pb-0">
      <Header />

      <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 md:pt-32 space-y-12 md:space-y-24">
        <AttractionHero attraction={attraction} />

        {attraction.aiInsights || attraction.essentialInfo ? (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter pb-12">
            {attraction.aiInsights && <AIInsights insights={attraction.aiInsights} />}
            {attraction.essentialInfo && (
              <EssentialInfo info={attraction.essentialInfo} />
            )}
          </section>
        ) : null}
      </main>

      <MobileNav />

      {/* Floating AI Widget */}
      <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50">
        <button className="w-14 h-14 bg-secondary-container rounded-full shadow-[0_0_20px_rgba(108,248,187,0.6)] flex items-center justify-center text-on-secondary-container ai-pulse hover:scale-110 transition-transform cursor-pointer">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            smart_toy
          </span>
        </button>
      </div>
    </div>
  );
}

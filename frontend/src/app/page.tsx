import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import TrendingDestinations from "@/components/home/trending-destinations";
import HowItWorks from "@/components/home/how-it-works";
import FeaturesSection from "@/components/home/features-section";
import HiddenGems from "@/components/home/hidden-gems";
import LocalPartnerships from "@/components/home/local-partnerships";
import Testimonials from "@/components/home/testimonials";
import AiWidget from "@/components/ui/ai-widget";

export default function Home() {
  return (
    <>
      <Header />
      <MobileNav />
      <main className="flex-1">
        <HeroSection />
        <TrendingDestinations />
        <HowItWorks />
        <FeaturesSection />
        <HiddenGems />
        <LocalPartnerships />
        <Testimonials />
      </main>
      <AiWidget />
      <Footer />
    </>
  );
}

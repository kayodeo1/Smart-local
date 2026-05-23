import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">
            Terms of Service
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-10">
            Last updated: November 2024
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">1. Acceptance of Terms</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                By accessing and using Smart Local Tourism Guide (&quot;the Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the Platform.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">2. Description of Service</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Smart Local Tourism Guide is an AI-powered web platform that provides personalized travel recommendations, itinerary planning, and local attraction discovery for tourists visiting Nigeria. The Platform utilizes artificial intelligence to suggest attractions, optimize routes, and create customized travel plans based on user preferences.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">3. User Responsibilities</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Users are responsible for providing accurate information about their preferences, budget, and availability. Users must not misuse the Platform for any unlawful purpose or in any way that could damage, disable, or impair the service.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">4. Intellectual Property</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                All content, features, and functionality of the Platform, including but not limited to text, graphics, logos, and AI algorithms, are owned by Smart Local Tourism Guide and are protected by applicable intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">5. Limitation of Liability</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Smart Local Tourism Guide provides recommendations and suggestions based on available data. We do not guarantee the accuracy of attraction information, including opening hours, prices, or availability. Users should verify critical information directly with service providers.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">6. Changes to Terms</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or through the Platform.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">7. Contact</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                For questions about these Terms, please contact us at support@smartlocal.ng.
              </p>
            </section>
          </div>
        </div>
      </main>
      <MobileNav />
      <Footer />
    </div>
  );
}

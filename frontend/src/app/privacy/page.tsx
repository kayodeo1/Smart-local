import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-10">
            Last updated: November 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">1. Information We Collect</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We collect information you provide directly, including your name, email address, travel preferences, budget range, and interests. We also collect usage data such as pages visited, attractions viewed, and itineraries created to improve our AI recommendations.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">2. How We Use Your Information</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Your information is used to personalize travel recommendations, optimize itineraries based on your preferences, improve our AI algorithms, and communicate important service updates. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">3. Data Storage and Security</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We implement industry-standard security measures to protect your data. Your information is stored securely and only retained as long as necessary to provide our services. You may request deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">4. Cookies</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We use essential cookies to maintain your session and preferences. Analytics cookies help us understand how the Platform is used to improve your experience. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">5. Third-Party Services</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                The Platform may integrate with third-party services for map display, payment processing, or social logins. These services have their own privacy policies governing data handling.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">6. Your Rights</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                You have the right to access, correct, or delete your personal data. You may opt out of marketing communications at any time. For data-related requests, contact our privacy team.
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">7. Contact</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                For privacy-related inquiries, contact us at privacy@smartlocal.ng.
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

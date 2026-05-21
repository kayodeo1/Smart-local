import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant/30">
      <div className="w-full pt-20 pb-12 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 max-w-container-max mx-auto">
        <div className="lg:col-span-2">
          <div className="font-headline-md text-headline-md font-black text-on-surface dark:text-inverse-on-surface mb-6">
            Smart Local
          </div>
          <p className="font-body-md text-on-surface-variant dark:text-outline mb-8 max-w-xs">
            Your intelligent companion for exploring Nigeria authentically through
            AI-powered personalization.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">
                public
              </span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">
                share
              </span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">
                chat
              </span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-on-surface font-bold mb-6 uppercase tracking-wider">
            Explore
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                AI Planner
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Group Travel
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Itineraries
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-on-surface font-bold mb-6 uppercase tracking-wider">
            Resources
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Local Guides
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Safety FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Sustainability
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Travel Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-on-surface font-bold mb-6 uppercase tracking-wider">
            Partners
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Local Cafes
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Hotels
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Travel Agencies
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Logistics
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-on-surface font-bold mb-6 uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-md text-on-surface-variant dark:text-outline hover:text-secondary transition-colors"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full py-8 px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-sm text-on-surface-variant">
            © 2024 Smart Local Tourism Guide. Partnered with Nigerian Tourism
            Development Corporation.
          </p>
          <p className="font-label-sm text-on-surface-variant">
            Designed with love for Nigerian Heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}

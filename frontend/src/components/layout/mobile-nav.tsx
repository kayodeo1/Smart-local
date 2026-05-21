import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-2xl rounded-t-lg border-t border-white/40 dark:border-outline-variant/10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <Link
        href="#"
        className="flex flex-col items-center justify-center text-on-secondary-container dark:text-secondary-fixed bg-secondary-container/50 dark:bg-secondary/20 rounded-full px-4 py-1 scale-110"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          home
        </span>
        <span className="font-label-sm text-label-sm-mobile mt-1">Home</span>
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant scale-110"
      >
        <span className="material-symbols-outlined">explore</span>
        <span className="font-label-sm text-label-sm-mobile mt-1">Explore</span>
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant scale-110"
      >
        <span className="material-symbols-outlined">smart_toy</span>
        <span className="font-label-sm text-label-sm-mobile mt-1">
          AI Guide
        </span>
      </Link>
      <Link
        href="#"
        className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant scale-110"
      >
        <span className="material-symbols-outlined">person</span>
        <span className="font-label-sm text-label-sm-mobile mt-1">Profile</span>
      </Link>
    </nav>
  );
}

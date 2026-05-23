"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Discover", href: "/discover" },
    { label: "Itineraries", href: "/itineraries" },
    { label: "Map", href: "/map" },
    { label: "AI Planner", href: "/ai-planner" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 dark:bg-surface-container/60 backdrop-blur-lg border-b border-white/40 dark:border-outline-variant/20 shadow-sm transition-all duration-300 hidden md:block">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight"
        >
          Smart Local
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-label-md text-label-md py-1 transition-all duration-300 hover:opacity-80 scale-95 active:scale-90
                  ${
                    isActive
                      ? "text-on-secondary-container dark:text-secondary-fixed font-bold border-b-2 border-on-secondary-container"
                      : "text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-inverse-primary"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            Login
          </Link>
          <Link href="/signup" className="font-label-md text-label-md bg-primary text-on-primary px-6 py-2 rounded-full hover:bg-primary/90 transition-colors cursor-pointer">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

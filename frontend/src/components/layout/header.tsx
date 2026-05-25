"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, signOut } = useAuth();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Discover", href: "/discover" },
    { label: "Itineraries", href: "/itineraries" },
    { label: "Map", href: "/map" },
    { label: "AI Planner", href: "/ai-planner" },
  ];

  async function handleSignOut() {
    await signOut();
    router.push("/");
  }

  const displayName =
    (user?.user_metadata?.full_name as string) ||
    (user?.user_metadata?.name as string) ||
    user?.email?.split("@")[0] ||
    "Account";

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
          {loading ? (
            <div className="w-24 h-8 rounded-full bg-surface-container-low animate-pulse" />
          ) : user ? (
            <>
              <Link
                href="/dashboard"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer max-w-[140px] truncate"
              >
                {displayName}
              </Link>
              <button
                onClick={handleSignOut}
                className="font-label-md text-label-md bg-primary text-on-primary px-6 py-2 rounded-full hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="font-label-md text-label-md bg-primary text-on-primary px-6 py-2 rounded-full hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

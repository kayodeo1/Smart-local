"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import Link from "next/link";

export default function DashboardSettingsPage() {
  const [name, setName] = useState("Alex");
  const [email, setEmail] = useState("alex@example.com");
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col relative">
      <Header />
      <DashboardSidebar />

      <main className="md:ml-64 pt-24 md:pt-28 pb-24 md:pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen w-full">
        <div className="mb-10">
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">
            Settings
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Manage your profile, preferences, and account settings.
          </p>
        </div>

        <div className="max-w-2xl space-y-8">
          <section className="glass-panel rounded-xl p-6 md:p-8">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">person</span>
              Profile
            </h2>
            <div className="space-y-5">
              <div>
                <label className="font-label-md text-label-md text-on-surface ml-1 mb-2 block">
                  Full Name
                </label>
                <input
                  className="w-full px-5 py-3.5 rounded-full bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface ml-1 mb-2 block">
                  Email Address
                </label>
                <input
                  className="w-full px-5 py-3.5 rounded-full bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface ml-1 mb-2 block">
                  Location
                </label>
                <input
                  className="w-full px-5 py-3.5 rounded-full bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </section>

          <section className="glass-panel rounded-xl p-6 md:p-8">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">tune</span>
              Preferences
            </h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Push Notifications</p>
                  <p className="text-sm text-on-surface-variant">Receive updates about new attractions and deals</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-12 h-7 rounded-full transition-colors relative cursor-pointer ${
                    notifications ? "bg-secondary" : "bg-outline-variant"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform shadow-sm ${
                      notifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="h-px bg-outline-variant/20" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Dark Mode</p>
                  <p className="text-sm text-on-surface-variant">Toggle dark theme across the app</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-7 rounded-full transition-colors relative cursor-pointer ${
                    darkMode ? "bg-secondary" : "bg-outline-variant"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform shadow-sm ${
                      darkMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>

          <section className="glass-panel rounded-xl p-6 md:p-8">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">info</span>
              Account
            </h2>
            <div className="space-y-4">
              <button className="w-full text-left px-5 py-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between cursor-pointer">
                <span className="font-label-md text-label-md text-on-surface">Change Password</span>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </button>
              <button className="w-full text-left px-5 py-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-between cursor-pointer">
                <span className="font-label-md text-label-md text-on-surface">Delete Account</span>
                <span className="material-symbols-outlined text-error">chevron_right</span>
              </button>
            </div>
          </section>

          <div className="flex items-center gap-4">
            <button
              onClick={handleSave}
              className="bg-primary text-on-primary font-label-md text-label-md px-8 py-3.5 rounded-full hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer"
            >
              {saved ? (
                <>
                  <span className="material-symbols-outlined text-sm">check</span>
                  Saved
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">save</span>
                  Save Changes
                </>
              )}
            </button>
            <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-6 py-3.5 transition-colors cursor-pointer">
              Cancel
            </button>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface/80 backdrop-blur-2xl border-t border-white/40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-lg">
        <Link className="flex flex-col items-center justify-center text-on-surface-variant" href="/">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant" href="/discover">
          <span className="material-symbols-outlined">explore</span>
          <span className="font-label-sm text-label-sm">Explore</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant" href="/ai-planner">
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="font-label-sm text-label-sm">AI Guide</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-secondary-container bg-secondary-container/50 rounded-full px-4 py-1" href="/dashboard">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            person
          </span>
          <span className="font-label-sm text-label-sm">Profile</span>
        </Link>
      </nav>
    </div>
  );
}

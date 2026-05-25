"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Header from "@/components/layout/header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import MobileNav from "@/components/layout/mobile-nav";
import { useRequireAuth } from "@/lib/use-require-auth";
import { api } from "@/lib/api";
import { supabase } from "@/lib/supabase";

export default function DashboardSettingsPage() {
  const { user, loading } = useRequireAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [ready, setReady] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  useEffect(() => {
    if (!user) return;
    Promise.all([api.users.me(), api.users.preferences().catch(() => null)]).then(
      ([me, prefs]) => {
        setName(me.full_name ?? "");
        setEmail(me.email ?? "");
        setLocation(me.location ?? "");
        setBio(me.bio ?? "");
        const p = prefs ?? me.preferences;
        if (p) {
          setNotifications(p.notifications_enabled);
          setDarkMode(p.dark_mode);
        }
        setReady(true);
      },
    );
  }, [user]);

  async function handleSave() {
    setSaving(true);
    try {
      await api.users.updateMe({ full_name: name, location, bio });
      await api.users.updatePreferences({
        notifications_enabled: notifications,
        dark_mode: darkMode,
      });
      setSaved(true);
      toast.success("Settings saved");
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save settings");
    } finally {
      setSaving(false);
    }
  }

  async function handleChangePassword() {
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      toast.error(error.message);
      return;
    }
    setNewPassword("");
    toast.success("Password updated");
  }

  async function handleDelete() {
    if (!confirm("Delete your account permanently? This cannot be undone.")) return;
    try {
      await api.users.deleteMe();
      await supabase.auth.signOut();
      toast.success("Account deleted");
      router.push("/");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not delete account");
    }
  }

  if (loading || !user || !ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
          progress_activity
        </span>
      </div>
    );
  }

  const inputCls =
    "w-full px-5 py-3.5 rounded-full bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md disabled:opacity-60";

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col relative">
      <Header />
      <DashboardSidebar />

      <main className="md:ml-64 pt-24 md:pt-28 pb-24 md:pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen w-full">
        <div className="mb-10">
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">Settings</h1>
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
                <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface ml-1 mb-2 block">
                  Email Address
                </label>
                <input className={inputCls} value={email} disabled title="Email is managed by your login provider" />
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface ml-1 mb-2 block">
                  Location
                </label>
                <input
                  className={inputCls}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lagos, Nigeria"
                />
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface ml-1 mb-2 block">
                  Bio
                </label>
                <textarea
                  className="w-full px-5 py-3.5 rounded-2xl bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md min-h-[90px]"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell us about yourself"
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
              <Toggle
                label="Push Notifications"
                desc="Receive updates about new attractions and deals"
                value={notifications}
                onToggle={() => setNotifications((v) => !v)}
              />
              <div className="h-px bg-outline-variant/20" />
              <Toggle
                label="Dark Mode"
                desc="Save your preferred theme"
                value={darkMode}
                onToggle={() => setDarkMode((v) => !v)}
              />
            </div>
          </section>

          <section className="glass-panel rounded-xl p-6 md:p-8">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">lock</span>
              Security
            </h2>
            <div className="space-y-4">
              <label className="font-label-md text-label-md text-on-surface ml-1 block">
                Change Password
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    className={inputCls}
                    type={showPwd ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((v) => !v)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-outline hover:text-secondary cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPwd ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
                <button
                  onClick={handleChangePassword}
                  className="bg-surface-container-high text-on-surface font-label-md text-label-md px-6 py-3.5 rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer whitespace-nowrap"
                >
                  Update Password
                </button>
              </div>
            </div>
          </section>

          <section className="glass-panel rounded-xl p-6 md:p-8 border border-error/20">
            <h2 className="font-headline-md text-headline-md text-error mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">warning</span>
              Danger Zone
            </h2>
            <button
              onClick={handleDelete}
              className="text-left px-5 py-4 rounded-xl bg-error/5 hover:bg-error/10 transition-colors flex items-center justify-between cursor-pointer w-full"
            >
              <span className="font-label-md text-label-md text-error">Delete Account</span>
              <span className="material-symbols-outlined text-error">chevron_right</span>
            </button>
          </section>

          <div className="flex items-center gap-4">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-primary text-on-primary font-label-md text-label-md px-8 py-3.5 rounded-full hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
            >
              <span className="material-symbols-outlined text-sm">
                {saved ? "check" : "save"}
              </span>
              {saving ? "Saving…" : saved ? "Saved" : "Save Changes"}
            </button>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}

function Toggle({
  label,
  desc,
  value,
  onToggle,
}: {
  label: string;
  desc: string;
  value: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-label-md text-label-md text-on-surface">{label}</p>
        <p className="text-sm text-on-surface-variant">{desc}</p>
      </div>
      <button
        onClick={onToggle}
        className={`w-12 h-7 rounded-full transition-colors relative cursor-pointer ${
          value ? "bg-secondary" : "bg-outline-variant"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform shadow-sm ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

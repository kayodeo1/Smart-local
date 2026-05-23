import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full z-40 flex-col py-6 bg-surface-container-low backdrop-blur-xl border-r border-white/20 shadow-lg w-64 pt-24">
      <div className="px-6 mb-8 flex items-center gap-4">
        <img
          alt="User Profile"
          className="w-12 h-12 rounded-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuClEeqykfNsvsms4GMDBjNTI_BZLnpkF-zXEkiI-ClHQPbyFinP-s5NkP5oUYdQjRX7AR1dqJ-4fTMQuffkzQTODcHPYwkiRgdRIXIChB0fJwW6NAuxkU2lCkE3WMEDLm71-BWsj6vIOBbGhdkiu_4cSvCi_bX9kcssoKgbtyfD-rqIi9dcL50AnJ8p_tLo4xU0YmND8JwMrG_liDKlGonoYKl9oYgPRe7uenIKCaMr0NV29bFYv5cydO0O5aeV8abGiP-_Mw0aLFMq"
        />
        <div>
          <h3 className="font-label-md text-label-md font-bold text-primary">Traveler Profile</h3>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">Lagos, Nigeria</p>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-2">
        <Link
          className="bg-secondary-container text-on-secondary-container rounded-xl mx-2 px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform duration-200"
          href="/dashboard"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            dashboard
          </span>
          <span className="font-label-md text-label-md">Dashboard</span>
        </Link>
        <Link
          className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 px-4 py-3 rounded-xl flex items-center gap-3 hover:translate-x-1 transition-transform duration-200"
          href="/dashboard/itineraries"
        >
          <span className="material-symbols-outlined">map</span>
          <span className="font-label-md text-label-md">My Itineraries</span>
        </Link>
        <Link
          className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 px-4 py-3 rounded-xl flex items-center gap-3 hover:translate-x-1 transition-transform duration-200"
          href="/dashboard/saved"
        >
          <span className="material-symbols-outlined">bookmark</span>
          <span className="font-label-md text-label-md">Saved Places</span>
        </Link>
        <Link
          className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 px-4 py-3 rounded-xl flex items-center gap-3 hover:translate-x-1 transition-transform duration-200"
          href="/ai-planner"
        >
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-label-md text-label-md">AI Insights</span>
        </Link>
        <Link
          className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 px-4 py-3 rounded-xl flex items-center gap-3 hover:translate-x-1 transition-transform duration-200"
          href="/dashboard/settings"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </Link>
      </nav>
      <div className="px-4 mt-auto">
        <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined">add</span>
          Plan New Trip
        </button>
      </div>
    </aside>
  );
}

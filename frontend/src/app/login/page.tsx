"use client";

import { useState } from "react";
import Link from "next/link";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="w-full h-screen flex flex-col md:flex-row overflow-hidden bg-background">
      {/* Left Side: Immersive Visuals (Suppresses Nav as per Transactional rule) */}
      <section className="hidden md:flex relative w-1/2 h-full items-end p-margin-desktop overflow-hidden bg-surface-dim">
        {/* Background Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Nigerian Landscape"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD84AOju_VSCALfbseMYP6hsg0znbjg-hWhDMqPvDcdJ_m0qbVDV-jknNuQezbX5nTTfhaBTxeanv1tudQtZ59NZ0F1bZcq1-E1VIFMP0K3xzyuH2HOYf3auJOeJlgbFDV5ypdpdYdoTsAP0yZlB7gfGS_A_ftUMYuVVrxkdGcqzUs1XUpgNB0_qANxBjB2jy0QD6ed3ruEAV_oF2GocRIyDhf6fizc6ct7iCNb0x3GDaT2c-PpFo0YVzn93EuixzbYTzP9haJLbLBI"
        />
        <div className="absolute inset-0 image-overlay"></div>
        {/* Nigerian Uli Motif Watermark (Subtle Pattern) */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        {/* Glassmorphic Quote Overlay */}
        <div className="glass-card p-10 rounded-lg max-w-lg z-10 relative mb-12 transform hover:translate-y-[-4px] transition-transform duration-500">
          <span
            className="material-symbols-outlined text-secondary text-4xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            format_quote
          </span>
          <p className="font-headline-md text-headline-md text-primary leading-tight mb-4">
            &quot;To travel is to discover that everyone is wrong about other
            countries.&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-outline"></div>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
              Aldous Huxley
            </span>
          </div>
        </div>
        {/* Brand Identity Anchor */}
        <div className="absolute top-margin-desktop left-margin-desktop z-20">
          <Link href="/" className="font-headline-md text-headline-md font-bold text-white tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed">
              explore
            </span>
            Smart Local
          </Link>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="w-full md:w-1/2 h-full flex items-center justify-center bg-surface relative px-margin-mobile md:px-margin-desktop">
        {/* Mobile Brand Header */}
        <div className="absolute top-8 left-margin-mobile md:hidden">
          <Link href="/" className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            Smart Local
          </Link>
        </div>
        <div className="w-full max-w-[440px] flex flex-col">
          {/* Header Text */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">
              Welcome Back
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The soul of Nigeria awaits your next discovery. Log in to your
              AI-powered itinerary.
            </p>
          </div>
          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="space-y-2">
              <label
                className="font-label-md text-label-md text-on-surface ml-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative group">
                <input
                  className="w-full px-6 py-4 rounded-full bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                />
                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary pointer-events-none">
                  mail
                </span>
              </div>
            </div>
            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label
                  className="font-label-md text-label-md text-on-surface"
                  htmlFor="password"
                >
                  Password
                </label>
                <Link
                  className="font-label-sm text-label-sm text-secondary hover:underline underline-offset-4"
                  href="#"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <input
                  className="w-full px-6 py-4 rounded-full bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-outline hover:text-secondary cursor-pointer"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>
            {/* Primary Action */}
            <button
              className="w-full py-5 bg-secondary text-on-secondary rounded-full font-label-md text-label-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 cursor-pointer"
              type="submit"
            >
              Continue to My Journey
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
          {/* Divider */}
          <div className="my-10 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
            <span className="font-label-sm text-label-sm text-outline">
              or explore with
            </span>
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
          </div>
          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 rounded-full ring-1 ring-outline-variant hover:bg-surface-container-low transition-colors active:scale-95 duration-200 cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Google"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMGcGWmX6dpmI7ZFYaEqJtkqACJ30Xe96MX-Ej4KX5A2kGeZwpkONyYteTVvw6Jn-WkUn2zRQHcijkAGQqCr68_z-ubGEmW-hNEyZZnVHxIBlBflJF540ULs-4xVCx3-5MH9GtQFTHCR4AT0D6FC8WECdsxTsn9GqPigfNC4shC9IFsw5nc0gU-6aZDrrR9avkA8nStbbQG-AgXYzV4ysS7s9DhToqRZmEG1mWqfO7hSwa6q3UoURgMVLr2_UXxx2hV3BeDaUZohwk"
              />
              <span className="font-label-md text-label-md text-on-surface">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 rounded-full ring-1 ring-outline-variant hover:bg-surface-container-low transition-colors active:scale-95 duration-200 cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Apple"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuln_W02Gh0C54l-7AusBxk7LLFlpf111hXKhFEE4dIeLKuOqQyKCt27w8vxsf2Gv3cH_N6MKQxUMHmV9egkX03gJ1e4ZqDmn9ML8sz2wYwFPc21AhXE5nHoKPwp2aQVNb9-l55ifGaBygSlbQUmgSVrPWL-Oz4Ol2GeaunN8JdvaUaQ2tDk9xsk6fHYjOFEdkCzyo41FKIatW4grc-zbJSPswKrEa-JNEIw7vFYGbiuufSaV1dmekrwuC16yhLuaq-lKR8pDBbWeo"
              />
              <span className="font-label-md text-label-md text-on-surface">
                Apple
              </span>
            </button>
          </div>
          {/* Footer Sign Up */}
          <p className="mt-12 text-center font-body-md text-body-md text-on-surface-variant">
            New to Nigeria&apos;s best guide?
            <Link
              className="text-secondary font-bold hover:underline underline-offset-4 ml-1"
              href="#"
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* Subtle Decorative Element */}
        <div className="absolute bottom-8 right-margin-desktop hidden md:block">
          <div className="flex items-center gap-4 opacity-40">
            <span className="font-label-sm text-label-sm uppercase tracking-tighter">
              Powered by SmartLocal AI
            </span>
            <div className="w-2 h-2 rounded-full bg-secondary-fixed emerald-pulse"></div>
          </div>
        </div>
      </section>

      {/* AI Assistant Widget */}
      <div
        className="fixed bottom-8 right-8 z-50 group cursor-pointer"
        id="ai-widget"
      >
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white shadow-2xl emerald-pulse transition-transform hover:scale-110 active:scale-90">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            auto_awesome
          </span>
        </div>
        {/* Tooltip */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 bg-surface-container-high rounded-lg text-on-surface text-label-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-outline-variant/30">
          Need help signing in?
        </div>
      </div>
    </main>
  );
}

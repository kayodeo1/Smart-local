"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="w-full h-screen flex flex-col md:flex-row overflow-hidden bg-background">
      <section className="hidden md:flex relative w-1/2 h-full items-end p-margin-desktop overflow-hidden bg-surface-dim">
        <img
          alt="Nigerian night sky"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1504541316369-51f315861945?w=800&q=80&fit=crop"
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="glass-card p-10 rounded-lg max-w-lg z-10 relative mb-12">
          <span
            className="material-symbols-outlined text-secondary text-4xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lock_reset
          </span>
          <p className="font-headline-md text-headline-md text-primary leading-tight mb-4">
            &quot;The journey of a thousand miles begins with a single step.&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-outline" />
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
              Lao Tzu
            </span>
          </div>
        </div>
        <Link href="/" className="absolute top-margin-desktop left-margin-desktop z-20 font-headline-md text-headline-md font-bold text-white tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-fixed">explore</span>
          Smart Local
        </Link>
      </section>

      <section className="w-full md:w-1/2 h-full flex items-center justify-center bg-surface relative px-margin-mobile md:px-margin-desktop">
        <div className="absolute top-8 left-margin-mobile md:hidden">
          <Link href="/" className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            Smart Local
          </Link>
        </div>
        <div className="w-full max-w-[440px] flex flex-col">
          <div className="mb-10 text-center md:text-left">
            <h2 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">
              Reset Password
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-6xl text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                mail
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Check Your Email</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                We&apos;ve sent a password reset link to <strong>{email}</strong>
              </p>
              <Link href="/login" className="text-secondary font-bold hover:underline underline-offset-4">
                Back to Login
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface ml-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    className="w-full px-6 py-4 rounded-full bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary pointer-events-none">
                    mail
                  </span>
                </div>
              </div>
              <button
                className="w-full py-5 bg-secondary text-on-secondary rounded-full font-label-md text-label-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 cursor-pointer"
                type="submit"
              >
                Send Reset Link
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-center font-body-md text-body-md text-on-surface-variant">
                Remember your password?
                <Link href="/login" className="text-secondary font-bold hover:underline underline-offset-4 ml-1">
                  Log in
                </Link>
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

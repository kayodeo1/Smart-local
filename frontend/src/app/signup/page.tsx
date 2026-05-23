"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="flex min-h-screen overflow-hidden bg-surface text-on-surface">
      {/* Left Side: Immersive Visual (Desktop Only) */}
      <section className="hidden lg:flex lg:w-1/2 relative p-12 overflow-hidden bg-primary-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Nigerian Nature Reserve"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%] brightness-75"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Z9TPOnlWqHLKZU6jZ6lcGyLAl8AUHDBj1-m34z478-rLDHaszce4R_qua7N0jralBFZX7mpO5fMEv-yDPhUJSzMb42_f5n6SH2LH628kxizwmE862n5Jh1VaSMYVT5v18FpQo79e1IFGX7ljAH3FlethFbI3nNhCC6wt4HudjceQDW8V1Z_RS2-0pj8mQBBPiRBuu6kp0jeNqPAxvTHwU5KIfUDnm2Oy2juC1QRdrH9QJJVcxR3oqtfcahXNCrJ4uAyGD4Mzdn16"
        />
        {/* Branding Over Image */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <span className="material-symbols-outlined text-secondary-fixed text-4xl">
              explore
            </span>
            <h1 className="font-headline-md text-headline-md font-bold text-on-primary-fixed tracking-tight">
              Smart Local
            </h1>
          </Link>
          <div className="glass-card p-8 rounded-lg max-w-md animate-in slide-in-from-left duration-1000">
            <div className="flex -space-x-3 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Explorer 1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA79mditnwEd5k9z9fDzb203fJBz-v2Kf5Rf_cH5YqZJlg2dzx2ZWwo-lKPWarJFt0FE3ahtl1p_fBOCoAMeOo4krfTdgR1E3id-mBwSTms_nffarwHleRh51FkPl-Np0WGbY2vWtU3yEJ3kTbBrnc2aJpDjwzi_ByweJJeknIcrX_wj3Qx4GKSNiQvBqmQal6zXKZsyl2axtnTJE-VFQM6Uhw5CmBdCpXYSsCga6JAWV-U6RDKybE2Y4F9_Y5Dy5wLRNAH7A0kQlEj"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Explorer 2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5fK23qeJE9UKQ1XNeD0zsfDK6hvvpfkd6-Pd4qpjIXjUPmi3VDeUpgDGhqjnw6gvTfzs2ZFnfOuxhUgIJaWCIhJCbm-_iWdX6M9bJ0-dm8FEn9mIcZKLvy_kNmzsPylBV88cwAswjP4M6Z7hFyTxRFI1eVFmoOJ138NKXZtcpbgPq2cYT-k-EQfqaBg5v1mc06Rwb_UjWfhXTCa7DON4HhEneUhUT8h8PlWfe9Tj6bOCk46345T2Z2FQoHzu6Avp6lk7JigBBAL54"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Explorer 3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRIeWDab0VUdyRaDcgJd1M7I2JgefeIlRD_ZiA14S61dUTvWKggT4BoCCo6ybRahIB4qtoOKiOXCTsYWELDA5wcxkGuSzk-DKK47EG3Rfrv--eRiafJjGD0TZNuo9HlxDGZEaBI6bYIyZ0LenWqfboUE8S3plGWaho5yutrSh9MlDz4da3IT81hLqcjU0fqY-SnMiZjmscvQRg7XidUr-_CHUF_N58VXVu_20cxVc7UCvmecV0utSJwmpDvFbg1zZzOUt467w2HsXQ"
              />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-md text-label-md">
                +2k
              </div>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Join thousands of explorers.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Experience Nigeria through the eyes of locals, powered by
              intelligent AI insights tailored just for you.
            </p>
            <div className="flex items-center gap-2 text-on-secondary-container">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-label-md text-label-md">
                Trusted by Nigerian Tourism Development Corporation
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-1 w-12 rounded-full bg-secondary"></div>
            <div className="h-1 w-4 rounded-full bg-white/40"></div>
            <div className="h-1 w-4 rounded-full bg-white/40"></div>
          </div>
        </div>
        {/* Subtle Nigerian Pattern Watermark */}
        <div className="absolute bottom-[-10%] right-[-5%] opacity-5 pointer-events-none">
          <svg height="400" viewBox="0 0 100 100" width="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h100v100H0z" fill="none"></path>
            <path
              d="M10 10l20 20m10-20l20 20m10-20l20 20M10 30l20 20m10-20l20 20m10-20l20 20"
              stroke="currentColor"
              strokeWidth="0.5"
            ></path>
          </svg>
        </div>
      </section>

      {/* Right Side: Signup Form */}
      <section className="w-full lg:w-1/2 bg-mesh flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile Branding */}
          <div className="flex items-center gap-2 mb-10 lg:hidden">
            <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
              <span className="material-symbols-outlined text-secondary text-3xl">
                explore
              </span>
              <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
                Smart Local
              </span>
            </Link>
          </div>
          <div className="mb-10">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">
              Get Started
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Create an account to start planning your next Nigerian adventure
              with AI.
            </p>
          </div>
          {/* Social Signups */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 px-6 py-3 bg-surface-container rounded-lg border border-outline-variant hover:bg-surface-container-high transition-colors group cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              <span className="font-label-md text-label-md">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 px-6 py-3 bg-surface-container rounded-lg border border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-on-surface" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
              <span className="font-label-md text-label-md">GitHub</span>
            </button>
          </div>
          <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t border-outline-variant"></div>
            <span className="flex-shrink mx-4 font-label-sm text-label-sm text-outline">
              OR CONTINUE WITH EMAIL
            </span>
            <div className="flex-grow border-t border-outline-variant"></div>
          </div>
          {/* Signup Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                className="font-label-md text-label-md text-on-surface"
                htmlFor="name"
              >
                Full Name
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors pointer-events-none">
                  person
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/50"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="font-label-md text-label-md text-on-surface"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors pointer-events-none">
                  mail
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/50"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="font-label-md text-label-md text-on-surface"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors pointer-events-none">
                  lock
                </span>
                <input
                  className="w-full pl-12 pr-12 py-4 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all placeholder:text-outline/50"
                  id="password"
                  name="password"
                  placeholder="Min. 8 characters"
                  required
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface cursor-pointer"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-start gap-3 py-2">
              <input
                className="mt-1 rounded text-secondary focus:ring-secondary cursor-pointer"
                id="terms"
                type="checkbox"
                required
              />
              <label
                className="font-body-md text-body-md text-on-surface-variant"
                htmlFor="terms"
              >
                I agree to the{" "}
                <Link className="text-secondary font-semibold hover:underline" href="#">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link className="text-secondary font-semibold hover:underline" href="#">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
            <button
              className={`w-full font-headline-md text-headline-md py-4 rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer ${
                isSuccess
                  ? "bg-emerald-600 text-white"
                  : "bg-secondary text-on-secondary"
              }`}
              type="submit"
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin">
                    progress_activity
                  </span>
                  Creating...
                </>
              ) : isSuccess ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Success!
                </>
              ) : (
                <>
                  Create Account
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </>
              )}
            </button>
          </form>
          <p className="mt-8 text-center font-body-md text-body-md text-on-surface-variant">
            Already have an account?{" "}
            <Link
              className="text-secondary font-bold hover:underline decoration-2 underline-offset-4"
              href="/login"
            >
              Login here
            </Link>
          </p>
        </div>
      </section>

      {/* AI Floating Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          className="w-16 h-16 rounded-full bg-secondary text-on-secondary shadow-[0_0_20px_rgba(0,108,73,0.3)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-300 relative group overflow-hidden cursor-pointer"
          id="aiWidget"
        >
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform ai-pulse">
            psychology
          </span>
          <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-secondary opacity-30 blur-lg animate-pulse rounded-full"></div>
        </button>
      </div>
    </main>
  );
}

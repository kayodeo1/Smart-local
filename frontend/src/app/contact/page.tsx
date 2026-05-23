"use client";

import { useState } from "react";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-4">
              Contact Us
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Have a question, suggestion, or partnership inquiry? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div>
              {sent ? (
                <div className="glass-panel rounded-xl p-10 text-center h-full flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-secondary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary mb-2">Message Sent!</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-panel rounded-xl p-6 md:p-8 space-y-5">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface ml-1 mb-2 block" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      className="w-full px-5 py-3.5 rounded-full bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md"
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface ml-1 mb-2 block" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full px-5 py-3.5 rounded-full bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md"
                      id="email"
                      placeholder="you@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface ml-1 mb-2 block" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full px-5 py-4 rounded-2xl bg-surface-container-low border-0 ring-1 ring-outline-variant focus:ring-2 focus:ring-secondary transition-all outline-none font-body-md text-body-md resize-none"
                      id="message"
                      rows={5}
                      placeholder="Tell us how we can help..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-sm">send</span>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="glass-panel rounded-xl p-6">
                <h2 className="font-headline-md text-headline-md text-primary mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  {[
                    { icon: "mail", label: "Email", value: "hello@smartlocal.ng" },
                    { icon: "call", label: "Phone", value: "+234 800 SMART" },
                    { icon: "location_on", label: "Location", value: "Lagos, Nigeria" },
                    { icon: "schedule", label: "Response Time", value: "Within 24 hours" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary text-sm">{item.icon}</span>
                      </div>
                      <div>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">{item.label}</p>
                        <p className="font-label-md text-label-md text-on-surface">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-xl p-6">
                <h2 className="font-headline-md text-headline-md text-primary mb-3">Partnerships</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Interested in partnering with Smart Local? We collaborate with local businesses, tourism boards, and travel agencies.
                </p>
                <button className="bg-secondary text-on-secondary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-secondary/90 transition-all cursor-pointer">
                  Apply for Partnership
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
      <Footer />
    </div>
  );
}

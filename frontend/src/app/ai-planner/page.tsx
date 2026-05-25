"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Header from "@/components/layout/header";
import MobileNav from "@/components/layout/mobile-nav";
import Footer from "@/components/layout/footer";
import { useRequireAuth } from "@/lib/use-require-auth";
import { api } from "@/lib/api";
import type { ChatMessage, GeneratedItinerary } from "@/lib/types";

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm your Nigerian travel assistant. Tell me where you'd like to go and what you enjoy, and I'll help you plan. Or use the panel on the right to generate a full itinerary.",
};

const VISIT_ICONS: Record<string, string> = {
  morning: "wb_twilight",
  afternoon: "wb_sunny",
  evening: "nights_stay",
  night: "bedtime",
  flexible: "schedule",
};

// Strip any stray Markdown the model might still emit (bold markers, bullets, headers).
function cleanText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/(^|\n)\s*[*-]\s+/g, "$1• ")
    .replace(/(^|\n)#{1,6}\s*/g, "$1")
    .replace(/\*/g, "")
    .trim();
}

export default function AIPlannerPage() {
  const { user, loading } = useRequireAuth();
  const router = useRouter();

  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [destination, setDestination] = useState("Lagos");
  const [days, setDays] = useState(1);
  const [notes, setNotes] = useState("");
  const [generated, setGenerated] = useState<GeneratedItinerary | null>(null);
  const [generating, setGenerating] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || chatLoading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setChatLoading(true);
    try {
      const reply = await api.ai.chat(
        next.filter((m) => m.role !== "assistant" || m !== GREETING),
        { destination },
      );
      setMessages((m) => [...m, { role: "assistant", content: reply.content }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Sorry, I couldn't process that right now. Please try again.",
        },
      ]);
      toast.error(err instanceof Error ? err.message : "Chat failed");
    } finally {
      setChatLoading(false);
    }
  }

  async function handleGenerate() {
    if (!destination.trim() || generating) return;
    setGenerating(true);
    setGenerated(null);
    try {
      const result = await api.ai.generateItinerary({
        destination: destination.trim(),
        duration_days: days,
        preferences: notes.trim() ? { notes: notes.trim() } : {},
      });
      setGenerated(result);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not generate itinerary");
    } finally {
      setGenerating(false);
    }
  }

  async function handleSave() {
    if (!generated || saving) return;
    setSaving(true);
    try {
      const created = await api.itineraries.create({
        title: generated.title,
        destination: generated.destination,
        duration: generated.duration,
        total_budget: generated.total_budget,
        cover_image: generated.cover_image,
      });
      for (const [i, stop] of generated.stops.entries()) {
        await api.itineraries.addStop(created.id, {
          title: stop.title,
          location: stop.location,
          category: stop.category,
          visit_time: ["morning", "afternoon", "evening", "night"].includes(stop.visit_time)
            ? stop.visit_time
            : "flexible",
          duration: stop.duration,
          estimated_cost: stop.estimated_cost,
          description: stop.description,
          order: stop.order ?? i,
        });
      }
      toast.success("Itinerary saved!");
      router.push(`/itineraries/${created.id}`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save itinerary");
    } finally {
      setSaving(false);
    }
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
          progress_activity
        </span>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 flex flex-col lg:flex-row gap-gutter pattern-overlay pt-24">
        {/* Chat assistant */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-28 lg:h-[calc(100vh-140px)]">
          <div className="glass-card rounded-xl p-6 flex flex-col h-full shadow-sm min-h-[500px]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/30">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  psychology
                </span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">AI Travel Assistant</h2>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Your local guide in {destination}
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-2 mb-4 no-scrollbar">
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div
                    key={i}
                    className="self-end bg-surface-container rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]"
                  >
                    <p className="font-body-md text-body-md text-on-surface whitespace-pre-wrap">
                      {m.content}
                    </p>
                  </div>
                ) : (
                  <div key={i} className="self-start flex gap-3 max-w-[90%]">
                    <div className="w-8 h-8 rounded-full bg-secondary-container shrink-0 flex items-center justify-center text-on-secondary-container mt-1">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        psychology
                      </span>
                    </div>
                    <div className="bg-surface-bright border border-outline-variant/30 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                      <p className="font-body-md text-body-md text-on-surface whitespace-pre-wrap">
                        {cleanText(m.content)}
                      </p>
                    </div>
                  </div>
                ),
              )}
              {chatLoading && (
                <div className="self-start flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary-container shrink-0 flex items-center justify-center text-on-secondary-container mt-1">
                    <span className="material-symbols-outlined text-sm animate-spin">
                      progress_activity
                    </span>
                  </div>
                  <div className="bg-surface-bright border border-outline-variant/30 rounded-2xl rounded-tl-sm px-4 py-3 text-on-surface-variant text-sm">
                    Thinking…
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSend} className="relative mt-auto">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-surface-container-highest border-0 rounded-full py-4 pl-6 pr-14 font-body-md text-body-md text-on-surface focus:ring-2 focus:ring-secondary focus:outline-none placeholder-on-surface-variant transition-all"
                placeholder="Ask about places, food, transport…"
                type="text"
              />
              <button
                type="submit"
                disabled={chatLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer disabled:opacity-60"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  send
                </span>
              </button>
            </form>
          </div>
        </aside>

        {/* Generator + timeline */}
        <section className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="glass-card rounded-xl p-6">
            <h1 className="font-display-lg-mobile md:font-display-lg text-on-surface mb-1">
              AI Trip Planner
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Generate a personalised day-by-day itinerary, then save it to your trips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
              <div className="flex-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant ml-1 mb-1 block">
                  Destination
                </label>
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Lagos, Abuja, Calabar"
                  className="w-full bg-surface-container-highest border-0 rounded-full py-3 px-5 font-body-md text-body-md focus:ring-2 focus:ring-secondary focus:outline-none"
                />
              </div>
              <div className="w-full sm:w-28">
                <label className="font-label-sm text-label-sm text-on-surface-variant ml-1 mb-1 block">
                  Days
                </label>
                <input
                  type="number"
                  min={1}
                  max={14}
                  value={days}
                  onChange={(e) => setDays(Math.max(1, Math.min(14, Number(e.target.value) || 1)))}
                  className="w-full bg-surface-container-highest border-0 rounded-full py-3 px-5 font-body-md text-body-md focus:ring-2 focus:ring-secondary focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="font-label-sm text-label-sm text-on-surface-variant ml-1 mb-1 block">
                What would you like to do? <span className="opacity-60">(optional)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. I love street food and live music, travelling with kids, want a relaxed pace and mostly free activities…"
                rows={2}
                className="w-full bg-surface-container-highest border-0 rounded-2xl py-3 px-5 font-body-md text-body-md focus:ring-2 focus:ring-secondary focus:outline-none resize-none"
              />
              <button
                onClick={handleGenerate}
                disabled={generating}
                className="mt-3 w-full sm:w-auto bg-secondary-container text-on-secondary-container ai-glow flex items-center justify-center gap-2 px-6 py-3 rounded-full hover:bg-secondary-fixed transition-colors font-label-md text-label-md cursor-pointer disabled:opacity-60"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
                {generating ? "Generating…" : "Generate Itinerary"}
              </button>
            </div>
          </div>

          {generating && (
            <div className="glass-card rounded-xl p-12 flex flex-col items-center justify-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary animate-spin text-4xl">
                progress_activity
              </span>
              <p className="font-body-md">Crafting your itinerary…</p>
            </div>
          )}

          {generated && !generating && (
            <div className="glass-card rounded-xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    {generated.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    {generated.destination} • {generated.duration} • {generated.stops.length}{" "}
                    stops{generated.total_budget ? ` • ${generated.total_budget}` : ""}
                  </p>
                </div>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-primary text-on-primary flex items-center gap-2 px-5 py-2.5 rounded-full hover:opacity-90 transition-all font-label-md text-label-md cursor-pointer disabled:opacity-60 whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-sm">bookmark_add</span>
                  {saving ? "Saving…" : "Save Itinerary"}
                </button>
              </div>

              <div className="relative pl-2 md:pl-4">
                {generated.stops.map((stop, i) => (
                  <div key={i} className="relative pl-12 md:pl-16 mb-8 group">
                    <div className="absolute left-0 top-1 w-12 h-12 bg-surface-bright rounded-full border-2 border-secondary flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        {VISIT_ICONS[stop.visit_time] ?? "place"}
                      </span>
                    </div>
                    <div className="glass-card rounded-lg p-4 md:p-5">
                      <h4 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                        {stop.title}
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-2">
                        {stop.location}
                        {stop.category ? ` • ${stop.category}` : ""}
                      </p>
                      {stop.description && (
                        <p className="font-body-md text-body-md text-on-surface mb-3">
                          {stop.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-4 text-on-surface-variant text-sm">
                        <span className="flex items-center gap-1 capitalize">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {stop.visit_time} • {stop.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">payments</span>
                          {stop.estimated_cost}
                        </span>
                      </div>
                    </div>
                    {i < generated.stops.length - 1 && (
                      <div className="absolute left-[23px] md:left-[31px] top-14 bottom-[-16px] w-0.5 bg-outline-variant/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {!generated && !generating && (
            <div className="glass-card rounded-xl p-12 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl mb-3">map</span>
              <p className="font-body-md">
                Enter a destination and tap Generate to create your itinerary.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

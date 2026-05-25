"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import type { AttractionList } from "@/lib/types";
import { api } from "@/lib/api";
import { useAuth } from "@/lib/auth-context";

export default function AttractionCard({ attraction }: { attraction: AttractionList }) {
  const { user } = useAuth();
  const [saved, setSaved] = useState(attraction.is_saved);
  const [saving, setSaving] = useState(false);

  async function toggleSave(e: React.MouseEvent) {
    e.preventDefault();
    if (!user) {
      toast.error("Sign in to save attractions");
      return;
    }
    setSaving(true);
    try {
      if (saved) {
        await api.bookmarks.remove(attraction.id);
        setSaved(false);
      } else {
        await api.bookmarks.add(attraction.id);
        setSaved(true);
      }
    } catch {
      toast.error("Could not update bookmark");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col relative">
      {/* Save Button */}
      <button
        onClick={toggleSave}
        disabled={saving}
        className="absolute top-4 right-4 z-10 bg-surface/80 backdrop-blur-md p-2 rounded-full text-on-surface hover:text-primary transition-colors shadow-sm cursor-pointer"
      >
        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}>
          bookmark
        </span>
      </button>

      <div className="h-48 relative overflow-hidden bg-surface-container-high">
        <Link href={`/discover/${attraction.id}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={attraction.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            src={attraction.image}
          />
        </Link>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/discover/${attraction.id}`}>
            <h3 className="font-headline-md text-[20px] leading-tight text-primary group-hover:text-secondary transition-colors cursor-pointer">
              {attraction.name}
            </h3>
          </Link>
          <div className="flex items-center text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-2 py-1 rounded-md">
            <span
              className="material-symbols-outlined text-[16px] text-[#F59E0B] mr-1"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            {attraction.rating}
          </div>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-2 line-clamp-1">
          {attraction.location}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {attraction.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-surface-container border border-outline-variant/20 px-2.5 py-1 rounded-md font-label-sm text-[11px] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-label-md text-label-md text-primary">{attraction.price_display}</span>
        </div>
      </div>
    </div>
  );
}

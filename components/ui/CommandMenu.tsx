"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Globe, MapPin, Share2, MessageCircle, Cpu, Activity, Flame, GraduationCap, ArrowRight, X, Calculator, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  title: string;
  category: "Services" | "Industries" | "Tools" | "Pages";
  icon: React.ReactNode;
  href: string;
  description?: string;
}

export const CommandMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const commandItems: CommandItem[] = [
    {
      id: "srv-web",
      title: "Business Websites (Next.js)",
      category: "Services",
      icon: <Globe className="w-4 h-4 text-blue-500" />,
      href: "/services#websites",
      description: "Sub-second, mobile-first websites engineered for high conversion",
    },
    {
      id: "srv-gmb",
      title: "Local Growth & Google Maps",
      category: "Services",
      icon: <MapPin className="w-4 h-4 text-teal-500" />,
      href: "/services#local-growth",
      description: "Rank #1 on Google Maps in your city radius",
    },
    {
      id: "srv-social",
      title: "Social Presence & Branding",
      category: "Services",
      icon: <Share2 className="w-4 h-4 text-indigo-500" />,
      href: "/services#social-presence",
      description: "High-trust Instagram & LinkedIn branding assets",
    },
    {
      id: "srv-lead",
      title: "Lead Generation & WhatsApp Funnels",
      category: "Services",
      icon: <MessageCircle className="w-4 h-4 text-emerald-500" />,
      href: "/services#lead-generation",
      description: "Direct WhatsApp routing and 60-second automated response",
    },
    {
      id: "srv-ai",
      title: "AI Automation & CRM Workflows",
      category: "Services",
      icon: <Cpu className="w-4 h-4 text-purple-500" />,
      href: "/services#ai-automation",
      description: "Automated booking, 24/7 AI triage, and no-show reminders",
    },
    {
      id: "ind-health",
      title: "Dental & Healthcare Clinics",
      category: "Industries",
      icon: <Activity className="w-4 h-4 text-blue-600" />,
      href: "/industries#healthcare",
      description: "Patient acquisition and automated WhatsApp appointment reminders",
    },
    {
      id: "ind-fit",
      title: "Fitness Studios & Gyms",
      category: "Industries",
      icon: <Flame className="w-4 h-4 text-teal-600" />,
      href: "/industries#fitness",
      description: "1-Day VIP trial pass generators and renewal automations",
    },
    {
      id: "ind-edu",
      title: "Coaching Institutes & Academies",
      category: "Industries",
      icon: <GraduationCap className="w-4 h-4 text-indigo-600" />,
      href: "/industries#education",
      description: "Instant syllabus delivery on WhatsApp and demo class booking",
    },
    {
      id: "tool-audit",
      title: "Free Digital Presence Audit",
      category: "Tools",
      icon: <ShieldCheck className="w-4 h-4 text-teal-500" />,
      href: "/audit",
      description: "Get a comprehensive 4-pillar audit of your digital presence",
    },
    {
      id: "tool-roi",
      title: "Interactive ROI & Lead Calculator",
      category: "Tools",
      icon: <Calculator className="w-4 h-4 text-brand-accent" />,
      href: "/#roi",
      description: "Estimate additional monthly revenue and appointment lift",
    },
    {
      id: "page-pricing",
      title: "Transparent Pricing Tiers",
      category: "Pages",
      icon: <ArrowRight className="w-4 h-4 text-slate-400" />,
      href: "/pricing",
      description: "Starter ₹10,000, Business ₹20,000, Growth ₹30,000+",
    },
    {
      id: "page-work",
      title: "Work & Live Concept Demos",
      category: "Pages",
      icon: <ArrowRight className="w-4 h-4 text-slate-400" />,
      href: "/work",
      description: "Interactive mockups and lead flow teardowns",
    },
  ];

  const filteredItems = commandItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open menu
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 pt-16 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, industries, pricing, tools... (or press ESC to exit)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-100">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.href)}
                className="w-full p-3 rounded-xl text-left hover:bg-slate-50 flex items-center justify-between gap-3 group transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-xs transition-colors">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900 truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-accent group-hover:translate-x-1 transition-all shrink-0" />
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-slate-500">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>Navigation Shortcut:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px]">
              Ctrl+K
            </kbd>
          </div>
          <span>Select any item to jump directly</span>
        </div>
      </div>
    </div>
  );
};

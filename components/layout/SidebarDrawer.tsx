"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Sparkles,
  ArrowRight,
  Globe,
  MapPin,
  Flame,
  Activity,
  GraduationCap,
  Calculator,
  ShieldCheck,
  MessageCircle,
  Clock,
  Layers,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

export const SidebarDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onOpenCommandMenu: () => void;
}> = ({ isOpen, onClose, onOpenCommandMenu }) => {
  const pathname = usePathname();
  const [leadQueryId, setLeadQueryId] = useState("");
  const [leadStatusResult, setLeadStatusResult] = useState<string | null>(null);

  const handleCheckStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadQueryId.trim()) return;
    setLeadStatusResult("Audit Status: In Review by Senior Engineer (Turnaround: Within 24 Hours)");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl border-l border-slate-200 overflow-y-auto flex flex-col justify-between p-6 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <BrandLogo />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search / Command Palette Button */}
          <button
            onClick={() => {
              onClose();
              onOpenCommandMenu();
            }}
            className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-xs sm:text-sm text-slate-600 flex items-center justify-between gap-2 mb-6 group transition-colors"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-brand-accent" />
              <span>Search services, demos, pricing...</span>
            </div>
            <kbd className="px-2 py-0.5 rounded bg-slate-200/80 text-[10px] font-mono text-slate-600">
              Ctrl+K
            </kbd>
          </button>

          {/* Quick Navigation Links */}
          <div className="space-y-1 mb-6">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Primary Directory
            </div>

            <Link
              href="/"
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors",
                pathname === "/" ? "bg-blue-50 text-brand-accent" : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <span>Home Overview</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/services"
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors",
                pathname.startsWith("/services") ? "bg-blue-50 text-brand-accent" : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <span>Services (5 Pillars)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/industries"
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors",
                pathname.startsWith("/industries") ? "bg-blue-50 text-brand-accent" : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <span>Industry Blueprints</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/work"
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors",
                pathname.startsWith("/work") ? "bg-blue-50 text-brand-accent" : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <span>Live Concept Demos & Work</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/process"
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors",
                pathname.startsWith("/process") ? "bg-blue-50 text-brand-accent" : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <span>5-Stage Execution Framework</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/pricing"
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors",
                pathname.startsWith("/pricing") ? "bg-blue-50 text-brand-accent" : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <span>Pricing Packages (From ₹10,000)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors",
                pathname.startsWith("/about") ? "bg-blue-50 text-brand-accent" : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <span>About SETU & Mission</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/faq"
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors",
                pathname.startsWith("/faq") ? "bg-blue-50 text-brand-accent" : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <span>Frequently Asked Questions</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Quick Lead Status Lookup */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
            <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Track Existing Audit Submission</span>
            </div>
            <p className="text-[11px] text-slate-500 mb-3">
              Enter your Audit ID to check review progress.
            </p>
            <form onSubmit={handleCheckStatus} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. cmt4g6..."
                value={leadQueryId}
                onChange={(e) => setLeadQueryId(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 shrink-0"
              >
                Track
              </button>
            </form>
            {leadStatusResult && (
              <div className="mt-2.5 p-2 rounded bg-teal-50 border border-teal-200 text-[11px] text-teal-900 font-medium">
                {leadStatusResult}
              </div>
            )}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="pt-4 border-t border-slate-100 space-y-2.5">
          <Link
            href="/audit"
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-brand-accent hover:bg-brand-accentHover text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Request Free Digital Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/919109265673?text=Hi%20SETU%2C%20I%20would%20like%20to%20connect%20with%20your%20team."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>
      </div>
    </div>
  );
};

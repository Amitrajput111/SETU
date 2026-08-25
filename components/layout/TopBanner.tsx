import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse shrink-0" />
          <span className="text-[11px] text-slate-300">
            <strong>Indore HQ &amp; Remote Worldwide:</strong> Engineering sub-second websites, local Google dominance &amp; AI automations.
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <Link
            href="/audit"
            className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1 group"
          >
            <span>Request Free Audit</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <span className="text-slate-600 hidden md:inline">|</span>
          <a
            href="https://wa.me/919109265673?text=Hi%20SETU%2C%20I%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors hidden md:inline"
          >
            WhatsApp Direct: +91 91092 65673
          </a>
        </div>
      </div>
    </div>
  );
};

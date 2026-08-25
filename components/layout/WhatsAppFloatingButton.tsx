"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp customer support"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 pointer-events-auto"
    >
      {/* Subtle Hover Tooltip */}
      {isHovered && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 animate-in fade-in slide-in-from-right-2 duration-150">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with SETU Team</span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20SETU%2C%20I%20would%20like%20to%20discuss%20growing%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SETU on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        )}
      >
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="sr-only">Chat with SETU on WhatsApp</span>
      </a>
    </aside>
  );
};

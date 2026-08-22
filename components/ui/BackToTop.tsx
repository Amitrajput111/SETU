"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={cn(
        "fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full bg-white text-slate-700 border border-slate-200 shadow-md hover:shadow-lg hover:border-slate-300 hover:text-brand-accent flex items-center justify-center transition-all duration-200 animate-in fade-in zoom-in-95 focus:outline-none focus:ring-2 focus:ring-brand-accent"
      )}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

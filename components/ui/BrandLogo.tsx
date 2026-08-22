import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  subtitle?: string;
  href?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  variant = "auto",
  subtitle,
  href = "/",
}) => {
  const content = (
    <div className={cn("inline-flex items-center gap-2.5 group select-none", className)}>
      {/* Minimal Architectural Bridge Icon */}
      <div className="relative w-8 h-8 rounded-lg bg-brand-dark flex items-center justify-center border border-slate-700/60 shadow-sm group-hover:border-brand-accent transition-colors duration-200">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          {/* Left Pier */}
          <rect x="5" y="10" width="3" height="15" rx="1.5" fill="#3B82F6" />
          {/* Right Pier */}
          <rect x="24" y="10" width="3" height="15" rx="1.5" fill="#14B8A6" />
          {/* Bridge Arch Connection */}
          <path
            d="M6.5 13C10 8 22 8 25.5 13"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Horizontal Deck Line */}
          <path
            d="M4 17H28"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Suspension Cables */}
          <line x1="12" y1="10" x2="12" y2="17" stroke="#64748B" strokeWidth="1.2" />
          <line x1="16" y1="9" x2="16" y2="17" stroke="#64748B" strokeWidth="1.2" />
          <line x1="20" y1="10" x2="20" y2="17" stroke="#64748B" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={cn(
              "font-bold text-xl tracking-tight transition-colors",
              variant === "dark"
                ? "text-white"
                : variant === "light"
                ? "text-brand-textPrimary"
                : "text-slate-900 dark:text-white"
            )}
          >
            SETU
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
        </div>
        {subtitle ? (
          <span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
            {subtitle}
          </span>
        ) : (
          <span className="text-[10px] font-medium tracking-wider text-slate-500 dark:text-slate-400">
            GROWTH & AUTOMATION
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-md">
        {content}
      </Link>
    );
  }

  return content;
};

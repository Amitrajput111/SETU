import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  href?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  variant = "auto",
  href = "/",
}) => {
  const content = (
    <div className={cn("inline-flex items-center gap-2.5 group select-none", className)}>
      {/* Minimal Architectural Bridge Icon */}
      <div className="relative w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 shadow-xs group-hover:border-brand-accent transition-colors duration-200">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <rect x="5" y="10" width="3" height="15" rx="1.5" fill="#3B82F6" />
          <rect x="24" y="10" width="3" height="15" rx="1.5" fill="#14B8A6" />
          <path
            d="M6.5 13C10 8 22 8 25.5 13"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M4 17H28"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line x1="12" y1="10" x2="12" y2="17" stroke="#64748B" strokeWidth="1.2" />
          <line x1="16" y1="9" x2="16" y2="17" stroke="#64748B" strokeWidth="1.2" />
          <line x1="20" y1="10" x2="20" y2="17" stroke="#64748B" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Clean Wordmark */}
      <div className="flex items-center gap-1.5">
        <span
          className={cn(
            "font-extrabold text-xl tracking-tight transition-colors",
            variant === "dark"
              ? "text-white"
              : variant === "light"
              ? "text-slate-900"
              : "text-slate-900"
          )}
        >
          SETU
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
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

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
      {/* TechGrowX Icon — Upward growth arrow with tech nodes */}
      <div className="relative w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 shadow-xs group-hover:border-brand-accent transition-colors duration-200">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          {/* Upward trend line */}
          <path
            d="M5 22 L11 15 L17 18 L27 7"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Arrow tip */}
          <path
            d="M22 7 L27 7 L27 12"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Node dots */}
          <circle cx="11" cy="15" r="2" fill="#14B8A6" />
          <circle cx="17" cy="18" r="2" fill="#14B8A6" />
          <circle cx="27" cy="7" r="2" fill="#14B8A6" />
        </svg>
      </div>

      {/* TechGrowX Wordmark */}
      <div className="flex items-center gap-0.5">
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
          Tech
        </span>
        <span className="font-extrabold text-xl tracking-tight text-brand-accent">
          Grow
        </span>
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
          X
        </span>
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

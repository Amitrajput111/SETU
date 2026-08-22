import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  isDark = false,
  className,
}) => {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignStyles[align], className)}>
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5",
            isDark
              ? "bg-slate-800 text-teal-400 border border-slate-700/60"
              : "bg-blue-50 text-brand-accent border border-blue-100"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight",
          isDark ? "text-white" : "text-brand-textPrimary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-slate-400" : "text-brand-textSecondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

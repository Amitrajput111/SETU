import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "blue" | "teal" | "amber" | "dark" | "outline" | "concept";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "neutral",
  size = "md",
  ...props
}) => {
  const baseStyles = "inline-flex items-center font-medium rounded-full tracking-wide";

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  const variantStyles = {
    neutral: "bg-slate-100 text-slate-700 border border-slate-200/80",
    blue: "bg-blue-50 text-blue-700 border border-blue-200/80",
    teal: "bg-teal-50 text-teal-700 border border-teal-200/80",
    amber: "bg-amber-50 text-amber-800 border border-amber-200/80",
    dark: "bg-brand-dark2 text-slate-200 border border-slate-700",
    outline: "bg-transparent text-slate-600 border border-slate-300",
    concept: "bg-purple-50 text-purple-700 border border-purple-200 font-semibold tracking-normal",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};

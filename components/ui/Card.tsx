import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "interactive" | "dark" | "flat";
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const baseStyles = "rounded-xl transition-all duration-200";

  const variantStyles = {
    default: "bg-white border border-slate-200/80 shadow-card",
    bordered: "bg-white border border-slate-200 shadow-sm",
    interactive:
      "bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:border-slate-300 hover:-translate-y-0.5 cursor-pointer",
    dark: "bg-brand-dark2 border border-slate-800 text-slate-100 shadow-darkCard",
    flat: "bg-slate-50 border border-slate-200/70",
  };

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
};

import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "white" | "light" | "dark" | "navy" | "transparent";
  spacing?: "sm" | "md" | "lg" | "none";
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  variant = "white",
  spacing = "lg",
  id,
  ...props
}) => {
  const variantStyles = {
    white: "bg-white text-slate-900",
    light: "bg-[#F8FAFC] text-slate-900",
    dark: "bg-[#0B1220] text-white",
    navy: "bg-[#111827] text-white",
    transparent: "bg-transparent",
  };

  const spacingStyles = {
    none: "py-0",
    sm: "py-10 sm:py-14",
    md: "py-14 sm:py-20",
    lg: "py-20 sm:py-28",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden transition-colors",
        variantStyles[variant],
        spacingStyles[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

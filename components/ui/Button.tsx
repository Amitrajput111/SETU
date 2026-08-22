import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "secondary" | "outline" | "ghost" | "whatsapp" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      isExternal,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5 h-8",
      md: "text-sm px-4 py-2.5 gap-2 h-10",
      lg: "text-base px-6 py-3.5 gap-2.5 h-12 font-semibold",
    };

    const variantStyles = {
      primary:
        "bg-brand-dark hover:bg-brand-dark2 text-white shadow-sm border border-slate-700/50 hover:border-slate-600 focus-visible:ring-brand-dark",
      accent:
        "bg-brand-accent hover:bg-brand-accentHover text-white shadow-sm hover:shadow focus-visible:ring-brand-accent",
      secondary:
        "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 focus-visible:ring-slate-400",
      outline:
        "bg-transparent hover:bg-slate-100 text-slate-800 border border-slate-300 hover:border-slate-400 focus-visible:ring-slate-400",
      ghost:
        "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 focus-visible:ring-slate-300",
      whatsapp:
        "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm hover:shadow focus-visible:ring-[#25D366]",
      dark:
        "bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 focus-visible:ring-slate-700",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const innerContent = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (isExternal || href.startsWith("http") || href.startsWith("https") || href.startsWith("https://wa.me") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {innerContent}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {innerContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

Button.displayName = "Button";

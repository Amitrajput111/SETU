import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface PricingCardProps {
  name: string;
  price: string;
  billingFrequency?: string;
  tagline: string;
  features: string[];
  isPopular?: boolean;
  popularBadge?: string;
  auditHref?: string;
  recommendationHref?: string;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  billingFrequency = "one-time setup",
  tagline,
  features,
  isPopular = false,
  popularBadge = "Recommended",
  auditHref = "/audit",
  recommendationHref = "/contact",
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
        isPopular
          ? "bg-slate-900 text-white border-2 border-brand-accent shadow-xl lg:-translate-y-2 hover:border-brand-accent"
          : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:border-slate-300",
        className
      )}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-brand-accent text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
          {popularBadge}
        </div>
      )}

      <div>
        {/* Tier Name & Tagline */}
        <div className="mb-4">
          <h3 className={cn("text-2xl font-extrabold tracking-tight", isPopular ? "text-white" : "text-slate-900")}>
            {name}
          </h3>
          <p className={cn("text-xs leading-relaxed mt-1 font-normal", isPopular ? "text-slate-300" : "text-slate-600")}>
            {tagline}
          </p>
        </div>

        {/* Pricing Tag */}
        <div className="mb-6 pb-6 border-b border-slate-200/60 dark:border-slate-800">
          <div className="flex items-baseline gap-1.5">
            <span className={cn("text-3xl sm:text-4xl font-extrabold tracking-tight font-mono", isPopular ? "text-white" : "text-slate-900")}>
              {price}
            </span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1 font-medium">
            {billingFrequency} · 100% transparent scope
          </div>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3 mb-8">
          <div className={cn("text-xs font-bold uppercase tracking-wider", isPopular ? "text-teal-400" : "text-slate-400")}>
            Key Capabilities:
          </div>
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
              <Check className={cn("w-4 h-4 shrink-0 mt-0.5", isPopular ? "text-teal-400" : "text-brand-accent")} />
              <span className={isPopular ? "text-slate-200 font-medium" : "text-slate-700 font-normal"}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
        <Button
          variant={isPopular ? "accent" : "primary"}
          size="md"
          href={auditHref}
          className="w-full font-bold shadow-xs group-hover:shadow-md transition-shadow"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Get Free Audit &amp; Quote
        </Button>
        <Link
          href={recommendationHref}
          className={cn(
            "block text-center text-xs font-semibold hover:underline py-1",
            isPopular ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
          )}
        >
          Talk to an Engineer &rarr;
        </Link>
      </div>
    </div>
  );
};

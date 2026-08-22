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
        "relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-200",
        isPopular
          ? "bg-slate-900 text-white border-2 border-brand-accent shadow-xl lg:-translate-y-2"
          : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:border-slate-300",
        className
      )}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-accent text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
          {popularBadge}
        </div>
      )}

      <div>
        {/* Tier Name & Tagline */}
        <div className="mb-4">
          <h3 className={cn("text-xl font-bold tracking-tight", isPopular ? "text-white" : "text-slate-900")}>
            {name}
          </h3>
          <p className={cn("text-xs leading-relaxed mt-1", isPopular ? "text-slate-300" : "text-slate-600")}>
            {tagline}
          </p>
        </div>

        {/* Pricing Tag */}
        <div className="mb-6 pb-6 border-b border-slate-200/60 dark:border-slate-800">
          <div className="flex items-baseline gap-1.5">
            <span className={cn("text-3xl sm:text-4xl font-extrabold tracking-tight", isPopular ? "text-white" : "text-slate-900")}>
              {price}
            </span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            {billingFrequency} · Final scope confirmed in writing
          </div>
        </div>

        {/* Features Checklist (Key Differentiators) */}
        <div className="space-y-3 mb-8">
          <div className={cn("text-xs font-bold uppercase tracking-wider", isPopular ? "text-teal-400" : "text-slate-400")}>
            Key Capabilities:
          </div>
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
              <Check className={cn("w-4 h-4 shrink-0 mt-0.5", isPopular ? "text-teal-400" : "text-brand-accent")} />
              <span className={isPopular ? "text-slate-200" : "text-slate-700"}>{feature}</span>
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
          className="w-full font-bold"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Get Free Audit
        </Button>
        <Link
          href={recommendationHref}
          className={cn(
            "block text-center text-xs font-semibold hover:underline py-1",
            isPopular ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
          )}
        >
          Get My Recommendation &rarr;
        </Link>
      </div>
    </div>
  );
};

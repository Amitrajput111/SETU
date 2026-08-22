import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
  href: string;
  ctaText?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  capabilities,
  href,
  ctaText = "Explore Service",
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      <div>
        {/* Top: Icon & Number */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:bg-slate-100">
            {icon}
          </div>
          <span className="font-mono text-xs font-semibold text-slate-400">
            {number}
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2.5">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Capabilities Checklist */}
        <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-2 border-t border-slate-100">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-brand-accent transition-colors"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

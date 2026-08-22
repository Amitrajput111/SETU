import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IndustryCardProps {
  title: string;
  badge?: string;
  imageSrc?: string;
  icon: React.ReactNode;
  subNiches: string[];
  commonProblem: string;
  setuSolution: string;
  href: string;
  ctaText?: string;
  className?: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  badge,
  imageSrc,
  icon,
  subNiches,
  commonProblem,
  setuSolution,
  href,
  ctaText = "View Industry Blueprint",
  className,
}) => {
  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md",
        className
      )}
    >
      {/* Top Image Banner */}
      {imageSrc && (
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${title} Industry Context`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
            <span className="text-xs font-bold drop-shadow-xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-teal" />
              <span>{title}</span>
            </span>
            {badge && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/20 backdrop-blur-xs text-white">
                {badge}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Header if no image */}
          {!imageSrc && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800">
                {icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {title}
                </h3>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {subNiches.slice(0, 3).join(" · ")}
                </div>
              </div>
            </div>
          )}

          {imageSrc && (
            <div className="text-[11px] font-medium text-slate-500">
              {subNiches.slice(0, 3).join(" · ")}
            </div>
          )}

          {/* Problem */}
          <div className="p-3 rounded-xl bg-red-50/60 border border-red-100 text-xs space-y-1">
            <div className="font-bold text-red-800 flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
              <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
              <span>Common Problem:</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-normal">{commonProblem}</p>
          </div>

          {/* Solution */}
          <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-100 text-xs space-y-1">
            <div className="font-bold text-teal-900 flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
              <CheckCircle2 className="w-3 h-3 text-teal-600 shrink-0" />
              <span>SETU Solution:</span>
            </div>
            <p className="text-slate-700 leading-relaxed font-medium">{setuSolution}</p>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-3 border-t border-slate-100">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-brand-accent transition-colors"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

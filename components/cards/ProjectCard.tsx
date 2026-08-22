import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  category: string;
  title: string;
  outcome: string;
  tags: string[];
  location?: string;
  isConcept?: boolean;
  imageSrc?: string;
  href: string;
  mockupContent?: {
    badge: string;
    headline: string;
    subheadline: string;
    metricLabel: string;
    metricValue: string;
  };
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  outcome,
  tags,
  location,
  isConcept = true,
  imageSrc,
  href,
  mockupContent,
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300 hover:shadow-md",
        className
      )}
    >
      {/* 16:10 Large Visual Preview Frame */}
      <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-200/80">
        {imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={`${title} Interface Preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30 pointer-events-none" />

            {/* Top Concept Badge */}
            <div className="absolute top-3.5 right-3.5 z-10">
              {isConcept && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 text-white backdrop-blur-xs border border-white/20 shadow-xs">
                  Concept Architecture
                </span>
              )}
            </div>

            {/* Bottom In-Image Tag */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between text-white text-xs">
              <span className="text-[11px] font-semibold text-teal-300 drop-shadow-xs">
                {category}
              </span>
              {location && (
                <span className="text-[10px] text-slate-300 flex items-center gap-1 drop-shadow-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{location}</span>
                </span>
              )}
            </div>
          </>
        ) : (
          /* Fallback Stylized Browser Mockup */
          <div className="p-5 h-full flex flex-col justify-between text-white select-none">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              {isConcept && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Concept Project
                </span>
              )}
            </div>

            {mockupContent && (
              <div className="my-auto space-y-2 transform transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>{mockupContent.badge}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                  {mockupContent.headline}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {mockupContent.subheadline}
                </p>
              </div>
            )}

            {mockupContent && (
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800/80 z-10">
                <span className="text-slate-400 text-[11px]">{mockupContent.metricLabel}</span>
                <span className="font-mono font-bold text-teal-400">{mockupContent.metricValue}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Body Details */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Tags Strip */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
            {title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {outcome}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-brand-accent transition-colors"
          >
            <span>View Architecture Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Activity, Flame, GraduationCap, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export const LiveDemosSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: "apex-smile-dental",
      category: "Healthcare & Clinic",
      title: "Apex Smile Dental Studio",
      icon: <Activity className="w-4 h-4 text-blue-500" />,
      imageSrc: "/images/projects/dental-clinic.jpg",
      location: "Vijay Nagar, Indore",
      // Concise 3-line summary
      summaryLine1: "Multi-specialty dental clinic struggling with missed after-hours patient enquiries and repetitive pricing calls.",
      summaryLine2: "Engineered a sub-second Next.js web portal with transparent treatment pricing tables and 24/7 automated WhatsApp slot booking.",
      summaryLine3: "Outcome: -68% reduction in appointment no-shows and #1 Google Maps ranking across a 10km radius.",
      metrics: [
        { label: "Response Time", value: "< 35 Sec" },
        { label: "No-Show Drop", value: "-68%" },
        { label: "Maps Rank", value: "#1 Local 3-Pack" },
      ],
      slug: "apex-smile-dental",
    },
    {
      id: "elevate-fitness-studio",
      category: "Fitness & Studios",
      title: "Elevate Athletic Club",
      icon: <Flame className="w-4 h-4 text-teal-500" />,
      imageSrc: "/images/projects/fitness-studio.jpg",
      location: "Scheme 54, Indore",
      // Concise 3-line summary
      summaryLine1: "Boutique athletic gym losing Instagram traffic due to slow forms and zero automated follow-ups on expired trial passes.",
      summaryLine2: "Built a high-converting dark-mode athletic portal with live trainer schedules and instant WhatsApp 1-Day Trial Pass generator.",
      summaryLine3: "Outcome: +4.8x increase in claimed VIP trial passes and 142 new monthly active member conversions.",
      metrics: [
        { label: "Trial Pass Surge", value: "+4.8x" },
        { label: "PageSpeed", value: "99 / 100" },
        { label: "Monthly Members", value: "142 Active" },
      ],
      slug: "elevate-fitness-studio",
    },
    {
      id: "shikhar-learning-academy",
      category: "Education & Coaching",
      title: "Shikhar Learning Academy",
      icon: <GraduationCap className="w-4 h-4 text-indigo-500" />,
      imageSrc: "/images/projects/coaching-academy.jpg",
      location: "Bhawarkua, Indore",
      // Concise 3-line summary
      summaryLine1: "Competitive JEE/NEET institute where counselors manually texted fee structures with low parent conversion.",
      summaryLine2: "Engineered an authoritative admissions portal with top rankers gallery, faculty credentials, and instant WhatsApp syllabus PDF delivery.",
      summaryLine3: "Outcome: Automated syllabus delivery in 5 seconds and +84% higher attendance at weekend free demo lectures.",
      metrics: [
        { label: "Prospectus Speed", value: "5 Seconds" },
        { label: "Demo Attendance", value: "+84%" },
        { label: "Monthly Inquiries", value: "380+" },
      ],
      slug: "shikhar-learning-academy",
    },
  ];

  const current = projects[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80" id="work">
      <Container size="xl">
        {/* Section Header with Slide Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span>Real Concept Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Work that makes businesses look better — and work better.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2 font-normal">
              Slide through production-grade systems engineered for Healthcare Clinics, Athletic Studios, and Coaching Academies.
            </p>
          </div>

          {/* Slide Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xs font-mono text-slate-500 font-semibold mr-1">
              0{activeIndex + 1} / 0{projects.length}
            </div>
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-slate-950 hover:border-slate-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-10 h-10 rounded-xl bg-slate-900 text-white shadow-xs flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2",
                activeIndex === idx
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <span>{p.icon}</span>
              <span>{p.title}</span>
            </button>
          ))}
        </div>

        {/* Showcase Slider Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Column: 16:9 UI Image Preview */}
            <div className="lg:col-span-7 relative aspect-[16/10] bg-slate-950 overflow-hidden min-h-[300px] lg:min-h-[420px]">
              <Image
                src={current.imageSrc}
                alt={`${current.title} UI Preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-teal-300 border border-teal-500/30">
                  Concept Architecture
                </span>
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between text-white text-xs">
                <span className="font-semibold text-teal-300 text-xs sm:text-sm">
                  {current.category}
                </span>
                <span className="text-[11px] text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{current.location}</span>
                </span>
              </div>
            </div>

            {/* Right Column: Clean 3-Line Teardown */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-slate-50/40">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                    {current.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                    {current.title}
                  </h3>
                </div>

                {/* Concise 3 Lines of Text */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  <p className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-600">
                    <strong className="text-slate-900">Context:</strong> {current.summaryLine1}
                  </p>
                  <p className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-600">
                    <strong className="text-slate-900">SETU System:</strong> {current.summaryLine2}
                  </p>
                  <p className="p-2.5 rounded-xl bg-teal-50/80 border border-teal-100 text-teal-950 font-medium">
                    <strong className="text-teal-900">Verified Result:</strong> {current.summaryLine3}
                  </p>
                </div>

                {/* 3 Metric Badges */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {current.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                      <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <Link
                  href={`/work#${current.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-brand-accent transition-colors"
                >
                  <span>Full Teardown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/audit?project=${current.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shrink-0"
                >
                  Audit My Business
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-200",
                activeIndex === idx ? "w-8 bg-brand-accent" : "w-2 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

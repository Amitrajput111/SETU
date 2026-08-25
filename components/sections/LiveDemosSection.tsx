"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Activity,
  Flame,
  GraduationCap,
  MapPin,
  ExternalLink,
  Lock,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const LiveDemosSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const projects = [
    {
      id: "care-clinic",
      category: "Healthcare & Clinic",
      title: "CARE CLINIC",
      icon: <Activity className="w-4 h-4 text-blue-500" />,
      imageSrc: "/images/projects/dental-clinic.jpg",
      location: "Indore, MP",
      displayUrl: "careclinic-indore.vercel.app",
      liveDemoUrl: "https://client-wheat-seven-38.vercel.app/",
      summaryLine1: "Multi-specialty clinic struggling with missed after-hours patient enquiries and front-desk appointment chaos.",
      summaryLine2: "Engineered a sub-second Next.js web portal with transparent doctor consultation fees and 24/7 automated WhatsApp booking.",
      summaryLine3: "Outcome: -68% reduction in appointment no-shows and #1 Google Maps ranking across a 10km radius.",
      metrics: [
        { label: "Response Time", value: "< 35 Sec" },
        { label: "No-Show Drop", value: "-68%" },
        { label: "Maps Rank", value: "#1 Local 3-Pack" },
      ],
      slug: "care-clinic",
    },
    {
      id: "aura-fitness",
      category: "Fitness & Luxury Gym",
      title: "AURA FITNESS",
      icon: <Flame className="w-4 h-4 text-teal-500" />,
      imageSrc: "/images/projects/fitness-studio.jpg",
      location: "Indore, MP",
      displayUrl: "aurafitness-elite.vercel.app",
      liveDemoUrl: "https://gym-web-demo-beta.vercel.app/",
      summaryLine1: "Boutique luxury gym losing social traffic due to slow forms and zero automated follow-ups on trial passes.",
      summaryLine2: "Built a high-converting dark-mode athletic portal with live trainer schedules and instant WhatsApp 1-Day VIP Pass generator.",
      summaryLine3: "Outcome: +4.8x increase in claimed VIP trial passes and 142 new monthly active member conversions.",
      metrics: [
        { label: "Trial Pass Surge", value: "+4.8x" },
        { label: "PageSpeed", value: "99 / 100" },
        { label: "Monthly Members", value: "142 Active" },
      ],
      slug: "aura-fitness",
    },
    {
      id: "edurise-academy",
      category: "Education & Coaching",
      title: "EduRise Academy",
      icon: <GraduationCap className="w-4 h-4 text-indigo-500" />,
      imageSrc: "/images/projects/coaching-academy.jpg",
      location: "Indore, MP",
      displayUrl: "edurise-admissions.vercel.app",
      liveDemoUrl: "https://edurise-js16rxcct-amitrajput111s-projects.vercel.app/",
      summaryLine1: "Competitive JEE/NEET institute where counselors manually texted fee structures with low parent conversion.",
      summaryLine2: "Engineered an authoritative admissions portal with top rankers gallery, faculty credentials, and instant WhatsApp syllabus PDF delivery.",
      summaryLine3: "Outcome: Automated syllabus delivery in 5 seconds and +84% higher attendance at weekend free demo lectures.",
      metrics: [
        { label: "Prospectus Speed", value: "5 Seconds" },
        { label: "Demo Attendance", value: "+84%" },
        { label: "Monthly Inquiries", value: "380+" },
      ],
      slug: "edurise",
    },
  ];

  // Auto-sliding 5s timer
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, projects.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
      id="work"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container size="xl">
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span>Live Production Demos</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse ml-1" />
              <span className="text-[10px] text-teal-700 font-mono font-bold">Auto-Slide</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Work that makes businesses look better — and work better.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2 font-normal">
              Slide through live client systems engineered for Healthcare Clinics, Luxury Fitness Clubs, and Coaching Academies.
            </p>
          </div>

          {/* Navigation Controls */}
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
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2",
                activeIndex === idx
                  ? "bg-slate-900 text-white shadow-sm scale-[1.01]"
                  : "bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <span>{p.icon}</span>
              <span>{p.title}</span>
            </button>
          ))}
        </div>

        {/* Slider Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
          {/* Animated Auto-Slide Progress Bar */}
          <div className="w-full h-1 bg-slate-100 relative overflow-hidden">
            <div
              key={activeIndex}
              className={cn(
                "h-full bg-brand-accent transition-all duration-[5000ms] ease-linear",
                isPaused ? "opacity-40" : "w-full"
              )}
              style={{ width: isPaused ? "100%" : undefined }}
            />
          </div>

          {/* Continuous Sliding Horizontal Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left Column: Clean Browser Frame with ZERO text overlay on image */}
                  <div className="lg:col-span-7 flex flex-col bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-200/80">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>

                      {/* Mock URL Bar */}
                      <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 font-mono flex items-center justify-center gap-1.5 truncate">
                        <Lock className="w-3 h-3 text-teal-400 shrink-0" />
                        <span className="text-teal-300">https://</span>
                        <span className="truncate">{project.displayUrl}</span>
                      </div>

                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 shrink-0"
                      >
                        <span className="hidden sm:inline">Open</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Pure Image Container: 100% clean without text collisions */}
                    <div className="relative aspect-[16/10] w-full flex-1 min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] bg-slate-950">
                      <Image
                        src={project.imageSrc}
                        alt={`${project.title} Web Interface Preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>

                  {/* Right Column: Structured Teardown Text & Actions */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-slate-50/40">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                              {project.category}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                              • <MapPin className="w-3 h-3" /> {project.location}
                            </span>
                          </div>
                          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                            {project.title}
                          </h3>
                        </div>

                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold border border-teal-200 transition-colors shrink-0"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      {/* 3 Clear Teardown Cards */}
                      <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <div className="p-3 rounded-xl bg-white border border-slate-200/90 text-slate-600 shadow-2xs">
                          <strong className="text-slate-900 block mb-0.5">Client Context:</strong>
                          <span>{project.summaryLine1}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200/90 text-slate-600 shadow-2xs">
                          <strong className="text-slate-900 block mb-0.5">SETU System:</strong>
                          <span>{project.summaryLine2}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-teal-50/80 border border-teal-100 text-teal-950 shadow-2xs">
                          <strong className="text-teal-900 block mb-0.5 font-bold">Verified Result:</strong>
                          <span className="font-medium">{project.summaryLine3}</span>
                        </div>
                      </div>

                      {/* 3 Metric Pills */}
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                            <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                            <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono mt-0.5">{m.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-3">
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-colors"
                      >
                        <span>Open Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <Link
                        href={`/audit?project=${project.slug}`}
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                      >
                        Audit My Business &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicator Dots with State Indicator */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <div className="flex items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeIndex === idx ? "w-8 bg-brand-accent" : "w-2 bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            {isPaused ? "(Paused on hover)" : "(Auto-sliding every 5s)"}
          </span>
        </div>
      </Container>
    </section>
  );
};

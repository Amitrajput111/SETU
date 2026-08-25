"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Globe,
  MapPin,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Activity,
  Flame,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const previewTabs = [
    {
      id: "pipeline",
      label: "Growth Pipeline",
      icon: <Globe className="w-3.5 h-3.5" />,
      title: "Discovery → Next.js Web → WhatsApp → Calendar",
      imageSrc: "/images/system-flowchart.jpg",
      highlight: "Zero Lead Leakage",
      summary: "How search visitors automatically turn into confirmed bookings on your calendar.",
      liveUrl: "/#work",
    },
    {
      id: "care-clinic",
      label: "CARE CLINIC",
      icon: <Activity className="w-3.5 h-3.5" />,
      title: "CARE CLINIC — Healthcare Portal",
      imageSrc: "/images/projects/dental-clinic.jpg",
      highlight: "-68% No-Shows · Top 3 Google Maps",
      summary: "Transparent doctor consultation fees with 24/7 automated WhatsApp slot booking.",
      liveUrl: "https://client-wheat-seven-38.vercel.app/",
    },
    {
      id: "aura-fitness",
      label: "AURA FITNESS",
      icon: <Flame className="w-3.5 h-3.5" />,
      title: "AURA FITNESS — Luxury Health Club",
      imageSrc: "/images/projects/fitness-studio.jpg",
      highlight: "+4.8x VIP Passes Claimed",
      summary: "Live class timetables with instant 1-Day VIP Trial Pass delivery on WhatsApp.",
      liveUrl: "https://gym-web-demo-beta.vercel.app/",
    },
    {
      id: "edurise",
      label: "EduRise Academy",
      icon: <GraduationCap className="w-3.5 h-3.5" />,
      title: "EduRise Academy — Admissions Engine",
      imageSrc: "/images/projects/coaching-academy.jpg",
      highlight: "Instant 5s Prospectus Delivery",
      summary: "Top rankers gallery and automated syllabus & fee PDF delivery to parents.",
      liveUrl: "https://edurise-js16rxcct-amitrajput111s-projects.vercel.app/",
    },
  ];

  const current = previewTabs[activeTab];

  // Auto-sliding timer (5.5s interval)
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setActiveTab((prev) => (prev === previewTabs.length - 1 ? 0 : prev + 1));
    }, 5500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, previewTabs.length]);

  return (
    <section
      className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT: Core Value & Action */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span>Digital Growth + Intelligent Automation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Turn Your Digital Presence Into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-600 to-brand-teal">
                Customer Growth Engine.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              SETU helps growing businesses build fast Next.js websites, dominate Google Maps, capture qualified leads on WhatsApp, and automate appointment workflows.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="accent"
                size="lg"
                href="/audit"
                className="font-bold shadow-sm hover:shadow-md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Get Free Business Audit
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/#work"
                className="font-semibold"
              >
                See Our Work
              </Button>
            </div>

            {/* Capability Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-xs">
                ⚡ Sub-Second Next.js
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-xs">
                📍 Google Maps Top 3
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-xs">
                💬 WhatsApp Cloud API
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 shadow-xs">
                🤖 AI Calendar Booking
              </span>
            </div>
          </div>

          {/* RIGHT: Live Visual Showcase Slider */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-white">
              {/* Tab Selector Header */}
              <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2 overflow-x-auto">
                <div className="flex items-center gap-1.5">
                  {previewTabs.map((tab, idx) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(idx)}
                      className={cn(
                        "px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0",
                        activeTab === idx
                          ? "bg-teal-500 text-slate-950 font-bold shadow-xs"
                          : "text-slate-400 hover:text-white hover:bg-slate-800"
                      )}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <span className="text-[10px] font-mono text-teal-400 hidden sm:inline shrink-0 pr-1">
                  {isPaused ? "Paused" : "Auto"}
                </span>
              </div>

              {/* Progress Line */}
              <div className="w-full h-0.5 bg-slate-800 relative overflow-hidden">
                <div
                  key={activeTab}
                  className={cn(
                    "h-full bg-teal-400 transition-all duration-[5500ms] ease-linear",
                    isPaused ? "opacity-40" : "w-full"
                  )}
                  style={{ width: isPaused ? "100%" : undefined }}
                />
              </div>

              {/* Visual 16:9 Image Viewport */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={current.imageSrc}
                  alt={`${current.title} Preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-xs text-teal-300 border border-teal-500/30">
                    {current.highlight}
                  </span>
                </div>

                {/* Bottom Caption Bar */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between text-xs bg-slate-950/70 p-2 rounded-xl backdrop-blur-xs border border-white/10">
                  <span className="text-slate-300 text-[11px] truncate max-w-[75%]">
                    {current.summary}
                  </span>
                  {current.liveUrl.startsWith("http") ? (
                    <a
                      href={current.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-300 hover:text-white font-bold text-xs shrink-0 flex items-center gap-1"
                    >
                      <span>Live ↗</span>
                    </a>
                  ) : (
                    <Link
                      href={current.liveUrl}
                      className="text-teal-300 hover:text-white font-bold text-xs shrink-0 flex items-center gap-0.5"
                    >
                      <span>Explore &rarr;</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

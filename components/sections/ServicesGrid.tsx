"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Globe,
  MapPin,
  Share2,
  MessageCircle,
  Cpu,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ServicesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const services = [
    {
      id: "websites",
      number: "01",
      title: "High-Performance Websites",
      category: "Web Infrastructure",
      displayUrl: "system.setu.in/websites",
      shortDescription: "Custom Next.js web applications engineered for sub-second page loads, mobile responsiveness, and high conversion.",
      imageSrc: "/images/services/websites.jpg",
      capabilities: [
        "Sub-second load times on 4G mobile networks (99+ PageSpeed)",
        "Search-engine-ready semantic structure & JSON-LD schemas",
        "Mobile-first responsive architecture with zero layout shift",
        "Direct Click-to-WhatsApp funnels & appointment modals",
      ],
      href: "/#services",
      icon: <Globe className="w-4 h-4 text-blue-500" />,
      outcomeMetric: "99 / 100 PageSpeed",
    },
    {
      id: "local-growth",
      number: "02",
      title: "Local Growth & Google Maps",
      category: "Local Visibility",
      displayUrl: "system.setu.in/local-seo",
      shortDescription: "Dominate the local 3-pack on Google Maps and search queries when nearby customers search for your services.",
      imageSrc: "/images/services/local-growth.jpg",
      capabilities: [
        "Google Business Profile (GBP) deep category & photo optimization",
        "Local citation syndication across 40+ Indian business directories",
        "Automated 5-star review collection flywheel via WhatsApp",
        "Targeted local keyword rank tracking in a 10km radius",
      ],
      href: "/#services",
      icon: <MapPin className="w-4 h-4 text-teal-500" />,
      outcomeMetric: "Top 3 Google Maps Pack",
    },
    {
      id: "social-presence",
      number: "03",
      title: "Social Presence & Branding",
      category: "Digital Trust",
      displayUrl: "system.setu.in/branding",
      shortDescription: "Build a consistent, authoritative brand identity across Instagram, LinkedIn, and local social touchpoints.",
      imageSrc: "/images/services/social-presence.jpg",
      capabilities: [
        "Cohesive visual branding guidelines (colors, typography, cards)",
        "Structured 30-day content calendar with educational reels",
        "Authority carousels showcasing real before-and-after results",
        "Profile bio & link-in-bio high-converting lead routing",
      ],
      href: "/#services",
      icon: <Share2 className="w-4 h-4 text-indigo-500" />,
      outcomeMetric: "30-Day Cohesive Calendar",
    },
    {
      id: "lead-generation",
      number: "04",
      title: "Lead Systems & WhatsApp",
      category: "Conversion Funnels",
      displayUrl: "system.setu.in/whatsapp-leads",
      shortDescription: "Turn casual visitors into qualified enquiries with frictionless 2-step capture and instant WhatsApp routing.",
      imageSrc: "/images/services/lead-generation.jpg",
      capabilities: [
        "Frictionless 2-step inquiry capture forms with spam honeypot",
        "Official WhatsApp Business Cloud API integration",
        "Instant lead notification alerts dispatched to your team's phones",
        "Lead attribution tracking by campaign and search source",
      ],
      href: "/#services",
      icon: <MessageCircle className="w-4 h-4 text-emerald-500" />,
      outcomeMetric: "< 60s Lead Triage",
    },
    {
      id: "ai-automation",
      number: "05",
      title: "AI Business Automation",
      category: "Workflow Automation",
      displayUrl: "system.setu.in/ai-crm",
      shortDescription: "Automate repetitive customer queries, calendar scheduling, and reminder workflows without hiring extra staff.",
      imageSrc: "/images/services/ai-automation.jpg",
      capabilities: [
        "24/7 AI lead qualification & preliminary FAQ resolution",
        "Automated Google Calendar & CRM appointment slot synchronization",
        "Automated 24h & 2h WhatsApp appointment reminder triggers",
        "Zero phone tag: self-serve customer rescheduling portal",
      ],
      href: "/#services",
      icon: <Cpu className="w-4 h-4 text-purple-500" />,
      outcomeMetric: "-68% Appointment No-Shows",
    },
  ];

  // Auto-sliding 2-second timer
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, services.length]);

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="py-20 sm:py-28 bg-white border-b border-slate-200/80 scroll-mt-16 sm:scroll-mt-20 overflow-hidden"
      id="services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionHeading
              eyebrow="Core Services"
              title="Everything your business needs to grow digitally."
              description="Start with what you need. Build toward what comes next."
              className="text-left max-w-2xl mb-0"
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-slate-500 font-semibold mr-1">
              0{activeTab + 1} / 0{services.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous service slide"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next service slide"
              className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
          {services.map((s, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "p-3 sm:p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between",
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm scale-[1.01]"
                    : "bg-slate-50 text-slate-700 border-slate-200/90 hover:bg-white hover:border-slate-300"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center", isSelected ? "bg-slate-800" : "bg-white border border-slate-200")}>
                    {s.icon}
                  </div>
                  <span className={cn("font-mono text-[10px] font-bold", isSelected ? "text-teal-400" : "text-slate-400")}>
                    {s.number}
                  </span>
                </div>
                <div className={cn("text-xs sm:text-sm font-bold leading-tight", isSelected ? "text-white" : "text-slate-900")}>
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Visual Showcase Box (Continuous Horizontal Slider with Zero Overlays) */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
          {/* Animated Auto-Slide Progress Bar */}
          <div className="w-full h-1 bg-slate-200 relative overflow-hidden">
            <div
              key={activeTab}
              className={cn(
                "h-full bg-brand-accent transition-all duration-[2000ms] ease-linear",
                isPaused ? "opacity-40" : "w-full"
              )}
              style={{ width: isPaused ? "100%" : undefined }}
            />
          </div>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeTab * 100}%)` }}
          >
            {services.map((service) => (
              <div key={service.id} className="w-full shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  {/* Left: Capability Breakdown */}
                  <div className="lg:col-span-5 p-7 sm:p-10 space-y-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-1">
                        {service.category} · Service {service.number}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Capabilities List */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-200">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Engineered Deliverables:
                      </div>
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span className="font-medium">{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Link & Metric */}
                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        href={`/audit?service=${service.id}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-brand-accent transition-colors"
                      >
                        <span>Audit Your Setup</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-teal-700">
                        {service.outcomeMetric}
                      </span>
                    </div>
                  </div>

                  {/* Right: Clean Browser Mockup Frame with ZERO Overlay Text */}
                  <div className="lg:col-span-7 flex flex-col bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-200/80">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>

                      <div className="flex-1 max-w-xs mx-auto px-3 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 font-mono flex items-center justify-center gap-1.5 truncate">
                        <Lock className="w-3 h-3 text-teal-400 shrink-0" />
                        <span className="text-teal-300">https://</span>
                        <span className="truncate">{service.displayUrl}</span>
                      </div>

                      <span className="text-[10px] font-mono text-teal-400 font-bold">
                        SETU
                      </span>
                    </div>

                    {/* Pure Image Container */}
                    <div className="relative aspect-[16/10] w-full flex-1 min-h-[300px] lg:min-h-[440px] bg-slate-950">
                      <Image
                        src={service.imageSrc}
                        alt={`${service.title} Interface Dashboard`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

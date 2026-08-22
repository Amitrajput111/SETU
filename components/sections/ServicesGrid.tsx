"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Globe, MapPin, Share2, MessageCircle, Cpu, Check, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const ServicesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "websites",
      number: "01",
      title: "High-Performance Websites",
      category: "Web Infrastructure",
      shortDescription: "Custom Next.js web applications engineered for sub-second page loads, mobile responsiveness, and high conversion.",
      imageSrc: "/images/services/websites.jpg",
      capabilities: [
        "Sub-second load times on 4G mobile networks (99+ PageSpeed)",
        "Search-engine-ready semantic structure & JSON-LD schemas",
        "Mobile-first responsive architecture with zero layout shift",
        "Direct Click-to-WhatsApp funnels & appointment modals",
      ],
      href: "/services#websites",
      icon: <Globe className="w-4 h-4 text-blue-500" />,
      outcomeMetric: "99 / 100 PageSpeed",
    },
    {
      id: "local-growth",
      number: "02",
      title: "Local Growth & Google Maps",
      category: "Local Visibility",
      shortDescription: "Dominate the local 3-pack on Google Maps and search queries when nearby customers search for your services.",
      imageSrc: "/images/services/local-growth.jpg",
      capabilities: [
        "Google Business Profile (GBP) deep category & photo optimization",
        "Local citation syndication across 40+ Indian business directories",
        "Automated 5-star review collection flywheel via WhatsApp",
        "Targeted local keyword rank tracking in a 10km radius",
      ],
      href: "/services#local-growth",
      icon: <MapPin className="w-4 h-4 text-teal-500" />,
      outcomeMetric: "Top 3 Google Maps Pack",
    },
    {
      id: "social-presence",
      number: "03",
      title: "Social Presence & Branding",
      category: "Digital Trust",
      shortDescription: "Build a consistent, authoritative brand identity across Instagram, LinkedIn, and local social touchpoints.",
      imageSrc: "/images/services/social-presence.jpg",
      capabilities: [
        "Cohesive visual branding guidelines (colors, typography, cards)",
        "Structured 30-day content calendar with educational reels",
        "Authority carousels showcasing real before-and-after results",
        "Profile bio & link-in-bio high-converting lead routing",
      ],
      href: "/services#social-presence",
      icon: <Share2 className="w-4 h-4 text-indigo-500" />,
      outcomeMetric: "30-Day Cohesive Calendar",
    },
    {
      id: "lead-generation",
      number: "04",
      title: "Lead Systems & WhatsApp",
      category: "Conversion Funnels",
      shortDescription: "Turn casual visitors into qualified enquiries with frictionless 2-step capture and instant WhatsApp routing.",
      imageSrc: "/images/services/lead-generation.jpg",
      capabilities: [
        "Frictionless 2-step inquiry capture forms with spam honeypot",
        "Official WhatsApp Business Cloud API integration",
        "Instant lead notification alerts dispatched to your team's phones",
        "Lead attribution tracking by campaign and search source",
      ],
      href: "/services#lead-generation",
      icon: <MessageCircle className="w-4 h-4 text-emerald-500" />,
      outcomeMetric: "< 60s Lead Triage",
    },
    {
      id: "ai-automation",
      number: "05",
      title: "AI Business Automation",
      category: "Workflow Automation",
      shortDescription: "Automate repetitive customer queries, calendar scheduling, and reminder workflows without hiring extra staff.",
      imageSrc: "/images/services/ai-automation.jpg",
      capabilities: [
        "24/7 AI lead qualification & preliminary FAQ resolution",
        "Automated Google Calendar & CRM appointment slot synchronization",
        "Automated 24h & 2h WhatsApp appointment reminder triggers",
        "Zero phone tag: self-serve customer rescheduling portal",
      ],
      href: "/services#ai-automation",
      icon: <Cpu className="w-4 h-4 text-purple-500" />,
      outcomeMetric: "-68% Appointment No-Shows",
    },
  ];

  const currentService = services[activeTab];

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80" id="services">
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

          {/* Slide Controls */}
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
                  "p-3 sm:p-3.5 rounded-2xl text-left border transition-all duration-150 flex flex-col justify-between",
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm scale-[1.01]"
                    : "bg-slate-50 text-slate-700 border-slate-200/90 hover:bg-white hover:border-slate-300"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center", isSelected ? "bg-slate-800" : "bg-white border border-slate-200")}>
                    {s.icon}
                  </div>
                  <span className={cn("font-mono text-[10px] font-bold", isSelected ? "text-slate-400" : "text-slate-400")}>
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

        {/* Visual Showcase Box (Split Layout) */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Left: Capability Breakdown */}
            <div className="lg:col-span-5 p-7 sm:p-10 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-1">
                  {currentService.category} · Service {currentService.number}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  {currentService.shortDescription}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Engineered Deliverables:
                </div>
                {currentService.capabilities.map((cap, i) => (
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
                  href={currentService.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-brand-accent transition-colors"
                >
                  <span>Explore {currentService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-teal-700">
                  {currentService.outcomeMetric}
                </span>
              </div>
            </div>

            {/* Right: Real UI Interface Image Preview */}
            <div className="lg:col-span-7 relative aspect-[16/10] bg-slate-950 overflow-hidden min-h-[320px] lg:min-h-[460px] border-l border-slate-200/80">
              <Image
                src={currentService.imageSrc}
                alt={`${currentService.title} Interface Dashboard`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom In-Image Tag */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
                <span className="font-mono text-[11px] text-teal-300 drop-shadow-xs">
                  SETU Production Deliverable
                </span>
                <span className="text-[10px] text-slate-300">
                  Live UI Dashboard Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

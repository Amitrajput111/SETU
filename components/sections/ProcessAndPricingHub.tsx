"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Search,
  FileSpreadsheet,
  Code2,
  Rocket,
  TrendingUp,
  Check,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ProcessAndPricingHub: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"pricing" | "process">("pricing");

  const steps = [
    {
      number: "01",
      title: "Audit & Bottleneck Teardown",
      time: "Day 1–2",
      description: "We inspect your current web speed, Google Maps visibility, and where inquiries are leaking.",
      deliverable: "12-Point Action Blueprint",
      icon: <Search className="w-5 h-5 text-blue-600" />,
    },
    {
      number: "02",
      title: "Conversion Architecture",
      time: "Day 3–5",
      description: "We design the high-converting page wireframe, fee tables, doctor/trainer bios, and WhatsApp funnels.",
      deliverable: "Wireframe & Funnel Map",
      icon: <FileSpreadsheet className="w-5 h-5 text-teal-600" />,
    },
    {
      number: "03",
      title: "Next.js Build & Automation",
      time: "Day 6–12",
      description: "We engineer your fast Next.js web portal, connect Google Business Profile, and integrate WhatsApp Cloud API.",
      deliverable: "Production Web + WhatsApp API",
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
    },
    {
      number: "04",
      title: "Live Launch & Calendar Sync",
      time: "Day 13–14",
      description: "We deploy on global Edge CDN, sync your team's Google Calendar, and run end-to-end test bookings.",
      deliverable: "Live Launch + Verified Sync",
      icon: <Rocket className="w-5 h-5 text-purple-600" />,
    },
    {
      number: "05",
      title: "Optimization & Review Flywheel",
      time: "Ongoing",
      description: "We monitor lead conversion, manage 5-star Google review triggers, and optimize response speeds.",
      deliverable: "Continuous Growth Tuning",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    },
  ];

  const pricingTiers = [
    {
      id: "starter",
      name: "Starter Setup",
      price: "₹10,000",
      tagline: "For businesses wanting a lightning-fast, modern digital presence.",
      highlightBadge: "Sub-Second Next.js",
      features: [
        "1-Page High-Performance Next.js Website",
        "Mobile-First Responsive UI (99+ PageSpeed)",
        "Direct 1-Tap Click-to-WhatsApp Funnel",
        "Google Maps & Search Engine Schemas",
        "Free SSL & Global Vercel Edge CDN Hosting",
      ],
      isPopular: false,
    },
    {
      id: "business",
      name: "Growth Engine",
      price: "₹20,000",
      tagline: "For growing businesses wanting local Google dominance & steady leads.",
      highlightBadge: "Most Chosen",
      features: [
        "Multi-Page Custom Web Platform (Up to 5 Pages)",
        "Google Business Profile (GBP) Top 3 Optimization",
        "Dual Lead Routing (Forms + WhatsApp Triage)",
        "Google Analytics 4 & Conversion Tracking",
        "Specialist / Trainer / Course Dynamic Profiles",
      ],
      isPopular: true,
      popularBadge: "Recommended",
    },
    {
      id: "growth",
      name: "Full Automation Suite",
      price: "₹30,000",
      tagline: "For clinics, gyms & institutes needing 24/7 automated booking.",
      highlightBadge: "Zero Reception Delays",
      features: [
        "Advanced Web Platform + Custom Landing Pages",
        "Automated Calendar Appointment Booking Engine",
        "2-Way Google Calendar / CRM Synchronization",
        "Automated 24h & 2h WhatsApp Reminder Triggers",
        "Automated 5-Star Google Review Collection Flywheel",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 scroll-mt-16 sm:scroll-mt-20" id="pricing">
      <Container size="xl">
        {/* Top Centered Switcher */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <button
              onClick={() => setActiveMode("pricing")}
              className={cn(
                "px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2",
                activeMode === "pricing"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Zap className="w-3.5 h-3.5 text-brand-accent" />
              <span>Transparent Pricing Packages</span>
            </button>
            <button
              onClick={() => setActiveMode("process")}
              className={cn(
                "px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2",
                activeMode === "process"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <span>14-Day Delivery Framework</span>
            </button>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {activeMode === "pricing"
              ? "Clear, transparent pricing. Built for business ROI."
              : "From first blueprint to working digital engine."}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto">
            {activeMode === "pricing"
              ? "Fixed-scope deliverables with transparent pricing. Final exact quotes provided in writing after your free digital audit."
              : "A disciplined 2-week execution framework engineered to deliver production systems without endless delays."}
          </p>
        </div>

        {/* VIEW 1: Pricing Packages with Premium Hover Interactions */}
        {activeMode === "pricing" && (
          <div className="space-y-8 animate-in fade-in duration-300 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={cn(
                    "group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
                    tier.isPopular
                      ? "bg-slate-900 text-white border-2 border-brand-accent shadow-xl lg:-translate-y-2 hover:border-brand-accent"
                      : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:border-slate-300"
                  )}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-brand-accent text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                      {tier.popularBadge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md",
                        tier.isPopular ? "bg-teal-500/20 text-teal-300 border border-teal-500/30" : "bg-slate-100 text-slate-600"
                      )}>
                        {tier.highlightBadge}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h3 className={cn("text-2xl font-extrabold tracking-tight", tier.isPopular ? "text-white" : "text-slate-900")}>
                        {tier.name}
                      </h3>
                      <p className={cn("text-xs leading-relaxed mt-1 font-normal", tier.isPopular ? "text-slate-300" : "text-slate-600")}>
                        {tier.tagline}
                      </p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-slate-200/60 dark:border-slate-800">
                      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono">
                        {tier.price}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 font-medium">
                        One-time setup · 100% transparent scope
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className={cn("text-xs font-bold uppercase tracking-wider", tier.isPopular ? "text-teal-400" : "text-slate-400")}>
                        Included Deliverables:
                      </div>
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check className={cn("w-4 h-4 shrink-0 mt-0.5", tier.isPopular ? "text-teal-400" : "text-brand-accent")} />
                          <span className={tier.isPopular ? "text-slate-200 font-medium" : "text-slate-700 font-normal"}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                    <Button
                      variant={tier.isPopular ? "accent" : "primary"}
                      size="md"
                      href={`/audit?package=${tier.id}`}
                      className="w-full font-bold shadow-xs group-hover:shadow-md transition-shadow"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Get Free Audit &amp; Quote
                    </Button>
                    <Link
                      href={`/contact?package=${tier.id}`}
                      className={cn(
                        "block text-center text-xs font-semibold hover:underline py-1",
                        tier.isPopular ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                      )}
                    >
                      Talk to an Engineer &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Need monthly maintenance, hosting care, and continuous Google SEO tuning?</span>
              </div>
              <Link
                href="/pricing"
                className="font-bold text-brand-accent hover:underline shrink-0"
              >
                Explore Monthly Retainers (From ₹5,000/mo) &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* VIEW 2: 5-Step Process Timeline with Clean Hover States */}
        {activeMode === "process" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-brand-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        {step.icon}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        STEP {step.number}
                      </span>
                    </div>

                    <div className="text-[11px] font-bold text-brand-accent uppercase tracking-wider mb-1">
                      {step.time}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-teal-800 font-medium bg-teal-50/50 p-2.5 rounded-xl">
                    <strong>Deliverable:</strong> {step.deliverable}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <Button variant="accent" size="md" href="/audit" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Start With Step 01: Free Audit
              </Button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

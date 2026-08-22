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
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ProcessAndPricingHub: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"process" | "pricing">("process");

  const steps = [
    {
      number: "01",
      title: "Audit & Analysis",
      time: "Day 1–2",
      description: "We inspect your website speed, Google Maps ranking, and where prospective customer enquiries are dropping off.",
      deliverable: "Comprehensive 12-point digital bottleneck teardown",
      icon: <Search className="w-5 h-5 text-blue-600" />,
    },
    {
      number: "02",
      title: "Conversion Strategy",
      time: "Day 3–5",
      description: "We map out the high-converting page layout, pricing tables, doctor/trainer bios, and WhatsApp booking funnels.",
      deliverable: "Wireframe blueprint & message flow map",
      icon: <FileSpreadsheet className="w-5 h-5 text-teal-600" />,
    },
    {
      number: "03",
      title: "Next.js Build & Flow",
      time: "Day 6–12",
      description: "We code your fast Next.js web application, connect Google Business Profile, and integrate WhatsApp Cloud API.",
      deliverable: "Production-ready website + lead capture",
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
    },
    {
      number: "04",
      title: "Launch & Integration",
      time: "Day 13–14",
      description: "We connect your custom domain, set up Google Analytics 4, sync your team's Google Calendar, and run live test bookings.",
      deliverable: "Live deployment + calendar sync verified",
      icon: <Rocket className="w-5 h-5 text-purple-600" />,
    },
    {
      number: "05",
      title: "Optimization & Growth",
      time: "Ongoing",
      description: "We monitor lead conversion rates, manage Google 5-star review loops, and refine automations continuously.",
      deliverable: "Monthly performance reporting & continuous tuning",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    },
  ];

  const pricingTiers = [
    {
      id: "starter",
      name: "Starter",
      price: "From ₹10,000",
      tagline: "For businesses needing a fast, mobile-ready web home.",
      features: [
        "1-Page Fast Next.js Website",
        "Mobile Responsive & Fast Load",
        "Direct Click-to-WhatsApp Funnel",
        "Basic On-Page SEO & Maps Link",
        "Edge Hosting Setup + Free SSL",
      ],
      isPopular: false,
    },
    {
      id: "business",
      name: "Business",
      price: "From ₹20,000",
      tagline: "For growing businesses wanting leads & local Google ranking.",
      features: [
        "Multi-Page Custom Web Platform (Up to 5 Pages)",
        "Google Business Profile (GBP) Deep Optimization",
        "Dual Lead Capture (Forms + WhatsApp Triage)",
        "Google Analytics 4 & Conversion Tracking",
        "Service & Doctor / Trainer Profiles",
      ],
      isPopular: true,
      popularBadge: "Most Popular",
    },
    {
      id: "growth",
      name: "Growth + Automation",
      price: "From ₹30,000+",
      tagline: "For businesses needing automated booking & reminders.",
      features: [
        "Advanced Web Platform + Landing Pages",
        "Automated Appointment / Class Booking Engine",
        "2-Way Google Calendar / CRM Sync",
        "Automated 24h & 2h WhatsApp Reminders",
        "Automated 5-Star Review Flywheel",
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
              onClick={() => setActiveMode("process")}
              className={cn(
                "px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 flex items-center gap-2",
                activeMode === "process"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <span>5-Stage Delivery Process</span>
            </button>
            <button
              onClick={() => setActiveMode("pricing")}
              className={cn(
                "px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 flex items-center gap-2",
                activeMode === "pricing"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <span>Pricing Packages (From ₹10K)</span>
            </button>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {activeMode === "process"
              ? "From first conversation to working growth system."
              : "Clear, transparent pricing. No surprises."}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto">
            {activeMode === "process"
              ? "A structured 2-week execution framework engineered to deliver production systems without endless delays."
              : "Fixed-scope deliverables with transparent starting tiers. Final quotes confirmed in writing after your free audit."}
          </p>
        </div>

        {/* VIEW 1: 5-Step Process Timeline */}
        {activeMode === "process" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
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

        {/* VIEW 2: Pricing Packages */}
        {activeMode === "pricing" && (
          <div className="space-y-8 animate-in fade-in duration-200 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={cn(
                    "relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-200",
                    tier.isPopular
                      ? "bg-slate-900 text-white border-2 border-brand-accent shadow-xl lg:-translate-y-2"
                      : "bg-white text-slate-900 border border-slate-200/90 shadow-sm"
                  )}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-accent text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {tier.popularBadge}
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <h3 className={cn("text-xl font-bold tracking-tight", tier.isPopular ? "text-white" : "text-slate-900")}>
                        {tier.name}
                      </h3>
                      <p className={cn("text-xs leading-relaxed mt-1 font-normal", tier.isPopular ? "text-slate-300" : "text-slate-600")}>
                        {tier.tagline}
                      </p>
                    </div>

                    <div className="mb-6 pb-6 border-b border-slate-200/60 dark:border-slate-800">
                      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        {tier.price}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        One-time setup · Final quote confirmed after audit
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className={cn("text-xs font-bold uppercase tracking-wider", tier.isPopular ? "text-teal-400" : "text-slate-400")}>
                        Included Deliverables:
                      </div>
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check className={cn("w-4 h-4 shrink-0 mt-0.5", tier.isPopular ? "text-teal-400" : "text-brand-accent")} />
                          <span className={tier.isPopular ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                    <Button
                      variant={tier.isPopular ? "accent" : "primary"}
                      size="md"
                      href={`/audit?package=${tier.id}`}
                      className="w-full font-bold"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Get Free Audit
                    </Button>
                    <Link
                      href={`/contact?package=${tier.id}`}
                      className={cn(
                        "block text-center text-xs font-semibold hover:underline py-1",
                        tier.isPopular ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                      )}
                    >
                      Get My Recommendation &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Looking for monthly maintenance, hosting care, and ongoing SEO management?</span>
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
      </Container>
    </section>
  );
};

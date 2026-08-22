import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Globe,
  MapPin,
  Share2,
  MessageCircle,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Services — High-Speed Websites, Local SEO & AI Automation",
  description:
    "Explore SETU's 5 core growth services: High-Performance Websites, Google Maps Local SEO, Social Branding, WhatsApp Lead Capture, and AI Calendar Automation.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "websites",
      number: "01",
      title: "High-Performance Websites",
      category: "Web Engineering",
      tagline: "Custom Next.js web applications engineered for sub-second mobile loading & high conversion.",
      imageSrc: "/images/services/websites.jpg",
      badge: "99/100 PageSpeed",
      bullets: [
        "Sub-second load times on 4G mobile networks with zero layout shift",
        "Search-engine-ready semantic HTML and JSON-LD structured schema",
        "Direct Click-to-WhatsApp and appointment booking buttons on all pages",
        "Custom code with zero slow WordPress plugins or security vulnerabilities",
      ],
      impact: "Eliminates high mobile bounce rates and establishes immediate authority.",
    },
    {
      id: "local-growth",
      number: "02",
      title: "Google Maps & Local Search",
      category: "Local Visibility",
      tagline: "Dominate the local top 3 map pack when nearby customers search for your services.",
      imageSrc: "/images/services/local-growth.jpg",
      badge: "Top 3 Google Maps",
      bullets: [
        "Google Business Profile (GBP) deep category and photo optimization",
        "Local business directory citation syndication across 40+ Indian platforms",
        "Automated WhatsApp review collection flow to build verified 5-star ratings",
        "Targeted local keyword visibility tracking in a 10km service radius",
      ],
      impact: "Captures high-intent nearby customers actively searching to book or call.",
    },
    {
      id: "social-presence",
      number: "03",
      title: "Social Branding & Presence",
      category: "Brand Trust",
      tagline: "Cohesive visual branding and structured content that turns followers into paying clients.",
      imageSrc: "/images/services/social-presence.jpg",
      badge: "30-Day Content System",
      bullets: [
        "Cohesive visual branding guidelines (colors, typography, and templates)",
        "Structured 30-day content calendar with educational reels and posts",
        "High-trust case study carousels showcasing real before-and-after results",
        "Optimized Instagram profile bio funnels connecting directly to WhatsApp",
      ],
      impact: "Builds premium credibility and drives steady inbound social inquiries.",
    },
    {
      id: "lead-generation",
      number: "04",
      title: "WhatsApp Lead Capture",
      category: "Lead Routing",
      tagline: "Turn casual website visitors into qualified leads with frictionless WhatsApp routing.",
      imageSrc: "/images/services/lead-generation.jpg",
      badge: "< 60s Lead Triage",
      bullets: [
        "Frictionless 2-step inquiry forms with spam honeypot protection",
        "Official WhatsApp Business Cloud API integration",
        "Instant lead notification alerts dispatched straight to your team's phones",
        "Accurate source attribution tracking across Google, Instagram, and referrals",
      ],
      impact: "Reduces lead response time from hours to under 60 seconds.",
    },
    {
      id: "ai-automation",
      number: "05",
      title: "AI CRM & Workflow Automation",
      category: "Automation",
      tagline: "Automate customer inquiries, calendar scheduling, and reminder alerts 24/7.",
      imageSrc: "/images/services/ai-automation.jpg",
      badge: "-68% No-Shows",
      bullets: [
        "24/7 AI lead qualification answering FAQs and capturing phone numbers",
        "2-Way Google Calendar and CRM appointment slot synchronization",
        "Automated 24h & 2h WhatsApp appointment reminder notifications",
        "Self-serve customer slot rescheduling portal to prevent missed slots",
      ],
      impact: "Eliminates phone tag and slashes appointment no-shows by up to 68%.",
    },
  ];

  return (
    <>
      {/* Services Header */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineered Services to Acquire, Convert & Automate
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore the 5 core capabilities engineered into every SETU growth system. Clean, fast, and visual.
            </p>

            {/* Quick-Jump Pills */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Visual Showcase List */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <Container size="xl">
          <div className="space-y-12 sm:space-y-16">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left Column: Clear Deliverables */}
                  <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono font-bold text-slate-400">
                            SERVICE {service.number}
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                            {service.badge}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {service.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                          {service.tagline}
                        </p>
                      </div>

                      {/* 4 Bullet Points */}
                      <div className="space-y-2.5 pt-3 border-t border-slate-100">
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Key Deliverables:
                        </div>
                        {service.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Business Impact Box */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                        <strong className="text-slate-900">Impact:</strong> {service.impact}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Button
                        variant="accent"
                        size="sm"
                        href={`/audit?service=${service.id}`}
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Audit My Setup
                      </Button>

                      <Link
                        href="/pricing"
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                      >
                        View Pricing &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Real Visual Interface Preview */}
                  <div className="lg:col-span-7 relative aspect-[16/10] bg-slate-950 overflow-hidden min-h-[300px] lg:min-h-[420px] border-l border-slate-200/80">
                    <Image
                      src={service.imageSrc}
                      alt={`${service.title} UI Preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
                      <span className="font-mono text-[11px] text-teal-300 drop-shadow-xs">
                        SETU Production Deliverable
                      </span>
                      <span className="text-[10px] text-slate-300">
                        {service.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final Action Banner */}
      <FinalCTASection />
    </>
  );
}

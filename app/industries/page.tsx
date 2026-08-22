import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Activity,
  Flame,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
} from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Industries — Healthcare, Fitness & Education Blueprints",
  description:
    "Tailored customer acquisition and automation blueprints for Dental Clinics, Fitness Studios, and Coaching Academies.",
};

export default function IndustriesPage() {
  const industries = [
    {
      id: "healthcare",
      category: "Healthcare & Dental",
      title: "Dental & Healthcare Clinics",
      icon: <Activity className="w-5 h-5 text-blue-500" />,
      tagline: "High-trust clinical web app with zero patient no-shows & transparent treatment pricing.",
      imageSrc: "/images/industries/healthcare.jpg",
      subNiches: ["Dental Clinics", "Dermatology", "Eye Clinics", "Physiotherapy Centers"],
      bullets: [
        "Transparent dental treatment pricing estimator that answers patient cost questions upfront",
        "24/7 automated WhatsApp appointment booking with live doctor slot selector",
        "Google Maps top 3 local pack ranking and automated 5-star review collection",
        "Automated 24h & 2h WhatsApp appointment reminders to eliminate patient no-shows",
      ],
      outcome: "-68% Appointment No-Shows · #1 Google Maps in 10km",
      workRef: "apex-smile-dental",
    },
    {
      id: "fitness",
      category: "Fitness & Studios",
      title: "Fitness Studios & Gyms",
      icon: <Flame className="w-5 h-5 text-teal-500" />,
      tagline: "High-conversion athletic studio portal with instant 1-Day VIP Trial Pass funnels.",
      imageSrc: "/images/industries/fitness.jpg",
      subNiches: ["Strength & Conditioning", "Yoga & Pilates", "CrossFit Boxes", "Martial Arts"],
      bullets: [
        "Live weekly trainer class schedule and interactive timetable with slot reservation",
        "Instant 1-Day Trial Pass generator delivering QR codes directly on WhatsApp",
        "High-trust member transformation carousels and verified trainer bio cards",
        "Automated membership renewal triggers and referral rewards on WhatsApp",
      ],
      outcome: "+4.8x VIP Passes Claimed · 142 Active Monthly Members",
      workRef: "elevate-fitness-studio",
    },
    {
      id: "education",
      category: "Education & Coaching",
      title: "Coaching Institutes & Academies",
      icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
      tagline: "Admissions growth engine for competitive JEE/NEET & test-prep institutes.",
      imageSrc: "/images/industries/education.jpg",
      subNiches: ["JEE / NEET Coaching", "Language Academies", "Skill Bootcamps", "Test Prep"],
      bullets: [
        "Verified top rankers results gallery and faculty credential profiles",
        "Instant WhatsApp prospectus & fee structure PDF delivery in under 5 seconds",
        "Online demo lecture seat reservation with instant SMS confirmation to parents",
        "Counselor notification alerts for immediate follow-up on high-intent inquiries",
      ],
      outcome: "5-Second Prospectus Speed · +84% Demo Lecture Attendance",
      workRef: "shikhar-learning-academy",
    },
  ];

  return (
    <>
      {/* Industries Page Hero */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Industry Blueprints</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Tailored Customer Engines for High-Intent Verticals
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A dental clinic has different conversion bottlenecks than a fitness studio or coaching institute. Explore systems tailored to each vertical.
            </p>

            {/* Jump Pills */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              {industries.map((ind) => (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                >
                  {ind.title}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industry Visual Cards List */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <Container size="xl">
          <div className="space-y-12 sm:space-y-16">
            {industries.map((ind) => (
              <div
                key={ind.id}
                id={ind.id}
                className="scroll-mt-24 bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left Column: Authentic Photography Banner */}
                  <div className="lg:col-span-6 relative aspect-[16/10] bg-slate-950 overflow-hidden min-h-[300px] lg:min-h-[420px]">
                    <Image
                      src={ind.imageSrc}
                      alt={`${ind.title} Industry Environment`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-teal-300 border border-teal-500/30">
                        {ind.category} Blueprint
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold text-teal-300">
                        {ind.title}
                      </span>
                      <span className="text-[11px] text-slate-300">
                        Verified Blueprint
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Structured Deliverables & Action */}
                  <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6 bg-slate-50/40">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="p-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                            {ind.icon}
                          </span>
                          <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                            {ind.category}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {ind.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                          {ind.tagline}
                        </p>
                      </div>

                      {/* Sub-niches strip */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {ind.subNiches.map((niche, nIdx) => (
                          <span
                            key={nIdx}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                          >
                            {niche}
                          </span>
                        ))}
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2 pt-2 border-t border-slate-200/80">
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Key Deliverables:
                        </div>
                        {ind.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Outcome Pill */}
                      <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-100 text-xs text-teal-950 font-semibold">
                        <strong>Target Milestone:</strong> {ind.outcome}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                      <Button
                        variant="primary"
                        size="sm"
                        href={`/work#${ind.workRef}`}
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        View Live Concept
                      </Button>

                      <Button
                        variant="accent"
                        size="sm"
                        href={`/audit?industry=${ind.id}`}
                      >
                        Get Free Audit
                      </Button>
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

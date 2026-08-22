import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DEMO_PROJECTS } from "@/data/caseStudies";
import { LiveDemosSection } from "@/components/sections/LiveDemosSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  Code2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Work & Concept Demos — Dental, Fitness & Education Systems",
  description:
    "Explore production-grade concept demos and case study teardowns for dental clinics, athletic studios, and coaching academies.",
};

export default function WorkPage() {
  const getProjectImage = (id: string) => {
    switch (id) {
      case "apex-smile-dental":
        return "/images/projects/dental-clinic.jpg";
      case "elevate-fitness-studio":
        return "/images/projects/fitness-studio.jpg";
      case "shikhar-learning-academy":
        return "/images/projects/coaching-academy.jpg";
      default:
        return "/images/projects/dental-clinic.jpg";
    }
  };

  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Systems & Demos</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Work & Concept Demonstrations
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We believe in showing, not just claiming. Explore our realistic, production-ready concept builds engineered for local service businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* Interactive Sandbox Section */}
      <LiveDemosSection />

      {/* Detailed Case Study Teardowns */}
      <section className="py-16 sm:py-24 bg-white">
        <Container size="xl">
          <SectionHeading
            eyebrow="Case Study Teardowns"
            title="Architectural Teardowns & Targeted Business Outcomes"
            description="How each system is engineered from bottom to top to eliminate operational friction and capture high-intent leads."
          />

          <div className="space-y-16">
            {DEMO_PROJECTS.map((demo) => (
              <div
                key={demo.id}
                id={demo.slug}
                className="scroll-mt-24 rounded-3xl bg-slate-50/60 border border-slate-200/90 shadow-card p-6 sm:p-10 lg:p-12 space-y-8"
              >
                {/* Visual Image Preview Banner */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src={getProjectImage(demo.id)}
                    alt={`${demo.title} UI Interface Preview`}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-top"
                  />
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    Concept Architecture Demo
                  </div>
                </div>

                {/* Title Strip */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="blue" size="sm">
                        {demo.category}
                      </Badge>
                      <Badge variant="concept" size="sm">
                        Concept Demo
                      </Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {demo.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-accent font-semibold mt-1">
                      {demo.tagline}
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200">
                    <div><strong>Client Profile:</strong> {demo.clientType}</div>
                    <div><strong>Target Market:</strong> {demo.location}</div>
                  </div>
                </div>

                {/* 2-Column Teardown Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: Context & Bottlenecks */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Client Context & Challenge
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-200">
                        {demo.clientContext}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-red-800 mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span>Identified Digital Bottlenecks</span>
                      </h3>
                      <div className="space-y-2">
                        {demo.bottlenecks.map((b, i) => (
                          <div key={i} className="p-3 rounded-xl bg-red-50/60 border border-red-100 text-xs text-red-900 flex items-start gap-2">
                            <span className="font-bold shrink-0">&times;</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Strategy & Technical Architecture */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        <span>SETU Growth Strategy</span>
                      </h3>
                      <div className="space-y-2">
                        {demo.strategyImplemented.map((s, i) => (
                          <div key={i} className="p-3 rounded-xl bg-teal-50/60 border border-teal-100 text-xs text-teal-950 flex items-start gap-2">
                            <span className="font-bold text-teal-600 shrink-0">&check;</span>
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-brand-accent" />
                        <span>Technical Architecture</span>
                      </h3>
                      <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-700">
                        {demo.technicalArchitecture.map((tech, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Target Outcomes */}
                <div className="pt-6 border-t border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Targeted Business Outcomes
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {demo.targetedOutcomes.map((out, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-slate-200">
                        <div className="text-xs text-slate-500">{out.label}</div>
                        <div className="text-xl font-bold text-brand-accent font-mono mt-1">{out.value}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{out.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audit CTA for this vertical */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Want a similar system built for your {demo.category.toLowerCase()} business?
                  </div>
                  <Button
                    variant="accent"
                    size="sm"
                    href={`/audit?project=${demo.slug}`}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Request Free {demo.category} Audit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTASection />
    </>
  );
}

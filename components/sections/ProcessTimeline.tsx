import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, FileSpreadsheet, Code2, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Audit",
      description: "Understand your current digital presence, local map ranking, and lead leakage.",
      icon: <Search className="w-4 h-4 text-blue-600" />,
      time: "Day 1–2",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Identify the highest-impact opportunities and design the conversion blueprint.",
      icon: <FileSpreadsheet className="w-4 h-4 text-teal-600" />,
      time: "Day 3–5",
    },
    {
      number: "03",
      title: "Build",
      description: "Create the fast Next.js website, lead capture paths, and automated workflows.",
      icon: <Code2 className="w-4 h-4 text-indigo-600" />,
      time: "Day 6–12",
    },
    {
      number: "04",
      title: "Launch",
      description: "Connect domain, Google Business, analytics, WhatsApp, and test live triggers.",
      icon: <Rocket className="w-4 h-4 text-purple-600" />,
      time: "Day 13–14",
    },
    {
      number: "05",
      title: "Improve",
      description: "Measure inbound volume, collect 5-star reviews, and automate continuously.",
      icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
      time: "Ongoing",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80" id="process">
      <Container size="xl">
        <SectionHeading
          eyebrow="5-Stage Process"
          title="From first conversation to growth system."
          description="A structured, predictable execution framework designed to deliver production systems without endless delays."
        />

        {/* 5-Step Connected Flow (Desktop Horizontal, Mobile Vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    STEP {step.number}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-brand-accent uppercase tracking-wider mb-1">
                  {step.time}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Process */}
        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-accent hover:text-brand-accentHover"
          >
            <span>View detailed stage deliverables and timelines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

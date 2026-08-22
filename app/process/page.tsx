import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STAGES } from "@/data/process";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  FileSpreadsheet,
  Code2,
  Rocket,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Clock,
  UserCheck,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Process — The 5-Stage SETU Execution Framework",
  description:
    "Explore our transparent 5-stage execution process: Audit, Strategy, Build, Launch, and Continuous Growth.",
};

export default function ProcessPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-6 h-6 text-blue-600" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-6 h-6 text-teal-600" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-indigo-600" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 text-purple-600" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      default:
        return <Search className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <>
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Predictable Execution</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              The 5-Stage Engineering Framework
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From your initial digital audit to live deployment and automated lead flow, our process is transparent, milestone-driven, and designed for speed.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container size="xl">
          <div className="space-y-12">
            {PROCESS_STAGES.map((stage, idx) => (
              <div
                key={stage.number}
                className="p-8 sm:p-12 rounded-3xl bg-slate-50/60 border border-slate-200/90 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative"
              >
                {/* Left Column: Number & Stage Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      {getIcon(stage.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          STAGE {stage.number} OF 05
                        </span>
                        <Badge variant="blue" size="sm">
                          {stage.timeframe}
                        </Badge>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mt-1">
                        {stage.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-brand-accent">
                    {stage.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stage.summary}
                  </p>

                  {/* Client Involvement Card */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1 text-xs">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>Your Involvement:</span>
                    </div>
                    <p className="text-slate-600">{stage.clientInvolvement}</p>
                  </div>
                </div>

                {/* Right Column: Execution Checklist & Deliverable */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      What We Execute in Stage {stage.number}
                    </h3>
                    <div className="space-y-3">
                      {stage.whatWeDo.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stage Deliverable Box */}
                  <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/80 space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                      <PackageCheck className="w-4 h-4 text-teal-700" />
                      <span>Verified Stage Deliverable</span>
                    </div>
                    <p className="text-xs sm:text-sm text-teal-950 font-medium leading-relaxed">
                      {stage.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              variant="accent"
              size="lg"
              href="/audit"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Start Stage 01: Request Free Business Audit
            </Button>
          </div>
        </Container>
      </section>

      <FinalCTASection />
    </>
  );
}

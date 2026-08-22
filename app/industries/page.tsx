import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INDUSTRIES_DATA } from "@/data/industries";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Activity,
  Flame,
  GraduationCap,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Industries — Healthcare, Fitness & Wellness, Coaching & Education",
  description:
    "Tailored customer acquisition and automation blueprints for Dental Clinics, Fitness Studios, and Coaching Academies.",
};

export default function IndustriesPage() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity":
        return <Activity className="w-6 h-6 text-blue-600" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-teal-600" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      default:
        return <Activity className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <>
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vertical Growth Blueprints</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Tailored Customer Engines for High-Intent Verticals
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A dental clinic has different conversion bottlenecks than a fitness studio or coaching institute. We architect growth systems customized to your industry&apos;s customer decision cycle.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container size="xl">
          <div className="space-y-16">
            {INDUSTRIES_DATA.map((industry) => (
              <div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-24 rounded-3xl bg-slate-50/60 border border-slate-200/90 shadow-card p-8 sm:p-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      {getIndustryIcon(industry.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="blue" size="sm">
                          {industry.badge}
                        </Badge>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                        {industry.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {industry.subNiches.map((niche, nIdx) => (
                      <span
                        key={nIdx}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200"
                      >
                        {niche}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
                  {/* Problem */}
                  <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span>{industry.commonProblem.heading}</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-600">
                      {industry.commonProblem.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold shrink-0">&bull;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      <span>{industry.setuSolution.heading}</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {industry.setuSolution.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-600 font-bold shrink-0">&check;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span>{industry.businessImpact.heading}</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-600">
                      {industry.businessImpact.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold shrink-0">&rarr;</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    Want to see how this system looks in production?
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      href={`/work#${industry.demoProjectRef}`}
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      View {industry.demoProjectName} Concept Demo
                    </Button>
                    <Button
                      variant="accent"
                      size="sm"
                      href={`/audit?industry=${industry.id}`}
                    >
                      Audit Your {industry.title}
                    </Button>
                  </div>
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

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, TrendingUp, Clock, Calendar, Star, Users } from "lucide-react";
import Link from "next/link";

export const RoiCalculator: React.FC = () => {
  const funnelSteps = [
    { label: "Visitors", desc: "Targeted Search & Maps Traffic" },
    { label: "Leads", desc: "Inbound Forms & WhatsApp" },
    { label: "Qualified Leads", desc: "AI Triage & Pre-Filter" },
    { label: "Appointments", desc: "Calendar Synced & Reminded" },
    { label: "Customers", desc: "5-Star Review Flywheel" },
  ];

  const keyMetrics = [
    {
      title: "Conversion Rate",
      desc: "Turn a higher percentage of visitors into real enquiries with sub-second page speed and minimal forms.",
      icon: <TrendingUp className="w-4 h-4 text-blue-600" />,
    },
    {
      title: "Lead Response Time",
      desc: "Slashed from hours to under 60 seconds with instant WhatsApp routing and automated greetings.",
      icon: <Clock className="w-4 h-4 text-teal-600" />,
    },
    {
      title: "Scheduled Appointments",
      desc: "Zero phone tag. Prospects select slots directly on your calendar with automated 24h reminders.",
      icon: <Calendar className="w-4 h-4 text-indigo-600" />,
    },
    {
      title: "Review Growth",
      desc: "Automated post-service WhatsApp triggers that steadily build 5-star Google Maps reviews.",
      icon: <Star className="w-4 h-4 text-amber-600" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80" id="results">
      <Container size="xl">
        <SectionHeading
          eyebrow="Business Outcomes"
          title="We measure what matters to your business."
          description="We focus strictly on the metrics that drive real revenue, lower no-show rates, and save staff coordination hours."
        />

        {/* Visual Funnel Strip */}
        <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-12 max-w-5xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
            The Revenue Outcome Funnel
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {funnelSteps.map((step, idx) => (
              <div
                key={step.label}
                className={`p-4 rounded-xl border ${
                  idx === 4
                    ? "col-span-2 sm:col-span-1 bg-slate-900 text-white border-slate-800"
                    : "bg-white text-slate-900 border-slate-200/80"
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                  STEP 0{idx + 1}
                </div>
                <div className={`text-sm font-bold mt-1 ${idx === 4 ? "text-white" : "text-slate-900"}`}>
                  {step.label}
                </div>
                <div className={`text-[11px] mt-1 line-clamp-1 ${idx === 4 ? "text-slate-300" : "text-slate-500"}`}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {keyMetrics.map((m) => (
            <div
              key={m.title}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                  {m.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/audit"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-accent hover:text-brand-accentHover"
          >
            <span>Request a free digital audit to model your numbers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

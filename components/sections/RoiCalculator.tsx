"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, TrendingUp, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const RoiCalculator: React.FC = () => {
  const [industry, setIndustry] = useState<"clinic" | "gym" | "academy">("clinic");
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(100);

  const presets = {
    clinic: {
      name: "Healthcare & Clinic",
      avgDeal: 800,
      currentConvRate: 0.15,
      setuConvRate: 0.38,
      savedHoursPerLead: 0.35,
    },
    gym: {
      name: "Fitness & Luxury Gym",
      avgDeal: 3500,
      currentConvRate: 0.12,
      setuConvRate: 0.35,
      savedHoursPerLead: 0.25,
    },
    academy: {
      name: "Coaching & Academy",
      avgDeal: 25000,
      currentConvRate: 0.08,
      setuConvRate: 0.22,
      savedHoursPerLead: 0.45,
    },
  };

  const currentConfig = presets[industry];
  const currentConversions = Math.round(monthlyInquiries * currentConfig.currentConvRate);
  const setuConversions = Math.round(monthlyInquiries * currentConfig.setuConvRate);
  const additionalClients = Math.max(1, setuConversions - currentConversions);
  const savedHours = Math.round(monthlyInquiries * currentConfig.savedHoursPerLead);
  const projectedRevenueGain = additionalClients * currentConfig.avgDeal;

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80" id="roi">
      <Container size="xl">
        <SectionHeading
          eyebrow="Interactive ROI Estimator"
          title="See how much revenue your business is currently leaving on the table."
          description="Calculate your projected lead surge, monthly hours saved, and extra client conversions powered by SETU digital infrastructure."
          className="max-w-3xl"
        />

        {/* Interactive Calculator Card */}
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Inputs & Sliders */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Select Your Business Vertical:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setIndustry("clinic")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      industry === "clinic"
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    Clinic
                  </button>
                  <button
                    onClick={() => setIndustry("gym")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      industry === "gym"
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    Gym / Fitness
                  </button>
                  <button
                    onClick={() => setIndustry("academy")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      industry === "academy"
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    Academy
                  </button>
                </div>
              </div>

              {/* Monthly Enquiries Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Monthly Inquiries / Visitors:
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 px-3 py-1 bg-white border border-slate-200 rounded-lg">
                    {monthlyInquiries.toLocaleString()} leads / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={500}
                  step={10}
                  value={monthlyInquiries}
                  onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>30 Inquiries</span>
                  <span>250 Inquiries</span>
                  <span>500+ Inquiries</span>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Sparkles className="w-4 h-4 text-brand-accent" />
                  <span>The SETU Automation Difference:</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Sub-second page loading captures impatient mobile searchers.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Instant WhatsApp alerts engage prospects in under 60 seconds.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Calculated Impact Dashboard */}
            <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold">
                  Projected Monthly Impact
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Based on Live Client Benchmarks
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Additional Clients */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                    <span>Extra Conversions</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    +{additionalClients}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Confirmed clients / mo</div>
                </div>

                {/* Hours Saved */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mb-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Staff Time Saved</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {savedHours} hrs
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Zero manual follow-up</div>
                </div>
              </div>

              {/* Monthly Revenue Lift */}
              <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-teal-300 font-bold uppercase tracking-wider">
                    Estimated Monthly Revenue Uplift
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-0.5">
                    ₹{projectedRevenueGain.toLocaleString()} <span className="text-xs text-teal-300 font-sans font-normal">/ month</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-teal-500/20 text-teal-300 text-xs font-mono font-bold border border-teal-500/40">
                    +{Math.round(((setuConversions - currentConversions) / (currentConversions || 1)) * 100)}% ROI
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  variant="accent"
                  size="md"
                  href="/audit"
                  className="w-full font-bold justify-center"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Exact Custom Business Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

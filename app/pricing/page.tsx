import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PricingSection } from "@/components/sections/PricingSection";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Sparkles, ShieldCheck, Check, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Transparent Website & Automation Packages",
  description:
    "Explore SETU's transparent starting tiers: Starter ₹10,000, Business ₹20,000, Growth ₹30,000+, and monthly care retainers from ₹5,000/mo.",
};

export default function PricingPage() {
  const addOns = [
    {
      name: "Additional Custom Web Page",
      price: "₹2,500 / page",
      description: "Dedicated high-conversion treatment, trainer, or branch location landing page.",
    },
    {
      name: "Multi-Location Google Business Setup",
      price: "₹4,500 / branch",
      description: "Complete GBP optimization and schema configuration for 2nd and 3rd branches.",
    },
    {
      name: "Custom CRM & Webhook Pipeline",
      price: "₹6,000 onwards",
      description: "Direct integration with Zoho, LeadSquared, HubSpot, or custom SQL databases.",
    },
    {
      name: "AI Knowledge Agent Custom Training",
      price: "₹7,500 setup",
      description: "Trained on your comprehensive treatment documentation, doctor FAQs, and clinic policies.",
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Investment</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Honest, Upfront Pricing Tiers
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              No hidden fees, no bloated agency retainers. Choose a fixed-scope setup package or continuous growth retainer tailored for your business stage.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Pricing Matrix Component */}
      <PricingSection />

      {/* Optional Add-Ons Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
              Modular Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Optional Add-Ons & Custom Extensions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Expand your system at any time with specialized modules as your business scales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((add, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-sm text-slate-900 mb-1">{add.name}</h3>
                  <div className="text-xs font-mono font-bold text-teal-600 mb-3">{add.price}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{add.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ROI & Outcome Estimator */}
      <RoiCalculator />

      <FinalCTASection />
    </>
  );
}

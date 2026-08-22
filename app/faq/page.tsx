import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — SETU Digital Growth & Automation",
  description:
    "Find answers to all your questions about website costs, development timelines, WhatsApp integrations, AI automations, and post-launch maintenance.",
};

export default function FAQPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Transparent, straight-forward answers to common questions about our technical deliverables, pricing, and execution.
            </p>
          </div>
        </Container>
      </section>

      <FAQSection />

      <FinalCTASection />
    </>
  );
}

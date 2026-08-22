import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Linkedin,
  Github,
  GitBranch,
} from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "About SETU — The Bridge Between Business & Technology",
  description:
    "Learn about SETU's mission, engineering philosophy, and vision to bridge traditional businesses with high-speed digital systems and AI automation.",
};

export default function AboutPage() {
  const bridgePillars = [
    { from: "Businesses", to: "High-Intent Customers" },
    { from: "Businesses", to: "Modern Scalable Technology" },
    { from: "Website Visitors", to: "Inbound Leads" },
    { from: "Incoming Leads", to: "Confirmed Appointments" },
    { from: "Manual Front-Desk Work", to: "Intelligent Automation" },
    { from: "Traditional Businesses", to: "Practical AI Systems" },
  ];

  const evolutionStages = [
    {
      stage: "Stage 01",
      title: "Digital Growth Partner",
      description: "Engineering sub-second websites, Google local dominance, and WhatsApp lead funnels for regional businesses.",
      active: true,
    },
    {
      stage: "Stage 02",
      title: "AI Automation Platform",
      description: "Deploying conversational AI assistants, automated calendar sync, and intelligent follow-up workflows.",
      active: true,
    },
    {
      stage: "Stage 03",
      title: "Vertical SaaS Solutions",
      description: "Productizing purpose-built booking and CRM engines for Healthcare, Fitness, and Education verticals.",
      active: false,
    },
    {
      stage: "Stage 04",
      title: "Technology Company",
      description: "Autonomous customer lifecycle infrastructure powering thousands of growing businesses nationwide.",
      active: false,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brand Mission & Engineering Philosophy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Building the Bridge Between Business and Modern Technology
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              &ldquo;Setu&rdquo; is the Sanskrit word for bridge. We exist to connect traditional businesses with high-converting digital presence and practical AI automation.
            </p>
          </div>
        </Container>
      </section>

      {/* Brand Meaning & The 6 Bridges */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <Container size="xl">
          <SectionHeading
            eyebrow="The SETU Purpose"
            title="What We Connect"
            description="Traditional businesses often struggle not from a lack of quality, but because their digital touchpoints are disconnected from customer expectations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bridgePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 shadow-card flex flex-col justify-between hover:bg-white hover:border-slate-300 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-slate-400 mb-4">
                  BRIDGE 0{idx + 1}
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-slate-500 font-medium">{pillar.from}</div>
                  <div className="text-brand-accent font-bold flex items-center gap-2">
                    <span className="text-sm">&darr;</span>
                    <span className="text-sm font-extrabold text-slate-900">{pillar.to}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Long-Term Evolution Vision */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <Container size="xl">
          <SectionHeading
            eyebrow="Long-Term Vision"
            title="Our Strategic Evolution Roadmap"
            description="We are architected not merely as a freelance studio, but as a serious technology company built for compounding value."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evolutionStages.map((st, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border shadow-card flex flex-col justify-between ${
                  st.active
                    ? "bg-white border-brand-accent/50 shadow-md"
                    : "bg-slate-50/50 border-slate-200 opacity-80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">{st.stage}</span>
                    {st.active ? (
                      <Badge variant="teal" size="sm">Active Phase</Badge>
                    ) : (
                      <Badge variant="outline" size="sm">Roadmap</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Engineering Philosophy & Founder Credibility */}
      <section className="py-16 sm:py-24 bg-white">
        <Container size="xl">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Core Philosophy
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                &ldquo;Technology should solve business problems, not create more complexity.&rdquo;
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
              <p>
                Too many agencies sell &ldquo;AI&rdquo; and &ldquo;Websites&rdquo; as buzzwords without understanding the operational reality of running a dental clinic, coaching institute, or local business.
              </p>
              <p>
                When a clinic receptionist is balancing 5 patients at the physical counter, they cannot be expected to navigate complex software. Our systems are engineered so that technology works quietly in the background: automatically answering FAQs, sending reminders, collecting 5-star Google reviews, and notifying the right staff member on WhatsApp with zero friction.
              </p>
            </div>

            {/* Links */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-700">Connect with the Team:</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              <Button
                variant="accent"
                size="md"
                href="/audit"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Free Business Audit
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTASection />
    </>
  );
}

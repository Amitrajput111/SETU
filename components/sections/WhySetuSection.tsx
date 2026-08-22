import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, Zap, GitMerge, TrendingUp } from "lucide-react";

export const WhySetuSection: React.FC = () => {
  const principles = [
    {
      number: "01",
      title: "Business First",
      tagline: "We start with the business problem.",
      description: "We don't build technology for the sake of it. Every page, form, and automated message is engineered to acquire customers or save staff hours.",
      icon: <Briefcase className="w-5 h-5 text-slate-800" />,
    },
    {
      number: "02",
      title: "Fast by Design",
      tagline: "Performance is part of the product.",
      description: "Sub-second load times on 4G mobile networks. No bloated WordPress themes, no slow plugins, and zero unnecessary script weight.",
      icon: <Zap className="w-5 h-5 text-slate-800" />,
    },
    {
      number: "03",
      title: "Connected Systems",
      tagline: "Website, leads, communication and automation work together.",
      description: "No disconnected silos. From Google Maps discovery to website visit, WhatsApp routing, calendar booking, and 5-star reviews.",
      icon: <GitMerge className="w-5 h-5 text-slate-800" />,
    },
    {
      number: "04",
      title: "Built to Evolve",
      tagline: "Start small. Add capabilities as the business grows.",
      description: "Begin with a clean website and lead capture. Add AI triage, automated appointment workflows, and CRM synchronization when ready.",
      icon: <TrendingUp className="w-5 h-5 text-slate-800" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <Container size="xl">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="Technology should create business value, not complexity."
          description="We reject generic marketing fluff and fragile templates in favor of robust, maintainable systems built for real business operations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <div
              key={p.number}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {p.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-brand-accent mb-3">
                  {p.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

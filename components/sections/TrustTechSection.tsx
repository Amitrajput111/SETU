import React from "react";
import { Container } from "@/components/ui/Container";
import { Globe, MapPin, LineChart, Cpu, Bot, MessageCircle } from "lucide-react";

export const TrustTechSection: React.FC = () => {
  const pillars = [
    { label: "Web", icon: <Globe className="w-3.5 h-3.5" /> },
    { label: "SEO", icon: <MapPin className="w-3.5 h-3.5" /> },
    { label: "Analytics", icon: <LineChart className="w-3.5 h-3.5" /> },
    { label: "Automation", icon: <Cpu className="w-3.5 h-3.5" /> },
    { label: "AI", icon: <Bot className="w-3.5 h-3.5" /> },
    { label: "WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="py-7 bg-white border-b border-slate-200/80">
      <Container size="xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
            Built for modern business
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-slate-700">
            {pillars.map((pillar, idx) => (
              <React.Fragment key={pillar.label}>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 font-medium">
                  <span className="text-slate-500">{pillar.icon}</span>
                  <span>{pillar.label}</span>
                </div>
                {idx < pillars.length - 1 && (
                  <span className="text-slate-300 hidden sm:inline">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

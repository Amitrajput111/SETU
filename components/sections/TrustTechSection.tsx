import React from "react";
import { Container } from "@/components/ui/Container";
import { Zap, ShieldCheck, Server, Globe2, Bot, Smartphone } from "lucide-react";

export const TrustTechSection: React.FC = () => {
  const pillars = [
    { label: "Sub-Second Next.js 14 Speed", icon: <Zap className="w-3.5 h-3.5 text-amber-500" /> },
    { label: "Vercel Global Edge CDN", icon: <Server className="w-3.5 h-3.5 text-blue-500" /> },
    { label: "Google Maps Top 3 Compliance", icon: <Globe2 className="w-3.5 h-3.5 text-emerald-500" /> },
    { label: "Official WhatsApp Cloud API", icon: <Smartphone className="w-3.5 h-3.5 text-teal-500" /> },
    { label: "AI Calendar Automation", icon: <Bot className="w-3.5 h-3.5 text-indigo-500" /> },
    { label: "ISO-Grade SSL & Privacy", icon: <ShieldCheck className="w-3.5 h-3.5 text-slate-600" /> },
  ];

  return (
    <div className="py-5 bg-white border-b border-slate-200/80">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-wider text-[11px] shrink-0">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>Enterprise Infrastructure</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3 text-slate-700">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 font-medium text-xs hover:bg-slate-100 transition-colors"
              >
                <span>{pillar.icon}</span>
                <span className="font-semibold text-slate-800">{pillar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

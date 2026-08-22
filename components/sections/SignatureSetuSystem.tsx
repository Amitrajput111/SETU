import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, Globe, UserCheck, Bot, Calendar, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export const SignatureSetuSystem: React.FC = () => {
  const stages = [
    {
      number: "01",
      title: "Discovery",
      subtitle: "Google · Maps · Ads",
      icon: <Search className="w-4 h-4 text-blue-400" />,
      items: ["Google Business Profile", "Local Search Dominance", "Targeted Social Ads"],
    },
    {
      number: "02",
      title: "Digital Experience",
      subtitle: "Next.js Web Portal",
      icon: <Globe className="w-4 h-4 text-indigo-400" />,
      items: ["Sub-Second Load Times", "Doctor / Trainer Portals", "High-Trust Pricing Menus"],
    },
    {
      number: "03",
      title: "Capture",
      subtitle: "Forms & WhatsApp",
      icon: <UserCheck className="w-4 h-4 text-teal-400" />,
      items: ["Frictionless 2-Step Forms", "Direct WhatsApp Funnels", "Zero Spam Honeypot"],
    },
    {
      number: "04",
      title: "Qualify",
      subtitle: "AI Lead Assistant",
      icon: <Bot className="w-4 h-4 text-purple-400" />,
      items: ["24/7 Inquiry Triage", "Preliminary Symptom / FAQ", "Real-Time Counselor Alert"],
    },
    {
      number: "05",
      title: "Convert",
      subtitle: "Appointment Booking",
      icon: <Calendar className="w-4 h-4 text-amber-400" />,
      items: ["Google Calendar Sync", "24h & 2h WhatsApp Reminder", "One-Tap Reschedule"],
    },
    {
      number: "06",
      title: "Retain",
      subtitle: "5-Star Review Flywheel",
      icon: <Star className="w-4 h-4 text-emerald-400" />,
      items: ["Post-Visit Review Loop", "Membership Renewals", "Repeat Patient Growth"],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0B1220] text-white border-b border-slate-800" id="system">
      <Container size="xl">
        <SectionHeading
          eyebrow="The Signature Engine"
          title="One connected system. From discovery to customer."
          description="We replace disconnected tools and manual chaos with an integrated customer acquisition and retention pipeline."
          isDark
        />

        {/* Desktop Horizontal Flow / Mobile Vertical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {stages.map((stage, idx) => (
            <div
              key={stage.number}
              className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors relative group"
            >
              <div>
                {/* Top: Icon & Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center">
                    {stage.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    {stage.number}
                  </span>
                </div>

                {/* Stage Title */}
                <h3 className="text-base font-bold text-white mb-1">
                  {stage.title}
                </h3>
                <div className="text-xs text-teal-400 font-medium mb-4">
                  {stage.subtitle}
                </div>

                {/* Items checklist */}
                <ul className="space-y-1.5 text-xs text-slate-400 font-normal">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sub-indicator */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                Stage {idx + 1} of 6
              </div>
            </div>
          ))}
        </div>

        {/* Bottom System Summary */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="text-slate-300">
            <strong className="text-white">Full Attribution & CRM Synchronization: </strong>
            Track which search keywords, ads, and referral channels generate actual paying appointments.
          </div>
          <Link
            href="/audit"
            className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1 shrink-0"
          >
            <span>Audit Your Customer Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

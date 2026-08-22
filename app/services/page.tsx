import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES_DATA } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Globe,
  MapPin,
  Share2,
  MessageCircle,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Services — High-Speed Websites, Local SEO & AI Automation",
  description:
    "Explore SETU's 5 core growth services: Business Websites, Google Maps Local Growth, Social Branding, WhatsApp Lead Gen, and AI Automation.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-blue-600" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-teal-600" />;
      case "Share2":
        return <Share2 className="w-6 h-6 text-indigo-600" />;
      case "MessageCircle":
        return <MessageCircle className="w-6 h-6 text-emerald-600" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-600" />;
      default:
        return <Globe className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineered Services to Acquire, Convert & Automate
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We do not build generic template sites. We engineer interconnected digital systems designed to turn online attention into real revenue.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Deep Dive List */}
      <section className="py-16 sm:py-24 bg-white">
        <Container size="xl">
          <div className="space-y-16">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-slate-50/60 border border-slate-200/90 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Column: Title & Overview */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        SERVICE {service.number}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-brand-accent">
                    {service.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2 p-4 rounded-xl bg-white border border-slate-200/80 space-y-1 text-xs">
                    <div className="font-bold text-slate-900">Target Business Impact:</div>
                    <div className="text-slate-600">{service.businessImpact}</div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <Button
                      variant="accent"
                      size="md"
                      href={`/audit?service=${service.id}`}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Audit Your {service.title}
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      href="/pricing"
                    >
                      View Pricing
                    </Button>
                  </div>
                </div>

                {/* Right Column: Capabilities & Deliverables */}
                <div className="lg:col-span-6 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Technical Capabilities
                    </h3>
                    <div className="space-y-2.5">
                      {service.keyCapabilities.map((cap, capIdx) => (
                        <div key={capIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Included Deliverables
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {service.deliverables.map((del, delIdx) => (
                        <div key={delIdx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 font-medium">
                          {del}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500">
                    <strong>Ideal For:</strong> {service.idealFor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Comparison Table */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
        <Container size="xl">
          <SectionHeading
            eyebrow="Compare Approaches"
            title="Traditional Agencies vs. The SETU Engineering Approach"
            description="Why modern businesses choose an integrated technology partner over fragmented freelance retainers."
          />

          <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 sm:p-5 font-bold">Evaluation Criteria</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-300">Traditional Agency / Freelancer</th>
                    <th className="p-4 sm:p-5 font-bold text-teal-400">SETU Connected System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/60">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">Website Architecture</td>
                    <td className="p-4 sm:p-5 text-slate-600">Generic WordPress themes or bloated builders</td>
                    <td className="p-4 sm:p-5 text-slate-900 font-semibold bg-teal-50/30">Next.js App Router, Sub-second Edge Speed, 100% bespoke</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">Lead Routing</td>
                    <td className="p-4 sm:p-5 text-slate-600">Email inbox forms that go unread for days</td>
                    <td className="p-4 sm:p-5 text-slate-900 font-semibold bg-teal-50/30">Instant WhatsApp routing with pre-filled customer intents</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">Appointment Workflows</td>
                    <td className="p-4 sm:p-5 text-slate-600">Manual diary logs & chaotic phone callbacks</td>
                    <td className="p-4 sm:p-5 text-slate-900 font-semibold bg-teal-50/30">Automated calendar synchronization & 24h/2h WhatsApp reminders</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">Local SEO & Schema</td>
                    <td className="p-4 sm:p-5 text-slate-600">Basic meta title tags with zero structured schema</td>
                    <td className="p-4 sm:p-5 text-slate-900 font-semibold bg-teal-50/30">Full JSON-LD LocalBusiness schema & GBP keyword mapping</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">Pricing Transparency</td>
                    <td className="p-4 sm:p-5 text-slate-600">Hidden hourly surcharges and monthly lock-in contracts</td>
                    <td className="p-4 sm:p-5 text-slate-900 font-semibold bg-teal-50/30">Fixed transparent tiers starting from ₹10,000 with clear scopes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTASection />
    </>
  );
}

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/cards/PricingCard";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const PricingSection: React.FC = () => {
  const tiers = [
    {
      id: "starter",
      name: "Starter",
      price: "From ₹10,000",
      tagline: "For businesses needing a professional, fast, mobile-ready online home.",
      features: [
        "1-Page Fast Next.js Website",
        "Mobile Responsive Design",
        "Direct Click-to-WhatsApp Funnel",
        "Basic On-Page SEO & Google Maps Link",
        "Edge Hosting Setup + Free SSL",
      ],
      isPopular: false,
    },
    {
      id: "business",
      name: "Business",
      price: "From ₹20,000",
      tagline: "For growing businesses needing a complete digital presence & lead engine.",
      features: [
        "Multi-Page Custom Web Platform (Up to 5 Pages)",
        "Google Business Profile (GBP) Deep Optimization",
        "Dual Lead Capture (Forms + WhatsApp Triage)",
        "Google Analytics 4 & Conversion Tracking",
        "Service & Doctor / Trainer Profiles",
      ],
      isPopular: true,
      popularBadge: "Most Popular",
    },
    {
      id: "growth",
      name: "Growth + Automation",
      price: "From ₹30,000+",
      tagline: "For businesses wanting calendar booking & automated workflows.",
      features: [
        "Advanced Web Platform + Landing Pages",
        "Automated Appointment / Class Booking Engine",
        "2-Way Google Calendar / CRM Synchronization",
        "Automated 24h & 2h WhatsApp Reminders",
        "Automated 5-Star Review Flywheel",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80" id="pricing">
      <Container size="xl">
        <SectionHeading
          eyebrow="Transparent Investment"
          title="Start with what your business needs."
          description="Fixed-scope deliverables with transparent starting tiers. Final quotes confirmed in writing after your free digital audit."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <PricingCard
              key={tier.id}
              name={tier.name}
              price={tier.price}
              tagline={tier.tagline}
              features={tier.features}
              isPopular={tier.isPopular}
              popularBadge={tier.popularBadge}
              auditHref={`/audit?package=${tier.id}`}
              recommendationHref={`/contact?package=${tier.id}`}
            />
          ))}
        </div>

        {/* Pricing Reassurance Strip */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0" />
            <span>Looking for monthly care, hosting maintenance, and continuous SEO tuning?</span>
          </div>
          <Link
            href="/pricing"
            className="font-bold text-brand-accent hover:underline shrink-0"
          >
            Explore Monthly Retainers (From ₹5,000/mo) &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
};

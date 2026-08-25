import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_DATA } from "@/data/faq";
import { MessageCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80" id="faq">
      <Container size="xl">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Clear answers to common questions."
          description="Everything you need to know about our technical deliverables, scope, pricing, and timelines."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={FAQ_DATA.slice(0, 10)} allowMultiple={false} />
        </div>

        <div className="mt-12 text-center text-xs text-slate-500">
          <span>Have a specific question not listed here? </span>
          <a
            href="https://wa.me/919109265673?text=Hi%20SETU%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>Ask our team on WhatsApp</span>
            <MessageCircle className="w-3.5 h-3.5 inline" />
          </a>
        </div>
      </Container>
    </section>
  );
};

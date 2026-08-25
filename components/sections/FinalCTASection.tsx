import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B1220] text-white border-b border-slate-800">
      <Container size="md" className="text-center space-y-7">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready to build a better digital presence?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
          Tell us about your business. We&apos;ll identify where your digital presence can improve and send you a practical action plan.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="accent"
            size="lg"
            href="/audit"
            className="w-full sm:w-auto font-bold shadow-sm"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Get Free Business Audit
          </Button>

          <Button
            variant="whatsapp"
            size="lg"
            href="https://wa.me/919109265673?text=Hi%20SETU%2C%20I%20would%20like%20to%20discuss%20improving%20my%20business%20presence."
            isExternal
            className="w-full sm:w-auto font-bold"
            leftIcon={<MessageCircle className="w-4 h-4" />}
          >
            Talk on WhatsApp
          </Button>
        </div>

        <div className="text-xs text-slate-500 pt-2">
          100% Free · No Obligation · 24-Hour Review Turnaround
        </div>
      </Container>
    </section>
  );
};

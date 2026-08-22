import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustTechSection } from "@/components/sections/TrustTechSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { LiveDemosSection } from "@/components/sections/LiveDemosSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessAndPricingHub } from "@/components/sections/ProcessAndPricingHub";
import { FounderSection } from "@/components/sections/FounderSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* 01. Two-Column Hero with Live Interactive System Visual */}
      <HeroSection />

      {/* 02. Trust & Modern Capabilities Strip */}
      <TrustTechSection />

      {/* 03. Core Services (5 Clean Capabilities with UI Previews) */}
      <ServicesGrid />

      {/* 04. Featured Work (3 Concept Project Teardowns) */}
      <LiveDemosSection />

      {/* 05. Industry Blueprints (Healthcare, Fitness, Education) */}
      <IndustriesSection />

      {/* 06. 5-Stage Process & Transparent Pricing Packages */}
      <ProcessAndPricingHub />

      {/* 07. About SETU & Engineering Leadership */}
      <FounderSection />

      {/* 08. Frequently Asked Questions */}
      <FAQSection />

      {/* 09. Final Action Banner */}
      <FinalCTASection />
    </>
  );
}

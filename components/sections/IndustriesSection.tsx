import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { INDUSTRIES_DATA } from "@/data/industries";
import { Activity, Flame, GraduationCap } from "lucide-react";

export const IndustriesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity":
        return <Activity className="w-5 h-5 text-blue-600" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-teal-600" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      default:
        return <Activity className="w-5 h-5 text-blue-600" />;
    }
  };

  const getImage = (id: string) => {
    switch (id) {
      case "healthcare":
        return "/images/industries/healthcare.jpg";
      case "fitness":
        return "/images/industries/fitness.jpg";
      case "education":
        return "/images/industries/education.jpg";
      default:
        return undefined;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 scroll-mt-16 sm:scroll-mt-20" id="industries">
      <Container size="xl">
        <SectionHeading
          eyebrow="Industry Blueprints"
          title="Built around how different businesses actually grow."
          description="Different business models have distinct customer journeys. We engineer vertical-specific acquisition funnels for your exact market."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <IndustryCard
              key={ind.id}
              title={ind.title}
              badge={ind.badge}
              imageSrc={getImage(ind.id)}
              icon={getIcon(ind.iconName)}
              subNiches={ind.subNiches}
              commonProblem={ind.commonProblem.points[0]}
              setuSolution={ind.setuSolution.points[0]}
              href={`/#work`}
              liveDemoUrl={ind.liveDemoUrl}
              ctaText={`Explore ${ind.title}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

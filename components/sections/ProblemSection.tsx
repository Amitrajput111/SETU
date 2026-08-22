import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EyeOff, FileX, Unplug, Clock } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Invisible",
      description: "Customers cannot easily discover your business when searching on Google Maps and local search.",
      icon: <EyeOff className="w-5 h-5 text-slate-700" />,
    },
    {
      title: "Unconvincing",
      description: "An outdated, slow, or cluttered website creates weak first impressions and causes visitors to bounce.",
      icon: <FileX className="w-5 h-5 text-slate-700" />,
    },
    {
      title: "Disconnected",
      description: "Your website, Google profile, Instagram page, and WhatsApp inbox operate in complete silos with zero tracking.",
      icon: <Unplug className="w-5 h-5 text-slate-700" />,
    },
    {
      title: "Manual",
      description: "Your team wastes hours copy-pasting answers to repetitive questions and manually following up with leads.",
      icon: <Clock className="w-5 h-5 text-slate-700" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <Container size="xl">
        <SectionHeading
          eyebrow="The Core Problem"
          title="Your business shouldn't lose customers because your digital presence is weak."
          description="Most growing businesses don't have a product problem. They have a connection problem between high-intent buyers and their booking door."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob) => (
            <div
              key={prob.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {prob.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {prob.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

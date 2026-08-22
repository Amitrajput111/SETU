import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Linkedin, Github, ArrowRight, CheckCircle2 } from "lucide-react";

export const FounderSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 scroll-mt-16 sm:scroll-mt-20" id="about">
      <Container size="xl">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Engineering Workspace & Identity Card */}
            <div className="lg:col-span-5 space-y-4">
              {/* Studio Workspace Image Frame */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <Image
                  src="/images/workspace.jpg"
                  alt="SETU Engineering Studio Workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-[10px] font-mono text-teal-300 font-semibold border border-white/10">
                  Indore Engineering Studio
                </div>
              </div>

              {/* Founder Profile Details */}
              <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="font-bold text-sm text-white">SETU Engineering Leadership</h3>
                    <p className="text-[11px] text-teal-400">Founder &amp; Lead Systems Architect</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0" />
                    <span>Full-Stack Next.js</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0" />
                    <span>Local SEO Architect</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0" />
                    <span>AI Lead Workflows</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0" />
                    <span>WhatsApp APIs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story & Philosophy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                About The Company
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Building technology that helps businesses move forward.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                SETU (&ldquo;Bridge&rdquo;) was created to solve a persistent gap in the Indian market: growing businesses with excellent physical services that are held back by slow websites, missed phone calls, and manual administrative chaos.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We engineer modern Next.js websites, optimize Google Business Profiles, and build intelligent WhatsApp automations that work reliably 24/7.
              </p>

              <div className="pt-3">
                <Link
                  href="/about"
                  className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-brand-accent inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read our complete mission and roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

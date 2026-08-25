import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Linkedin, Github, ArrowRight, CheckCircle2, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export const FounderSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 scroll-mt-16 sm:scroll-mt-20" id="about">
      <Container size="xl">
        <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 lg:p-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Engineering Workspace & Identity Card */}
            <div className="lg:col-span-5 space-y-4">
              {/* Studio Workspace Image Frame */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                <Image
                  src="/images/workspace.jpg"
                  alt="SETU Engineering Studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-lg bg-slate-950/85 backdrop-blur-xs text-[11px] font-mono text-teal-300 font-bold border border-white/10">
                  📍 Indore Engineering Studio
                </div>
              </div>

              {/* Leadership & Engineering Guarantees */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4 shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="font-bold text-sm text-white">SETU Engineering Leadership</h3>
                    <p className="text-[11px] text-teal-400">Direct Senior Architect Oversight</p>
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

                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Next.js Full-Stack</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Google Maps Top 3</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>WhatsApp Cloud API</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>14-Day Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Why Business Owners Choose SETU */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-1">
                  Why Business Owners Choose SETU
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Technology built to deliver real business revenue — not agency fluff.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                SETU (&ldquo;Bridge&rdquo;) was founded with a single mission: to give growing local businesses the same sub-second website speed, automated WhatsApp booking, and Google Maps dominance previously reserved for venture-backed startups.
              </p>

              {/* 3 Value Pillars for Business Owners */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <Zap className="w-4 h-4 text-brand-accent mb-1.5" />
                  <div className="font-bold text-xs text-slate-900">Zero Junior Handoffs</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Work directly with experienced engineers from day one.
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-teal-600 mb-1.5" />
                  <div className="font-bold text-xs text-slate-900">100% Transparent</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Fixed pricing, confirmed milestones, and zero hidden costs.
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <HeartHandshake className="w-4 h-4 text-indigo-600 mb-1.5" />
                  <div className="font-bold text-xs text-slate-900">14-Day Delivery</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Live production launch in two weeks without endless delays.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/audit"
                  className="text-xs sm:text-sm font-bold text-slate-900 hover:text-brand-accent inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Request your free digital audit &amp; roadmap</span>
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

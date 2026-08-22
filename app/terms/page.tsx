import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service — SETU Digital Growth & Automation",
  description: "Terms and conditions governing the use of SETU website and services.",
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container size="lg">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-400 mt-2">Last updated: August 2026</p>
          </div>

          <div className="prose prose-slate text-xs sm:text-sm leading-relaxed text-slate-600 space-y-6">
            <p>
              Welcome to <strong>SETU (&ldquo;SETU Digital Growth & Automation&rdquo;)</strong>. By accessing our website, requesting a free audit, or engaging our digital engineering services, you agree to these Terms of Service.
            </p>

            <h2 className="text-base font-bold text-slate-900">1. Scope of Services</h2>
            <p>
              SETU provides digital website development, local SEO optimization, lead generation workflows, and AI automation engineering. All specific project deliverables, timelines, and payment terms are detailed in writing prior to project kickoff.
            </p>

            <h2 className="text-base font-bold text-slate-900">2. Honest Positioning & Disclaimers</h2>
            <p>
              SETU does not make fraudulent guarantees regarding specific revenue figures or guaranteed #1 positions on search engines, as third-party algorithms (Google, Meta) are governed independently. We guarantee professional engineering, technical performance (speed, SEO schema), and proper integration of automation workflows.
            </p>

            <h2 className="text-base font-bold text-slate-900">3. Intellectual Property</h2>
            <p>
              Upon full settlement of project invoices, all custom web code, custom graphics, and configured automations created specifically for the client become the client&apos;s property.
            </p>

            <h2 className="text-base font-bold text-slate-900">4. Revisions & Support</h2>
            <p>
              Each fixed-scope package includes standard post-launch support and warranty period as specified in our pricing tiers. Extended maintenance is provided under our monthly retainer agreements.
            </p>

            <h2 className="text-base font-bold text-slate-900">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of India, under the jurisdiction of the courts in Indore, Madhya Pradesh.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

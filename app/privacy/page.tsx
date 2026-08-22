import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — SETU Digital Growth & Automation",
  description: "SETU Privacy Policy regarding client data, communication details, and digital audit information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container size="lg">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">Last updated: August 2026</p>
          </div>

          <div className="prose prose-slate text-xs sm:text-sm leading-relaxed text-slate-600 space-y-6">
            <p>
              At <strong>SETU (&ldquo;SETU Digital Growth & Automation&rdquo;)</strong>, we respect your privacy and are committed to protecting the personal and business data you share with us through our website, audit forms, or direct WhatsApp inquiries.
            </p>

            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you request a digital audit, contact us, or engage our services, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Business Name and Industry Type</li>
              <li>Contact Person Name, Phone/WhatsApp Number, and Email Address</li>
              <li>Website URL, Google Business Profile links, and social media handles</li>
              <li>Stated business challenges, budget preferences, and project goals</li>
            </ul>

            <h2 className="text-base font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>
              We use your submitted details strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Conduct and deliver your requested Digital Presence Audit & Improvement Roadmap.</li>
              <li>Communicate project milestones, proposals, and system configurations via WhatsApp or Email.</li>
              <li>Provide ongoing client support and system maintenance.</li>
            </ul>

            <h2 className="text-base font-bold text-slate-900">3. Data Confidentiality & Protection</h2>
            <p>
              We <strong>never</strong> sell, rent, or trade your contact information or proprietary business data to third-party advertisers. All lead data is stored in secured databases with encryption in transit and at rest.
            </p>

            <h2 className="text-base font-bold text-slate-900">4. Contact & Inquiries</h2>
            <p>
              If you have any questions regarding your data privacy, please contact our team directly at <a href="mailto:contact@setugrowth.com" className="text-brand-accent underline">contact@setugrowth.com</a>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

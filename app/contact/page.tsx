import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact SETU — Direct WhatsApp & Consultation Inquiry",
  description:
    "Get in touch with the SETU engineering team. Chat directly on WhatsApp, request a consultation, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Connect Your Business to Growth
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you need a free digital presence audit, a technical consultation, or want to discuss a custom automation workflow, we are here.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Fast Track Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-teal-200 shadow-card space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 fill-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">
                      Fastest: Chat on WhatsApp
                    </h3>
                    <p className="text-xs text-slate-500">
                      Typical reply time: Under 15 minutes
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Skip the contact forms and message our engineering team directly on WhatsApp. We can discuss your requirements, review your website, or schedule a Google Meet call.
                </p>

                <Button
                  variant="whatsapp"
                  size="md"
                  href="https://wa.me/919876543210?text=Hi%20SETU%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business."
                  isExternal
                  className="w-full font-bold shadow-sm"
                  leftIcon={<MessageCircle className="w-4 h-4" />}
                >
                  Start WhatsApp Conversation
                </Button>
              </div>

              {/* Office & Details */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-card space-y-4">
                <h3 className="text-sm font-bold text-slate-900">
                  Headquarters & Region
                </h3>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Primary Hub:</strong>
                      <div>Indore, Madhya Pradesh, India</div>
                      <div className="text-slate-400">Serving businesses across India & worldwide</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Email:</strong>
                      <div>contact@setugrowth.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Direct Phone:</strong>
                      <div>+91 98765 43210</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Operating Hours:</strong>
                      <div>Monday – Saturday: 9:30 AM – 7:30 PM IST</div>
                      <div className="text-slate-400">AI triage & lead capture active 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Audit Link */}
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  <span>Looking for a formal website review?</span>
                </div>
                <p className="text-blue-800 leading-relaxed">
                  Use our comprehensive Digital Audit system to receive a structured breakdown of your speed, map rankings, and lead drop-offs.
                </p>
                <Link
                  href="/audit"
                  className="font-bold text-brand-accent hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>Go to Free Audit Form</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

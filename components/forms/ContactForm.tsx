"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, ContactFormData } from "@/lib/validations/forms";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, ArrowRight, User, Mail, Phone, Building2, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      businessName: "",
      serviceNeeded: "High-Performance Business Website",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setSubmitSuccess(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("Failed to send message. Please reach out directly on WhatsApp.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-teal-200 shadow-card text-center space-y-4 animate-in fade-in duration-200">
        <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-xl font-bold text-slate-900">Message Received</h4>
        <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
          Thank you for reaching out. A senior member of our engineering team will respond via WhatsApp / Email within 4 business hours.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="text-xs text-brand-accent hover:underline font-semibold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
      <h3 className="text-lg font-bold text-slate-900 mb-1">
        Send Us a Direct Message
      </h3>
      <p className="text-xs text-slate-500 mb-6">
        Have a question or custom project requirement? Fill out the form below.
      </p>

      {submitError && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-800 text-xs flex items-center gap-2 border border-red-200">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rahul Sharma"
                {...register("fullName")}
                className={cn(
                  "w-full pl-9 pr-3 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2",
                  errors.fullName ? "border-red-300 focus:ring-red-400 bg-red-50/20" : "border-slate-200 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                )}
              />
            </div>
            {errors.fullName && <p className="text-[10px] text-red-600 mt-1">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="98765 43210"
                {...register("phone")}
                className={cn(
                  "w-full pl-9 pr-3 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2",
                  errors.phone ? "border-red-300 focus:ring-red-400 bg-red-50/20" : "border-slate-200 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                )}
              />
            </div>
            {errors.phone && <p className="text-[10px] text-red-600 mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="rahul@example.com"
                {...register("email")}
                className={cn(
                  "w-full pl-9 pr-3 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2",
                  errors.email ? "border-red-300 focus:ring-red-400 bg-red-50/20" : "border-slate-200 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                )}
              />
            </div>
            {errors.email && <p className="text-[10px] text-red-600 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Business Name (Optional)
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Your clinic or practice"
                {...register("businessName")}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Service Required
          </label>
          <select
            {...register("serviceNeeded")}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
          >
            <option value="High-Performance Business Website">High-Performance Business Website</option>
            <option value="Local SEO & Google Business Profile">Local SEO & Google Business Profile</option>
            <option value="Lead Generation & WhatsApp Funnel">Lead Generation & WhatsApp Funnel</option>
            <option value="AI Automation & Appointment Workflow">AI Automation & Appointment Workflow</option>
            <option value="Complete Growth Platform (End-to-End)">Complete Growth Platform (End-to-End)</option>
            <option value="Monthly Retainer / Maintenance">Monthly Retainer / Maintenance</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your requirements or specific questions..."
            {...register("message")}
            className={cn(
              "w-full px-3 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 resize-none",
              errors.message ? "border-red-300 focus:ring-red-400 bg-red-50/20" : "border-slate-200 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
            )}
          />
          {errors.message && <p className="text-[10px] text-red-600 mt-1">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          className="w-full"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

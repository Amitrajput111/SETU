"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuditFormSchema, AuditFormData } from "@/lib/validations/forms";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Instagram,
  Target,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface AuditFormProps {
  defaultPackage?: string;
  onSuccess?: () => void;
  className?: string;
}

export const AuditForm: React.FC<AuditFormProps> = ({
  defaultPackage,
  onSuccess,
  className,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuditFormData>({
    resolver: zodResolver(AuditFormSchema),
    defaultValues: {
      businessName: "",
      businessType: "",
      city: "",
      whatsappNumber: "",
      emailAddress: "",
      websiteUrl: "",
      instagramHandle: "",
      googleMapsUrl: "",
      primaryChallenge: "Need more inbound leads & appointments",
      monthlyBudget: defaultPackage ? `Interested in ${defaultPackage}` : "₹10,000 – ₹20,000",
      targetTimeline: "Immediately (Within 2 weeks)",
      additionalNotes: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit audit request. Please try again.");
      }

      setSubmitSuccess(true);
      setReferenceId(result.leadId || null);
      reset();
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("An unexpected error occurred. Please contact us via WhatsApp directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-teal-200 shadow-card text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto text-teal-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">
            Digital Audit Request Received!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you! Our engineering team has logged your submission. We are preparing your customized Digital Presence Audit & Improvement Roadmap.
          </p>
          {referenceId && (
            <div className="text-xs font-mono text-slate-500 pt-1">
              Audit Reference ID: <span className="font-bold text-slate-800">{referenceId}</span>
            </div>
          )}
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto space-y-1.5 text-left">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>What happens next:</span>
          </div>
          <div>1. We run automated speed, local map pack & conversion scans.</div>
          <div>2. We review your digital bottlenecks manually.</div>
          <div>3. We send your action plan to your WhatsApp within 24 hours.</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919876543210?text=Hi%20SETU%2C%20I%20just%20submitted%20the%20digital%20audit%20form${referenceId ? `%20(Ref%3A%20${referenceId})` : ""}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            Connect on WhatsApp for Priority Review
          </a>
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="text-xs text-slate-500 hover:text-slate-900 underline"
          >
            Submit another business
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-card", className)}>
      <div className="mb-8 pb-6 border-b border-slate-100">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-brand-accent mb-2">
          <span>100% Free · No Obligation</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Request Your Business Growth & Digital Audit
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Tell us about your business. We will analyze your local rankings, website speed, and lead bottlenecks.
        </p>
      </div>

      {submitError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Spam Honeypot Field (Hidden from humans) */}
        <input
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />

        {/* Section 1: Business Identity */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            01. Business Profile
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Business Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Business Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Apex Smile Dental Studio"
                  {...register("businessName")}
                  className={cn(
                    "w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2",
                    errors.businessName
                      ? "border-red-300 focus:ring-red-400 bg-red-50/20"
                      : "border-slate-200 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                  )}
                />
              </div>
              {errors.businessName && (
                <p className="text-[11px] text-red-600 mt-1">{errors.businessName.message}</p>
              )}
            </div>

            {/* Business Type / Vertical */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Industry / Business Type <span className="text-red-500">*</span>
              </label>
              <select
                {...register("businessType")}
                className={cn(
                  "w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2",
                  errors.businessType
                    ? "border-red-300 focus:ring-red-400 bg-red-50/20"
                    : "border-slate-200 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                )}
              >
                <option value="">Select industry category...</option>
                <option value="Dental Clinic">Dental Clinic / Orthodontics</option>
                <option value="Specialty Healthcare">Specialty Clinic / Doctor Practice</option>
                <option value="Gym & Fitness Studio">Gym & Fitness Studio</option>
                <option value="Yoga & Wellness Academy">Yoga / Pilates / Wellness Academy</option>
                <option value="Coaching Institute">Coaching Institute (JEE/NEET/Boards)</option>
                <option value="Professional Services">Professional Services (Law/CA/Consulting)</option>
                <option value="Local Retail / Showroom">Local Retail / Showroom</option>
                <option value="Other Business">Other Business Category</option>
              </select>
              {errors.businessType && (
                <p className="text-[11px] text-red-600 mt-1">{errors.businessType.message}</p>
              )}
            </div>
          </div>

          {/* City / Location */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              City / Primary Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. Indore (Vijay Nagar) or Mumbai / Delhi"
                {...register("city")}
                className={cn(
                  "w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2",
                  errors.city
                    ? "border-red-300 focus:ring-red-400 bg-red-50/20"
                    : "border-slate-200 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                )}
              />
            </div>
            {errors.city && (
              <p className="text-[11px] text-red-600 mt-1">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Section 2: Contact Information */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            02. Contact Channels
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                WhatsApp Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  {...register("whatsappNumber")}
                  className={cn(
                    "w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2",
                    errors.whatsappNumber
                      ? "border-red-300 focus:ring-red-400 bg-red-50/20"
                      : "border-slate-200 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                  )}
                />
              </div>
              {errors.whatsappNumber && (
                <p className="text-[11px] text-red-600 mt-1">{errors.whatsappNumber.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="e.g. founder@clinic.com"
                  {...register("emailAddress")}
                  className={cn(
                    "w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2",
                    errors.emailAddress
                      ? "border-red-300 focus:ring-red-400 bg-red-50/20"
                      : "border-slate-200 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                  )}
                />
              </div>
              {errors.emailAddress && (
                <p className="text-[11px] text-red-600 mt-1">{errors.emailAddress.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Section 3: Current Online Links (Optional) */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            03. Current Online Links (Optional for inspection)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Current Website URL
              </label>
              <div className="relative">
                <Globe className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. currentsite.com"
                  {...register("websiteUrl")}
                  className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Instagram Profile / Handle
              </label>
              <div className="relative">
                <Instagram className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="@yourbusiness"
                  {...register("instagramHandle")}
                  className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Google Business / Maps Link
              </label>
              <div className="relative">
                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Google Maps link or Business Name"
                  {...register("googleMapsUrl")}
                  className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Goals & Budget */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            04. Goals & Scope Preferences
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Primary Goal / Biggest Bottleneck <span className="text-red-500">*</span>
              </label>
              <select
                {...register("primaryChallenge")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
              >
                <option value="Need more inbound leads & appointments">Need more inbound leads & appointments</option>
                <option value="Current website is outdated/slow/ugly">Current website is outdated / slow / ugly</option>
                <option value="Struggling to rank on Google Maps in our city">Struggling to rank on Google Maps in our city</option>
                <option value="Want WhatsApp automated booking & reminders">Want WhatsApp automated booking & reminders</option>
                <option value="Need full digital rebranding + lead funnel">Need full digital rebranding + lead funnel</option>
                <option value="Starting a new business from scratch">Starting a new business from scratch</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Budget Range (Transparent Investment)
              </label>
              <select
                {...register("monthlyBudget")}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent bg-slate-50/50 focus:bg-white"
              >
                <option value="Starter (₹10,000 setup)">Starter Tier (₹10,000 setup)</option>
                <option value="Business (₹20,000 setup)">Business Tier (₹20,000 setup)</option>
                <option value="Growth + AI Automation (₹30,000+ setup)">Growth + AI Automation (₹30,000+ setup)</option>
                <option value="Monthly Retainer (₹5,000 - ₹12,000/mo)">Monthly Growth Retainer (₹5,000 – ₹12,000/mo)</option>
                <option value="Custom Scope / Enterprise">Custom Scope / To be determined</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Additional Details or Specific Requirements (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Tell us what you would like to achieve or any specific pain points..."
              {...register("additionalNotes")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent bg-slate-50/50 focus:bg-white resize-none"
            />
          </div>
        </div>

        {/* Submit Action */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <Button
            type="submit"
            variant="accent"
            size="lg"
            isLoading={isSubmitting}
            className="w-full text-base font-bold shadow-md hover:shadow-lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {isSubmitting ? "Analyzing & Generating Audit..." : "Submit for Free Business Audit"}
          </Button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>We respect your privacy. No spam. 24-hour turnaround guaranteed.</span>
          </div>
        </div>
      </form>
    </div>
  );
};

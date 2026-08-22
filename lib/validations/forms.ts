import { z } from "zod";

export const AuditFormSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  businessType: z.string().min(2, "Please select or enter your business type"),
  city: z.string().min(2, "City / Location is required"),
  whatsappNumber: z
    .string()
    .min(10, "Please enter a valid 10-digit WhatsApp number")
    .regex(/^[0-9+ -]{10,15}$/, "Invalid phone format"),
  emailAddress: z.string().email("Please enter a valid email address"),
  websiteUrl: z
    .string()
    .optional()
    .refine(
      (val) => !val || val === "" || /^https?:\/\/.+/.test(val) || /^[\w-]+\.[\w.-]+/.test(val),
      "Please enter a valid URL (e.g. example.com or https://example.com)"
    ),
  instagramHandle: z.string().optional(),
  googleMapsUrl: z.string().optional(),
  primaryChallenge: z.string().min(2, "Please select your primary bottleneck"),
  monthlyBudget: z.string().optional(),
  targetTimeline: z.string().optional(),
  additionalNotes: z.string().optional(),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export type AuditFormData = z.infer<typeof AuditFormSchema>;

export const ContactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit phone/WhatsApp number")
    .regex(/^[0-9+ -]{10,15}$/, "Invalid phone format"),
  businessName: z.string().optional(),
  serviceNeeded: z.string().optional(),
  message: z.string().min(10, "Please provide some details (at least 10 characters)"),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

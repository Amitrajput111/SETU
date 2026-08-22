export interface SystemNode {
  id: string;
  stepNumber: number;
  label: string;
  category: "Traffic" | "Conversion" | "Automation" | "Retention";
  shortDescription: string;
  whatItDoes: string;
  whyItMatters: string;
  realWorldExample: string;
  techInvolved: string[];
}

export const SIGNATURE_SYSTEM_NODES: SystemNode[] = [
  {
    id: "discovery",
    stepNumber: 1,
    label: "Google / Ads / Social",
    category: "Traffic",
    shortDescription: "High-intent local discovery when potential customers actively search for your service.",
    whatItDoes: "Captures customers who are searching on Google Maps, seeing hyper-targeted Instagram posts, or clicking local search ads.",
    whyItMatters: "Without structured local visibility, 80% of local demand goes to competitors who appear on the first page of Google Maps.",
    realWorldExample: "A patient types 'best dentist near me' on Google Maps and sees your verified profile with 4.9 stars, current photos, and a direct booking button.",
    techInvolved: ["Google Business Profile", "Local SEO Schema", "Meta Ads", "Google Ads"],
  },
  {
    id: "website",
    stepNumber: 2,
    label: "High-Speed Website",
    category: "Conversion",
    shortDescription: "Sub-second loading, high-trust landing experience tailored to mobile devices.",
    whatItDoes: "Presents clear pricing, doctor/trainer credentials, patient/client reviews, and straightforward service menus with zero clutter.",
    whyItMatters: "Visitors decide in under 5 seconds whether your business is trustworthy. Slow or ugly sites immediately lose leads to the back button.",
    realWorldExample: "A parent clicks the coaching institute website on mobile; it loads in 0.8s, clearly displays faculty backgrounds, and has a 1-tap 'Book Free Demo' button.",
    techInvolved: ["Next.js App Router", "Tailwind CSS", "Edge CDN", "Google Core Web Vitals"],
  },
  {
    id: "lead-capture",
    stepNumber: 3,
    label: "Smart Lead Capture",
    category: "Conversion",
    shortDescription: "Frictionless 2-step capture forms with pre-filled intents and no spam.",
    whatItDoes: "Replaces intimidating 15-field forms with a minimal 2-step capture that asks only what is needed to begin the conversation.",
    whyItMatters: "Every extra form field drops conversion by 10–15%. Streamlined forms capture significantly more enquiries.",
    realWorldExample: "Visitor selects 'Root Canal Treatment' and enters WhatsApp number. Form validates instantly and connects to CRM.",
    techInvolved: ["React Hook Form", "Zod Validation", "Server Actions", "Spam Honeypots"],
  },
  {
    id: "whatsapp-routing",
    stepNumber: 4,
    label: "WhatsApp Direct",
    category: "Conversion",
    shortDescription: "Immediate communication channel on the platform 90%+ of Indian customers prefer.",
    whatItDoes: "Routes the new enquiry directly into an organized WhatsApp thread with pre-filled context (service requested, time preference).",
    whyItMatters: "Email response rates for local businesses in India are under 12%; WhatsApp message read rates exceed 95% within 10 minutes.",
    realWorldExample: "Visitor taps 'Chat on WhatsApp'; their WhatsApp opens with 'Hi, I would like to book a dental checkup consultation for tomorrow.'",
    techInvolved: ["WhatsApp Cloud API", "Custom Deep Links", "Webhook Routing"],
  },
  {
    id: "ai-assistant",
    stepNumber: 5,
    label: "AI Lead Assistant",
    category: "Automation",
    shortDescription: "Instant 24/7 intelligent response to qualify the lead and answer common FAQs.",
    whatItDoes: "Understands user questions, provides accurate clinic timings, fee ranges, doctor availability, and collects preliminary details.",
    whyItMatters: "Leads that arrive at 10 PM on Sunday are usually lost by Monday morning if not acknowledged immediately.",
    realWorldExample: "Prospect asks: 'Do you have evening batches for working professionals?' AI responds in 5 seconds with batch timings and registration links.",
    techInvolved: ["LLM Assistant", "Knowledge Embeddings", "Context Guardrails", "JSON Workflows"],
  },
  {
    id: "appointment-sync",
    stepNumber: 6,
    label: "Appointment Booking",
    category: "Automation",
    shortDescription: "Frictionless calendar slot selection synced with the business schedule.",
    whatItDoes: "Lets the customer choose an available slot in real-time and immediately syncs the booking with the doctor's or trainer's calendar.",
    whyItMatters: "Eliminates 4 back-and-forth phone calls just to pick a time, preventing customer frustration.",
    realWorldExample: "Patient selects Tuesday at 4:30 PM; doctor's Google Calendar blocks the slot and the front-desk dashboard updates.",
    techInvolved: ["Google Calendar API", "Slot Availability Engine", "Timezone Handlers"],
  },
  {
    id: "automated-reminders",
    stepNumber: 7,
    label: "Automated Reminders",
    category: "Automation",
    shortDescription: "Timed WhatsApp notifications that slash no-shows to under 10%.",
    whatItDoes: "Sends automated friendly reminders 24 hours and 2 hours before the scheduled appointment with directions and 1-tap reschedule.",
    whyItMatters: "Clinic and studio no-shows cost Indian businesses thousands of rupees in empty slots every single week.",
    realWorldExample: "Patient gets WhatsApp reminder: 'Hi Rahul, your consultation is tomorrow at 4:30 PM at Apex Dental. Click here for Google Maps directions.'",
    techInvolved: ["Cron Triggers", "Scheduled Workflows", "WhatsApp Notification Templates"],
  },
  {
    id: "customer-delight",
    stepNumber: 8,
    label: "Delighted Customer",
    category: "Retention",
    shortDescription: "Smooth in-person experience enabled by prior context and zero waiting confusion.",
    whatItDoes: "Customer arrives, reception already has their service details and history ready, leading to a frictionless first appointment.",
    whyItMatters: "A seamless digital intake creates high confidence before the client even meets the doctor, trainer, or teacher.",
    realWorldExample: "Patient walks in; receptionist greets them by name with the pre-submitted symptoms already in the consultation file.",
    techInvolved: ["CRM Lead Records", "Intake History Summary"],
  },
  {
    id: "review-growth",
    stepNumber: 9,
    label: "Review & Referral Loop",
    category: "Retention",
    shortDescription: "Automated post-visit 5-star Google review capture to feed back into Discovery.",
    whatItDoes: "Sends an automated thank-you message 2 hours after service completion with a direct 1-tap Google Maps 5-star review link.",
    whyItMatters: "Completes the growth flywheel: more 5-star reviews improve Google Maps ranking, driving even more high-intent discovery.",
    realWorldExample: "Happy fitness trial attendee receives: 'Thanks for working out with us today! If you enjoyed the session, leave a quick review here.'",
    techInvolved: ["Google Maps Review API", "Post-Visit Trigger", "Feedback Engine"],
  },
];

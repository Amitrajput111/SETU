export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  startingPrice: number;
  priceDisplay: string;
  billingFrequency: string;
  tagline: string;
  description: string;
  deliverables: string[];
  notIncluded?: string[];
  idealFor: string;
  deliveryTime: string;
  ctaText: string;
}

export interface MonthlyRetainer {
  id: string;
  name: string;
  startingPrice: number;
  priceDisplay: string;
  billingFrequency: string;
  tagline: string;
  servicesIncluded: string[];
  idealFor: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    startingPrice: 10000,
    priceDisplay: "From ₹10,000",
    billingFrequency: "one-time setup",
    tagline: "For small businesses needing a clean, professional, mobile-ready online presence.",
    description: "A fast, modern one-page web presence designed to give your business credibility, display your offerings clearly, and connect visitors directly to WhatsApp.",
    deliverables: [
      "Custom 1-Page High-Speed Website (Next.js)",
      "Mobile-First Responsive Design (100% responsive)",
      "Direct Click-to-WhatsApp Integration",
      "Interactive Contact & Lead Capture Form",
      "Basic On-Page SEO & Google Business Profile Link",
      "Fast Global Edge Hosting Setup + Free SSL",
      "Domain & DNS Connection Assistance",
      "14 Days Post-Launch Support",
    ],
    notIncluded: [
      "Multi-page architecture",
      "Advanced AI automated chatbots",
      "Complex CRM synchronization",
    ],
    idealFor: "Solo practitioners, independent clinics, local retail services, and newly launched ventures.",
    deliveryTime: "5 – 7 Business Days",
    ctaText: "Get Started with Starter",
  },
  {
    id: "business",
    name: "Business",
    badge: "Most Popular",
    popular: true,
    startingPrice: 20000,
    priceDisplay: "From ₹20,000",
    billingFrequency: "one-time setup",
    tagline: "For growing businesses needing a complete digital presence and lead engine.",
    description: "A comprehensive multi-page digital platform engineered for high conversion, local search dominance on Google Maps, and multi-channel lead capture.",
    deliverables: [
      "Complete Multi-Page Website (Up to 5 custom pages)",
      "Comprehensive Local SEO Foundation & Schema Markup",
      "Google Business Profile (GBP) Deep Optimization",
      "Dual Lead Capture: Forms + WhatsApp Direct Funnels",
      "Google Analytics 4 & Meta Conversion Pixel Setup",
      "Doctor / Trainer / Faculty Profiles & Service Menus",
      "Automated Email / WhatsApp Lead Notification for Staff",
      "Speed Optimized (90+ PageSpeed score target)",
      "30 Days Post-Launch Maintenance & Support",
    ],
    idealFor: "Established clinics, fitness centers, coaching academies, and professional service firms.",
    deliveryTime: "10 – 14 Business Days",
    ctaText: "Choose Business Tier",
  },
  {
    id: "growth",
    name: "Growth + Automation",
    badge: "Full System",
    startingPrice: 30000,
    priceDisplay: "From ₹30,000+",
    billingFrequency: "one-time setup",
    tagline: "For businesses wanting advanced lead workflows, calendar booking & AI automation.",
    description: "The complete SETU client acquisition and automation system. Includes advanced landing pages, calendar scheduling, automated WhatsApp reminder sequences, and custom workflow automations.",
    deliverables: [
      "Advanced Multi-Page Web Platform + Custom Landing Pages",
      "Full Local SEO + City-Wide Search Dominance Architecture",
      "Automated Appointment / Demo Class Booking System",
      "2-Way Google Calendar / CRM Synchronization",
      "Automated WhatsApp Reminder Sequence (24h & 2h before)",
      "AI Knowledge Assistant for 24/7 preliminary query handling",
      "Automated 5-Star Google Review Collection Flywheel",
      "Database Lead Tracking Dashboard",
      "60 Days Priority Support & Conversion Tuning",
    ],
    idealFor: "High-volume clinics, multi-coach fitness clubs, busy educational institutes, and scaling companies.",
    deliveryTime: "14 – 21 Business Days",
    ctaText: "Build Custom Growth System",
  },
];

export const MONTHLY_RETAINERS: MonthlyRetainer[] = [
  {
    id: "retainer-maintenance",
    name: "Care & Speed Retainer",
    startingPrice: 5000,
    priceDisplay: "From ₹5,000 / month",
    billingFrequency: "billed monthly",
    tagline: "Keep your website lightning fast, secure, backed up, and updated with your latest offers.",
    servicesIncluded: [
      "High-speed edge cloud hosting & SSL renewal",
      "Up to 2 hours of monthly content, banner, or price updates",
      "Weekly automated security backups & uptime monitoring",
      "Monthly performance & lead volume report",
      "Priority WhatsApp technical support",
    ],
    idealFor: "Businesses wanting complete peace of mind that their website is always online, fast, and updated.",
  },
  {
    id: "retainer-growth",
    name: "Growth & Local SEO Retainer",
    startingPrice: 12000,
    priceDisplay: "From ₹12,000 / month",
    billingFrequency: "billed monthly",
    tagline: "Proactive local search optimization, content updates, and continuous lead conversion tuning.",
    servicesIncluded: [
      "Everything in Care & Speed Retainer",
      "Active Google Business Profile management & geotagged posts",
      "Continuous Local SEO keyword tracking & rank optimization",
      "Monthly A/B testing on landing page CTAs and forms",
      "Automated review generation sequence monitoring",
      "Quarterly strategy review call with our lead architect",
    ],
    idealFor: "Competitive businesses actively looking to outrank local competitors and maintain steady lead flow.",
  },
];

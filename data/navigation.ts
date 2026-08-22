export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV: NavItem[] = [
  { name: "Services", href: "/#services" },
  { name: "Industries", href: "/#industries" },
  { name: "Work", href: "/#work" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About", href: "/#about" },
];

export const FOOTER_SERVICES: NavItem[] = [
  { name: "High-Performance Websites", href: "/#services" },
  { name: "Local SEO & Google Business", href: "/#services" },
  { name: "Social Media Presence", href: "/#services" },
  { name: "Lead-Gen & WhatsApp Systems", href: "/#services" },
  { name: "AI Automation & CRM", href: "/#services" },
];

export const FOOTER_INDUSTRIES: NavItem[] = [
  { name: "Dental & Healthcare Clinics", href: "/#industries" },
  { name: "Fitness Studios & Gyms", href: "/#industries" },
  { name: "Coaching Institutes & Academies", href: "/#industries" },
];

export const FOOTER_COMPANY: NavItem[] = [
  { name: "About SETU", href: "/#about" },
  { name: "5-Stage Delivery Process", href: "/#pricing" },
  { name: "Work & Concept Demos", href: "/#work" },
  { name: "Transparent Pricing", href: "/#pricing" },
  { name: "Free Business Audit", href: "/audit" },
  { name: "Contact Team", href: "/contact" },
];

export const FOOTER_LEGAL: NavItem[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

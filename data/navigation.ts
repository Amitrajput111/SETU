export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV: NavItem[] = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Work & Demos", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export const FOOTER_SERVICES: NavItem[] = [
  { name: "High-Performance Websites", href: "/services#websites" },
  { name: "Local SEO & Google Business", href: "/services#local-growth" },
  { name: "Social Media Presence", href: "/services#social-presence" },
  { name: "Lead-Gen & WhatsApp Systems", href: "/services#lead-generation" },
  { name: "AI Automation & CRM", href: "/services#ai-automation" },
];

export const FOOTER_INDUSTRIES: NavItem[] = [
  { name: "Dental & Healthcare Clinics", href: "/industries#healthcare" },
  { name: "Fitness Studios & Gyms", href: "/industries#fitness" },
  { name: "Coaching Institutes & Academies", href: "/industries#education" },
];

export const FOOTER_COMPANY: NavItem[] = [
  { name: "About SETU", href: "/about" },
  { name: "Our 5-Stage Process", href: "/process" },
  { name: "Work & Live Demos", href: "/work" },
  { name: "Transparent Pricing", href: "/pricing" },
  { name: "Frequently Asked Questions", href: "/faq" },
  { name: "Contact Team", href: "/contact" },
];

export const FOOTER_LEGAL: NavItem[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

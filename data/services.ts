export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  keyCapabilities: string[];
  deliverables: string[];
  idealFor: string;
  businessImpact: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "websites",
    number: "01",
    title: "Business Websites",
    tagline: "Fast, responsive, SEO-ready websites designed to convert visitors into enquiries.",
    shortDescription: "Modern, ultra-fast websites engineered to build trust immediately, load in under a second, and guide visitors straight to booking or calling.",
    fullDescription: "Most local business websites are digital brochures that look dated, load slowly, and fail on mobile. We engineer custom, lightning-fast web applications with clean typography, structured local schema, frictionless contact paths, and direct WhatsApp routing that turns casual browsers into real enquiries.",
    iconName: "Globe",
    keyCapabilities: [
      "Sub-second page load times on 4G/5G mobile connections",
      "Mobile-first responsive UX optimized for Indian consumers",
      "Built-in Google Analytics 4 & conversion tracking pixels",
      "Structured SEO architecture with local business schema",
      "Frictionless lead capture forms with instant WhatsApp triggers",
      "Zero template bloat — clean, maintainable, modern code",
    ],
    deliverables: [
      "Custom responsive website (One-page or Multi-page)",
      "High-converting landing pages for specific services",
      "Domain connection, SSL setup & cloud hosting configuration",
      "Speed optimization (90+ Google PageSpeed score)",
      "Interactive enquiry and appointment booking forms",
    ],
    idealFor: "Clinics, training institutes, gyms, professional practices, and B2B services wanting a credible online home.",
    businessImpact: "Higher visitor engagement, lower bounce rate, and 2x to 3x increase in inbound enquiries from search traffic.",
  },
  {
    id: "local-growth",
    number: "02",
    title: "Local Growth & Google Maps",
    tagline: "Google Business Profile optimization, local citation building, and search visibility.",
    shortDescription: "Dominate 'near me' searches in your local market when high-intent customers search for your exact services.",
    fullDescription: "When someone in your city needs a dental clinic, gym, or coaching centre, Google Maps is their first stop. We optimize your entire local search footprint: GMB profile completeness, service category mapping, photo optimization, geotagged content, review capture workflows, and local citation consistency.",
    iconName: "MapPin",
    keyCapabilities: [
      "Google Business Profile (GBP) deep optimization & keyword mapping",
      "Local Map Pack ranking improvement strategy",
      "Automated WhatsApp review generation workflow",
      "Local schema markup (JSON-LD) for regional search authority",
      "NAP (Name, Address, Phone) consistency across directories",
      "Google Search Console & local search query telemetry",
    ],
    deliverables: [
      "Complete GBP audit and profile overhaul",
      "Local keyword targeting matrix for your specific territory",
      "1-click WhatsApp review collection templates for staff",
      "Monthly local visibility and call-volume ranking reports",
      "Spam review defense and optimization checklist",
    ],
    idealFor: "Location-dependent businesses serving customers in a 5–25 km radius looking to win local searches.",
    businessImpact: "More direct phone calls, walk-ins, and direction requests from high-intent local buyers.",
  },
  {
    id: "social-presence",
    number: "03",
    title: "Social Presence & Branding",
    tagline: "Content strategy, profile positioning, and consistent digital branding.",
    shortDescription: "Build social proof and authoritative brand touchpoints across Instagram, LinkedIn, and Meta channels.",
    fullDescription: "Customers check your Instagram or LinkedIn before deciding to book. A neglected page with erratic posts signals an unreliable business. We build a cohesive digital identity, consistent content frameworks, educational carousels, customer case stories, and direct message-to-WhatsApp routing.",
    iconName: "Share2",
    keyCapabilities: [
      "Brand aesthetic & visual guidelines (color, typography, templates)",
      "High-trust profile bio optimization with trackable link-in-bio",
      "Educational & proof-driven content calendar",
      "Instagram Story highlight systems for pricing, reviews, and FAQs",
      "DM auto-responders that route warm prospects to WhatsApp",
      "Meta Ads campaign structure for hyper-local lead generation",
    ],
    deliverables: [
      "Branded profile asset kit (banners, avatars, highlight covers)",
      "30-day repeatable content framework & caption templates",
      "Automated DM-to-lead capture setup",
      "Custom branded Link-in-Bio mobile mini-hub",
    ],
    idealFor: "Growing businesses needing a respectable, modern visual presence that validates their credibility.",
    businessImpact: "Warmer incoming leads who already trust your expertise before their first phone call.",
  },
  {
    id: "lead-generation",
    number: "04",
    title: "Lead Generation & WhatsApp Systems",
    tagline: "High-converting landing pages, WhatsApp automation, tracking, and lead routing.",
    shortDescription: "Stop losing leads to clunky email forms. Capture enquiries instantly on India's primary communication channel.",
    fullDescription: "90% of business enquiries in India prefer WhatsApp over email. Traditional website contact forms create friction and delay. We architect end-to-end lead pipelines: click-to-WhatsApp landing pages, QR code intake at your physical reception, instant automated responses, and CRM lead capture.",
    iconName: "MessageCircle",
    keyCapabilities: [
      "Direct Click-to-WhatsApp landing pages with pre-filled message intents",
      "Multi-channel lead ingestion (Google Ads, Meta, Website, Walk-ins)",
      "Instant 60-second automated response triggers to prevent lead drop-off",
      "Lead categorization & intake questionnaire forms",
      "Centralized lead storage (Google Sheets / CRM / Database)",
      "Event attribution tracking from ad click to consultation booking",
    ],
    deliverables: [
      "Dedicated high-intent lead generation landing page",
      "WhatsApp Business API / automated greeting & menu setup",
      "Real-time instant notification to owner/sales team on new lead",
      "Structured CRM pipeline dashboard integration",
    ],
    idealFor: "Businesses spending money on ads or social media that need higher conversion rates from their traffic.",
    businessImpact: "Response time reduced from hours to seconds; lead drop-off reduced by up to 40%.",
  },
  {
    id: "ai-automation",
    number: "05",
    title: "AI Automation & Workflows",
    tagline: "AI assistants, lead qualification, appointment workflows, follow-ups, and repetitive task automation.",
    shortDescription: "Eliminate repetitive manual tasks. Let intelligent automations handle FAQs, reminders, and data entry 24/7.",
    fullDescription: "Your team shouldn't spend 4 hours every day answering the same 5 questions, copy-pasting numbers into spreadsheets, or manually reminding clients about tomorrow's appointment. We build custom automated workflows and AI assistants that qualify leads, schedule bookings, trigger reminders, and update your records automatically.",
    iconName: "Cpu",
    keyCapabilities: [
      "24/7 AI conversational assistant for preliminary service queries",
      "Automated appointment booking & Google Calendar / CRM synchronization",
      "Automated WhatsApp appointment reminder sequences (24h & 2h before)",
      "No-show reduction workflows with 1-click reschedule links",
      "Automated post-service feedback and review request sequences",
      "Cross-platform data pipelines (Form -> WhatsApp -> Sheets -> Email)",
    ],
    deliverables: [
      "Custom business AI agent trained on your services, pricing & FAQs",
      "End-to-end automated appointment scheduling pipeline",
      "Automated multi-step reminder & follow-up sequence",
      "Internal notification bot for your team on Telegram/WhatsApp",
    ],
    idealFor: "Clinics, coaching centres, studios, and service businesses dealing with high customer query volume.",
    businessImpact: "Zero missed after-hours leads, 60%+ reduction in manual coordination time, and 30%+ reduction in appointment no-shows.",
  },
];

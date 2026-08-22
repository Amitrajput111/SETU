export interface ProcessStage {
  number: string;
  title: string;
  tagline: string;
  timeframe: string;
  iconName: string;
  summary: string;
  whatWeDo: string[];
  clientInvolvement: string;
  deliverable: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Audit & Bottleneck Analysis",
    tagline: "We inspect where your business is currently losing customers online.",
    timeframe: "Day 1 – 2",
    iconName: "Search",
    summary: "Before proposing any solution, we conduct a deep-dive evaluation of your current online presence, local search rankings, competitor positioning, mobile speed, and lead drop-off points.",
    whatWeDo: [
      "Analyze current website speed, mobile responsiveness, and UX flaws",
      "Inspect Google Business Profile ranking across your target city radius",
      "Evaluate competitor positioning, local pricing, and keyword gaps",
      "Identify the exact points where incoming leads drop off or go unanswered",
    ],
    clientInvolvement: "Fill our quick 2-minute audit form and share links to your current profiles or past marketing efforts.",
    deliverable: "Comprehensive Digital Presence Audit Report with identified bottlenecks and a prioritized improvement roadmap.",
  },
  {
    number: "02",
    title: "Growth Strategy & Wireframing",
    tagline: "We design the complete customer acquisition and automation blueprint.",
    timeframe: "Day 3 – 5",
    iconName: "FileSpreadsheet",
    summary: "We define the exact messaging, page structure, conversion paths, WhatsApp triggers, and automation workflows customized for your specific business model and ideal customer profile.",
    whatWeDo: [
      "Map out the high-converting page layout, typography, and clear service value props",
      "Draft concise, business-owner-friendly copywriting focused on benefits, not jargon",
      "Design frictionless lead capture pathways and WhatsApp message templates",
      "Define CRM integration endpoints and calendar booking logic",
    ],
    clientInvolvement: "A 30-minute alignment review to confirm pricing details, doctor/trainer credentials, and service offerings.",
    deliverable: "Interactive wireframes, complete copy outline, and system architecture blueprint.",
  },
  {
    number: "03",
    title: "Engineering & System Build",
    tagline: "We build the high-speed website and intelligent automated workflows.",
    timeframe: "Day 6 – 12",
    iconName: "Code2",
    summary: "We code your custom, ultra-fast web application using modern production technologies (Next.js, TypeScript, Tailwind) and configure the backend automations, forms, and database.",
    whatWeDo: [
      "Develop responsive, accessible, sub-second loading web pages",
      "Implement local SEO schema (JSON-LD), meta tags, and OpenGraph assets",
      "Connect WhatsApp Cloud API, booking widgets, and instant SMS/email triggers",
      "Configure database storage for lead tracking and audit logs",
      "Conduct cross-browser and mobile device testing (iOS, Android, Chrome, Safari)",
    ],
    clientInvolvement: "Zero coding hassle. You provide photos, logos, or facility assets if available (or we use our premium curated asset library).",
    deliverable: "Fully functional staging website and live automation test workflows ready for your review.",
  },
  {
    number: "04",
    title: "Launch, Integrations & Verification",
    tagline: "We take your systems live, connect analytics, and verify every path.",
    timeframe: "Day 13 – 14",
    iconName: "Rocket",
    summary: "We deploy the website to high-availability global edge servers, connect your custom domain with SSL, configure Google Analytics 4, link your Google Business Profile, and test every conversion trigger live.",
    whatWeDo: [
      "Deploy to high-speed production edge hosting with automated SSL",
      "Connect and verify Google Analytics 4, Google Search Console, and Meta Pixel",
      "Update Google Business Profile with verified website and booking links",
      "Run end-to-end live test submissions (Form -> Database -> WhatsApp -> Notification)",
      "Train your front-desk or sales staff on managing incoming WhatsApp leads",
    ],
    clientInvolvement: "Approve the final build and test receiving a live lead notification on your WhatsApp.",
    deliverable: "Live production website, verified analytics dashboard, and staff onboarding guide.",
  },
  {
    number: "05",
    title: "Optimize, Automate & Scale",
    tagline: "We continuously improve conversion rates and automate operations.",
    timeframe: "Ongoing (Retainer / Support)",
    iconName: "TrendingUp",
    summary: "Growth doesn't stop at launch. We monitor conversion data, gather customer reviews, optimize local search positions, and add new automation workflows as your business expands.",
    whatWeDo: [
      "Monitor Google Maps ranking changes and local search traffic growth",
      "A/B test landing page headlines, CTA buttons, and intake form steps",
      "Implement automated review collection loops and customer follow-up sequences",
      "Monthly performance report summarizing leads captured, response times, and conversion rates",
      "Technical maintenance, security updates, and regular backups",
    ],
    clientInvolvement: "Review monthly performance scorecard and share new services or batch updates as needed.",
    deliverable: "Monthly Growth & Lead Performance Report, continuous optimization, and dedicated support.",
  },
];

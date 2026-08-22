export interface FAQItem {
  id: string;
  category: "Pricing & Scope" | "Process & Delivery" | "SEO & Growth" | "AI & WhatsApp" | "Support & General";
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "cost",
    category: "Pricing & Scope",
    question: "How much does a website or digital system cost with SETU?",
    answer: "Our single-page Starter systems begin at ₹10,000, our full Business growth platforms start at ₹20,000, and comprehensive Growth + AI Automation systems start at ₹30,000+. Final pricing depends on your exact requirements (number of custom pages, booking integrations, AI complexity). We provide a fixed, transparent quote after your free digital audit before any work begins.",
  },
  {
    id: "timeline",
    category: "Process & Delivery",
    question: "How long does it take to build and launch our website?",
    answer: "A Starter website is typically completed in 5–7 business days. A comprehensive multi-page Business platform takes 10–14 business days, and advanced Growth systems with AI and calendar automations take 14–21 business days. We follow a strict 5-stage milestone process to ensure timely delivery.",
  },
  {
    id: "location",
    category: "Support & General",
    question: "Do you work with businesses outside Indore?",
    answer: "Yes, absolutely. While SETU is headquartered in Indore (Central India), we work seamlessly with growing businesses across India and internationally. All strategy calls, milestone reviews, and onboarding sessions are conducted via Google Meet, screen shares, and dedicated WhatsApp communication channels.",
  },
  {
    id: "redesign",
    category: "Process & Delivery",
    question: "Can you redesign our existing, outdated website?",
    answer: "Yes. In fact, many of our clients already have an old WordPress or template site that isn't generating leads. We audit your existing site, preserve any valuable SEO rankings you already hold, and build a modern, sub-second Next.js web application that significantly improves conversion and mobile usability.",
  },
  {
    id: "whatsapp-integration",
    category: "AI & WhatsApp",
    question: "How does the WhatsApp integration work for our business?",
    answer: "We configure click-to-WhatsApp pathways on your website so when a customer clicks 'Book Consultation' or 'Enquire', their WhatsApp opens with a pre-filled, customized message. We can also integrate automated greeting messages, interactive menus, and direct lead alerts sent to your staff's phone the moment someone fills a form.",
  },
  {
    id: "ai-automation-queries",
    category: "AI & WhatsApp",
    question: "What kind of AI automation can you build for a small or medium business?",
    answer: "We focus on high-ROI, practical automations rather than gimmicks: 24/7 AI assistants that answer common pricing/timing questions, automated WhatsApp reminder sequences to reduce appointment no-shows, instant calendar slot booking, and automated 5-star Google review collection after a customer completes their service.",
  },
  {
    id: "seo-rankings",
    category: "SEO & Growth",
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No honest engineering agency can promise a guaranteed #1 spot on Google, because Google's algorithm is proprietary. What we guarantee is a technically flawless foundation: sub-second page speed, structured local business schema markup (JSON-LD), complete Google Business Profile optimization, and local keyword architecture that gives your business the highest possible competitive advantage.",
  },
  {
    id: "maintenance-after-launch",
    category: "Support & General",
    question: "What happens after our website is launched?",
    answer: "Every project includes 14 to 60 days of complimentary post-launch support and warranty. After that, you can either manage updates independently (the codebase is yours) or subscribe to our monthly Care & Growth Retainers starting at ₹5,000/month for continuous updates, hosting maintenance, security backups, and local SEO tuning.",
  },
  {
    id: "social-media",
    category: "SEO & Growth",
    question: "Can SETU also help with social media and digital presence?",
    answer: "Yes. We design high-trust profile branding, link-in-bio mobile hubs, 30-day repeatable content frameworks, and Instagram DM-to-WhatsApp auto-responders that turn casual social media followers into booked appointments.",
  },
  {
    id: "domain-hosting",
    category: "Pricing & Scope",
    question: "Do I need to buy domain and hosting separately?",
    answer: "If you already own a domain (e.g. on GoDaddy or Namecheap), we will connect it to your new website for free. If you do not have one, we will guide you on purchasing your preferred .com or .in domain. We configure ultra-fast global edge cloud hosting with free SSL included in your setup.",
  },
];

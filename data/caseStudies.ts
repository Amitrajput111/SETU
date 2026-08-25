export interface DemoProject {
  id: string;
  slug: string;
  isConceptDemo: true;
  title: string;
  tagline: string;
  category: "Healthcare" | "Fitness & Wellness" | "Education";
  industry: string;
  clientType: string;
  location: string;
  liveDemoUrl: string;
  summary: string;
  clientContext: string;
  bottlenecks: string[];
  strategyImplemented: string[];
  technicalArchitecture: string[];
  targetedOutcomes: {
    label: string;
    value: string;
    description: string;
  }[];
  liveDemoFeatures: {
    title: string;
    description: string;
  }[];
  leadFlowSteps: string[];
  mockupData: {
    heroHeading: string;
    heroSubheading: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    sampleServices: { name: string; price: string; duration: string }[];
    sampleReviews: { author: string; rating: number; text: string }[];
  };
}

export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: "care-clinic-demo",
    slug: "care-clinic",
    isConceptDemo: true,
    title: "CARE CLINIC",
    tagline: "Premier multi-specialty healthcare clinic web app with zero patient no-shows & transparent doctor pricing.",
    category: "Healthcare",
    industry: "Multi-Specialty Clinic & Healthcare",
    clientType: "Multi-Specialty Practice (Cardiology, Pediatrics, Orthopedics, Gynecology)",
    location: "Indore (Vijay Nagar / Scheme 54)",
    liveDemoUrl: "https://client-wheat-seven-38.vercel.app/",
    summary: "A production-grade web application showcasing how a multi-specialty clinic captures patients, automates WhatsApp bookings, and eliminates front-desk appointment chaos.",
    clientContext: "High-end clinical practice offering specialist consultations in Cardiology, Pediatrics, Orthopedics, and Gynecology, struggling with missed after-hours patient enquiries.",
    bottlenecks: [
      "Inbound calls went unanswered when front desk staff was assisting doctors with patient billing.",
      "High patient drop-off on generic website contact forms.",
      "Over 22% missed appointments and last-minute cancellations without automated reminders.",
      "Google Business Profile lacked structured treatment pricing and direct booking links.",
    ],
    strategyImplemented: [
      "Built a sub-second Next.js web portal with transparent doctor consultation fees & specialist profiles.",
      "Engineered a 1-tap WhatsApp booking flow that pre-categorizes patient symptom and preferred doctor.",
      "Integrated automated 24h/2h WhatsApp reminder sequence with 1-click slot reschedule button.",
      "Configured automated post-procedure review capture workflow to systematically gather Google 5-star reviews.",
    ],
    technicalArchitecture: [
      "Next.js App Router with Server-Side Rendered treatment landing pages",
      "Tailwind CSS with clean medical-grade accessible UI components",
      "WhatsApp Cloud Webhook integration for instant lead acknowledgment",
      "Google Calendar 2-way sync for real-time doctor availability checks",
      "JSON-LD MedicalBusiness schema markup for search engines",
    ],
    targetedOutcomes: [
      {
        label: "Appointment Booking Conversion",
        value: "3.4x Target",
        description: "Compared to traditional email contact forms",
      },
      {
        label: "No-Show Rate Reduction",
        value: "< 7%",
        description: "Achieved via 24h & 2h automated WhatsApp reminders",
      },
      {
        label: "Lead Response Time",
        value: "< 35 Seconds",
        description: "Instant WhatsApp automated triage assistant",
      },
    ],
    liveDemoFeatures: [
      {
        title: "Specialist Doctor Selector",
        description: "Interactive doctor profile selector showing credentials and clinic timings.",
      },
      {
        title: "Doctor Calendar Slot Selector",
        description: "Visual time slot picker that syncs with real doctor clinic hours.",
      },
      {
        title: "WhatsApp Intake Bridge",
        description: "Auto-routes patient details directly into reception WhatsApp with pre-filled diagnosis context.",
      },
    ],
    leadFlowSteps: [
      "Patient discovers clinic on Google Maps / Local Search",
      "Visits mobile-optimized Doctor & Treatment portal",
      "Selects specialist department and preferred slot",
      "Enters WhatsApp phone number and receives instant confirmation",
      "Automated reminder triggers 24h and 2h prior to slot",
      "Post-consultation follow-up captures 5-star Google review",
    ],
    mockupData: {
      heroHeading: "Trusted Care. Closer to You.",
      heroSubheading: "Consult trusted specialists in Cardiology, Pediatrics, Orthopedics, and Gynecology. Transparent pricing, modern tech, zero waiting.",
      primaryCta: "Book Appointment on WhatsApp",
      secondaryCta: "View Specialist Doctors",
      highlights: ["Top Medical Specialists", "Modern Diagnostic Setup", "Transparent Consultation Fees", "Zero-Wait Appointments"],
      sampleServices: [
        { name: "General Medicine & Consultation", price: "₹500 / Session", duration: "30 mins" },
        { name: "Cardiology Specialist Assessment", price: "₹1,200 onward", duration: "45 mins" },
        { name: "Pediatrics & Child Wellness", price: "₹700", duration: "30 mins" },
        { name: "Orthopedic & Joint Consultation", price: "₹900", duration: "30 mins" },
      ],
      sampleReviews: [
        { author: "Pooja Verma", rating: 5, text: "Booked via WhatsApp, received instant confirmation, and had zero wait time at the clinic. Highly professional doctors!" },
        { author: "Dr. Sandeep Mehta", rating: 5, text: "Top-notch facility. The automated WhatsApp reminders were super helpful." },
      ],
    },
  },
  {
    id: "aura-fitness-demo",
    slug: "aura-fitness",
    isConceptDemo: true,
    title: "AURA FITNESS",
    tagline: "Premium luxury gym & elite health club with instant 1-Day VIP Trial Pass funnels and automated class booking.",
    category: "Fitness & Wellness",
    industry: "Premium Luxury Gym & Elite Health Club",
    clientType: "Boutique Strength & Conditioning Gym",
    location: "Indore (Scheme 54 / Vijay Nagar)",
    liveDemoUrl: "https://gym-web-demo-beta.vercel.app/",
    summary: "A high-conversion athletic portal showcasing how a luxury gym converts social traffic into booked VIP trial sessions, automates trainer schedules, and boosts membership renewals.",
    clientContext: "High-end fitness club offering personal coaching, group fitness, and recovery facilities, dealing with high drop-off from social media DMs.",
    bottlenecks: [
      "Dozens of daily Instagram DMs asking 'Fees?' went unanswered or were handled inconsistently.",
      "Visitors on the website had no frictionless way to experience the gym before committing.",
      "Trial session attendees were never systematically followed up with after their trial workout.",
      "Renewals were tracked manually, resulting in missed membership renewals.",
    ],
    strategyImplemented: [
      "Engineered an interactive 1-Day VIP Trial Pass booking system with instant WhatsApp confirmation pass.",
      "Created an automated Instagram DM responder routing prospects to their personalized trial pass.",
      "Implemented a 3-stage automated WhatsApp nurture sequence (Trial Day - Day 1 Post Trial - Special Offer).",
      "Automated membership expiry countdown notifications with 1-click renewal payment links.",
    ],
    technicalArchitecture: [
      "Ultra-responsive Next.js frontend with luxury dark-mode aesthetic",
      "WhatsApp Business Webhooks for instant 1-Day VIP Pass generation",
      "Interactive Class Schedule & Trainer Roster viewer",
      "Automated WhatsApp sequence trigger using lightweight webhook cron handlers",
    ],
    targetedOutcomes: [
      {
        label: "Trial Pass Claim Rate",
        value: "+4.8x Lift",
        description: "Via streamlined 1-click mobile pass generator",
      },
      {
        label: "Mobile PageSpeed",
        value: "99 / 100",
        description: "Fast sub-second loading on mobile devices",
      },
      {
        label: "Monthly Conversions",
        value: "142 Active Members",
        description: "Driven by systematic automated post-trial nurture",
      },
    ],
    liveDemoFeatures: [
      {
        title: "VIP 1-Day Trial Generator",
        description: "Instant pass generator with trainer selection and time slot choice.",
      },
      {
        title: "Interactive Class Timetable",
        description: "Dynamic schedule showing HIIT, CrossFit, Strength, and Mobility batches.",
      },
      {
        title: "Automated Membership Renewal Flow",
        description: "Pre-configured WhatsApp renewal notifications with discount incentives.",
      },
    ],
    leadFlowSteps: [
      "Prospect sees social media ad or local Google search",
      "Taps to claim their VIP 1-Day Trial Pass",
      "Chooses workout time (Morning Strength / Evening HIIT)",
      "Receives digital pass card on WhatsApp with location directions",
      "Attends session; system triggers post-workout review & joining perk",
      "System logs member in database and automates renewal alerts",
    ],
    mockupData: {
      heroHeading: "Transform Your Body. Elevate Your Standard.",
      heroSubheading: "Indore's premier luxury fitness and athletic conditioning space. World-class coaches, small-group batches, guaranteed progression.",
      primaryCta: "Claim Free 1-Day VIP Pass",
      secondaryCta: "View Class Timetable",
      highlights: ["Olympic Lifting Platforms", "Certified Strength Coaches", "Ice Bath & Recovery Zone", "Capped Batch Sizes"],
      sampleServices: [
        { name: "Functional Athletic Training", price: "₹3,500 / month", duration: "60 mins / day" },
        { name: "1-on-1 Personal Coaching", price: "₹8,000 / month", duration: "Custom sessions" },
        { name: "Mobility & Strength Group Batch", price: "₹2,800 / month", duration: "45 mins" },
        { name: "Recovery & Cold Plunge Pass", price: "₹1,200 / month", duration: "Unlimited access" },
      ],
      sampleReviews: [
        { author: "Karan Singhal", rating: 5, text: "The trial pass on WhatsApp made it super easy to jump in. The coaches actually correct your form on every set." },
        { author: "Ananya Joshi", rating: 5, text: "Cleanest gym in town. The automated batch reminders keep me accountable every morning." },
      ],
    },
  },
  {
    id: "edurise-academy-demo",
    slug: "edurise",
    isConceptDemo: true,
    title: "EduRise Academy",
    tagline: "Admissions growth engine for premier JEE, NEET & Foundation coaching institute with instant WhatsApp prospectus delivery.",
    category: "Education",
    industry: "Competitive Exams & Foundational Coaching",
    clientType: "Premier JEE/NEET & Olympiad Coaching Institute",
    location: "Indore (Bhawarkua / Annapurna)",
    liveDemoUrl: "https://edurise-js16rxcct-amitrajput111s-projects.vercel.app/",
    summary: "A production-grade admissions portal demonstrating how a coaching institute captures parent enquiries, automates instant syllabus & brochure distribution on WhatsApp, and drives demo class attendance.",
    clientContext: "Prominent regional coaching centre preparing students for competitive engineering and medical entrance exams, losing potential admissions due to delayed counselor response times.",
    bottlenecks: [
      "Parents downloaded PDFs from website, but the institute never captured their contact numbers.",
      "Counselors took 4–24 hours to follow up with leads, by which time parents had enrolled elsewhere.",
      "High dropout between scholarship test registration and actual exam day attendance.",
      "No transparent way for parents to view past results, batch sizes, and faculty backgrounds on mobile.",
    ],
    strategyImplemented: [
      "Built a high-credibility parent portal with verified top-ranker results, faculty credentials, and batch timings.",
      "Architected an instant WhatsApp Syllabus & Fee Structure delivery engine upon phone number verification.",
      "Set up instant counselor alert notification on WhatsApp the second a parent requests admission counseling.",
      "Engineered automated reminder sequences for scholarship tests & demo lecture days.",
    ],
    technicalArchitecture: [
      "Next.js SSG/SSR hybrid for lightning-fast ranker galleries and study center details",
      "Instant WhatsApp Document Dispatcher for syllabus PDFs and fee charts",
      "Interactive Scholarship Score & Fee Waiver Calculator",
      "Secure backend webhook piping lead details to academic counselor CRM",
    ],
    targetedOutcomes: [
      {
        label: "Prospectus Delivery Speed",
        value: "5 Seconds",
        description: "Via instant automated WhatsApp brochure delivery",
      },
      {
        label: "Demo Class Attendance",
        value: "+84% Increase",
        description: "Driven by automated WhatsApp reminders to parents",
      },
      {
        label: "Monthly Parent Inquiries",
        value: "380+ / Month",
        description: "Captured directly through mobile-optimized admission funnel",
      },
    ],
    liveDemoFeatures: [
      {
        title: "Instant Syllabus & Fee Guide",
        description: "Parents receive detailed syllabus PDF and fee structure directly on WhatsApp in seconds.",
      },
      {
        title: "Demo Class Slot Selector",
        description: "Allows parents to book a 2-day free trial lecture for their child.",
      },
      {
        title: "Scholarship Test Registration",
        description: "Quick 2-step registration with automated hall ticket generator.",
      },
    ],
    leadFlowSteps: [
      "Parent searches for coaching or sees local social media campaign",
      "Visits mobile-first institute portal with verified faculty and student results",
      "Taps 'Get Complete Syllabus & Fee Structure on WhatsApp'",
      "System sends PDF to parent WhatsApp in under 10 seconds",
      "Counselor receives instant alert with student's class and target exam",
      "System automates demo class confirmation and reminders",
    ],
    mockupData: {
      heroHeading: "Admissions, Simplified. Building Future Leaders.",
      heroSubheading: "Proven faculty from IITs & AIIMS. Personalized doubt-solving, small batch sizes, and structured test series for JEE & NEET.",
      primaryCta: "Download Syllabus on WhatsApp",
      secondaryCta: "Book Free 2-Day Demo Class",
      highlights: ["148+ Selections in 2025", "Ex-IITian & Medico Faculty", "Daily 1-on-1 Doubt Counters", "Free Scholarship Test Available"],
      sampleServices: [
        { name: "2-Year JEE (Main + Advanced) Integrated", price: "Target Class 11th", duration: "Daily 4h sessions" },
        { name: "2-Year NEET Medical Comprehensive", price: "Target Class 11th", duration: "Daily 4h sessions" },
        { name: "1-Year Repeater / Dropper Batch", price: "Intensive 2026", duration: "Daily 6h sessions" },
        { name: "Foundation & Olympiads (Class 8-10)", price: "Weekend Batch", duration: "Saturday-Sunday" },
      ],
      sampleReviews: [
        { author: "Rajesh Agrawal (Parent)", rating: 5, text: "Got the complete course structure on WhatsApp within 10 seconds. The counselor called promptly and answered every query without pressure." },
        { author: "Aditi Chouhan (Student, AIR 842)", rating: 5, text: "The doubt support and systematic test series were the key factors behind my score. Best coaching environment in Indore." },
      ],
    },
  },
];

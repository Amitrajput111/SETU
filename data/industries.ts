export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  subNiches: string[];
  commonProblem: {
    heading: string;
    points: string[];
  };
  setuSolution: {
    heading: string;
    points: string[];
  };
  businessImpact: {
    heading: string;
    points: string[];
  };
  demoProjectRef: string;
  demoProjectName: string;
  liveDemoUrl: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    subtitle: "Turn search inquiries into scheduled consultations with zero reception friction.",
    iconName: "Activity",
    badge: "Medical & Aesthetic",
    subNiches: [
      "Specialty Clinics & Doctors",
      "Dental Care & Orthodontics",
      "Diagnostics & Pathology Labs",
      "Aesthetic Dermatology Clinics",
    ],
    commonProblem: {
      heading: "Where clinics lose patients daily",
      points: [
        "Patients searching on Google Maps find outdated listings or incomplete treatment details.",
        "Front desk staff are busy with in-clinic patients and miss inbound calls or WhatsApp queries.",
        "High patient no-show rate (15–30%) due to lack of automated WhatsApp reminders.",
        "Manual appointment books lead to double bookings and lost follow-up reviews.",
      ],
    },
    setuSolution: {
      heading: "The SETU Healthcare Growth System",
      points: [
        "Ultra-fast clinic website with doctor credentials, treatment pricing guides, and clean visuals.",
        "Google Business Profile optimization to rank #1 in the clinic's local 10 km radius.",
        "1-click WhatsApp appointment request system with automated doctor calendar sync.",
        "Automated WhatsApp reminder protocol (24h & 2h before) with one-tap reschedule options.",
        "Automated post-treatment review collection workflow sent right to patient WhatsApp.",
      ],
    },
    businessImpact: {
      heading: "Measurable clinical business outcomes",
      points: [
        "Consistent flow of booked patient consultations without relying solely on aggregators.",
        "40% reduction in missed front-desk enquiries during peak clinic hours.",
        "No-show rate dropped to under 8% with automated WhatsApp reminders.",
        "Steady stream of 5-star Google reviews building local organic reputation.",
      ],
    },
    demoProjectRef: "care-clinic",
    demoProjectName: "CARE CLINIC",
    liveDemoUrl: "https://client-wheat-seven-38.vercel.app/",
  },
  {
    id: "fitness",
    title: "Fitness Studios & Gyms",
    subtitle: "Convert trial inquiries into active memberships and simplify class bookings.",
    iconName: "Flame",
    badge: "Fitness & Luxury Club",
    subNiches: [
      "Luxury Gyms & Health Clubs",
      "CrossFit & Functional Studios",
      "Yoga & Pilates Academies",
      "Personal Training Studios",
    ],
    commonProblem: {
      heading: "Where fitness businesses drop the ball",
      points: [
        "Instagram leads ask for 'fees?' in DMs and go cold after getting a generic price list.",
        "Website visitors cannot see real studio vibe, trainer credentials, or book a free trial easily.",
        "No structured follow-up sequence when someone visits for a trial session but doesn't buy immediately.",
        "Membership renewal reminders are sent manually, leading to delayed payments and drop-outs.",
      ],
    },
    setuSolution: {
      heading: "The SETU Fitness Conversion Engine",
      points: [
        "High-energy, modern website featuring virtual studio tour, trainer bios, and trial pass booking.",
        "Instant Instagram DM to WhatsApp auto-funnel with dynamic class schedule & trial pass link.",
        "Automated Trial Pass confirmation via WhatsApp with location pin and prep instructions.",
        "3-step automated post-trial nurture sequence that converts trial visitors into annual memberships.",
        "Automated WhatsApp renewal alerts 7 days before membership expiry.",
      ],
    },
    businessImpact: {
      heading: "Measurable fitness business outcomes",
      points: [
        "Trial session bookings increase by 60%+ through frictionless mobile forms.",
        "Higher trial-to-paid member conversion rate via structured follow-ups.",
        "Reduced staff hours spent manually answering membership pricing queries.",
        "Improved member retention with automated renewal reminders.",
      ],
    },
    demoProjectRef: "aura-fitness",
    demoProjectName: "AURA FITNESS",
    liveDemoUrl: "https://gym-web-demo-beta.vercel.app/",
  },
  {
    id: "education",
    title: "Coaching Institutes & Academies",
    subtitle: "Capture parent and student enquiries early and streamline batch admissions.",
    iconName: "GraduationCap",
    badge: "Education & Test Prep",
    subNiches: [
      "Competitive Exam Coaching (JEE/NEET/UPSC)",
      "Foundational & School Academies",
      "Skill & Vocational Training Institutes",
      "Study Abroad & Language Centers",
    ],
    commonProblem: {
      heading: "Where institutes lose student admissions",
      points: [
        "Parents browsing websites find cluttered PDFs and confusing fee structures.",
        "Enquiry forms require too much information upfront, causing high drop-off.",
        "Counselors fail to contact leads within 5 minutes, losing students to competitor institutes.",
        "Manual tracking in notebooks or spreadsheets leads to missed counseling callbacks.",
      ],
    },
    setuSolution: {
      heading: "The SETU Education Admissions Engine",
      points: [
        "Clean, authoritative institute portal with verified faculty profiles, results, and curriculum overview.",
        "Frictionless 2-step demo class booking & scholarship test registration system.",
        "Instant WhatsApp delivery of course syllabus and brochure to parents upon inquiry.",
        "Immediate counselor alert on WhatsApp the moment a new high-intent lead submits details.",
        "Automated reminder sequences for demo classes, open days, and scholarship test dates.",
      ],
    },
    businessImpact: {
      heading: "Measurable admission outcomes",
      points: [
        "3x higher parent engagement via instant WhatsApp syllabus download.",
        "Counselor response time slashed from hours to under 2 minutes.",
        "Significant increase in demo class attendance through automated reminder workflows.",
        "Full transparent attribution: know exactly which campaigns generated actual admissions.",
      ],
    },
    demoProjectRef: "edurise",
    demoProjectName: "EduRise Academy",
    liveDemoUrl: "https://edurise-js16rxcct-amitrajput111s-projects.vercel.app/",
  },
];

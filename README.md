# SETU — Digital Growth & Intelligent Automation Platform

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

> **"Setu"** means *bridge* in Sanskrit. SETU is a digital growth and intelligent automation company helping Indian SMBs and global clients bridge the critical gap between their local presence, search visibility, website speed, WhatsApp communication, and automated appointment workflows.

---

## 🚀 Live Demo & Overview

- **Live Production URL**: [https://setu-platform-rust.vercel.app](https://setu-platform-rust.vercel.app)
- **Repository**: [https://github.com/Amitrajput111/SETU](https://github.com/Amitrajput111/SETU)

---

## ✨ Core Pillars & Capabilities

1. **⚡ Sub-Second Next.js Websites**: Custom, mobile-first responsive web applications engineered for 99/100 PageSpeed scores, sub-second load times, and zero layout shift.
2. **📍 Google Maps & Local SEO Dominance**: Deep Google Business Profile (GBP) category tuning, 40+ directory citations, and automated review collection to capture the top 3 map pack.
3. **💬 WhatsApp 24/7 Lead Capture Engine**: Frictionless 2-step inquiry capture integrated with official WhatsApp Business Cloud API for sub-60-second automated lead triage.
4. **🤖 AI Workflow & Calendar Synchronization**: 2-way Google Calendar and CRM slot booking synchronization with automated 24h & 2h WhatsApp reminders to eliminate no-shows.
5. **🎨 Cohesive Social Branding**: Structured visual guidelines, 30-day content calendars, and conversion-focused Instagram bio funnels.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components, Route Handlers)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type-checking)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Design Tokens
- **Database & ORM**: [Prisma](https://www.prisma.io/) with SQLite / PostgreSQL support
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Project Architecture

```text
SETU/
├── app/                        # Next.js 14 App Router
│   ├── about/                  # About SETU & Founder philosophy
│   ├── api/                    # API Route Handlers (audit, contact, leads)
│   ├── audit/                  # Interactive 12-point digital audit tool
│   ├── contact/                # Direct inquiry & WhatsApp channel
│   ├── faq/                    # Frequently asked questions & answers
│   ├── industries/             # Industry blueprints (Healthcare, Fitness, Education)
│   ├── pricing/                # Transparent pricing tiers & retainers
│   ├── process/                # 5-stage 2-week execution framework
│   ├── services/               # Detailed service capabilities
│   ├── work/                   # Interactive concept teardowns & case studies
│   ├── layout.tsx              # Global root layout, SEO metadata, JSON-LD
│   ├── page.tsx                # Master streamlined homepage
│   ├── robots.ts               # Automated search engine robots.txt
│   └── sitemap.ts              # Dynamic XML sitemap generator
├── components/
│   ├── cards/                  # IndustryCard, ProjectCard, PricingCard, ServiceCard
│   ├── layout/                 # Navbar, MobileMenu, Footer, WhatsAppFloatingButton
│   ├── sections/               # HeroSection, ServicesGrid, LiveDemosSection, etc.
│   └── ui/                     # Button, Container, SectionHeading, BackToTop, BrandLogo
├── data/                       # Content definitions, nav links, pricing, services
├── lib/                        # Prisma client, utility functions, validation schemas
├── prisma/                     # Database schema (Lead, AuditSubmission, ContactSubmission)
├── public/                     # Optimized visual assets, icons, service mockups
└── README.md
```

---

## 💻 Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Amitrajput111/SETU.git
cd SETU
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory (refer to `.env.example`):
```env
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_APP_URL="https://setu-platform-rust.vercel.app"
NEXT_PUBLIC_WHATSAPP_NUMBER="919109265673"
NEXT_PUBLIC_CONTACT_EMAIL="amitrajput98267313@gmail.com"
```

### 4. Initialize Database
```bash
npx prisma generate
npx prisma db push
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Vercel Deployment

Deploying to **Vercel** is seamless:

1. Push your repository to GitHub: `https://github.com/Amitrajput111/SETU.git`
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `SETU` repository.
4. Set the environment variables in Vercel:
   - `DATABASE_URL`: Your database connection string (e.g. Vercel Postgres, Neon, or Turso SQLite).
   - `NEXT_PUBLIC_APP_URL`: Your production domain (`https://setu-platform-rust.vercel.app`).
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your business WhatsApp number (`919109265673`).
   - `NEXT_PUBLIC_CONTACT_EMAIL`: Your primary contact email (`amitrajput98267313@gmail.com`).
5. Click **Deploy**. Vercel will automatically run `prisma generate && next build` and deploy your application globally on Edge infrastructure.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🤝 Connect

- **Production Platform**: [https://setu-platform-rust.vercel.app](https://setu-platform-rust.vercel.app)
- **WhatsApp**: [+91 91092 65673](https://wa.me/919109265673)
- **Email**: [amitrajput98267313@gmail.com](mailto:amitrajput98267313@gmail.com)

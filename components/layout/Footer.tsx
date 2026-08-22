import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About SETU", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "5-Stage Process", href: "/process" },
    { name: "Pricing Tiers", href: "/pricing" },
    { name: "Contact Team", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Business Websites", href: "/services#websites" },
    { name: "Local Growth & Google Maps", href: "/services#local-growth" },
    { name: "Social Presence & Branding", href: "/services#social-presence" },
    { name: "Lead Generation Systems", href: "/services#lead-generation" },
    { name: "AI Business Automation", href: "/services#ai-automation" },
  ];

  const industryLinks = [
    { name: "Dental & Healthcare Clinics", href: "/industries#healthcare" },
    { name: "Fitness Studios & Gyms", href: "/industries#fitness" },
    { name: "Coaching & Academies", href: "/industries#education" },
  ];

  const resourceLinks = [
    { name: "Free Digital Audit", href: "/audit" },
    { name: "Frequently Asked Questions", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-[#0B1220] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <Container size="xl">
        {/* Top: Brand Statement & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="dark" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Digital growth and intelligent automation company. We bridge traditional businesses with high-converting digital presence and practical automated workflows.
            </p>
            <div className="text-xs text-slate-500 pt-1">
              Indore, Madhya Pradesh, India · Working with businesses nationwide & globally
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries & Resources */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Industries
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                {industryLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Link
                href="/audit"
                className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 font-semibold"
              >
                <span>Get Free Business Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} SETU. Digital Growth &amp; Intelligent Automation.
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms
            </Link>
            <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SETU on LinkedIn"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SETU on GitHub"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SETU on Instagram"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

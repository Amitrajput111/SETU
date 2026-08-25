"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MAIN_NAV } from "@/data/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-slate-200/80 shadow-xs py-2.5 sm:py-3"
            : "bg-white/95 backdrop-blur-md border-slate-100 py-3 sm:py-3.5"
        )}
      >
        <Container size="xl">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Brand Wordmark & Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <BrandLogo />
              <span className="hidden xl:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-teal-50 text-teal-800 border border-teal-200/80">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                <span>Available for Q3</span>
              </span>
            </div>

            {/* Desktop Navigation Links (>= lg: 1024px) */}
            <nav className="hidden lg:flex items-center gap-1">
              {MAIN_NAV.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
                      isActive
                        ? "text-brand-accent bg-blue-50/80 font-bold"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Action (>= lg) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Button
                variant="accent"
                size="sm"
                href="/audit"
                className="font-bold shadow-xs hover:shadow-md transition-shadow"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get Free Audit
              </Button>
            </div>

            {/* Mobile & Tablet Actions (< lg) */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="accent"
                size="sm"
                href="/audit"
                className="text-xs px-3 py-1.5 h-8 font-bold"
              >
                Free Audit
              </Button>

              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-colors"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        currentPath={pathname}
      />
    </>
  );
};

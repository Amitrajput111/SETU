"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MAIN_NAV } from "@/data/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
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
          "sticky top-0 z-40 w-full transition-all duration-200 border-b",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200/90 shadow-xs py-3"
            : "bg-white border-slate-100 py-3.5 sm:py-4"
        )}
      >
        <Container size="xl">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Brand Wordmark & Logo */}
            <div className="shrink-0">
              <BrandLogo />
            </div>

            {/* Desktop Navigation Links (>= lg: 1024px) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {MAIN_NAV.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
                      isActive
                        ? "text-brand-accent bg-blue-50/70"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
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
                className="font-bold shadow-xs"
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
                className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
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

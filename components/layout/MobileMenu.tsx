"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { MAIN_NAV } from "@/data/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { X, ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPath,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white overflow-y-auto animate-in slide-in-from-top-4 duration-200"
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <BrandLogo />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation List */}
      <div className="flex-1 px-5 py-6 space-y-1">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
          Navigation
        </div>
        {MAIN_NAV.map((item) => {
          const isActive = currentPath === item.href || currentPath.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-brand-accent font-semibold"
                  : "text-slate-800 hover:bg-slate-100"
              )}
            >
              <span>{item.name}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          );
        })}

        <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
          <Button
            variant="accent"
            size="lg"
            href="/audit"
            onClick={onClose}
            className="w-full"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Get Free Business Audit
          </Button>

          <Button
            variant="whatsapp"
            size="md"
            href="https://wa.me/919876543210?text=Hi%20SETU%2C%20I%20would%20like%20to%20discuss%20digital%20growth%20for%20my%20business."
            isExternal
            className="w-full"
            leftIcon={<MessageCircle className="w-4 h-4" />}
          >
            Talk on WhatsApp
          </Button>
        </div>

        {/* Quick Contact Info */}
        <div className="pt-6 text-xs text-slate-500 space-y-2 px-1">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>contact@setugrowth.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>+91 98765 43210</span>
          </div>
          <div className="text-[11px] text-slate-400 pt-1">
            Indore (M.P.), India · Working with businesses globally
          </div>
        </div>
      </div>
    </div>
  );
};

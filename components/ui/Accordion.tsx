"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              "border rounded-xl transition-colors duration-150 overflow-hidden",
              isOpen
                ? "bg-white border-slate-300 shadow-sm"
                : "bg-slate-50/70 hover:bg-white border-slate-200"
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="w-full px-5 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-inset"
            >
              <span className="font-semibold text-slate-900 text-sm sm:text-base pr-4">
                {item.question}
              </span>
              <span
                className={cn(
                  "shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 transition-transform duration-200",
                  isOpen && "transform rotate-180 bg-blue-50 text-brand-accent"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

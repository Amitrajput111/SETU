"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MessageCircle, CheckCheck, Send, Bot, Clock, ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatScenario {
  id: string;
  name: string;
  industry: string;
  userMessage: string;
  aiResponse: string;
  actionTaken: string;
  responseTime: string;
}

export const WhatsAppChatSimulator: React.FC = () => {
  const scenarios: ChatScenario[] = [
    {
      id: "dental",
      name: "Dental Clinic Triage",
      industry: "Healthcare",
      userMessage: "Hello, I have severe tooth sensitivity. Can I get an appointment with the dentist tomorrow evening?",
      aiResponse: "Hello! We can help with your tooth sensitivity. Dr. Sharma has open slots tomorrow at 5:00 PM and 6:30 PM at our Vijay Nagar clinic. Which time works best for you?",
      actionTaken: "Captured patient phone number & pre-booked consultation slot in doctor's Google Calendar.",
      responseTime: "4 seconds",
    },
    {
      id: "fitness",
      name: "Fitness Studio Pass",
      industry: "Fitness & Gyms",
      userMessage: "Hi, saw your gym on Instagram. What are the charges and can I try a trial workout?",
      aiResponse: "Hey there! Our functional strength and conditioning memberships start from ₹3,500/month. We have generated your Free 1-Day VIP Trial Pass! Which batch would you like: Morning 6:30 AM or Evening 6:00 PM?",
      actionTaken: "Issued digital VIP pass, sent Google Maps location pin, and notified head trainer.",
      responseTime: "3 seconds",
    },
    {
      id: "coaching",
      name: "Academy Syllabus & Fees",
      industry: "Education",
      userMessage: "Please send the course syllabus and fee details for 2-Year JEE 2027 batch for Class 11th.",
      aiResponse: "Namaste! Sending the complete JEE 2027 Course Prospectus, Faculty Profiles & Fee Structure PDF to your WhatsApp right now. Would you also like to reserve a seat for this Sunday's Free Demo Lecture?",
      actionTaken: "Dispatched PDF brochure instantly and logged parent lead in academic counselor dashboard.",
      responseTime: "5 seconds",
    },
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>("dental");
  const currentScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSelectScenario = (id: string) => {
    setIsTyping(true);
    setActiveScenarioId(id);
    setTimeout(() => {
      setIsTyping(false);
    }, 400);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800" id="whatsapp-simulator">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-teal-400 border border-slate-700">
            <Bot className="w-3.5 h-3.5" />
            <span>Interactive Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Experience the SETU 24/7 WhatsApp AI Assistant
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            See how our automated triage engine answers customer inquiries in under 5 seconds, captures contact details, and books appointments while your team is busy.
          </p>
        </div>

        {/* Simulator Frame */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Scenario Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Select an Inbound Lead Scenario:
            </div>
            {scenarios.map((sc) => (
              <button
                key={sc.id}
                onClick={() => handleSelectScenario(sc.id)}
                className={cn(
                  "w-full p-4 rounded-2xl text-left border transition-all duration-150 flex flex-col justify-between",
                  activeScenarioId === sc.id
                    ? "bg-slate-800 text-white border-teal-400 shadow-md scale-[1.02]"
                    : "bg-slate-950/60 text-slate-400 border-slate-800 hover:bg-slate-800/60 hover:text-slate-200"
                )}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                    {sc.industry}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-teal-400" />
                    {sc.responseTime}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-100">{sc.name}</h4>
                <p className="text-xs text-slate-400 line-clamp-1 mt-1">&ldquo;{sc.userMessage}&rdquo;</p>
              </button>
            ))}

            <div className="pt-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-teal-400">Backend Automation Result:</div>
              <p className="text-xs text-slate-300 leading-relaxed">{currentScenario.actionTaken}</p>
            </div>
          </div>

          {/* Right: Phone Simulator View */}
          <div className="lg:col-span-7 bg-[#0b141a] rounded-3xl border-4 border-slate-700 shadow-2xl overflow-hidden">
            {/* WhatsApp Top Header */}
            <div className="p-3.5 bg-[#202c33] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>SETU Verified Business AI</span>
                    <CheckCheck className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-[10px] text-teal-400">Online · Instant Response Active</div>
                </div>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                Official API
              </span>
            </div>

            {/* Chat Messages Area */}
            <div className="p-4 sm:p-6 space-y-4 min-h-[260px] bg-[radial-gradient(#1e293b15_1px,transparent_1px)] bg-[size:1rem_1rem]">
              {/* User Bubble */}
              <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-150">
                <div className="bg-[#005c4b] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-sm text-xs leading-relaxed shadow-sm">
                  <p>{currentScenario.userMessage}</p>
                  <div className="flex justify-end items-center gap-1 text-[9px] text-slate-300 mt-1">
                    <span>10:42 AM</span>
                    <CheckCheck className="w-3 h-3 text-blue-400" />
                  </div>
                </div>
              </div>

              {/* AI Assistant Bubble */}
              {isTyping ? (
                <div className="flex justify-start">
                  <div className="bg-[#202c33] text-slate-300 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span>SETU AI is typing response...</span>
                  </div>
                </div>
              ) : (
                <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="bg-[#202c33] text-slate-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-sm text-xs leading-relaxed space-y-2 shadow-sm border border-slate-700/50">
                    <p>{currentScenario.aiResponse}</p>
                    <div className="flex justify-between items-center text-[9px] text-slate-400 pt-1 border-t border-slate-700/40">
                      <span className="text-teal-400 font-mono">Response time: {currentScenario.responseTime}</span>
                      <span>10:42 AM</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#202c33] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Automated conversation powered by SETU AI Engine</span>
              <Link
                href="/audit"
                className="text-teal-400 hover:text-teal-300 font-bold inline-flex items-center gap-1"
              >
                <span>Deploy for Your Business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

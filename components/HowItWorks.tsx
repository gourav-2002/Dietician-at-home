'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  PhoneCall,
  Users,
  MapPin,
  Stethoscope,
  Utensils,
  Smartphone,
  BarChart,
  RefreshCcw,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  ShieldCheck,
  Zap,
  Activity,
  History,
  ClipboardList
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const steps = [
    {
      num: "01",
      title: "Reach Out",
      timeline: "Day 1",
      involved: "You + Our Team",
      icon: <PhoneCall className="w-6 h-6" />,
      desc: "The journey begins when you fill out the enquiry form or speak with us directly. We understand your goals, concerns, and expectations at a high level.",
      details: ["Fill online form OR call us", "Quick needs conversation", "No pressure gathering"]
    },
    {
      num: "02",
      title: "Personal Connect",
      timeline: "Within 24-48h",
      involved: "Our Care Manager",
      icon: <MessageSquare className="w-6 h-6" />,
      desc: "Our team connects to capture basic health details, explain the value process, and walk you through the pricing and program structure.",
      details: ["Goal discussion", "Process explanation", "Transparent pricing"]
    },
    {
      num: "03",
      title: "Enrollment",
      timeline: "Day 2-3",
      involved: "Your Care Team",
      icon: <ClipboardList className="w-6 h-6" />,
      desc: "Once you choose to proceed, we assign your qualified expert Dietician and a trained field representative to your profile.",
      details: ["Program selection", "Expert assignment", "Visit scheduling"]
    },
    {
      num: "04",
      title: "Home Wellness Setup",
      timeline: "Week 1",
      involved: "Field Representative",
      icon: <MapPin className="w-6 h-6" />,
      desc: "A trained representative visits your location to assist with initial setup, demonstrate the use of your wellness tracking device, and record baseline lifestyle measurements for tracking purposes.",
      details: ["Initial setup", "Device demonstration", "App setup & training"]
    },
    {
      num: "05",
      title: "Dietician Deep Dive",
      timeline: "Week 1",
      involved: "Expert Dietician",
      icon: <Stethoscope className="w-6 h-6" />,
      desc: "Your Dietician reviews collected data and connects via video/call for a 45-minute deep dive into your lifestyle and challenges.",
      details: ["Data review", "Habit analysis", "Realistic goal setting"]
    },
    {
      num: "06",
      title: "Meal Plan Delivery",
      timeline: "Same Day",
      involved: "Dietician + App",
      icon: <Utensils className="w-6 h-6" />,
      desc: "Your weekly meal plan goes live on the app. It includes structure, ingredient lists, and even instructions for your home cook.",
      details: ["Meal structure", "Grocery lists", "Cooking instructions"]
    },
    {
      num: "07",
      title: "Weekly Tracking",
      timeline: "Daily",
      involved: "You + AI",
      icon: <Smartphone className="w-6 h-6" />,
      desc: "Log meals and macros in seconds. Ad-hoc or outside meals can be scanned. Adherence is visible in real-time to your Dietician.",
      details: ["Instant logging", "Outside meal scanning", "Adherence visibility"]
    },
    {
      num: "08",
      title: "Parameter Update",
      timeline: "Weekly",
      involved: "You + Device",
      icon: <Activity className="w-6 h-6" />,
      desc: "Step on your smart scale to sync weekly parameters. This data provides the foundation for next week's plan refinements.",
      details: ["Smart scale sync", "Weight & BMI trends", "Real-time data flow"]
    },
    {
      num: "09",
      title: "Plan Refinement",
      timeline: "Weekly Call",
      involved: "Expert Dietician",
      icon: <RefreshCcw className="w-6 h-6" />,
      desc: "Speak with your Dietician to review the past week. The next plan is curated specifically based on your actual performance.",
      details: ["Progress review", "Challenge discussion", "Dynamic adjustments"]
    },
    {
      num: "10",
      title: "Monthly Re-visit",
      timeline: "Monthly",
      involved: "Field Rep",
      icon: <BarChart className="w-6 h-6" />,
      desc: "Our representative revisits monthly for detailed re-measurement to confirm long-term physiological progress.",
      details: ["In-person body analysis", "Progress validation", "Strategy refinement"]
    }
  ];

  const faqs = [
    { q: "How long does onboarding take?", a: "Typically 3-5 days from initial enrollment to your first Dietician session and meal plan delivery." },
    { q: "Do I really not need to visit any clinic?", a: "Correct. Our model is 100% at-location. We come to your home or office for all physical visits." },
    { q: "What happens if I miss a weekly call?", a: "Cancellations require 24-hour notice to reschedule. Missed sessions without notice may be forfeited, as our Dieticians reserve that time specifically for you." },
    { q: "Can I switch my assigned Dietician?", a: "Yes. While we match you with the best dietician near me based on your clinical needs, if the rapport isn't right, you can request a change via your Care Manager." },
    { q: "What equipment do you bring?", a: "We bring professional-grade bio-impedance scales for general wellness tracking." },
    { q: "Do you work with my medical doctor?", a: "We rely on the medical advice you share with us. We do not diagnose conditions, but we ensure our nutrition plans align with the guidelines provided by your doctor." }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-teal-100 overflow-x-hidden pt-[60px]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-[#F8FAFC] pb-[60px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>

        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <nav className="flex justify-center items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-[#217328] mb-8">
            <Link href="/" className="hover:text-[#1B5E20] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span>How It Works</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tight text-slate-900 mb-8">
            Structured. Simple. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] to-[#1B5E20]">Professional Dietician in Gurgaon</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            No guesswork. No confusion. Just a clear, 10-step path from your first call to a healthier life—delivered entirely to your doorstep by your trusted dietician in Gurgaon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={() => router.push('/contact')} className="px-10 py-5 bg-[#217328] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#217328]/20 hover:bg-[#1B5E20] hover:-translate-y-1 transition-all">
              Begin My Journey
            </button>
          </div>
        </div>
      </section>

      {/* Intro Process Context */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Why Our 10-Step Process from the Best Dietician Near Me <span className="text-[#217328]">Delivers Results</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Most nutrition plans fail because they lack structure and consistency. We've built a professional ecosystem that combines technology with deep human involvement at every critical stage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "At-Location Visits", desc: "We come to you monthly.", icon: <MapPin className="text-[#217328]" /> },
                  { title: "Weekly Pro Calls", desc: "Expert check-ins every week.", icon: <Stethoscope className="text-[#217328]" /> },
                  { title: "Data-Driven", desc: "Plans adjust based on metrics.", icon: <BarChart className="text-[#217328]" /> },
                  { title: "Zero Travel", desc: "Focus on health, not traffic.", icon: <Zap className="text-[#217328]" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base leading-6">{item.title}</h4>
                      <p className="text-base leading-6 text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 rounded-[60px] p-12 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#217328]/10 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-black mb-6">Complete Visibility</h3>
                <p className="text-slate-400 mb-10 leading-relaxed font-medium text-base leading-6">This isn't a diet app. This is professional nutrition care where you and your Dietician see the same data in real-time.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/10">
                    <CheckCircle2 className="text-[#217328] shrink-0" />
                    <p className="text-base leading-6 font-bold">100% Transparency in Process</p>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/10">
                    <CheckCircle2 className="text-[#217328] shrink-0" />
                    <p className="text-base leading-6 font-bold">Professional Precision at Home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 10-Step Timeline */}
      <section className="py-32 px-6 bg-[#FCFAFF] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="px-5 py-2 bg-[#E8F5E9] text-[#217328] rounded-full text-[12px] font-black uppercase tracking-[0.3em] inline-block mb-4">Step-by-Step</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900">Your Complete <span className="text-[#217328]">Journey</span></h2>
          </div>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#217328] via-[#217328] to-transparent opacity-20"></div>

            <div className="space-y-12 lg:space-y-32">
              {steps.map((step, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <span className="text-[#217328] font-black text-3xl opacity-20">{step.num}</span>
                      <span className="px-4 py-1.5 bg-white shadow-sm border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {step.timeline}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-6">{step.title}</h3>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">{step.desc}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      {step.details.map((detail, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-20 h-20 bg-white rounded-[28px] shadow-2xl flex items-center justify-center text-[#217328] border border-[#E8F5E9] group hover:scale-110 transition-transform cursor-default">
                      {step.icon}
                    </div>
                    {/* Pulsing indicator for current-like step */}
                    {i === 0 && <div className="absolute inset-0 bg-[#217328] rounded-[28px] animate-ping opacity-20 -z-10"></div>}
                  </div>

                  {/* Involvement Info */}
                  <div className={`lg:w-1/2 flex items-center ${i % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 max-w-xs">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Primary Responsibility</p>
                      <p className="font-black text-slate-700">{step.involved}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Continuous Loop Cycle */}
      <section className="py-32 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">What Happens Next? <br /><span className="text-[#217328]">The Cycle Continues.</span></h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                Reaching your goal isn't a one-time event—it's a weekly loop of refinement. Once the onboarding is complete, your dietician in Gurgaon moves you into a high-consistency rhythm.
              </p>
              <div className="space-y-6">
                {[
                  "Weekly Meal Plan Refinement",
                  "Daily Habit & Adherence Support",
                  "Monthly professional re-visits",
                  "Ongoing AI & App interaction"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-[#217328] rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* Loop Visualization */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 border-4 border-dashed border-[#217328]/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <History size={64} className="text-[#217328] mx-auto mb-4 animate-pulse" />
                    <p className="font-black text-xl">The Progress Loop</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Ongoing Success</p>
                  </div>
                </div>
                {/* Orbiting Icons */}
                {[Smartphone, Utensils, Stethoscope, BarChart].map((Icon, i) => (
                  <div key={i} className="absolute w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-2xl"
                    style={{
                      top: `${50 + 40 * Math.sin(i * Math.PI / 2)}%`,
                      left: `${50 + 40 * Math.cos(i * Math.PI / 2)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}>
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Involved */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black">Meet Your <span className="text-[#217328]">Care Team</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Multiple experts coordinate to ensure your plan is accurate, delivered, and effective.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualified Dietician",
                role: "Strategy & Support",
                desc: "Your weekly nutrition expert for sessions and plan curation.",
                icon: <Stethoscope size={32} />
              },
              {
                title: "Field Representative",
                role: "At-Location Care",
                desc: "The professional visiting your home for detailed biometric visits.",
                icon: <MapPin size={32} />
              },
              {
                title: "Support Tech (AI)",
                role: "24/7 Companion",
                desc: "Our app and AI guide for instant meal logging and quick query support.",
                icon: <Smartphone size={32} />
              }
            ].map((member, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[48px] border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform text-[#217328]">
                  {member.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{member.title}</h3>
                <p className="text-[#217328] font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-32 px-6 bg-[#FCFAFF]">
        <div className="max-w-5xl mx-auto bg-white rounded-[64px] p-12 md:p-20 shadow-xl border border-[#E8F5E9] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8F5E9] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Simple, All-Inclusive Investment</h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-16">No travel costs, no hidden device fees. Your 3-month onboarding includes everything needed for success.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-10 bg-slate-50 rounded-[48px] border border-slate-100 group hover:border-[#217328] transition-colors">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Flagship Programs</p>
              <p className="text-5xl font-black text-slate-900 mb-2">₹7,500</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">First 3 Months</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[48px] border border-slate-100 group hover:border-[#217328] transition-colors">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Specialized Programs</p>
              <p className="text-5xl font-black text-slate-900 mb-2">₹9,000</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">First 3 Months</p>
            </div>
          </div>

          <button onClick={() => router.push('/pricing')} className="inline-flex items-center gap-3 text-[#217328] font-black text-xs uppercase tracking-widest hover:gap-5 transition-all">
            View Detailed Pricing Breakdown <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Process <span className="text-[#217328]">FAQs</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 shadow-sm transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-[#F0FDF4] transition-colors"
                >
                  <span className="font-bold text-lg text-slate-800 pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white text-[#217328] flex items-center justify-center transition-transform shadow-sm ${openFaq === i ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-6 text-base leading-6">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#10b981_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-12">
          <div className="w-24 h-24 bg-[#217328] rounded-[40px] flex items-center justify-center mx-auto mb-8 shadow-3xl animate-pulse">
            <Zap size={48} className="text-white" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">Ready to <br /> <span className="text-[#217328]">Get Started?</span></h2>
          <p className="text-2xl md:text-3xl text-slate-400 font-medium max-w-2xl mx-auto leading-snug">
            Join our active community of clients who've transformed their health with India's specialized at-location nutrition care service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Link
              href="/contact"
              className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-xl shadow-2xl shadow-[#217328]/20 hover:scale-105 transition-all text-center"
            >
              Begin My Journey
            </Link>

            <Link
              href="tel:+919899480775"
              className="px-12 py-6 border-2 border-white/20 text-white rounded-[32px] font-bold text-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3"
            >
              Talk to Our Team
            </Link>
          </div>
          {/* <p className="pt-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
             Certified Experts • At-Location Convenience • Data-Driven Results
          </p> */}
        </div>
      </section>

      {/* MANDATORY DISCLAIMER */}
      <section className="py-8 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> Dietician At Home provides non-medical, lifestyle-based nutrition guidance. We do not diagnose, treat, or cure medical conditions. Our services are intended to support healthy eating habits and daily nutrition routines, alongside any medical care advised by a healthcare professional.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(16, 185, 129, 0.3);
        }
        @keyframes progress {
          from { width: 0; }
          to { width: var(--tw-width); }
        }
        .animate-progress {
           animation: progress 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;

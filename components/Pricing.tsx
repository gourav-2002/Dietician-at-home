
'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Users,
  Smartphone,
  Scale,
  MapPin,
  Stethoscope,
  BarChart,
  Utensils,
  X
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const router = useRouter();

  const faqs = [
    { q: "Are there any hidden costs?", a: "No. Our pricing from your dietician near me with fees is all-inclusive of monthly at-home visits, weekly sessions, personalized meal plans, and the smart tracking device (yours to keep). You only pay the listed subscription price." },
    { q: "What happens after the 3-month onboarding?", a: "After the initial 3-month onboarding with your dietician in Gurgaon for weight loss, you transition to a monthly subscription at ₹2,499/month for general programs or ₹3,499/month for specialized programs. You can cancel anytime with no long-term contract." },
    { q: "Do you offer a money-back guarantee?", a: <span>Yes! If you are not satisfied within the first 7 days, we offer a full refund. No questions asked. <Link href="/refund-policy" className="text-[#217328] underline">See Refund Policy</Link>.</span> },
    { q: "How do I pay?", a: "We accept all major Credit/Debit cards, UPI (GPay, PhonePe, Paytm), and Net Banking via our secure payment gateway." },
    { q: "What's included in the tracking device?", a: "You receive a Bluetooth-enabled smart scale (worth ₹1,699) that measures weight and basic body metrics. It syncs automatically with your app. This device is yours to keep." }
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden selection:bg-[#217328]/20 pt-[60px]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0FDF4] to-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#217328] rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#217328] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <nav className="flex justify-center items-center gap-2 mb-8 text-[11px] font-black tracking-[0.3em] uppercase text-[#217328]">
            <Link href="/" className="hover:text-[#1B5E20] transition-colors">
              Home
            </Link>
            <span className="opacity-30">/</span>
            <span>Pricing</span>
          </nav>
          <h1 className="text-6xl md:text-8xl font-black text-[#1F2937] mb-8 leading-tight tracking-tight">
            Transparent Pricing, <br />
            <span className="text-[#217328]">Premium Care</span>
          </h1>
          <p className="text-[#6B7280] text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            World-class nutrition care at rates that reflect real value from a dietician near me with fees.
            Choose the program that fits your needs.
          </p>
        </div>
      </section>

      {/* Value Promise Section */}
      <section className="pt-16 pb-24 px-6 max-w-7xl mx-auto -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <MapPin />, title: "Monthly Home Visits", desc: "Home visits at your doorstep." },
            { icon: <Stethoscope />, title: "Weekly sessions", desc: "Weekly check-ins every single week." },
            { icon: <Scale />, title: "Smart Device Included", desc: "₹1,699 value - yours to keep." },
            { icon: <Smartphone />, title: "Full App Access", desc: "Meal plans, tracking & AI support." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-[#E8F5E9] text-[#217328] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#217328] group-hover:text-white transition-all">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h4 className="font-bold text-[#1F2937] mb-2">{item.title}</h4>
              <p className="text-sm text-[#6B7280]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F0FDF4] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2.5 bg-[#217328] text-white rounded-full text-[11px] font-bold tracking-wider uppercase mb-6">No Hidden Costs</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-4">Choose Your Program</h2>
            <div className="w-20 h-1.5 bg-[#217328] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* General Programs */}
            <div className="relative bg-white rounded-[48px] p-10 md:p-14 shadow-2xl border-2 border-[#E5E7EB] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:-translate-y-3 hover:border-[#217328] transition-all duration-300 flex flex-col min-h-[720px]">
              <div className="absolute -top-4 left-8 md:left-14 bg-[#217328] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(33,115,40,0.3)]">Most Popular</div>

              <h3 className="text-4xl font-extrabold text-[#1F2937] mb-8">General Programs</h3>

              <div className="bg-[#F0FDF4] p-6 rounded-3xl mb-10">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-3">ONBOARDING PLAN</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-[64px] font-black text-[#1F2937] leading-none">₹7,500</span>
                  <span className="text-2xl font-medium text-[#9CA3AF] line-through ml-3">₹9,999</span>
                </div>
                <p className="text-sm font-semibold text-[#6B7280]">for the first 3 months</p>

                <div className="h-px bg-[#E5E7EB] my-5"></div>

                <p className="text-[10px] font-bold text-[#217328] uppercase tracking-widest mb-2">MONTHLY RENEWAL</p>
                <p className="text-lg font-bold text-[#217328]">Then only ₹2,499/month</p>
                <span className="inline-block mt-2 bg-[#D1FAE5] text-[#059669] px-3 py-1.5 rounded-full text-xs font-bold">Affordable monthly care</span>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {["Monthly at-location visits", "Weekly Dietician sessions", "Personalized meal plans", { text: "tracking device (yours to keep)", highlight: true, value: "₹1,699 value" }, "Full mobile app access", "Family group feature", "AI assistant support"].map((item, i) => {
                  const isHighlight = typeof item === 'object' && item.highlight;
                  const text = typeof item === 'string' ? item : item.text;
                  const value = typeof item === 'object' ? item.value : null;

                  return (
                    <li key={i} className={`flex items-start gap-3 text-[15px] font-semibold leading-relaxed ${isHighlight ? 'bg-[#E8F5E9] -mx-4 px-4 py-3 rounded-xl' : 'text-[#4B5563]'}`}>
                      <CheckCircle2 className="text-[#217328] flex-shrink-0" size={20} fill="#217328" color="white" />
                      <div className="flex-1">
                        <span className={isHighlight ? 'text-[#1F2937] font-bold' : ''}>{text}</span>
                        {value && <span className="ml-2 text-xs font-bold text-[#217328] bg-white px-2 py-1 rounded-full">🎁 {value}</span>}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto">
                <button onClick={() => router.push('/contact')} className="w-full h-16 bg-gradient-to-r from-[#217328] to-[#1B5E20] text-white rounded-[20px] font-bold text-[15px] uppercase tracking-wide shadow-[0_8px_24px_rgba(33,115,40,0.3)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
                  Get Started Now
                </button>
                <p className="text-center text-xs text-[#6B7280] mt-4 font-medium">✓ Cancel anytime • No long-term contract</p>
              </div>
            </div>

            {/* Specialized Programs */}
            <div className="relative bg-white rounded-[48px] p-10 md:p-14 shadow-2xl border-2 border-[#E5E7EB] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:-translate-y-3 hover:border-[#7C3AED] transition-all duration-300 flex flex-col min-h-[720px] group">
              <div className="absolute -top-4 left-8 md:left-14 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(124,58,237,0.3)]">For Condition Management</div>

              <h3 className="text-4xl font-extrabold text-[#1F2937] mb-8">Specialized Programs</h3>

              <div className="bg-[#FAF5FF] p-6 rounded-3xl mb-10">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-3">ONBOARDING PLAN</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-[64px] font-black text-[#1F2937] leading-none">₹9,000</span>
                </div>
                <p className="text-sm font-semibold text-[#6B7280]">for the first 3 months</p>

                <div className="h-px bg-[#E5E7EB] my-5"></div>

                <p className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-widest mb-2">MONTHLY RENEWAL</p>
                <p className="text-lg font-bold text-[#7C3AED]">Then only ₹3,499/month</p>
                <span className="inline-block mt-2 bg-[#F3E8FF] text-[#7C3AED] px-3 py-1.5 rounded-full text-xs font-bold">Includes specialized tracking</span>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {["Everything in General Programs", "Condition-specific tracking", "Enhanced expert supervision", "Specialized meal protocols", "Physician-aligned nutrition planning", "Priority Dietician support"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] font-semibold text-[#4B5563] leading-relaxed">
                    <CheckCircle2 className="text-[#7C3AED] flex-shrink-0" size={20} fill="#7C3AED" color="white" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button onClick={() => router.push('/contact')} className="w-full h-16 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white rounded-[20px] font-bold text-[15px] uppercase tracking-wide shadow-[0_8px_24px_rgba(124,58,237,0.3)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
                  Get Started Now
                </button>
                <p className="text-center text-xs text-[#6B7280] mt-4 font-medium">✓ Comprehensive health history review • Expert care</p>
              </div>
            </div>
          </div>

          {/* Programs List */}
          <div className="mt-20 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1F2937] text-center mb-10">All Available Programs</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* General Programs */}
              <div className="bg-white p-8 rounded-3xl border-2 border-[#E5E7EB]">
                <h4 className="text-lg font-bold text-[#217328] mb-4 uppercase tracking-wide">General Programs (₹7,500)</h4>
                <ul className="space-y-3">
                  {["Weight Management Nutrition", "Family Nutrition", "Elderly Nutrition"].map((prog, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#4B5563] font-medium">
                      <CheckCircle2 size={16} className="text-[#217328]" />
                      {prog}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialized Programs */}
              <div className="bg-white p-8 rounded-3xl border-2 border-[#E5E7EB]">
                <h4 className="text-lg font-bold text-[#7C3AED] mb-4 uppercase tracking-wide">Specialized Programs (₹9,000)</h4>
                <ul className="space-y-3">
                  {["PCOD/PCOS Care Nutrition", "Pregnancy Nutrition", "Postpartum Care Nutrition", "Preconception Care Nutrition", "Thyroid Management Nutrition", "Diabetes Management Nutrition", "Cancer Recovery Nutrition", "Keto Program", "Gut Wellness", "Intermittent Fasting"].map((prog, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#4B5563] font-medium">
                      <CheckCircle2 size={16} className="text-[#7C3AED]" />
                      {prog}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Differentiation Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-white border-2 border-[#E5E7EB] rounded-[40px] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <h3 className="text-[32px] font-bold text-[#1F2937] text-center mb-10">What Makes Our Nutrition Support Different</h3>
          <p className="text-sm text-[#6B7280] text-center -mt-8 mb-12 font-medium">Designed around your daily routine and home environment</p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Designed around your daily routine and home environment with a dietician in Gurgaon for weight loss",
              "Weekly guided nutrition sessions for consistency",
              "Personal progress tracking using digital tools",
              "Structured plans that evolve based on adherence and feedback from your dietician near me with fees ",
              "Optional at-location support for setup and data collection",
              "Suitable for individuals and families"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="min-w-[24px]"><CheckCircle2 size={24} className="text-[#217328]" /></div>
                <p className="text-base text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-[#217328] mx-auto mb-4" />
          <h2 className="text-3xl font-black text-[#1F2937]">Pricing FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-2 border-[#E5E7EB] rounded-[24px] overflow-hidden hover:border-[#217328] transition-colors">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-7 text-left hover:bg-[#F0FDF4] transition-colors"
              >
                <span className="font-bold text-[#1F2937] text-base pr-4">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-[#217328] text-white flex items-center justify-center transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                  <ArrowRight size={16} className={openFaq === i ? 'rotate-90' : ''} />
                </div>
              </button>
              {openFaq === i && (
                <div className="px-7 pb-7 text-[#6B7280] text-base leading-relaxed border-t border-[#E5E7EB] pt-6">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#217328] to-[#1B5E20] rounded-[60px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="space-y-6 relative z-10">
            <h2 className="text-4xl font-black text-white">Corporate Wellness Programs</h2>
            <p className="text-white/80 max-w-lg font-medium text-lg">
              Transform your workforce health with our customizable corporate nutrition programs from a dietician in Gurgaon for weight loss. Volume-based pricing for teams of all sizes.
            </p>
          </div>
          <button
            onClick={() => window.location.hash = 'corporate'}
            className="px-12 py-5 bg-white text-[#217328] rounded-[24px] font-black text-base tracking-widest uppercase shadow-xl transition-all hover:scale-105 relative z-10"
          >
            Get Corporate Quote
          </button>
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
    </div >
  );
};

export default Pricing;

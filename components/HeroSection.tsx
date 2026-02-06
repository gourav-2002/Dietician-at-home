
'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

import React, { useEffect, useState, useRef } from 'react';
import {
  CheckCircle2, Play, ArrowRight, AlertCircle, Clock, MapPin, Stethoscope, Smartphone,
  Users, BarChart3, Bot, ShieldCheck, Star, Building2, LayoutDashboard, Lock, TrendingUp,
  Award, Plus, Minus, Quote, Sparkles, Calendar, ChevronRight, ChevronLeft, Menu, X,
  MessageCircle, Mail, Phone, Scale, Utensils, TrendingDown, PhoneCall, MessageSquare,
  ClipboardList, Activity, RefreshCcw, BarChart, Zap, Wind, Apple, Heart, Sprout, Video, Home as HomeIcon, Smile,
  Tablet, Check, Shield, User
} from 'lucide-react';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = (delay: number = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay }
  });

  const steps = [
    {
      num: "01",
      title: "Reach Out",
      timeline: "Day 1",
      involved: "You + Our Team",
      icon: <PhoneCall className="w-6 h-6" />,
      desc: "The journey begin when you fill out the enquiry form or speak with us directly. We understand your goals, concerns, and expectations at a high level.",
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
      desc: "Once you choose to proceed, we assign your qualified Dietician and a trained field representative to your profile.",
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
      involved: "Qualified Dietician",
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
      desc: "Step on your smart scale to sync weekly wellness parameters. This data provides the foundation for next week's plan refinements.",
      details: ["Smart scale sync", "Weight & BMI trends", "Real-time data flow"]
    },
    {
      num: "09",
      title: "Plan Refinement",
      timeline: "Weekly Call",
      involved: "Qualified Dietician",
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
      desc: "Our representative revisits monthly for detailed wellness re-measurement to confirm long-term progress.",
      details: ["In-person body analysis", "Progress validation", "Strategy refinement"]
    }
  ];

  const faqs = [
    { q: "What is Dietician at Home?", a: "Dietician at Home is a professional at-location nutrition guidance service. We bring qualified Dieticians directly to your doorstep for monthly visits and provide weekly virtual sessions." },
    { q: "How is this different from other services?", a: "Unlike apps or clinics, we eliminate travel. We use professional biometric devices and provide humans-in-the-loop weekly check-ins for consistent accountability." },
    { q: "Do I need to visit a clinic?", a: "Never. All physical visits happen at your home or office. All sessions are virtual or at-location." },
    { q: "How often will I speak to my Dietician?", a: "You will have a dedicated one-on-one session every single week, plus 24/7 access to your Dietician and AI assistant via the app." },
    { q: "What is included in the pricing?", a: "Monthly at-home visits, weekly sessions, personalized meal plans, a smart tracking device (yours to keep), and full app access." }
  ];

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1280;


  return (
    <div className="bg-white font-sans text-[#1a1a2e] selection:bg-[#00bfa5]/20 overflow-x-hidden pt-[80px] home-herosection">

      {/* SECTION 1: HERO SECTION (MOBILE & TABLET) */}
      <section className="xl:hidden bg-white pt-2 pb-16 px-6">
        <div className="flex flex-col space-y-8">

          {/* 1. Header Block */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#E8F5E9] border border-[#217328]/30 rounded-full text-[#217328] text-[9px] font-black tracking-[0.15em] uppercase mx-auto animate-fade-in">
              <Star size={10} fill="currentColor" /> Professional At-Home Nutrition Support
            </div>
            <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.1] font-medium tracking-tight text-[#1a1a2e] animate-fade-in delay-100">
              Your Personal Nutrition Plan Designed for Life at Home
            </h2>

            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-sm mx-auto animate-fade-in delay-200">
              Lifestyle-focused nutrition guidance that fits your daily routine.
            </p>
          </div>

          {/* 2. Visual Block */}
          <div className="rounded-[24px] shadow-[0_10px_40px_rgba(33,115,40,0.15)] border-4 border-[#217328] animate-fade-in delay-300 md:max-w-2xl md:mx-auto overflow-hidden">
            <Image
              src="/hero-section-dietician-at-home-mobile.jpg"
              alt="Dietician at home session"
              width={800}
              height={600}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 3. Features & Action Block */}
          <div className="space-y-6 animate-fade-in delay-500 pt-4">
            <div className="space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
              {[
                "Weekly scheduled nutrition guidance sessions",
                "Ongoing food and habit tracking through our app",
                "Personalized meal plans refined over time",
                "Wellness tools provided to support self-tracking",
                "Structured support focused on consistency, not shortcuts"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 bg-white p-1 rounded-full border border-slate-100 shadow-sm shrink-0">
                    <CheckCircle2 className="text-[#217328]" size={14} strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-bold leading-snug">{text}</p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-6">
              <p className="text-xs sm:text-sm text-slate-500 font-bold italic">
                For individuals who value disciplined nutrition support and sustainable habits.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => router.push('/contact')}
                  className="w-full py-5 bg-[#217328] text-white rounded-2xl font-black text-xs uppercase tracking-[0.15em] shadow-xl shadow-[#217328]/30 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Get Started Today <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => router.push('/how-it-works')}
                  className="w-full py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-black text-xs uppercase tracking-[0.15em] active:scale-95 transition-all"
                >
                  See How It Works
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 1: HERO SECTION (DESKTOP) */}
      <section className="hidden xl:flex relative min-h-screen py-20 items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" />
          <Image
            src="/hero-section-dietician-at-home.jpg"
            alt="Dietician at home session"
            fill
            className="object-cover"
            style={{
              transform: isDesktop
                ? `scale(1.1) translateX(-60px) translateY(-100px) translateY(${scrollY * 0.2}px)`
                : "scale(1)",
            }}
          />
        </div>

        <div className="w-full max-w-[1800px] mx-auto relative z-20 grid xl:grid-cols-2 gap-12 items-center px-8 xl:px-16">
          <div className="text-white space-y-4 xl:space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#217328]/20 border border-[#217328]/30 rounded-full text-[#217328] text-xs font-bold tracking-[0.2em] uppercase">
              <Star size={14} fill="currentColor" /> Professional At-Home Nutrition Support
            </div>
            <h1 className="text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] leading-[1.1] font-medium tracking-tight text-[#333333]">
              Your Personal Nutrition Plan with Expert Dieticians in Gurgaon – Designed for Life at Home
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#333333] font-normal leading-relaxed max-w-xl mb-6">
              Lifestyle-focused nutrition guidance that fits your daily routine.
            </p>
            <div className="space-y-2 xl:space-y-3 max-w-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#217328] flex-shrink-0 mt-1" size={20} fill="#217328" color="white" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#333333] font-medium">Weekly scheduled nutrition guidance sessions</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#217328] flex-shrink-0 mt-1" size={20} fill="#217328" color="white" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#333333] font-medium">Ongoing food and habit tracking through our app</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#217328] flex-shrink-0 mt-1" size={20} fill="#217328" color="white" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#333333] font-medium">Personalized meal plans refined over time</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#217328] flex-shrink-0 mt-1" size={20} fill="#217328" color="white" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#333333] font-medium">Wellness tools provided to support self-tracking</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#217328] flex-shrink-0 mt-1" size={20} fill="#217328" color="white" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#333333] font-medium">Structured support focused on consistency, not shortcuts</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#555555] font-medium italic mt-6 max-w-xl">
              For individuals who value disciplined nutrition support and sustainable habits.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button
                onClick={() => router.push('/contact')}
                className="px-10 py-5 bg-[#217328] hover:bg-[#217328] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#217328]/50 hover:-translate-y-1 transition-all active:scale-95"
              >
                Get Started Today
              </button>
              <button
                onClick={() => router.push('/how-it-works')}
                className="px-10 py-5 border-2 border-[#333333] text-[#333333] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Play size={16} fill="currentColor" /> See How It Works
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Disclaimer Line Below Hero */}
      <section className="py-4 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Nutrition guidance is lifestyle-based and does not replace medical care.
          </p>
        </div>
      </section>

      {/* SECTION 1.5: WE COME TO YOU */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#217328]/5 rounded-full blur-3xl -ml-96 pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Image */}
            <div className="order-1 relative">
              <div className="relative h-[320px] sm:h-[420px] md:h-[520px] rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border-[8px] border-[#217328] group">

                <Image
                  src="/feature-home-visit-1.jpg"
                  alt="Dietician visiting client at home"
                  fill
                  className="object-cover transform scale-105 transition-transform duration-700"
                />
              </div>

              {/* LOCATION Badge - Below Image */}
              <div className="mt-6 bg-white/95 backdrop-blur-md py-4 px-6 rounded-2xl shadow-xl flex items-center gap-4 border border-[#217328]/10 animate-fade-in-up">
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#217328]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">LOCATION</p>
                  <p className="text-sm font-bold text-slate-900">Your Home, Your Time</p>
                </div>
              </div>

              {/* Decorative floating icon */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#217328] rounded-2xl shadow-xl flex items-center justify-center text-white rotate-6 hidden md:flex">
                <ArrowRight className="w-8 h-8" />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="order-2 text-center lg:text-left">


              <h2 className="text-4xl md:text-[48px] font-black text-slate-900 leading-tight mb-6">
                Expert Dieticians in Gurgaon Come to You. <br />
                <span className="text-[#217328]">You Stay Comfortable.</span>
              </h2>

              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                Forget traffic, waiting rooms, and taking time off work. Our certified Dieticians bring world-class nutrition guidance directly to your living room. We observe your real environment to create a plan that actually fits your life.
              </p>

              <div className="grid gap-4 mb-10">
                {[
                  { icon: <MapPin />, title: "No Travel Required", text: "Save hours every week. We visit you at home or office." },
                  { icon: <ShieldCheck />, title: "Private & Personal", text: "Discuss your wellness goals in complete privacy and comfort." },
                  { icon: <Smile />, title: "Real-Life Context", text: "Plans designed around your actual routine, kitchen setup, and family preferences—not generic templates." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-[#217328]/10 group text-left">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#217328] transition-colors shrink-0">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-normal">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => window.location.hash = 'contact'} className="px-8 py-4 bg-[#217328] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#1b5e20] transition-all shadow-lg shadow-[#217328]/20 hover:shadow-xl hover:-translate-y-1">
                  <span>Currently Serving Delhi/NCR</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM WE SOLVE */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Activity />, title: "Lack of Continuous Guidance", desc: "Most programs give you a plan and disappear. Without weekly check-ins, motivation fades fast." },
                  { icon: <Heart />, title: "Inconvenience & Time Constraints", desc: "Clinic visits, travel time, and waiting rooms make consistency impossible." },
                  { icon: <ShieldCheck />, title: "Generic Plans That Don't Work", desc: "Cookie-cutter plans ignore your lifestyle, preferences, and real-life challenges." },
                  { icon: <Apple />, title: "No Real Accountability", desc: "Apps can't replace human connection. Without weekly guidance, discipline disappears." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 text-teal-600 shadow-sm">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                    </div>
                    <p className="font-bold text-slate-900 mb-1 text-xl   leading-8">{item.title}</p>
                    <p className="text-lg leading-8 text-slate-500 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900">Why Traditional Nutrition <br /><span className="text-[#217328]">Solutions Fall Short</span></h2>
              <p className="text-xl text-slate-600 leading-8 font-medium">
                Most nutrition solutions fail because they lack continuous guidance, practical accountability, and real customization. For serious health goals, nutrition requires structure and consistency.
              </p>
              <p className="text-xl text-slate-600 leading-8 font-medium">
                That's why we built Dietician at Home differently—when you search for dieticians near me, you'll find professional guidance, weekly accountability, and data-driven precision delivered directly to your doorstep.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}

      <section className="py-32 px-6 bg-[#FCFAFF] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="px-5 py-2 bg-[#217328]/20 text-[#217328] rounded-full text-[12px] font-black uppercase tracking-[0.3em] inline-block mb-4">Step-by-Step</span>
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
                    <p className="text-3xl font-black text-slate-900 mb-6">{step.title}</p>
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
                    <div className="w-20 h-20 bg-white rounded-[28px] shadow-2xl flex items-center justify-center text-[#217328] border border-[#217328] group hover:scale-110 transition-transform cursor-default">
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

      {/* SECTION 4: WHAT YOU GET */}



      {/* SECTION 4: WHAT YOU GET */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
            <span className="inline-block px-4 py-2 bg-[#E8F5E9] text-[#2E7D32] rounded-full text-[13px] font-bold uppercase tracking-widest mb-6">Complete Ecosystem</span>
            <h2 className="text-4xl md:text-[48px] font-extrabold text-[#1F2937] leading-[1.1] mb-6">
              Everything You Need for <br />
              Nutrition Success <br />
              <span className="text-[#4CAF50]">Delivered to Your Doorstep</span>
            </h2>
            <p className="text-xl text-[#6B7280] font-normal leading-relaxed max-w-3xl mx-auto">
              World-class nutrition guidance combining human expertise with smart technology. No clinic visits. No guesswork. Just progress.
            </p>
          </div>

          {/* Features Loop */}
          <div className="space-y-20 md:space-y-32">
            {[
              {
                title: "Monthly At-Location Visits",
                desc: "A trained representative visits your home, office, or preferred location once a month to record basic wellness metrics for lifestyle tracking. No clinic visits. No disruption to your routine.",
                icon: <MapPin strokeWidth={2} />,
                image: "/feature-home-visit.jpg"
              },
              {
                title: "Weekly Dietician sessions",
                desc: "Speak to a qualified Dietician every week via call or video. Weekly discussions happen before curating each week's meal plan, ensuring close feedback, course correction, and accountability.",
                icon: <Video strokeWidth={2} />,
                image: "/feature-video-consult.jpg"
              },
              {
                title: "Personalized Weekly Meal Plans",
                desc: "Every week, receive a tailored meal plan structured to your lifestyle, preferences, and individual needs. Plans include complete ingredient lists and step-by-step cooking instructions—making execution simple and practical.",
                icon: <Utensils strokeWidth={2} />,
                image: "/feature-meal-plan.png"
              },
              {
                title: "Your Wellness Tracking Device (Included)",
                desc: "A smart wellness tracking scale included to help you log personal progress at home. Data syncs with the app to support consistency and awareness as part of your nutrition routine. The device is yours to keep.",
                icon: <Activity strokeWidth={2} />,
                image: "/feature-tracking-device.png"
              },
              {
                title: "Mobile App Access",
                desc: "Your nutrition control center. View meal plans, track meals and macros, scan outside meals, log wellness parameters, schedule sessions, and receive meal reminders—all in one place.",
                icon: <Smartphone strokeWidth={2} />,
                image: "/feature-mobile-app.png"
              },
              {
                title: "Family Group Feature",
                desc: "Manage nutrition for multiple family members from one account. Access consolidated weekly and daily ingredient lists for the entire household with detailed cooking instructions—simplifying grocery shopping and meal prep.",
                icon: <Users strokeWidth={2} />,
                image: "/feature-family-plan.jpg"
              },
              {
                title: "AI Assistant for Basic Queries",
                desc: "Get quick answers to basic questions through our AI assistant. Improves response time and clarity—but never replaces your Dietician's professional judgment.",
                icon: <Bot strokeWidth={2} />,
                image: "/feature-ai-assistant.jpg"
              }
            ].map((feature, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>

                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[3px] border-[#F1F8F4]
                  h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">

                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>

                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>


                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'lg:items-start lg:text-left' : 'lg:items-start lg:text-left'} items-center text-center p-6 md:p-0`}>
                    <div className="w-[72px] h-[72px] bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#4CAF50] mb-6 md:mb-8 shrink-0">
                      {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <p className="text-2xl md:text-[32px] font-bold text-[#1F2937] mb-4 md:mb-6">{feature.title}</p>
                    <p className="text-lg text-[#6B7280] font-normal leading-[1.7] max-w-[500px]">
                      {feature.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 md:mt-32 text-center">
            <button onClick={() => router.push('/app-tools')} className="inline-flex items-center gap-3 px-10 py-5 bg-[#217328] hover:bg-[#217328] text-white rounded-xl font-bold text-base shadow-[0_4px_16px_rgba(76,175,80,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all group">
              <span>Explore Our App & Tools</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 5: PROGRAMS OVERVIEW */}
      <section className="pb-20 md:pb-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-6 py-2 bg-[#217328] text-white rounded-full text-[11px] font-bold tracking-wider uppercase mb-6">Tailored Solutions</span>
            <h3 className="text-4xl md:text-[52px] font-bold text-[#2C3E50] mb-6 leading-tight">Programs Designed for Your Unique Needs</h3>
            <p className="text-xl text-[#6B7280] font-normal leading-relaxed max-w-3xl mx-auto">
              Whether you're managing weight or family nutrition—we have a structured program designed for measurable outcomes.

            </p>
          </div>

          {/* Tier 1: General Programs */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {[
              {
                title: "Weight Management",
                icon: <TrendingDown strokeWidth={1.5} />,
                desc: "Sustainable weight management through calorie awareness, macro tracking, and habit formation. For anyone serious about long-term collaborative progress.",
                features: ["Personalized calorie guidance", "Macro nutrient balancing", "Weekly progress tracking", "Sustainable habit support", "No crash diets"],
                showBadge: false,
                ctaText: "Start Your Journey"
              },
              {
                title: "Family Nutrition",
                icon: <Users strokeWidth={1.5} />,
                desc: "Coordinated meal planning for your entire household. Consolidated ingredient lists, unified meal prep, and nutrition support for multiple family members—all managed together.",
                features: ["Multi-member management", "Consolidated grocery lists", "Unified meal planning", "Age-appropriate nutrition", "Simplified execution"],
                showBadge: true,
                badgeText: "Best Value",
                pricing: "₹2,249/month*",
                pricingNote: "*Minimum 3 members, per member pricing after 3-month onboarding",
                savings: "Save ₹750/month vs individual plans",
                ctaText: "Get Family Plan"
              }
            ].map((program, i) => (
              <div key={i} className="group bg-white rounded-[48px] p-14 border-2 border-[#E5E7EB] hover:border-[#217328] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(33,115,40,0.15)] hover:-translate-y-3 transition-all duration-300 flex flex-col min-h-[520px]">
                <div className="flex justify-between items-start mb-6">
                  {program.showBadge && <span className="bg-gradient-to-r from-[#217328] to-[#1B5E20] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">{program.badgeText || 'Most Popular'}</span>}
                </div>

                <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-[#F0FDF4] to-white border-[3px] border-[#217328] flex items-center justify-center text-[#217328] mb-8 group-hover:bg-[#217328] group-hover:text-white group-hover:rotate-[5deg] transition-all duration-300">
                  {React.cloneElement(program.icon as React.ReactElement, { size: 40 })}
                </div>

                <h4 className="text-4xl font-extrabold text-[#1F2937] mb-5 leading-tight">{program.title}</h4>
                <p className="text-lg text-[#6B7280] leading-[1.8] mb-8">{program.desc}</p>

                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[15px] text-[#4B5563] font-medium">
                      <Check className="text-[#217328]" size={18} strokeWidth={2.5} /> {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  <p className="text-[#217328] font-bold text-sm mb-1">Starting at {program.pricing || '₹2,499/month*'}</p>
                  <p className="text-[11px] text-gray-400 mb-2">{program.pricingNote || '*after 3-month onboarding'}</p>
                  {program.savings && <p className="text-[12px] font-bold text-[#059669] mb-4">💰 {program.savings}</p>}
                  <div className="flex flex-col gap-2">
                    <button onClick={() => router.push(i === 0 ? '/programs/weight-management' : '/programs/family-nutrition')} className="w-full h-[56px] bg-[#217328] hover:bg-[#1B5E20] text-white rounded-2xl font-bold text-sm uppercase tracking-wide hover:scale-[1.02] transition-all flex items-center justify-center">
                      {program.ctaText || 'Learn More'} <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tier 2: Specialized Programs */}
          <div className="relative">
            {/* Scroll container - horizontal scroll on ALL screen sizes */}
            <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-thin cursor-grab active:cursor-grabbing">
              <div className="flex gap-6">
                {[
                  {
                    title: "PCOD/PCOS Support",
                    icon: <Heart strokeWidth={1.5} />,
                    desc: "Lifestyle coaching and dietary support for managing PCOD/PCOS symptoms through balanced nutrition.",
                    color: "#9333EA",
                    lightColor: "#F3E8FF",
                    darkColor: "#9333EA",
                    page: "pcod-pcos"
                  },
                  {
                    title: "Pregnancy Nutrition",
                    icon: <Heart strokeWidth={1.5} />,
                    desc: "Comprehensive nutrition guidance for expecting mothers, helping support health for both mother and baby throughout pregnancy.",
                    color: "#EC4899",
                    lightColor: "#FCE7F3",
                    darkColor: "#EC4899",
                    page: "pregnancy-nutrition"
                  },
                  {
                    title: "Thyroid Nutrition",
                    icon: <Zap strokeWidth={1.5} />,
                    desc: "Dietary guidance offering metabolic support and nutrient optimization for thyroid health.",
                    color: "#EA580C",
                    lightColor: "#FFF7ED",
                    darkColor: "#EA580C",
                    page: "thyroid-management"
                  },
                  {
                    title: "Diabetes Support",
                    icon: <BarChart strokeWidth={1.5} />,
                    desc: "Nutrition planning to support stable blood sugar levels through balanced carbohydrate strategies.",
                    color: "#2563EB",
                    lightColor: "#EFF6FF",
                    darkColor: "#2563EB",
                    page: "diabetes-management"
                  },
                  {
                    title: "Postpartum Care",
                    icon: <Heart strokeWidth={1.5} />,
                    desc: "Postpartum nutrition support and lactation guidance for new mothers, focusing on vitality and energy restoration.",
                    color: "#F472B6",
                    lightColor: "#FDF2F8",
                    darkColor: "#F472B6",
                    page: "postpartum-care"
                  },
                  {
                    title: "Preconception Care",
                    icon: <Heart strokeWidth={1.5} />,
                    desc: "Optimize your health before pregnancy with targeted nutrition to improve fertility and prepare your body for conception.",
                    color: "#A855F7",
                    lightColor: "#F3E8FF",
                    darkColor: "#A855F7",
                    page: "preconception-care"
                  },
                  {
                    title: "Elderly Nutrition",
                    icon: <Users strokeWidth={1.5} />,
                    desc: "Age-appropriate nutrition guidance for senior citizens with focus on mobility and general wellness.",
                    color: "#F59E0B",
                    lightColor: "#FFFBEB",
                    darkColor: "#F59E0B",
                    page: "elderly-nutrition"
                  },
                  {
                    title: "Nutrition for Recovery",
                    icon: <Shield strokeWidth={1.5} />,
                    desc: "Supportive nutrition guidance to help maintain strength and wellness during recovery.",
                    color: "#E11D48",
                    lightColor: "#FFF1F2",
                    darkColor: "#E11D48",
                    page: "cancer-recovery"
                  }
                ].map((program, i) => (
                  <div
                    key={i}
                    id={`specialized-card-${i}`}
                    className="group bg-white rounded-[32px] p-8 border-2 border-[#E5E7EB] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-300 flex flex-col min-h-[420px] w-[280px] md:w-[320px] lg:w-[340px] flex-shrink-0 relative overflow-hidden"
                  >
                    <style>{`
                  #specialized-card-${i}:hover {
                    border-color: ${program.color} !important;
                  }
                `}</style>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full" style={{ backgroundColor: program.color }}>Specialized</span>
                    </div>

                    <div className="w-14 h-14 rounded-[20px] flex items-center justify-center mt-4 transition-transform group-hover:rotate-6" style={{ backgroundColor: program.lightColor, color: program.darkColor }}>
                      {React.cloneElement(program.icon as React.ReactElement, { size: 28 })}
                    </div>

                    <p className="text-[18px] font-bold text-[#1F2937] mt-6 leading-tight">{program.title}</p>
                    <p className="text-sm text-[#6B7280] leading-[1.6] mt-3 flex-grow">{program.desc}</p>

                    <div className="mt-auto flex items-end justify-between">
                      <div>
                        <p className="text-[13px] font-bold" style={{ color: program.color }}>₹3,499/mo*</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">*after 3-month onboarding</p>
                      </div>
                      <button
                        onClick={() => router.push(`/programs/${program.page}`)}
                        className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all bg-transparent"
                        style={{ borderColor: program.color, color: program.color }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = program.color; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = program.color; }}
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicator - now for all screen sizes */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Scroll to see all 8 specialized programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: PRICING TABLE */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#F0FDF4] to-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-6 py-2.5 bg-[#217328] text-white rounded-full text-[11px] font-bold tracking-wider uppercase mb-6">No Hidden Costs</span>
            <h3 className="text-4xl md:text-[54px] font-extrabold text-[#1F2937] mb-6 leading-tight">Transparent Pricing, Premium Support</h3>
            <p className="text-xl text-[#6B7280] font-medium leading-relaxed max-w-3xl mx-auto">
              World-class nutrition guidance at rates that reflect real value. Choose the program that fits your needs.
            </p>
          </div>

          {/* Pricing Cards Container */}
          <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 md:gap-12 mb-14">

            {/* Card 1: General Programs */}
            <div className="relative bg-white rounded-[48px] p-8 md:p-14 border-2 border-[#E5E7EB] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:-translate-y-3 hover:border-[#217328] transition-all duration-300 flex flex-col min-h-[720px] group">
              <div className="absolute -top-4 left-8 md:left-14 bg-gradient-to-r from-[#217328] to-[#1B5E20] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(33,115,40,0.3)]">Most Popular</div>

              <h3 className="text-4xl font-extrabold text-[#1F2937] mb-8">General Programs</h3>

              <div className="bg-[#F8FFF9] p-6 rounded-3xl mb-10">
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
                {[
                  "Monthly at-location visits",
                  "Weekly Dietician sessions",
                  "Personalized meal plans",
                  { text: "tracking device (yours to keep)", highlight: true, value: "₹1,699 value" },
                  "Full mobile app access",
                  "Family group feature",
                  "AI assistant support"
                ].map((item, i) => {
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

            {/* Card 2: Specialized Programs */}
            <div className="relative bg-white rounded-[48px] p-8 md:p-14 border-2 border-[#E5E7EB] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:-translate-y-3 hover:border-[#7C3AED] transition-all duration-300 flex flex-col min-h-[720px] group">
              <div className="absolute -top-4 left-8 md:left-14 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(124,58,237,0.3)]">For Specialized Support</div>

              <h3 className="text-4xl font-extrabold text-[#1F2937] mb-8">Specialized Nutrition Support</h3>

              <div className="bg-[#FAF5FF] p-6 rounded-3xl mb-10">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-3">ONBOARDING PLAN</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-[64px] font-black text-[#1F2937] leading-none">₹9,000</span>
                </div>
                <p className="text-sm font-semibold text-[#6B7280]">for the first 3 months</p>

                <div className="h-px bg-[#E5E7EB] my-5"></div>

                <p className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-widest mb-2">MONTHLY RENEWAL</p>
                <p className="text-lg font-bold text-[#7C3AED]">Then only ₹3,499/month</p>
                <span className="inline-block mt-2 bg-[#EDE9FE] text-[#7C3AED] px-3 py-1.5 rounded-full text-xs font-bold">Includes specialized tracking</span>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {["Everything in General Programs", "Condition-specific tracking", "Enhanced support", "Specialized meal protocols", "Physician-aligned nutrition planning", "Wellness parameter tracking", "Priority Dietician support"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] font-semibold text-[#4B5563] leading-relaxed">
                    <CheckCircle2 className="text-[#7C3AED] flex-shrink-0" size={20} fill="#7C3AED" color="white" /> {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button onClick={() => router.push('/contact')} className="w-full h-16 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white rounded-[20px] font-bold text-[15px] uppercase tracking-wide shadow-[0_8px_24px_rgba(124,58,237,0.3)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
                  Get Started Now
                </button>
                <p className="text-center text-xs text-[#6B7280] mt-4 font-medium">✓ Comprehensive health profile review • Expert guidance</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: APP & TECHNOLOGY */}
      <section className="py-24 md:py-24 bg-[#0F172A] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] to-[#1E293B]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#217328]/20 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366F1]/15 rounded-full blur-[150px] animate-[float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#F59E0B]/10 rounded-full blur-[100px] animate-[float_12s_ease-in-out_infinite]" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
            <span className="inline-block px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[11px] font-bold tracking-widest uppercase mb-8 shadow-inner">Powered by Technology</span>
            <h2 className="text-4xl md:text-[64px] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A7F3D0] mb-6 leading-[1.1] tracking-tight drop-shadow-sm">Your Nutrition Control Centre</h2>
            <p className="text-lg md:text-[22px] text-white/60 font-normal leading-relaxed max-w-2xl mx-auto">
              Powerful technology. Simple to use. Everything you need in one beautiful app.
            </p>
          </div>

          <div className="grid lg:grid-cols-[50%_50%] gap-20 items-center">

            {/* Left Column: Features */}
            <div className="order-2 lg:order-1 space-y-5">
              {[
                {
                  icon: <Utensils />,
                  title: "Weekly Meal Plans",
                  desc: "View complete meal plans with daily ingredient lists and step-by-step cooking instructions. Know exactly what to cook, when, and how.",
                  badge: "Detailed recipes"
                },
                {
                  icon: <Smartphone />,
                  title: "Meal Tracking",
                  desc: "Log consumed meals, track calories and macros in real-time. Scan outside meals to check nutritional values instantly.",
                  badge: "AI-powered scanning"
                },
                {
                  icon: <Activity />,
                  title: "Health tracking",
                  desc: "Log wellness parameters manually or sync automatically from your tracking device. Visualize progress over time with beautiful charts.",
                  badge: "Auto-sync device"
                },
                {
                  icon: <Calendar />,
                  title: "session Scheduling",
                  desc: "Book your weekly Dietician calls directly through the app. Receive reminders and choose between video or phone sessions.",
                  badge: "One-tap booking"
                },
                {
                  icon: <Users />,
                  title: "Family Management",
                  desc: "Manage nutrition for multiple family members from one account. Get consolidated ingredient lists and coordinated meal planning.",
                  badge: "Multi-user support"
                },
                {
                  icon: <Bot />,
                  title: "AI Assistant",
                  desc: "Get instant responses to basic queries 24/7. The AI handles routine questions while your Dietician focuses on personalized guidance.",
                  badge: "Always available"
                }
              ].map((item, i) => (
                <div key={i}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#217328]/50 hover:translate-x-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(33,115,40,0.2)]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#217328]/20 to-transparent border border-[#217328]/30 flex items-center justify-center text-white group-hover:bg-[#217328] group-hover:rotate-[5deg] transition-all duration-300">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <p className="text-xl font-bold text-white">{item.title}</p>
                  </div>
                  <p className="text-[15px] text-white/60 leading-relaxed mb-3 font-normal">{item.desc}</p>
                  <span className="inline-block bg-[#217328]/20 text-[#A7F3D0] px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide">{item.badge}</span>
                </div>
              ))}
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="order-1 lg:order-2 relative h-[600px] lg:h-[700px] w-full flex items-center justify-center">

              <div className="flex flex-col gap-8 w-[90%] lg:w-[80%]">

                {/* Image 1 */}
                <div className="rounded-[28px] overflow-hidden 
                    border-[5px] border-white/10 shadow-xl">
                  <Image
                    src="/home-1.jpg"
                    alt="Diet session"
                    width={600}
                    height={500}
                    className="object-cover"
                  />
                </div>

                {/* Image 2 */}
                <div className="rounded-[28px] overflow-hidden 
                    border-[5px] border-white/10 shadow-xl">
                  <Image
                    src="/home-2.jpg"
                    alt="Meal Planning App"
                    width={600}
                    height={500}
                    className="object-cover"
                  />
                </div>

              </div>

            </div>


          </div>
        </div>
      </section>

      {/* SECTION 8: WHO THIS IS FOR */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#F8FFF9] overflow-hidden relative">
        <style>{`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
          .scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-snap-type: x mandatory;
          }
          .persona-card {
            scroll-snap-align: center;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 mb-12">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-6 py-2.5 bg-[#217328] text-white rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 shadow-md">Find Your Fit</span>
            <h2 className="text-4xl md:text-[54px] font-extrabold text-[#1F2937] mb-6 leading-tight tracking-tight">Is Dietician at Home Right for You?</h2>
            <p className="text-lg md:text-xl text-[#6B7280] font-medium leading-relaxed max-w-3xl mx-auto">
              This service is designed for people who are serious about their health and expect progress—not just advice.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative w-full">

          {/* Edge Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-[60px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

          {/* Desktop Scroll Buttons */}
          <button
            onClick={() => {
              const container = document.getElementById('persona-scroll-container');
              if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
            }}
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-[#E5E7EB] rounded-full items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-20 hover:border-[#217328] hover:text-[#217328] hover:scale-110 transition-all text-[#6B7280]"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => {
              const container = document.getElementById('persona-scroll-container');
              if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
            }}
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-[#E5E7EB] rounded-full items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-20 hover:border-[#217328] hover:text-[#217328] hover:scale-110 transition-all text-[#6B7280]"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div
            id="persona-scroll-container"
            className="scroll-container flex gap-8 px-6 md:px-20 pb-10 overflow-x-auto w-full"
          >
            {[
              {
                title: "Busy Professionals",
                pain: "I have demanding work schedules and can't afford multiple clinic visits. Between meetings and deadlines, my health always takes a backseat.",
                help: "At-location visits that come to your home or office. Flexible scheduling around your calendar. Weekly calls that fit your routine—no travel, no waiting, no disruption.",
                img: "/persona-busy-professional.jpg"
              },
              {
                title: "Growing Families",
                pain: "Coordinating nutrition for my entire household is chaotic. Different preferences, different schedules—meal planning feels impossible.",
                help: "Family group feature with consolidated ingredient lists for everyone. Unified meal planning that works for the whole household. Simplified grocery shopping and meal prep execution.",
                img: "/feature-family-plan.jpg"
              },
              {
                title: "Elderly Individuals",
                pain: "I face mobility challenges and can't travel to clinics anymore. I need specialized care but struggle with getting to appointments.",
                help: "Complete doorstep service with monthly home visits. Age-appropriate nutrition support with compassionate, professional attention. No travel required—we come to you.",
                img: "/elderly-nutritions.jpg"
              },
              {
                title: "Managing Specific Conditions",
                pain: "I have PCOD/thyroid/diabetes and need specialized nutrition guidance. Generic plans don't work for my specific health condition and I need expert support.",
                help: "Condition-aware programs with health context understanding. Weekly tracking and professional accountability. Specialized meal protocols tailored to your needs.",
                img: "/persona-elderly.jpg"
              },
              {
                title: "Goal-Oriented Individuals",
                pain: "I'm tired of generic plans and empty promises. I've tried apps and diets before—nothing sticks. I want measurable progress, not shortcuts.",
                help: "Data-driven approach with weekly professional accountability. Measurable progress tracking through tracking devices. Real progress backed by qualified Dieticians—not guesswork.",
                img: "/persona-results-driven.jpg"
              }
            ].map((p, i) => (
              <div key={i} className="persona-card w-[calc(100vw-48px)] md:w-[400px] flex-shrink-0 bg-white border-2 border-[#E5E7EB] rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden hover:border-[#217328] hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(33,115,40,0.15)] transition-all duration-300 group flex flex-col min-h-[560px]">
                {/* Image Section */}
                <div className="h-[240px] relative overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-10 flex flex-col gap-5 flex-grow">
                  <p className="text-[28px] font-extrabold text-[#1F2937] leading-[1.2]">{p.title}</p>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#6B7280] font-bold mb-2">The Challenge:</p>
                    <div className="bg-[#FEF2F2] p-4 rounded-xl border-l-4 border-[#EF4444]">
                      <p className="text-[#EF4444] italic text-[15px] leading-relaxed">"{p.pain}"</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#217328] font-bold mb-2 mt-2">How We Help:</p>
                    <div className="bg-[#F0FDF4] p-4 rounded-xl border-l-4 border-[#217328]">
                      <p className="text-[#1F2937] font-semibold text-[15px] leading-relaxed">{p.help}</p>
                    </div>
                  </div>

                  <button onClick={() => router.push('/contact')} className="mt-auto w-full h-12 flex items-center justify-center gap-2 bg-transparent border-2 border-[#217328] text-[#217328] font-bold text-[13px] uppercase tracking-wide rounded-2xl group-hover:bg-[#217328] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    This Is Me <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scroll Indicators - Dots */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#217328] w-4' : 'bg-gray-300'}`}></div>
            ))}
          </div>
        </div>

      </section>

      {/* SECTION 9: WHY CHOOSE US */}
      <section className="py-24 md:py-36 bg-gradient-to-br from-[#FAFAFA] to-[#F0FDF4] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#217328_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#217328]/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#217328] to-[#1B5E20] text-white rounded-full text-[11px] font-bold tracking-widest uppercase mb-8 shadow-[0_4px_12px_rgba(33,115,40,0.25)]">The Difference</span>
            <h3 className="text-4xl md:text-[56px] font-black text-[#1F2937] mb-6 leading-[1.15] tracking-tight">
              A Different League of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] to-[#059669]">Nutrition Support</span>
            </h3>
            <p className="text-lg md:text-xl text-[#6B7280] font-medium leading-relaxed max-w-3xl mx-auto">
              World-class professional support with a human-first approach and technology-enabled precision—delivered at highly competitive pricing by dieticians near me who truly understand your needs.
            </p>
          </div>

          {/* Differentiators Grid */}
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
            {[
              {
                icon: <MapPin size={40} className="text-[#217328] group-hover:text-white transition-colors duration-300" />,
                title: "Dieticians Near Me Visit Your Home",
                desc: "Professional dieticians in Gurgaon bring nutrition guidance to your doorstep. Monthly at-location assessments by expert dieticians near me mean zero travel, zero waiting, zero routine disruption.",
                badge: "Every client gets monthly home visits"
              },
              {
                icon: <Stethoscope size={40} className="text-[#217328] group-hover:text-white transition-colors duration-300" />,
                title: "Weekly Involvement from Dieticians in Gurgaon",
                desc: "Unlike sporadic check-ins, you speak to qualified dieticians near me every single week. Professional dieticians in Gurgaon provide continuous feedback, course correction, and accountability—not just a plan and goodbye.",
                badge: "2,000+ consultations every month"
              },
              {
                icon: <BarChart3 size={40} className="text-[#217328] group-hover:text-white transition-colors duration-300" />,
                title: "Data-Driven Dieticians Near Me",
                desc: "Expert dieticians in Gurgaon use professional monitoring devices, real-time tracking, and weekly updates. Professional dieticians near me eliminate guesswork—your progress with dieticians in Gurgaon is quantifiable and visible.",
                badge: "Real-time tracking via app & devices"
              },
              {
                icon: <Users size={40} className="text-[#217328] group-hover:text-white transition-colors duration-300" />,
                title: "Human Dieticians in Gurgaon, Tech-Enabled",
                desc: "Technology works in the background while real dieticians near me control your guidance. Professional dieticians in Gurgaon make decisions. The app makes execution easier. Best of both worlds.",
                badge: "100% human-led consultations"
              }
            ].map((d, i) => (
              <div key={i} className="group bg-white border-2 border-[#E5E7EB] rounded-[32px] p-8 flex flex-col min-h-[420px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#217328] hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(33,115,40,0.15)] transition-all duration-400">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#F0FDF4] to-[#E8F5E9] border-[3px] border-[#217328] flex items-center justify-center mb-8 shadow-[0_8px_16px_rgba(33,115,40,0.1)] group-hover:bg-[#217328] group-hover:rotate-[5deg] transition-all duration-300">
                  {d.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-[#1F2937] leading-[1.3] mb-4 tracking-tight">{d.title}</h3>
                <p className="text-base font-medium text-[#6B7280] leading-[1.7] mb-6 flex-grow">{d.desc}</p>
                <div className="bg-[#F0FDF4] border-l-4 border-[#217328] px-4 py-3 rounded-xl flex items-center gap-2 mt-auto">
                  <CheckCircle2 size={16} fill="#217328" color="white" />
                  <span className="text-[13px] font-bold text-[#059669]">{d.badge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-[1200px] mx-auto bg-white border-2 border-[#E5E7EB] rounded-[40px] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <h3 className="text-[32px] font-bold text-[#1F2937] text-center mb-10">How We Compare</h3>
            <p className="text-sm text-[#6B7280] text-center -mt-8 mb-12 font-medium">Honest comparison with other nutrition solutions</p>

            <div className="grid grid-cols-1 md:grid-cols-[30%_30%_40%] gap-8 md:gap-0 relative">
              {/* Mobile/Tablet Labels only visible on small screens */}

              {/* Column 1 */}
              <div className="md:pr-8 md:border-r border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-6 text-center md:text-left">Traditional Clinics</h4>
                <div className="space-y-6">
                  {[
                    { l: "Convenience", v: "✗ Requires travel & waiting" },
                    { l: "Professional Involvement", v: "✗ Sporadic monthly visits only" },
                    { l: "Monitoring", v: "✗ Only during clinic visits" },
                    { l: "Personalization", v: "✗ Limited customization" },
                    { l: "Accountability", v: "✗ Long gaps between visits" },
                    { l: "Family Support", v: "✗ Individual-only focus" },
                    { l: "Cost", v: "₹5,000+/month" }
                  ].map((idx, k) => (
                    <div key={k} className="pb-5 border-b border-gray-50 last:border-0">
                      <p className="text-[14px] uppercase tracking-widest text-[#6B7280] font-bold mb-2 md:hidden">{idx.l}</p>
                      <div className="flex items-start gap-3">
                        {k === 6 ? null : <div className="mt-0.5 min-w-[20px]"><X size={20} className="text-[#EF4444]" /></div>}
                        <p className="text-[15px] text-[#9CA3AF] font-medium leading-tight">{idx.v}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div className="md:px-8 md:border-r border-gray-100 hidden md:block">
                <h4 className="text-lg font-bold text-gray-900 mb-6">Generic Apps</h4>
                <div className="space-y-6">
                  {[
                    "✗ No human interaction",
                    "✗ Zero professional guidance",
                    "✗ Self-reported, unreliable",
                    "✗ One-size-fits-all templates",
                    "✗ Easy to abandon",
                    "✗ No family features",
                    "₹999/month (no results)"
                  ].map((v, k) => (
                    <div key={k} className="pb-5 border-b border-gray-50 last:border-0 flex items-start gap-3">
                      {k === 6 ? null : <div className="mt-0.5 min-w-[20px]"><X size={20} className="text-[#EF4444]" /></div>}
                      <p className="text-[15px] text-[#9CA3AF] font-medium leading-tight">{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3 - Us */}
              <div className="md:-my-8 md:-mr-8 md:ml-0 md:pl-10 md:py-8 bg-gradient-to-b from-[#F0FDF4] to-white border-2 border-[#217328] rounded-[24px] p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#217328] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">Recommended</div>
                <h4 className="text-xl font-extrabold text-[#217328] mb-6 flex items-center gap-2">Dietitian at Home</h4>
                <div className="space-y-6">
                  {[
                    { l: "Convenience", v: "✓ Doorstep service + weekly calls" },
                    { l: "Professional Involvement", v: "✓ Weekly dietitian consultations" },
                    { l: "Monitoring", v: "✓ Professional device + real-time tracking" },
                    { l: "Personalization", v: "✓ Fully personalized, weekly refined" },
                    { l: "Accountability", v: "✓ Weekly check-ins ensure compliance" },
                    { l: "Family Support", v: "✓ Family group management included" },
                    { l: "Cost", v: "₹2,499/month (premium care)" }
                  ].map((idx, k) => (
                    <div key={k} className="pb-5 border-b border-[#217328]/10 last:border-0">
                      <p className="text-[10px] uppercase tracking-widest text-[#217328]/60 font-bold mb-1 md:hidden">{idx.l}</p>
                      <div className="flex items-start gap-3">
                        {k === 6 ? null : <div className="mt-0.5 min-w-[20px]"><CheckCircle2 size={20} className="text-[#217328]" fill="#217328" color="white" /></div>}
                        <p className="text-[15px] text-[#1F2937] font-bold leading-tight">{idx.v}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Feature Differentiation Section */}
          <div className="mt-20 max-w-[1200px] mx-auto bg-white border-2 border-[#E5E7EB] rounded-[40px] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <h3 className="text-[32px] font-bold text-[#1F2937] text-center mb-10">What Makes Our Nutrition Support Different</h3>
            <p className="text-sm text-[#6B7280] text-center -mt-8 mb-12 font-medium">Designed around your daily routine and home environment</p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Designed around your daily routine and home environment",
                "Weekly guided nutrition sessions for consistency",
                "Personal progress tracking using digital tools",
                "Structured plans that evolve based on adherence and feedback",
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

          {/* Bottom Trust Stats */}
          <div className="mt-20 max-w-[1400px] mx-auto bg-gradient-to-r from-[#217328] to-[#1B5E20] rounded-[40px] px-8 py-16 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mixed-blend-overlay"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Trusted by 500+ Active Clients</h3>
            <p className="text-lg text-white/80 mb-12 relative z-10">Real people. Real results. Real transformation.</p>

            <div className="grid md:grid-cols-3 gap-10 md:gap-12 max-w-4xl mx-auto relative z-10 mb-12">
              {[
                { n: "500+", l: "Active Clients" },
                { n: "95%", l: "Retention Rate" },
                { n: "2,000+", l: "Monthly Consultations" }
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-[48px] font-black text-white leading-tight">{s.n}</p>
                  <p className="text-[14px] uppercase tracking-widest text-white/70 font-bold">{s.l}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.location.hash = 'contact'}
              className="h-14 px-10 bg-white text-[#217328] font-bold text-sm uppercase tracking-wide rounded-2xl hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300 inline-flex items-center justify-center gap-2 relative z-10"
            >
              Experience the Difference <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 10: CORPORATE WELLNESS PREVIEW */}
      <section className="py-10 md:py-20 bg-[#0F1419] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-[#0A0E27] via-[#1A1F3A] to-[#0F1419] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

        {/* Floating Shapes */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#217328]/10 rounded-full blur-[150px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[120px] animate-[float_15s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/2 left-[-100px] w-[300px] h-[300px] bg-[#F59E0B]/5 rounded-full blur-[100px] animate-[float_18s_ease-in-out_infinite]" />

        {/* Light Rays */}
        <div className="absolute top-[-20%] right-[20%] w-[1px] h-[150%] bg-gradient-to-b from-white/5 to-transparent rotate-[35deg] blur-[2px]" />
        <div className="absolute top-[-20%] right-[15%] w-[1px] h-[150%] bg-gradient-to-b from-white/5 to-transparent rotate-[35deg] blur-[1px]" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">

            {/* Left Column: Content */}
            <div className="lg:w-[55%] space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#217328] to-[#059669] shadow-[0_8px_20px_rgba(33,115,40,0.3)]">
                <Building2 size={16} className="text-white" />
                <span className="text-[12px] font-bold text-white uppercase tracking-widest">For Organizations</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Nutrition Support for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A7F3D0]">Your Team</span>
              </h2>

              <p className="text-xl text-white/70 leading-relaxed max-w-xl font-light">
                Bring world-class nutrition support to your employees with dieticians near me available for your entire organization. Centralized dashboard for HR management. Complete privacy for individuals. Transform workplace wellness with measurable progress.
              </p>

              <div className="space-y-5">
                {[
                  { icon: <ShieldCheck size={24} className="text-[#A7F3D0]" />, text: "Same structured nutrition support for employees" },
                  { icon: <LayoutDashboard size={24} className="text-[#A7F3D0]" />, text: "Centralized HR dashboard for management" },
                  { icon: <Lock size={24} className="text-[#A7F3D0]" />, text: "100% employee privacy - no health data shared" },
                  { icon: <TrendingUp size={24} className="text-[#A7F3D0]" />, text: "Measurable wellness outcomes & ROI" }
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                      {f.icon}
                    </div>
                    <span className="text-lg font-bold text-white leading-tight">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Privacy Guarantee Box */}
              <div className="mt-8 bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-2xl p-6 flex items-start gap-4 backdrop-blur-sm">
                <div className="mt-1"><ShieldCheck size={28} className="text-[#FCA5A5]" /></div>
                <div>
                  <h4 className="text-base font-bold text-[#FCA5A5]">Privacy Guaranteed</h4>
                  <p className="text-sm text-white/60 mt-1 leading-relaxed">No individual health data or personal health records are shared with the organization. Complete confidentiality for all employees.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-8">
                <button
                  onClick={() => router.push('/corporate-wellness')}
                  className="h-16 px-10 bg-gradient-to-r from-[#217328] to-[#1B5E20] text-white rounded-[18px] font-bold text-[15px] uppercase tracking-wide flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_12px_30px_rgba(33,115,40,0.4)] shadow-xl"
                >
                  Explore Corporate Wellness <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => router.push('/contact')}
                  className="h-16 px-10 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-[18px] font-bold text-[15px] uppercase tracking-wide flex items-center justify-center transition-all"
                >
                  Schedule Demo
                </button>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:w-[45%] relative h-[600px] flex items-center justify-center perspective-1000">
              {/* Main Dashboard Mockup */}
              <div className="relative z-10 w-full max-w-[550px] bg-white/5 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 animate-[pulse_5s_ease-in-out_infinite_gentle]">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-white">Employee Wellness Dashboard</h3>
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Admin View</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><User size={20} className="text-white" /></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { v: "248", l: "Active Employees", c: "text-white" },
                    { v: "92%", l: "Participation", c: "text-[#A7F3D0]" },
                    { v: "1,856", l: "sessions", c: "text-white" },
                    { v: "89%", l: "Satisfaction", c: "text-[#A7F3D0]" }
                  ].map((s, i) => (
                    <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                      <p className={`text-3xl font-bold ${s.c} mb-1`}>{s.v}</p>
                      <p className="text-xs font-medium text-white/50 uppercase">{s.l}</p>
                    </div>
                  ))}
                </div>

                <div className="h-32 bg-gradient-to-t from-[#217328]/20 to-transparent rounded-2xl border border-white/5 relative overflow-hidden flex items-end justify-between px-4 pb-0 mb-6 group-hover:border-[#217328]/30 transition-colors">
                  {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="w-[10%] bg-[#A7F3D0] rounded-t-md opacity-80 group-hover:bg-[#217328] transition-colors duration-500"></div>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <button className="flex-1 h-10 bg-[#217328] rounded-xl text-xs font-bold text-white uppercase tracking-wide hover:bg-[#1B5E20] transition-colors">Add Employee</button>
                  <button className="flex-1 h-10 bg-transparent border border-white/20 rounded-xl text-xs font-bold text-white uppercase tracking-wide hover:bg-white/10 transition-colors">Download Report</button>
                </div>
              </div>

              {/* Floating Data Cards */}
              {[
                { t: "40px", l: "-40px", icon: <Users size={16} />, text: "48 New Enrollments", delay: "0s" },
                { t: "80px", r: "-60px", icon: <Calendar size={16} />, text: "12 Sessions This Week", delay: "1s" },
                { b: "100px", l: "-50px", icon: <TrendingUp size={16} />, text: "15% Avg Weight Loss", delay: "2s" },
                { b: "60px", r: "-40px", icon: <Heart size={16} />, text: "94% Health Goals Met", delay: "0.5s" }
              ].map((c, i) => (
                <div
                  key={i}
                  className="absolute hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 px-5 py-4 rounded-2xl shadow-xl z-20 animate-[float_6s_ease-in-out_infinite]"
                  style={{
                    top: c.t, left: c.l, right: c.r, bottom: c.b,
                    animationDelay: c.delay
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#A7F3D0]/20 flex items-center justify-center text-[#A7F3D0]">{c.icon}</div>
                  <span className="text-sm font-bold text-white whitespace-nowrap">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mt-20 pt-20 border-t border-white/10">
            <h3 className="text-3xl font-bold text-white text-center mb-16">Why Organizations Choose Us</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Heart size={32} />, title: "Improved Productivity", desc: "Healthier employees are more focused, energetic, and productive at work." },
                { icon: <TrendingDown size={32} />, title: "Reduced Absenteeism", desc: "Better health means fewer sick days and lower healthcare costs for your organization." },
                { icon: <Users size={32} />, title: "Enhanced Retention", desc: "Wellness benefits improve employee satisfaction and reduce turnover rates." },
                { icon: <Award size={32} />, title: "Competitive Advantage", desc: "Stand out as an employer that truly cares about employee wellbeing." }
              ].map((b, i) => (
                <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 hover:border-white/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#A7F3D0]/10 flex items-center justify-center mx-auto text-[#A7F3D0] mb-6">{b.icon}</div>
                  <p className="text-lg font-bold text-white mb-4">{b.title}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Snippet */}
          <div className="mt-20 mx-auto max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/5 to-transparent opacity-50"></div>
            <Quote size={40} className="text-[#A7F3D0] opacity-40 mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed mb-8 relative z-10">"Implementing Dietician at Home's corporate wellness program resulted in a 23% increase in employee satisfaction scores and measurable wellness improvements across our team."</p>
            <div>
              <p className="text-lg font-bold text-white">- Durgesh Singh</p>
              <p className="text-sm text-white/60">HR Director, Webfries Solutions</p>
            </div>
          </div>
        </div>
      </section>




      {/* SECTION 11.5: NUTRITION QUOTE (NEW) */}
         <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#FAFAFA] to-white overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#217328]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center">

            {/* Left Column: Image (50%) */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative group overflow-hidden rounded-[40px] lg:rounded-b-none lg:rounded-r-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] order-1 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#217328]/10 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-50"></div>
              <Image
                src="/results-come-from-expert-dieticians.jpg"
                alt="Fresh healthy food including vegetables, fruits, and balanced meals"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              />
            </div>

            {/* Right Column: Quote Content (50%) */}
            <div className="w-full lg:w-1/2 p-10 md:p-20 flex flex-col justify-center h-full lg:h-[600px] bg-white order-2 lg:order-2">

              <Quote size={80} className="text-[#217328] opacity-20 mb-8" />

              <h2 className="text-3xl md:text-[42px] font-extrabold text-[#1F2937] leading-[1.2] tracking-tight mb-6">
                <span className="text-[#217328] text-4xl md:text-[48px]">90%</span> of Your Results Come From Expert Dieticians
              </h2>

              <p className="text-lg md:text-xl text-[#6B7280] font-medium leading-[1.7] max-w-lg mb-10">
                Nutrition guidance from professional dieticians in Gurgaon is the foundation of health transformation. No exercise can outwork poor diet. That's why qualified dieticians near me bring professional nutrition directly to you—making it convenient, structured, and results-driven with expert dieticians in Gurgaon.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                {[
                  { num: "70%", label: "Diet Impact" },
                  { num: "20%", label: "Exercise" },
                  { num: "10%", label: "Genetics" }
                ].map((stat, i) => (
                  <div key={i} className="bg-[#F0FDF4] border-2 border-[#217328] rounded-xl px-6 py-4 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <p className="text-2xl font-bold text-[#217328]">{stat.num}</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="w-20 h-1 bg-[#217328] rounded-full"></div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 12: FAQ */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-white via-[#F0FDF4] to-white relative">
        <div className="max-w-[900px] mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="inline-block px-6 py-3 bg-[#217328] text-white rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 shadow-[0_4px_12px_rgba(33,115,40,0.25)]">Got Questions?</span>
            <h2 className="text-4xl md:text-[54px] font-black text-[#1F2937] mb-6 leading-tight tracking-tight">Questions? We've Got Answers.</h2>
            <p className="text-lg text-[#6B7280] font-medium leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about Dietician at Home. Can't find what you're looking for? We're here to help.
            </p>
          </div>

          {/* Featured Question Highlight */}
          <div className="mb-12 bg-gradient-to-r from-[#217328] to-[#1B5E20] rounded-[28px] p-8 md:p-10 shadow-[0_12px_30px_rgba(33,115,40,0.25)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <span className="inline-block text-[10px] font-bold uppercase text-white/60 tracking-widest mb-4">Most Asked</span>
              <h3 className="text-2xl font-bold text-white mb-4">Is this service worth the investment?</h3>
              <p className="text-base text-white/80 leading-[1.7]">Many people choose structured nutrition guidance because it helps them stay consistent. Our programs combine weekly guided sessions, digital tracking tools, and optional home support—making it easier to follow healthy habits over time. Clients value the convenience, accountability, and personalized approach as part of their long-term wellness routine.</p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 text-white font-bold text-sm">

              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white border-2 border-[#E5E7EB] rounded-[32px] p-2 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">
            {[
              { q: "What is Dietician at Home?", a: "Dietician at Home is a specialized at-location nutrition guidance service. We bring professional Dietician sessions directly to your doorstep through monthly at-home visits, weekly Dietician calls, personalized meal plans, and a comprehensive mobile app. No clinic visits required—we come to you." },
              { q: "How is this different from other nutrition services?", a: "Unlike clinic-based services or generic apps, we combine monthly at-location visits, weekly Expert Guidance, real-time data tracking, and human-first support. You get continuous tracking and accountability—not just a plan and goodbye. We eliminate travel, use professional biometric devices, and provide weekly check-ins for 100% accountability." },
              { q: "Do I need to visit a clinic?", a: "Never. Our trained representative visits your home or office once a month with digital wellness tools for all visits. All Dietician sessions are via call or video. Zero travel required from your side." },
              { q: "How often will I speak to my Dietician?", a: "You will have a dedicated one-on-one session with your assigned qualified Dietician every single week via call or video. Weekly discussions happen before curating each week's meal plan, ensuring close feedback, course correction, and continuous progress. You also have 24/7 access to your Dietician and AI assistant via the app for quick queries." },
              { q: "What's included in the pricing?", a: "Everything you need: monthly at-home visits by trained representative, weekly Dietician sessions (call or video), personalized weekly meal plans with ingredient lists, Wellness Tracking Device (yours to keep), full mobile app access with all features, family group feature for managing multiple members, and AI assistant support. No hidden costs. No surprise charges." },
              { q: "Can I manage nutrition for my entire family?", a: "Yes! Our Family Group Feature allows you to manage nutrition for multiple family members from one account. You get consolidated weekly and daily ingredient lists for the entire household with detailed cooking instructions—simplifying grocery shopping and meal prep for everyone." },
              { q: "What if I have a specific health condition like PCOD, thyroid, or diabetes?", a: "We offer specialized programs for PCOD/PCOS, thyroid management, diabetes, pregnancy nutrition, postpartum care, cancer recovery, and elderly nutrition. These programs include condition-specific tracking, enhanced nutritional tracking, specialized meal protocols, and physician-aligned nutrition planning when needed." },
              { q: "Is the mobile app mandatory?", a: "The app is your nutrition control center where you view meal plans, track meals, log health data, and sync with your tracking device. We provide a complete walkthrough during onboarding, and it's designed to be simple and intuitive. If you're not comfortable with apps, we can also provide PDF meal plans and manage tracking via WhatsApp." },
              { q: "What happens after the 3-month onboarding period?", a: "After the initial 3-month onboarding, you transition to a monthly subscription at ₹2,499/month for general programs or ₹3,499/month for specialized programs. You continue to receive all the same benefits: monthly visits, weekly sessions, meal plans, app access, and tracking. You can cancel anytime with no long-term contract." },
              { q: "How do I get started?", a: "Simply fill out our enquiry form or call us directly. We'll connect with you within 24 hours to understand your needs, explain the process in detail, and help you choose the right program. There's no commitment required for the initial session—just honest guidance to help you decide if we're the right fit." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 last:border-0 group">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className={`w-full py-6 md:py-8 px-4 md:px-6 flex items-start md:items-center justify-between text-left transition-colors duration-300 ${activeFaq === i ? 'bg-transparent' : 'hover:bg-[#F9FAFB] rounded-xl'}`}
                  aria-expanded={activeFaq === i}
                >
                  <span className={`text-lg md:text-xl font-bold pr-6 pt-1 md:pt-0 transition-colors duration-300 flex-1 ${activeFaq === i ? 'text-[#217328]' : 'text-[#1F2937]'}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeFaq === i ? 'bg-[#217328] text-white rotate-180' : 'bg-[#F3F4F6] text-[#6B7280] group-hover:scale-105'}`}
                  >
                    {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${activeFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 md:px-8 pb-8 pt-2 pl-4 md:pl-6 border-l-4 border-[#217328] ml-4 md:ml-6 mb-4">
                    <p className="text-[#6B7280] font-medium text-base leading-[1.8]">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-16 text-center">
            <p className="text-xl font-bold text-[#1F2937] mb-3">Still have questions?</p>
            <p className="text-base text-[#6B7280] mb-8">We're here to help. Reach out and we'll get back to you within 24 hours.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => router.push('/faq')}
                className="h-[52px] px-8 bg-[#F3F4F6] text-[#1F2937] font-bold text-sm uppercase tracking-wide rounded-2xl hover:bg-[#E5E7EB] transition-colors flex items-center justify-center gap-2"
              >
                View All FAQs <ArrowRight size={16} />
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="h-[52px] px-8 bg-[#217328] text-white font-bold text-sm uppercase tracking-wide rounded-2xl hover:bg-[#1B5E20] hover:scale-102 hover:shadow-[0_4px_12px_rgba(33,115,40,0.3)] transition-all flex items-center justify-center gap-2"
              >
                Contact Support <MessageCircle size={16} />
              </button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 bg-[#F8FFF9] border border-[#E8F5E9] rounded-3xl p-8 max-w-[800px] mx-auto">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {["No Hidden Costs", "Cancel Anytime", "Privacy Guaranteed"].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#217328]" />
                  <span className="text-sm font-bold text-[#1F2937]">{t}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MANDATORY DISCLAIMER */}
      <section className="bg-gray-50 py-8 border-t border-gray-200 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            <strong>Disclaimer:</strong> Dietician At Home is a nutrition support and lifestyle coaching service. We do not provide medical diagnosis, treatment, or cures for any disease or health condition. Our services are intended to support general wellness and nutritional goals. All medical advice and decisions should be coordinated with your primary healthcare provider. Results vary by individual and are not guaranteed.
          </p>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0F172A] py-20 px-0">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A0E27] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(33,115,40,0.15),transparent_70%)] z-0" />

        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Floating Orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#217328]/15 rounded-full blur-[150px] animate-float z-0" style={{ animationDuration: '25s' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[120px] animate-float z-0" style={{ animationDuration: '20s', animationDelay: '2s' }} />
        <div className="absolute bottom-0 center w-[700px] h-[700px] bg-[#059669]/12 rounded-full blur-[180px] animate-float z-0" style={{ animationDuration: '30s', animationDelay: '-5s' }} />

        {/* Light Beams */}
        <div className="absolute top-[-20%] left-[20%] w-[300px] h-[150%] bg-gradient-to-b from-white/5 to-transparent -rotate-[30deg] blur-3xl pointer-events-none z-0" />

        {/* Main Content */}
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center flex flex-col items-center">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)] mb-8 animate-pulse-slow">
            <Sparkles size={18} className="text-[#A7F3D0]" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">Your Health Transformation Starts Here</span>
          </div>

          {/* Urgency Banner */}
          <div className="mb-10 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#EF4444]/15 border border-[#EF4444]/30">
            <Clock size={20} className="text-[#FCA5A5] animate-pulse" />
            <span className="text-sm font-bold text-white">Limited slots available this month • Book your spot now</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-[72px] font-black text-white leading-[1.1] tracking-tight mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            Ready to Transform <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A7F3D0]">Your Health?</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xl md:text-[22px] text-white/80 font-normal leading-relaxed max-w-[700px] mb-14">
            Join 500+ clients who chose real progress over shortcuts with expert dieticians in Gurgaon. Professional guidance from qualified dieticians near me. Human touch. Technology-enabled precision. All delivered to your doorstep by trusted dieticians in Gurgaon.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto mb-14">
            <button
              onClick={() => router.push('/contact')}
              className="group relative h-[72px] px-14 bg-gradient-to-r from-[#217328] to-[#1B5E20] rounded-[20px] flex items-center justify-center gap-3 shadow-[0_16px_40px_rgba(33,115,40,0.5)] hover:shadow-[0_20px_50px_rgba(33,115,40,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-base font-extrabold uppercase tracking-wide text-white">Get Started Today</span>
              <ArrowRight size={24} className="text-white group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-[20px] ring-2 ring-white/20 group-hover:ring-white/40 transition-all opacity-0 group-hover:opacity-100" />
            </button>

            <button
              onClick={() => router.push('/contact')}
              className="group h-[72px] px-12 bg-transparent border-2 border-white/40 rounded-[20px] flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/60 hover:backdrop-blur-sm transition-all duration-300"
            >
              <Calendar size={24} className="text-white" />
              <span className="text-base font-extrabold uppercase tracking-wide text-white">Schedule Free session</span>
            </button>
          </div>

          {/* Social Proof Avatars */}
          {/* <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
              ].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-[3px] border-[#0F172A] bg-gray-300 overflow-hidden">
                  <Image
                    src={src}
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <span className="text-white font-bold text-base">Join 500+ clients</span>
              <span className="text-white/60 text-sm">who transformed their health</span>
            </div>
          </div> */}

          {/* Divider Title */}
          <div className="w-full max-w-[900px] mb-8 pt-12 border-t border-white/10">
            <p className="text-white/50 font-bold text-base uppercase tracking-widest mb-0">Or reach out directly</p>
          </div>

          {/* Contact Grid */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[900px]">
            {/* Phone Card */}
            <Link
              href="tel:+919876543210"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/25 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-[#A7F3D0]" />
              </div>
              <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Call Us</span>
              <span className="text-lg font-bold text-white">+91 98765 43210</span>
            </Link>

            {/* Email Card */}
            <Link
              href="mailto:care@Dieticianathome.com"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/25 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-[#A7F3D0]" />
              </div>
              <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Email Us</span>
              <span className="text-lg font-bold text-white">care@Dieticianathome.com</span>
            </Link>

            {/* WhatsApp Card */}
            <Link
              href="https://wa.me/+919899480775?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20Dietician%20at%20Home's%20nutrition%20care%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information?"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/25 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="text-[#A7F3D0] group-hover:text-green-400 transition-colors" />
              </div>
              <span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">WhatsApp</span>
              <span className="text-lg font-bold text-white">Chat Now</span>
            </Link>
          </div>


          {/* Trust Signals */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-14 gap-y-4">
            {[
              "No Hidden Costs",
              "Cancel Anytime",
              "Privacy Guaranteed",
              "Active Community"
            ].map((signal, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#A7F3D0]" />
                <span className="text-sm font-bold text-white/70">{signal}</span>
              </div>
            ))}
          </div>

          {/* Testimonial Snippet (Desktop Only) */}
          <div className="hidden lg:block absolute bottom-20 left-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-[280px] animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-[#F59E0B] fill-[#F59E0B]" />)}
            </div>
            <p className="text-white text-sm italic mb-2">"Great investment in my health journey! The home visits make it so easy."</p>
            <p className="text-white/60 text-xs font-bold uppercase tracking-wide">- Priya S.</p>
          </div>


        </div>
      </section>

      {/* SECTION 14: MANDATORY DISCLAIMER */}
      <section className="py-8 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> Dietician At Home provides non-medical, lifestyle-based nutrition guidance. We do not diagnose, treat, or cure medical conditions. Our services are intended to support healthy eating habits and daily nutrition routines, alongside any medical care advised by a healthcare professional.
          </p>
        </div>
      </section>

      {/* CSS for custom components */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.15);
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes fade-in-from-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-from-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-from-top-right {
          from { opacity: 0; transform: translate(20px, -20px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        
        /* Styled scrollbar for specialized programs */
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #217328;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #1B5E20;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #217328 #f1f1f1;
        }
      `}</style>
    </div >
  );
};

export default Home;

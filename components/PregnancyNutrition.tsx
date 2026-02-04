'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Baby,
  Sprout,
  ArrowRight,
  Utensils,
  Zap,
  Apple,
  Wind,
  Droplet,
  AlertCircle
} from 'lucide-react';

const PregnancyNutrition: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTrimester, setActiveTrimester] = useState<number>(1);
  const router = useRouter();

  const trimesterData = [
    {
      id: 1,
      title: "First Trimester",
      weeks: "Weeks 1-12",
      focus: "Nausea Support & Essentials",
      icon: <Sprout className="text-[#217328]" />,
      desc: "Focus on Folate-rich foods and gentle, high-protein strategies to help manage morning sickness.",
      points: ["Folate Awareness", "Morning Sickness Strategy", "Hydration Support"]
    },
    {
      id: 2,
      title: "Second Trimester",
      weeks: "Weeks 13-26",
      focus: "Growth & Energy",
      icon: <Droplet className="text-blue-500" />,
      desc: "Increased iron focus and energy-sustaining meal patterns to support growth.",
      points: ["Iron-Rich Foods", "Calcium Sources", "Energy Balance"]
    },
    {
      id: 3,
      title: "Third Trimester",
      weeks: "Weeks 27-40",
      focus: "Preparation",
      icon: <Baby className="text-rose-500" />,
      desc: "Focus on nutrient density in smaller meals and preparing for breastfeeding support.",
      points: ["Omega-3 Sources", "Meal Prep Guidance", "Postpartum Planning"]
    }
  ];

  return (
    <div className="bg-[#FCFBFA] min-h-screen text-slate-800 font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: WHAT THIS PROGRAM SUPPORTS */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white pb-[60px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pregency-nutrition-hero.jpg"
            alt="Pregnancy nutrition support"
            fill
            className="object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-[#E8F5E9]/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in">
            <nav className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-[#217328]">
              <Link href="/" className="hover:text-[#1B5E20] transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span>Our Programs</span>
              <span className="text-slate-300">/</span>
              <span className="text-[#217328]">Pregnancy Nutrition</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              Nutrition Support for Healthy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] via-[#2E7D32] to-[#43A047]">Pregnancy with a Clinical Dietician Near You</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Specialized trimester-specific nutrition guidance to support you and your baby's health through every stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => router.push('/contact')} className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-lg shadow-2xl shadow-[#217328]/20 hover:bg-[#1B5E20] hover:-translate-y-1 transition-all active:scale-95">
                Check Eligibility
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E8F5E9] rounded-full blur-[100px] opacity-40"></div>
            <div className="relative z-10 rounded-[80px] overflow-hidden shadow-3xl border-[12px] border-white transform rotate-2">
              <Image
                src="/pregency-nutrition-hero.jpg"
                alt="Woman holding fresh produce"
                width={800}
                height={520}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO THIS IS FOR */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Who This Program Is For – Those Looking for Nutritionists in Gurgaon</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Our pregnancy nutrition program is designed for expectant mothers who want professional guidance on their diet.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "First-time mothers seeking nutritional clarity",
              "Those diagnosed with Gestational Diabetes",
              "Mothers managing pregnancy nausea",
              "Anyone wanting structured meal planning"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="text-[#217328] w-5 h-5 shrink-0" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW NUTRITION SUPPORT HELPS */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">How Nutrition <span className="text-[#217328]">Helps</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-8">
              We focus on nutrient density, managing common symptoms through food, and preparing for postpartum.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Essential Nutrients", icon: <Zap />, desc: "Focus on Iron, Calcium, and Folate rich foods." },
              { title: "Symptom Support", icon: <Wind />, desc: "Strategies to manage nausea and heartburn via diet." },
              { title: "Healthy Habits", icon: <Apple />, desc: "Building sustainable eating patterns for long-term health." },
              { title: "Postpartum Prep", icon: <Sprout />, desc: "Nourishing your body for recovery and breastfeeding." },
              { title: "Energy Levels", icon: <Heart />, desc: "Balanced meals to support stable energy throughout the day." },
              { title: "Food Safety", icon: <ShieldCheck />, desc: "Guidance on safe food choices during pregnancy." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-[40px] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#217328] group-hover:bg-[#217328] group-hover:text-white transition-colors shadow-sm">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-base leading-6 text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT THIS IS NOT (LIMITATIONS) */}
      <section className="py-16 px-6 bg-red-50/50 border-y border-red-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-red-800 font-black uppercase tracking-widest text-sm">
            <AlertCircle size={18} /> Important Limitation
          </div>
          <h2 className="text-2xl font-bold text-red-900">What This Program Is NOT</h2>
          <p className="text-lg text-red-800/80 leading-relaxed max-w-4xl mx-auto">
            This is a non-medical nutrition support program. We do not provide medical care, prenatal checkups, or medical advice. Dietary changes are intended to support general well-being only. Even when consulting a clinical dietician near me, you must continue regular visits with your OB/GYN for all medical needs.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW CARE IS DELIVERED */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#217328] rounded-[100px] rotate-6 scale-95 opacity-5"></div>
            <Image
              src="/focus-on-growing.jpg"
              alt="Care delivered at home"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[100px] shadow-2xl object-cover z-10"
            />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Care Delivered <span className="text-[#217328]">to You</span></h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Weekly Check-ins</h4>
                  <p className="text-slate-500 mt-2">Virtual sessions to adjust your meal plan as your pregnancy progresses.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Home visits</h4>
                  <p className="text-slate-500 mt-2">For tracking weight and other wellness parameters, our team comes to you.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Doctor Coordination</h4>
                  <p className="text-slate-500 mt-2">We can share your nutrition reports with your doctor to ensure aligned care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trimester Journey (Retained for value) */}
      <section className="py-24 px-6 bg-[#FCFAFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-black">Trimester <span className="text-[#217328]">Focus</span></h2>
          </div>
          <div className="flex justify-center gap-4 mb-16">
            {trimesterData.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTrimester(t.id)}
                className={`px-8 py-4 rounded-2xl font-black text-[12px] uppercase tracking-widest transition-all ${activeTrimester === t.id ? 'bg-[#217328] text-white shadow-xl' : 'bg-white text-slate-400 hover:bg-[#E8F5E9]'}`}
              >
                Trimester {t.id}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[60px] p-12 lg:p-20 shadow-sm border border-slate-100 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-slate-900">{trimesterData[activeTrimester - 1].title}</h3>
              <p className="text-[#217328] font-bold text-xs uppercase tracking-widest">{trimesterData[activeTrimester - 1].weeks}</p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">{trimesterData[activeTrimester - 1].desc}</p>
              <div className="space-y-4">
                {trimesterData[activeTrimester - 1].points.map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#217328] w-5 h-5" />
                    <span className="font-bold text-slate-700">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[300px]">
              <Image
                src={`https://images.unsplash.com/photo-${activeTrimester === 1 ? "1543339308-43e59d6b73a6" : activeTrimester === 2 ? "1547592166-23ac45744acd" : "1467003909585-2f8a72700288"}?auto=format&fit=crop&q=80&w=800`}
                alt="Healthy meal"
                fill
                className="rounded-[40px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16">Common <span className="text-[#217328]">Questions</span></h2>
          <div className="space-y-4">
            {[
              { q: "Is this medical advice?", a: "No. This program provides nutritional guidance to support a healthy lifestyle and does not replace your OB/GYN, even when you are consulting a clinical dietician near me." },
              { q: "Do you support Gestational Diabetes?", a: "Yes, we can provide specific nutrition plans to help manage blood sugar levels alongside your doctor's advice." },
              { q: "How often do we meet?", a: " sessions are weekly via video or phone, with 24/7 chat support." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-[24px] border border-slate-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg text-slate-800">{faq.q}</span>
                  <Plus size={18} className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 font-medium pt-4 border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-black">Support for Your Journey</h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">Professional nutrition care for a healthy pregnancy.</p>
          <button onClick={() => router.push('/contact')} className="px-10 py-5 bg-[#217328] text-white rounded-[32px] font-bold text-lg hover:scale-105 transition-all">
            Contact Us
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

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PregnancyNutrition;

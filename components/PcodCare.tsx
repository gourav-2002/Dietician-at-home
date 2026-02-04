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
  AlertCircle,
  Flower2,
  RotateCcw,
  Activity,
  Zap,
  Sun
} from 'lucide-react';

const PcodCare: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const symptomMap = [
    { symptom: "Cycle Support", solution: "Insulin-sensitive meal timing to support natural rhythms.", icon: <RotateCcw className="text-purple-400" /> },
    { symptom: "Weight Management", solution: "Low-glycemic strategies to support metabolic health.", icon: <Activity className="text-teal-400" /> },
    { symptom: "Skin Health", solution: "Nutrient-rich foods to support skin vitality.", icon: <Zap className="text-amber-400" /> },
    { symptom: "Energy Levels", solution: "Balanced macronutrients to prevent energy crashes.", icon: <Sun className="text-orange-400" /> }
  ];

  return (
    <div className="bg-[#FAF9FF] min-h-screen text-slate-800 font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: WHAT THIS PROGRAM SUPPORTS */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white pb-[60px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#217328_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=1920"
            alt="Wellness support background"
            fill
            className="object-cover opacity-5"
          />
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
              <span className="text-[#217328]">PCOD/PCOS Support</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              Nutrition Support for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] via-[#2E7D32] to-[#43A047]"> Hormonal Health by the Best Dietician in Gurgaon</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium">
              This program provides specialized nutrition guidance to support women managing PCOD or PCOS symptoms through lifestyle and dietary adjustments.

            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => router.push('/contact')} className="px-6 py-4 bg-[#217328] text-white rounded-3xl font-bold text-lg shadow-2xl shadow-[#217328]/20 hover:bg-[#1B5E20] hover:-translate-y-1 transition-all active:scale-95">
                Check Eligibility
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E8F5E9] rounded-full blur-[100px] opacity-40"></div>
            <div className="relative z-10 rounded-[80px] overflow-hidden shadow-3xl border-[12px] border-white transform rotate-2">
              <Image
                src="/hormonal-harmony.jpg"
                alt="Woman enjoying healthy lifestyle"
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
          <h2 className="text-3xl font-black text-slate-900 mb-6">Who This Is For – Those Looking for a Good Dietician Near Me</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Our nutrition support is designed for women who have been diagnosed with PCOD or PCOS and are seeking lifestyle guidance.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Women managing irregular cycles",
              "Those addressing insulin resistance concerns",
              "Individuals seeking weight management support",
              "Anyone looking for anti-inflammatory nutrition"
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
              Our approach focuses on stabilizing blood sugar, managing inflammation, and supporting gut health through food choices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {symptomMap.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-lg transition-all border border-slate-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-6">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-lg font-black mb-3">{s.symptom}</h4>
                <p className="text-base text-slate-500 font-medium leading-relaxed">{s.solution}</p>
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
            This program is strictly for nutrition support and lifestyle management.
            <strong> We do not diagnose, treat, cure, or manage PCOD, PCOS, or any other medical condition. </strong>
            Our dieticians provide dietary recommendations to support general health. Even when working with the best dietician in Gurgaon, you must continue to follow the advice of your gynecologist or endocrinologist.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW CARE IS DELIVERED */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#217328] rounded-[100px] rotate-6 scale-95 opacity-5"></div>
            <Image
              src="/focus-on-healing.jpg"
              alt="Dietician session"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[100px] shadow-2xl object-cover z-10 transition-all duration-700"
            />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Supported <span className="text-[#217328]">At Home</span></h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Expert Guidance</h4>
                  <p className="text-slate-500 mt-2">Weekly sessions with a Dietician who understands hormonal health nutrition.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Privacy & Comfort</h4>
                  <p className="text-slate-500 mt-2">Discussions and visits happen in the privacy of your home.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Education First</h4>
                  <p className="text-slate-500 mt-2">We teach you how different foods affect your body so you can make empowered choices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICE SCOPE & WHAT WE PROVIDE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-6">
            Service Scope & <span className="text-[#217328]">What We Provide</span>
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Dietician at Home is a professional nutrition care service that delivers personalized meal planning,
            dietary guidance, and wellness tracking directly to your location. Our services include:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Monthly At-Home Visits",
                desc: "A trained field representative visits your home or office with digital wellness tools."
              },
              {
                title: "Weekly Dietician sessions",
                desc: "One-on-one video or phone sessions with a qualified dietician."
              },
              {
                title: "Personalized Meal Plans",
                desc: "Custom weekly meal plans tailored to your health goals, preferences, and specific needs."
              },
              {
                title: "Mobile App Access",
                desc: "Track meals, view plans, log progress, and communicate with your dietician through our dedicated app."
              },
              {
                title: "Wellness Tracking Device",
                desc: "A Bluetooth-enabled smart scale provided for accurate weekly parameter tracking."
              },
              {
                title: "Family Group Management",
                desc: "Coordinated nutrition care for multiple family members under one program."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[#FDFEFE]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Common <span className="text-[#217328]">Questions</span></h2>
          <div className="space-y-4">
            {[
              { q: "Is this a treatment for PCOD/PCOS?", a: "No. This is a nutrition and lifestyle support program. We do not provide medical treatment or prescribe medication." },
              { q: "Do I need to stop seeing my doctor?", a: "Absolutely not. We work alongside your medical team to support the lifestyle changes they often recommend, even when you are consulting a good dietician near me." },
              { q: "Do you create specific meal plans?", a: "Yes, we create personalized meal plans designed to support blood sugar stability and reducing inflammation." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E8F5E9] transition-colors"
                >
                  <span className="font-bold text-lg text-slate-800 pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-50 text-[#217328] flex items-center justify-center transition-transform shadow-sm ${openFaq === i ? 'rotate-45' : ''}`}>
                    <Plus size={18} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t border-slate-50 pt-4">
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
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">Support Your <br /> <span className="text-[#217328]">Hormonal Health.</span></h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-snug">
            Expert nutrition guidance delivered to your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <button onClick={() => router.push('/contact')} className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-xl shadow-2xl shadow-[#217328]/20 hover:scale-105 transition-all">
              Contact Us
            </button>
          </div>
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
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(33, 115, 40, 0.3);
        }
      `}</style>
    </div>
  );
};

export default PcodCare;

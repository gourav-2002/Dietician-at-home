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
  Zap,
  Users,
  AlertCircle,
  Stethoscope
} from 'lucide-react';

const PreconceptionCare: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const timelineSteps = [
    { period: "Phase 1", title: "visit", focus: "Nutrient Status Check", icon: <Sprout className="text-[#217328]" /> },
    { period: "Phase 2", title: "Optimization", focus: "Lifestyle & Habits", icon: <Zap className="text-amber-500" /> },
    { period: "Phase 3", title: "Readiness", focus: "Maintenance", icon: <Heart className="text-rose-500" /> }
  ];

  return (
    <div className="bg-[#FCFBFA] min-h-screen text-slate-800 font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: WHAT THIS PROGRAM SUPPORTS */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white pb-[60px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1920"
            alt="Couple planning pregnancy"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-[#E8F5E9]/30"></div>
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
              <span className="text-[#217328]">Preconception Care</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              Prepare for Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] via-[#43A047] to-[#66BB6A]">Healthy Journey with the Best Dietician in Gurgaon</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Nutrition support to optimize your health before pregnancy. Prepare your body for the journey ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => router.push('/contact')} className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-lg shadow-2xl shadow-[#217328]/20 hover:bg-[#1B5E20] hover:-translate-y-1 transition-all active:scale-95">
                Start Planning
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E8F5E9] rounded-full blur-[100px] opacity-40"></div>
            <div className="relative z-10 rounded-[80px] overflow-hidden shadow-3xl border-[12px] border-white transform rotate-2">
              <Image
                src="/health-journey-hero.jpg"
                alt="Couple smiling"
                width={800}
                height={620}
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
          <h2 className="text-3xl font-black text-slate-900 mb-6">Who This Program Is For – Those Looking for a Medical Dietician Nearby</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            This program is for couples or individuals planning to conceive in the near future.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Couples planning their first pregnancy",
              "Those wanting to improve general health before conceiving",
              "Partners involved in family planning",
              "Anyone seeking nutritional guidance for fertility support"
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
            <h2 className="text-3xl md:text-5xl font-black">How Nutrition <span className="text-[#217328]">Helps</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-xl leading-8">
              Good nutrition lays the foundation. We focus on nutrient sufficiency and metabolic health.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Nutrient Stores", desc: "Building up iron, calcium, and folate levels." },
              { icon: <Sprout />, title: "Healthy Weight", desc: "Strategies to reach a healthy weight before pregnancy." },
              { icon: <Heart />, title: "Metabolic Health", desc: "Supporting healthy blood sugar levels through diet." },
              { icon: <Users />, title: "Partner Support", desc: "Nutrition guidance for both partners." },
              { icon: <ShieldCheck />, title: "Lifestyle Habits", desc: "Establishing healthy routines early." },
              { icon: <Baby />, title: "Early Development", desc: "Folate-rich foods to support early neural development." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#217328] group-hover:bg-[#217328] group-hover:text-white transition-colors shadow-sm">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-base leading-6 text-slate-500 leading-relaxed font-medium">{item.desc}</p>
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
          <p className="text-lg text-red-800/80 leading-relaxed max-w-2xl mx-auto">
            This is a nutritional support program. We do not diagnose infertility, treat medical conditions, or guarantee conception. Even when consulting the best dietician in Gurgaon, you must seek medical advice and treatment from a qualified fertility specialist or OB/GYN.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW CARE IS DELIVERED */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#217328] rounded-[100px] rotate-3 scale-105 opacity-5"></div>
            <Image
              src="/conception-readiness.jpg"
              alt="Preconception session"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[100px] shadow-2xl object-cover z-10"
            />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Convenient <span className="text-[#217328]">Support</span></h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">At-Home visits</h4>
                  <p className="text-slate-500 mt-2">We check your basic body metrics and other markers from the comfort of home.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Diet Review</h4>
                  <p className="text-slate-500 mt-2">We analyze your current eating habits and suggest optimizations.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Partner Plans</h4>
                  <p className="text-slate-500 mt-2">We can create nutrition plans for both partners to support shared health goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline (Retained) */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[100px] mx-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black mb-6">Our Support Framework</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-xl leading-8">A structured approach to helping you prepare.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {timelineSteps.map((s, i) => (
              <div key={i} className="relative z-10 text-center space-y-6">
                <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mx-auto transition-transform hover:scale-110">
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{s.title}</h4>
                  <p className="text-slate-500 text-base font-medium">{s.focus}</p>
                </div>
              </div>
            ))}
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
            Dietician at Home is a professional nutrition care service that delivers personalized meal planning, dietary guidance, and wellness tracking directly to your location, supported by the best dietician in Gurgaon. Our services include:
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
              { q: "How long is this program?", a: "We typically recommend starting 3-6 months before you plan to conceive." },
              { q: "Do you guarantee I will get pregnant?", a: "No. Conception depends on many factors. We support your nutritional health, but cannot guarantee outcomes, even when you are consulting a medical dietician near me." },
              { q: "Do nutritional needs apply to men too?", a: "Yes. Sperm health is influenced by diet. We recommend both partners optimize their nutrition." },
              { q: "Can I do this if I'm doing IVF?", a: "Yes. Good nutrition can support your body during IVF treatment, in session with your fertility specialist." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-[#E8F5E9] transition-colors"
                >
                  <span className="font-bold text-lg text-slate-800 pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-50 text-[#217328] flex items-center justify-center transition-transform shadow-sm ${openFaq === i ? 'rotate-45' : ''}`}>
                    <Plus size={18} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed border-t border-slate-50 pt-6">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black">Ready to Start?</h2>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Support your future family with expert nutrition.</p>
          <button onClick={() => router.push('/contact')} className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-xl shadow-2xl hover:scale-105 transition-all">
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

export default PreconceptionCare;

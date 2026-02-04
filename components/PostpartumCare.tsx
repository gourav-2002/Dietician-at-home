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
  Flower2,
  Zap,
  Sun,
  Brain,
  Droplet,
  Coffee,
  AlertCircle
} from 'lucide-react';

const PostpartumCare: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const recoveryPhases = [
    {
      title: "Immediate Recovery",
      weeks: "Weeks 0-6",
      focus: "Healing Support",
      icon: <Flower2 className="text-[#217328]" />,
      desc: "Gentle nutrition to support tissue recovery and replenishment after birth."
    },
    {
      title: "Energy & Supply",
      weeks: "Weeks 6-12",
      focus: "Energy Restoration",
      icon: <Zap className="text-amber-400" />,
      desc: "Calorie and hydration strategies to support breastfeeding and manage fatigue."
    },
    {
      title: "Long-term Wellness",
      weeks: "3-12 Months",
      focus: "Strength & Balance",
      icon: <Sun className="text-[#217328]" />,
      desc: "Gradual support for returning to a healthy weight and replenishing nutrient stores."
    }
  ];

  return (
    <div className="bg-[#FFFBFA] min-h-screen text-slate-800 font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: WHAT THIS PROGRAM SUPPORTS */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1920"
            alt="Postpartum support"
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
              <span className="text-[#217328]">Postpartum Care</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              Nutrition Support for Recovery <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] via-[#2E7D32] to-[#43A047]">& Strength with a Medical Dietician Near You</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Expert nutrition guidance to support your body's healing and energy needs during the postpartum period.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => router.push('/contact')} className="px-6 py-4 bg-[#217328] text-white rounded-[32px] font-bold text-lg shadow-2xl shadow-[#217328]/20 hover:bg-[#1B5E20] hover:-translate-y-1 transition-all active:scale-95">
                Start Recovery Plan
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E8F5E9] rounded-full blur-[100px] opacity-40"></div>
            <div className="relative z-10 rounded-[80px] overflow-hidden shadow-3xl border-[12px] border-white transform rotate-2">
              <Image
                src="/postpartum-care.jpg"
                alt="Mother and baby"
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
          <h2 className="text-3xl font-black text-slate-900 mb-6">Who This Program Is For – Those Looking for a Leading Dietician Clinic in Gurgaon</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            This program is for new mothers seeking nutritional support during the "Fourth Trimester" and beyond.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Mothers recovering from childbirth",
              "Breastfeeding moms seeking lactation support",
              "Those experiencing postpartum fatigue",
              "Mothers wanting structured meal planning"
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
              Your body needs specific nutrients to heal and produce milk. We provide the roadmap.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Droplet />, title: "Lactation Support", desc: "Hydration and nutrient foods to support milk supply." },
              { icon: <Coffee />, title: "Energy Management", desc: "Balanced meals to help sustain energy despite sleep loss." },
              { icon: <Brain />, title: "Mood Support", desc: "Nutrients that support brain health and emotional well-being." },
              { icon: <ShieldCheck />, title: "Tissue Healing", desc: "Protein and vitamins to support recovery from birth." }
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
          <p className="text-lg text-red-800/80 leading-relaxed max-w-4xl mx-auto">
            This program provides nutritional support only and does not replace medical care. We do not offer medical advice, diagnosis, or treatment for postpartum depression or medical complications. If you are working with a medical dietician nearby, you should still contact your doctor immediately for any physical or mental health concerns.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW CARE IS DELIVERED */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#E8F5E9] rounded-[100px] rotate-3 scale-105 opacity-20"></div>
            <Image
              src="/postpartum-care-restore.jpg"
              alt="Care at home"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[100px] shadow-2xl object-cover z-10"
            />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">We Come to <span className="text-[#217328]">You</span></h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Virtual Check-ins</h4>
                  <p className="text-slate-500 mt-2">Flexible video calls that work around your baby's schedule.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Home Visits</h4>
                  <p className="text-slate-500 mt-2">Our team can visit for weight checks and visits so you don't have to travel.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Practical Meal Plans</h4>
                  <p className="text-slate-500 mt-2">Easy, "one-handed" meal ideas designed for busy new parents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Phases (Retained) */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[60px] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black">The Recovery Timeline</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recoveryPhases.map((phase, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                  {phase.icon}
                </div>
                <p className="text-[#4CAF50] text-[12px] font-black uppercase tracking-widest mb-2">{phase.weeks}</p>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-slate-400 text-base leading-6">{phase.desc}</p>
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
            Dietician at Home is a professional nutrition care service that delivers personalized meal planning, dietary guidance, and wellness tracking directly to your location, supported by a medical dietician near me. Our services include:
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Common <span className="text-[#217328]">Questions</span></h2>
          <div className="space-y-4">
            {[
              { q: "Is it safe to diet while breastfeeding?", a: "We do not recommend restrictive dieting. Instead, we focus on nutrient-dense nutrition to support milk supply while helping you return to a healthy weight naturally, under the guidance of a trusted dietician clinic in Gurgaon." },
              { q: "Do you provide recipes?", a: "Yes, we provide simple, nutritious recipes that are quick to prepare." },
              { q: "Can you help with C-section recovery?", a: "Yes, we include foods rich in collagen, vitamin C, and protein to support tissue healing." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-[#E8F5E9] transition-colors"
                >
                  <span className="font-bold text-lg text-slate-800 pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white text-[#217328] flex items-center justify-center transition-transform shadow-sm ${openFaq === i ? 'rotate-45' : ''}`}>
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
          <h2 className="text-4xl md:text-6xl font-black">Support Your Recovery</h2>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Expert care for you, so you can care for your baby.</p>
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

export default PostpartumCare;

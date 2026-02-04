'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Zap,
  Scale,
  Wind,
  Thermometer,
  Brain,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Plus,
  ArrowRight,
  Activity,
  Heart
} from 'lucide-react';

const ThyroidManagement: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeType, setActiveType] = useState<'hypo' | 'hyper' | 'hashimoto'>('hypo');
  const router = useRouter();

  const thyroidTypes = {
    hypo: {
      title: "Hypothyroidism Support",
      focus: "Metabolic Friendly Nutrition",
      desc: "Managing nutrition for an underactive thyroid. We focus on nutrient density to support your energy levels.",
      points: ["Selenium & Zinc Sources", "Energy Balance", "Anti-inflammatory Foods"]
    },
    hyper: {
      title: "Hyperthyroidism Support",
      focus: "Calming Nutrition",
      desc: "Nutritional strategies to help maintain weight and support stable energy levels.",
      points: ["Muscle Maintenance", "Bone Health Support", "Nutrient Replenishment"]
    },
    hashimoto: {
      title: "Hashimoto's Support",
      focus: "Immune Health",
      desc: "Focusing on gut health and anti-inflammatory nutrition to support immune function.",
      points: ["Gut Friendly Foods", "Anti-inflammatory Diet", "Trigger Avoidance"]
    }
  };

  return (
    <div className="bg-[#FCFBFF] min-h-screen text-slate-800 font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: WHAT THIS PROGRAM SUPPORTS */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#217328_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
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
              <span className="text-[#217328]">Thyroid Nutrition</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              <span className="text-transparent bg-clip-text bg-[#217328]">Thyroid Management Nutrition with a Good Dietician in Gurgaon</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Specialized nutrition guidance to support metabolism and energy levels for individuals with thyroid conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => router.push('/contact')} className="px-10 py-5 bg-[#217328] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#217328]/20 hover:bg-[#1B5E20] hover:-translate-y-1 transition-all">
                Start My Plan
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E8F5E9] rounded-full blur-[100px] opacity-40"></div>
            <div className="relative z-10 rounded-[80px] overflow-hidden shadow-3xl border-[12px] border-white transform rotate-2">
              <Image
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800"
                alt="Healthy meal for thyroid support"
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
          <h2 className="text-3xl font-black text-slate-900 mb-6">Who This Program Is For – Those Looking for a Dietitian Near Me for Weight Loss</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Our thyroid nutrition support is designed for individuals diagnosed with thyroid conditions who want to optimize their diet.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Individuals with Hypothyroidism",
              "Those with Hyperthyroidism",
              "Diagnosed Hashimoto's Thyroiditis",
              "Anyone seeking metabolic nutrition support"
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
              A well-planned diet provides the essential nutrients needed for thyroid function and overall well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Energy Support", desc: "Nutrient-dense foods to help combat fatigue." },
              { icon: <Scale />, title: "Weight Management", desc: "Strategies to support a healthy metabolism." },
              { icon: <Thermometer />, title: "Metabolic Health", desc: "Foods that support your body's metabolic processes." },
              { icon: <Brain />, title: "Mental Clarity", desc: "Balanced nutrition to support focus and reduce brain fog." },
              { icon: <ShieldCheck />, title: "Immune Support", desc: "Anti-inflammatory foods to support immune health." },
              { icon: <Heart />, title: "Overall Wellness", desc: "Holistic nutrition for long-term health." }
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
            This is a nutrition support program, NOT a medical treatment.
            <strong> We do not diagnose thyroid conditions, prescribe medication, or treat thyroid disease. </strong>
            Even while consulting a good dietician in Gurgaon, you must continue to follow your endocrinologist’s advice and take your medication as prescribed.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW CARE IS DELIVERED */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#217328] rounded-[100px] rotate-6 scale-95 opacity-5"></div>
            <Image
              src="/thyroid-management.jpg"
              alt="Home care service"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[100px] shadow-2xl object-cover z-10"
            />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Support at <span className="text-[#217328]">Home</span></h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Weekly Guidance</h4>
                  <p className="text-slate-500 mt-2">Regular sessions to adapt your nutrition plan to how you are feeling.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Lifestyle Coaching</h4>
                  <p className="text-slate-500 mt-2">Tips on sleep, stress management, and movement to support your health.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Healthcare Alignment</h4>
                  <p className="text-slate-500 mt-2">We ensure your nutrition plan supports your doctor's plan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies (Retained) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black">Strategies for Your condition</h2>
          </div>

          <div className="flex justify-center gap-4 mb-16">
            {(['hypo', 'hyper', 'hashimoto'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeType === type ? 'bg-[#217328] text-white shadow-xl' : 'bg-slate-50 text-slate-400'}`}
              >
                {type === 'hypo' ? 'Hypo' : type === 'hyper' ? 'Hyper' : "Hashimoto's"}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 rounded-[80px] p-12 lg:p-20 shadow-sm border border-slate-100">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-3xl font-black text-slate-900">{thyroidTypes[activeType].title}</h3>
              <p className="text-[#217328] font-bold uppercase tracking-widest">{thyroidTypes[activeType].focus}</p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">{thyroidTypes[activeType].desc}</p>
              <div className="grid sm:grid-cols-3 gap-4 pt-8">
                {thyroidTypes[activeType].points.map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <CheckCircle2 className="text-[#217328]" />
                    <span className="font-bold text-slate-700 text-sm">{p}</span>
                  </div>
                ))}
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
            Dietician at Home is a professional nutrition care service that delivers personalized meal planning, dietary guidance, and wellness tracking directly to your location, supported by a good dietician in Gurgaon. Our services include:
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">Common <span className="text-[#217328]">Questions</span></h2>
          <div className="space-y-4">
            {[
              { q: "Is this a substitute for medication?", a: "No. Nutrition supports your health, but it does not replace thyroid hormone medication. Always follow your doctor's prescription." },
              { q: "Do you treat Hashimoto's?", a: "We do not treat the disease itself. We provide nutritional support to help manage inflammation and support gut health, which can improve overall well-being, even for those searching for a dietitian near me for weight loss." },
              { q: "Do I need to be gluten-free?", a: "Not necessarily. We personalize your plan. Some individuals report feeling better without gluten, but we make changes based on your specific needs." }
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
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black">Support Your Health</h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">Professional nutrition guidance for your thyroid journey.</p>
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

export default ThyroidManagement;

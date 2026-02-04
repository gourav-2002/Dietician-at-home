'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Activity,
  Target,
  ShieldCheck,
  CheckCircle2,
  Plus,
  ArrowRight,
  Heart,
  Zap,
  Droplets,
  AlertCircle,
  Smartphone,
  BarChart3,
  Scale
} from 'lucide-react';

const DiabetesManagement: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const types = [
    {
      title: "Type 1 Support",
      focus: "Carb Counting Guidance",
      icon: <Droplets className="text-blue-500" />,
      desc: "Support for accurate carbohydrate counting to assist with your insulin dosing strategy (as prescribed by your doctor).",
      points: ["Carb Counting", "Activity Adjustments", "Hypo Awareness"]
    },
    {
      title: "Type 2 Support",
      focus: "Lifestyle Management",
      icon: <Zap className="text-[#217328]" />,
      desc: "Focus on weight management and low-glycemic meal planning to support insulin sensitivity.",
      points: ["Glycemic Load Control", "Weight Management", "Sustainable Habits"]
    },
    {
      title: "Pre-Diabetes",
      focus: "Prevention Focus",
      icon: <Activity className="text-orange-500" />,
      desc: "Lifestyle interventions aimed at supporting healthy blood sugar ranges.",
      points: ["Whole Food Nutrition", "Regular Activity", "Routine Building"]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: WHAT THIS PROGRAM SUPPORTS */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#F1F8E9] pb-[60px]">
        <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#217328_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <nav className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-[#217328]">
              <Link href="/" className="hover:text-[#1B5E20] transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span>Our Programs</span>
              <span className="text-slate-300">/</span>
              <span className="text-[#217328]">Diabetes Nutrition</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              Nutrition Support for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] to-[#43A047]"> Blood Sugar Goals with a Dietitian in Gurgaon</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Specialized nutrition guidance to support the management of diabetes through diet and lifestyle, complementing your medical care.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => router.push('/contact')} className="px-10 py-5 bg-[#217328] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#217328]/20 hover:bg-[#1B5E20] hover:-translate-y-1 transition-all">
                Start My Plan
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#E8F5E9] rounded-full blur-3xl opacity-50"></div>
            <Image
              src="/diabets-managments.jpg"
              alt="Healthy lifestyle for diabetes support"
              width={1200}
              height={800}
              className="rounded-[60px] shadow-2xl relative z-10 border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO THIS IS FOR */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Who This Program Is For – Those Looking for a Weight Loss Dietician Near Me</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            This program provides support for individuals managing diabetes or pre-diabetes who want to improve their nutrition.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Individuals with Type 2 Diabetes seeking weight management",
              "Type 1 Diabetics needing help with carb counting",
              "Those diagnosed with Pre-Diabetes",
              "Anyone looking for low-glycemic meal planning"
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
              Strategic eating habits play a crucial role in managing blood sugar levels and overall metabolic health.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Droplets />, title: "Glycemic Stability", desc: "Understanding how different foods affect your blood sugar." },
              { icon: <Zap />, title: "Energy Management", desc: "Balanced meals to prevent energy crashes." },
              { icon: <Target />, title: "Weight Support", desc: "Nutritional strategies to maintain a healthy weight." },
              { icon: <Heart />, title: "Heart Health", desc: "Focus on fiber and healthy fats to support cardiovascular health." },
              { icon: <ShieldCheck />, title: "Pattern Recognition", desc: "Learning how your body responds to detailed food logs." }
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
            This program is for nutritional support and lifestyle guidance only.
            <strong> We do not diagnose, treat, or cure Diabetes. We do not prescribe or adjust insulin or medication dosages. </strong>
            Even when working with a dietitian in Gurgaon, you must continue to see your endocrinologist for all medical management.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW CARE IS DELIVERED */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#217328] rounded-[80px] rotate-3 scale-105 opacity-5"></div>
            <Image
              src="/work-with-your-doctor.jpg"
              alt="Collaborative care with your medical team"
              width={1200}
              height={800}
              className="rounded-[80px] shadow-2xl relative z-10 transition-all duration-700"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Collaborative <span className="text-[#217328]">Care</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Weekly Dietician Reviews</h4>
                  <p className="text-slate-500">Regular check-ins to review your food logs and progress.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Detailed Reporting</h4>
                  <p className="text-slate-500">We provide nutrition summaries you can share with your doctor.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Medication Alignment</h4>
                  <p className="text-slate-500">We help plan meal timing to align with your doctor's medication instructions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approaches (Retained) */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black">Support for Different Needs</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {types.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[48px] border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 shadow-sm">
                  {React.cloneElement(t.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-2">{t.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 font-medium">{t.desc}</p>
                <ul className="space-y-3">
                  {t.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 size={16} className="text-[#217328]" /> {p}
                    </li>
                  ))}
                </ul>
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
            Dietician at Home is a professional nutrition care service that delivers personalized meal planning, dietary guidance, and wellness tracking directly to your location, supported by a dietitian in Gurgaon. Our services include:
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
              { q: "Is this a medical treatment?", a: "No. We provide nutritional support and lifestyle coaching. We do not provide medical treatment." },
              { q: "Do you prescribe insulin?", a: "No. Only your doctor can prescribe or adjust medication. We support you with the dietary aspects of management, even if you are consulting a weight loss dietician near me." },
              { q: "Can I stop my medication?", a: "No. You must follow your doctor's advice regarding medication at all times." },
              { q: "Do you work with my doctor?", a: "Yes, we encourage collaboration and can share your nutrition reports with your healthcare provider." }
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
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">Support Your Health <br /> <span className="text-[#217328]">Journey.</span></h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto">
            Professional nutrition guidance to help you manage your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
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
      `}</style>
    </div>
  );
};

export default DiabetesManagement;

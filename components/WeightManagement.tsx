'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  TrendingUp,
  Scale,
  Dumbbell,
  Target,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Plus,
  Smartphone,
  Users,
  BarChart3,
  Flame,
  Utensils,
  Trophy,
  History,
  AlertCircle
} from 'lucide-react';

const WeightManagement: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeGoal, setActiveGoal] = useState<'loss' | 'gain'>('loss');
  const router = useRouter();

  const philosophy = [
    { title: "Metabolic Support", icon: <Flame />, desc: "We focus on nutrient-dense volume eating to support your body's natural metabolic processes." },
    { title: "Muscle Maintenance", icon: <Dumbbell />, desc: "Targeted protein guidance to help maintain lean muscle mass while managing weight." },
    { title: "Sustainable Habits", icon: <History />, desc: "Building a lifestyle you can maintain long-term. Flexibility is key to consistency." },
    { title: "Accountability", icon: <Users />, desc: "Weekly professional check-ins to help navigate challenges and stay on track." }
  ];

  const mealPlans = {
    loss: {
      calories: "Structured Plan",
      focus: "Satiety & Volume",
      breakfast: "Protein-rich Greek Yogurt bowl with seasonal berries",
      lunch: "Grilled Lemon Chicken with a large Mediterranean salad",
      dinner: "Stir-fry Tofu with broccoli and minimal brown rice",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600"
    },
    gain: {
      calories: "Structured Plan",
      focus: "Nutrient Density",
      breakfast: "Avocado & Egg toast with a high-calorie nut smoothie",
      lunch: "Quinoa Bowl with roasted sweet potatoes and Chickpeas",
      dinner: "Salmon Fillet with mashed potatoes and sautéed greens",
      image: "/weight-gain.jpg"
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: WHAT THIS PROGRAM SUPPORTS (HERO) */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#F0FDF4] pb-[60px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <nav className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
              <Link href="/" className="hover:text-emerald-800 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span>Our Programs</span>
              <span className="text-slate-300">/</span>
              <span className="text-teal-600">Weight Management</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              <span className="text-transparent bg-clip-text bg-[#217328] from-emerald-600 to-blue-500">Weight Management Nutrition with the Best Dietician in Gurgaon for Weight Loss</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium">
              This program offers structured nutrition routines and lifestyle guidance for individuals looking to manage their weight effectively, under the support of the best dietician in Gurgaon for weight loss through habit-based coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => router.push('/contact')} className="px-6 py-5 bg-[#217328] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-emerald-200 hover:bg-emerald-600 hover:-translate-y-1 transition-all">
                Check Eligibility
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-black text-slate-900">Steady</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Progress</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">Weekly</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Support</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">Personalized</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Planning</p>
              </div>
            </div>

          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 rounded-[80px] overflow-hidden shadow-3xl border-[12px] border-white transform -rotate-3
                h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px]">
              <Image
                src="/transform-naturally.jpg"
                alt="Healthy lifestyle nutrition"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO THIS IS FOR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Who This Weight Loss Program with a Dietician Near You Is For</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Our weight management support is designed for individuals who are looking for professional guidance to structure their eating habits. This program is suitable for:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Individuals seeking to manage body weight through diet",
              "Those looking to build sustainable healthy eating habits",
              "People requiring accountability and weekly check-ins",
              "Busy professionals needing structured meal planning"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
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
            <h2 className="text-3xl md:text-4xl font-black">How Nutrition Support <span className="text-[#217328]">Helps</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-8">
              We focus on meal planning, nutritional balance, and habit consistency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((item, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
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
            This program is strictly for nutrition support and lifestyle management.
            <strong> We do not diagnose, treat, cure, or manage any medical disease or condition. </strong>
            Our dieticians provide dietary recommendations to support general health and well-being. Even when working with the best dietician in Gurgaon for weight loss, individuals with medical conditions must continue to follow the advice of their doctor.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW CARE IS DELIVERED */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#217328] rounded-[100px] rotate-6 scale-95 opacity-5"></div>
            <Image
              src="/no-gym-visit.jpg"
              alt="Dietician interaction"
              width={800}
              height={620}
              sizes="(max-width: 1280px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[100px] shadow-2xl object-cover"
            />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">How Care Is <span className="text-[#217328]">Delivered</span></h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Initial Onboarding</h4>
                  <p className="text-slate-500 mt-2">A detailed discussion about your lifestyle, food preferences, and goals.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Weekly sessions</h4>
                  <p className="text-slate-500 mt-2">Every week, you speak with your Dietician via video or call to review your meal plan and progress.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Periodic Home Visits</h4>
                  <p className="text-slate-500 mt-2">A trained field representative visits your location monthly to collect wellness parameters using digital wellness tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Selector (Retained as visual aid for Meal Plans) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-8">Sample Meal Structure</h2>
            <div className="inline-flex p-2 bg-white rounded-2xl gap-2 shadow-sm">
              <button
                onClick={() => setActiveGoal('loss')}
                className={`px-8 py-3 rounded-xl font-black text-[13px] uppercase tracking-widest transition-all ${activeGoal === 'loss' ? 'bg-[#217328] text-white shadow-xl' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Weight Loss Support
              </button>
              <button
                onClick={() => setActiveGoal('gain')}
                className={`px-8 py-3 rounded-xl font-black text-[13px] uppercase tracking-widest transition-all ${activeGoal === 'gain' ? 'bg-[#217328] text-white shadow-xl' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Weight Gain Support
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[60px] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                {activeGoal === 'loss' ? 'Focus: Satiety & Balance' : 'Focus: Nutrient Density'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {activeGoal === 'loss'
                  ? "Our plans prioritize nutrient-dense foods that keep you full, ensuring you get necessary vitamins and minerals while managing calorie intake."
                  : "We focus on adding healthy sources of energy and protein to support weight gain in a measured, healthy way."}
              </p>
              <div className="space-y-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Breakfast</p>
                  <p className="font-medium text-slate-700">{mealPlans[activeGoal].breakfast}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Lunch</p>
                  <p className="font-medium text-slate-700">{mealPlans[activeGoal].lunch}</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden">
              <Image
                src={mealPlans[activeGoal].image}
                alt="Healthy meal plan sample"
                fill
                className="object-cover"
              />
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16">Common <span className="text-[#217328]">Questions</span></h2>
          <div className="space-y-4">
            {[
              { q: "Is this a medical treatment?", a: "No. This is a nutrition support program designed to help you build healthy eating habits. Even if you are looking for a dietician near me for weight loss, we do not provide medical treatment." },
              { q: "Will I lose weight quickly?", a: "We focus on sustainable, steady progress. Rapid weight loss is often unsustainable. Our Dieticians help you build habits for the long term." },
              { q: "Do I need to visit a clinic?", a: "No. Our field representatives visit you for any necessary data collection (like checking weight or body parameters) at your home." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-[24px] overflow-hidden border border-slate-100 transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-base text-slate-800 pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center transition-transform shadow-sm ${openFaq === i ? 'rotate-45' : ''}`}>
                    <Plus size={18} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CLEAR CTA */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-black">Ready to Structure Your Nutrition?</h2>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            Explore if our weight management support program is right for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => router.push('/contact')}
              className="px-10 py-5 bg-[#217328] text-white rounded-[32px] font-black text-lg hover:scale-105 transition-all"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* MANDATORY DISCLAIMER (Repeated for safety) */}
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
          box-shadow: 0 35px 60px -15px rgba(16, 185, 129, 0.3);
        }
      `}</style>
    </div>
  );
};

export default WeightManagement;

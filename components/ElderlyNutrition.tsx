'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Heart,
  Home,
  ShieldCheck,
  CheckCircle2,
  Plus,
  ArrowRight,
  Phone,
  Activity,
  Apple,
  Clock,
  AlertCircle,
  Utensils,
  HeartPulse,
  Zap
} from 'lucide-react';

const ElderlyNutrition: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const supportAreas = [
    { title: "Digestive Support", desc: "Easy-to-digest meals tailored for sensitive stomachs.", icon: <Apple className="text-[#217328]" /> },
    { title: "Heart Health", desc: "Low-sodium, heart-friendly meal planning support.", icon: <Heart className="text-rose-600" /> },
    { title: "Bone Strength", desc: "Calcium and Vitamin D rich foods to support bone health.", icon: <ShieldCheck className="text-indigo-600" /> },
    { title: "Energy Maintenance", desc: "Balanced nutrition to help maintain daily energy levels.", icon: <Activity className="text-amber-600" /> },
    { title: "Hydration Focus", desc: "Strategies to ensure adequate fluid intake.", icon: <Clock className="text-blue-500" /> },
    { title: "Texture Modification", desc: "Soft diet options for easier chewing and swallowing.", icon: <Utensils className="text-slate-600" /> }
  ];

  return (
    <div className="bg-[#FCFBFA] min-h-screen text-slate-800 font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: WHAT THIS PROGRAM SUPPORTS */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white pb-[60px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
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
              <span className="text-[#217328]">Elderly Nutrition</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
              Nutrition Support for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] to-[#43A047]"> Active Aging with the Best Nutritionist in Gurgaon</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Support your independence and vitality with compassionate guidance from the best nutritionist in Gurgaon specializing in senior care. Professional nutrition delivered to your doorstep with weekly support from dieticians and nutritionists near me who understand aging health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button onClick={() => router.push('/contact')} className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-lg shadow-2xl shadow-[#217328]/20 hover:bg-[#1B5E20] hover:-translate-y-1 transition-all active:scale-95">
                Book visit
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E8F5E9] rounded-full blur-[100px] opacity-40"></div>
            <div className="relative z-10 rounded-[80px] overflow-hidden shadow-3xl border-[12px] border-white transform rotate-2">
              <Image
                src="/elderly-nutritions.jpg"
                alt="Elderly couple at home"
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
      {/* <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Who This Program Is For – Those Looking for Dieticians and Nutritionists Nearby</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            This program is dedicated to seniors who want to maintain their health through better nutrition.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Seniors managing age-related health changes",
              "Families seeking nutritional oversight for elderly parents",
              "Individuals needing texture-modified diets",
              "Those wanting to support heart and bone health"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="text-[#217328] w-5 h-5 shrink-0" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

            <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Why the Best Nutritionist in Gurgaon Says Specialized Care <br /><span className="text-[#217328]">Matters with Age</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                As we age, the best nutritionist in Gurgaon understands that body requirements for protein, vitamins, and hydration change significantly. Generic diets don't account for medication interactions or metabolic shifts that dieticians and nutritionists near me address for seniors across Gurgaon.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Activity />, title: "Metabolic Precision", desc: "Best nutritionist in Gurgaon adapts to natural nutrient absorption changes." },
                  { icon: <Heart />, title: "Organ Support", desc: "Dieticians and nutritionists near me design nutrition respecting heart and kidney health." },
                  { icon: <ShieldCheck />, title: "Immunity Boost", desc: "Best nutritionist in Gurgaon creates nutrient-dense plans to keep seniors strong." },
                  { icon: <Apple />, title: "Active Vitality", desc: "Dieticians and nutritionists near me manage energy for an active senior lifestyle." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-[#E8F5E9]/50 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 text-[#217328] shadow-sm">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1 text-base leading-6">{item.title}</h4>
                    <p className="text-base leading-6 text-slate-500 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1E293B] rounded-[60px] p-12 text-white relative overflow-hidden group">
              {/* soft glow */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#217328]/20 rounded-full blur-3xl"></div>

              <h3 className="text-3xl font-bold mb-4 leading-tight">
                Where Most Senior Nutrition Care Breaks Down
              </h3>

              <p className="text-slate-300 text-base mb-10 leading-6 max-w-md">
                The best nutritionist in Gurgaon knows that senior nutrition fails when it's fragmented, stressful, or disconnected from daily life. Dieticians and nutritionists near me fix that by bringing structure, clarity, and continuity.
              </p>

              <div className="space-y-6 text-base leading-6">
                {[
                  "No need to travel, wait in queues, or manage clinic fatigue—best nutritionist in Gurgaon comes to you",
                  "One consistent nutrition plan from dieticians and nutritionists near me—not mixed advice from multiple doctors",
                  "Meals adjusted for chewing comfort, digestion & appetite changes by best nutritionist in Gurgaon",
                  "Ongoing tracking of weight, strength & health parameters by dieticians and nutritionists near me",
                  "Clear coordination with family members and caregivers across Gurgaon"
                ].map((challenge, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-[#217328]/25 text-[#A5D6A7] rounded-full flex items-center justify-center shrink-0 mt-1">
                      <ArrowRight size={14} />
                    </div>
                    <span className="text-slate-200 font-medium">
                      {challenge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: HOW NUTRITION SUPPORT HELPS */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black">How Nutrition <span className="text-[#217328]">Helps</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-xl leading-8">
              Proper nutrition is key to maintaining vitality and independence as we age.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportAreas.map((item, i) => (
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
            This provides nutritional support and lifestyle guidance.
            <strong> We do not diagnose or treat medical conditions like heart disease, osteoporosis, or dementia. </strong>
            Even when consulting the best nutritionist in Gurgaon, you should continue regular checkups with your geriatrician or primary care physician.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW CARE IS DELIVERED */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#217328] rounded-[100px] rotate-3 scale-105 opacity-5"></div>
            <Image
              src="/elder-clinc.jpg"
              alt="Home nutrition visit"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[100px] shadow-2xl object-cover z-10"
            />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">We Bring Care <span className="text-[#217328]">Summary</span></h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Doorstep Visits</h4>
                  <p className="text-slate-500 mt-2">Our team comes to your home for all visits, so you don't have to travel.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Simple Meal Plans</h4>
                  <p className="text-slate-500 mt-2">Easy-to-read, familiar food options that fit your preferences.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Family Updates</h4>
                  <p className="text-slate-500 mt-2">We can keep family members informed about nutritional progress.</p>
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
            Dietician at Home is a professional nutrition care service that delivers personalized meal planning, dietary guidance, and wellness tracking directly to your location, supported by the best nutritionist in Gurgaon. Our services include:
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
              { q: "Do I need to cook complicated meals?", a: "No. We focus on simple, nutritious meals that are easy to prepare or can be made by caregivers." },
              { q: "Can you help if I have trouble chewing?", a: "Yes. We can design soft-diet plans that are safe, easy to eat, and still nutritious, with guidance from dieticians and nutritionists near me." },
              { q: "Do you talk to my doctor?", a: "We can share your nutrition reports with your doctor to ensure your care is coordinated." },
              { q: "Is the app hard to use?", a: "We provide full support. Our team can set everything up for you during home visits." }
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
      {/* <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black">Start Your Journey to Better Senior Health</h2>
          <p className="text-slate-500 text-xl font-medium max-w-4xl mx-auto">Work with the best nutritionist in Gurgaon for professional doorstep senior care. Experience compassionate support from dieticians and nutritionists near me across Gurgaon. We support your independence and vitality.</p>
          <button onClick={() => router.push('/contact')} className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-xl shadow-2xl hover:scale-105 transition-all">
            Contact Us
          </button>
        </div>
      </section> */}

       <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#334155_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 space-y-12">
          <div className="w-20 h-20 bg-[#217328] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
            <Heart size={40} className="text-white" fill="white" />
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">Start Your Journey to <span className="text-[#4CAF50]">Better Senior Health</span></h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-4xl mx-auto">
            Work with the best nutritionist in Gurgaon for professional doorstep senior care. Experience compassionate support from dieticians and nutritionists near me across Gurgaon. We support your independence and vitality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-12 py-6 bg-[#217328] text-white rounded-2xl font-bold text-xl shadow-2xl shadow-[#217328]/20 hover:scale-105 transition-all">
              Schedule Free Consultation
            </Link>
            <Link
              href="tel:+919899480775"
              className="px-12 py-6 border-2 border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3"
            >
              Call: +91 98994 80775
            </Link>
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

export default ElderlyNutrition;

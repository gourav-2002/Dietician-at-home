'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import {
  Zap,
  Scale,
  Wind,
  Thermometer,
  Brain,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Heart,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Calendar,
  CloudRain,
  Sun,
  Activity,
  Droplet
} from 'lucide-react';

const KetoProgram: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ketoGoals = [
    { icon: <Scale />, label: "Fat Loss Support", desc: "Keto dietician creates low-carb meal plans designed to support healthy fat loss and body composition goals." },
    { icon: <Brain />, label: "Mental Clarity", desc: "Structured ketogenic nutrition from keto dietician may help support focus and sustained mental energy throughout the day." },
    { icon: <Zap />, label: "Stable Energy", desc: "Expert keto dietician helps you maintain consistent energy levels without sugar-dependent crashes." },
    { icon: <Heart />, label: "Metabolic Support", desc: "Keto dietician designs meal plans that may support healthy blood sugar balance and metabolic wellness." },
    { icon: <Activity />, label: "Lifestyle Integration", desc: "Professional keto dietician creates sustainable low-carb nutrition that fits your daily routine and preferences." }
  ];

  const faqs = [
    {
      q: "Is keto nutrition sustainable long-term with a keto dietician?",
      a: "When properly guided, ketogenic nutrition can be sustained long-term. The keto dietician monitors your progress through monthly doorstep assessments and weekly consultations. Keto dieticians ensure your low-carb meal plans remain balanced, nutrient-complete, and adjusted based on your body's response across DLF Phase, Cyber City, and Golf Course Road areas."
    },
    {
      q: "What should I expect during keto adaptation with a keto dietician?",
      a: "During the first 1-2 weeks of keto adaptation, some people experience temporary fatigue or headaches as the body adjusts. The keto dietician supports this transition through proper hydration guidance, electrolyte balance strategies, and gradual carbohydrate reduction. Keto dieticians provide weekly support to help you navigate the adaptation phase smoothly."
    },
    {
      q: "Can a keto dietician help me eat Indian foods on keto?",
      a: "Absolutely! The keto dietician specializes in Indian keto meal adaptations. We create low-carb versions of paneer dishes, cauliflower rice alternatives, coconut-based curries, and traditional recipes modified for ketogenic nutrition. Keto dieticians ensure you enjoy familiar flavors while following your low-carb meal plan across Gurgaon."
    },
    {
      q: "How do keto dieticians track my progress on keto?",
      a: "The keto dietician tracks your progress through monthly body composition measurements during doorstep visits using professional monitoring equipment. We monitor weight changes, body measurements, energy levels, and overall wellness markers. Keto dieticians provide weekly consultations to adjust your macros and meal plans based on your individual response."
    }
  ];

  return (
    <div className="bg-[#FCFBFF] min-h-screen text-slate-800 font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">
      {/* Hero Section */}
      <section className="bg-[#EEF6F1] py-20 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* HERO CARD */}
          <div className="md:p-12 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <nav className="flex items-center space-x-2 text-[13px] font-bold tracking-[2px] uppercase text-[#6C757D]">
                <Link href="/" className="hover:text-[#217328]">Home</Link>
                <span>/</span>
                <Link href="/programs" className="hover:text-[#217328]">Our Programs</Link>
                <span>/</span>
                <span className="text-[#217328]">Keto Program</span>
              </nav>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#1E2D24]">
                Expert Keto Dietician in Gurgaon for <span className="text-[#217328]">Ketogenic Nutrition Success</span>
              </h1>

              <p className="text-lg text-[#6C757D] max-w-xl leading-relaxed">
                Support your fat loss and wellness goals with professional guidance from a specialized keto dietician in Gurgaon. Personalized ketogenic meal plans delivered through weekly consultations with keto dieticians near me who understand low-carb nutrition for sustainable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#217328] text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-[#1B5E20] transition shadow-md"
                >
                  Start Keto Journey
                </Link>

                <button className="border-2 border-[#217328] text-[#217328] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center group hover:bg-[#217328] hover:text-white transition">
                  Learn About Keto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* STATS STRIP */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-xl font-black text-[#2C3E50]">Weekly</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#217328]">
                    Keto Meal Plans
                  </p>
                </div>
                <div>
                  <p className="text-xl font-black text-[#2C3E50]">Monthly</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#217328]">
                    Doorstep Visits
                  </p>
                </div>
                <div>
                  <p className="text-xl font-black text-[#2C3E50]">100%</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#217328]">
                    Personalized Care
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden aspect-[4/5] shadow-md">
                <Image
                  src="/keto-diet-1.jpg"
                  alt="Keto dietician in Gurgaon for ketogenic diet consultation"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden aspect-[4/5] shadow-md">
                <Image
                  src="/keto-diet-2.jpg"
                  alt="Keto dietician near me - personalized keto nutrition guidance"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Keto Benefits Section */}
      <section className="py-32 px-6 bg-slate-900 text-white rounded-[100px] mx-4 my-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Why Choose <span className="text-[#217328]">Keto Dietician in Gurgaon</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-8">Professional keto dieticians near me deliver evidence-based ketogenic meal planning to support your fat loss, energy, and wellness goals across Gurgaon.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {ketoGoals.map((s, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all group text-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#217328] group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-lg font-bold mb-3">{s.label}</h4>
                <p className="text-base leading-6 text-slate-400 leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Keto Works with Expert Guidance */}
      <section className="py-28 px-6 bg-[#e8f5e9] overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white text-[#217328] text-xs font-black uppercase tracking-widest">
              Evidence-Based Keto Nutrition
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              How we Supports <br />
              <span className="text-[#217328]">Your Low-Carb Journey</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 font-medium">
              Ketogenic nutrition requires careful planning and ongoing support. Professional keto dieticians near me create structured low-carb meal strategies that support fat-burning while maintaining muscle mass and energy across DLF Phase, Cyber City, and Golf Course Road.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-3 gap-10">

            {[
              {
                title: "Macro Balance",
                image: "/macro-precision.jpg",
                points: [
                  "Personalized fat, protein, and carb ratios from keto dietician",
                  "Muscle-preserving protein targets tailored to your body",
                  "Low-carb strategies designed by keto dieticians near me for sustained energy"
                ],
                tone: "Custom macro guidance from expert keto dietician for your goals."
              },
              {
                title: "Weekly Support",
                image: "/ketone-monitoring.jpg",
                points: [
                  "Weekly dietitian consultations to review your progress",
                  "Regular meal plan adjustments by keto dieticians near me",
                  "Ongoing guidance for optimal low-carb nutrition results"
                ],
                tone: "Keto dieticians near me provide consistent support throughout your journey."
              },
              {
                title: "Indian Keto Meals",
                image: "/indian-keto-adaptation.jpg",
                points: [
                  "Low-carb paneer and curry recipes from keto dietician",
                  "Coconut-based traditional dishes adapted for keto by keto dieticians near me",
                  "Cultural food modifications for sustainable low-carb eating"
                ],
                tone: "Keto dietician creates familiar Indian keto meal plans."
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-[36px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={`${card.title} - Keto dietician in Gurgaon approach`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-black text-slate-900">
                    {card.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#217328] italic">
                    {card.tone}
                  </p>

                  <div className="space-y-3">
                    {card.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] text-[#217328] flex items-center justify-center font-black">
                          ✓
                        </div>
                        <span className="text-slate-600 font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER CTA */}
          <div className="mt-24 text-center">
            <p className="text-lg text-slate-600 font-medium mb-6">
              Ready to start your keto journey with professional guidance from keto dieticians near me?
            </p>
            <Link href="/contact" className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-[#217328] to-[#217328] text-white font-black text-lg shadow-xl hover:scale-105 transition-all">
              Schedule Keto Consultation
            </Link>
          </div>

        </div>
      </section>


      {/* Doorstep Keto Care */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-[#217328] rounded-[100px] rotate-6 scale-95 opacity-5"></div>
            <Image
              src="/keto-dieticians-near-me.jpg"
              alt="Keto dietician in Gurgaon providing doorstep ketogenic diet consultation"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[100px] shadow-2xl object-cover z-10"
              loading="lazy"
            />
            <div className="absolute top-1/2 -left-12 bg-white p-8 rounded-[40px] shadow-2xl z-20 border border-slate-50 hidden xl:block max-w-[240px] animate-float">
              <Zap className="text-[#217328] w-10 h-10 mb-4" />
              <p className="font-bold text-slate-900 text-sm italic">"Professional keto dietician brings personalized care to your home."</p>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Keto Dieticians Near Me Bring Expertise to <br /><span className="text-[#217328]">Your Doorstep</span></h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Starting keto requires precision and ongoing support. The keto dietician in Gurgaon eliminates guesswork by bringing professional body composition monitoring, personalized macro guidance, and expert meal planning directly to your home across DLF Phase, Cyber City, Golf Course Road, and Sector 51.
            </p>
            <div className="space-y-6">
              {[
                { title: "Monthly Body Composition Tracking", desc: "Keto dietician measures weight and body parameters during doorstep visits using professional equipment." },
                { title: "Weekly Macro Adjustments", desc: "Keto dieticians fine-tune fat, protein, and carb ratios based on your individual response and progress." },
                { title: "Personalized Keto Meal Plans", desc: "Expert keto dietician creates Indian keto recipes that fit your taste, lifestyle, and goals." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 bg-[#E8F5E9] text-[#217328] rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                    <p className="text-base leading-6 text-slate-500 font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Keto Guidance Matters */}

      <section className="py-28 px-6 bg-[#e8f5e9]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

          {/* RIGHT – CONTENT */}
          <div className="space-y-12">

            <div>
              <span className="inline-block mb-5 px-5 py-2 rounded-full bg-white text-[#217328] text-xs font-black uppercase tracking-widest">
                Expert Keto Support
              </span>

              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                DIY Keto Struggles. <br />
                <span className="text-[#217328]">Professional Keto Succeeds.</span>
              </h3>

              <p className="mt-6 text-lg text-slate-600 font-medium max-w-xl">
                Many people attempting keto alone face challenges with macro planning, meal variety, or sustaining the approach long-term. The keto dietician in Gurgaon helps you navigate these challenges through expert guidance and consistent weekly support.
              </p>
            </div>

            {/* COMPARISON */}
            <div className="grid sm:grid-cols-2 gap-8">

              {/* DIY KETO */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                  DIY Keto Attempts
                </p>
                <ul className="space-y-4 text-slate-600 font-semibold">
                  <li>❌ Generic macro guidelines</li>
                  <li>❌ No professional monitoring</li>
                  <li>❌ Limited meal variety</li>
                  <li>❌ Difficult to sustain long-term</li>
                </ul>
              </div>

              {/* PROFESSIONAL KETO */}
              <div className="bg-[#217328] rounded-3xl p-8 shadow-xl">
                <p className="text-xs font-black uppercase tracking-widest text-[#C8E6C9] mb-4">
                  How We Help
                </p>
                <ul className="space-y-4 text-white font-semibold">
                  <li>✅ Personalized macro planning</li>
                  <li>✅ Monthly progress monitoring</li>
                  <li>✅ Diverse Indian keto recipes</li>
                  <li>✅ Sustainable long-term approach</li>
                </ul>
              </div>

            </div>

            {/* CTA */}
            <div>
              <Link href="/contact" className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-[#217328] to-[#217328] text-white font-black text-lg shadow-xl hover:scale-105 transition-all">
                Work with Keto Expert
              </Link>
            </div>

          </div>

          {/* LEFT – IMAGE */}
          <div className="relative">
            <div className="absolute -inset-6 bg-[#217328]/10 rounded-[48px] blur-2xl"></div>
            <img
              src="/diy-keto-fails.jpg"
              alt="Keto dietician near me - professional ketogenic nutrition consultation"
              className="relative rounded-[40px] shadow-2xl w-full object-cover"
            />
          </div>

        </div>
      </section>



      {/* FAQ - Keto Dietician in Gurgaon */}
      <section className="py-24 px-6 bg-[#FDFEFE]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">Common Questions About <span className="text-[#217328]">Keto Nutrition</span></h2>
          <p className="text-center text-lg text-slate-600 mb-16 font-medium">Expert answers from keto dieticians specializing in ketogenic meal planning</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
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

      {/* Final CTA - Keto Dietician in Gurgaon */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#43A047_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
          <div className="w-20 h-20 bg-[#217328] rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
            <Sparkles size={40} className="text-white" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">Start Your Keto Journey with <br /> <span className="text-[#A5D6A7]">Expert Guidance</span></h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto">
            Work with professional keto dietician for evidence-based ketogenic nutrition support. Receive personalized low-carb meal plans and consistent guidance from keto dieticians near me delivering doorstep care across DLF Phase, Cyber City, Golf Course Road, and all of Gurgaon. Experience sustainable keto results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-xl shadow-2xl shadow-[#217328]/20 hover:scale-105 transition-all text-center"
            >
              Schedule Free Keto Consultation
            </Link>

            <Link
              href="tel:+919899480775"
              className="px-12 py-6 border-2 border-white/20 text-white rounded-[32px] font-bold text-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3"
            >
              Call: +91 98994 80775
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            Serving DLF Phase 1-5, Cyber City, Golf Course Road, Sector 51, Sohna Road & All of Gurgaon
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(33, 115, 40, 0.2);
        }
      `}</style>
    </div>
  );
};


export default KetoProgram;
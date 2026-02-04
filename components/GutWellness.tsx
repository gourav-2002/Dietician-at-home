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

const Gutwellness: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const ketoGoals = [
        { icon: <Scale />, label: "Digestive Comfort", desc: "Best dieticians helps identify dietary patterns that may contribute to bloating and digestive discomfort." },
        { icon: <Brain />, label: "Symptom Tracking", desc: "Dieticians near me provide structured food and symptom diary guidance to help you understand your digestive patterns." },
        { icon: <Zap />, label: "Food Sensitivities", desc: "Best dieticians offers systematic approaches to identify foods that may not agree with your digestive system." },
        { icon: <Heart />, label: "Gut-Friendly Nutrition", desc: "Dieticians near me design balanced meal plans that support comfortable digestion and overall gut wellness." },
        { icon: <Activity />, label: "Lifestyle Integration", desc: "Best dieticians creates sustainable eating patterns that consider stress, meal timing, and daily routines." }
    ];

    const faqs = [
        {
            q: "Can the best dieticians help me identify foods that trigger digestive discomfort?",
            a: "Yes. The best dieticians provides structured elimination and reintroduction protocols to help you systematically identify which foods may be contributing to your digestive symptoms. Dieticians near me guide you through this process with careful tracking and support across DLF Phase, Cyber City, and Golf Course Road areas."
        },
        {
            q: "Will dieticians near me make me avoid foods permanently for gut health?",
            a: "No. The goal of working with the best dieticians is to understand your body's responses, not permanent restriction. Dieticians near me use elimination as a learning tool to help you identify your personal triggers, so you can make informed choices about what works best for your digestive comfort across Gurgaon."
        },
        {
            q: "How do dieticians near me work alongside my doctor for digestive health?",
            a: "The best dieticians tracks your food intake, symptom patterns, and digestive responses through detailed food-symptom diaries during doorstep visits. Dieticians near me can provide nutrition-focused reports that you can share with your gastroenterologist, ensuring your nutrition strategy aligns with your medical care across Gurgaon locations."
        },
        {
            q: "What if tracking food and symptoms feels overwhelming? Can the best dieticians help?",
            a: "Absolutely. The best dieticians understands that detailed tracking can feel stressful. Dieticians near me start with gentle, simplified tracking methods—like basic symptom scales or photo logs—when detailed journaling feels too demanding. We adapt our approach to meet you where you are in your wellness journey."
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
                                <span className="text-[#217328]">Gut Wellness</span>
                            </nav>

                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#1E2D24]">
                                Best Dietician Clinic in Gurgaon for <span className="text-[#217328]">Gut Wellness Support</span>
                            </h1>

                            <p className="text-lg text-[#6C757D] max-w-xl leading-relaxed">
                                Support your digestive wellness with compassionate guidance from the best dietician clinic in Gurgaon specializing in gut-friendly nutrition. Professional digestive health support delivered to your doorstep with weekly consultations from dieticians near me who understand bloating, food sensitivities, and digestive comfort across DLF Phase, Cyber City, and Golf Course Road.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-[#217328] text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-[#1B5E20] transition shadow-md"
                                >
                                    Book Gut Wellness Consultation
                                </Link>

                                <button className="border-2 border-[#217328] text-[#217328] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center group hover:bg-[#217328] hover:text-white transition">
                                    Learn More
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* STATS STRIP */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                                <div>
                                    <p className="text-xl font-black text-[#2C3E50]">Weekly</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#217328]">
                                        Expert Support
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
                                    src="/gut-wellness-home-1.jpg"
                                    alt="Best dietician clinic in Gurgaon for gut wellness consultation"
                                    width={400}
                                    height={500}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="overflow-hidden aspect-[4/5] shadow-md">
                                <Image
                                    src="/gut-wellness-home-2.jpg"
                                    alt="Dieticians near me - personalized gut wellness nutrition guidance"
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
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Supporting <span className="text-[#217328]">Gut Wellness</span> with Best Dietician Clinic in Gurgaon</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-8">
                            The best dietician clinic in Gurgaon understands that digestive discomfort can impact daily life—persistent bloating, unpredictable symptoms, and concern about food choices. Dieticians near me provide compassionate, evidence-based nutrition support for your gut wellness journey across Gurgaon.
                        </p>
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
            <section className="py-28 px-6 bg-[#FAF9F6] overflow-hidden">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="inline-block mb-6 px-5 py-2 rounded-full bg-[#E8F5E9] text-[#217328] text-xs font-black uppercase tracking-widest">
                            Personalized Gut Wellness Nutrition
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                            Best Adapts Care to  <br />
                            <span className="text-[#217328]">Your Digestive Needs</span>
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 font-medium">
                            Digestive wellness is personal. That's why dieticians near me build nutrition strategies around your individual responses, preferences, and lifestyle—creating sustainable approaches that support comfortable digestion across DLF Phase, Cyber City, and Golf Course Road.
                        </p>
                    </div>

                    {/* MAIN GRID */}
                    <div className="grid lg:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Digestive Pattern Support",
                                image: "/ibs-symptom-relief.jpg",
                                imageAlt: "Digestive wellness nutrition - Best dieticians approach",
                                points: [
                                    "Structured food tracking from best dieticians",
                                    "Personalized elimination and reintroduction guidance",
                                    "Long-term dietary flexibility with dieticians near me"
                                ],
                                tone: "Understanding your unique digestive patterns with dieticians near me."
                            },
                            {
                                title: "Gut-Friendly Meal Planning",
                                image: "/sibo-nutrition-support.jpg",
                                imageAlt: "Gut wellness nutrition care - Best dieticians approach",
                                points: [
                                    "Balanced meal plans from dieticians near me",
                                    "Fiber and nutrient optimization for gut health",
                                    "Ongoing support from best dieticians"
                                ],
                                tone: "Nutrition that supports comfortable digestion from best dieticians."
                            },
                            {
                                title: "Food Sensitivity Guidance",
                                image: "/sensitivity-management.jpg",
                                imageAlt: "Food sensitivity nutrition - Dieticians near me approach",
                                points: [
                                    "Systematic food testing protocols by best dieticians",
                                    "Safe elimination and reintroduction processes",
                                    "Dietary freedom expansion with dieticians near me"
                                ],
                                tone: "Careful food exploration to identify your triggers with dieticians near me."
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
                                        alt={`${card.title} - Best dieticians approach`}
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
                            Not sure which approach is right for you? Let's Talk.
                        </p>
                        <Link href="/contact" className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-[#217328] to-[#217328] text-white font-black text-lg shadow-xl hover:scale-105 transition-all">
                            Book Gut Wellness Consultation
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
                            src="/ibs-dieticians-near-me.jpg"
                            alt="Best dietician clinic in Gurgaon providing doorstep gut wellness consultation"
                            width={800}
                            height={520}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                            className="w-full h-auto rounded-[40px] shadow-2xl object-cover z-10"
                            loading="lazy"
                        />
                        <div className="absolute top-1/2 -left-12 bg-white p-8 rounded-[40px] shadow-2xl z-20 border border-slate-50 hidden xl:block max-w-[240px] animate-float">
                            <Zap className="text-[#217328] w-10 h-10 mb-4" />
                            <p className="font-bold text-slate-900 text-sm italic">"Comfortable consultations at home—best dieticians comes to you."</p>
                        </div>
                    </div>
                    <div className="space-y-8 order-1 lg:order-2">
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Dieticians Near Me Bring Expertise <br /><span className="text-[#217328]">to Your Doorstep</span></h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            Managing digestive wellness is easier when support comes to you. The best dietician clinic in Gurgaon eliminates the stress of clinic visits by bringing professional gut-friendly nutrition guidance and compassionate care directly to your home across DLF Phase, Cyber City, Golf Course Road, and Sector 51.
                        </p>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Monthly Body Composition Tracking",
                                    desc: "Best dieticians monitors your wellness progress using professional equipment during doorstep visits."
                                },
                                {
                                    title: "Weekly Digestive Wellness Support",
                                    desc: "Dieticians near me provide expert gut-friendly nutrition guidance through regular consultations."
                                },
                                {
                                    title: "Flexible Scheduling",
                                    desc: "Best dieticians coordinates visits around your schedule and comfort preferences."
                                }
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
                                Expert Gut Wellness Support
                            </span>

                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Generic Advice Struggles. <br />
                                <span className="text-[#217328]">Professional Care Succeeds.</span>
                            </h3>

                            <p className="mt-6 text-lg text-slate-600 font-medium max-w-xl">
                                Many people trying restrictive elimination diets alone face challenges with confusion, social isolation, or difficulty sustaining the approach long-term. The best dietician clinic in Gurgaon helps you navigate gut wellness through structured guidance, systematic food testing, and consistent support from dieticians near me.
                            </p>
                        </div>

                        {/* COMPARISON */}
                        <div className="grid sm:grid-cols-2 gap-8">

                            {/* DIY KETO */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100">
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                                    Generic Gut Advice
                                </p>
                                <ul className="space-y-4 text-slate-600 font-semibold">
                                    <li>❌ One-size-fits-all elimination</li>
                                    <li>❌ No reintroduction guidance</li>
                                    <li>❌ Overwhelming food restrictions</li>
                                    <li>❌ Difficult to sustain long-term</li>
                                </ul>
                            </div>

                            {/* PROFESSIONAL KETO */}
                            <div className="bg-[#217328] rounded-3xl p-8 shadow-xl">
                                <p className="text-xs font-black uppercase tracking-widest text-[#C8E6C9] mb-4">
                                    How We Help
                                </p>
                                <ul className="space-y-4 text-white font-semibold">
                                    <li>✅ Personalized food testing</li>
                                    <li>✅ Systematic reintroduction</li>
                                    <li>✅ Stress-aware nutrition</li>
                                    <li>✅ Sustainable dietary freedom</li>
                                </ul>
                            </div>

                        </div>

                        {/* CTA */}
                        <div>
                            <Link href="/contact" className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-[#217328] to-[#217328] text-white font-black text-lg shadow-xl hover:scale-105 transition-all">
                                Work with Gut Wellness Experts
                            </Link>
                        </div>

                    </div>

                    {/* LEFT – IMAGE */}
                    <div className="relative">
                        <div className="absolute -inset-6 bg-[#217328]/10 rounded-[48px] blur-2xl"></div>
                        <img
                            src="/gut-advice-fails.jpg"
                            alt="Dieticians near me - professional gut wellness nutrition consultation"
                            className="relative rounded-[40px] shadow-2xl w-full object-cover"
                        />
                    </div>

                </div>
            </section>



            {/* FAQ - Keto Dietician in Gurgaon */}
            <section className="py-24 px-6 bg-[#FDFEFE]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">Common Questions About <span className="text-[#217328]">Gut Wellness</span></h2>
                    <p className="text-center text-lg text-slate-600 mb-16 font-medium">Expert answers from the best dieticians specializing in digestive wellness</p>
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
                    <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">Support Your Gut Wellness with<br /> <span className="text-[#A5D6A7]">Expert Guidance</span></h2>
                    <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto">
                        Work with the best dietician clinic in Gurgaon for evidence-based gut wellness support and digestive comfort. Receive personalized nutrition guidance and consistent care from dieticians near me delivering compassionate doorstep support across DLF Phase, Cyber City, Golf Course Road, and all of Gurgaon. Experience sustainable gut wellness results.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            href="/contact"
                            className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-xl shadow-2xl shadow-[#217328]/20 hover:scale-105 transition-all text-center"
                        >
                            Schedule Free Gut Consultation
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

export default Gutwellness;
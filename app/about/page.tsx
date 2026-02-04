import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Users, Heart, Target, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Nutritionists in Gurgaon | Best Dietitian Near Me - About Us',
    description: 'Meet expert nutritionists in Gurgaon & best dietitian near me. Qualified team providing professional at-home nutrition support across Gurgaon, DLF & Delhi NCR.',
    keywords: 'nutritionists in gurgaon, best dietitian near me, about us, qualified dieticians gurgaon, professional nutritionist team, nutrition support gurgaon, dietitian team delhi ncr',
    openGraph: {
        title: 'Nutritionists in Gurgaon | Best Dietitian Near Me - About Us',
        description: 'Meet expert nutritionists in Gurgaon & best dietitian near me. Qualified team providing professional at-home nutrition support across Gurgaon, DLF & Delhi NCR.',
        url: 'https://dieticianathome.com/about-us',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/about-us-team.jpg',
            width: 1200,
            height: 630,
            alt: 'About Us - Dietician at Home Team',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nutritionists in Gurgaon | Best Dietitian Near Me - About Us',
        description: 'Meet expert nutritionists in Gurgaon & best dietitian near me. Qualified team providing professional at-home nutrition support across Gurgaon & Delhi NCR.',
        images: ['https://dieticianathome.com/about-us-team.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/about-us',
    },
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen font-sans text-[#1F2937]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-[#F0FDF4] overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#217328]/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-white text-[#217328] rounded-full text-[12px] font-bold tracking-widest uppercase mb-6 shadow-sm border border-[#217328]/20">Who We Are</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F2937] mb-6 leading-tight">
                        Simplifying Nutrition for <br />
                        <span className="text-[#217328]">Better Living</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
                        We are a team of qualified Dieticians dedicated to providing professional nutrition support. We bridge the gap between medical advice and daily lifestyle implementation through personalized guidance and consistent support.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#217328] rounded-[40px] rotate-3 opacity-10"></div>
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                                alt="Dietician consulting with client"
                                width={800}
                                height={600}
                                className="rounded-[40px] shadow-2xl relative z-10"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">Our Mission</h2>
                            <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                                We believe that health transformation happens at home, not just in a clinic. Our mission is to make professional nutrition guidance accessible, convenient, and actionable.
                            </p>
                            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                                We don't promise magic cures or overnight miracles. Instead, we offer <strong>structured support, accountability, and expertise</strong> to help you build sustainable healthy habits.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Qualified and experienced nutritionists",
                                    "Support-focused approach, not medical treatment",
                                    "Convenient home visits and remote sessions",
                                    "Data-driven tracking for objective progress"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <ShieldCheck className="text-[#217328] w-6 h-6 flex-shrink-0" />
                                        <span className="text-[#1F2937] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do / Do NOT Do */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Our Role in Your Health Journey</h2>
                        <p className="text-[#6B7280] max-w-2xl mx-auto">Clarity on how we support you is essential for a successful partnership.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* What We Do */}
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg">
                            <div className="w-16 h-16 bg-[#F0FDF4] rounded-2xl flex items-center justify-center mb-8">
                                <Users className="text-[#217328] w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1F2937] mb-6">What We Do</h3>
                            <ul className="space-y-4">
                                {[
                                    "Create personalized meal plans based on your lifestyle",
                                    "Provide weekly professional sessions via video/call",
                                    "Track nutritional adherence and habit formation",
                                    "Collect body composition data via trained representatives",
                                    "Educate you on making better food choices"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[#217328]"></div>
                                        <span className="text-[#6B7280] font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What We Do NOT Do */}
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] -mr-10 -mt-10"></div>
                            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8">
                                <ShieldCheck className="text-red-500 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1F2937] mb-6">What We Do NOT Do</h3>
                            <ul className="space-y-4">
                                {[
                                    "We do not diagnose medical conditions or diseases",
                                    "We do not prescribe prescription medications",
                                    "We do not provide emergency medical services",
                                    "We do not replace your primary care physician",
                                    "We do not promise specific medical outcomes"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-red-400"></div>
                                        <span className="text-[#6B7280] font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] text-center mb-16">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Heart className="w-10 h-10 text-[#217328]" />,
                                title: "Empathy First",
                                desc: "We understand that lifestyle changes are hard. We approach every client with compassion and understanding, not judgment."
                            },
                            {
                                icon: <Target className="w-10 h-10 text-[#217328]" />,
                                title: "Evidence-Based",
                                desc: "Our guidance is grounded in established nutritional science. We avoid fads and focus on sustainable, balanced nutrition."
                            },
                            {
                                icon: <Clock className="w-10 h-10 text-[#217328]" />,
                                title: "Consistency Over Perfection",
                                desc: "We prioritize establishing small, consistent healthy habits that last a lifetime over strict, short-term perfection."
                            }
                        ].map((val, i) => (
                            <div key={i} className="text-center p-8 bg-[#FBFBFD] rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1F2937] mb-4">{val.title}</h3>
                                <p className="text-[#6B7280] leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#1F2937] text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Explore our programs to find the right nutrition support for your lifestyle.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/programs/weight-management" className="inline-flex items-center justify-center px-8 py-4 bg-[#217328] text-white font-bold rounded-xl hover:bg-[#1a5c20] transition-colors">
                            Explore Programs
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

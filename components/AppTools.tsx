'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {
  Smartphone,
  Utensils,
  BarChart3,
  Users,
  Bot,
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
  Scale,
  Download,
  Zap,
  Phone,
} from 'lucide-react';

const AppTools: React.FC = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Weekly Meal Plans",
      icon: <Utensils className="text-[#217328]" size={40} />,
      desc: "View your complete weekly meal plan the moment it's ready. Every meal structured, every ingredient listed, every step explained.",
      points: ["Full weekly calendar view", "Daily ingredient lists", "Step-by-step cooking instructions", "Meal photos and portion guidance"],
      img: "/meal-plan-2.jpg",
      side: "left"
    },
    {
      title: "Meal Tracking & Logging",
      icon: <BarChart3 className="text-[#217328]" size={40} />,
      desc: "Log what you actually eat. Scan outside meals instantly. Your dietician sees your real intake—not just the plan.",
      points: ["Quick meal logging (tap to confirm)", "Barcode/food scanner for outside meals", "Calorie & macro tracking automatically", "Real-time adherence visibility"],
      img: "/food-analysis.jpg",
      side: "right"
    },
    {
      title: "Health tracking",
      icon: <Scale className="text-[#217328]" size={40} />,
      desc: "Submit weekly health parameters manually or sync them automatically from your tracking device. Watch your progress visualized clearly and beautifully.",
      points: ["Manual parameter entry", "Automatic device sync", "Progress visualization (graphs & charts)", "Historical data tracking"],
      img: "/health-tracker.jpg",
      side: "left"
    },
    {
      title: "session Scheduling",
      icon: <Phone className="text-[#217328]" size={40} />,
      desc: "Book your weekly dietician calls directly from the app. Choose video or voice. Get reminders. Never miss your session.",
      points: ["One-tap appointment booking", "Flexible time slots", "Video or call options", "Automatic reminders"],
      img: "/consilting.jpg",
      side: "right"
    },
    {
      title: "Family Group Management",
      icon: <Users className="text-[#217328]" size={40} />,
      desc: "Manage nutrition for your entire household from one app. Get consolidated ingredient lists and coordinated meal planning for effortless daily management.",
      points: ["Multi-member profiles (up to 5)", "Consolidated weekly ingredient lists", "Individual meal plans per member", "Family progress dashboard"],
      img: "/family-montir.jpeg",
      side: "left"
    },
    {
      title: "AI Assistant (24/7 Support)",
      icon: <Bot className="text-[#217328]" size={40} />,
      desc: "Quick answers to basic questions, anytime. Recipe clarifications, app navigation, general queries—instant responses.",
      points: ["Instant basic query responses", "Recipe clarifications", "App navigation help", "Quick food information"],
      img: "/ai-assistant.jpeg",
      side: "right"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-[#1F2937] font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: HERO SECTION */}

      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/app-tools-banner.jpg"
            alt="App Interface"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1F2937]/85 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <nav className="flex justify-center items-center gap-2 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <span className="text-[#217328]">/</span>
            <span className="text-[#217328]">APP & TOOLS</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Your Nutrition <span className="text-[#217328]">Control Centre</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Powerful technology. Simple to use. Everything in one place.
          </p>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#1F2937]">The Digital Ecosystem Powering Your Journey with an Online Dietician Near You</h2>
          <p className="text-xl md:text-2xl text-gray-500 leading-[1.8] font-light">
            At Dietician at Home, your trusted online dietician near you, technology works quietly in the background to make your nutrition journey seamless, trackable, and effective. Our mobile app and tracking device together create a complete digital ecosystem—giving you greater control, clear visibility, and everyday convenience.
          </p>
          <div className="pt-12 relative flex justify-center">
            <div className="w-full max-w-4xl grid grid-cols-3 gap-8 items-center justify-center">
              <div className="animate-float" style={{ animationDelay: "0.5s" }}>
                <Image
                  src="/meal-plan.jpeg"
                  alt="App interface phone"
                  width={300}
                  height={600}
                  className="rounded-[40px] shadow-2xl border-4 border-gray-100"
                />
              </div>

              <div className="animate-float" style={{ animationDelay: "0s" }}>
                <Image
                  src="/clarories.jpg"
                  alt="App interface tablet"
                  width={300}
                  height={600}
                  className="rounded-[40px] shadow-2xl border-4 border-gray-100 scale-110 z-10 relative"
                />
              </div>

              <div className="animate-float" style={{ animationDelay: "1s" }}>
                <Image
                  src="/consilting.jpg"
                  alt="App interface dashboard"
                  width={300}
                  height={600}
                  className="rounded-[40px] shadow-2xl border-4 border-gray-100"
                />
              </div>
            </div>
          </div>
          <p className="text-xl font-bold text-[#217328] mt-20">But here's what matters most: technology enables the experience. Humans deliver the care.</p>
        </div>
      </section>

      {/* SECTION 3: THE MOBILE APP SHOWCASE */}
      <section className="py-32 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-6">Meet Your Nutrition Companion</h2>
            <p className="text-xl text-gray-500">Six powerful features, one beautiful app</p>
          </div>

          <div className="space-y-40">
            {features.map((f, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 ${f.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 w-full flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#E8F5E9] rounded-[60px] group-hover:rotate-3 transition-transform duration-500" />
                    <div className="relative z-10 w-[300px] h-[600px] bg-gray-900 rounded-[50px] border-[8px] border-gray-800 shadow-3xl overflow-hidden hover:scale-105 transition-transform duration-500">
                      <Image
                        src={f.img}
                        alt={f.title}
                        width={300}
                        height={600}
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/80 to-transparent flex flex-col justify-end p-8 text-white">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">App Interface</p>
                        <h4 className="text-lg font-black">{f.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full space-y-8">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="text-4xl font-black text-[#1F2937]">{f.title}</h3>
                  <p className="text-xl text-gray-500 leading-relaxed">{f.desc}</p>
                  <ul className="space-y-4 pt-4">
                    {f.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-4 text-lg font-bold text-gray-600">
                        <CheckCircle2 size={24} className="text-[#217328] shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: DOWNLOAD THE APP */}
      {/* <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937] to-[#217328] z-0" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="text-center text-white space-y-12 mb-16">
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">Download the App</h2>
            <p className="text-2xl text-white/80 font-light max-w-2xl mx-auto">Start your transformation with professional guidance at your fingertips.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
       
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-[32px] p-8 text-center space-y-6 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Smartphone className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white">Web App (PWA)</h3>
              <p className="text-white/70 text-sm">Works on any device with a browser. Install like a native app.</p>
              <Link
                href="/download"
                className="block w-full bg-white text-[#217328] px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-2xl"
              >
                Download App
              </Link>
              <p className="text-xs text-white/50 uppercase tracking-wider">Available Now</p>
            </div>

          
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-[32px] p-8 text-center space-y-6 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Download className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white">Android APK</h3>
              <p className="text-white/70 text-sm">Direct download for Android devices. No Play Store required.</p>
              <Link
                href="https://www.dietbaba.com/download"
                className="block w-full bg-white text-[#217328] px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-2xl"
              >
                Download APK
              </Link>
              <p className="text-xs text-white/50 uppercase tracking-wider">Available Now</p>
            </div>

         
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-[32px] p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <Smartphone className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white">App Stores</h3>
              <p className="text-white/70 text-sm">Native apps for iOS and Android coming soon.</p>
              <div className="space-y-3">
                <div className="w-full bg-white/5 border border-white/20 px-6 py-4 rounded-xl font-bold text-white/50 cursor-not-allowed">
                  Play Store
                </div>
                <div className="w-full bg-white/5 border border-white/20 px-6 py-4 rounded-xl font-bold text-white/50 cursor-not-allowed">
                  App Store
                </div>
              </div>
              <p className="text-xs text-white/50 uppercase tracking-wider">Coming Soon</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/60 text-sm">✓ Free to Download • ✓ Secure & Private • ✓ Regular Updates</p>
          </div>
        </div>
      </section> */}

      {/* THE tracking DEVICE */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-10 bg-[#E8F5E9] rounded-full blur-[100px] opacity-60 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/the-monitring-device.jpg"
                alt="Smart scale device"
                width={800}
                height={600}
                className="relative z-10 rounded-[60px] shadow-2xl w-full h-[600px] object-cover border-8 border-white"
              />
              <div className="absolute top-10 right-10 z-20 bg-[#217328] text-white px-8 py-4 rounded-2xl shadow-2xl font-black text-xs uppercase tracking-widest">
                Included in Your Program
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#1F2937]">Your Personal Wellness Tracking Device</h2>
              <p className="text-xl text-gray-500">A personal wellness tracking device included to support consistent and accurate self-tracking.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {[
                { icon: <BarChart3 className="text-[#217328]" />, title: "Weight Tracking", val: "Tracks weight changes over time for personal awareness" },
                { icon: <CheckCircle2 className="text-[#217328]" />, title: "BMI Estimate", val: "Automatically calculated for general wellness reference" },
                { icon: <Zap className="text-[#217328]" />, title: "basic body metrics Trends", val: "Provides approximate basic body metrics trends for lifestyle tracking" },
                { icon: <Smartphone className="text-[#217328]" />, title: "Bluetooth Sync", val: "Seamless sync with your mobile app" },
                { icon: <Users className="text-[#217328]" />, title: "Multi-user Support", val: "Supports multiple family profiles for shared tracking" },
                { icon: <ShieldCheck className="text-[#217328]" />, title: "Consistent Measurements", val: "Designed for reliable day-to-day wellness tracking" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#F0FDF4] rounded-xl flex items-center justify-center shrink-0 shadow-sm">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 font-medium">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4">
              {["Rechargeable", "Yours to keep", "Auto-sync & setup", "iOS & Android"].map(t => (
                <span key={t} className="px-4 py-2 bg-[#E8F5E9] text-[#217328] text-xs font-bold rounded-lg uppercase tracking-widest">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DATA SECURITY & PRIVACY */}
      <section className="py-32 px-6 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-6">Your Data. Your Privacy. Our Priority.</h2>
            <p className="text-xl text-gray-500">Your health data is safe and secure with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Lock size={48} className="text-[#217328]" />,
                title: "End-to-End Encryption",
                desc: "All your health data is encrypted during transmission and storage. Industry-standard AES-256 encryption ensures your information remains secure and protected."
              },
              {
                icon: <Users size={48} className="text-[#217328]" />,
                title: "Access Control",
                desc: "Only your assigned dietician and you can access your health data. No third-party sharing. No data selling. Ever."
              },
              {
                icon: <ShieldCheck size={48} className="text-[#217328]" />,
                title: "Privacy & Security First",
                desc: "Your health information is protected with enterprise-grade security measures. Secure cloud storage, regular backups, and strict data handling protocols keep your information safe."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] shadow-xl text-center space-y-6 hover:-translate-y-2 transition-transform duration-300">
                <div className="mx-auto w-24 h-24 bg-[#F0FDF4] rounded-full flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#1F2937]">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center italic text-xl text-gray-400 mt-20">"Your trust is sacred. We treat your data with the same care we treat your health."</p>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#1F2937]">Experience the App Yourself</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Technology that makes nutrition simple. Care that makes it effective.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="px-12 py-6 bg-gradient-to-r from-[#217328] to-[#1B5E20] text-white rounded-[32px] font-black text-lg uppercase tracking-widest shadow-2xl hover:scale-105 transition-all text-center"
            >
              Get Started Today
            </Link>

            <Link
              href="https://www.dietbaba.com/download"
              className="px-12 py-6 border-2 border-[#217328] text-[#217328] rounded-[32px] font-black text-lg uppercase tracking-widest hover:bg-[#E8F5E9] transition-all inline-flex items-center justify-center gap-2"
            >
              Download App <Download size={20} />
            </Link>
          </div>
        </div>
      </section> */}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* MANDATORY DISCLAIMER */}
      <section className="py-8 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> Dietician At Home provides non-medical, lifestyle-based nutrition guidance. We do not diagnose, treat, or cure medical conditions. Our services are intended to support healthy eating habits and daily nutrition routines, alongside any medical care advised by a healthcare professional.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AppTools;

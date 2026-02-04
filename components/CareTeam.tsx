
'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from 'react';
import {
  Heart,
  BarChart3,
  Infinity as InfinityIcon,
  ShieldCheck,
  Stethoscope,
  Smartphone,
  GraduationCap,
  Award,
  CheckCircle2,
  Users,
  Video,
  ClipboardList,
  Lock,
  Headphones,
  Search,
  MessageCircle,
  Mail,
  Phone,
  Zap,
  Bot
} from 'lucide-react';

const CareTeam: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  /* Removed simulated Dieticians array */

  return (
    <div className="bg-white min-h-screen text-[#1a1a2e] font-sans selection:bg-[#d4a574]/30 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: HERO SECTION */}

      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1920"
            alt="Healthy Nutrition"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1F2937]/85 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <nav className="flex justify-center items-center gap-2 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#217328]">/</span>
            <span className="text-[#217328]">THE CARE TEAM</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Meet Your <span className="text-[#217328]">Care Team</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Qualified professionals from the top dietician in Gurgaon dedicated to your health transformation journey
          </p>
        </div>
      </section>



      {/* SECTION 2: INTRODUCTION */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-12">Who Delivers Your Care</h2>
          <div className="border-l-4 border-[#217328] pl-8 text-left italic">
            <p className="text-xl md:text-2xl text-gray-500 leading-[1.8] font-light">
              At Dietician at Home, your health journey is guided by a team of highly qualified professionals who bring expertise, empathy, and commitment to every interaction. We believe nutrition care is not just about meal plans—it’s about human connection, professional guidance, and unwavering support throughout your journey.
            </p>
            <p className="text-xl md:text-2xl text-gray-500 leading-[1.8] font-light mt-8">
              Our team combines nutritional expertise with real-world understanding, ensuring you receive care that is both scientifically sound and practically achievable.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE FOUNDERS & CORE TEAM */}
      <section className="py-24 px-6 bg-[#f3f0f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-6">Built on Genuine Experience</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Founded by those who have walked the path, and guided by experts who know the science.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Gaurav Mehrotra */}
            <div className="bg-white rounded-[48px] p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-32 h-32 rounded-3xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Users size={48} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#1F2937] mb-2">Gaurav Mehrotra</h3>
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Founder</p>
                    <p className="text-gray-500 font-medium leading-relaxed mb-6 italic">
                      "I conceptualized Dietician At Home after navigating my own weight loss journey. I realized that consistency isn't about willpower—it's about removing friction. My vision is simple: bring professional care to those who need it most, right at their doorstep."
                    </p>
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      <span>Visionary & Conceptualizer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mitali Mehrotra */}
            <div className="bg-white rounded-[48px] p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8F5E9] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-0"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-32 h-32 rounded-3xl bg-[#E8F5E9] flex items-center justify-center text-[#217328] shrink-0">
                    <Stethoscope size={48} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#1F2937] mb-2">Dt. Mitali Mehrotra</h3>
                    <p className="text-[#217328] font-bold text-xs uppercase tracking-widest mb-4">Certified Dietician • Co-Founder</p>
                    <p className="text-gray-500 font-medium leading-relaxed mb-6">
                      Bringing professional nutritional expertise to the foundation of our programs. Mitali ensures that every protocol we design is grounded in nutritional science and safety.
                    </p>
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <CheckCircle2 size={16} className="text-[#217328]" />
                      <span>Nutritional Oversight</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dt. Kirti Gulati - Enhanced Profile */}
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-[#F8FFF9] rounded-[60px] p-12 md:p-20 shadow-[0_30px_80px_-15px_rgba(33,115,40,0.15)] border-2 border-[#217328]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#217328] via-blue-500 to-[#217328]"></div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#217328]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-5xl font-black text-[#1F2937] mb-3">Dr. Kirti Gulati</h3>
                <p className="text-[#217328] font-bold text-base uppercase tracking-[0.2em] mb-4">Senior Nutrition Advisor • 17+ Years Experience</p>
                <p className="text-blue-600 font-bold text-sm mb-6">Founder, Saar Healthcare</p>
                <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
                  With over 17 years of professional experience, Dr. Kirti leads our nutrition strategy and serves as our Senior Nutrition Advisor. Her deep understanding of metabolic health and client care ensures that our "Partner Dieticians" deliver world-class service to every client.
                </p>
              </div>

              {/* Specialties */}
              <div className="mb-10">
                <h4 className="text-lg font-bold text-[#1F2937] mb-4 uppercase tracking-wider">Specialties</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 bg-[#E8F5E9] text-[#217328] rounded-xl font-bold text-xs uppercase tracking-wider border border-[#217328]/20">Dietitian/Nutritionist</span>
                  <span className="px-5 py-2.5 bg-[#E8F5E9] text-[#217328] rounded-xl font-bold text-xs uppercase tracking-wider border border-[#217328]/20">Health Specialist</span>
                  <span className="px-5 py-2.5 bg-[#E8F5E9] text-[#217328] rounded-xl font-bold text-xs uppercase tracking-wider border border-[#217328]/20">Sports Nutritionist</span>
                  <span className="px-5 py-2.5 bg-[#E8F5E9] text-[#217328] rounded-xl font-bold text-xs uppercase tracking-wider border border-[#217328]/20">Weight Management</span>
                  <span className="px-5 py-2.5 bg-[#E8F5E9] text-[#217328] rounded-xl font-bold text-xs uppercase tracking-wider border border-[#217328]/20">Renal Dietician</span>
                  <span className="px-5 py-2.5 bg-[#E8F5E9] text-[#217328] rounded-xl font-bold text-xs uppercase tracking-wider border border-[#217328]/20">Metabolic Specialist</span>
                </div>
              </div>

              {/* Education & Experience */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#217328]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <GraduationCap size={24} className="text-blue-600" />
                    </div>
                    <p className="text-lg font-bold text-[#1F2937]">Education</p>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    <strong>Masters in Dietetics and Food Service Management</strong><br />
                    <span className="text-gray-500">Manav Rachna College, Faridabad (2008)</span>
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#217328]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center">
                      <Stethoscope size={24} className="text-[#217328]" />
                    </div>
                    <p className="text-lg font-bold text-[#1F2937]">Experience</p>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    <strong>Nutritionist and Dietician</strong><br />
                    <span className="text-gray-500">Fortis Escorts Hospital, Faridabad</span>
                  </p>
                </div>
              </div>

              {/* Professional Memberships */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#217328]/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Award size={24} className="text-amber-600" />
                  </div>
                  <p className="text-lg font-bold text-[#1F2937]">Professional Memberships</p>
                </div>
                <p className="text-gray-700 font-medium">
                  <strong>Indian Dietetic Association</strong> - Active Member
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-3xl font-black text-[#1F2937] mb-6">And Our Network of Expert Partners</h3>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              We have onboarded a carefully vetted network of Partner Dieticians who work under our nutritional protocols. This ensures that no matter where you are, you receive the same high standard of personalized care, supervised by our core leadership.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHAT OUR DieticianS DO */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-6">Your Dietician's Weekly Involvement</h2>
            <p className="text-xl text-gray-500">Not monthly check-ins. Not sporadic calls. <span className="font-bold text-[#217328]">WEEKLY</span> professional engagement.</p>
          </div>

          <div className="space-y-24">
            {[
              {
                title: "Reviews Your Data Beforehand",
                desc: "Before every call, your dietician reviews your meal logs, adherence patterns, health metrics, and progress trends. They come prepared—never winging it.",
                img: "/dietitian-reviewing-data.jpg",
                side: "left"
              },
              {
                title: "Discusses Goals, Habits & Challenges",
                desc: "Every week, you have a dedicated session with an experienced dietician to discuss what’s working, what’s not, and how to adjust your plan. Your dietician listens carefully, understands your body’s response, and adapts the diet accordingly.",
                img: "/dietitian-video-session.jpg",
                side: "right"
              },
              {
                title: "Curates Next Week's Meal Plan",
                desc: "After understanding your week, preferences, and feedback, your dietician personally curates the next week's meal plan—tailored, practical, and results-oriented.",
                img: "/meal-planning-process.jpg",
                side: "left"
              },
              {
                title: "Tracks Progress & Refines Strategy",
                desc: "Week by week, your nutrition strategy evolves based on real data. Continuous refinement ensures you're always moving toward your goals.",
                img: "/progress-tracking-charts.jpg",
                side: "right"
              }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#E8F5E9] rounded-[40px] group-hover:rotate-2 transition-transform duration-500" />
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={1200}
                      height={400}
                      className="relative z-10 rounded-[32px] shadow-2xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 w-full space-y-6">
                  <h3 className="text-3xl font-black text-[#1F2937]">{item.title}</h3>
                  <p className="text-xl text-gray-500 leading-relaxed">{item.desc}</p>
                  <div className="w-12 h-1 bg-[#217328] rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FIELD REPRESENTATIVES */}
      <section className="py-32 px-6 bg-[#e0f7f4]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-3/5 space-y-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937]">Our Field Representatives from the Top Dietician in Gurgaon: <span className="text-[#217328]">Your Monthly Touchpoint</span></h2>
            <p className="text-xl text-gray-600">Trained professionals who bring professional-grade equipment to you, every single month.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Zap className="text-[#217328]" />, title: "At-Location Visits", sub: "Visit you at home or office with digital wellness tools" },
                { icon: <BarChart3 className="text-[#217328]" />, title: "Detailed visits", sub: "Capture basic body metrics, BMI, and health metrics" },
                { icon: <Smartphone className="text-[#217328]" />, title: "App Walkthrough", sub: "Ensure you're comfortable using the app and device" },
                { icon: <Users className="text-[#217328]" />, title: "Friendly Support", sub: "Answer basic questions and maintain human connection" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#1F2937] text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-[#00bfa5]/20">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1F2937]/40 mb-4">Training & Background</p>
              <div className="flex flex-wrap gap-4">
                {["Equipment Handling", "Data Privacy", "Professional Conduct", "Parameter Measurement"].map(t => (
                  <div key={t} className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <CheckCircle2 size={14} className="text-[#217328]" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 w-full">
            <div className="relative">
              <div className="absolute -top-6 -right-6 bg-[#217328] text-white px-8 py-4 rounded-2xl z-20 shadow-2xl font-black text-xs uppercase tracking-widest">
                digital wellness tools • Trained Experts
              </div>
              <Image
                src="/home-visit.jpg"
                alt="Field representative"
                width={800}
                height={500}
                className="rounded-[48px] shadow-2xl w-full h-[500px] object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TECHNOLOGY TEAM */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] mb-6">Technology That Works in the Background</h2>
            <p className="text-xl text-gray-500">Seamless digital experience powered by dedicated tech support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone size={40} className="text-[#217328]" />,
                title: "App Development Team",
                desc: "Continuously improving your app experience, adding new features, and ensuring seamless device integration for better usability and performance.",
                color: "border-t-[#217328]"
              },
              {
                icon: <Bot size={40} className="text-[#217328]" />,
                title: "AI Assistant (Support Role)",
                desc: "Handles basic queries instantly. Does NOT replace dieticians—only supports with quick answers and information.",
                color: "border-t-[#217328]"
              },
              {
                icon: <Lock size={40} className="text-[#217328]" />,
                title: "Data Security Team",
                desc: "Ensures your health data is encrypted, secure, and accessible only to your care team. Your privacy is non-negotiable.",
                color: "border-t-[#217328]"
              }
            ].map((item, i) => (
              <div key={i} className={`bg-white p-12 rounded-[40px] shadow-lg border-t-4 ${item.color} hover:-translate-y-2 transition-all`}>
                <div className="mb-8">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-6">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR APPROACH */}
      <section className="py-32 px-6 bg-[#1F2937] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-24">How We Deliver Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🤝", title: "Human-First Philosophy", desc: "Technology enables us. Humans guide you. Every decision led by qualified professionals." },
              { icon: "📊", title: "Data-Driven Decisions", desc: "No guesswork. Strategy adjustment based on quantifiable progress and adherence patterns." },
              { icon: "🔄", title: "Continuous Involvement", desc: "Weekly sessions ensure you're never alone. We stay closely involved every step." },
              { icon: "🎯", title: "Results-Oriented", desc: "We measure success in outcomes. Structured, disciplined nutrition designed for real results." }
            ].map((p, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all text-center">
                <div className="text-4xl mb-6">{p.icon}</div>
                <h3 className="text-xl font-bold text-[#217328] mb-4">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: QUALITY STANDARDS */}
      <section className="py-20 px-6 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#1F2937] mb-24">Our Commitment to Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {[
              { icon: <GraduationCap className="text-[#217328]" />, title: "Professional Certifications", desc: "All our dieticians are fully qualified, registered, and certified in their respective specializations, ensuring professional and reliable guidance." },
              { icon: <Headphones className="text-[#217328]" />, title: "Responsive Support", desc: "Questions answered promptly. Concerns addressed immediately. You're never ignored." },
              { icon: <ShieldCheck className="text-[#217328]" />, title: "Privacy & Confidentiality", desc: "Your health data is encrypted, secure, and never shared without consent." },
              { icon: <Search className="text-[#217328]" />, title: "Regular Audits", desc: "Internal quality checks ensure every client receives the same high standard of care." },
              { icon: <Stethoscope className="text-[#217328]" />, title: "Care Coordination", desc: "We work alongside your doctors when needed, ensuring truly holistic and coordinated care." },
              { icon: <Heart className="text-[#217328]" />, title: "Empathy & Respect", desc: "We treat every client with dignity, compassion, and genuine care—always." }
            ].map((s, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">{s.icon}</div>
                <div className="space-y-2">
                  <h4 className="text-xl font-black text-[#1F2937] tracking-tight">{s.title}</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937] to-[#217328] z-0" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-10" />

        <div className="max-w-4xl mx-auto px-6 relative z-20 text-center text-white space-y-12">
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">Meet Your Future <br /> Care Team</h2>
          <p className="text-2xl text-white/80 font-light">Qualified professionals ready to guide your transformation</p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => window.location.hash = 'contact'}
              className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-black text-lg uppercase tracking-widest shadow-2xl shadow-orange-900/40 hover:-translate-y-1 transition-all active:scale-95"
            >
              Get Started Today
            </button>
            <button
              onClick={() => window.location.hash = 'contact'}
              className="px-12 py-6 border-2 border-white/40 text-white rounded-[32px] font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Talk to Our Team
            </button>
          </div>

          {/* <div className="pt-16 flex flex-col md:flex-row items-center justify-center gap-12 text-white/60">
             <div className="flex items-center gap-3">
                <Phone className="text-[#00bfa5]" />
                <span className="font-bold">+91 98994 80775</span>
             </div>
             <div className="flex items-center gap-3">
                <Mail className="text-[#00bfa5]" />
                <span className="font-bold">care@dieticianathome.com</span>
             </div>
             <div className="flex items-center gap-3">
                <MessageCircle className="text-[#00bfa5]" />
                <span className="font-bold">WhatsApp Now</span>
             </div>
          </div> */}

          {/* <div className="pt-12 flex justify-center gap-10 opacity-40 text-[10px] font-black uppercase tracking-[0.3em]">
             <span>✓ Qualified Experts</span>
             <span>✓ Weekly Involvement</span>
             <span>✓ 100% Privacy</span>
          </div> */}
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
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
    </div >
  );
};

export default CareTeam;

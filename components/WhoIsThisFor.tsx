
'use client';
import Image from "next/image";
import Link from "next/link";

import React from 'react';
import {
  Briefcase,
  Users,
  Heart,
  Stethoscope,
  Target,
  CheckCircle2,
  Phone,
  XCircle,
  ArrowRight
} from 'lucide-react';

const WhoIsThisFor: React.FC = () => {
  const personas = [
    {
      title: "Busy Professionals",
      icon: <Briefcase className="w-10 h-10 text-[#217328]" />,
      image: "/persona-busy-professional.jpg",
      description: "Convenience meets professional excellence for the modern workforce.",
      challenges: [
        "No time for clinic visits during working hours",
        "Irregular schedules and unpredictable routines",
        "Need convenience without compromising quality",
        "Stress eating and poor meal timing"
      ],
      solutions: [
        "At-location visits at your office or home for personalized care and convenience.",
        "Flexible scheduling around your calendar",
        "Weekly accountability to stay on track",
        "Quick, practical meal solutions for busy days"
      ],
      serves: "Working executives, entrepreneurs, business owners, managers"
    },
    {
      title: "Families Seeking Structure",
      icon: <Users className="w-10 h-10 text-[#217328]" />,
      image: "/nutrition-care-for-family-1.jpg",
      description: "Harmonizing health for everyone under one roof.",
      challenges: [
        "Difficult to coordinate nutrition for multiple members",
        "Different dietary needs in one household",
        "Time-consuming meal planning and shopping",
        "Need consistent healthy eating for children"
      ],
      solutions: [
        "Family group feature in our mobile app for easy coordination and shared nutrition management.",
        "Consolidated ingredient lists for the household",
        "Coordinated meal planning for all members",
        "Simplified grocery shopping with one master list"
      ],
      serves: "Parents, joint families, multi-generational households"
    },
    {
      title: "Elderly Individuals",
      icon: <Heart className="w-10 h-10 text-[#217328]" />,
      image: "/elderly-nutritions.jpg",
      description: "Specialized geriatric nutrition brought right to the bedside.",
      challenges: [
        "Mobility issues make clinic visits difficult",
        "Age-related health conditions requiring care",
        "Need regular tracking and professional guidance",
        "Feel isolated from healthcare support"
      ],
      solutions: [
        "Complete doorstep service—no travel needed for your convenience.",
        "Age-appropriate nutrition plans",
        "Monthly in-person visits at home",
        "Compassionate, client-focused approach"
      ],
      serves: "Senior citizens, aging parents, elderly relatives"
    },
    {
      title: "Condition Management Support",
      icon: <Stethoscope className="w-10 h-10 text-[#217328]" />,
      image: "/persona-elderly.jpg",
      description: "Professional precision for complex health challenges.",
      challenges: [
        "Living with PCOD/PCOS, Thyroid, or Diabetes",
        "Need specialized nutrition, not generic advice",
        "Require professional supervision and data tracking",
        "Want to manage symptoms through proper diet"
      ],
      solutions: [
        "Condition-specific specialized programs designed for targeted health needs.",
        "Qualified Dieticians with specialized expertise",
        "Weekly tracking and plan adjustments",
        "Coordination with your existing medical care"
      ],
      serves: "PCOD/PCOS patients, Thyroid conditions, Diabetes, Cancer recovery"
    },
    {
      title: "Serious About Outcomes",
      icon: <Target className="w-10 h-10 text-[#217328]" />,
      image: "/persona-results-driven.jpg",
      description: "For those who demand measurable health transformations.",
      challenges: [
        "Tired of generic meal plans that don't work",
        "Want measurable, data-driven results",
        "Need accountability and structure",
        "Frustrated with failed diet attempts"
      ],
      solutions: [
        "A data-driven approach with continuous tracking to support better health decisions.",
        "Weekly accountability calls with Dieticians",
        "Real-time adherence tracking",
        "Continuous refinement based on progress"
      ],
      serves: "Goal-oriented individuals, health enthusiasts"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-[60px] font-sans selection:bg-[#217328]/20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920"
            alt="Wellness Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#217328]/90 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <nav className="flex justify-center items-center gap-2 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Who Is This For</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Who Is <span className="text-[#A5D6A7]">This For?</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Discover If Our Premium Nutrition Care Is Right For You
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-6">Is Dietician at Home Right For You?</h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            Our service isn’t a generic calorie counter or a library of static recipes. It is a high-touch, professional nutrition service designed for individuals who value expert guidance from a dietician near them, doorstep convenience, and measurable health outcomes.
          </p>
        </div>
      </section>

      {/* Persona alternating sections */}
      <section>
        {personas.map((persona, index) => (
          <div key={index} className={`py-16 md:py-24 ${index % 2 !== 0 ? 'bg-[#FAF9F6]' : 'bg-white'}`}>
            <div className={`max-w-7xl mx-auto px-6 flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative group">
                  <div className="absolute inset-0 bg-[#217328]/0 group-hover:bg-[#217328]/10 transition-colors"></div>
                  <Image
                    src={persona.image}
                    alt={persona.title}
                    width={800}
                    height={520}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <div className="w-20 h-20 bg-[#E8F5E9] rounded-2xl flex items-center justify-center mb-8">
                  {persona.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">{persona.title}</h3>
                <p className="text-lg text-slate-500 mb-8 italic font-medium">"{persona.description}"</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-[#1E293B] mb-4 text-sm uppercase tracking-wider">Your Challenges:</h4>
                    <ul className="space-y-3">
                      {persona.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-500 text-base leading-6">
                          <span className="text-red-400 shrink-0">→</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B] mb-4 text-sm uppercase tracking-wider">How We Help:</h4>
                    <ul className="space-y-3">
                      {persona.solutions.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-base leading-6 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#217328] shrink-0 mt-1" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="inline-block px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <span className="text-[10px] font-black uppercase text-slate-400 block mb-1 tracking-widest">Perfect For</span>
                  <span className="text-base leading-6 font-bold text-[#217328]">{persona.serves}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Self-visit */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#217328]/20 rounded-full blur-[120px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12">This Service Is For You If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "You value professional guidance over DIY apps from your dietitian in Medanta Gurgaon",
              "You want results, not just generic advice",
              "You need convenience without compromising quality",
              "You’re willing to commit to weekly involvement and active participation in your health journey.",
              "You want data-driven, personalized nutrition",
              "You prefer humans, not just algorithms",
              "You need accountability and structure",
              "You're serious about long-term transformation"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 bg-[#217328] rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is NOT For */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto border-2 border-dashed border-slate-200 rounded-[40px] p-10 md:p-16 text-center">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <XCircle size={32} />
          </div>
          <h2 className="text-3xl font-extrabold text-[#1E293B] mb-6">Honest Transparency: Who This Is NOT For</h2>
          <div className="space-y-5">
            {[
              "People seeking quick fixes or magic solutions",
              "Those not willing to commit to weekly sessions",
              "Individuals expecting instant results without effort",
              "Those who prefer fully automated app-only solutions",
              "Anyone not ready for structured, disciplined nutrition"
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-slate-500 font-medium italic">
                <span className="text-red-400">✕</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#217328] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#43A047_1px,_transparent_1px)] bg-[length:24px_24px] opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Sounds Like You?</h2>
          <p className="text-xl opacity-90 mb-10 font-medium">Let's discuss how we can help you achieve your health goals with doorstep precision from a dietitian in Medanta Gurgaon.precision.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/#contact"
              className="px-12 py-5 bg-white text-[#217328] rounded-2xl font-black text-sm tracking-widest uppercase shadow-2xl shadow-green-900/20 hover:scale-105 transition-all text-center"
            >
              Get Started
            </Link>

            <Link
              href="tel:+919899480775"
              className="px-12 py-5 border-2 border-white/30 text-white rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Phone size={18} /> Call Us Now
            </Link>
          </div>
          <p className="mt-8 text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">
            Free session • No obligation • Complete privacy
          </p>
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
    </div>
  );
};

export default WhoIsThisFor;

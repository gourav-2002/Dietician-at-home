'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Users,
  ChefHat,
  ShoppingBasket,
  Calendar,
  Heart,
  CheckCircle2,
  ArrowRight,
  Plus,
  Apple,
  Activity,
  AlertCircle
} from 'lucide-react';

const FamilyNutrition: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'dad' | 'mom' | 'kid'>('mom');
  const router = useRouter();

  const menuDay = {
    mom: { role: 'Mom (Iron Support)', meal: 'Grilled Salmon with Asparagus', focus: 'Iron & Energy Support' },
    dad: { role: 'Dad (Heart Health)', meal: 'Quinoa & Roast Veggies', focus: 'Fiber & Heart Health' },
    kid: { role: 'Child (Growth)', meal: 'Salmon Pasta with Peas', focus: 'Protein for Growth' }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#217328]/20 overflow-x-hidden pt-[60px]">

      {/* SECTION 1: WHAT THIS PROGRAM SUPPORTS */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white pb-[60px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-[#E8F5E9]/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#217328]">
              <Link href="/" className="hover:text-[#1B5E20] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span>Our Programs</span>
              <span>/</span>
              <span className="text-[#217328]">Family Nutrition</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter text-slate-900">
              Complete Nutrition <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] to-[#43A047]">Support for Your Family</span> - Family Dietician Near You
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Coordinated meal planning for the whole house. One kitchen, multiple health goals supported.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => router.push('/contact')} className="px-10 py-5 bg-[#217328] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#217328]/20 hover:bg-[#1B5E20] hover:-translate-y-1 transition-all">
                Enroll My Family
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#E8F5E9] rounded-full blur-3xl opacity-50"></div>
            <Image
              src="/nutrition-care-for-family-1.jpg"
              alt="Family meal"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[60px] shadow-2xl object-cover z-10 border-8 border-white"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO THIS IS FOR */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Who This Program Is For – Families Looking for Dieticians and Nutritionists Nearby</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            This program is specifically designed for households managing multiple dietary needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Families with diverse health goals",
              "Households with children and elderly members",
              "Busy parents wanting one unified grocery list",
              "Anyone wanting to streamline family meal planning"
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
            <h2 className="text-3xl md:text-5xl font-black">How Coordination <span className="text-[#217328]">Helps</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-xl leading-8">
              We simplify the "what to cook" dilemma by aligning everyone's needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShoppingBasket />, title: "Unified Shopping", desc: "One grocery list for the whole house." },
              { icon: <ChefHat />, title: "One Meal Base", desc: "Recipes that start same but adapt for each person." },
              { icon: <Activity />, title: "Individual Goals", desc: "Tracking specific health metrics for each member." },
              { icon: <Heart />, title: "Family Health", desc: "Building healthy habits together." }
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
          <p className="text-lg text-red-800/80 leading-relaxed max-w-3xl mx-auto">
            This is a lifestyle-based nutrition program and does not involve medical treatment. For any disease-related care, each family member should continue consulting their respective doctors, even when supported by a family dietician near me.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW CARE IS DELIVERED */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#217328] rounded-[100px] rotate-3 scale-105 opacity-5"></div>
            <Image
              src="/nutrition-care-for-family.jpg"
              alt="Family care"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
              className="w-full h-auto rounded-[100px] shadow-2xl object-cover z-10"
            />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">Simplified for <span className="text-[#217328]">You</span></h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Family Dashboard</h4>
                  <p className="text-slate-500 mt-2">Manage everyone's progress in one app.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Home visits</h4>
                  <p className="text-slate-500 mt-2">We visit your home to check everyone's biometrics.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">Cook Instructions</h4>
                  <p className="text-slate-500 mt-2">Clear instructions for whoever is cooking to make one meal work for all.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Meal Section (Retained) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-black">Sample Meal Sync</h2>
            <p className="text-slate-500">Same core ingredients, adapted goals.</p>
          </div>
          <div className="flex justify-center gap-4 mb-12">
            {(['mom', 'dad', 'kid'] as const).map((id) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === id ? 'bg-[#217328] text-white shadow-xl' : 'bg-white text-slate-400'}`}
              >
                {id === 'mom' ? 'Mom' : id === 'dad' ? 'Dad' : 'Child'}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-[60px] p-12 shadow-sm flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Image
                src={
                  activeTab === "kid" ? "/nutrition-child.jpg" :
                    activeTab === "mom" ? "/nutrition-mom.jpg" :
                      "/nutrition-dad.jpg"
                }
                alt="Meal plan"
                width={720}
                height={480}
                className="w-full h-auto object-cover rounded-[40px]"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-2xl font-black text-slate-900">{menuDay[activeTab].role}</h3>
              <p className="text-lg font-bold text-[#217328]">{menuDay[activeTab].meal}</p>
              <p className="text-slate-500">{menuDay[activeTab].focus}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black">Support Your Family's Health</h2>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">One plan. Healthy family.</p>
          <button onClick={() => router.push('/contact')} className="px-12 py-6 bg-[#217328] text-white rounded-[32px] font-bold text-xl shadow-2xl hover:scale-105 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* MANDATORY DISCLAIMER */}
      <section className="py-8 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> Dietician At Home provides non-medical, lifestyle-based nutrition guidance focused on building healthy eating habits and sustainable daily nutrition routines. We do not diagnose, treat, or cure medical conditions, and our services are designed to complement any medical care recommended by a healthcare professional. If you are searching for dieticians and nutritionists near me, our guidance can support your overall wellness goals alongside professional medical advice.
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

export default FamilyNutrition;

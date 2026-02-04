
'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import { AlertTriangle, Activity, Scale, Stethoscope, AlertOctagon, HelpCircle, FileText, ChevronRight, ShieldAlert, HeartPulse } from 'lucide-react';

const MedicalDisclaimer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Nature of Service",
      icon: <Activity size={24} />,
      content: "Dietician at Home provides nutritional guidance, dietary counseling, and lifestyle coaching. Our services are educational in nature and are intended to support your overall wellness. Our certified Dieticians work within their professional scope of practice as nutrition experts and do not practice medicine."
    },
    {
      title: "Not Medical Advice or Treatment",
      icon: <Stethoscope size={24} />,
      content: (
        <div className="space-y-3">
          <p><strong>Our services do not diagnose, treat, prevent, or cure any disease or medical condition.</strong></p>
          <p>The information provided on our website, app, or during sessions by your licensed dietician near me is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Never disregard professional medical advice or delay in seeking it because of something you have read on our platforms.</p>
        </div>
      )
    },
    {
      title: "No Doctor-Patient Relationship",
      icon: <FileText size={24} />,
      content: "Use of our services, including the mobile app and home visits, does not establish a doctor-patient relationship. Our Dieticians are part of your wellness team but do not replace your primary care physician or specialist doctor."
    },
    {
      title: "Assumption of Risk",
      icon: <AlertTriangle size={24} />,
      content: "By using our services, you knowingly assume all risks associated with dietary changes and exercise. You acknowledge that you are voluntarily participating in these activities and agree to release Dietician at Home from any liability for potential injuries or health complications."
    },
    {
      title: "Consult Your Doctor",
      icon: <HeartPulse size={24} />,
      content: "You are strongly advised to consult with a qualified physician before starting any new nutrition or exercise program with your certified dietician near me, especially if you have pre-existing conditions such as Diabetes, Thyroid disorders, PCOD/PCOS, or Cancer. It is your responsibility to ensure that any dietary changes do not interfere with your current medical treatments or medications."
    },
    {
      title: "Testimonials and Results",
      icon: <Scale size={24} />,
      content: "Success stories and weight loss results featured on our platform are individual experiences and not guarantees of typical results. Outcomes depend on unique individual factors including metabolic rate, genetics, adherence, and health history. We do not guarantee specific weight loss numbers or health reversals."
    },
    {
      title: "Medications and Supplements",
      icon: <HelpCircle size={24} />,
      content: "Please inform your assigned Dietician of all prescribed medications and supplements you are currently taking. Nutritional recommendations may have nutrient-drug interactions. Never stop or change the dosage of any prescribed medication without the explicit approval of your prescribing doctor."
    },
    {
      title: "Emergency Situations",
      icon: <AlertOctagon size={24} />,
      content: (
        <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-900 font-medium">
          If you experience a medical emergency (e.g., severe allergic reaction, chest pain, sudden dizziness), stop following the nutritional plan immediately and contact your local emergency services or visit the nearest hospital. Our Dieticians are not trained or equipped to handle acute medical emergencies.
        </div>
      )
    },
    {
      title: "Technology Limitations",
      icon: <ShieldAlert size={24} />,
      content: "Data provided by our mobile app or connected devices (like smart scales) is for reference and trend-tracking only. These are not medical-grade diagnostic tools. Always rely on clinical laboratory tests and professional medical examinations for accurate health visits with your certified dietician near me."
    }
  ];

  return (
    <div className="bg-[#FBFBFD] min-h-screen py-12 md:py-20">
      <div className="w-full max-w-4xl mx-auto px-6 pt-24 md:pt-28">

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-[11px] font-bold tracking-widest uppercase">
          <button onClick={() => window.location.hash = ''} className="text-gray-400 hover:text-[#217328] transition-colors">Home</button>
          <span className="text-gray-300">/</span>
          <span className="text-[#217328]">Medical Disclaimer</span>
        </nav>

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4 tracking-tight">Medical Disclaimer</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Your health and safety are our priority as your licensed dietician near me. Please read this disclaimer carefully to understand the scope of our services.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border-2 border-transparent hover:border-[#217328]/10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden group"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <div className="flex items-center gap-5">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-[#217328] text-white shadow-lg shadow-[#217328]/20' : 'bg-[#F0FDF4] text-[#217328] group-hover:bg-[#217328] group-hover:text-white'}`}>
                    {section.icon}
                  </div>
                  <h2 className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-[#217328]' : 'text-[#334155]'}`}>{section.title}</h2>
                </div>
                <div className={`transition-transform duration-300 text-gray-400 ${openIndex === index ? 'rotate-90 text-[#217328]' : ''}`}>
                  <ChevronRight size={24} />
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 md:px-8 pb-8 pt-0 pl-[84px] md:pl-[6.5rem]">
                  <div className="text-gray-600 leading-loose text-[15px] font-medium">
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Last updated: October 24, 2025
          </p>
        </div>

        {/* MANDATORY DISCLAIMER */}
        <section className="mt-12 py-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> Dietician At Home provides non-medical, lifestyle-based nutrition guidance. We do not diagnose, treat, or cure medical conditions. Our services are intended to support healthy eating habits and daily nutrition routines, alongside any medical care advised by a healthcare professional.
          </p>
        </section>

      </div>
    </div>
  );
};

export default MedicalDisclaimer;


'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import { Shield, Eye, Lock, Share2, UserCheck, Cookie, HelpCircle, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Information We Collect",
      icon: <UserCheck size={24} />,
      content: (
        <div className="space-y-3">
          <p>We collect information that identifies you as an individual or relates to an identifiable individual ("Personal Information"). This includes:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
            <li><strong>Personal Identifiers:</strong> Name, age, gender, contact number, and email address.</li>
            <li><strong>Health Data:</strong> Weight, height, health history, dietary preferences, blood reports, and specific health conditions (e.g., PCOD, Diabetes) required to create your personalized plan.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and device information used to access our platforms.</li>
          </ul>
        </div>
      )
    },
    {
      title: "How We Use Your Information",
      icon: <Eye size={24} />,
      content: (
        <div className="space-y-3">
          <p>The information we collect is used to provide the high-quality nutrition care we promise:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
            <li>To design and deliver personalized meal plans tailored to your health goals.</li>
            <li>To facilitate home visits and sessions by our certified Dieticians.</li>
            <li>To monitor your health progress and adjust nutritional recommendations over time.</li>
            <li>To communicate updates, schedule appointments, and respond to your inquiries.</li>
            <li>To comply with professional documentation standards and legal requirements in India.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Data Security",
      icon: <Lock size={24} />,
      content: (
        <p>We treat your health data with the highest level of confidentiality as the best nutritionist in Delhi NCR. We implement robust security measures to protect your information, including restricted access to authorized personnel only and secure digital storage protocols.</p>
      )
    },
    {
      title: "Data Sharing and Disclosure",
      icon: <Share2 size={24} />,
      content: (
        <p><strong>Dietician at Home does not sell your personal data to third parties.</strong> We only share your information with our certified Dieticians assigned to your case, or with partner labs if you request health checkups through us. We may disclose information if required by law or to protect our legal rights.</p>
      )
    },
    {
      title: "Your Rights",
      icon: <Shield size={24} />,
      content: (
        <p>You have the right to access the health data we hold about you, request corrections to inaccurate information, and ask for the deletion of your account and related data. You can also opt out of our wellness newsletters at any time by clicking the 'Unsubscribe' link in our emails.</p>
      )
    },
    {
      title: "Cookies and Tracking",
      icon: <Cookie size={24} />,
      content: (
        <p>We use cookies to improve your browsing experience and understand website traffic as the best dietician in Gurugram. These cookies help us remember your login details and provide a seamless navigation experience. You can choose to disable cookies through your browser settings, though some features of our website may not function correctly.</p>
      )
    },
    {
      title: "Contact for Privacy Concerns",
      icon: <HelpCircle size={24} />,
      content: (
        <div className="space-y-2">
          <p>If you have any questions or concerns about this Privacy Policy, please contact our Data Protection Officer:</p>
          <p className="font-semibold text-gray-800">Email: care@dieticianathome.com</p>
          <p className="font-semibold text-gray-800">Phone: +91 98994 80775</p>
          <p className="text-gray-600">Address: Quest, 15th Floor, Ocus Quantum, Sector-51, Gurugram</p>
        </div>
      )
    },
    {
      title: "Last Updated",
      icon: <Calendar size={24} />,
      content: (
        <p>This Privacy Policy was last updated on <strong>October 24, 2025</strong>. We review this policy annually and will notify you of any significant changes via email or a prominent notice on our homepage.</p>
      )
    }
  ];

  return (
    <div className="bg-[#FBFBFD] min-h-screen py-12 md:py-20">
      <div className="w-full max-w-4xl mx-auto px-6 pt-24 md:pt-28">

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-[11px] font-bold tracking-widest uppercase">
          <button onClick={() => window.location.hash = ''} className="text-gray-400 hover:text-[#217328] transition-colors">Home</button>
          <span className="text-gray-300">/</span>
          <span className="text-[#217328]">Privacy Policy</span>
        </nav>

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            At Dietician at Home, the best dietician in Gurugram, your health data is your most private asset. Learn how we protect and respect your information.
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

              {/* Accordion Content */}
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

        {/* Bottom Reassurance */}
        <div className="mt-16 p-8 bg-[#F0FDF4] rounded-[32px] border border-[#217328]/20 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center text-[#217328] shrink-0 border border-[#217328]/10">
            <CheckCircle2 size={40} strokeWidth={2.5} />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-[#1F2937] font-extrabold text-xl mb-2">Your Privacy is Guaranteed</h4>
            <p className="text-[#4B5563] text-base leading-relaxed">
              We follow strict industry best practices as the best nutritionist in Delhi NCR to ensure your personal and health data remains confidential, secure, and protected at all times.
            </p>
          </div>
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

export default PrivacyPolicy;

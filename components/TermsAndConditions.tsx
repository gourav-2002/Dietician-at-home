
'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import { Check, FileText, Users, Calendar, CreditCard, RefreshCw, AlertTriangle, Shield, AlertCircle, Mail, ChevronRight } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <FileText size={24} />,
      content: (
        <div className="space-y-3">
          <p>By accessing or using the services provided by Dietician at Home, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
            <li>You must be at least 18 years of age to register for our programs.</li>
            <li>Minors must have express consent and supervision from a legal guardian.</li>
            <li>We reserve the right to modify these terms at any time without prior notice.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Services Offered",
      icon: <Users size={24} />,
      content: (
        <p>Dietician at Home, your cheap dietician near me, provides premium at-location nutrition care including: (a) Monthly in-person health visits at your doorstep, (b) Weekly virtual or physical Dietician sessions, (c) Fully personalized meal plans via our mobile app, and (d) Continuous progress tracking and support from certified experts.</p>
      )
    },
    {
      title: "Booking and Reservations",
      icon: <Calendar size={24} />,
      content: (
        <div className="space-y-3">
          <p>Appointments are subject to Dietician availability in your specific geography. Our booking rules include:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
            <li>Cancellations must be made at least 24 hours prior to the scheduled home visit.</li>
            <li>Failure to provide 24-hour notice may result in the forfeiture of that session.</li>
            <li>Rescheduling is allowed once per month free of charge, subject to availability.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Payment Terms",
      icon: <CreditCard size={24} />,
      content: (
        <p>Standard subscription pricing for our 3-month flagship programs typically ranges from ₹7,500 to ₹9,000 depending on the program complexity (e.g., Cancer Recovery or Diabetes Support). Payments must be made in full before the first home visit. We accept UPI, Credit/Debit Cards, and Net Banking. All prices are all-inclusive.</p>
      )
    },
    {
      title: "Cancellation and Refund Policy",
      icon: <RefreshCw size={24} />,
      content: (
        <div className="space-y-3">
          <p>We strive for complete satisfaction. Our refund eligibility is as follows:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
            <li><strong>Full Refund:</strong> If cancelled within 7 days and before the first home visit.</li>
            <li><strong>Pro-rata Refund:</strong> Available within the first 14 days, minus a processing fee and the cost of visits already conducted.</li>
            <li><strong>No Refund:</strong> No refunds are issued after 7 days of program commencement or if professional services have been utilized.</li>
          </ul>
        </div>
      )
    },
    {
      title: "User Responsibilities",
      icon: <Shield size={24} />,
      content: (
        <p>You agree to provide accurate and complete health information. Successful outcomes depend on your adherence to the personalized meal plans and active participation in sessions. You also agree to maintain a safe and respectful environment for our Dieticians during home visits.</p>
      )
    },
    {
      title: "Medical Disclaimer",
      icon: <AlertTriangle size={24} />,
      content: (
        <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-900 font-medium flex gap-3">
          <AlertTriangle size={20} className="shrink-0 mt-0.5" />
          <p>Our services provide nutritional guidance and are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician regarding a medical condition. Dietician at Home does not guarantee specific weight loss or health outcomes as results vary by individual.</p>
        </div>
      )
    },
    {
      title: "Privacy and Confidentiality",
      icon: <Shield size={24} />,
      content: (
        <p>Your health data is protected under our Privacy Policy with your dietician cost near me. We maintain strict confidentiality of all sessions and health visits. We follow strict industry best practices to ensure your personal and health data remains confidential, secure, and protected at all times.</p>
      )
    },
    {
      title: "Limitation of Liability",
      icon: <AlertCircle size={24} />,
      content: (
        <p>Dietician at Home shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services. Our maximum liability for any claim is limited to the amount paid by the user for the specific program in question.</p>
      )
    },
    {
      title: "Intellectual Property",
      icon: <FileText size={24} />,
      content: (
        <p>All content including meal plans, recipes, educational materials, and software (mobile app) is the property of Dietician at Home. You are granted a non-exclusive, non-transferable license to use these materials for personal health purposes only.</p>
      )
    },
    {
      title: "Changes to Terms",
      icon: <RefreshCw size={24} />,
      content: (
        <p>We reserve the right to update these terms to reflect changes in our service or legal obligations as your cheap dietician near me. We will notify active subscribers via email of any material changes. Continued use of our platform after such updates constitutes acceptance of the new terms.</p>
      )
    },
    {
      title: "Contact Us",
      icon: <Mail size={24} />,
      content: (
        <div className="space-y-2">
          <p>For any clarifications regarding our Terms and Conditions, please reach out to our legal consistency team:</p>
          <p className="font-semibold text-gray-800">Email: care@dieticianathome.com</p>
          <p className="font-semibold text-gray-800">Address: Quest, 15th Floor, Ocus Quantum, Sector-51, Gurugram</p>
        </div>
      )
    },
    {
      title: "Last Updated",
      icon: <Calendar size={24} />,
      content: (
        <p>These terms were last updated on <strong>January 23, 2026</strong>.</p>
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
          <span className="text-[#217328]">Terms and Conditions</span>
        </nav>

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4 tracking-tight">Terms and Conditions</h1>
          <p className="text-gray-500 max-w-4xl mx-auto text-lg font-medium leading-relaxed">
            Please read these terms carefully before subscribing to our programs with your dietician cost near me. We value clarity and transparency in our relationship with you.
          </p>
        </div>

        {/* Accordions */}
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
      </div>

      {/* MANDATORY DISCLAIMER */}
      <section className="mt-12 py-8 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> Dietician At Home provides non-medical, lifestyle-based nutrition guidance. We do not diagnose, treat, or cure medical conditions. Our services are intended to support healthy eating habits and daily nutrition routines, alongside any medical care advised by a healthcare professional.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;

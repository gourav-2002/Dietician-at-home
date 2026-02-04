
'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import { BadgeIndianRupee, Clock, HelpCircle, Mail, Phone, RefreshCw, AlertTriangle, ShieldCheck, ChevronRight, FileText } from 'lucide-react';

const RefundPolicy: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Overview",
      icon: <FileText size={24} />,
      content: (
        <p>At Dietician at Home, your cheap dietician near me, we are committed to providing premium nutrition care. We understand that circumstances may change, and we strive to maintain a transparent and customer-first refund process. This policy outlines the conditions under which refunds are granted.<strong>All refund decisions are made at the sole discretion of Dietician at Home management.</strong></p>
      )
    },
    {
      title: "Refund Eligibility",
      icon: <ShieldCheck size={24} />,
      content: (
        <div className="space-y-3">
          <p>You are eligible for a refund under the following conditions:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
            <li>Request is made within the first 7 days of program enrollment.</li>
            <li>No field representative home visits have been conducted yet.</li>
            <li>Technical issues preventing app access that our team cannot resolve within 48 hours.</li>
            <li>Failure of the company to provide the first session within 10 days of payment.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Non-Refundable Items",
      icon: <AlertTriangle size={24} />,
      content: (
        <div className="space-y-3">
          <p>The following items or scenarios are strictly non-refundable:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
            <li>tracking equipment (e.g., smart scales) once the seal is broken or the device is activated (yours to keep, value non-refundable).</li>
            <li>Completed dietician sessions (in-person or virtual).</li>
            <li>Personalized meal plans that have already been delivered and accessed via the app.</li>
            <li>Any requests made after the 7-day initial enrollment period.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Refund Timeline",
      icon: <Clock size={24} />,
      content: (
        <p>Once a refund request is approved, the amount will be processed back to your original payment method (UPI, Bank Account, or Credit Card) within 7 to 10 business days by your affordable dietician near me. You will receive an automated email confirmation as soon as the refund is initiated from our end.</p>
      )
    },
    {
      title: "How to Request a Refund",
      icon: <HelpCircle size={24} />,
      content: (
        <div className="space-y-3">
          <p>To initiate a refund, please follow these steps:</p>
          <ol className="list-decimal pl-5 space-y-2 marker:text-[#217328]">
            <li>Email <strong>care@dieticianathome.com</strong> with the subject line "Refund Request - [Your Order ID]".</li>
            <li>Provide a brief reason for your request to help us improve our service.</li>
            <li>Our support team will respond within 24 business hours to verify your eligibility.</li>
          </ol>
        </div>
      )
    },
    {
      title: "Partial Refunds",
      icon: <BadgeIndianRupee size={24} />,
      content: (
        <p>In certain cases where a program is cancelled mid-cycle (after the first 7 days but before the second month), a pro-rated refund may be considered <strong>strictly at the sole discretion of the management</strong>. Deductions will be made for used sessions, app setup fees, and any tracking equipment provided.</p>
      )
    },
    {
      title: "tracking Equipment Policy",
      icon: <RefreshCw size={24} />,
      content: (
        <p>If your program includes tracking equipment (like a smart BMI scale), it is yours to keep permanently. However, if you request a refund from your cheap dietician near me and the device seal is broken or activated, its full retail value (₹1,699) will be deducted from your total refund amount.</p>
      )
    },
    {
      title: "7-Day Refund Period",
      icon: <ShieldCheck size={24} />,
      content: (
        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-emerald-800 font-medium flex gap-3">
          <ShieldCheck size={20} className="shrink-0 mt-0.5" />
          <p>We offer a "No Questions Asked" refund eligibility for the first 7 days of enrollment, provided no professional services (sessions/visits) have been utilized. Your trust is our priority.</p>
        </div>
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
          <span className="text-[#217328]">Refund Policy</span>
        </nav>

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4 tracking-tight">Refund Policy</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Transparency is at the heart of our care as your affordable dietician near me. All refund requests are subject to verification and approval.
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

        {/* Contact Note */}
        <div className="mt-16 text-center bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
          <h4 className="text-[#1E293B] font-bold text-xl mb-2">Still have questions?</h4>
          <p className="text-gray-500 mb-6 font-medium">Our billing team is here to help you with any refund-related queries.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="mailto:care@dieticianathome.com"
              className="bg-[#217328] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a5c20] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#217328]/20"
            >
              <Mail size={20} />
              Email Support
            </Link>

            <Link
              href="tel:+919899480775"
              className="bg-white border-2 border-gray-100 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Us
            </Link>
          </div>
        </div>
      </div>

      {/* MANDATORY DISCLAIMER */}
      <section className="mt-12 py-8 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> Dietician At Home provides non-medical, lifestyle-based nutrition guidance. We do not diagnose, treat, or cure medical conditions. Our services are intended to support healthy eating habits and daily nutrition routines, alongside any medical care advised by a healthcare professional.
        </p>
      </section>
    </div >
  );
};

export default RefundPolicy;

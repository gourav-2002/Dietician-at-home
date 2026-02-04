
'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>("general-0");

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const categories = [
    {
      id: "general",
      title: "General Questions",
      items: [
        {
          q: "What is Dietician at Home?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
          a: "Dietician at Home is a specialized at-location nutrition care service. We bring qualified expert dieticians directly to your doorstep for monthly health visits and provide weekly virtual sessions along with fully personalized meal plans through our app."
        },
        {
          q: "How is this different from other nutrition services?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />,

          a: "Unlike traditional clinics or generic apps, we eliminate the need for travel. We provide a 'Human-First' approach where a trained field representative visits you, uses data-driven tracking devices we provide, and stays involved weekly to ensure you actually hit your goals."
        },
        {
          q: "What areas do you serve?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />,

          a: "Currently, we are serving Delhi/NCR region. We are rapidly expanding to other metropolitan cities across India soon."
        }
      ]
    },
    {
      id: "onboarding",
      title: "Process & Onboarding",
      items: [
        {
          q: "How do I get started?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
          a: "Simply fill out our enquiry form or call us. A care manager will have a brief discovery call with you to understand your goals, recommend a program from the best dietician near me for weight loss, and schedule your first at-home dietician visit."
        },
        {
          q: "How long does onboarding take?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
          a: "The first visit usually happens within 3-5 days of enrollment. Your first personalized meal plan goes live on the app within 24 hours after your initial session."
        }
      ]
    },
    {
      id: "delivery",
      title: "Service Delivery",
      items: [
        {
          q: "How often will I interact with my dietician?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
          a: "You will have a detailed video/call session every week. Additionally, you can message your dietician anytime through the app for quick queries, with responses usually within 24 hours."
        },
        {
          q: "Can I change my assigned dietician?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
          a: "Yes. While we match you with a dietician specialized in your needs at Makhija Dietician Gurgaon, if you feel the rapport isn't right, you can request a change through our support team for a seamless transition."
        }
      ]
    },
    {
      id: "nutrition",
      title: "Meal Plans & Nutrition",
      items: [
        {
          q: "Will the meal plans suit my preferences?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />,

          a: "Absolutely. Our dieticians design plans around your existing food habits, regional cuisine preferences, and kitchen availability. We believe sustainability is key to success."
        },
        {
          q: "Can I eat outside or at restaurants?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
          a: "Yes! You can log your restaurant meals in the app. Your dietician will then guide you on how to adjust your remaining meals for the day to stay within your targets."
        }
      ]
    },
    {
      id: "tech",
      title: "App & Technology",
      items: [
        {
          q: "What if I'm not tech-savvy?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
          a: "Our app is designed with simplicity in mind. During the first home visit, our Dietician will provide a complete walkthrough. If needed, we can also provide PDF copies of your plans and manage tracking via WhatsApp/Calls."
        },
        {
          q: "How does the tracking device work?",
          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />,
          a: "We provide a Bluetooth-enabled smart scale that measures weight and basic body metrics. It syncs automatically with your app whenever you step on it, allowing your Dietician at Makhija Dietician Gurgaon to see real progress in real-time."
        }
      ]
    }
  ];

  return (
    <div className="bg-[#FBFBFD] min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6 pt-[60px]">

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-[11px] font-bold tracking-widest uppercase">
          <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#217328]">FAQs</span>
        </nav>

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4 text-center">Frequently Asked Questions</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions about our at-home nutrition care with the best dietician near me for weight loss and start your wellness journey with confidence.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] px-2">{category.title}</h2>
              <div className="space-y-4">
                {category.items.map((item, idx) => {
                  const itemId = `${category.id}-${idx}`;
                  const isOpen = openIndex === itemId;
                  return (
                    <div
                      key={itemId}
                      className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(itemId)}
                        className="w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-xl bg-[#217328] text-white transition-colors ${isOpen ? 'bg-[#217328] text-white' : ''}`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {item.icon}
                            </svg>
                          </div>
                          <h3 className="text-base md:text-lg font-bold text-[#334155] pr-4 leading-snug">{item.q}</h3>
                        </div>
                        <div className={`transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 md:px-7 pb-7 pt-2">
                          <div className="h-px bg-gray-50 w-full mb-6"></div>
                          <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {item.a}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer Section */}
        <div className="mt-20 p-10 bg-[#217328] rounded-[40px] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Didn't find what you're looking for?</h3>
            <p className="text-white mb-8 max-w-lg mx-auto">
              Our care team is available Mon-Sat, 10 AM to 7 PM to answer any specific questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="mailto:care@dieticianathome.com"
                className="bg-[#ffffff] text-[#217328] px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[#217328]/20"
              >
                Email Our Team
              </Link>

              <Link
                href="tel:+919899480775"
                className="bg-white text-[#217328] border border-[#217328] px-10 py-4 rounded-2xl font-bold transition-all"
              >
                Call +91 98994 80775
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MANDATORY DISCLAIMER */}
      <section className="mt-12 py-8 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto">
          <strong>Disclaimer:</strong> Dietician At Home provides non-medical, lifestyle-based nutrition guidance. We do not diagnose, treat, or cure medical conditions. Our services are intended to support healthy eating habits and daily nutrition routines, alongside any medical care advised by a healthcare professional.
        </p>
      </section>
    </div>
  );
};

export default FAQs;

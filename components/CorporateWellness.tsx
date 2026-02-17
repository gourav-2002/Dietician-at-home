
'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CorporateWellness: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const stats = [
    { icon: "📈", label: "40% boost in productivity", desc: "Nutrition-focused employees are more alert, productive, and efficient at work." },
    { icon: "💪", label: "Reduced absenteeism", desc: "Preventive care leads to fewer sick days and health leave." },
    { icon: "❤️", label: "Higher satisfaction", desc: "A top-tier wellness benefit that improves employee morale and overall engagement." }
  ];

   const benefits = [
    { title: "Enhanced Team Performance", icon: "💼", desc: "Proper nutrition guidance from an experienced dietician translates directly to workplace excellence. Employees receiving support from the best dietician for weight loss near me maintain sustained energy, superior concentration, and peak cognitive performance. Smart nutrition choices mean your team operates at maximum capacity throughout every business quarter." },
    { title: "Lower Long-Term Healthcare Costs", icon: "🏥", desc: "Preventive care delivered by a qualified dietician in Gurugram reduces expensive medical interventions, insurance claims, and chronic disease management costs. Businesses partnering with the best dietician for weight loss near me invest in prevention rather than paying for treatments, creating substantial financial advantages over time." },
    { title: "Attract and Retain Top Talent", icon: "😊", desc: "Stand out in competitive hiring markets by offering access to a professional dietician in Gurugram as part of your benefits package. Today's skilled professionals actively seek employers providing the best dietician for weight loss near me and comprehensive wellness support, making this benefit a powerful recruitment and retention tool." },
    { title: "Build Stronger Workplace Culture", icon: "🌟", desc: "Create an environment where health matters by bringing our dietician in Gurugram directly into your organization. Teams thrive when leadership provides access to the best dietician for weight loss near me, fostering a culture of mutual support, wellness consciousness, and collective success." }
  ];

  const dashboardFeatures = [
    { title: "Employee Management", icon: "👥", desc: "Easily add or remove employees from the wellness program with the best dietician for weight loss near me with just a few clicks.." },
    { title: "Aggregate Insights", icon: "📈", desc: "View anonymized health trends and overall wellness improvements at the organizational level." },
    { title: "Engagement Tracking", icon: "📊", desc: "Monitor program participation rates and overall utilization across departments." },
    { title: "ROI Metrics", icon: "🎯", desc: "Track program effectiveness, participation rates, and wellness outcome data." }
  ];

  const steps = [
    { num: "01", title: "Initial session", desc: "Discuss your organization's goals and headcount." },
    { num: "02", title: "Custom Program Design", desc: "Tailored wellness program aligned with your culture." },
    { num: "03", title: "Employee Enrollment", desc: "Voluntary enrollment through our secure portal." },
    { num: "04", title: "Onboarding & Launch", desc: "Personal device setup and dietician assignment." },
    { num: "05", title: "Ongoing Management", desc: "Continuous care and quarterly aggregate reports." }
  ];

  const faqs = [
    { q: "What data does our organization receive?", a: "To ensure 100% privacy, your organization only receives aggregate, anonymized data from your dietician in Gurugram such as participation rates and overall engagement trends. We never share individual health parameters." },
    { q: "Is there a minimum employee count requirement?", a: "Our corporate programs are scalable. We typically work with organizations starting from 20 employees up to large enterprises with 5000+ staff." },
    { q: "How is pricing calculated?", a: "Pricing is volume-based. It depends on the number of enrolled employees and the depth of the programs required (e.g., standard wellness vs. specialized expert care)." },
    { q: "What happens if an employee leaves the company?", a: "You can manage your headcount in real-time through the HR dashboard with the best dietician for weight loss near me. If an employee leaves, their slot becomes available for a new team member." }
  ];

  return (
    <div className="bg-white min-h-screen text-[#2C3E50] pt-[60px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/corparate-wellness-banner.jpg"
            alt="Corporate Office"
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
            <span className="text-[#217328]">Corporate Wellness</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Corporate <span className="text-[#217328]">Wellness</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            World-Class Nutrition Care for Your Most Valuable Asset—Your Team
          </p>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Invest in Employee Health, Reap Business Results</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Structured nutrition care from a dietician in Gurugram transforms more than just waistlines—it transforms energy, productivity, and organizational resilience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-base leading-6 text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Case Grid */}
      <section className="bg-[#FAF9F6] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-extrabold mb-3">{benefit.title}</h3>
                <p className="text-base leading-6 text-gray-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Ecosystem Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-2/5">
            <Image
              src="/corporate-wellness-team.jpg"
              alt="HR Meeting"
              width={1200}
              height={800}
              className="rounded-[40px] shadow-2xl w-full"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">A Complete Wellness Ecosystem for Your Organization</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Same premium care as individuals",
                "Monthly at-location visits",
                "Weekly personal dietician calls",
                "Personalized meal plans & tracking",
                "Centralized HR dashboard",
                "Aggregate insights & metrics",
                "Dedicated account manager",
                "Mobile app for all participants"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[#217328] text-lg">✅</span>
                  <span className="text-base leading-6 font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Guarantee - CRITICAL */}
      <section className="py-24 px-6 bg-[#217328] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl">🔒</div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">Your Employees' Privacy is Sacred</h2>
          <p className="text-xl font-medium opacity-90 mb-12">Complete Confidentiality Guaranteed at Every Level</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-10 rounded-[32px] text-[#2C3E50] text-left shadow-2xl">
              <h4 className="text-[#217328] font-black uppercase tracking-widest text-xs mb-6">Organizational Insights</h4>
              <ul className="space-y-4 font-bold">
                <li>• Enrollment status</li>
                <li>• Program participation rates</li>
                <li>• Anonymized utilization metrics</li>
                <li>• Overall organization trends</li>
              </ul>
            </div>
            <div className="bg-[#217328] p-10 rounded-[32px] text-white text-left border border-2 border-white/80">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">What HR Does NOT See</h4>
              <ul className="space-y-4 font-bold">
                <li>✕ Individual health parameters</li>
                <li>✕ Personal meal plans</li>
                <li>✕ Private health information</li>
                <li>✕ Dietician session details</li>
              </ul>
            </div>
          </div>
          {/* <p className="text-sm font-bold tracking-[0.2em] uppercase opacity-70">HIPAA Compliant • Anonymized Data • Zero-Exposure Reporting</p>
         */}
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Simple, Powerful Dashboard for HR Teams</h2>
          <p className="text-gray-500 text-xl leading-8">Manage your entire wellness initiative from a single, secure interface.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dashboardFeatures.map((f, i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h4 className="font-bold mb-2">{f.title}</h4>
                <p className="text-base leading-6 text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-[40px] p-4 shadow-2xl border-8 border-gray-800">
            <div className="bg-gray-800 rounded-[30px] aspect-video flex items-center justify-center overflow-hidden">
              <Image
                src="/dietian-dashboard.jpg"
                alt="Dashboard Mockup"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

       <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Your Business Wellness Journey with Dietician in Gurugram
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-5xl mx-auto">
              A streamlined implementation process designed for businesses seeking measurable health outcomes and absolute employee privacy.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#217328] via-[#408d8b] to-transparent"></div>

            {/* Steps */}
            {[
              {
                num: "01",
                title: "Discovery & Business Alignment",
                desc: "Our dietician in Gurugram team analyzes your workforce size, wellness objectives, and organizational culture to design the optimal program structure. As the best dietician for weight loss near me for business clients, we ensure complete alignment with your company values."
              },
              {
                num: "02",
                title: "Customized Program Architecture",
                desc: "Your dedicated wellness framework is developed by our experienced nutrition experts, seamlessly integrating with existing HR policies and employee benefits structures."
              },
              {
                num: "03",
                title: "Secure Employee Enrollment",
                desc: "Team members voluntarily register through our privacy-protected portal, knowing their consultation with our dietician in Gurugram remains completely confidential from employer oversight."
              },
              {
                num: "04",
                title: "Program Launch & Resource Distribution",
                desc: " The best dietician for weight loss near me team handles professional equipment setup, qualified dietician assignment, and personalized wellness plan activation for every enrolled employee."
              },
              {
                num: "05",
                title: "Ongoing Care & Performance Reporting",
                desc: "Continuous nutrition support from our dietician in Gurugram with quarterly aggregated insights delivered to business leadership teams."
              }
            ].map((step, i) => (
              <div key={i} className="relative pl-20 pb-16 last:pb-0">

                {/* Number Badge */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#217328] to-[#217328] text-white flex items-center justify-center font-black shadow-lg">
                  {step.num}
                </div>

                {/* Card */}
                <div className="bg-[#E8F5E9] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <button className="px-10 py-5 rounded-full bg-gradient-to-r from-[#217328] to-[#217328] text-white font-bold text-lg shadow-xl hover:scale-105 transition-all">
              Schedule a Corporate Wellness Consultation
            </button>
          </div>

        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-4">Flexible, Scalable Pricing</h2>
        <p className="text-gray-500 mb-12 text-lg leading-8">Pricing varies based on headcount and specialized medical program needs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">
          {["Volume-based discounts", "Flexible monthly enrollment", "No long-term contracts", "All-inclusive - no hidden fees"].map((txt, i) => (
            <div key={i} className="flex items-center gap-3 font-semibold text-gray-600">
              <span className="text-emerald-500">✓</span> {txt}
            </div>
          ))}
        </div>
        <div className="p-10 border-2 border-dashed border-[#217328] rounded-3xl bg-[#E8F5E9]">
          <p className="font-bold text-lg mb-6">Need a custom quote for your team?</p>
          <button
            onClick={() => router.push('/contact')}
            className="bg-[#217328] hover:bg-[#1B5E20] text-white px-10 py-4 rounded-xl font-black text-sm tracking-widest uppercase transition-all"
          >
            Request Corporate Quote
          </button>
          <p className="mt-4 text-[13px] text-gray-400 font-bold uppercase tracking-widest">Response within 24 hours</p>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="bg-[#FAF9F6] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[40px] shadow-sm relative">
               <div className="text-6xl text-[#FF8C42] opacity-20 absolute top-8 left-8">“</div>
               <p className="text-lg italic text-gray-700 relative z-10 mb-8">
                 "Since implementing Dietician at Home's corporate wellness program, we've seen remarkable improvements in team morale and productivity. The privacy-first approach gave our employees confidence to participate fully."
               </p>
               <p className="font-bold">— Sarah Johnson, HR Director, TechCorp India</p>
               <p className="text-xs text-gray-400 mt-1">250+ Enrolled Employees</p>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-sm relative">
               <div className="text-6xl text-[#FF8C42] opacity-20 absolute top-8 left-8">“</div>
               <p className="text-lg italic text-gray-700 relative z-10 mb-8">
                 "The doorstep service is a game-changer for our executives. No more rushing to clinics during lunch breaks. Professional care that fits perfectly into our high-performance culture."
               </p>
               <p className="font-bold">— Rajesh Mehta, CEO, Global Solutions</p>
               <p className="text-xs text-gray-400 mt-1">Executive Wellness Program</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Accordion */}
      <section className="pb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-700">{faq.q}</span>
                <span className="text-2xl font-light text-[#217328]">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#217328] to-[#1B5E20] text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Ready to Transform Your Business Through Professional Nutrition Care?</h2>
          <p className="text-xl opacity-90 mb-12">Schedule a complimentary consultation to discover how our dietician in Gurugram delivers measurable wellness outcomes for forward-thinking businesses. As the best dietician for weight loss near me, we bring world-class nutrition expertise directly to your workplace.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => router.push('/contact')}
              className="px-12 py-5 bg-white text-[#217328] rounded-2xl font-black text-sm tracking-widest uppercase shadow-2xl transition-all hover:scale-105">
              Schedule Corporate session
            </button>
            <Link
              href="tel:+919899480775"
              className="px-12 py-5 border-2 border-white/30 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              Call Us Now
            </Link>
          </div>
          {/* <div className="mt-10 flex justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
            <span>No Commitment</span>
            <span>•</span>
            <span>Custom Quotes</span>
            <span>•</span>
            <span>Confidential Discussion</span>
          </div> */}
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

export default CorporateWellness;

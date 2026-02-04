'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import DateTimePicker from './DateTimePicker';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Success Message Component
  const SuccessMessage = () => (
    <div className="mb-6 p-4 bg-green-50 border-l-4 border-[#217328] rounded-lg animate-in fade-in duration-300">
      <div className="flex items-center">
        <div className="w-6 h-6 bg-[#217328] rounded-full flex items-center justify-center mr-3 text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-[#217328] font-bold text-lg">
            Form Submitted Successfully!
          </h3>
          <p className="text-[#2E7D32] mt-1 text-sm">
            Check your email for confirmation. Our team will contact you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields (message is optional)
    if (!formData.name || !formData.email || !formData.phone ||
      !formData.service || !formData.date) {
      alert('Please fill all required fields, including preferred date.');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/send-emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.service,
          preferredDateTime: formData.date,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setShowSuccessMessage(true);
        // Reset form
        setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });

        // Google Ads conversion tracking
        try {
          if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-17893204152/tX2SCLqg4ekbELjBktRC',
              'value': 1.0,
              'currency': 'INR'
            });
            console.log('Google Ads conversion tracked successfully');
          } else {
            console.warn('gtag not found - conversion not tracked');
          }
        } catch (err) {
          console.error('Error tracking conversion:', err);
        }

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
          setStatus('idle');
        }, 5000);
      } else {
        alert('Failed to send message: ' + (result.error || 'Unknown error'));
        setStatus('idle');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
      setStatus('idle');
    }
  };

  const contactCards = [
    {
      title: "Call Us",
      value: "+91 98994 80775",
      cta: "CALL NOW →",
      href: "tel:+919899480775",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email Us",
      value: "care@dieticianathome.com",
      cta: "SEND EMAIL →",
      href: "mailto:care@dieticianathome.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Visit Us",
      value: "Quest, 15th Floor, Ocus Quantum, Sector-51, Gurugram",
      cta: "GET DIRECTIONS →",
      href: "https://maps.google.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-[60px]">
      {/* Hero Section */}
      <section className="bg-[#1F2937] py-20 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=1920')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex justify-center items-center gap-2 mb-6 text-[11px] font-bold tracking-widest uppercase">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#217328]">Contact Us</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Contact <span className="text-[#217328]">Us</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Let's Plan Your Personalized Health Journey. Reach out to our professional team of dieticians in Gurgaon today for nutrition care at your doorstep.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-[#E8F5E9] text-[#217328] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#217328] group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">{card.title}</h3>
              <p className="text-gray-500 mb-6 text-base leading-relaxed min-h-[40px]">{card.value}</p>
              <Link
                href={card.href}
                className="text-[#217328] font-bold text-xs tracking-widest uppercase hover:underline"
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content: Form & Info */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div className="bg-white">
            <div className="mb-10">
              <h2 className="text-4xl font-extrabold text-[#1F2937] mb-3">
                Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#217328] to-[#1B5E20]">Message</span>
              </h2>
              <p className="text-gray-500 text-base">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {showSuccessMessage && <SuccessMessage />}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#217328] focus:ring-2 focus:ring-[#217328]/20 outline-none transition-all hover:border-gray-300"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email Address *"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#217328] focus:ring-2 focus:ring-[#217328]/20 outline-none transition-all hover:border-gray-300"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Your Phone Number *"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#217328] focus:ring-2 focus:ring-[#217328]/20 outline-none transition-all hover:border-gray-300"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <select
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#217328] focus:ring-2 focus:ring-[#217328]/20 outline-none transition-all bg-white hover:border-gray-300 cursor-pointer"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select Service Type</option>
                  <optgroup label="General Programs">
                    <option value="weight">Weight Management</option>
                    <option value="family">Family Nutrition</option>
                    <option value="elderly">Elderly Nutrition</option>
                  </optgroup>
                  <optgroup label="Specialized Programs">
                    <option value="pcod">PCOD/PCOS Care</option>
                    <option value="pregnancy">Pregnancy Nutrition</option>
                    <option value="postpartum">Postpartum Care</option>
                    <option value="preconception">Preconception Care</option>
                    <option value="thyroid">Thyroid Management</option>
                    <option value="diabetes">Diabetes Management</option>
                    <option value="cancer">Cancer Recovery</option>
                  </optgroup>
                  <optgroup label="Other Services">
                    <option value="corporate">Corporate Wellness Program</option>
                    <option value="other">Other / General Inquiry</option>
                  </optgroup>
                </select>
              </div>
              <DateTimePicker
                value={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
              />
              <textarea
                placeholder="Tell us about your health goals and any specific requirements... (Optional)"
                rows={5}
                className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#217328] focus:ring-2 focus:ring-[#217328]/20 outline-none transition-all resize-none hover:border-gray-300"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-[#217328] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#145020] text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-[#217328]/30 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✨' : 'Send Message 🚀'}
              </button>
            </form>
          </div>

          {/* Right: Quick Info */}
          <div className="bg-[#1F2937] p-10 md:p-14 rounded-[40px] text-white flex flex-col justify-between">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#217328]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-400 text-base mt-1">Sunday: Closed (Available for events)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Support</h3>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#217328]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">We aim to reply within 24 hours.</p>
                    <p className="text-gray-400 text-base mt-1">Our care team handles all inquiries with priority.</p>
                  </div>
                </div>
              </div>

              {/* <div>
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {['FB', 'IG', 'TW', 'LI'].map((social) => (
                    <div key={social} className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center font-bold text-xs transition-colors cursor-pointer">
                      {social}
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            <div className="mt-16 pt-10 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#217328]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">
                  <span className="block font-bold text-white mb-1">HQ Office</span>
                  Quest, 15th Floor, Ocus Quantum, Sector-51, Gurugram
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] bg-gray-100">

        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.3011861304713!2d77.0660833749491!3d28.424626493492504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2277f1d6cf0f%3A0x221883c43acfce55!2sQuest%20Coworks!5e1!3m2!1sen!2sin!4v1768476630406!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* MANDATORY DISCLAIMER */}
      <section className="py-8 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> Dietician At Home provides non-medical, lifestyle-based nutrition guidance. We do not diagnose, treat, or cure medical conditions. Our services are intended to support healthy eating habits and daily nutrition routines, alongside any medical care advised by a healthcare professional.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="bg-[#111827] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-10">Get expert nutrition tips & health updates delivered to your inbox weekly.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-orange-500 transition-all"
            />
            <button type="submit" className="bg-[#FF8C42] hover:bg-[#e67e3a] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20">
              Subscribe
            </button>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;

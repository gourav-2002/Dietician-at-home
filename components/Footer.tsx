'use client';
import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FooterProps {
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
  onNavigateRefund?: () => void;
  onNavigateDisclaimer?: () => void;
  onNavigateFAQs?: () => void;
  onNavigateBlog?: () => void;
  onNavigateWhoIsThisFor?: () => void;
  onNavigateCorporate?: () => void;
  onNavigateTools?: () => void;
  onNavigateTeam?: () => void;
  onNavigatePricing?: () => void;
  onNavigateHowItWorks?: () => void;
  onNavigateFamilyNutrition?: () => void;
  onNavigateElderlyNutrition?: () => void;
  onNavigateCancerRecovery?: () => void;
  onNavigateDiabetesManagement?: () => void;
  onNavigateThyroidManagement?: () => void;
  onNavigateWeightManagement?: () => void;
  onNavigatePcodCare?: () => void;
  onNavigatePreconceptionCare?: () => void;
  onNavigatePregnancyNutrition?: () => void;
  onNavigatePostpartumCare?: () => void;
}

const Footer: React.FC<FooterProps> = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { name: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', link: 'https://www.facebook.com/DieticianAtHome' },
    { name: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a4.5 4.5 0 004.5-4.5v-9A4.5 4.5 0 0016.5 3h-9A4.5 4.5 0 003 7.5v9A4.5 4.5 0 007.5 21z', link: 'https://www.instagram.com/dietician_at_home/' }
  ];

  const bottomLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Medical Disclaimer', path: '/medical-disclaimer' },
    { name: 'Service Disclosure', path: '/service-disclosure' },
  ];

  const programLinks = [
    { name: 'Weight Management Nutrition', path: '/programs/weight-management' },
    { name: 'PCOD / PCOS Care Nutrition', path: '/programs/pcod-pcos' },
    { name: 'Pregnancy Nutrition', path: '/programs/pregnancy-nutrition' },
    { name: 'Postpartum Care Nutrition', path: '/programs/postpartum-care' },
    { name: 'Preconception Care Nutrition', path: '/programs/preconception-care' },
    { name: 'Thyroid Management Nutrition', path: '/programs/thyroid-management' },
    { name: 'Diabetes Management Nutrition', path: '/programs/diabetes-management' },
    { name: 'Cancer Recovery Nutrition', path: '/programs/cancer-recovery' },
    { name: 'Elderly Nutrition', path: '/programs/elderly-nutrition' },
    { name: 'Family Nutrition', path: '/programs/family-nutrition' },
    { name: 'Keto Program', path: '/keto-diet' },
    { name: 'Gut Wellness', path: '/gut-wellness' },
    { name: 'Intermittent Fasting', path: '/intermittent-fasting' },
  ];

  const resourceLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Who Is This For', path: '/who-is-this-for' },
  ];

  const quickLinks = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'The Care Team', path: '/care-team' },
    { name: 'App & Tools', path: '/app-tools' },
    { name: 'Corporate Wellness', path: '/corporate-wellness' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#fafafe] to-[#f7f8fa] border-t border-gray-200 w-full pt-20 pb-10 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D1B4E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-y-16 gap-x-12 mb-20">

          {/* Column 1: Brand (25% conceptually) */}
          <div className="xl:col-span-1 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-8 cursor-pointer group transition-transform hover:scale-105" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); router.push('/'); }}>


              <Image
                src="/diet-at-home-logo.png"
                alt="Dietician at Home Logo"
                width={184}
                height={88}
                className="object-contain"
              />


            </div>
            <p className="text-[#6c757d] text-base leading-relaxed mb-10 font-medium opacity-90 max-w-xs">
              India's premium at-location nutrition care service with dieticians in Gurgaon. Bringing expert nutritional advice directly to your doorstep.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <Link
                  key={icon.name}
                  href={icon.link}
                  className="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-slate-400 hover:bg-[#217328] hover:to-[#217328] hover:text-white hover:-translate-y-2 hover:rotate-6 hover:shadow-xl transition-all duration-500 shadow-sm"
                  aria-label={icon.name}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (20% conceptually) */}
          <div>
            <div className="relative mb-8">
              <h4 className="text-[#2D1B4E] font-black text-sm tracking-[0.15em] uppercase">Quick Links</h4>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-[#217328] to-transparent rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group flex items-center gap-2 text-[#6c757d] hover:text-[#217328] text-[15px] font-bold transition-all duration-300"
                  >
                    <span className="w-0 h-[2px] bg-[#217328] group-hover:w-3 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Programs (30% conceptually) */}
          <div className="xl:col-span-1">
            <div className="relative mb-8">
              <h4 className="text-[#2D1B4E] font-black text-sm tracking-[0.15em] uppercase">Our Programs</h4>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-[#217328] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-y-4">
              <ul className="space-y-4">
                {programLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="group flex items-center gap-2 text-[#6c757d] hover:text-[#217328] text-[15px] font-bold transition-all duration-300 text-left"
                    >
                      <span className="w-0 h-[2px] bg-[#217328] group-hover:w-3 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Resources (10% conceptually) */}
          <div>
            <div className="relative mb-8">
              <h4 className="text-[#2D1B4E] font-black text-sm tracking-[0.15em] uppercase">Resources</h4>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-[#217328] to-transparent rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group flex items-center gap-2 text-[#6c757d] hover:text-[#217328] text-[15px] font-bold transition-all duration-300 text-left"
                  >
                    <span className="w-0 h-[2px] bg-[#217328] group-hover:w-3 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Resources (15% conceptually) */}
          <div>
            <div className="relative mb-8">
              <h4 className="text-[#2D1B4E] font-black text-sm tracking-[0.15em] uppercase">Contact Us</h4>
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-[#217328] to-transparent rounded-full"></div>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#217328] group-hover:bg-gradient-to-br group-hover:from-[#217328] group-hover:to-[#217328] group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                  <svg className="w-9 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-[#6c757d] text-sm font-bold leading-relaxed transition-colors group-hover:text-[#2D1B4E]">Quest, 15th Floor, Ocus Quantum, Sector-51, Gurugram</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = 'tel:+919899480775'}>
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#217328] group-hover:bg-gradient-to-br group-hover:from-[#217328] group-hover:to-[#217328] group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[#6c757d] text-sm font-black transition-colors group-hover:text-[#2D1B4E] tracking-tight">+91 98994 80775</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:care@dieticianathome.com'}>
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#217328] group-hover:bg-gradient-to-br group-hover:from-[#217328] group-hover:to-[#217328] group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                  <svg className="w-9 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[#6c757d] text-sm font-bold transition-colors group-hover:text-[#2D1B4E] underline decoration-[#217328]/30 decoration-2 underline-offset-4 group-hover:decoration-[#217328]">care@dieticianathome.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="pt-10 border-t border-gray-200/60 flex flex-col xl:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center xl:items-start gap-1">
            <p className="text-slate-400 text-[13px] font-medium tracking-tight">
              © {currentYear} Dietician at Home. All rights reserved.
            </p>
            <p className="text-slate-300 text-[11px] font-black uppercase tracking-widest">
              Dietician at Home is a proprietorship operated by Gaurav Mehrotra.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-md px-8 py-3 rounded-[2rem] border border-gray-100 shadow-sm flex flex-wrap justify-center gap-x-8 gap-y-3">
            {bottomLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-slate-400 hover:text-[#217328] text-[13px] font-bold transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#217328] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

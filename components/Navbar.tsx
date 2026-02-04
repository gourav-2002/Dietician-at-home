'use client';
import Image from "next/image";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  onNavigate?: (page: string) => void;
}


import { Scale, Flower2, Baby, HeartHandshake, CalendarHeart, Activity, Droplet, Ribbon, Users, UserPlus, Flame, Leaf, Clock } from 'lucide-react';

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };


  const programs = [
    { name: "Weight Management", page: "/programs/weight-management", icon: Scale, color: "text-rose-500", bg: "bg-rose-50" },
    { name: "PCOD/PCOS Care", page: "/programs/pcod-pcos", icon: Flower2, color: "text-pink-500", bg: "bg-pink-50" },
    { name: "Pregnancy Nutrition", page: "/programs/pregnancy-nutrition", icon: Baby, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Postpartum Care", page: "/programs/postpartum-care", icon: HeartHandshake, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Preconception Care", page: "/programs/preconception-care", icon: CalendarHeart, color: "text-violet-500", bg: "bg-violet-50" },
    { name: "Thyroid Management", page: "/programs/thyroid-management", icon: Activity, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Diabetes Management", page: "/programs/diabetes-management", icon: Droplet, color: "text-sky-500", bg: "bg-sky-50" },
    { name: "Cancer Recovery", page: "/programs/cancer-recovery", icon: Ribbon, color: "text-teal-500", bg: "bg-teal-50" },
    { name: "Family Nutrition", page: "/programs/family-nutrition", icon: Users, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Elderly Nutrition", page: "/programs/elderly-nutrition", icon: UserPlus, color: "text-green-500", bg: "bg-green-50" },
    { name: "Keto Program", page: "/keto-diet", icon: Flame, color: "text-orange-500", bg: "bg-orange-50" },
    { name: 'Gut Wellness', page: '/gut-wellness', icon: Leaf, color: "text-lime-500", bg: "bg-lime-50" },
    { name: 'Intermittent Fasting', page: '/intermittent-fasting', icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
  ];

  const aboutItems = [
    { name: "The Care Team", page: "/care-team" },
    { name: "Medical Disclaimer", page: "/medical-disclaimer" },
    { name: "Service Disclosure", page: "/service-disclosure" }
  ];


  const menuItems = [
    { name: 'How It Works', page: '/how-it-works' },
    { name: 'About Us', page: '/about', hasAboutDropdown: true },
    { name: 'Our Programs', hasDropdown: true },
    { name: 'Pricing', page: '/pricing' },
    { name: 'App & Tools', page: '/app-tools' },
    { name: 'Corporate Wellness', page: '/corporate-wellness' },
    { name: 'Contact', page: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 z-[999] w-full transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50 py-2' : 'bg-white border-b border-gray-100 py-4'}`}>
        <div className="mx-auto px-6 lg:px-10">
          <div className="flex justify-between h-16 items-center">

            {/* Logo (Left) */}
            <div
              onClick={() => router.push('/')}
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer group transition-transform hover:scale-105 active:scale-95"
            >

              <Image
                src="/diet-at-home-logo.png"
                alt="Dietician at Home Logo"
                width={184}
                height={88}
                className="object-contain"
              />
              {/* <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
              <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2D1B4E] to-[#1a237e]">Dietician</span>
              <span className="text-[#64748b] font-medium italic text-lg leading-none group-hover:text-[#217328] transition-colors duration-300">at Home</span>
            </div> */}
            </div>

            {/* Desktop Menu (Center) */}
            <div className="hidden xl:flex flex-grow justify-center items-center gap-x-5 px-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.hasDropdown) setIsProgramsOpen(true);
                    if (item.hasAboutDropdown) setIsAboutOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.hasDropdown) setIsProgramsOpen(false);
                    if (item.hasAboutDropdown) setIsAboutOpen(false);
                  }}
                >
                  <button
                    onClick={() => item.page && !item.hasAboutDropdown && handleNavigation(item.page)}
                    className={`relative flex items-center gap-1.5 text-[13px] font-extrabold tracking-[0.12em] uppercase transition-all duration-300 ${(item.hasDropdown && isProgramsOpen) || (item.hasAboutDropdown && isAboutOpen) ? 'text-[#217328]' : 'text-slate-600 hover:text-[#217328]'}`}
                  >
                    {item.name}
                    {(item.hasDropdown || item.hasAboutDropdown) && (
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${(item.hasDropdown && isProgramsOpen) || (item.hasAboutDropdown && isAboutOpen) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {/* Hover Underline Animation */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#217328] transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  {/* Programs Dropdown Menu - MEGA MENU REDESIGN */}
                  {item.hasDropdown && isProgramsOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-[700px] bg-white border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-8 z-50 animate-fade-in-up">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {programs.map((program) => (
                          <Link
                            key={program.name}
                            href={program.page}
                            onClick={() => setIsProgramsOpen(false)}
                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 group/item border border-transparent hover:border-slate-100"
                          >
                            <div className={`w-12 h-12 rounded-full ${program.bg} flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-300`}>
                              <program.icon className={`w-6 h-6 ${program.color}`} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[15px] font-bold text-slate-700 group-hover/item:text-[#2D1B4E] transition-colors">{program.name}</span>
                              <span className="text-[10px] font-bold text-[#217328] tracking-wider uppercase mt-0.5 flex items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 translate-y-1 group-hover/item:translate-y-0">
                                View Program
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* About Us Dropdown Menu */}
                  {item.hasAboutDropdown && isAboutOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-white/95 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl py-4 z-50 animate-fade-in-up">
                      <div className="grid grid-cols-1 gap-1 px-2">
                        {aboutItems.map((aboutItem) => (
                          <Link
                            key={aboutItem.name}
                            href={aboutItem.page}
                            onClick={() => setIsAboutOpen(false)}
                            className="flex items-center justify-between px-5 py-3 text-[13px] font-bold text-slate-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-white hover:text-[#217328] transition-all duration-300 rounded-xl group/item"
                          >
                            <span className="transition-transform duration-300 group-hover/item:translate-x-2">{aboutItem.name}</span>
                            <svg className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-all duration-300 group-hover/item:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button (Right) */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => handleNavigation('/contact')}
                className="relative overflow-hidden group bg-gradient-to-r from-[#217328] to-[#217328] hover:from-[#217328] hover:to-[#217328] text-white px-9 py-3.5 rounded-2xl font-black text-xs tracking-widest uppercase shadow-xl transition-all hover:shadow-[#217328]/50 hover:-translate-y-1 active:scale-95"
              >
                <span className="relative z-10">GET STARTED</span>
                {/* Shimmer Effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-white/20 -skew-x-12 transition-all duration-1000 group-hover:left-[100%]"></div>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-[#217328] transition-all duration-300 group"
                aria-label="Toggle menu"
              >
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <span className={`absolute h-0.5 w-7 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                  <span className={`absolute h-0.5 w-7 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute h-0.5 w-7 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
      </nav>

      {/* Mobile Sidebar/Menu - MOVED OUTSIDE NAV */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 fixed inset-0 top-[72px] z-[998] overflow-y-auto animate-fade-in">
          <div className="px-6 py-10 space-y-8">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-slate-100 pb-6 last:border-0">
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      setIsMobileProgramsOpen(!isMobileProgramsOpen);
                    } else if (item.hasAboutDropdown) {
                      setIsMobileAboutOpen(!isMobileAboutOpen);
                    } else if (item.page) {
                      handleNavigation(item.page);
                    }
                  }}
                  className="flex items-center justify-between text-lg font-black text-slate-900 uppercase tracking-widest hover:text-[#217328] w-full text-left transition-colors duration-300"
                >
                  {item.name}
                  {(item.hasDropdown || item.hasAboutDropdown) && (
                    <svg className={`w-5 h-5 transition-transform duration-300 ${(item.hasDropdown && isMobileProgramsOpen) || (item.hasAboutDropdown && isMobileAboutOpen) ? 'rotate-180 text-[#217328]' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.hasDropdown && isMobileProgramsOpen && (
                  <div className="mt-6 grid grid-cols-1 gap-4 pl-4 border-l-4 border-[#217328]/20">
                    {programs.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => handleNavigation(p.page)}
                        className="text-base font-bold text-slate-600 hover:text-[#217328] text-left transition-colors duration-300 py-1"
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                )}
                {item.hasAboutDropdown && isMobileAboutOpen && (
                  <div className="mt-6 grid grid-cols-1 gap-4 pl-4 border-l-4 border-[#217328]/20">
                    {aboutItems.map((aboutItem) => (
                      <button
                        key={aboutItem.name}
                        onClick={() => handleNavigation(aboutItem.page)}
                        className="text-base font-bold text-slate-600 hover:text-[#217328] text-left transition-colors duration-300 py-1"
                      >
                        {aboutItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6">
              <button
                onClick={() => handleNavigation('/contact')}
                className="w-full bg-[#217328] text-white py-5 rounded-[2rem] font-black text-lg tracking-widest uppercase shadow-2xl shadow-[#217328]/30 active:scale-95 transition-all outline-none ring-4 ring-[#217328]/10"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

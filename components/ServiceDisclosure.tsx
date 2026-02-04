'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import { FileText, Users, Award, Home, UserCheck, AlertCircle, Shield, DollarSign, MapPin, Smartphone, TrendingUp, Mail, Calendar, CheckCircle2 } from 'lucide-react';

const ServiceDisclosure: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Service Scope & What We Provide (REVISED)",
            icon: <FileText size={24} />,
            content: (
                <div className="space-y-4">
                    <p><strong>Dietician at Home</strong> is a lifestyle-focused nutrition support service that provides personalized dietary guidance, meal planning, and wellness tracking in a convenient at-home format. Our services are designed to support healthy eating habits and nutrition consistency alongside any medical care advised by your healthcare provider.</p>
                    <p className="font-semibold text-gray-800 mt-6">Our services include:</p>
                    <ul className="list-disc pl-5 space-y-3 marker:text-[#217328]">
                        <li><strong>Monthly At-Location Wellness Visits:</strong> A trained field representative visits your home or office to assist with non-diagnostic wellness measurements (such as weight and basic body metrics trends) using standardized lifestyle tracking tools. These visits are for tracking and support purposes only and do not involve medical evaluation or diagnosis.</li>
                        <li><strong>Weekly Dietician sessions:</strong> One-on-one video or phone sessions with a qualified dietician to review progress, discuss challenges, and adjust meal plans based on lifestyle needs and goals.</li>
                        <li><strong>Personalized Meal Plans:</strong> Weekly nutrition plans customized to your preferences, routines, and health objectives, designed to complement any medical guidance you may already be following.</li>
                        <li><strong>Mobile App Access:</strong> A dedicated app to log meals, view plans, track trends, and communicate with your assigned dietician.</li>
                        <li><strong>Home tracking Device:</strong> A Bluetooth-enabled smart scale provided for personal wellness tracking, enabling consistent self-tracking between sessions.</li>
                        <li><strong>Family Group Management:</strong> Optional coordinated nutrition planning for multiple family members within one program.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "What We Do NOT Provide",
            icon: <AlertCircle size={24} />,
            content: (
                <div className="space-y-4">
                    <p className="font-semibold text-gray-800">It is critical to understand the limitations of our service:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li><strong>Medical Diagnosis or Treatment:</strong> We do not diagnose, treat, or cure any medical conditions. Our dieticians provide nutrition guidance only.</li>
                        <li><strong>Emergency Medical Care:</strong> We are not equipped to handle medical emergencies. Always contact your physician or emergency services for urgent health concerns.</li>
                        <li><strong>Prescription of Medications:</strong> Our dieticians cannot prescribe medications or supplements that require a medical prescription.</li>
                        <li><strong>Replacement for Medical Care:</strong> Our services complement—but do not replace—care from your physician, endocrinologist, or other medical specialists.</li>
                        <li><strong>Guaranteed Results:</strong> While we provide evidence-based nutrition guidance, individual results vary based on adherence, metabolism, and other factors beyond our control.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Professional Qualifications",
            icon: <Award size={24} />,
            content: (
                <div className="space-y-3">
                    <p>All dieticians at Dietician at Home hold recognized qualifications in nutrition and dietetics:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li>Bachelor's or Master's degree in Nutrition, Dietetics, or Food Science from accredited institutions.</li>
                        <li>Minimum 3-5 years of professional experience in clinical or community nutrition settings.</li>
                        <li>Ongoing professional development and training in evidence-based nutrition practices.</li>
                    </ul>
                    <p className="text-sm text-gray-600 italic mt-3">Note: Our dieticians are not medical doctors and do not hold MBBS or MD degrees. For medical concerns, please consult your physician.</p>
                </div>
            )
        },
        {
            title: "Service Delivery Model",
            icon: <Home size={24} />,
            content: (
                <div className="space-y-3">
                    <p>Our unique at-home service model is designed for convenience and consistency:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li><strong>Initial visit:</strong> After enrollment, a field representative visits your location within 3-5 days for basic body metrics and device setup.</li>
                        <li><strong>Dietician session:</strong> Your assigned dietician conducts a detailed session (video/phone) to understand your goals, health history, and lifestyle.</li>
                        <li><strong>Weekly Meal Plans:</strong> Customized meal plans are delivered via the app every week, adjusted based on your progress and feedback.</li>
                        <li><strong>Weekly Check-ins:</strong> Regular sessions with your dietician to review adherence, address challenges, and refine your plan.</li>
                        <li><strong>Monthly Re-visits:</strong> Field representative returns monthly for updated wellness measurements.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Client Responsibilities",
            icon: <UserCheck size={24} />,
            content: (
                <div className="space-y-3">
                    <p>To achieve the best outcomes, clients are expected to:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li><strong>Provide Accurate Information:</strong> Share complete and truthful health history, including medical conditions, medications, and allergies.</li>
                        <li><strong>Follow Medical Advice:</strong> Continue all prescribed medical treatments and inform your physician about dietary changes.</li>
                        <li><strong>Adhere to Meal Plans:</strong> Follow the provided meal plans as closely as possible and communicate any challenges.</li>
                        <li><strong>Attend sessions:</strong> Participate in scheduled weekly sessions with your dietician.</li>
                        <li><strong>Track Progress:</strong> Use the tracking device weekly and log meals/parameters in the app.</li>
                        <li><strong>Communicate Changes:</strong> Inform your dietician, recognized among the best nutritionist in Delhi NCR, immediately of any new medical diagnoses, medications, or health concerns.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Medical Coordination & Limitations",
            icon: <Shield size={24} />,
            content: (
                <div className="space-y-3">
                    <p><strong>Important:</strong> Dietician at Home operates as a nutrition guidance service, not a medical practice.</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li>We <strong>strongly recommend</strong> coordinating our nutrition plans with your primary care physician or specialist.</li>
                        <li>For clients with medical conditions (diabetes, thyroid disorders, PCOD, etc.), we work within the parameters set by your doctor.</li>
                        <li>We may request medical clearance or recent lab reports before starting certain specialized programs.</li>
                        <li>If we observe concerning health trends during tracking, we will advise you to consult your physician immediately.</li>
                        <li>We do not interpret medical test results or provide medical opinions on diagnoses.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Pricing & Payment Transparency",
            icon: <DollarSign size={24} />,
            content: (
                <div className="space-y-3">
                    <p>Our pricing structure is transparent and communicated upfront:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li><strong>Program Fees:</strong> Clearly stated before enrollment, covering dietician sessions, meal plans, app access, and monthly home visits.</li>
                        <li><strong>tracking Device (Yours to Keep):</strong> A professional Bluetooth-enabled smart scale (₹1,699 value) is included in your first payment. This device is yours to keep permanently.</li>
                        <li><strong>No Hidden Costs:</strong> All services included in the program fee are disclosed upfront. No surprise charges.</li>
                        <li><strong>Payment Terms:</strong> Monthly billing cycle with payment due at the start of each month.</li>
                        <li><strong>Cancellation Policy:</strong> Detailed in our Refund Policy, available on our website.</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">For current pricing, please visit our <Link href="/pricing" className="text-[#217328] underline font-semibold">Pricing Page</Link> or contact our team.</p>
                </div>
            )
        },
        {
            title: "Geographic Service Areas",
            icon: <MapPin size={24} />,
            content: (
                <div className="space-y-3">
                    <p>Dietician at Home currently operates in select cities across India:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li><strong>Primary Service Areas:</strong> Delhi NCR (Delhi, Gurgaon, Noida, Faridabad, Ghaziabad).</li>
                        <li><strong>Expanding Coverage:</strong> We are actively expanding to additional cities. Check our website for the latest service area updates.</li>
                        <li><strong>Remote sessions:</strong> For clients outside service areas, we offer remote-only programs (without home visits) on a case-by-case basis.</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">Please confirm service availability in your area before enrollment by contacting our team.</p>
                </div>
            )
        },
        {
            title: "Technology & Equipment Disclosure",
            icon: <Smartphone size={24} />,
            content: (
                <div className="space-y-3">
                    <p>Our service relies on technology for optimal delivery:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li><strong>Mobile App:</strong> Available as a web app (PWA) and Android APK. iOS app coming soon. Requires internet connectivity.</li>
                        <li><strong>tracking Device:</strong> Bluetooth-enabled smart scale provided. Requires smartphone with Bluetooth capability.</li>
                        <li><strong>Video sessions:</strong> Conducted via video call platforms. Requires stable internet connection and camera-enabled device.</li>
                        <li><strong>Data Syncing:</strong> Health parameters sync automatically via Bluetooth. Manual entry available if syncing fails.</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">Technical support is available via our app chat or email for any device or app-related issues.</p>
                </div>
            )
        },
        {
            title: "Results & Outcomes Disclaimer",
            icon: <TrendingUp size={24} />,
            content: (
                <div className="space-y-3">
                    <p className="font-semibold text-gray-800">Individual results vary and are not guaranteed.</p>
                    <p>While we as your licensed dietician near me provide evidence-based nutrition guidance and professional support, outcomes depend on multiple factors:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li><strong>Adherence:</strong> Consistent follow-through with meal plans and lifestyle recommendations.</li>
                        <li><strong>Individual Metabolism:</strong> Genetic factors, hormonal balance, and metabolic rate vary by individual.</li>
                        <li><strong>Medical Conditions:</strong> Underlying health issues may impact progress and require medical intervention.</li>
                        <li><strong>Lifestyle Factors:</strong> Sleep, stress, physical activity, and other habits influence outcomes.</li>
                        <li><strong>Time Frame:</strong> Sustainable health changes take time. Quick-fix expectations are unrealistic.</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3 italic">We do not make guarantees about specific weight loss amounts, timelines, or health improvements. Our commitment is to provide professional, personalized guidance and support.</p>
                </div>
            )
        },
        {
            title: "Privacy & Confidentiality",
            icon: <Shield size={24} />,
            content: (
                <div className="space-y-3">
                    <p>Your health data is treated with strict confidentiality:</p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-[#217328]">
                        <li>All personal and health information is stored securely and accessed only by your assigned dietician and authorized personnel.</li>
                        <li>We do not sell or share your data with third parties for marketing purposes.</li>
                        <li>Data sharing occurs only with your consent or as required by law.</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">For complete details, please review our <Link href="/privacy-policy" className="text-[#217328] underline font-semibold">Privacy Policy</Link>.</p>
                </div>
            )
        },
        {
            title: "Contact for Questions",
            icon: <Mail size={24} />,
            content: (
                <div className="space-y-3">
                    <p>If you have questions about our services, policies, or this disclosure, please contact us:</p>
                    <div className="bg-[#F0FDF4] p-4 rounded-xl border border-[#217328]/20 mt-3">
                        <p className="font-semibold text-gray-800">Email: <a href="mailto:care@dieticianathome.com" className="text-[#217328] underline">care@dieticianathome.com</a></p>
                        <p className="font-semibold text-gray-800">Phone: <a href="tel:+919899480775" className="text-[#217328] underline">+91 98994 80775</a></p>
                        <p className="text-gray-600 text-sm mt-2">Address: Quest, 15th Floor, Ocus Quantum, Sector-51, Gurugram</p>
                        <p className="text-gray-600 text-sm">Business Hours: Monday-Saturday, 10:00 AM - 7:00 PM IST</p>
                    </div>
                </div>
            )
        },
        {
            title: "Last Updated",
            icon: <Calendar size={24} />,
            content: (
                <p>This Service Disclosure was last updated on <strong>January 23, 2026</strong>. We review and update this document periodically to reflect changes in our services or regulatory requirements. Significant changes will be communicated to active clients via email.</p>
            )
        }
    ];

    return (
        <div className="bg-[#FBFBFD] min-h-screen py-12 md:py-20">
            <div className="w-full max-w-4xl mx-auto px-6 pt-24 md:pt-28">

                {/* Breadcrumb */}
                <nav className="flex items-center justify-center gap-2 mb-8 text-[11px] font-bold tracking-widest uppercase">
                    <Link href="/" className="text-gray-400 hover:text-[#217328] transition-colors">Home</Link>
                    <span className="text-gray-300">/</span>
                    <span className="text-[#217328]">Service Disclosure</span>
                </nav>

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-4 tracking-tight">Service Disclosure</h1>
                    <p className="text-gray-500 max-w-4xl mx-auto text-lg font-medium leading-relaxed">
                        Complete transparency about our nutrition care services, qualifications, limitations, and what you can expect from Dietician at Home, recognized among the best nutritionist in Delhi NCR.
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
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </div>
                            </button>

                            {/* Accordion Content */}
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
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
                        <h4 className="text-[#1F2937] font-extrabold text-xl mb-2">Transparency You Can Trust</h4>
                        <p className="text-[#4B5563] text-base leading-relaxed">
                            We believe in complete honesty about what we offer, our qualifications, and our limitations as your licensed dietician near me. Your informed decision is our priority.
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

export default ServiceDisclosure;

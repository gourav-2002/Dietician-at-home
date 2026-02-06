import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "How to Choose the Right Nutritionist Dietician Near Me | Expert Guide",
    description: "Discover how to find a dietician near me who aligns with your health goals. Learn key factors to consider when selecting a qualified nutritionist dietician for personalized nutrition care.",
    keywords: "nutritionist dietician near me, find a dietician near me, best nutritionist near me, dietician in gurgaon, how to choose dietitian, nutrition care, PCOD dietitian, diabetes dietitian, at-home nutrition",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/how-to-choose-right-dietitian-health-goals',
    },
    openGraph: {
        title: "How to Choose the Right Nutritionist Dietician Near Me | Expert Guide",
        description: "Learn how to find a qualified dietician near me. Discover key factors for selecting the right nutritionist for your health goals.",
        url: 'https://dieticianathome.com/blog/how-to-choose-right-dietitian-health-goals',
        siteName: 'Dietitian at Home',
        images: [   
            {
                url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
                width: 1200,
                height: 630,
                alt: 'Professional Indian dietitian consulting with client at home',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "How to Choose the Right Nutritionist Dietician Near Me | Expert Guide",
        description: "Expert guide on selecting the right dietician for your health goals and nutrition needs.",
        images: ['https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80'],
    },
};

export default function ChooseRightDietitianBlog() {

    const category = "Nutrition Tips";
    const readingTime = "7 min read";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Choose the Right Dietitian for Your Health Goals",
        "image": "https://dieticianathome.com/how-to-choose-right-dietitian-health-goals.jpg",
        "author": {
            "@type": "Person",
            "name": "Nutri Sahiba"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Dietitian at Home",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dieticianathome.com/diet-at-home-logo.png"
            }
        },
        "datePublished": "2026-02-06",
        "description": "Discover how to find a dietician near me who aligns with your health goals. Learn key factors to consider when selecting a qualified nutritionist dietician for personalized nutrition care.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/how-to-choose-right-dietitian-health-goals"
        }
    };

    /* 
      AI IMAGE GENERATION PROMPT:
      "Professional Indian female dietitian consulting with Indian family at home, 
      modern Indian home interior, fresh healthy food and nutrition consultation materials on table, 
      warm natural lighting, welcoming healthcare setting, diverse Indian family, 
      bright and professional aesthetic, photorealistic style, high quality, 16:9 aspect ratio"
    */

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 mt-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-6 mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
                    <li><Link href="/" className="hover:text-[#217328] transition-colors">Home</Link></li>
                    <li className="flex items-center space-x-2">
                        <span>/</span>
                        <Link href="/blog" className="hover:text-[#217328] transition-colors">Blog</Link>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-400">
                        <span>/</span>
                        <span className="truncate max-w-[200px] md:max-w-none">How to Choose the Right Dietitian</span>
                    </li>
                </ol>
            </nav>

            {/* Hero Section */}
            <header className="max-w-7xl mx-auto px-6 mb-12">
                <div className="mb-6 flex flex-wrap gap-3">
                    <span className="bg-[#4CAF50]/10 text-[#217328] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        {category}
                    </span>
                    <span className="text-gray-500 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {readingTime}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                    How to Choose the Right <span className="text-[#217328]">Nutritionist Dietician Near you</span> for Your Health Goals
                </h1>
            </header>

            {/* Content Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
                {/* Main Article Content */}
                <article className="lg:w-2/3">

                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/how-to-choose-right-dietitian-health-goals.jpg"
                            alt="Professional Indian dietitian consulting with client about nutrition and health goals"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        <p className="text-xl leading-relaxed">
                            Choosing the right nutritionist or dietician is one of the most important decisions you can make for your health journey. Whether you're managing a medical condition, working toward weight goals, or simply seeking better nutrition habits, the professional you select will significantly impact your success. This guide will help you understand what to look for when you're ready to <strong>find a dietician near me</strong> and ensure you make an informed choice.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Why Professional Nutrition Guidance Matters</h2>
                        <p>
                            Before diving into how to choose the right professional, it's essential to understand why working with a qualified dietician or nutritionist makes a difference. Unlike generic meal plans found online or one-size-fits-all diet apps, a trained nutrition professional provides:
                        </p>
                        <ul className="space-y-3 list-none p-0">
                            <li className="flex items-start">
                                <span className="text-[#4CAF50] mr-3 text-2xl font-bold">•</span>
                                <span><strong>Personalized Assessment:</strong> Your unique health status, lifestyle, preferences, and goals are thoroughly evaluated</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#4CAF50] mr-3 text-2xl font-bold">•</span>
                                <span><strong>Medical Expertise:</strong> Understanding of how nutrition interacts with medications, health conditions, and physiological processes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#4CAF50] mr-3 text-2xl font-bold">•</span>
                                <span><strong>Accountability and Support:</strong> Regular check-ins and adjustments based on your progress</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#4CAF50] mr-3 text-2xl font-bold">•</span>
                                <span><strong>Evidence-Based Recommendations:</strong> Guidance rooted in scientific research rather than trending fads</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#4CAF50] mr-3 text-2xl font-bold">•</span>
                                <span><strong>Long-Term Sustainability:</strong> Focus on building habits that last, not quick fixes that fail</span>
                            </li>
                        </ul>
                        <p>
                            When you invest time to <strong>find a dietician near me</strong> who truly understands your needs, you're setting yourself up for sustainable, measurable results.
                        </p>

                        <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 my-10">
                            <h3 className="text-xl font-bold text-[#217328] mb-4">Quick Tip</h3>
                            <p className="text-slate-800 m-0">A qualified dietician will be transparent about their educational background and happy to share their credentials when asked. Don't hesitate to verify qualifications before committing.</p>
                        </div>

                        <h2 className="text-3xl font-black mt-12 mb-6">Key Qualifications to Look For</h2>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Education and Certification</h3>
                        <p>
                            The first step when searching for a <strong>nutritionist dietician near me</strong> is verifying their credentials. In India, look for professionals with:
                        </p>
                        <ul className="space-y-3">
                            <li><strong>Bachelor's or Master's degree</strong> in Nutrition, Dietetics, or Food Science from a recognized university</li>
                            <li><strong>Registration with professional bodies</strong> such as the Indian Dietetic Association (IDA)</li>
                            <li><strong>Specialized certifications</strong> in areas like clinical nutrition, sports nutrition, or therapeutic diets</li>
                            <li><strong>Continuous education:</strong> Professionals who regularly update their knowledge with current research</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Clinical Experience</h3>
                        <p>
                            Education provides the foundation, but experience shapes expertise. When you <strong>find a dietician near me</strong>, inquire about:
                        </p>
                        <ul className="space-y-3">
                            <li><strong>Years of practice</strong> and number of clients successfully guided</li>
                            <li><strong>Specialization areas:</strong> Do they work primarily with weight management, medical conditions, sports nutrition, or specific populations?</li>
                            <li><strong>Case diversity:</strong> Have they handled situations similar to yours?</li>
                            <li><strong>Success metrics:</strong> Can they share examples of client outcomes (while respecting confidentiality)?</li>
                        </ul>
                        <p>
                            If you're managing <Link href="/programs/pcod-pcos" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">PCOD</Link>, <Link href="/programs/diabetes-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">diabetes</Link>, <Link href="/programs/thyroid-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">thyroid conditions</Link>, or recovering from <Link href="/programs/cancer-recovery" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">cancer</Link>, finding a <strong>nutritionist dietician near me</strong> with specific experience in that area is crucial.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Service Model: What Works Best for You?</h2>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Clinic Visits vs. At-Home Services</h3>
                        <p>
                            Traditional nutrition services require you to visit a clinic regularly. While this works for some, consider the practical challenges:
                        </p>
                        <ul className="space-y-3 list-none p-0">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 text-xl">✗</span>
                                <span><strong>Time commitment:</strong> Travel to and from appointments, waiting times</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 text-xl">✗</span>
                                <span><strong>Scheduling conflicts:</strong> Limited availability that may not align with your work or family commitments</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 text-xl">✗</span>
                                <span><strong>Accessibility concerns:</strong> Particularly important for elderly individuals or those with mobility limitations</span>
                            </li>
                        </ul>

                        <p className="mt-6">
                            Modern nutrition care models, such as at-home services, eliminate these barriers by bringing qualified professionals directly to you. This approach offers:
                        </p>
                        <ul className="space-y-3 list-none p-0">
                            <li className="flex items-start">
                                <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                                <span><strong>Convenience:</strong> Assessments conducted at your home, office, or preferred location</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                                <span><strong>Consistency:</strong> Easier to maintain regular appointments when there's no travel involved</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                                <span><strong>Comfort:</strong> Discussing personal health matters in a familiar, private environment</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#4CAF50] mr-3 text-xl">✓</span>
                                <span><strong>Family involvement:</strong> Easier for family members to participate when sessions happen at home</span>
                            </li>
                        </ul>

                        <blockquote className="my-12 px-8 py-4 border-l-8 border-[#217328] bg-gray-50 italic text-2xl font-medium text-slate-800">
                            "The best nutrition care isn't just about expertise—it's about accessibility. If you can't consistently attend appointments, even the best advice won't help."
                        </blockquote>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Frequency of Interaction</h3>
                        <p>
                            One critical factor often overlooked when trying to <strong>find a dietician near me</strong> is how often you'll actually interact with them. Nutrition is not a "set it and forget it" service. Effective guidance requires:
                        </p>
                        <ul className="space-y-3">
                            <li><strong>Weekly consultations</strong> to review progress, address challenges, and refine meal plans</li>
                            <li><strong>Real-time tracking</strong> of your food intake and adherence</li>
                            <li><strong>Prompt responses</strong> to questions or concerns that arise during the week</li>
                            <li><strong>Regular reassessments</strong> of body parameters and health markers</li>
                        </ul>
                        <p>
                            Ask potential dieticians about their consultation frequency. If they only offer monthly check-ins or sporadic follow-ups, consider whether that level of involvement will provide sufficient support for your goals.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Technology Integration: The Modern Advantage</h2>
                        <p>
                            While human expertise remains irreplaceable, technology enhances the quality and convenience of nutrition care. When evaluating a <strong>nutritionist dietician near me</strong>, consider whether they offer:
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Digital Tools for Better Tracking</h3>
                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                            <li className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start">
                                <span className="text-blue-600 mr-2">📱</span>
                                <span><strong>Mobile app access</strong> for viewing meal plans and logging food intake</span>
                            </li>
                            <li className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start">
                                <span className="text-blue-600 mr-2">⚖️</span>
                                <span><strong>Device integration</strong> for syncing body parameters automatically</span>
                            </li>
                            <li className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start">
                                <span className="text-blue-600 mr-2">🔍</span>
                                <span><strong>Meal scanning features</strong> to quickly log outside meals</span>
                            </li>
                            <li className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start">
                                <span className="text-blue-600 mr-2">📅</span>
                                <span><strong>Appointment scheduling</strong> through digital platforms</span>
                            </li>
                        </ul>

                        <p className="mt-6">
                            Technology should support, not replace, the human connection. The ideal approach combines qualified professional guidance with convenient digital tools. Learn more about <Link href="/app-tools" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">how modern nutrition apps work</Link>.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Understanding Different Program Types</h2>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">General Nutrition Programs</h3>
                        <p>
                            If you're primarily focused on:
                        </p>
                        <ul className="space-y-2">
                            <li>Weight management (loss or gain)</li>
                            <li>General wellness and healthy eating</li>
                            <li>Building sustainable nutrition habits</li>
                            <li>Family meal planning</li>
                        </ul>
                        <p>
                            A general <Link href="/programs/weight-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">nutrition program</Link> with a qualified dietician can provide excellent support.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Specialized Medical Nutrition</h3>
                        <p>
                            For individuals managing specific health conditions, specialized programs become essential. When you <strong>find a dietician near me</strong>, ensure they have expertise in your specific condition.
                        </p>

                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                            <h3 className="text-3xl font-black mb-4">Need Expert Nutrition Guidance?</h3>
                            <p className="text-xl opacity-90 mb-8 font-medium">Stop searching for "nutritionist dietician near me" and start experiencing professional care that comes to you. Our qualified dietitians provide weekly consultations and monthly at-home assessments.</p>
                            <Link href="/contact" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                                Schedule Your Consultation
                            </Link>
                        </div>

                        <h2 className="text-3xl font-black mt-12 mb-6">Questions to Ask Before Committing</h2>
                        <p>
                            When you've shortlisted a <strong>nutritionist dietician near me</strong>, schedule an initial consultation and ask:
                        </p>
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#4CAF50]">
                                <p className="font-bold text-slate-900 m-0">What is your educational background and area of specialization?</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#4CAF50]">
                                <p className="font-bold text-slate-900 m-0">How many clients with my specific condition/goal have you worked with?</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#4CAF50]">
                                <p className="font-bold text-slate-900 m-0">What does your typical consultation process look like?</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#4CAF50]">
                                <p className="font-bold text-slate-900 m-0">How frequently will we interact, and through what channels?</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#4CAF50]">
                                <p className="font-bold text-slate-900 m-0">Do you provide meal plans, or just general guidance?</p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#4CAF50]">
                                <p className="font-bold text-slate-900 m-0">How do you track progress and measure success?</p>
                            </div>
                        </div>
                        <p className="mt-6">
                            Professional dieticians will welcome these questions and provide clear, confident answers.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Pricing and Value Considerations</h2>
                        <p>
                            Cost varies significantly across nutrition services. When evaluating pricing, consider what should be included in a comprehensive nutrition care package:
                        </p>
                        <ul className="space-y-3">
                            <li>Regular professional consultations (ideally weekly)</li>
                            <li>Personalized meal planning</li>
                            <li>Progress tracking and monitoring</li>
                            <li>Access to support between scheduled appointments</li>
                            <li>Adjustments and refinements as needed</li>
                        </ul>

                        <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border border-red-100 my-10">
                            <h3 className="text-xl font-bold text-red-700 mb-4">⚠️ Red Flags to Watch For</h3>
                            <ul className="text-slate-800 m-0 space-y-2">
                                <li><strong>Extremely low pricing</strong> that seems too good to be true</li>
                                <li><strong>Upfront payment</strong> for extended periods without trial or flexibility</li>
                                <li><strong>Hidden costs</strong> for basic services like follow-up calls</li>
                                <li><strong>Supplement sales pressure:</strong> Ethical dieticians recommend supplements only when medically necessary</li>
                            </ul>
                        </div>

                        <p>
                            The goal is finding value, not just the lowest price. View our <Link href="/pricing" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">transparent pricing</Link> to understand what comprehensive nutrition care should include.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">The Dietitian at Home Approach</h2>
                        <p>
                            For those seeking a comprehensive, convenient solution, Dietitian at Home represents a modern approach to nutrition care that addresses many common challenges.
                        </p>
                        <p>
                            The service combines:
                        </p>
                        <ul className="space-y-3">
                            <li><strong>Monthly at-location visits</strong> by trained representatives who conduct detailed health assessments with professional equipment—eliminating the need for clinic visits</li>
                            <li><strong>Weekly dietitian consultations</strong> via call or video, ensuring continuous professional involvement and timely course corrections</li>
                            <li><strong>Personalized weekly meal plans</strong> delivered through a mobile app, complete with ingredient lists and cooking instructions</li>
                            <li><strong>Data-driven monitoring</strong> using provided devices that sync with the app for accurate progress tracking</li>
                            <li><strong>Family group features</strong> allowing coordinated nutrition planning for multiple household members</li>
                        </ul>
                        <p>
                            This model specifically addresses the gap many people face when trying to <strong>find a dietician near me</strong>: the challenge of receiving frequent, high-quality professional guidance without disrupting daily routines. Learn more about <Link href="/how-it-works" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">how it works</Link>.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Making Your Final Decision</h2>
                        <p>
                            After gathering information and conducting consultations, trust your instincts alongside the facts. The right <strong>nutritionist dietician near me</strong> should:
                        </p>
                        <ul className="space-y-3">
                            <li><strong>Communicate clearly</strong> in a way you understand, without excessive jargon</li>
                            <li><strong>Listen actively</strong> to your concerns, preferences, and constraints</li>
                            <li><strong>Set realistic expectations</strong> rather than promising rapid transformations</li>
                            <li><strong>Demonstrate genuine interest</strong> in your success, not just securing your business</li>
                            <li><strong>Provide structure and accountability</strong> while respecting your autonomy</li>
                        </ul>
                        <p>
                            Remember, this is a partnership. You're not just hiring someone to tell you what to eat; you're building a collaborative relationship focused on your long-term health.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6 text-[#217328]">Conclusion</h2>
                        <p>
                            Finding the right nutrition professional requires careful consideration of qualifications, service model, technology integration, and personal compatibility. When you take the time to <strong>find a dietician near me</strong> who truly meets your needs, you're investing in a resource that can transform not just your eating habits, but your overall health, energy, and quality of life.
                        </p>
                        <p>
                            Whether you choose traditional clinic-based care or modern at-home services, prioritize frequent professional interaction, data-driven approaches, and a service model that fits seamlessly into your life. Your health goals deserve nothing less than expert, personalized guidance that supports you every step of the way.
                        </p>
                    </div>

                    {/* Social Share (Desktop) */}
                    <div className="mt-16 pt-8 border-t border-gray-100 hidden md:flex items-center gap-6">
                        <span className="text-slate-900 font-bold uppercase tracking-widest text-sm">Share this Article:</span>
                        <div className="flex gap-4">
                            {['Facebook', 'Twitter', 'WhatsApp', 'LinkedIn'].map(platform => (
                                <button key={platform} className="text-gray-400 hover:text-[#217328] transition-colors font-bold text-sm">
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-12">

                        {/* Author Card */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop"
                                        alt="Nutri Sahiba"
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-slate-900 leading-tight">Nutri Sahiba</h4>
                                    <p className="text-[#217328] font-bold text-sm">Lead Clinical Dietitian</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                With over 12 years of experience in clinical nutrition, Sahiba specializes in personalized, evidence-based nutrition care that fits seamlessly into busy lifestyles.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center">
                                View All Experts
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        {/* Related Services */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Programs</h4>
                            <div className="space-y-4">
                                <Link href="/programs/weight-management" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">Weight Management</span>
                                        <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </div>
                                </Link>
                                <Link href="/programs/pcod-pcos" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">PCOD/PCOS Care</span>
                                        <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </div>
                                </Link>
                                <Link href="/programs/diabetes-management" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">Diabetes Management</span>
                                        <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </div>
                                </Link>
                                <Link href="/how-it-works" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">How It Works</span>
                                        <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <h4 className="text-2xl font-black mb-4 relative z-10">Ready to Get Started?</h4>
                            <p className="opacity-90 mb-8 text-sm font-medium relative z-10">Join hundreds of satisfied clients who've found their perfect nutrition partner with us.</p>
                            <Link href="/contact" className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg">
                                Book Free Consultation
                            </Link>
                        </div>

                    </div>
                </aside>
            </div>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Stop Searching. Start Transforming.</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Experience professional nutrition care that comes to you. Weekly consultations, monthly assessments, and personalized meal plans—all from the comfort of your home.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-[#217328] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase shadow-2xl shadow-[#217328]/30 hover:-translate-y-1 transition-all">
                            Get Started Today
                        </Link>
                        <Link href="/pricing" className="bg-white text-slate-900 border border-gray-200 px-10 py-5 rounded-2xl font-black tracking-widest uppercase hover:bg-gray-50 transition-all">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
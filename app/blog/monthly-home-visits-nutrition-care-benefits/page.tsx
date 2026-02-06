import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Why Monthly Home Visits Make Nutrition Care More Effective | Dietician in Gurugram",
    description: "Discover why monthly home visits from a qualified dietician in Gurugram deliver better results than clinic-based nutrition care. Expert insights on effective, convenient nutrition monitoring.",
    keywords: "dietician in gurugram, best dietician in central delhi, home visit dietician, at-home nutrition care, nutrition monitoring, dietitian home visits, doorstep nutrition services, gurugram dietitian, delhi dietician",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/why-monthly-home-visits-make-nutrition-care-effective',
    },
    openGraph: {
        title: "Why Monthly Home Visits Make Nutrition Care More Effective",
        description: "Learn how monthly home visits by professional dieticians deliver better results through consistent monitoring, convenience, and personalized care.",
        url: 'https://dieticianathome.com/blog/why-monthly-home-visits-make-nutrition-care-effective',
        siteName: 'Dietitian at Home',
        images: [   
            {
                url: '/monthly-home-visits-nutrition-care-benefits.jpg',
                width: 1200,
                height: 630,
                alt: 'Professional dietitian conducting home visit with Indian family',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Why Monthly Home Visits Make Nutrition Care More Effective",
        description: "Professional home-based nutrition care that fits your life. Monthly visits, weekly consultations, measurable results.",
        images: ['/monthly-home-visits-nutrition-care-benefits.jpg'],
    },
};

export default function MonthlyHomeVisitsBlogPost() {

    const category = "Nutrition Care";
    const readingTime = "9 min read";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why Monthly Home Visits Make Nutrition Care More Effective",
        "image": "https://dieticianathome.com/monthly-home-visits-nutrition-care-benefits.jpg",
        "author": {
            "@type": "Person",
            "name": "Dietitian at Home"
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
        "description": "Discover why monthly home visits from professional dieticians deliver superior results compared to traditional clinic-based nutrition care.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/why-monthly-home-visits-make-nutrition-care-effective"
        }
    };

    /* 
      AI IMAGE GENERATION PROMPT:
      "Professional Indian dietitian conducting home visit with middle-aged Indian family, 
      modern Indian home living room, dietitian using professional health monitoring device, 
      warm welcoming atmosphere, natural daylight, family sitting comfortably, 
      healthcare consultation at home setting, clean modern aesthetic, 
      photorealistic style, high quality, 16:9 aspect ratio"
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
                        <span className="truncate max-w-[200px] md:max-w-none">Monthly Home Visits</span>
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
                    Why Monthly Home Visits Make Nutrition Care <span className="text-[#217328]">More Effective</span>
                </h1>
            </header>

            {/* Content Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
                {/* Main Article Content */}
                <article className="lg:w-2/3">

                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/monthly-home-visits-nutrition-care-benefits.jpg"
                            alt="Professional dietitian conducting home visit with Indian family - at-home nutrition care"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            When it comes to achieving real, measurable health outcomes through nutrition, convenience isn't just a luxury—it's a necessity. The traditional model of visiting a clinic every month for nutrition consultations may seem standard, but it comes with hidden costs: time lost in travel, disrupted schedules, and often, inconsistent follow-through. This is where the concept of monthly home visits by a professional dietician in Gurugram is transforming how people approach their health goals.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">The Fundamental Problem with Clinic-Based Nutrition Care</h2>
                        <p>
                            Let's be honest about what happens in traditional clinic setups. You book an appointment, block out two to three hours of your day (including travel and waiting time), sit through a consultation, receive a diet chart, and leave. A month later, you're supposed to return and repeat the process.
                        </p>
                        <p>
                            Between those two visits? You're on your own.
                        </p>
                        <p>
                            There's no accountability. No one checks whether you're following the plan. No one knows if the diet is working in your actual daily routine. And when challenges arise—a family function, a business trip, an unexpected craving—you have no immediate support to navigate them.
                        </p>
                        <p>
                            This disconnect is why most people struggle to see results, even when they start with genuine commitment.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Why Monthly Home Visits Change the Equation</h2>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Elimination of Travel and Waiting Time</h3>
                        <p>
                            The most immediate benefit is obvious: you don't go anywhere. A trained representative comes to you—whether that's your home, your office, or any location that suits your schedule.
                        </p>
                        <p>
                            For busy professionals in Gurugram, this alone can be the difference between staying consistent and dropping off entirely. When nutrition care fits seamlessly into your routine rather than disrupting it, adherence becomes significantly easier.
                        </p>

                        <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 my-10">
                            <h3 className="text-xl font-bold text-[#217328] mb-4">Time Saved Per Month</h3>
                            <p className="text-slate-800 m-0">Traditional clinic visit: 2-3 hours (commute + waiting + consultation). Home visit: 30-45 minutes (pure consultation time). That's nearly 2.5 hours saved every single month, or 30 hours per year.</p>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Assessment in Your Real Environment</h3>
                        <p>
                            Here's something most people don't consider: your eating environment matters.
                        </p>
                        <p>
                            When a <strong>dietician in Gurugram</strong> assesses you in a clinical setting, they're working with limited context. But when a professional visits your home, they can observe your actual kitchen setup, understand your family's eating patterns, and see the real-world constraints you're working within.
                        </p>
                        <p>
                            This leads to meal plans that aren't just theoretically sound—they're practically executable in your specific situation.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Accurate and Consistent Health Monitoring</h3>
                        <p>
                            Monthly home visits ensure that your body parameters—weight, body composition, measurements—are tracked using the same professional equipment every single time, in a consistent environment.
                        </p>
                        <p>
                            This eliminates variables that can skew your progress tracking. You're not wondering if the difference in readings is actual progress or just a different machine at a different clinic.
                        </p>
                        <p>
                            Data accuracy matters when you're making decisions about your health. Monthly home assessments provide the reliable data you need.
                        </p>

                        <blockquote className="my-12 px-8 py-4 border-l-8 border-[#217328] bg-gray-50 italic text-2xl font-medium text-slate-800">
                            "Knowing that a professional will be visiting you at home creates a natural accountability loop that dramatically increases consistency."
                        </blockquote>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Built-In Accountability</h3>
                        <p>
                            It's one thing to skip a clinic appointment. It's another thing entirely when someone is scheduled to come to your location. This simple psychological shift increases consistency dramatically.
                        </p>
                        <p>
                            And consistency, not perfection, is what delivers results in nutrition.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">How Monthly Home Visits Integrate Into a Complete Nutrition System</h2>
                        <p>
                            Monthly home visits don't work in isolation—they're part of a larger care structure that includes weekly <Link href="/how-it-works" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">dietician consultations</Link>, app-based meal tracking, and continuous monitoring.
                        </p>
                        <p>
                            Here's how it works in practice:
                        </p>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-10">
                            <h4 className="text-lg font-bold text-slate-900 mb-4">The Monthly Cycle</h4>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start">
                                    <span className="text-[#217328] font-bold mr-3">Week 1:</span>
                                    <span>Monthly home visit occurs. Trained representative captures detailed body parameters using professional equipment. All data is securely shared with your assigned dietician.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#217328] font-bold mr-3">Ongoing:</span>
                                    <span>You follow personalized weekly meal plans, track your intake through the mobile app, and participate in weekly video or call consultations with your dietician.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#217328] font-bold mr-3">Week 4:</span>
                                    <span>Before the next monthly visit, your dietician reviews four weeks of data—meal adherence, progress trends, challenges faced—and adjusts your strategy accordingly.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#217328] font-bold mr-3">Repeat:</span>
                                    <span>The cycle continues, with the home visit providing fresh, accurate data to inform the next phase of your nutrition plan.</span>
                                </li>
                            </ul>
                        </div>

                        <p>
                            This creates a <strong>continuous feedback loop</strong> where professional oversight, data tracking, and real-world execution align perfectly.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">The Professional Quality That Makes It Work</h2>
                        <p>
                            Not all home visits are created equal. The effectiveness of this model depends entirely on the quality of people and processes involved.
                        </p>
                        <p>
                            Here's what separates professional home visit services from amateur attempts:
                        </p>

                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-2xl">✓</span>
                                <div>
                                    <strong className="block text-slate-900 mb-1">Trained Field Representatives</strong>
                                    <span className="text-sm text-slate-600">Not casual workers—trained professionals who know how to use body composition devices, take accurate measurements, and handle data with confidentiality and precision.</span>
                                </div>
                            </li>
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-2xl">✓</span>
                                <div>
                                    <strong className="block text-slate-900 mb-1">Professional-Grade Equipment</strong>
                                    <span className="text-sm text-slate-600">The devices used during home visits are the same quality you'd find in any reputable clinic. This ensures measurement accuracy and consistency over time.</span>
                                </div>
                            </li>
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-2xl">✓</span>
                                <div>
                                    <strong className="block text-slate-900 mb-1">Seamless Data Integration</strong>
                                    <span className="text-sm text-slate-600">Information captured during the home visit doesn't sit in a notebook. It's digitally recorded and immediately accessible to your dietician, who reviews it before your next consultation.</span>
                                </div>
                            </li>
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-2xl">✓</span>
                                <div>
                                    <strong className="block text-slate-900 mb-1">Scheduled and Predictable</strong>
                                    <span className="text-sm text-slate-600">Monthly visits are pre-scheduled and confirmed, creating a rhythm that becomes part of your routine rather than something you have to remember to arrange.</span>
                                </div>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-black mt-12 mb-6">Real-World Impact: Why This Model Delivers Results</h2>
                        <p>
                            The proof isn't in the theory—it's in outcomes.
                        </p>
                        <p>
                            People who receive monthly home visits combined with weekly dietician consultations show:
                        </p>
                        <ul className="space-y-3">
                            <li><strong>Higher adherence rates:</strong> Because the service comes to them, not the other way around</li>
                            <li><strong>Better data accuracy:</strong> Consistent equipment, consistent environment, consistent process</li>
                            <li><strong>Faster course correction:</strong> Problems are identified early, before they derail progress</li>
                            <li><strong>Sustained motivation:</strong> Regular touchpoints keep people engaged over months, not just weeks</li>
                        </ul>
                        <p>
                            For individuals managing medical conditions like <Link href="/programs/pcod-pcos" className="text-[#217328] font-bold underline">PCOD</Link>, <Link href="/programs/thyroid" className="text-[#217328] font-bold underline">thyroid issues</Link>, or <Link href="/programs/diabetes" className="text-[#217328] font-bold underline">diabetes</Link>, this model becomes even more critical. These conditions require close monitoring, and monthly home visits provide exactly that—without the burden of repeated clinic commutes.
                        </p>

                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                            <h3 className="text-3xl font-black mb-4">Ready to Experience Professional Nutrition Care at Home?</h3>
                            <p className="text-xl opacity-90 mb-8 font-medium">Join hundreds of busy professionals, families, and health-conscious individuals who've made the switch to convenient, effective home-based nutrition care.</p>
                            <Link href="/get-started" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                                Schedule Your First Home Visit
                            </Link>
                        </div>

                        <h2 className="text-3xl font-black mt-12 mb-6">Who Benefits Most From Monthly Home Visits?</h2>
                        <p>
                            While this approach works for anyone serious about nutrition, certain groups benefit disproportionately:
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Busy Professionals</h3>
                        <p>
                            If your calendar is packed and every hour counts, eliminating travel time for nutrition consultations is a game-changer. A <strong>best dietician in central delhi</strong> or Gurugram offering home visits allows you to maintain professional nutrition care without compromising your work schedule.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Elderly Individuals</h3>
                        <p>
                            For senior citizens, mobility can be a genuine barrier to accessing regular nutrition care. Monthly home visits remove that barrier entirely, ensuring they receive the monitoring and guidance they need. Learn more about our specialized <Link href="/programs/elderly-nutrition" className="text-[#217328] font-bold underline">elderly nutrition program</Link>.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Families Managing Multiple Health Goals</h3>
                        <p>
                            When different family members have different nutrition needs—weight management for one, PCOD care for another, diabetes management for a third—coordinating clinic visits becomes logistically complex. Home visits simplify everything through our <Link href="/programs/family-nutrition" className="text-[#217328] font-bold underline">family nutrition planning</Link>.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">People with Medical Conditions</h3>
                        <p>
                            Conditions like PCOD, thyroid disorders, or post-cancer recovery require consistent monitoring. Monthly home visits ensure that health parameters are tracked regularly without adding the stress of repeated clinic commutes.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">How This Compares to Other Nutrition Models</h2>
                        <p>
                            Let's be clear about what you're comparing:
                        </p>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-10">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Traditional Clinic Model:</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Travel required</li>
                                        <li>• Waiting time unpredictable</li>
                                        <li>• Environment unfamiliar</li>
                                        <li>• Sporadic follow-up</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">App-Only Model:</h4>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• No human oversight</li>
                                        <li>• Generic plans</li>
                                        <li>• No physical assessments</li>
                                        <li>• Easy to abandon</li>
                                    </ul>
                                </div>
                                <div className="bg-[#4CAF50]/10 p-4 rounded-2xl">
                                    <h4 className="font-bold text-[#217328] mb-2">Monthly Home Visits + Weekly Consultations:</h4>
                                    <ul className="text-sm text-slate-800 space-y-1">
                                        <li>✓ Professional comes to you</li>
                                        <li>✓ Consistent, accurate assessments</li>
                                        <li>✓ Personalized plans based on real data</li>
                                        <li>✓ Continuous accountability</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p>
                            The difference isn't subtle. It's the difference between a service designed around convenience for the provider and a service designed around outcomes for the client.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">What to Look for in a Home Visit Nutrition Service</h2>
                        <p>
                            If you're considering this model, here's what separates quality services from mediocre ones:
                        </p>

                        <ol className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#217328] font-black text-xl mr-3">1.</span>
                                <div>
                                    <strong className="text-slate-900">Qualified Dieticians:</strong>
                                    <span className="text-slate-700"> Ensure your nutrition plans are created and overseen by certified professionals, not generic health coaches.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#217328] font-black text-xl mr-3">2.</span>
                                <div>
                                    <strong className="text-slate-900">Trained Representatives:</strong>
                                    <span className="text-slate-700"> The person visiting your home should be trained in using equipment and handling data professionally.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#217328] font-black text-xl mr-3">3.</span>
                                <div>
                                    <strong className="text-slate-900">Weekly Interaction:</strong>
                                    <span className="text-slate-700"> Monthly visits alone aren't enough. You need weekly consultations with your dietician to stay on track.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#217328] font-black text-xl mr-3">4.</span>
                                <div>
                                    <strong className="text-slate-900">Digital Integration:</strong>
                                    <span className="text-slate-700"> Data from home visits should sync seamlessly with an <Link href="/app-tools" className="text-[#217328] font-bold underline">app</Link> where you can track meals, view plans, and monitor progress.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#217328] font-black text-xl mr-3">5.</span>
                                <div>
                                    <strong className="text-slate-900">Transparent Pricing:</strong>
                                    <span className="text-slate-700"> Know exactly what you're paying for—visits, consultations, app access, devices—without hidden costs. Check our <Link href="/pricing" className="text-[#217328] font-bold underline">pricing page</Link> for complete transparency.</span>
                                </div>
                            </li>
                        </ol>

                        <h2 className="text-3xl font-black mt-12 mb-6">The Long-Term Advantage: Building Sustainable Habits</h2>
                        <p>
                            Here's what most people miss: monthly home visits aren't just about short-term results. They're about building a sustainable relationship with nutrition that lasts beyond a three-month program.
                        </p>
                        <p>
                            When you experience professional nutrition care that fits into your life rather than disrupting it, you begin to internalize healthy habits. The structure becomes second nature. The tracking becomes routine. The accountability becomes internal rather than external.
                        </p>
                        <p>
                            This is how real transformation happens—not through shortcuts or extreme diets, but through consistent, professionally guided care that respects your real life.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Making the Decision: Is This Right for You?</h2>
                        <p>
                            Monthly home visits work best when:
                        </p>
                        <ul className="space-y-3">
                            <li>✓ You're serious about measurable outcomes, not casual experimentation</li>
                            <li>✓ Your schedule makes regular clinic visits difficult or inconvenient</li>
                            <li>✓ You value professional oversight and data-driven decisions</li>
                            <li>✓ You're managing a medical condition that requires consistent monitoring</li>
                            <li>✓ You want nutrition care that integrates into your life, not complicates it</li>
                        </ul>
                        <p>
                            If these resonate with you, then home-based nutrition care isn't just convenient—it's the smarter choice.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6 text-[#217328]">Final Thoughts</h2>
                        <p>
                            Nutrition care should be designed around people's real lives, not the other way around. Monthly home visits represent a fundamental shift in how professional nutrition services are delivered—prioritizing accessibility, consistency, and outcomes over outdated clinic-based models.
                        </p>
                        <p>
                            Whether you're in Gurugram, Delhi, or any major metro, the question isn't whether home visits are more convenient. The question is whether you're ready to commit to a model that removes barriers and creates real accountability.
                        </p>
                        <p>
                            Because at the end of the day, the best nutrition plan is the one you can actually follow. And following becomes infinitely easier when professional care comes to you.
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
                                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop"
                                        alt="Nutrition Expert"
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-slate-900 leading-tight">Dietitian at Home</h4>
                                    <p className="text-[#217328] font-bold text-sm">Expert Care Team</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Our team of qualified dietitians and trained field representatives brings professional nutrition care directly to your doorstep across Gurugram and Delhi NCR.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center">
                                Meet Our Team
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        {/* Related Services */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Explore Our Programs</h4>
                            <div className="space-y-4">
                                <Link href="/how-it-works" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">How It Works</span>
                                        <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </div>
                                </Link>
                                <Link href="/programs/weight-management" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">Weight Management</span>
                                        <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </div>
                                </Link>
                                <Link href="/programs/family-nutrition" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">Family Nutrition</span>
                                        <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </div>
                                </Link>
                                <Link href="/app-tools" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">App & Tools</span>
                                        <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <h4 className="text-2xl font-black mb-4 relative z-10">Experience Home-Based Care</h4>
                            <p className="opacity-90 mb-8 text-sm font-medium relative z-10">Join hundreds of satisfied clients across Gurugram and Delhi NCR who trust our professional home visit service.</p>
                            <Link href="/contact" className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg">
                                Get Started Today
                            </Link>
                        </div>

                    </div>
                </aside>
            </div>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Ready to transform your nutrition journey?</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Take the first step towards convenient, professional nutrition care with monthly home visits and weekly expert consultations.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-[#217328] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase shadow-2xl shadow-[#217328]/30 hover:-translate-y-1 transition-all">
                            Schedule Home Visit
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
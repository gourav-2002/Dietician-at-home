import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "7 Signs You Need an Online Dietician in Delhi | Professional Nutrition Care",
    description: "Discover when meal plan apps aren't enough. Learn the 7 signs you need a professional online dietician in Delhi for personalized nutrition care and real results.",
    keywords: "online dietician in delhi, sports dietician near me, professional nutrition care, dietitian consultation, personalized meal plans, nutrition expert, at-home dietitian",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/7-signs-professional-nutrition-care',
    },
    openGraph: {
        title: "7 Signs You Need Professional Nutrition Care (Not Just a Meal Plan App)",
        description: "When meal plan apps fail: Discover the 7 clear signs you need a professional online dietician in Delhi for real, measurable results.",
        url: 'https://dieticianathome.com/blog/7-signs-professional-nutrition-care',
        siteName: 'Dietitian at Home',
        images: [   
            {
                url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
                width: 1200,
                height: 630,
                alt: 'Professional dietitian consulting with client at home in Delhi NCR',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "7 Signs You Need Professional Nutrition Care (Not Just a Meal Plan App)",
        description: "When generic apps fail: Signs you need a professional online dietician in Delhi for real results.",
        images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80'],
    },
};

export default function ProfessionalNutritionCareBlogPost() {

    const category = "Nutrition Care";
    const readingTime = "9 min read";
    const author = "Anita Menon";
    const publishDate = "February 10, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "7 Signs You Need Professional Nutrition Care (Not Just a Meal Plan App)",
        "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        "author": {
            "@type": "Person",
            "name": "Anita Menon"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Dietitian at Home",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dieticianathome.com/diet-at-home-logo.png"
            }
        },
        "datePublished": "2026-02-10",
        "description": "Discover when meal plan apps aren't enough. Learn the 7 signs you need a professional online dietician in Delhi for personalized nutrition care and real results.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/7-signs-professional-nutrition-care"
        }
    };

    /* 
      AI IMAGE GENERATION PROMPT:
      "Professional Indian female dietitian conducting home consultation with Indian client, 
      modern Delhi home interior, professional equipment on table including body composition monitor, 
      laptop showing nutrition app, fresh healthy Indian meals visible, 
      natural warm lighting, professional healthcare setting, welcoming atmosphere, 
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
                        <span className="truncate max-w-[200px] md:max-w-none">7 Signs You Need Professional Nutrition Care</span>
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
                    7 Signs You Need <span className="text-[#217328]">Professional Nutrition Care</span> (Not Just a Meal Plan App)
                </h1>

                
            </header>

            {/* Content Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
                {/* Main Article Content */}
                <article className="lg:w-2/3">

                    {/* Featured Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/7-signs-professional-nutrition-care.jpg"
                            alt="Professional dietitian providing personalized nutrition care at home"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            In an era where health apps promise quick fixes and generic meal plans, many people in Delhi NCR find themselves stuck in a frustrating cycle—downloading apps, following plans for a few weeks, seeing minimal results, and eventually giving up. Sound familiar?
                        </p>

                        <p>
                            The truth is, while meal plan apps serve a purpose for basic calorie tracking, they fundamentally lack what transforms nutrition from information into real, lasting results: <strong>human expertise, continuous monitoring, and personalized accountability</strong>.
                        </p>

                        <p>
                            If you've been relying on apps but aren't seeing the progress you deserve, you're not alone. Here are 7 clear signs that it's time to move beyond generic solutions and connect with a professional <Link href="/contact" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">online dietician in Delhi</Link> who can deliver the structured, outcome-focused care you actually need.
                        </p>

                        <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 my-10">
                            <h3 className="text-xl font-bold text-[#217328] mb-4">The Reality Check</h3>
                            <p className="text-slate-800 m-0">Apps can't identify why you're plateauing. Is it metabolic adaptation? Incorrect portions? Stress affecting fat loss? Lifestyle factors the algorithm doesn't capture? That's where professional care becomes essential.</p>
                        </div>

                        <h2 className="text-3xl font-black mt-12 mb-6">Sign #1: You Have a Specific Medical Condition That Needs Expert Guidance</h2>
                        
                        <p>
                            Conditions like PCOD, PCOS, thyroid disorders, diabetes, or cancer recovery aren't just about "eating healthy"—they require medical-grade nutritional strategies that adapt to your body's unique biochemistry.
                        </p>

                        <p>
                            Generic meal plan apps treat everyone the same. They can't account for insulin sensitivity variations in PCOD/PCOS patients, metabolism fluctuations in thyroid conditions, blood sugar management nuances in diabetes, or nutritional rehabilitation needs during cancer recovery.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What You Need Instead</h3>
                        <p>
                            A qualified professional who understands the clinical aspects of your condition, monitors your health parameters weekly, and adjusts your nutrition plan based on real data—not algorithms. Whether you're looking for specialized care or a <Link href="/programs/weight-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">sports dietician near me</Link> for performance optimization, professional guidance makes the critical difference.
                        </p>

                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-xl">✔</span>
                                <span>Weekly review of health parameters (not just weight)</span>
                            </li>
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-xl">✔</span>
                                <span>Meal plans adjusted based on medical reports</span>
                            </li>
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-xl">✔</span>
                                <span>Coordination with your doctor when needed</span>
                            </li>
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-xl">✔</span>
                                <span>Understanding of medication-nutrition interactions</span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-black mt-12 mb-6">Sign #2: You've Tried Multiple Apps and Diets Without Lasting Results</h2>

                        <p>
                            You start with excitement, follow the plan religiously for 2-3 weeks, see some initial progress, hit a plateau, get frustrated, and quit. Then the cycle repeats with a different app or diet trend.
                        </p>

                        <p>
                            <strong>Why Apps Fail Here:</strong> Apps can't identify why you're plateauing. Is it metabolic adaptation? Incorrect portion estimations? Stress-induced cortisol affecting fat loss? Inadequate protein distribution? Lifestyle factors the algorithm doesn't capture?
                        </p>

                        <blockquote className="my-12 px-8 py-4 border-l-8 border-[#217328] bg-gray-50 italic text-2xl font-medium text-slate-800">
                            "An experienced online dietician in Delhi doesn't just give you a plan—they monitor adherence, identify roadblocks, troubleshoot challenges, and refine strategies weekly based on what's actually happening in your life."
                        </blockquote>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Real Accountability Looks Like</h3>
                        <p>
                            This is nutrition care, not nutrition information. Weekly one-on-one consultations with qualified professionals (not chatbots), data-driven adjustments based on your actual progress, problem-solving specific to your challenges, and human support when motivation dips.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Sign #3: Your Schedule Is Too Unpredictable for Generic Plans</h2>

                        <p>
                            You travel frequently for work, have irregular eating times, attend social events, or your daily routine changes week to week. Generic apps give you rigid meal plans with no flexibility. Miss a meal timing or eat out, and you're left guessing how to adjust.
                        </p>

                        <p>
                            Professional nutrition care adapts to <em>your</em> life—not the other way around. A qualified dietician provides flexible meal structures that accommodate your schedule, restaurant eating guidelines customized to your goals, travel nutrition strategies so progress doesn't stop when you're on the road, and real-time adjustments when your week doesn't go as planned.
                        </p>

                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                            <h3 className="text-3xl font-black mb-4">Ready for Real Results?</h3>
                            <p className="text-xl opacity-90 mb-8 font-medium">Stop cycling through apps and start working with professionals who bring nutrition care directly to your home. Weekly consultations, monthly assessments, personalized plans—all designed around your life.</p>
                            <Link href="/contact" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                                Talk to Our Expert Dietitians
                            </Link>
                        </div>

                        <h2 className="text-3xl font-black mt-12 mb-6">Sign #4: You Need Regular Monitoring and Real Human Accountability</h2>

                        <p>
                            Apps rely on <em>you</em> to self-report accurately and stay motivated. There's no one checking in, no one noticing patterns you might miss, and no one holding you accountable when life gets busy.
                        </p>

                        <p>
                            When you work with a professional nutrition service, accountability isn't optional—it's built into the system. This includes monthly at-location assessments with professional equipment measuring body composition (not just weight), weekly dietitian consultations where you review progress and discuss challenges, real-time meal tracking that your dietician actually reviews, and parameter-driven decisions based on measurements, not guesswork.
                        </p>

                        <p>
                            This level of involvement isn't excessive—it's what actually drives results. When a human professional is invested in your progress and actively monitoring your data, compliance improves and outcomes follow.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Sign #5: You're an Athlete or Have Performance-Specific Goals</h2>

                        <p>
                            Whether you're training for a marathon, building muscle, or optimizing sports performance, your nutritional needs are vastly different from the general population. While searching for a <strong>sports dietician near me</strong>, you're recognizing something critical: performance nutrition isn't generic.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What Performance Nutrition Requires</h3>
                        
                        <ul className="space-y-3 list-none p-0">
                            <li className="flex items-start">
                                <span className="text-[#217328] mr-3 mt-1 font-black text-lg">→</span>
                                <span><strong>Macro timing</strong> around training sessions for optimal performance</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#217328] mr-3 mt-1 font-black text-lg">→</span>
                                <span><strong>Recovery nutrition protocols</strong> to rebuild and repair</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#217328] mr-3 mt-1 font-black text-lg">→</span>
                                <span><strong>Supplementation guidance</strong> based on your sport</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#217328] mr-3 mt-1 font-black text-lg">→</span>
                                <span><strong>Body composition goals</strong> specific to performance needs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#217328] mr-3 mt-1 font-black text-lg">→</span>
                                <span><strong>Energy availability calculations</strong> for training load</span>
                            </li>
                        </ul>

                        <p>
                            Apps give you calorie targets and basic macros. They don't account for pre-workout vs. post-workout nutrition timing, glycogen depletion and repletion strategies, protein synthesis windows, competition day nutrition planning, or off-season vs. peak season adjustments.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Sign #6: You Want Your Family's Nutrition Managed Cohesively</h2>

                        <p>
                            You're trying to eat healthy while preparing different meals for kids, managing elderly parents' dietary needs, and keeping everyone's preferences in mind. It's exhausting and unsustainable.
                        </p>

                        <p>
                            Apps are designed for individuals. They can't create cohesive family nutrition plans that meet different age-group requirements, accommodate multiple health conditions in one household, provide consolidated grocery lists, or offer meal prep strategies for the whole family.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Professional Solution</h3>
                        <p>
                            <Link href="/programs/family-nutrition" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">Family nutrition programs</Link> provide coordinated meal planning where everyone eats variations of the same base meals, consolidated ingredient lists so grocery shopping isn't complicated, age-appropriate portion guidance for children, adults, and elderly members, and one point of contact managing everyone's nutrition instead of juggling multiple apps.
                        </p>

                        <p>
                            This is particularly valuable when you have elderly parents who can't travel to clinics regularly. Having an <strong>online dietician in Delhi</strong> who provides at-location assessments and remote consultations means professional care comes to them.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Sign #7: You're Tired of Guesswork and Want a Data-Driven Approach</h2>

                        <p>
                            You're tracking meals, counting calories, following plans—but you have no idea if what you're doing is <em>actually working</em> until you step on a scale. And weight alone doesn't tell the complete story.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What Professional Care Measures</h3>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-black text-slate-900 mb-2">Body Composition</h4>
                                <p className="text-sm text-slate-600 m-0">Muscle vs. fat, not just weight on a scale</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-black text-slate-900 mb-2">Metabolic Markers</h4>
                                <p className="text-sm text-slate-600 m-0">Through health parameter tracking</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-black text-slate-900 mb-2">Adherence Patterns</h4>
                                <p className="text-sm text-slate-600 m-0">Identify compliance issues early</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-black text-slate-900 mb-2">Medical Parameters</h4>
                                <p className="text-sm text-slate-600 m-0">HbA1c, thyroid levels, PCOD markers</p>
                            </div>
                        </div>

                        <p>
                            Instead of wondering "Is this working?", you <em>know</em> what's working because parameters are tracked systematically, progress is reviewed weekly with a professional, plans are adjusted based on objective data, and you see measurable improvement in health markers, not just appearance.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6 text-[#217328]">What Professional Nutrition Care Actually Looks Like</h2>

                        <p>
                            If you're recognizing yourself in these signs, here's what moving to professional care involves:
                        </p>

                        <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100 my-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">The Structure</h3>
                            <ul className="space-y-4 list-none p-0">
                                <li className="flex items-start">
                                    <span className="text-[#217328] mr-3 mt-1">✓</span>
                                    <span><strong>Monthly at-location visits</strong> by trained representatives with professional equipment—no clinic visits required</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#217328] mr-3 mt-1">✓</span>
                                    <span><strong>Weekly dietitian consultations</strong> via call or video for progress review and plan refinement</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#217328] mr-3 mt-1">✓</span>
                                    <span><strong>Personalized weekly meal plans</strong> with complete ingredient lists and cooking instructions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#217328] mr-3 mt-1">✓</span>
                                    <span><strong>Mobile app integration</strong> for meal tracking, parameter logging, and scheduling</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#217328] mr-3 mt-1">✓</span>
                                    <span><strong>Continuous monitoring</strong> with data shared directly with your assigned dietician</span>
                                </li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Who This Is For</h3>
                        <p>
                            Professional nutrition care isn't for everyone. It's designed for people who are serious about health outcomes (not quick fixes), have specific medical conditions requiring expert supervision, value convenience and want care delivered at their location, recognize that nutrition is an investment in long-term health, and want a structured, disciplined approach with professional accountability.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Making the Transition: From Apps to Professional Care</h2>

                        <p>
                            If you've identified with multiple signs in this article, it's time for a different approach. The first step is connecting with a qualified <strong>online dietician in Delhi</strong> who offers initial consultation to understand your goals and medical context, clear explanation of the process and outcomes, personalized program recommendation based on your specific needs, and a structured care model with defined touchpoints and accountability.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What to Look For</h3>
                        <ul className="space-y-3">
                            <li>Qualified dietitians (not nutritionists or health coaches without credentials)</li>
                            <li>Weekly professional involvement (not monthly check-ins)</li>
                            <li>At-location convenience (especially if you or family members have mobility concerns)</li>
                            <li>Data-driven approach with regular parameter monitoring</li>
                            <li>Transparent pricing with clear deliverables</li>
                        </ul>

                        <h2 className="text-3xl font-black mt-12 mb-6 text-[#217328]">The Bottom Line</h2>

                        <p>
                            Meal plan apps are useful tools for basic tracking. But if you have medical conditions requiring specialized care, keep cycling through diets without lasting results, need flexibility for an unpredictable lifestyle, want real accountability and monitoring, have performance-specific goals, are managing family nutrition, or prefer data-driven decisions over guesswork—then it's time to recognize that what you need isn't <em>information</em>. It's <strong>professional care</strong>.
                        </p>

                        <p>
                            The difference between knowing what to eat and actually achieving results often comes down to structure, expertise, and human accountability. That's what professional nutrition care delivers. Learn more about <Link href="/how-it-works" className="text-[#217328] font-bold underline">how our process works</Link> and see our <Link href="/pricing" className="text-[#217328] font-bold underline">transparent pricing</Link> for personalized programs.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-12">
                            <p className="text-sm text-slate-600 italic m-0">
                                <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Consult with qualified healthcare professionals before making significant dietary changes, especially if you have underlying medical conditions.
                            </p>
                        </div>

                    </div>

                    {/* Social Share */}
                    {/* <div className="mt-16 pt-8 border-t border-gray-100 hidden md:flex items-center gap-6">
                        <span className="text-slate-900 font-bold uppercase tracking-widest text-sm">Share this Article:</span>
                        <div className="flex gap-4">
                            {['Facebook', 'Twitter', 'WhatsApp', 'LinkedIn'].map(platform => (
                                <button key={platform} className="text-gray-400 hover:text-[#217328] transition-colors font-bold text-sm">
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div> */}
                </article>

                {/* Sidebar */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-12">

                        {/* Author Card */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
                                    <Image
                                        src="/anita-menon.jpg"
                                        alt={author}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-slate-900 leading-tight">{author}</h4>
                                    <p className="text-[#217328] font-bold text-sm">Lead Clinical Dietitian</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                With 12+ years of experience in clinical nutrition and therapeutic diet planning, Anita specializes in transforming complex health conditions into manageable nutrition strategies that fit real life.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center">
                                View All Experts
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        {/* Related Services */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Explore Our Programs</h4>
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
                                <Link href="/programs/family-nutrition" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">Family Nutrition</span>
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
                            <h4 className="text-2xl font-black mb-4 relative z-10">Stop Guessing, Start Achieving</h4>
                            <p className="opacity-90 mb-8 text-sm font-medium relative z-10">Join 500+ individuals who've moved beyond apps to achieve real, measurable health outcomes with professional care.</p>
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
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Ready to Move Beyond Meal Plan Apps?</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Take the first step toward professional nutrition care with personalized assessment, weekly consultations, and measurable results delivered right to your doorstep.</p>
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
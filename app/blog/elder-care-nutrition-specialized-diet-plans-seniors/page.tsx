import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Elder Care Nutrition: Why Seniors Need Specialized Diet Plans at Home | Best Dietician in Delhi NCR",
    description: "Discover why seniors need specialized nutrition care at home. Expert guidance from the best dietician in Delhi NCR on age-appropriate meal planning, health monitoring, and doorstep support for elderly wellness.",
    keywords: "best dietician in Delhi NCR, dieticians in Noida, elderly nutrition, senior citizen diet, elder care nutrition, home dietitian for elderly, geriatric nutrition, nutrition for seniors, at-home nutrition care, Delhi NCR dietitian",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/elder-care-nutrition-specialized-diet-plans-seniors',
    },
    openGraph: {
        title: "Elder Care Nutrition: Why Seniors Need Specialized Diet Plans at Home",
        description: "Expert guidance from the best dietician in Delhi NCR on age-appropriate meal planning and doorstep support for elderly wellness.",
        url: 'https://dieticianathome.com/blog/elder-care-nutrition-specialized-diet-plans-seniors',
        siteName: 'Dietitian at Home',
        images: [   
            {
                url: 'https://www.dieticianathome.com/elder-care-nutrition-specialized-diet-plans-seniors.jpg',
                width: 1200,
                height: 630,
                alt: 'Professional dietitian consulting with elderly Indian couple at home about nutrition care',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Elder Care Nutrition: Why Seniors Need Specialized Diet Plans at Home",
        description: "Expert guidance from the best dietician in Delhi NCR on age-appropriate meal planning for elderly wellness.",
        images: ['https://www.dieticianathome.com/elder-care-nutrition-specialized-diet-plans-seniors.jpg'],
    },
};

export default function ElderCareNutritionBlogPost() {

    const category = "Elderly Care";
    const readingTime = "10 min read";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Elder Care Nutrition: Why Seniors Need Specialized Diet Plans at Home",
        "image": "https://www.dieticianathome.com/elder-care-nutrition-specialized-diet-plans-seniors.jpg",
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
        "datePublished": "2026-02-09",
        "description": "Expert nutrition strategies for elderly care. Learn about age-appropriate meal planning, health monitoring, and specialized nutrition support for seniors at home.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/elder-care-nutrition-specialized-diet-plans-seniors"
        }
    };

    /* 
      AI IMAGE GENERATION PROMPT:
      "Professional Indian female dietitian consulting with elderly Indian couple at home, 
      warm Indian home interior with traditional decor, healthy fresh vegetables and dal on table, 
      natural warm lighting, caring and respectful atmosphere, healthcare consultation setting, 
      bright and clean aesthetic, photorealistic style, high quality, 16:9 aspect ratio"
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
                        <span className="truncate max-w-[200px] md:max-w-none">Elder Care Nutrition</span>
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
                    Elder Care Nutrition: Why Seniors Need <span className="text-[#217328]">Specialized Diet Plans at Home</span>
                </h1>
            </header>

            {/* Content Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
                {/* Main Article Content */}
                <article className="lg:w-2/3">

                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/elder-care-nutrition-specialized-diet-plans-seniors.jpg"
                            alt="Professional dietitian providing elderly nutrition care at home in Indian setting"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            As our parents age, we notice changes—slower movements, lower energy, perhaps a diminished appetite. What we often miss, though, is how dramatically their nutritional needs shift during these years.
                        </p>

                        <p>
                            I learned this the hard way when my 72-year-old father started losing weight rapidly. He'd always been active, always eaten well. But suddenly, the same dal-roti that sustained him for decades wasn't enough anymore. His doctor mentioned sarcopenia—age-related muscle loss—and suggested we consult a nutritionist. That conversation opened my eyes to how little we understand about elderly nutrition.
                        </p>

                        <p>
                            Here's the thing: aging isn't just about getting older. It's a complete physiological transformation that demands a different approach to food, nutrients, and meal planning.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Why Generic Diets Fail Our Seniors</h2>
                        <p>
                            Most diet advice online is written for younger adults. High-protein shakes, intermittent fasting, keto diets—these might work for a 35-year-old, but they can be problematic or even harmful for someone in their 70s.
                        </p>

                        <p>Seniors face unique challenges:</p>

                        <p>
                            <strong>Reduced digestive capacity</strong> means they absorb fewer nutrients from the same meals. Their stomach produces less acid, making protein digestion harder. The gut microbiome changes, affecting everything from immunity to mood.
                        </p>

                        <p>
                            <strong>Decreased appetite</strong> often stems from altered taste and smell perception. Food that once delighted them now seems bland. They're genuinely not as hungry, which can lead to unintentional malnutrition.
                        </p>

                        <p>
                            <strong>Multiple medications</strong> interact with nutrients in complex ways. Blood thinners affect vitamin K. Diabetes medications influence blood sugar and meal timing. Thyroid medicines need careful consideration around calcium intake.
                        </p>

                        <p>
                            <strong>Chronic conditions</strong> like arthritis, diabetes, hypertension, or osteoporosis each demand specific dietary modifications. Managing one condition might contradict managing another—unless you have professional guidance from the <Link href="/programs/elderly-nutrition" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">best dietician in Delhi NCR</Link>.
                        </p>

                        <p>
                            These aren't problems you can solve with a generic meal plan downloaded from the internet.
                        </p>

                        <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 my-10">
                            <h3 className="text-xl font-bold text-[#217328] mb-4">Important to Know</h3>
                            <p className="text-slate-800 m-0">Elderly nutrition isn't about restriction. It's about precision—strategically providing the right nutrients at the right time to maintain muscle mass, bone density, and overall vitality during the senior years.</p>
                        </div>

                        <h2 className="text-3xl font-black mt-12 mb-6">What Elderly Bodies Actually Need</h2>
                        <p>
                            Let me be clear about something: elderly nutrition isn't about restriction. It's about precision.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Protein Becomes Critical</h3>
                        <p>
                            Not the amounts bodybuilders need, but strategically distributed throughout the day. Around 1 to 1.2 grams per kilogram of body weight, spread across meals, helps maintain muscle mass and prevents frailty. But here's the catch—many seniors struggle to digest large protein portions, so smaller, frequent servings work better.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Calcium and Vitamin D</h3>
                        <p>
                            These aren't optional anymore. Bone density decreases with age, especially in women post-menopause. But throwing supplements at the problem without considering absorption, existing medications, and dietary sources often backfires.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Fiber and Hydration</h3>
                        <p>
                            Fiber needs increase to counter constipation and maintain gut health, but too much too quickly can cause bloating and discomfort in sensitive digestive systems. Hydration deserves special mention—seniors often don't feel thirsty even when dehydrated. This increases fall risk, affects kidney function, and worsens confusion.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Essential Micronutrients</h3>
                        <p>
                            Micronutrients like B12, folate, and iron frequently run low because absorption decreases with age. Blood work reveals deficiencies, but addressing them through food requires knowledge of bioavailability and food combinations.
                        </p>

                        <p>
                            The complexity here is real. This is why working with qualified <Link href="/care-team" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">dieticians in Noida</Link> or other parts of Delhi NCR makes such a difference—they understand these intricate balances.
                        </p>

                        <blockquote className="my-12 px-8 py-4 border-l-8 border-[#217328] bg-gray-50 italic text-2xl font-medium text-slate-800">
                            "Real elderly nutrition care isn't just meal planning. It's a comprehensive approach that considers medical history, functional abilities, cultural practices, and even kitchen capabilities."
                        </blockquote>

                        <h2 className="text-3xl font-black mt-12 mb-6">The Mobility Problem Nobody Talks About</h2>
                        <p>
                            Here's a reality many families face: getting elderly parents to a clinic is genuinely difficult.
                        </p>

                        <p>
                            My neighbor's mother has severe arthritis. Every outing is an ordeal—getting her down two flights of stairs, into the car, waiting at the clinic, then reversing the whole process. By the time they return home, she's exhausted and in pain. Expecting her to make this trip every week or two for nutrition consultations? Not realistic.
                        </p>

                        <p>
                            Other seniors can't drive anymore. They depend on working children who struggle to take time off. Some feel uncomfortable in clinical settings, becoming anxious or confused in unfamiliar environments.
                        </p>

                        <p>
                            This mobility challenge is precisely why at-home nutrition care exists. When the professional comes to you, these barriers disappear. Your parent sits comfortably in their own home, relaxed and able to communicate better. The representative brings all necessary equipment—weighing scales, body parameter monitors, everything needed for accurate assessments.
                        </p>

                        <p>
                            Regular monitoring becomes possible when it's convenient. Monthly visits for detailed measurements, combined with weekly consultations via phone or video, create a consistent care rhythm without the stress of travel.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">What Proper Elder Care Nutrition Looks Like</h2>
                        <p>
                            Real elderly nutrition care isn't just meal planning. It's a comprehensive approach.
                        </p>

                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-xl">✓</span>
                                <span><strong>Detailed Initial Assessment:</strong> Medical history, medications, functional abilities, food preferences, and cultural practices.</span>
                            </li>
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-xl">✓</span>
                                <span><strong>Medical Condition Management:</strong> Coordination of diabetes, hypertension, protein needs with kidney function.</span>
                            </li>
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-xl">✓</span>
                                <span><strong>Practical Meal Planning:</strong> Dal, roti, rice, sabzi—foods seniors recognize, made healthier.</span>
                            </li>
                            <li className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-start">
                                <span className="text-green-600 mr-2 text-xl">✓</span>
                                <span><strong>Weekly Adjustments:</strong> Energy levels fluctuate, appetites change—plans need modification.</span>
                            </li>
                        </ul>

                        <p className="mt-6">
                            The best dietician in Delhi NCR understands this cultural context and builds plans around familiar foods made healthier, not introducing quinoa salads to a 75-year-old from Delhi.
                        </p>

                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                            <h3 className="text-3xl font-black mb-4">Is Your Elderly Parent Getting Proper Nutrition?</h3>
                            <p className="text-xl opacity-90 mb-8 font-medium">Stop worrying about clinic visits. Our specialized elderly nutrition care comes directly to your home with monthly monitoring and weekly professional guidance.</p>
                            <Link href="/contact" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                                Get Professional Support at Home
                            </Link>
                        </div>

                        <h2 className="text-3xl font-black mt-12 mb-6">Red Flags That Demand Professional Help</h2>
                        <p>
                            Some situations absolutely require qualified nutrition guidance:
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">⚠</span>
                                <span><strong>Unintentional weight loss</strong> of more than 5% in a few months signals trouble.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">⚠</span>
                                <span><strong>Frequent falls or weakness</strong> often connect to nutritional deficiencies.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">⚠</span>
                                <span><strong>Confusion or memory issues</strong> sometimes improve with better nutrition.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">⚠</span>
                                <span><strong>Poor wound healing</strong> in diabetic seniors requires careful nutritional intervention.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">⚠</span>
                                <span><strong>Multiple chronic conditions</strong> simply can't be managed with generic advice.</span>
                            </li>
                        </ul>

                        <p>
                            If you're seeing any of these signs, don't wait. Reach out to experienced dieticians in Noida or your area of Delhi NCR who specialize in elderly care.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">What Makes Home-Based Care Different</h2>
                        <p>
                            The difference between clinic visits and home-based nutrition care is like the difference between occasional check-ups and continuous support.
                        </p>

                        <p>
                            <strong>Consistency</strong> happens when barriers are removed. No canceled appointments because of weather, traffic, or not feeling well. The professional comes to you on schedule.
                        </p>

                        <p>
                            <strong>Comfort</strong> matters psychologically. Seniors communicate better in familiar surroundings. They're more honest about what they're actually eating, not what they think they should be eating.
                        </p>

                        <p>
                            <strong>Real-world context</strong> becomes visible. The dietitian sees the actual kitchen, understands the household dynamics, observes eating habits, and can give advice that fits the reality, not some idealized version.
                        </p>

                        <p>
                            <strong>Family coordination</strong> improves when everyone can be present occasionally. The monthly at-home visit lets children who live nearby participate, ask questions, and understand the plan.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">The Investment in Quality of Life</h2>
                        <p>
                            I know families worry about costs. Elderly care involves multiple expenses—medications, doctor visits, sometimes caregivers. Adding nutrition care feels like another burden.
                        </p>

                        <p>
                            But consider this: poor nutrition leads to hospitalizations. Falls from weakness, infections from poor immunity, complications from unmanaged diabetes—these emergency room visits cost far more than preventive nutrition care.
                        </p>

                        <p>
                            The question isn't whether you can afford it. The question is whether you can afford not to invest in your parent's health and quality of life during their senior years. Learn more about our <Link href="/pricing" className="text-[#217328] font-bold underline">transparent pricing</Link> for elderly nutrition programs.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6">Finding the Right Professional</h2>
                        <p>
                            Not every nutritionist or dietitian has elderly care expertise. You want someone who:
                        </p>

                        <ul className="space-y-2">
                            <li>✓ Understands geriatric nutrition specifically</li>
                            <li>✓ Communicates well with seniors patiently and respectfully</li>
                            <li>✓ Coordinates with doctors comfortably</li>
                            <li>✓ Provides consistent support through regular check-ins</li>
                            <li>✓ Offers practical solutions that work in real Indian homes</li>
                            <li>✓ Respects preferences while making necessary modifications</li>
                        </ul>

                        <p>
                            When searching for the best dietician in Delhi NCR for elderly care, ask about their experience with seniors specifically, their approach to <Link href="/how-it-works" className="text-[#217328] font-bold underline">home visits</Link>, and how they handle multiple chronic conditions.
                        </p>

                        <h2 className="text-3xl font-black mt-12 mb-6 text-[#217328]">Moving Forward</h2>
                        <p>
                            If you're reading this, you probably already sense that your elderly parent needs better nutritional support. Maybe they're losing weight, losing energy, or struggling with multiple health conditions. Maybe you're overwhelmed trying to figure out what they should eat while managing their medications and doctor appointments.
                        </p>

                        <p>
                            You're not alone in this. Thousands of families across Delhi NCR face the same challenges.
                        </p>

                        <p>
                            The good news is that specialized nutrition care makes a measurable difference. Seniors eating properly have better energy, stronger immunity, improved medication effectiveness, and genuinely better quality of life.
                        </p>

                        <p>
                            It starts with acknowledging that elderly nutrition isn't something you can wing. It requires professional expertise, regular monitoring, and consistent support.
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
                                        src="/anita-menon.jpg"
                                        alt="Anita Menon"
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-slate-900 leading-tight">Anita Menon</h4>
                                    <p className="text-[#217328] font-bold text-sm">Lead Clinical Dietitian</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Specializing in geriatric nutrition and elderly care, Anita has helped hundreds of families across Delhi NCR provide proper nutritional support to their aging parents through home-based interventions.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center">
                                View All Experts
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        {/* Related Services */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Support Plans</h4>
                            <div className="space-y-4">
                                <Link href="/programs/elderly-nutrition" className="block group">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                        <span className="font-bold text-slate-800">Elderly Nutrition</span>
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
                            <h4 className="text-2xl font-black mb-4 relative z-10">Give Your Parents the Care They Deserve</h4>
                            <p className="opacity-90 mb-8 text-sm font-medium relative z-10">Join 300+ families who have improved their parents' health with our elderly nutrition programs.</p>
                            <Link href="/contact" className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg">
                                Book a Home Visit
                            </Link>
                        </div>

                    </div>
                </aside>
            </div>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Ready to Give Your Parents Professional Nutrition Care?</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Take the first step towards better elderly health with personalized nutrition assessments from the best dietician in Delhi NCR—directly at your home.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-[#217328] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase shadow-2xl shadow-[#217328]/30 hover:-translate-y-1 transition-all">
                            Schedule a Home Visit
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
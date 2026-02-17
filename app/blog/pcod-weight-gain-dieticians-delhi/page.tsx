import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "PCOD and Weight Gain: How Dieticians in Delhi Can Help You Break the Cycle",
    description: "Struggling with PCOD weight gain? Expert dieticians in Delhi and dietitian in Gurgaon explain why crash diets fail and what actually works. Discover a science-backed, sustainable approach.",
    keywords: "PCOD weight gain, dieticians in delhi, dietitian in gurgaon, PCOD diet plan, PCOD weight management, PCOS weight loss, PCOD nutrition, insulin resistance PCOD, at-home dietitian delhi ncr",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/pcod-weight-gain-dieticians-delhi',
    },
    openGraph: {
        title: "PCOD and Weight Gain: How Dieticians in Delhi Can Help You Break the Cycle",
        description: "Struggling with PCOD weight gain? Expert dieticians in Delhi explain why crash diets fail and what actually works.",
        url: 'https://dieticianathome.com/blog/pcod-weight-gain-dieticians-delhi',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://www.dieticianathome.com/pcod-weight-gain-dieticians-delhi.jpg',
                width: 1200,
                height: 630,
                alt: 'Healthy Indian food spread for PCOD management - fresh vegetables, millets and dal',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "PCOD and Weight Gain: Breaking the Cycle Without Crash Diets",
        description: "Why crash diets make PCOD worse — and what actually works. Expert guidance from Delhi NCR dietitians.",
        images: ['https://www.dieticianathome.com/pcod-weight-gain-dieticians-delhi.jpg'],
    },
};

export default function PcodWeightGainBlogPost() {

    const category = "Women's Health";
    const readingTime = "11 min read";
    const publishDate = "February 17, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "PCOD and Weight Gain: Breaking the Cycle Without Crash Diets",
        "image": "https://www.dieticianathome.com/pcod-weight-gain-dieticians-delhi.jpg",
        "author": {
            "@type": "Organization",
            "name": "Dietitian at Home Editorial Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Dietitian at Home",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dieticianathome.com/diet-at-home-logo.png"
            }
        },
        "datePublished": "2026-02-17",
        "description": "Why crash diets fail for PCOD and the science-backed nutrition approach that actually breaks the weight gain cycle. Expert guidance from Delhi NCR dietitians.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/pcod-weight-gain-dieticians-delhi"
        }
    };

    const tableOfContents = [
        { id: "what-is-pcod", label: "Why PCOD Causes Weight Gain" },
        { id: "crash-diets", label: "Why Crash Diets Make It Worse" },
        { id: "what-works", label: "What Actually Works" },
        { id: "monitoring", label: "The Role of Continuous Monitoring" },
        { id: "common-mistakes", label: "Common Mistakes to Avoid" },
        { id: "sample-meals", label: "A Week of PCOD-Friendly Meals" },
        { id: "lifestyle", label: "Lifestyle Beyond Food" },
        { id: "faq", label: "FAQs" },
    ];

    return (
        <div className="bg-[#FAFAF8] min-h-screen pt-28 pb-24 mt-8">
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* — TOP ACCENT LINE — */}
            <div className="h-1 w-full bg-gradient-to-r from-[#217328] via-[#4CAF50] to-[#A8D5B5] fixed top-0 left-0 z-50" />

            {/* — BREADCRUMB — */}
            <nav className="max-w-7xl mx-auto px-6 mb-10">
                <ol className="flex items-center space-x-2 text-sm text-gray-400" style={{ fontFamily: "'system-ui', sans-serif" }}>
                    <li><Link href="/" className="hover:text-[#217328] transition-colors">Home</Link></li>
                    <li className="flex items-center space-x-2">
                        <span>/</span>
                        <Link href="/blog" className="hover:text-[#217328] transition-colors">Blog</Link>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-300">
                        <span>/</span>
                        <span className="truncate max-w-[220px] md:max-w-none">PCOD and Weight Gain</span>
                    </li>
                </ol>
            </nav>

            {/* — HERO HEADER — */}
            <header className="max-w-7xl mx-auto px-6 mb-14">
                <div className="mb-6 flex flex-wrap items-center gap-3" style={{ fontFamily: "'system-ui', sans-serif" }}>
                    <span className="bg-[#217328] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                        {category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {readingTime}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="text-gray-400 text-sm">{publishDate}</span>
                </div>

                {/* — H1 — */}
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#1a1a1a] leading-[1.08] mb-8 max-w-5xl" style={{ letterSpacing: '-0.02em' }}>
                    PCOD and Weight Gain: How{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 text-[#217328]">Dieticians in Delhi</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-[#4CAF50]/15 -z-0 rounded" />
                    </span>
                    {' '}Are Helping Women Break the Cycle — Without Crash Diets
                </h1>
            </header>

           

            {/* — MAIN LAYOUT — */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-14 xl:gap-20">

                {/* ===== ARTICLE ===== */}
                <article className="lg:w-[62%]">

                    {/* — OPENING CALLOUT — */}
                    
                        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                                            <Image
                                                src="/pcod-weight-gain-dieticians-delhi.jpg"
                                                alt="Professional dietitian conducting home visit with Indian family - at-home nutrition care"
                                                width={1200}
                                                height={675}
                                                className="object-cover"    
                                                priority
                                            />
                                        </div>

                    <div className="border-l-4 border-[#217328] bg-white pl-7 pr-6 py-6 rounded-r-2xl mb-14 shadow-sm">
                        <p className="text-lg text-slate-700 leading-relaxed italic m-0">
                            Millions of women across India — including thousands in Gurgaon and Delhi NCR — deal with stubborn weight gain that refuses to move no matter how little they eat or how hard they exercise. This guide breaks down what is happening inside your body, why crash diets make things dramatically worse, and what a structured, sustainable nutrition approach actually looks like.
                        </p>
                    </div>

                    {/* ——— SECTION 1 ——— */}
                    <section id="what-is-pcod" className="mb-14 scroll-mt-24">
                        <h2 className="text-3xl md:text-[2rem] font-black text-[#1a1a1a] mb-6 leading-tight" style={{ letterSpacing: '-0.01em' }}>
                            What Is PCOD — and Why Does It Cause Weight Gain?
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            Polycystic Ovarian Disease (PCOD) affects roughly 1 in 5 women of reproductive age in India. The ovaries produce excess androgens (male hormones), disrupting the menstrual cycle and triggering a cascade of metabolic problems.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            Here is why weight gain is not just a side effect — it is biologically wired into the condition:
                        </p>

                        {/* — 4-CARD GRID — */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                {
                                    icon: "🔄",
                                    title: "Insulin Resistance",
                                    desc: "Most women with PCOD have some degree of insulin resistance. The body produces more insulin than needed, which signals fat storage — particularly around the abdomen."
                                },
                                {
                                    icon: "⚖️",
                                    title: "Elevated Androgens",
                                    desc: "Higher androgen levels promote belly fat storage and make it significantly harder for the body to release stored fat for energy."
                                },
                                {
                                    icon: "🌀",
                                    title: "Hormonal Imbalances",
                                    desc: "Disrupted oestrogen and progesterone levels affect metabolism, appetite regulation, and the body's ability to burn fat efficiently."
                                },
                                {
                                    icon: "🔥",
                                    title: "Chronic Inflammation",
                                    desc: "PCOD often involves systemic low-grade inflammation, which further slows metabolism and promotes fat accumulation."
                                }
                            ].map((card) => (
                                <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#4CAF50]/30 transition-all">
                                    <div className="text-2xl mb-3">{card.icon}</div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-base" style={{ fontFamily: "'system-ui', sans-serif" }}>{card.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed m-0" style={{ fontFamily: "'system-ui', sans-serif" }}>{card.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            <p className="text-amber-800 font-semibold text-sm m-0">
                                <strong>The result?</strong> A body that holds on to weight aggressively, responds poorly to calorie restriction, and is easily disrupted by stress or poor sleep. This is why generic advice — "just eat less and move more" — simply does not work for women with PCOD.
                            </p>
                        </div>
                    </section>

                    {/* ——— SECTION 2 ——— */}
                    <section id="crash-diets" className="mb-14 scroll-mt-24">
                        <h2 className="text-3xl md:text-[2rem] font-black text-[#1a1a1a] mb-6 leading-tight" style={{ letterSpacing: '-0.01em' }}>
                            Why Crash Diets Are the Worst Thing You Can Do With PCOD
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-7" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            Crash diets — whether it is a 500-calorie plan, a 7-day juice cleanse, or cutting out entire food groups overnight — create a hormonal disaster for women with PCOD. Here is what actually happens:
                        </p>

                        {/* — NUMBERED LIST — */}
                        <div className="space-y-5 mb-8">
                            {[
                                {
                                    num: "01",
                                    title: "Cortisol Spikes",
                                    desc: "Extreme calorie restriction signals starvation to the body. Cortisol shoots up. High cortisol directly worsens insulin resistance and promotes belly fat storage — the exact opposite of what you want."
                                },
                                {
                                    num: "02",
                                    title: "Muscle Loss, Not Fat Loss",
                                    desc: "When calories are severely restricted, the body breaks down muscle for energy before it touches fat stores. Lower muscle mass means a permanently slower metabolism."
                                },
                                {
                                    num: "03",
                                    title: "Hormonal Chaos",
                                    desc: "Crash diets disrupt oestrogen levels further, worsen thyroid function (already a risk area for PCOD), and can stop periods entirely in extreme cases."
                                },
                                {
                                    num: "04",
                                    title: "The Rebound Effect",
                                    desc: "Once you return to normal eating, the body — now more insulin resistant with a slower metabolism — stores fat even faster than before. Women often end up heavier than when they started."
                                },
                                {
                                    num: "05",
                                    title: "Nutritional Deficiencies",
                                    desc: "PCOD already causes deficiencies in Vitamin D, magnesium, B12, and iron. Crash diets deplete these further, worsening fatigue, hair fall, and mood swings."
                                }
                            ].map((item) => (
                                <div key={item.num} className="flex gap-5 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#217328]/10 flex items-center justify-center" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                        <span className="text-[#217328] font-black text-xs">{item.num}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1 text-base" style={{ fontFamily: "'system-ui', sans-serif" }}>{item.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed m-0" style={{ fontFamily: "'system-ui', sans-serif" }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* — PULL QUOTE — */}
                        <blockquote className="border-l-0 border-t-4 border-b-4 border-[#217328]/30 py-7 px-2 my-10">
                            <p className="text-2xl md:text-3xl text-slate-800 font-black leading-snug m-0" style={{ letterSpacing: '-0.01em' }}>
                                "Crash diets create the very conditions that make PCOD harder to manage. Yet millions of women keep trying them because quick fixes are everywhere."
                            </p>
                        </blockquote>
                    </section>

                    {/* ——— SECTION 3 ——— */}
                    <section id="what-works" className="mb-14 scroll-mt-24">
                        <h2 className="text-3xl md:text-[2rem] font-black text-[#1a1a1a] mb-3 leading-tight" style={{ letterSpacing: '-0.01em' }}>
                            What Actually Works: The Science-Backed Approach
                        </h2>
                        <p className="text-base text-[#217328] font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            As recommended by experienced dieticians in Delhi working with PCOD patients
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            Experienced <strong>dieticians in Delhi</strong> who specialise in PCOD will tell you the same thing: the goal is not rapid weight loss. The goal is <strong>metabolic repair</strong>. When you fix the underlying metabolic dysfunction, the weight comes off as a natural consequence — and stays off.
                        </p>

                        {/* — STRATEGY CARDS — */}
                        <div className="space-y-6">
                            {[
                                {
                                    num: 1,
                                    color: "bg-emerald-50 border-emerald-100",
                                    accent: "text-[#217328]",
                                    title: "Blood Sugar Stabilisation",
                                    subtitle: "Non-negotiable for PCOD",
                                    points: [
                                        "Pair every carbohydrate with protein, fat, or fibre",
                                        "Choose millets, oats, brown rice over maida and white rice",
                                        "Never skip meals — especially breakfast",
                                        "Avoid fruit juices that spike blood sugar rapidly",
                                        "Swap plain poha for whole grain alternatives with egg or dal alongside"
                                    ]
                                },
                                {
                                    num: 2,
                                    color: "bg-blue-50 border-blue-100",
                                    accent: "text-blue-700",
                                    title: "Anti-Inflammatory Eating",
                                    subtitle: "Calm the fire within",
                                    points: [
                                        "Plenty of leafy greens, cruciferous vegetables, and colourful vegetables",
                                        "Omega-3s from flaxseeds, walnuts, chia seeds, mackerel, sardines",
                                        "Turmeric, ginger, cinnamon daily",
                                        "Reduce ultra-processed foods and refined oils",
                                        "Shift balance towards calming, not fuel-adding foods"
                                    ]
                                },
                                {
                                    num: 3,
                                    color: "bg-orange-50 border-orange-100",
                                    accent: "text-orange-700",
                                    title: "Protein as Priority",
                                    subtitle: "The most underused PCOD tool",
                                    points: [
                                        "Paneer, dahi (especially Greek yogurt), legumes, lentils",
                                        "Eggs, chicken, fish (for non-vegetarians)",
                                        "Seeds — pumpkin, sunflower, hemp",
                                        "Target: 1.2–1.6g per kg of body weight daily",
                                        "High-protein breakfast dramatically reduces cravings"
                                    ]
                                },
                                {
                                    num: 4,
                                    color: "bg-purple-50 border-purple-100",
                                    accent: "text-purple-700",
                                    title: "Strategic Carbohydrate Management",
                                    subtitle: "Not elimination — smarter choices",
                                    points: [
                                        "Choose low-GI carbs: whole grains, legumes, most vegetables",
                                        "Larger carb portions earlier in the day when insulin sensitivity is higher",
                                        "Keep dinner lighter on carbohydrates",
                                        "Traditional dal + sabzi + roti in proper portions is excellent",
                                        "Refined versions and portion distortions are the actual problem"
                                    ]
                                }
                            ].map((strategy) => (
                                <div key={strategy.num} className={`${strategy.color} border rounded-2xl p-6`}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full ${strategy.color} border ${strategy.color.includes('border-') ? '' : 'border-gray-200'} flex items-center justify-center`}>
                                            <span className={`${strategy.accent} font-black text-sm`}>{strategy.num}</span>
                                        </div>
                                        <div>
                                            <h3 className={`font-black text-lg text-slate-900 leading-tight`} style={{ fontFamily: "'system-ui', sans-serif" }}>{strategy.title}</h3>
                                            <p className={`text-xs font-semibold uppercase tracking-wider ${strategy.accent} mt-0.5`} style={{ fontFamily: "'system-ui', sans-serif" }}>{strategy.subtitle}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 ml-12">
                                        {strategy.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                                <span className={`${strategy.accent} mt-1 flex-shrink-0 text-xs`}>→</span>
                                                <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* — GUT HEALTH ADD-ON — */}
                        <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-black text-slate-900 text-lg mb-2" style={{ fontFamily: "'system-ui', sans-serif" }}>Bonus: Gut Health & PCOD</h3>
                            <p className="text-slate-500 text-sm leading-relaxed m-0" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                Emerging research links gut microbiome health directly to PCOD symptom severity. Supporting gut health through fermented foods (dahi, kanji, idli, dosa), fibre-rich vegetables, and prebiotic foods (onion, garlic, banana) has shown real promise in improving hormonal balance.
                            </p>
                        </div>
                    </section>

                    {/* ——— SECTION 4 ——— */}
                    <section id="monitoring" className="mb-14 scroll-mt-24">
                        <h2 className="text-3xl md:text-[2rem] font-black text-[#1a1a1a] mb-6 leading-tight" style={{ letterSpacing: '-0.01em' }}>
                            The Role of Continuous Monitoring — Why One-Time Plans Fail
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            PCOD is a dynamic condition. Hormones fluctuate across the menstrual cycle, stress changes cortisol levels, seasons affect Vitamin D, and life circumstances shift constantly. A meal plan that works in month one may need significant adjustments by month three.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-7" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            This is why one-time diet plans — downloaded from the internet or handed over in a 15-minute clinic consultation — have such a poor track record with PCOD. What drives sustained progress is <strong>continuous monitoring and refinement</strong>:
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            {[
                                { icon: "📊", label: "Weekly body parameter tracking" },
                                { icon: "📅", label: "Regular dietitian consultations" },
                                { icon: "🍽️", label: "Real-time meal tracking" },
                                { icon: "🏠", label: "Monthly in-person assessments" },
                            ].map((item) => (
                                <div key={item.label} className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm">
                                    <div className="text-2xl mb-2">{item.icon}</div>
                                    <p className="text-slate-600 text-xs leading-snug m-0 font-medium" style={{ fontFamily: "'system-ui', sans-serif" }}>{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#217328] text-white rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <div className="flex-grow">
                                <p className="font-bold text-lg mb-1 text-white" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                    This is exactly the model a <strong>dietitian in Gurgaon</strong> or Delhi follows through Dietitian at Home
                                </p>
                                <p className="text-white/75 text-sm m-0" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                    Not a single consultation — an ongoing relationship that evolves with your body.
                                </p>
                            </div>
                            <Link
                                href="/programs/pcod-pcos"
                                className="flex-shrink-0 bg-white text-[#217328] px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-gray-50 transition-all whitespace-nowrap"
                                style={{ fontFamily: "'system-ui', sans-serif" }}
                            >
                                View PCOD Program →
                            </Link>
                        </div>
                    </section>

                    {/* ——— SECTION 5 ——— */}
                    <section id="common-mistakes" className="mb-14 scroll-mt-24">
                        <h2 className="text-3xl md:text-[2rem] font-black text-[#1a1a1a] mb-6 leading-tight" style={{ letterSpacing: '-0.01em' }}>
                            Common Mistakes PCOD Patients Make With Diet
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-7" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            Even with the best intentions, certain mistakes keep showing up. Here are the most common ones — and why they backfire:
                        </p>

                        <div className="space-y-3">
                            {[
                                { mistake: "Skipping meals to cut calories", why: "Spikes cortisol and worsens insulin resistance. Regular, balanced meals are essential." },
                                { mistake: "Going fat-free", why: "Healthy fats from avocado, nuts, ghee, and coconut oil are critical for hormone production. Fat-free diets worsen hormonal imbalances." },
                                { mistake: "Over-relying on fruit", why: "High-sugar fruits like mango and grapes consumed without protein or fat spike blood sugar significantly. Pairing them mitigates the effect." },
                                { mistake: "Cutting entire food groups suddenly", why: "Whether carbs, dairy, or gluten — sudden elimination without guidance leads to nutritional gaps and is rarely sustainable." },
                                { mistake: "Expecting quick results", why: "PCOD-related weight accumulates over months of hormonal imbalance. Meaningful progress takes 3–6 months of consistent effort." },
                                { mistake: "Using the scale as the only metric", why: "Body composition matters more than weight. Tracking measurements, energy levels, and symptom improvements tells a more complete story." },
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 flex gap-4 shadow-sm">
                                    <div className="flex-shrink-0 text-red-400 mt-0.5">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div style={{ fontFamily: "'system-ui', sans-serif" }}>
                                        <p className="font-bold text-slate-900 text-sm mb-1">{item.mistake}</p>
                                        <p className="text-slate-500 text-sm leading-relaxed m-0">{item.why}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ——— SECTION 6 ——— */}
                    <section id="sample-meals" className="mb-14 scroll-mt-24">
                        <h2 className="text-3xl md:text-[2rem] font-black text-[#1a1a1a] mb-3 leading-tight" style={{ letterSpacing: '-0.01em' }}>
                            A Week of PCOD-Friendly Eating — Indian Context
                        </h2>
                        <p className="text-slate-500 text-sm mb-7 italic" style={{ fontFamily: "'system-ui', sans-serif" }}>
                            These are practical starting-point ideas. A real PCOD plan must be personalised to your body, activity level, and food preferences by a qualified dietitian.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    meal: "Breakfast",
                                    color: "bg-yellow-50 border-yellow-100",
                                    accent: "text-yellow-700",
                                    items: [
                                        "Moong dal chilla with mint chutney + boiled egg",
                                        "Oats upma with vegetables + small bowl dahi",
                                        "Besan cheela with paneer filling + green tea"
                                    ]
                                },
                                {
                                    meal: "Lunch",
                                    color: "bg-emerald-50 border-emerald-100",
                                    accent: "text-[#217328]",
                                    items: [
                                        "2 jowar rotis + dal + sabzi + cucumber raita",
                                        "Brown rice + rajma + salad",
                                        "Quinoa khichdi + dahi + steamed vegetables"
                                    ]
                                },
                                {
                                    meal: "Snacks",
                                    color: "bg-orange-50 border-orange-100",
                                    accent: "text-orange-700",
                                    items: [
                                        "Handful mixed nuts + a pear",
                                        "Roasted chana",
                                        "Greek yogurt with flaxseeds"
                                    ]
                                },
                                {
                                    meal: "Dinner",
                                    color: "bg-blue-50 border-blue-100",
                                    accent: "text-blue-700",
                                    items: [
                                        "Grilled chicken or paneer tikka + roasted vegetables",
                                        "Moong dal soup + 1 multigrain roti",
                                        "Egg bhurji + sabzi"
                                    ]
                                }
                            ].map((section) => (
                                <div key={section.meal} className={`${section.color} border rounded-2xl p-5`}>
                                    <h3 className={`font-black text-sm uppercase tracking-widest mb-3 ${section.accent}`} style={{ fontFamily: "'system-ui', sans-serif" }}>{section.meal}</h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                                <span className={`${section.accent} mt-0.5 flex-shrink-0`}>·</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ——— SECTION 7 ——— */}
                    <section id="lifestyle" className="mb-14 scroll-mt-24">
                        <h2 className="text-3xl md:text-[2rem] font-black text-[#1a1a1a] mb-6 leading-tight" style={{ letterSpacing: '-0.01em' }}>
                            Lifestyle Beyond Food: The Other Pillars
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: "😴", title: "Sleep", desc: "Inadequate sleep dramatically worsens insulin resistance and increases cortisol. 7–9 hours of quality sleep is non-negotiable." },
                                { icon: "🧘", title: "Stress Management", desc: "Chronic stress is one of the most underappreciated PCOD drivers. Yoga, meditation, and regular leisure time are genuinely therapeutic." },
                                { icon: "🏋️", title: "Resistance Training", desc: "2–3 sessions per week of strength training combined with moderate cardio is the most well-evidenced exercise approach for PCOD." },
                                { icon: "☀️", title: "Vitamin D", desc: "Most Indian women are Vitamin D deficient. Supplementation under medical guidance can meaningfully improve insulin sensitivity and hormonal balance." },
                            ].map((pillar) => (
                                <div key={pillar.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-3xl mb-3">{pillar.icon}</div>
                                    <h3 className="font-black text-slate-900 mb-2" style={{ fontFamily: "'system-ui', sans-serif" }}>{pillar.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed m-0" style={{ fontFamily: "'system-ui', sans-serif" }}>{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ——— SECTION 8: FAQ ——— */}
                    <section id="faq" className="mb-14 scroll-mt-24">
                        <h2 className="text-3xl md:text-[2rem] font-black text-[#1a1a1a] mb-8 leading-tight" style={{ letterSpacing: '-0.01em' }}>
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "Can I lose weight with PCOD?",
                                    a: "Yes, absolutely. While PCOD makes weight loss more challenging, it is entirely achievable with the right nutritional approach, consistent lifestyle modifications, and appropriate professional support. Many women see significant improvements within 3 to 6 months."
                                },
                                {
                                    q: "How much weight loss helps with PCOD symptoms?",
                                    a: "Research shows that even a 5 to 10% reduction in body weight can significantly improve hormonal balance, restore more regular menstrual cycles, reduce androgen levels, and improve insulin sensitivity."
                                },
                                {
                                    q: "Should I go keto for PCOD?",
                                    a: "A ketogenic diet can work for some women with PCOD, particularly those with severe insulin resistance. However, it is not the only approach and may not be appropriate for everyone. A qualified dietitian can assess whether it suits your individual profile."
                                },
                                {
                                    q: "How long will it take to see results?",
                                    a: "This varies based on starting weight, severity of insulin resistance, compliance, and individual metabolism. Most women on a well-structured PCOD nutrition program begin to see measurable improvements in 6–12 weeks, with significant changes in 3–6 months."
                                },
                                {
                                    q: "Can I eat rice with PCOD?",
                                    a: "Yes — with modifications. Opt for brown rice, control portion sizes, pair it with plenty of dal, sabzi, and protein, and avoid large rice portions at dinner when insulin sensitivity is lower."
                                }
                            ].map((item, i) => (
                                <details key={i} className="group bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-slate-900 text-base list-none" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                        {item.q}
                                        <span className="flex-shrink-0 ml-4 text-[#217328] group-open:rotate-45 transition-transform duration-200">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="px-5 pb-5 border-t border-gray-50">
                                        <p className="text-slate-500 text-sm leading-relaxed mt-4 m-0" style={{ fontFamily: "'system-ui', sans-serif" }}>{item.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* ——— FOOTER CTA BLOCK ——— */}
                    <div className="bg-[#1a1a1a] text-white rounded-3xl p-10 text-center relative overflow-hidden">
                        {/* decorative blobs */}
                        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#217328]/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#4CAF50]/15 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10">
                            <p className="text-[#4CAF50] text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'system-ui', sans-serif" }}>Ready to start?</p>
                            <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                                Stop guessing. Start healing — with a <span className="text-[#4CAF50]">dietitian in Gurgaon</span> or Delhi who comes to you.
                            </h3>
                            <p className="text-white/60 text-sm mb-8 max-w-md mx-auto" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                Monthly home visits · Weekly dietitian calls · Personalised meal plans · Continuous monitoring
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/programs/pcod-pcos"
                                    className="bg-[#217328] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-[#1a5d20] transition-all"
                                    style={{ fontFamily: "'system-ui', sans-serif" }}
                                >
                                    View PCOD Program
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
                                    style={{ fontFamily: "'system-ui', sans-serif" }}
                                >
                                    Talk to Us
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* — DISCLAIMER — */}
                    <p className="text-xs text-gray-400 leading-relaxed mt-8 p-4 border border-gray-100 rounded-xl" style={{ fontFamily: "'system-ui', sans-serif" }}>
                        <strong>Medical Disclaimer:</strong> This article is intended for informational purposes only and does not constitute medical advice. Please consult your healthcare provider before making significant changes to your diet or lifestyle. Read our{' '}
                        <Link href="/medical-disclaimer" className="text-[#217328] underline">Medical Disclaimer</Link>{' '}for complete information.
                    </p>

                </article>

                {/* ===== SIDEBAR ===== */}
                <aside className="lg:w-[34%]">
                    <div className="sticky top-28 space-y-8">

                        {/* — TABLE OF CONTENTS — */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>In This Article</h4>
                            <nav>
                                <ul className="space-y-1">
                                    {tableOfContents.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className="flex items-center gap-2.5 text-slate-600 hover:text-[#217328] py-1.5 text-sm transition-colors group"
                                                style={{ fontFamily: "'system-ui', sans-serif" }}
                                            >
                                                <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#217328] transition-colors flex-shrink-0" />
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* — QUICK FACT — */}
                        <div className="bg-[#217328] text-white rounded-2xl p-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3" style={{ fontFamily: "'system-ui', sans-serif" }}>Quick Fact</p>
                            <p className="text-2xl font-black leading-tight mb-3">
                                5–10% weight loss can restore regular ovulation in PCOD
                            </p>
                            <p className="text-white/70 text-sm m-0" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                The journey starts in your kitchen, not just the pharmacy.
                            </p>
                        </div>

                        {/* — RELATED PROGRAMS — */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>Our Programs</h4>
                            <div className="space-y-3">
                                {[
                                    { href: "/programs/pcod-pcos", label: "PCOD / PCOS Care", tag: "Specialised" },
                                    { href: "/programs/weight-management", label: "Weight Management", tag: "General" },
                                    { href: "/programs/thyroid-management", label: "Thyroid Management", tag: "Specialised" },
                                    { href: "/programs/diabetes-management", label: "Diabetes Management", tag: "Specialised" },
                                ].map((prog) => (
                                    <Link key={prog.href} href={prog.href} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-[#217328]/30 hover:bg-[#217328]/5 transition-all group">
                                        <span className="text-slate-700 font-semibold text-sm" style={{ fontFamily: "'system-ui', sans-serif" }}>{prog.label}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] text-gray-400 hidden sm:block" style={{ fontFamily: "'system-ui', sans-serif" }}>{prog.tag}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all text-sm">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* — HOW IT WORKS CARD — */}
                        <Link href="/how-it-works" className="block bg-[#FAFAF8] border border-gray-100 rounded-2xl p-6 hover:border-[#217328]/30 hover:shadow-md transition-all group">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3" style={{ fontFamily: "'system-ui', sans-serif" }}>Service</p>
                            <h4 className="font-black text-slate-900 text-lg mb-2 group-hover:text-[#217328] transition-colors" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                See How Dietitian at Home Works →
                            </h4>
                            <p className="text-slate-500 text-sm m-0" style={{ fontFamily: "'system-ui', sans-serif" }}>
                                Monthly visits · Weekly calls · App tracking · At your doorstep
                            </p>
                        </Link>

                        {/* — PRICING CARD — */}
                        {/* <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <h4 className="font-black text-slate-900 mb-5" style={{ fontFamily: "'system-ui', sans-serif" }}>Transparent Pricing</h4>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                                    <div>
                                        <p className="font-bold text-slate-800 text-sm" style={{ fontFamily: "'system-ui', sans-serif" }}>PCOD/PCOS Program</p>
                                        <p className="text-gray-400 text-xs" style={{ fontFamily: "'system-ui', sans-serif" }}>First 3 months</p>
                                    </div>
                                    <p className="font-black text-slate-900">₹9,000</p>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-slate-800 text-sm" style={{ fontFamily: "'system-ui', sans-serif" }}>Monthly (after)</p>
                                        <p className="text-gray-400 text-xs" style={{ fontFamily: "'system-ui', sans-serif" }}>Ongoing care</p>
                                    </div>
                                    <p className="font-black text-slate-900">₹3,499/mo</p>
                                </div>
                            </div>
                            <Link
                                href="/pricing"
                                className="block w-full text-center bg-[#217328] text-white py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-[#1a5d20] transition-all"
                                style={{ fontFamily: "'system-ui', sans-serif" }}
                            >
                                View Full Pricing
                            </Link>
                        </div> */}

                    </div>
                </aside>

            </div>
        </div>
    );
}
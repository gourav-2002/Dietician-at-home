import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Pregnancy Cravings vs Nutrition: What Your Body Needs | Best Dietician in Noida",
    description: "Confused about pregnancy cravings? The best dietician in Noida explains what your body is really asking for — and how to bridge the gap between cravings and real pregnancy nutrition. Expert dieticians in Jaipur also guide you through smarter food choices every trimester.",
    keywords: "pregnancy cravings, pregnancy nutrition, best dietician in noida, dieticians in jaipur, prenatal diet, trimester diet plan, home dietitian, dietitian at home, pregnancy diet India",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/pregnancy-cravings-vs-nutrition-what-your-body-is-asking-for',
    },
    openGraph: {
        title: "Pregnancy Cravings vs Nutrition: What Your Body Needs | Best Dietician in Noida",
        description: "Confused about pregnancy cravings? The best dietician in Noida explains what your body is really asking for — and how to bridge the gap between cravings and real pregnancy nutrition.",
        url: 'https://dieticianathome.com/blog/pregnancy-cravings-vs-nutrition-what-your-body-is-asking-for',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: '/pregnancy-cravings-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'Pregnant Indian woman sitting at a dining table with nutritious Indian foods',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Pregnancy Cravings vs Nutrition: What Your Body Needs | Best Dietician in Noida",
        description: "What are your pregnancy cravings really telling you? A guide by India's leading home dietitians.",
        images: ['/pregnancy-cravings-hero.jpg'],
    },
};

export default function PregnancyCravingsBlogPost() {

    const category = "Pregnancy Nutrition";
    const readingTime = "10 min read";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Pregnancy Cravings vs Pregnancy Nutrition: What Your Body Is Actually Asking For",
        "image": "/pregnancy-cravings-hero.jpg",
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
        "datePublished": "2026-03-24",
        "description": "The best dietician in Noida decodes pregnancy cravings — what your body is nutritionally asking for, trimester-by-trimester guidance, and smarter food swaps for Indian mothers.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/pregnancy-cravings-vs-nutrition-what-your-body-is-asking-for"
        },
        "about": {
            "@type": "MedicalCondition",
            "name": "Pregnancy Nutrition"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Are pregnancy cravings always a sign of nutritional deficiency?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not always. Some cravings are hormonally driven or emotionally triggered. However, persistent cravings for specific foods — especially unusual ones — can point to underlying deficiencies worth investigating with a qualified dietitian."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to indulge pregnancy cravings?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In moderation, yes. The key is making smarter swaps when possible and ensuring cravings do not crowd out nutritionally essential foods."
                }
            },
            {
                "@type": "Question",
                "name": "When should I start seeing a dietitian during pregnancy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ideally from the moment you confirm pregnancy, or even during preconception. The earlier you build a strong nutritional foundation, the better the outcomes across all three trimesters."
                }
            },
            {
                "@type": "Question",
                "name": "How do I know if my pregnancy diet is adequate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regular blood tests (hemoglobin, ferritin, vitamin D, B12) combined with guided tracking with a qualified dietitian give you an accurate picture. Generic apps cannot assess what your specific body needs."
                }
            },
            {
                "@type": "Question",
                "name": "Can Dietitian at Home help me with pregnancy nutrition?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our pregnancy nutrition program provides weekly dietitian consultations, personalized meal plans, and monthly home visits — fully tailored to your trimester, health history, and food preferences."
                }
            }
        ]
    };

    const cravings = [
        {
            emoji: "🍫",
            title: "Sweet Cravings",
            examples: "Mithai, Chocolate, Ice Cream",
            signal: "Blood sugar dip or magnesium deficiency. Magnesium plays a key role in glucose metabolism — when levels drop, the body craves sugar as a quick fix.",
            need: "Steady complex carbohydrates throughout the day — oats, brown rice, dal, whole wheat roti.",
            swap: "A small square of dark chocolate (70%+ cocoa) or a ripe banana with peanut butter balances blood sugar far better than mithai.",
            color: "from-pink-50 to-rose-50",
            border: "border-pink-100",
            tag: "bg-pink-100 text-pink-700",
        },
        {
            emoji: "🌶️",
            title: "Salty & Spicy Cravings",
            examples: "Pani Puri, Pickles, Pappad",
            signal: "Sodium depletion from increased blood volume, or heightened taste sensitivity. Zinc deficiency can also make bland food feel intolerable.",
            need: "Adequate sodium and electrolytes — but in balance, not excess.",
            swap: "Roasted makhana with rock salt and chaat masala. Homemade chaat with boiled chickpeas, cucumber, and minimal tamarind.",
            color: "from-orange-50 to-amber-50",
            border: "border-orange-100",
            tag: "bg-orange-100 text-orange-700",
        },
        {
            emoji: "🥛",
            title: "Dairy Cravings",
            examples: "Cheese, Paneer, Ice Cream, Lassi",
            signal: "Calcium and phosphorus demand. Baby's bone development from week 12 onward pulls significant calcium from your system.",
            need: "1,000–1,200 mg of calcium daily. Most Indian diets fall short of this.",
            swap: "This one is worth indulging. Cold homemade lassi, a small bowl of paneer bhurji, or warm milk with turmeric — all excellent choices.",
            color: "from-blue-50 to-sky-50",
            border: "border-blue-100",
            tag: "bg-blue-100 text-blue-700",
        },
        {
            emoji: "🥚",
            title: "Red Meat or Egg Cravings",
            examples: "Eggs, Chicken, Meat",
            signal: "Iron or protein deficiency. Anemia is one of the most common nutritional concerns during pregnancy in India.",
            need: "27 mg of iron per day during pregnancy (up from 18 mg pre-pregnancy). Protein requirements also rise sharply from the second trimester.",
            swap: "Vegetarians: have your iron levels checked. Combine iron-rich plant foods (palak, rajma, lentils) with vitamin C (amla, lemon, tomato) for better absorption.",
            color: "from-yellow-50 to-amber-50",
            border: "border-yellow-100",
            tag: "bg-yellow-100 text-yellow-700",
        },
    ];

    const trimesters = [
        {
            number: "01",
            label: "First Trimester",
            weeks: "Weeks 1–12",
            color: "bg-green-600",
            lightColor: "bg-green-50",
            borderColor: "border-green-200",
            nutrients: [
                { name: "Folate (Folic Acid)", desc: "Critical for neural tube development. Green leafy vegetables, dal, fortified cereals. Supplement as prescribed." },
                { name: "Iron", desc: "Blood volume starts increasing. Start building iron stores from day one." },
                { name: "Vitamin B6", desc: "Helps manage nausea. Found in bananas, potatoes, chickpeas." },
                { name: "Hydration", desc: "Nausea can reduce fluid intake. Aim for small, frequent sips throughout the day." },
            ],
            note: "Nausea often makes eating difficult. Personalized guidance tailored to your food tolerance is essential here.",
        },
        {
            number: "02",
            label: "Second Trimester",
            weeks: "Weeks 13–26",
            color: "bg-teal-600",
            lightColor: "bg-teal-50",
            borderColor: "border-teal-200",
            nutrients: [
                { name: "Calcium & Vitamin D", desc: "Baby's bones and teeth are developing rapidly. Dairy, ragi, sesame seeds, fortified foods." },
                { name: "Omega-3 (DHA)", desc: "Brain and eye development. Walnuts, flaxseed, fatty fish (if non-vegetarian), or supplementation." },
                { name: "Protein", desc: "Aim for 70–75 grams per day. Dal, paneer, eggs, legumes, nuts." },
                { name: "Fiber", desc: "Constipation is common. Increase whole grains, fruits, and vegetables daily." },
            ],
            note: "Caloric needs increase by ~300–350 kcal/day. Make those calories count — nutritionally dense, not empty.",
        },
        {
            number: "03",
            label: "Third Trimester",
            weeks: "Weeks 27–40",
            color: "bg-emerald-700",
            lightColor: "bg-emerald-50",
            borderColor: "border-emerald-200",
            nutrients: [
                { name: "Protein", desc: "Requirements increase further. Critical for tissue repair and milk production preparation." },
                { name: "Iron", desc: "Continue prioritizing. Prevents postpartum anemia after delivery blood loss." },
                { name: "Vitamin K", desc: "Supports blood clotting during and after delivery. Found in dark green vegetables." },
                { name: "Magnesium", desc: "Helps with leg cramps — very common in this trimester. Nuts, seeds, dark chocolate." },
            ],
            note: "Eat 5–6 smaller meals. The growing uterus puts pressure on the stomach, making large meals uncomfortable.",
        },
    ];

    const foodsToEat = [
        { item: "Protein at every meal", detail: "Dal, rajma, paneer, eggs, tofu, lean chicken/fish" },
        { item: "Iron + Vitamin C pairing", detail: "Palak + lemon; rajma + tomato; beetroot + amla juice" },
        { item: "Calcium daily", detail: "Dairy or fortified alternatives, ragi, sesame seeds" },
        { item: "Healthy fats", detail: "Ghee (moderation), nuts, seeds, coconut" },
        { item: "Folate-rich greens", detail: "Methi, palak, broccoli, asparagus" },
        { item: "Complex carbs", detail: "Brown rice, oats, whole wheat, jowar, bajra" },
    ];

    const foodsToAvoid = [
        { item: "Raw or undercooked foods", detail: "Risk of listeria and salmonella" },
        { item: "High-mercury fish", detail: "Shark, swordfish, king mackerel — limit or avoid" },
        { item: "Unpasteurized dairy", detail: "Including certain artisanal cheeses" },
        { item: "Excess caffeine", detail: "Limit to under 200 mg per day (~one small cup of coffee)" },
        { item: "Processed snacks", detail: "High sodium, preservatives, and empty calories" },
        { item: "Uncleared herbal teas", detail: "Many herbs are contraindicated during pregnancy" },
    ];

    const redFlags = [
        { flag: "Pica", detail: "Craving non-food substances like ice, chalk, or mud. Seek medical help immediately — strongly linked to severe iron deficiency." },
        { flag: "Hyperemesis Gravidarum", detail: "Unable to eat anything for 24–48+ hours due to vomiting. This is a medical condition, not regular morning sickness." },
        { flag: "Uncontrolled sugar cravings + thirst", detail: "Combined with unusual fatigue, this could signal gestational diabetes — get screened." },
        { flag: "Cravings overriding healthy eating", detail: "When cravings consistently crowd out nutrition, professional support is not optional — it is necessary." },
    ];

    const faqs = [
        {
            q: "Are pregnancy cravings always a sign of nutritional deficiency?",
            a: "Not always. Some cravings are hormonally driven or emotionally triggered. However, persistent cravings for specific foods — especially unusual ones — can point to underlying deficiencies worth investigating with a qualified dietitian."
        },
        {
            q: "Is it safe to indulge pregnancy cravings?",
            a: "In moderation, yes. The key is making smarter swaps when possible and ensuring cravings do not crowd out nutritionally essential foods throughout the day."
        },
        {
            q: "How do I know if my pregnancy diet is adequate?",
            a: "Regular blood tests (hemoglobin, ferritin, vitamin D, B12) combined with guided tracking with a qualified dietitian give you an accurate picture. Generic apps simply cannot assess what your specific body needs."
        },
        {
            q: "When should I start seeing a dietitian during pregnancy?",
            a: "Ideally from the moment you confirm pregnancy, or even during preconception. The earlier you build a strong nutritional foundation, the better the outcomes across all three trimesters."
        },
        {
            q: "Can Dietitian at Home help me with pregnancy nutrition?",
            a: "Yes. Our pregnancy nutrition program provides weekly dietitian consultations, personalized meal plans, and monthly home visits — fully tailored to your trimester, health history, and food preferences."
        },
    ];

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 mt-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
                        <span className="truncate max-w-[200px] md:max-w-none">Pregnancy Cravings vs Nutrition</span>
                    </li>
                </ol>
            </nav>

            {/* Hero Header */}
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
                    Pregnancy Cravings vs Nutrition: What Your Body Is{' '}
                    <span className="text-[#217328]">Actually Asking For</span>
                </h1>
            </header>

            {/* Two-Column Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* ── MAIN ARTICLE ── */}
                <article className="lg:w-2/3">

                    {/* Hero Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/pregnancy-cravings-hero.jpg"
                            alt="Pregnant Indian woman sitting at a dining table with nutritious Indian foods including dal, fruits, makhana and lassi"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        {/* Opening Hook */}
                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            You are 14 weeks pregnant. It is 11 PM. And you would move mountains for a bowl of pani puri. Sound familiar? Pregnancy cravings are real, often intense — and almost always confusing. But here is the question most expecting mothers never stop to ask: is my craving telling me something important, or is it just a craving?
                        </p>

                        <p>
                            The answer, as any experienced <strong>best dietician in Noida</strong> will tell you, lies somewhere in between. Your body during pregnancy is going through one of the most nutritionally demanding phases of your entire life. The signals it sends — including cravings — are worth listening to, but they need to be decoded, not just obeyed.
                        </p>

                        {/* ── SECTION 1: Why Cravings Happen ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">Why Pregnancy Cravings Happen in the First Place</h2>

                        <p>Pregnancy cravings are not random. They are driven by a cocktail of hormonal changes, sensory sensitivity shifts, and genuine nutritional gaps. Here is what is actually happening:</p>

                        <div className="grid sm:grid-cols-2 gap-5 not-prose my-8">
                            {[
                                { icon: "🧬", title: "Hormones go into overdrive", desc: "Rising hCG, progesterone, and estrogen dramatically alter taste and smell. Foods you loved may feel unbearable — foods you ignored may feel essential." },
                                { icon: "📉", title: "Blood sugar fluctuations", desc: "Pregnant women experience blood sugar drops more frequently. When it dips, the brain reaches for the fastest fuel available — usually something sweet or carb-heavy." },
                                { icon: "👶", title: "Your body is building a human", desc: "Nutritional demand is extraordinary. Cravings may be your body's way of correcting a micronutrient deficiency — iron, calcium, magnesium, or zinc." },
                                { icon: "💚", title: "Emotional comfort eating", desc: "Pregnancy brings anxiety, discomfort, and emotional changes. Food, particularly comfort food, is often how the body tries to self-soothe." },
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="font-black text-slate-900 text-base mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>Understanding <em>why</em> you crave something is the first step toward making a smarter choice.</p>

                        {/* ── SECTION 2: Decoding Cravings ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">Decoding the Most Common Pregnancy Cravings</h2>
                        <p>Let's go through the most common cravings and what they might actually signal nutritionally.</p>

                        <div className="not-prose space-y-6 my-8">
                            {cravings.map((c, i) => (
                                <div key={i} className={`bg-gradient-to-br ${c.color} border ${c.border} rounded-3xl p-7`}>
                                    <div className="flex items-start gap-4">
                                        <span className="text-4xl">{c.emoji}</span>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <h3 className="font-black text-slate-900 text-xl">{c.title}</h3>
                                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.tag}`}>{c.examples}</span>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-1">What it signals</p>
                                                    <p className="text-slate-700 text-sm leading-relaxed">{c.signal}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-1">What your body actually needs</p>
                                                    <p className="text-slate-700 text-sm leading-relaxed">{c.need}</p>
                                                </div>
                                                <div className="bg-white/60 rounded-2xl px-4 py-3">
                                                    <p className="text-xs font-black uppercase tracking-wider text-[#217328] mb-1">✦ Smarter Swap</p>
                                                    <p className="text-slate-800 text-sm leading-relaxed font-medium">{c.swap}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Pica — Red Flag */}
                            <div className="bg-red-50 border border-red-200 rounded-3xl p-7">
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl">⚠️</span>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <h3 className="font-black text-slate-900 text-xl">Craving Non-Food Items (Pica)</h3>
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-red-700">Ice, Chalk, Mud</span>
                                        </div>
                                        <p className="text-slate-700 text-sm leading-relaxed mb-2">
                                            This is a <strong>medical flag, not a regular craving.</strong> Pica — the urge to eat non-food substances — is strongly associated with severe iron deficiency or anemia during pregnancy.
                                        </p>
                                        <p className="text-red-700 font-bold text-sm">Do not ignore this. Get your hemoglobin and ferritin levels checked immediately and consult a doctor and qualified dietitian without delay.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── SECTION 3: Trimester Nutrition ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">What Pregnancy Nutrition Actually Requires — Trimester by Trimester</h2>
                        <p>Cravings aside, here is what your body genuinely needs at each stage of pregnancy.</p>

                        <div className="not-prose space-y-6 my-8">
                            {trimesters.map((t, i) => (
                                <div key={i} className={`${t.lightColor} border ${t.borderColor} rounded-3xl overflow-hidden`}>
                                    <div className={`${t.color} px-7 py-4 flex items-center gap-4`}>
                                        <span className="text-white/40 text-5xl font-black leading-none">{t.number}</span>
                                        <div>
                                            <h3 className="text-white font-black text-xl leading-tight">{t.label}</h3>
                                            <p className="text-white/70 text-sm font-medium">{t.weeks}</p>
                                        </div>
                                    </div>
                                    <div className="p-7">
                                        <div className="space-y-3 mb-5">
                                            {t.nutrients.map((n, j) => (
                                                <div key={j} className="flex items-start gap-3">
                                                    <span className="text-[#217328] font-black mt-0.5 shrink-0">✓</span>
                                                    <div>
                                                        <span className="font-bold text-slate-900 text-sm">{n.name}: </span>
                                                        <span className="text-slate-600 text-sm">{n.desc}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-white/70 rounded-2xl px-4 py-3 text-sm text-slate-700 italic">
                                            💡 {t.note}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── SECTION 4: Bridging the Gap ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">The Gap Between Cravings and Nutrition — And How to Bridge It</h2>

                        <p>
                            The problem with most pregnancy diet advice is that it is generic. A list of "foods to eat in pregnancy" does not account for the fact that you grew up in a home where dinner is always roti and sabzi, that you have gestational diabetes, that you cannot stand the smell of dal right now, or that you are managing thyroid alongside pregnancy.
                        </p>
                        <p>
                            This is exactly why the <strong>best dietician in Noida</strong> approaches pregnancy nutrition the way a good tailor approaches a bespoke suit — it has to be fitted to you, not to a standard size.
                        </p>

                        <div className="not-prose grid sm:grid-cols-2 gap-5 my-8">
                            {[
                                { icon: "🔄", tip: "Replace, don't resist", desc: "Never fight a craving with willpower alone. The craving for pani puri is a craving for something tangy — not specifically for maida pooris and artificial masala water." },
                                { icon: "⏰", tip: "Eat proactively", desc: "Most cravings intensify when blood sugar drops. Eat every 2–3 hours. Don't let yourself reach the point of extreme hunger." },
                                { icon: "🥜", tip: "Stock smart snacks", desc: "Roasted chana, mixed nuts, paneer cubes, seasonal fruits, boiled eggs. When a craving hits, the smart option should be the easy option." },
                                { icon: "📊", tip: "Log what you eat", desc: "Tracking meals is not about restriction — it's about visibility. When you see a gap in protein or excess sodium, you can course-correct early." },
                            ].map((item, i) => (
                                <div key={i} className="bg-[#217328]/5 border border-[#217328]/15 rounded-3xl p-6">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="font-black text-slate-900 text-base mb-2">{item.tip}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* ── SECTION 5: Personalized Nutrition ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">Why Personalized Nutrition Guidance Matters More During Pregnancy</h2>

                        <p>
                            Pregnancy is not the time for generic meal plans from the internet. The same food that is excellent for one pregnant woman may be harmful for another. A high-potassium diet that benefits most people could be problematic for a woman with compromised kidney function. Iron supplementation needs to be calibrated against your actual hemoglobin levels.
                        </p>

                        <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 my-8 not-prose">
                            <h3 className="text-xl font-bold text-[#217328] mb-3">For Mothers in Delhi NCR</h3>
                            <p className="text-slate-700 text-base leading-relaxed mb-4">
                                Connecting with <Link href="/programs/pregnancy-nutrition" className="text-[#217328] font-bold underline hover:no-underline">Dietitian at Home's pregnancy nutrition program</Link> gives you access to weekly dietitian consultations — qualified professionals who review your actual data before curating your meal plan each week. Your plan evolves as your trimester changes, as your lab reports come in, and as your physical condition shifts.
                            </p>
                            <p className="text-slate-700 text-base leading-relaxed">
                                You also get monthly at-location visits where a trained representative records your body parameters at home — no clinic trips, no waiting rooms. <Link href="/how-it-works" className="text-[#217328] font-bold underline hover:no-underline">See how the full process works →</Link>
                            </p>
                        </div>

                        <blockquote className="my-10 px-8 py-4 border-l-8 border-[#217328] bg-gray-50 italic text-xl font-medium text-slate-800 not-prose rounded-r-3xl">
                            "For mothers working with <strong>dieticians in Jaipur</strong> or across North India, the shift toward home-based, data-driven nutrition care is growing — because pregnancy nutrition is not a one-time consultation, it is a 9-month commitment."
                        </blockquote>

                        {/* ── SECTION 6: Foods Table ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">Foods to Prioritize, Foods to Be Careful With</h2>

                        <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
                            {/* Eat These */}
                            <div className="bg-green-50 border border-green-100 rounded-3xl p-7">
                                <h3 className="font-black text-green-800 text-lg mb-5 flex items-center gap-2">
                                    <span className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                                    Build Your Plate Around These
                                </h3>
                                <div className="space-y-3">
                                    {foodsToEat.map((f, i) => (
                                        <div key={i} className="bg-white rounded-2xl px-4 py-3">
                                            <p className="font-bold text-slate-900 text-sm">{f.item}</p>
                                            <p className="text-slate-500 text-xs mt-0.5">{f.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Avoid These */}
                            <div className="bg-red-50 border border-red-100 rounded-3xl p-7">
                                <h3 className="font-black text-red-800 text-lg mb-5 flex items-center gap-2">
                                    <span className="w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">✗</span>
                                    Approach With Caution
                                </h3>
                                <div className="space-y-3">
                                    {foodsToAvoid.map((f, i) => (
                                        <div key={i} className="bg-white rounded-2xl px-4 py-3">
                                            <p className="font-bold text-slate-900 text-sm">{f.item}</p>
                                            <p className="text-slate-500 text-xs mt-0.5">{f.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── SECTION 7: Red Flags ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">When Cravings Become a Red Flag</h2>
                        <p>Most cravings are harmless or manageable. But some warrant immediate attention:</p>

                        <div className="not-prose space-y-4 my-6">
                            {redFlags.map((r, i) => (
                                <div key={i} className="flex gap-4 bg-red-50 border border-red-100 rounded-2xl p-5">
                                    <span className="text-red-500 text-xl shrink-0 mt-0.5">⚑</span>
                                    <div>
                                        <p className="font-black text-red-800 text-base">{r.flag}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mt-1">{r.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── MID-ARTICLE CTA ── */}
                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl not-prose">
                            <h3 className="text-3xl font-black mb-4">Confused About What to Eat During Pregnancy?</h3>
                            <p className="text-xl opacity-90 mb-8 font-medium">Our specialized dietitians build a week-by-week, trimester-specific meal plan — tailored to your body, your kitchen, and your medical history.</p>
                            <Link href="/contact" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                                Talk to a Pregnancy Dietitian
                            </Link>
                        </div>

                        {/* ── SECTION 8: Postpartum ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">A Note on Postpartum Nutrition</h2>

                        <p>
                            Pregnancy nutrition does not end at delivery. The postpartum period is when many women unknowingly crash nutritionally — because all the attention shifts to the baby, and the mother's diet becomes an afterthought.
                        </p>
                        <p>
                            Iron levels depleted during delivery need to be rebuilt. Breastfeeding increases caloric and protein needs significantly. Hormonal recovery requires specific nutritional support. If you are planning ahead, <Link href="/programs/postpartum-care" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">Dietitian at Home's postpartum care program</Link> continues the nutrition support from pregnancy into recovery — with the same weekly dietitian involvement and monthly home visits.
                        </p>

                        {/* ── SECTION 9: Conclusion ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6 text-[#217328]">The Bottom Line</h2>

                        <p>
                            Your pregnancy cravings are not your enemy. They are clues — sometimes accurate, sometimes misleading, always worth decoding. When you understand what your body is nutritionally asking for beneath the craving, you stop fighting it and start working with it.
                        </p>
                        <p>
                            Whether you are working with the <strong>best dietician in Noida</strong> or exploring options with <strong>dieticians in Jaipur</strong>, the principle remains the same: pregnancy nutrition is too important to be generic, too personal to be one-size-fits-all, and too consequential to be left entirely to cravings.
                        </p>
                        <p>
                            You deserve a plan that is yours. <Link href="/contact" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">Talk to us and get started →</Link>
                        </p>

                        {/* ── FAQ SECTION ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">Frequently Asked Questions</h2>

                        <div className="not-prose space-y-4 my-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                                    <h3 className="font-black text-slate-900 text-base mb-3 flex items-start gap-3">
                                        <span className="bg-[#217328] text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">Q</span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed pl-9">{faq.a}</p>
                                </div>
                            ))}
                        </div>

                        {/* ── RELATED READING ── */}
                        <div className="not-prose mt-14 pt-10 border-t border-gray-100">
                            <h3 className="font-black text-slate-900 text-lg mb-5 uppercase tracking-tight">Related Reading</h3>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { label: "Why Traditional Diet Charts Fail", href: "/blog/why-traditional-diet-charts-fail" },
                                    { label: "Postpartum Nutrition Care", href: "/programs/postpartum-care" },
                                    { label: "How Dietitian at Home Works", href: "/how-it-works" },
                                ].map((link, i) => (
                                    <Link key={i} href={link.href} className="block group bg-white border border-gray-100 hover:border-[#217328] rounded-2xl p-4 transition-all shadow-sm">
                                        <span className="font-bold text-slate-800 text-sm group-hover:text-[#217328] transition-colors leading-snug block">{link.label}</span>
                                        <span className="text-[#217328] text-xs font-bold mt-2 block opacity-0 group-hover:opacity-100 transition-all">Read more →</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-slate-400 text-xs italic mt-10 not-prose">
                            Anita Menon is the Lead Clinical Dietitian at Dietitian at Home, with over a decade of experience in therapeutic and lifestyle nutrition across pregnancy, postpartum, hormonal health, and chronic disease management. All content is for educational purposes and does not substitute personalized medical or dietary advice.
                        </p>

                    </div>
                </article>

                {/* ── SIDEBAR ── */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-10">

                        {/* Author Card */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 shrink-0">
                                    <Image
                                        src="/anita-menon.jpg"
                                        alt="Anita Menon - Lead Clinical Dietitian"
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
                            <p className="text-slate-600 text-sm leading-relaxed mb-5">
                                Specializing in prenatal, postpartum, and women's nutrition, Anita has guided hundreds of expecting mothers through personalized, home-based diet programs across Delhi NCR and beyond.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center">
                                View All Experts
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        {/* Related Programs */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Related Programs</h4>
                            <div className="space-y-3">
                                {[
                                    { label: "Pregnancy Nutrition", href: "/programs/pregnancy-nutrition" },
                                    { label: "Postpartum Care", href: "/programs/postpartum-care" },
                                    { label: "Preconception Care", href: "/programs/preconception-care" },
                                    { label: "How It Works", href: "/how-it-works" },
                                ].map((item, i) => (
                                    <Link key={i} href={item.href} className="block group">
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                            <span className="font-bold text-slate-800 text-sm">{item.label}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <h4 className="text-2xl font-black mb-3 relative z-10">Eating for Two?</h4>
                            <p className="opacity-90 mb-7 text-sm font-medium relative z-10 leading-relaxed">
                                Get a personalized pregnancy meal plan — built around your trimester, your health history, and your kitchen. Weekly dietitian calls included.
                            </p>
                            <Link href="/contact" className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg text-sm">
                                Book a Consultation
                            </Link>
                        </div>

                        {/* Pricing Nudge */}
                        <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[2rem] p-7 text-center">
                            <p className="text-slate-600 text-sm mb-2">Starting from</p>
                            <p className="text-3xl font-black text-[#217328]">₹7,500</p>
                            <p className="text-slate-500 text-xs mb-5">for first 3 months · All inclusive</p>
                            <Link href="/pricing" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline">
                                View full pricing →
                            </Link>
                        </div>

                    </div>
                </aside>

            </div>

            {/* ── FOOTER CTA ── */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        Ready to eat right through every trimester?
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Stop relying on generic advice. Get a pregnancy nutrition plan that evolves with your body — delivered by qualified dietitians, at home.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-[#217328] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase shadow-2xl shadow-[#217328]/30 hover:-translate-y-1 transition-all">
                            Get Started Now
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
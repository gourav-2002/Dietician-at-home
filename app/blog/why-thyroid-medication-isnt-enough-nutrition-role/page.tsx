import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Why Your Thyroid Medication Isn't Enough (And What Nutrition Adds) | Best Dietician in Delhi",
    description: "Taking thyroid medication but still feeling tired or gaining weight? The best dietician in Delhi explains what nutrition adds to thyroid recovery — and why medication alone is rarely the full answer.",
    keywords: "thyroid diet plan, hypothyroidism nutrition, best dietician in delhi, dietician delhi, thyroid management, thyroid foods, selenium thyroid, thyroid dietitian, at-home nutrition care",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/why-thyroid-medication-isnt-enough-nutrition-role',
    },
    openGraph: {
        title: "Why Your Thyroid Medication Isn't Enough (And What Nutrition Adds)",
        description: "Medication is the floor, not the ceiling. Discover what clinical nutrition adds to your thyroid treatment — from selenium to gut health to meal timing.",
        url: 'https://dieticianathome.com/blog/why-thyroid-medication-isnt-enough-nutrition-role',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/why-thyroid-medication-isnt-enough-nutrition-role.jpg',
                width: 1200,
                height: 630,
                alt: 'Indian woman at home reviewing her thyroid nutrition plan with a dietitian',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Why Your Thyroid Medication Isn't Enough (And What Nutrition Adds)",
        description: "What nutrition adds to thyroid treatment — explained by the best dietician in Delhi.",
        images: ['https://dieticianathome.com/why-thyroid-medication-isnt-enough-nutrition-role.jpg'],
    },
};

export default function ThyroidBlogPost() {

    const category = "Thyroid Health";
    const readingTime = "10 min read";
    const publishDate = "February 18, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why Your Thyroid Medication Isn't Enough (And What Nutrition Adds)",
        "image": "https://dieticianathome.com/why-thyroid-medication-isnt-enough-nutrition-role.jpg",
        "author": {
            "@type": "Organization",
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
        "datePublished": "2026-02-18",
        "description": "Thyroid medication fixes hormone levels but leaves a significant gap. Discover the clinical nutrition strategies — selenium, gut health, meal timing, and more — that complete your thyroid recovery.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/why-thyroid-medication-isnt-enough-nutrition-role"
        }
    };

    /*
      AI IMAGE GENERATION PROMPT:
      "Thoughtful Indian woman in her 30s sitting at a bright, clean home kitchen table,
      reviewing a nutrition plan on her phone, healthy foods arranged nearby — walnuts,
      eggs, leafy greens, sunflower seeds, a glass of water. Warm morning light, modern
      Indian home interior. Photorealistic, high quality, 16:9 aspect ratio."
    */

    const nutrients = [
        {
            name: "Selenium",
            role: "T4 → T3 Conversion",
            detail: "Required to convert the inactive thyroid hormone T4 into the active T3 your cells actually use. Also protects against autoimmune flare-ups.",
            sources: "Brazil nuts, eggs, sunflower seeds, fish",
            color: "blue",
        },
        {
            name: "Zinc",
            role: "TSH Production",
            detail: "Needed for the synthesis of thyroid-stimulating hormone (TSH) and supports T3 conversion. Often depleted in hypothyroidism.",
            sources: "Pumpkin seeds, chickpeas, lentils, meat",
            color: "purple",
        },
        {
            name: "Iodine",
            role: "Hormone Synthesis",
            detail: "Essential building block of T3 and T4 — but excess iodine can worsen autoimmune thyroid disease. Amount must be personalised.",
            sources: "Iodised salt, dairy, seafood (in right quantities)",
            color: "teal",
        },
        {
            name: "Iron",
            role: "Enzyme Function",
            detail: "Required by the enzyme that produces thyroid hormone. Iron deficiency worsens fatigue and cold intolerance — and often goes unaddressed.",
            sources: "Spinach, lentils, jaggery, fortified cereals",
            color: "red",
        },
        {
            name: "Vitamin D",
            role: "Immune Modulation",
            detail: "Strongly associated with autoimmune thyroid disease. Vitamin D deficiency is extremely common across India and directly impairs immune regulation.",
            sources: "Sunlight, fortified dairy, egg yolks, fatty fish",
            color: "yellow",
        },
        {
            name: "Magnesium",
            role: "Cortisol Regulation",
            detail: "Helps manage the stress-cortisol cycle that suppresses TSH. Also supports blood sugar stability — critical for thyroid patients.",
            sources: "Banana, dark chocolate, nuts, whole grains",
            color: "green",
        },
    ];

    const colorMap = {
        blue:   { bg: "bg-blue-50",   border: "border-blue-200",   badge: "bg-blue-100 text-blue-700",   icon: "text-blue-500" },
        purple: { bg: "bg-purple-50", border: "border-purple-200", badge: "bg-purple-100 text-purple-700", icon: "text-purple-500" },
        teal:   { bg: "bg-teal-50",   border: "border-teal-200",   badge: "bg-teal-100 text-teal-700",   icon: "text-teal-500" },
        red:    { bg: "bg-red-50",    border: "border-red-200",    badge: "bg-red-100 text-red-700",     icon: "text-red-500" },
        yellow: { bg: "bg-yellow-50", border: "border-yellow-200", badge: "bg-yellow-100 text-yellow-700", icon: "text-yellow-500" },
        green:  { bg: "bg-green-50",  border: "border-green-200",  badge: "bg-green-100 text-green-700", icon: "text-green-500" },
    };

    const medicationGaps = [
        "Doesn't reduce chronic inflammation",
        "Doesn't repair gut absorption issues",
        "Doesn't address micronutrient deficiencies",
        "Doesn't manage blood sugar imbalances",
        "Doesn't help cells actually use the hormone",
    ];

    const planFeatures = [
        { icon: "🎯", text: "Micronutrient targets based on deficiency testing" },
        { icon: "⏰", text: "Meal structure optimised around medication timing" },
        { icon: "🥗", text: "Anti-inflammatory food priorities" },
        { icon: "🦠", text: "Gut-supportive dietary patterns" },
        { icon: "📊", text: "Blood sugar management through macro balance" },
        { icon: "🔄", text: "Cooking methods that reduce goitrogenic compounds" },
        { icon: "📈", text: "Regular refinement as labs and symptoms shift" },
    ];

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 mt-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-6 mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-500 font-medium flex-wrap gap-y-1">
                    <li><Link href="/" className="hover:text-[#217328] transition-colors">Home</Link></li>
                    <li className="flex items-center space-x-2">
                        <span>/</span>
                        <Link href="/blog" className="hover:text-[#217328] transition-colors">Blog</Link>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-400">
                        <span>/</span>
                        <span className="truncate max-w-[220px] md:max-w-none">Why Your Thyroid Medication Isn't Enough</span>
                    </li>
                </ol>
            </nav>

            {/* Hero Header */}
            <header className="max-w-7xl mx-auto px-6 mb-12">
                <div className="mb-6 flex flex-wrap gap-3 items-center">
                    <span className="bg-[#4CAF50]/10 text-[#217328] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        {category}
                    </span>
                    <span className="text-gray-500 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {readingTime}
                    </span>
                    <span className="text-gray-400 text-sm">{publishDate}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                    Why Your Thyroid Medication{" "}
                    <span className="text-[#217328]">Isn't Enough</span>{" "}
                    — And What Nutrition Actually Adds
                </h1>
            </header>

            {/* Main Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* ── ARTICLE ── */}
                <article className="lg:w-2/3">

                    {/* Hero Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/why-thyroid-medication-isnt-enough-nutrition-role.jpg"
                            alt="Indian woman reviewing thyroid nutrition plan at home kitchen"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        {/* Intro Pull Quote */}
                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            You're taking your thyroid medication every single morning. You've set the alarm, you've waited the 30 minutes before eating, you're doing everything your doctor told you. And yet — you're still exhausted. Still gaining weight. Still foggy-headed at 2 PM.
                            You're not imagining it. And you're not alone.
                        </p>

                        <p>
                            The truth is, thyroid medication is designed to do one specific thing: replace or regulate the hormone your thyroid isn't producing properly. But your thyroid — and the entire cascade of hormonal and metabolic processes it controls — needs far more than a single pill to function well. That's where clinical nutrition steps in.
                        </p>

                        <p>
                            As the <strong>best dietician in Delhi</strong> for thyroid-related conditions would tell you: <em>medication is the floor, not the ceiling.</em> Nutrition is what builds the rest of the house.
                        </p>

                        {/* ── SECTION 1: What Medication Doesn't Do ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">
                            What Thyroid Medication Does — And What It Doesn't
                        </h2>
                        <p>
                            Whether you're on Levothyroxine for hypothyroidism or managing hyperthyroidism through medication, your prescription addresses hormone levels in your blood. That's critical, but it's a narrow fix. Here's the gap your prescription leaves wide open:
                        </p>

                        {/* Gap Cards */}
                        <div className="grid gap-3 my-8 not-prose">
                            {medicationGaps.map((gap, i) => (
                                <div key={i} className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-2xl px-5 py-4">
                                    <span className="text-red-500 mt-0.5 shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                    <p className="text-slate-800 font-medium m-0">{gap}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            This is the gap that targeted nutrition fills. And it's a significant one.
                        </p>

                        {/* ── SECTION 2: Nutrients ── */}
                        <h2 className="text-3xl font-black mt-14 mb-4">
                            The Nutrient Connection: Why What You Eat Matters Enormously
                        </h2>
                        <p>
                            Your thyroid is one of the most nutritionally sensitive organs in your body. Several specific micronutrients are directly involved in thyroid hormone production and conversion. Without them, even perfectly dosed medication can underdeliver.
                        </p>

                        {/* Nutrient Cards Grid */}
                        <div className="grid sm:grid-cols-2 gap-5 my-10 not-prose">
                            {nutrients.map((n) => {
                                const c = colorMap[n.color as keyof typeof colorMap];
                                return (
                                    <div key={n.name} className={`${c.bg} ${c.border} border rounded-3xl p-6`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${c.badge}`}>
                                                {n.role}
                                            </span>
                                        </div>
                                        <h3 className={`text-xl font-black mb-2 ${c.icon}`}>{n.name}</h3>
                                        <p className="text-slate-700 text-sm leading-relaxed mb-3">{n.detail}</p>
                                        <p className="text-xs text-slate-500 font-semibold">
                                            <span className="text-slate-400 uppercase tracking-widest">Sources: </span>
                                            {n.sources}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* ── SECTION 3: Goitrogens ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">
                            The Goitrogen Question: What to Eat and What to Watch
                        </h2>
                        <p>
                            One of the most confusing areas for thyroid patients is the topic of <strong>goitrogens</strong> — compounds found in cruciferous vegetables like cabbage, broccoli, cauliflower, and mustard greens. These vegetables are nutritionally excellent, but in raw form and large quantities, goitrogens can interfere with iodine uptake.
                        </p>

                        <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 my-8 not-prose">
                            <h3 className="text-lg font-bold text-teal-700 mb-3">The Nuanced Truth</h3>
                            <p className="text-slate-800 text-base leading-relaxed">
                                Cooking significantly reduces goitrogenic activity. For most iodine-sufficient thyroid patients, moderate consumption of cooked cruciferous vegetables is perfectly fine — and eliminating them entirely means losing valuable fibre, folate, and antioxidants. This is exactly the kind of decision that requires a qualified professional, not an internet search.
                            </p>
                        </div>

                        <p>
                            As any experienced <strong>dietician in Delhi</strong> who works with thyroid patients will confirm: personalisation isn't a luxury here — it's a clinical necessity.
                        </p>

                        {/* ── SECTION 4: Gut Health ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">
                            Gut Health and Your Thyroid: The Connection Nobody Told You About
                        </h2>
                        <p>
                            Approximately 80% of thyroid hormone conversion happens outside the thyroid gland — much of it influenced by the health of your gut. A compromised gut lining can impair nutrient absorption, trigger systemic inflammation, and worsen autoimmune activity.
                        </p>
                        <p>
                            Many people with Hashimoto's thyroiditis also have undiagnosed gluten sensitivity or small intestinal issues that are directly worsening their thyroid condition. A structured nutrition approach addresses gut health as a parallel priority, not an afterthought.
                        </p>

                        <blockquote className="my-10 px-8 py-4 border-l-8 border-[#217328] bg-gray-50 italic text-2xl font-medium text-slate-800 not-prose rounded-r-3xl">
                            "Levothyroxine absorption is significantly affected by what you eat around it — calcium-rich foods, coffee, and high-fibre meals can all reduce how much medication makes it into your bloodstream."
                        </blockquote>

                        <p>
                            A qualified dietician coordinates your meal structure <em>around</em> your medication schedule, not against it.
                        </p>

                        {/* ── SECTION 5: Weight ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">
                            Weight and Thyroid: Why "Eat Less, Move More" Fails
                        </h2>
                        <p>
                            One of the most frustrating experiences for hypothyroid patients is unexplained weight gain despite doing everything right. Thyroid dysfunction slows your metabolism — sometimes significantly — and standard calorie-restriction advice doesn't account for this.
                        </p>
                        <p>
                            Effective nutrition for thyroid-related weight management requires a metabolic rate adjusted meal plan, the right macro distribution (very low-carb diets can suppress T3 further), anti-inflammatory foods, and meal timing that aligns with both medication and cortisol rhythms. This is very different from a generic weight loss plan — see our{" "}
                            <Link href="/programs/weight-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                Weight Management Program
                            </Link>{" "}
                            built specifically around medical context.
                        </p>

                        {/* ── SECTION 6: Cortisol ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">
                            Stress, Cortisol, and Your Thyroid
                        </h2>
                        <p>
                            Chronic stress elevates cortisol, which directly suppresses TSH production and impairs T4 to T3 conversion. Nutrition plays a supportive role here through blood sugar stabilisation, adequate magnesium intake, and anti-inflammatory dietary patterns. No meal plan for a thyroid patient is complete without addressing blood sugar balance. The two are inseparable.
                        </p>

                        {/* ── SECTION 7: What a Plan Looks Like ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">
                            What a Structured Thyroid Nutrition Plan Actually Looks Like
                        </h2>
                        <p>
                            A well-designed nutrition intervention for thyroid dysfunction isn't a list of foods to avoid. It's a dynamic, personalised plan that covers all of the following — and evolves as your health markers shift:
                        </p>

                        <div className="grid gap-3 my-8 not-prose">
                            {planFeatures.map((f, i) => (
                                <div key={i} className="flex items-start gap-4 bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-2xl px-5 py-4">
                                    <span className="text-2xl shrink-0">{f.icon}</span>
                                    <p className="text-slate-800 font-medium m-0">{f.text}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            This level of precision is what separates clinical nutrition from generic diet advice — and it's why working with the{" "}
                            <strong>best dietician in Delhi</strong> for thyroid conditions makes a measurable difference in how you feel day to day.
                        </p>

                        {/* Mid-article CTA */}
                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl not-prose">
                            <h3 className="text-3xl font-black mb-4">Still Struggling Despite Your Medication?</h3>
                            <p className="text-xl opacity-90 mb-8 font-medium leading-relaxed">
                                Our specialized thyroid dietitians build a personalized nutrition plan around your specific labs, lifestyle, and medication schedule — delivered to your doorstep.
                            </p>
                            <Link
                                href="/programs/thyroid-management"
                                className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1 shadow-lg"
                            >
                                Explore Thyroid Program →
                            </Link>
                        </div>

                        {/* ── SECTION 8: Home-Based Support ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">
                            Why Home-Based, Continuous Nutrition Support Changes Outcomes
                        </h2>
                        <p>
                            Thyroid management is not a one-time consultation. Hormone levels shift, medications get adjusted, seasons change your stress and sleep patterns, and your nutritional needs evolve. Effective nutrition support must be continuous and responsive — not a single appointment followed by a PDF.
                        </p>
                        <p>
                            Our{" "}
                            <Link href="/programs/thyroid-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                Thyroid Management Program
                            </Link>{" "}
                            at Dietitian at Home is built on exactly this model:
                        </p>

                        {/* Service Features */}
                        <div className="space-y-4 my-8 not-prose">
                            {[
                                { label: "Monthly at-location visits", desc: "A trained representative visits your home to capture body parameters and health data with professional equipment." },
                                { label: "Weekly dietitian consultations", desc: "Via call or video — every week, before your next meal plan is finalised. Not monthly. Every single week." },
                                { label: "Personalized weekly meal plans", desc: "Delivered through the app with ingredient lists and step-by-step cooking instructions." },
                                { label: "Real-time adherence tracking", desc: "Your dietitian can see your meal logs live — so the plan improves week over week based on what you actually eat." },
                                { label: "Regular plan refinement", desc: "As your labs and medication change, your nutrition plan changes with it. Nothing stays static." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-[#4CAF50]/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-[#217328] font-black text-sm">{i + 1}</span>
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-900 text-base mb-1">{item.label}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p>
                            You don't travel to a clinic. The care comes to you — and it stays with you, week after week.{" "}
                            <Link href="/how-it-works" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                See exactly how the process works →
                            </Link>
                        </p>

                        {/* ── SECTION 9: Real Cost ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6">
                            The Real Cost of Getting This Wrong
                        </h2>
                        <p>
                            Poorly managed thyroid nutrition doesn't just slow your progress — it can actively undermine your medication. Absorption issues, continued inflammation, unaddressed deficiencies, and weight gain from metabolic suppression all create a cycle that's hard to break without the right support.
                        </p>
                        <p>
                            The good news? When nutrition is done right — consistently, personally, and with clinical understanding — the improvements in energy, weight, mood, and overall function can be significant. Many of our clients notice a meaningful shift within the first 6–8 weeks of structured thyroid nutrition, even on the same medication they've been taking for years.
                        </p>

                        {/* ── SECTION 10: Next Steps ── */}
                        <h2 className="text-3xl font-black mt-14 mb-6 text-[#217328]">
                            Taking the Next Step
                        </h2>
                        <p>
                            If you've been managing your thyroid condition with medication alone and still not feeling the way you expected, it's worth exploring what targeted nutrition can add. The gap between "medically managed" and "actually thriving" is often filled by exactly this kind of structured, professional nutritional support.
                        </p>
                        <p>
                            To understand what a personalised thyroid nutrition plan would look like for you — and how our doorstep service model works — explore our{" "}
                            <Link href="/programs/thyroid-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                Thyroid Management Program
                            </Link>{" "}
                            or{" "}
                            <Link href="/pricing" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                check our pricing
                            </Link>{" "}
                            to get started.
                        </p>

                        {/* Related Blog */}
                        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 my-8 not-prose flex items-start gap-5">
                            <span className="text-3xl shrink-0">📖</span>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Related Reading</p>
                                <Link href="/blog/understanding-pcod-nutrition-strategies" className="text-[#217328] font-black text-lg hover:underline leading-snug block">
                                    Understanding PCOD: Nutrition Strategies That Actually Work
                                </Link>
                                <p className="text-slate-500 text-sm mt-1">Hormonal imbalances like PCOD share many nutritional overlaps with thyroid dysfunction. Worth a read.</p>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-12 not-prose">
                            <p className="text-sm text-amber-800 leading-relaxed">
                                <strong>Medical Disclaimer:</strong> This article is intended for informational purposes only and does not constitute medical advice. Always consult your physician or endocrinologist regarding your thyroid medication and treatment. Nutrition support works alongside medical care, not as a replacement for it.{" "}
                                <Link href="/medical-disclaimer" className="underline font-semibold hover:text-amber-900">
                                    Read our full medical disclaimer
                                </Link>.
                            </p>
                        </div>

                    </div>
                </article>

                {/* ── SIDEBAR ── */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-8">

                        {/* Quick Navigation */}
                        <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">In This Article</h4>
                            <nav className="space-y-2">
                                {[
                                    "What Medication Doesn't Do",
                                    "The Nutrient Connection",
                                    "The Goitrogen Question",
                                    "Gut Health & Thyroid",
                                    "Why 'Eat Less' Fails",
                                    "Stress & Cortisol",
                                    "What a Plan Looks Like",
                                    "Home-Based Support",
                                    "Taking the Next Step",
                                ].map((item, i) => (
                                    <p key={i} className="text-sm text-slate-600 font-medium py-1 border-b border-slate-100 last:border-0">
                                        {item}
                                    </p>
                                ))}
                            </nav>
                        </div>

                        {/* Related Programs */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Programs</h4>
                            <div className="space-y-4">
                                {[
                                    { href: "/programs/thyroid-management", label: "Thyroid Management" },
                                    { href: "/programs/weight-management", label: "Weight Management" },
                                    { href: "/programs/diabetes-management", label: "Diabetes Management" },
                                    { href: "/how-it-works", label: "How It Works" },
                                ].map((item) => (
                                    <Link href={item.href} key={item.href} className="block group">
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                            <span className="font-bold text-slate-800">{item.label}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                            <h4 className="text-2xl font-black mb-3 relative z-10">Start Your Thyroid Nutrition Journey</h4>
                            <p className="opacity-90 mb-6 text-sm font-medium relative z-10 leading-relaxed">
                                Get a personalised plan from an expert thyroid dietitian — at your doorstep, every month.
                            </p>
                            <Link
                                href="/get-started"
                                className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg"
                            >
                                Book a Consultation
                            </Link>
                            <Link
                                href="/pricing"
                                className="block w-full text-center mt-3 text-white/80 py-3 rounded-xl font-bold text-sm hover:text-white transition-all relative z-10"
                            >
                                View Pricing →
                            </Link>
                        </div>

                       

                    </div>
                </aside>
            </div>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        Ready to Build a Thyroid Nutrition Plan That Actually Works?
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Stop guessing what to eat. Our expert thyroid dietitians deliver personalised, medication-aware nutrition care — right to your home.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-[#217328] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase shadow-2xl shadow-[#217328]/30 hover:-translate-y-1 transition-all"
                        >
                            Get Started Now
                        </Link>
                        <Link
                            href="/pricing"
                            className="bg-white text-slate-900 border border-gray-200 px-10 py-5 rounded-2xl font-black tracking-widest uppercase hover:bg-gray-50 transition-all"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "PCOD Weight Gain on Healthy Diets? A Good Dietician in Delhi Explains",
    description: "Eating healthy but still gaining weight with PCOD? A good dietician in Delhi explains the hormonal truth — and the right nutrition fix for lasting PCOD weight management.",
    keywords: "good dietician in delhi, best dietician in delhi ncr, PCOD weight gain, PCOD diet plan, PCOD nutrition, PCOD healthy foods, PCOD dietitian delhi, insulin resistance PCOD, PCOS weight management, at-home nutrition care delhi",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/pcod-weight-gain-healthy-diets-fix',
    },
    openGraph: {
        title: "Why Women With PCOD Gain Weight on 'Healthy' Diets — And How to Fix It",
        description: "A good dietician in Delhi explains why standard healthy diets fail for PCOD — and the personalised nutrition approach that actually works.",
        url: 'https://dieticianathome.com/blog/pcod-weight-gain-healthy-diets-fix',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/pcod-weight-gain-healthy-diets-fix.jpg',
                width: 1200,
                height: 630,
                alt: 'Indian woman frustrated with weight gain despite healthy eating — PCOD nutrition consultation',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Why Women With PCOD Gain Weight on 'Healthy' Diets",
        description: "A good dietician in Delhi explains the hormonal truth behind PCOD weight gain — and how to fix it.",
        images: ['https://dieticianathome.com/pcod-weight-gain-healthy-diets-fix.jpg'],
    },
};

export default function PcodWeightGainBlogPost() {

    const category = "PCOD / PCOS Care";
    const readingTime = "10 min read";
    const publishDate = "27 February 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why Women With PCOD Gain Weight on 'Healthy' Diets — And How to Fix It",
        "image": "https://dieticianathome.com/pcod-weight-gain-healthy-diets-fix.jpg",
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
        "datePublished": "2026-02-27",
        "dateModified": "2026-02-27",
        "description": "A good dietician in Delhi explains why women with PCOD gain weight on seemingly healthy diets — and what the right nutrition approach looks like.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/pcod-weight-gain-healthy-diets-fix"
        }
    };

    /*
      AI IMAGE GENERATION PROMPT:
      "Indian woman looking frustrated while standing on a weighing scale at home, 
      healthy food spread around her including oats, fruits, salad, whole wheat rotis, 
      modern Indian kitchen interior, natural window light, empathetic and relatable tone, 
      photorealistic healthcare photography style, 16:9 aspect ratio, warm colour palette"
    */

    const backfireFoods = [
        {
            name: "Oats & Whole Grains",
            reason: "Still cause significant blood sugar spikes in women with insulin resistance — even without added sugar.",
            type: "caution"
        },
        {
            name: "Fruit Juices & Natural Sugars",
            reason: "Fructose spikes blood glucose rapidly. Honey, jaggery, and dates behave similarly to sugar in PCOD.",
            type: "caution"
        },
        {
            name: "Low-Fat, High-Carb Diets",
            reason: "Excess carbohydrates — not dietary fat — drive insulin resistance. Low-fat yoghurt with granola is a hidden carb bomb.",
            type: "caution"
        },
        {
            name: "Excessive Soy Foods",
            reason: "Phytoestrogens in soy can aggravate hormonal imbalance. Daily soy milk, tofu, or soy protein isn't always PCOD-safe.",
            type: "caution"
        },
        {
            name: "Skipping Meals / Unguided IF",
            reason: "Prolonged fasting spikes cortisol, which worsens insulin resistance and androgen production in PCOD.",
            type: "caution"
        },
    ];

    const rightApproach = [
        {
            title: "Lower Glycaemic Load, Not Just Calories",
            body: "Swap maida for millet rotis, white rice for red rice or dalia. Always pair carbs with protein and fat — a roti with dal and ghee slows glucose absorption dramatically.",
            icon: "📉"
        },
        {
            title: "Prioritise Protein at Every Meal",
            body: "Eggs, paneer, dal, chicken, fish, legumes — every meal needs a solid protein source to keep insulin stable, curb cravings, and support muscle mass.",
            icon: "💪"
        },
        {
            title: "Include Anti-Inflammatory Fats",
            body: "Omega-3s from flaxseeds, walnuts, fatty fish, and chia seeds actively reduce PCOD-related inflammation. Ghee in moderation supports hormone production.",
            icon: "🌿"
        },
        {
            title: "Fix Key Micronutrient Gaps",
            body: "Vitamin D, magnesium, inositol, zinc, and iron — all directly linked to PCOD severity. A good dietician addresses these through food first, then supplementation.",
            icon: "🔬"
        },
        {
            title: "Manage Cortisol Through Meal Timing",
            body: "Eat within an hour of waking. Largest meal at midday. No long gaps between meals. Stable cortisol = reduced insulin resistance and lower androgen production.",
            icon: "⏱️"
        },
    ];

    const progressTimeline = [
        {
            period: "Months 1–2",
            title: "Stabilisation Phase",
            desc: "Blood sugar stabilises, inflammation reduces, energy levels and sleep improve. The scale may not move dramatically yet — but physical symptoms shift noticeably.",
            color: "bg-blue-50 border-blue-200",
            textColor: "text-blue-700"
        },
        {
            period: "Months 3–4",
            title: "Weight Loss Begins",
            desc: "As insulin resistance improves, gradual sustainable weight loss typically starts. Cycle regularity often improves during this window.",
            color: "bg-[#4CAF50]/10 border-[#4CAF50]/30",
            textColor: "text-[#217328]"
        },
        {
            period: "Months 5–6+",
            title: "Hormonal Shift",
            desc: "Measurable reduction in androgen symptoms — acne clearing, less hair fall. Improved hormonal markers visible on bloodwork. Sustained weight management.",
            color: "bg-purple-50 border-purple-200",
            textColor: "text-purple-700"
        },
    ];

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 mt-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-6 mb-8">
                <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm text-gray-500 font-medium">
                    <li><Link href="/" className="hover:text-[#217328] transition-colors">Home</Link></li>
                    <li className="flex items-center gap-2">
                        <span>/</span>
                        <Link href="/blog" className="hover:text-[#217328] transition-colors">Blog</Link>
                    </li>
                    <li className="flex items-center gap-2 text-gray-400">
                        <span>/</span>
                        <span className="truncate max-w-[220px] md:max-w-none">Why Women With PCOD Gain Weight on Healthy Diets</span>
                    </li>
                </ol>
            </nav>

            {/* Hero Section */}
            <header className="max-w-7xl mx-auto px-6 mb-12">
                <div className="mb-6 flex flex-wrap gap-3 items-center">
                    <span className="bg-[#4CAF50]/10 text-[#217328] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        {category}
                    </span>
                    <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {readingTime}
                    </span>
                    <span className="text-gray-400 text-sm">{publishDate}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                    Why Women With PCOD Gain Weight on{" "}
                    <span className="text-[#217328]">'Healthy' Diets</span>{" "}
                    — And How a{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10">Good Dietician in Delhi</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-[#4CAF50]/20 -z-0 rounded"></span>
                    </span>{" "}
                    Can Fix It
                </h1>
            </header>

            {/* Content Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* Main Article */}
                <article className="lg:w-2/3">

                    {/* Featured Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/pcod-weight-gain-healthy-diets-fix.jpg"
                            alt="PCOD nutrition and weight management — Indian home context"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">

                        {/* Opening Hook */}
                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2 not-prose">
                            You're eating salads. You've cut out sugar. You're having oats for breakfast and skipping late-night snacks. And yet — the weighing scale refuses to budge. Or worse, it keeps creeping up.
                        </p>

                        <p>
                            If you have PCOD (Polycystic Ovarian Disease), this is one of the most frustrating and misunderstood experiences you can go through. You're doing everything "right," and your body seems to be working against you.
                        </p>

                        <p>
                            Here's the truth: with PCOD, what is considered a "healthy diet" for the general population <strong>may actually be making your condition worse.</strong> The hormonal imbalances that define PCOD change the way your body processes food — and unless your nutrition plan accounts for that, even the cleanest diet can fuel weight gain.
                        </p>

                        <p>
                            This blog explains exactly why this happens, what the common dietary mistakes are, and how structured, personalised nutrition care — guided by a <strong>good dietician in Delhi</strong> — can change the equation completely.
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-3xl font-black text-slate-900 mt-14 mb-6 not-prose">
                            What Makes PCOD Different From Other Weight Conditions?
                        </h2>

                        <p>
                            PCOD is fundamentally a <strong>hormonal and metabolic disorder</strong>. The ovaries produce excess androgens (male hormones), disrupting ovulation, causing irregular periods, and leading to cyst formation. But the metabolic consequences go much deeper.
                        </p>

                        {/* 3 Metabolic Issues Cards */}
                        <div className="not-prose grid md:grid-cols-3 gap-4 my-10">
                            {[
                                {
                                    num: "01",
                                    title: "Insulin Resistance",
                                    body: "Up to 70–80% of women with PCOD have insulin resistance. Chronically high insulin signals the body to store fat — especially around the abdomen — and makes fat burning extremely difficult.",
                                },
                                {
                                    num: "02",
                                    title: "Elevated Androgens",
                                    body: "High testosterone and DHEA promote central fat accumulation — the stubborn belly and waist fat that feels impossible to lose no matter what you eat.",
                                },
                                {
                                    num: "03",
                                    title: "Chronic Inflammation",
                                    body: "PCOD is associated with persistent low-grade inflammation that disrupts hormone signalling, raises cortisol, and further worsens insulin resistance — a vicious cycle.",
                                },
                            ].map((item) => (
                                <div key={item.num} className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
                                    <span className="text-4xl font-black text-[#4CAF50]/30 leading-none block mb-3">{item.num}</span>
                                    <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            These three factors work together to create a metabolic environment where your body is primed to gain weight and resistant to losing it — <em>regardless of how clean you eat on the surface.</em>
                        </p>

                        {/* Section 2 — Backfire Foods */}
                        <h2 className="text-3xl font-black text-slate-900 mt-14 mb-4 not-prose">
                            The "Healthy" Foods That Can Backfire With PCOD
                        </h2>

                        <p>
                            Several foods universally considered healthy can actually worsen PCOD symptoms and promote weight gain if your hormonal profile isn't accounted for.
                        </p>

                        <div className="not-prose space-y-4 my-8">
                            {backfireFoods.map((food, i) => (
                                <div key={i} className="flex gap-4 bg-red-50 border border-red-100 rounded-2xl p-5">
                                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                                        <span className="text-red-500 font-black text-sm">✗</span>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-slate-900 mb-1">{food.name}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{food.reason}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Did You Know callout */}
                        <div className="not-prose bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 my-10">
                            <h3 className="text-lg font-black text-[#217328] mb-3 flex items-center gap-2">
                                <span>💡</span> Did You Know?
                            </h3>
                            <p className="text-slate-800 text-base leading-relaxed">
                                A mere 5–10% weight reduction in women with PCOD can restore regular ovulation and significantly improve fertility markers. The journey starts in your kitchen — but it must be guided by someone who understands PCOD specifically.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <h2 className="text-3xl font-black text-slate-900 mt-14 mb-4 not-prose">
                            Why Generic Diet Plans Simply Don't Work for PCOD
                        </h2>

                        <p>
                            Most diet plans — from the internet, a general nutritionist, or well-meaning family — are built around calorie restriction designed for people with normal hormonal function. With PCOD, the equation is fundamentally different.
                        </p>

                        <p>What actually matters more than calories:</p>

                        <div className="not-prose bg-white border border-gray-100 rounded-3xl shadow-sm p-6 my-8 space-y-3">
                            {[
                                ["Glycaemic Load", "How much each meal raises blood sugar and triggers insulin — far more important than raw calorie count."],
                                ["Hormone-Supportive Nutrients", "Vitamin D, magnesium, inositol, zinc, omega-3s — all directly regulate androgen levels and insulin sensitivity."],
                                ["Anti-Inflammatory Choices", "Specific foods actively reduce the systemic inflammation that drives PCOD progression."],
                                ["Meal Timing & Structure", "When and how you eat is as important as what you eat. Timing directly affects cortisol and insulin rhythms."],
                                ["Individual Metabolic Response", "Every woman's PCOD presents differently. What works for one can worsen symptoms for another."],
                            ].map(([title, body], i) => (
                                <div key={i} className="flex gap-4 py-3 border-b border-gray-50 last:border-0">
                                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full flex-shrink-0 mt-2.5"></div>
                                    <div>
                                        <span className="font-black text-slate-900">{title} — </span>
                                        <span className="text-slate-600 text-base">{body}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p>
                            This is why finding a <strong>good dietician in Delhi</strong> who specifically understands PCOD is not just helpful — it is essential if you want real results.
                        </p>

                        {/* Section 4 — Right Approach */}
                        <h2 className="text-3xl font-black text-slate-900 mt-14 mb-4 not-prose">
                            The Right Nutritional Approach for PCOD Weight Management
                        </h2>

                        <p>
                            While every woman's plan must be personalised, here are the evidence-based principles that form the foundation of effective PCOD nutrition care:
                        </p>

                        <div className="not-prose space-y-4 my-8">
                            {rightApproach.map((item, i) => (
                                <div key={i} className="flex gap-5 bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-2xl p-6">
                                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="font-black text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Blockquote */}
                        <blockquote className="not-prose my-12 px-8 py-6 border-l-8 border-[#217328] bg-gray-50 rounded-r-3xl">
                            <p className="italic text-2xl font-medium text-slate-800 leading-snug">
                                "Working with a specialised <Link href="/programs/pcod-pcos" className="text-[#217328] font-bold not-italic border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">PCOD dietitian at home</Link> allows you to tailor these strategies to your specific kitchen habits and lifestyle — making the changes permanent, not temporary."
                            </p>
                        </blockquote>

                        {/* Section 5 — More Than a Chart */}
                        <h2 className="text-3xl font-black text-slate-900 mt-14 mb-4 not-prose">
                            Why You Need More Than a Diet Chart
                        </h2>

                        <p>
                            Here's something many women with PCOD discover the hard way: a printed diet chart doesn't work in real life.
                        </p>

                        <p>
                            Your hormones fluctuate through your cycle. Your food access, schedule, and hunger patterns change week to week. Your body's response to specific foods shifts as your metabolic health improves. A static plan cannot account for any of this.
                        </p>

                        <p>
                            What actually works is <strong>continuous, personalised nutrition care</strong> — where a qualified dietician is closely monitoring your progress, adjusting your plan in response to real data, and guiding you through the complexity of PCOD management over time.
                        </p>

                        <p>
                            This is precisely the kind of care that <strong><Link href="/" className="text-[#217328] border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">Dietitian at Home</Link></strong> is built to provide. Weekly dietitian consultations, real-time app-based tracking, monthly in-person assessments — all designed to keep your nutrition plan accurate and genuinely effective. Learn more about <Link href="/how-it-works" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">how it works</Link>.
                        </p>

                        {/* Mid-article CTA */}
                        <div className="not-prose bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                            <h3 className="text-3xl font-black mb-4">Struggling With PCOD Weight Gain?</h3>
                            <p className="text-xl opacity-90 mb-8 font-medium leading-relaxed">
                                Stop guessing. Our specialised PCOD dietitians build plans around your hormones, your kitchen, and your lifestyle — with weekly guidance and monthly doorstep visits.
                            </p>
                            <Link href="/contact" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1 shadow-lg">
                                Talk to a PCOD Specialist
                            </Link>
                        </div>

                        {/* Section 6 — What to Look For */}
                        <h2 className="text-3xl font-black text-slate-900 mt-14 mb-4 not-prose">
                            What to Look for in a Good Dietician in Delhi for PCOD
                        </h2>

                        <p>
                            If you're searching for a <strong>good dietician in Delhi</strong> to manage your PCOD, here's what separates genuine specialist care from generic advice:
                        </p>

                        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
                            {[
                                ["Hormonal Specialisation", "General weight loss advice is not sufficient. Your dietician must understand insulin resistance, androgen management, and inflammation through food."],
                                ["Weekly Involvement", "PCOD management is not one-and-done. You need someone actively reviewing your progress and adjusting your plan as your body responds."],
                                ["Data-Driven Approach", "Real tracking of body composition, cycle regularity, energy levels, and metabolic markers — not generic charts."],
                                ["Medical Coordination", "Your dietician and gynaecologist must work in alignment. PCOD requires a team approach."],
                                ["Culturally Relevant Plans", "Eating right for PCOD in Delhi NCR means working with Indian foods, your kitchen, and your actual lifestyle."],
                                ["Doorstep Convenience", "You shouldn't need to travel to a clinic every week. The best care comes to you — consistently."],
                            ].map(([title, body], i) => (
                                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                                    <h3 className="font-black text-slate-900 mb-2 flex items-start gap-2">
                                        <span className="text-[#4CAF50] mt-0.5">✓</span> {title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed pl-6">{body}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            To explore our{" "}
                            <Link href="/programs/pcod-pcos" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                PCOD/PCOS Care Programme
                            </Link>
                            , built around exactly these principles, visit our programmes page.
                        </p>

                        {/* Section 7 — Progress Timeline */}
                        <h2 className="text-3xl font-black text-slate-900 mt-14 mb-4 not-prose">
                            Real Talk: What Does Progress With PCOD Actually Look Like?
                        </h2>

                        <p>
                            Managing PCOD through nutrition is not a six-week transformation. Here's a realistic picture of what to expect:
                        </p>

                        <div className="not-prose space-y-4 my-8">
                            {progressTimeline.map((phase) => (
                                <div key={phase.period} className={`border rounded-3xl p-6 ${phase.color}`}>
                                    <div className="flex flex-wrap items-start gap-3 mb-2">
                                        <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/70 ${phase.textColor}`}>
                                            {phase.period}
                                        </span>
                                        <h3 className={`font-black text-lg ${phase.textColor}`}>{phase.title}</h3>
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed pl-1">{phase.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            This is why the first three months of our programme are structured as an intensive onboarding phase — building the foundation of data, understanding, and personalised planning that makes sustained progress possible.
                        </p>

                        {/* Section 8 — Conclusion */}
                        <h2 className="text-3xl font-black mt-14 mb-4 text-[#217328] not-prose">
                            The Bottom Line
                        </h2>

                        <p>
                            PCOD and weight management are genuinely complicated. The standard "eat less, move more" advice ignores the hormonal reality of the condition. The "healthy" foods recommended by general wellness culture can actually work against you if your body has insulin resistance and elevated androgens.
                        </p>

                        <p>
                            What you need is a nutrition plan built specifically for your hormonal profile — guided, monitored, and refined by someone who understands PCOD deeply and stays closely involved in your progress.
                        </p>

                        <p>
                            If you're in Delhi NCR and looking for the <strong>best dietician in Delhi NCR</strong> for PCOD care, the most important step you can take is moving away from generic solutions and towards genuinely personalised, continuous nutrition support.
                        </p>

                        <p>
                            At <strong><Link href="/" className="text-[#217328] border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">Dietitian at Home</Link></strong>, we bring that care to your doorstep — no clinic visits, no one-size-fits-all plans, no shortcuts. Just structured, human-led nutrition care that is built around how your body actually works.
                        </p>

                    </div>

                    {/* Footer CTA */}
                    <div className="mt-16 bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                            Ready to Start Your PCOD Nutrition Journey?
                        </h2>
                        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                            Speak with our PCOD nutrition specialists — no commitment required for the first call. We'll explain exactly how we can help.
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

                    {/* Related Reading */}
                    <div className="mt-12">
                        <h3 className="text-xl font-black text-slate-900 mb-5 uppercase tracking-tight">Related Reading</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            {[
                                ["Understanding PCOD Nutrition Strategies", "/blog/understanding-pcod-nutrition-strategies"],
                                ["PCOD Weight Gain — Why Your Dietician in Delhi Matters", "/blog/pcod-weight-gain-dieticians-delhi"],
                                ["Why Traditional Diet Charts Fail", "/blog/why-traditional-diet-charts-fail"],
                                ["How to Choose the Right Dietitian for Your Health Goals", "/blog/how-to-choose-right-dietitian-health-goals"],
                            ].map(([title, href]) => (
                                <Link key={href} href={href} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-4 hover:border-[#217328] hover:bg-white transition-all group">
                                    <span className="text-[#4CAF50] font-black group-hover:translate-x-0.5 transition-transform">→</span>
                                    <span className="text-slate-800 font-semibold text-sm leading-snug">{title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="mt-10 text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-6">
                        <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Please consult your doctor and a qualified dietitian before making changes to your diet, especially if you have a diagnosed medical condition like PCOD.
                    </p>

                </article>

                {/* Sidebar */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-10">

                        {/* Author Card */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
                                    <Image
                                        src="/anita-menon.jpg"
                                        alt="Anita Menon – Lead Clinical Dietitian"
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
                                Specialising in women's metabolic health and PCOD nutrition, Anita has guided hundreds of women in Delhi NCR through hormone-led weight management — from the comfort of their homes.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                                View All Experts
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Quick Nav — In This Article */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-base font-black text-slate-900 mb-5 uppercase tracking-tight">In This Article</h4>
                            <nav className="space-y-2">
                                {[
                                    "What Makes PCOD Different?",
                                    "Foods That Backfire With PCOD",
                                    "Why Generic Diets Don't Work",
                                    "The Right Nutritional Approach",
                                    "More Than a Diet Chart",
                                    "What to Look For in a Dietician",
                                    "What Progress Really Looks Like",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600 hover:text-[#217328] transition-colors cursor-pointer py-1">
                                        <span className="text-[#4CAF50] font-black mt-0.5 flex-shrink-0 text-xs">▸</span>
                                        {item}
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Related Services */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-base font-black text-slate-900 mb-5 uppercase tracking-tight">Our Support Plans</h4>
                            <div className="space-y-3">
                                {[
                                    ["PCOD / PCOS Care", "/programs/pcod-pcos"],
                                    ["Weight Management", "/programs/weight-management"],
                                    ["Family Nutrition", "/programs/family-nutrition"],
                                    ["How It Works", "/how-it-works"],
                                ].map(([label, href]) => (
                                    <Link key={href} href={href} className="block group">
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                            <span className="font-bold text-slate-800 text-sm">{label}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all font-black">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <h4 className="text-2xl font-black mb-3 relative z-10">Start Your Healing Today</h4>
                            <p className="opacity-90 mb-6 text-sm font-medium relative z-10 leading-relaxed">
                                Join women across Delhi NCR who have reversed PCOD symptoms with personalised, at-home nutrition care.
                            </p>
                            <Link href="/contact" className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg text-sm">
                                Book a Consultation
                            </Link>
                        </div>

                    </div>
                </aside>

            </div>
        </div>
    );
}
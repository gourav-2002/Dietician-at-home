import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Indian Breakfast Choices for Diabetics: Beyond Poha and Upma | Dietician in Delhi NCR",
    description: "Struggling with diabetes-friendly Indian breakfasts? A trusted dietician in Delhi NCR shares 12 smart, delicious morning meal options that go far beyond poha and upma. Expert tips from the best dietitian in Gurgaon.",
    keywords: "Indian breakfast for diabetics, dietician in delhi ncr, best dietitian in gurgaon, diabetes diet plan india, diabetic breakfast ideas, blood sugar management, low GI Indian food, diabetes nutrition, moong dal chilla, ragi for diabetes",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/indian-breakfast-choices-for-diabetics-beyond-poha-upma',
    },
    openGraph: {
        title: "Indian Breakfast Choices for Diabetics: Beyond Poha and Upma",
        description: "12 smart, culturally rooted Indian breakfast options for diabetics — far beyond the usual poha and upma. Expert advice from a trusted dietician in Delhi NCR.",
        url: 'https://dieticianathome.com/blog/indian-breakfast-choices-for-diabetics-beyond-poha-upma',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://www.dieticianathome.com/iindian-breakfast-choices-for-diabetics-beyond-poha-upma.jpg',
                width: 1200,
                height: 630,
                alt: 'Healthy Indian breakfast spread with moong dal chilla, sprouts, and vegetables for diabetics',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Indian Breakfast Choices for Diabetics: Beyond Poha and Upma",
        description: "12 smart Indian breakfast options for diabetics. Expert advice from a dietician in Delhi NCR.",
        images: ['https://www.dieticianathome.com/iindian-breakfast-choices-for-diabetics-beyond-poha-upma.jpg'],
    },
};

/*
  AI IMAGE GENERATION PROMPT:
  "Vibrant overhead flat-lay of healthy Indian breakfast spread — moong dal chilla, 
  sprouts salad, boiled eggs, small steel katori with curd, fresh vegetables, 
  Indian spices like turmeric and cumin, warm natural lighting, 
  Indian household kitchen setting, food photography style, 
  photorealistic, high quality, 16:9 aspect ratio"
*/

export default function DiabetesBreakfastBlogPost() {

    const category = "Diabetes Management";
    const readingTime = "10 min read";
    const publishDate = "February 23, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Indian Breakfast Choices for Diabetics: Beyond Poha and Upma",
        "image": "https://www.dieticianathome.com/iindian-breakfast-choices-for-diabetics-beyond-poha-upma.jpg",
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
        "datePublished": "2026-02-23",
        "description": "12 smart, culturally rooted Indian breakfast options for diabetics. Expert advice from a trusted dietician in Delhi NCR.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/indian-breakfast-choices-for-diabetics-beyond-poha-upma"
        }
    };

    const breakfastItems = [
        {
            number: "01",
            title: "Moong Dal Chilla",
            subtitle: "Protein-Packed Savory Pancakes",
            impact: "Minimal spike. Excellent satiety.",
            impactColor: "green",
            content: "Yellow moong dal is soaked, ground into a batter, and cooked like a pancake with vegetables, green chilies, and cumin. It's high in plant protein, moderate in carbs, and very low GI. Add a tablespoon of hung curd on the side and you've got a complete, balanced breakfast with protein, probiotics, and fiber — all in one plate.",
            tip: null,
        },
        {
            number: "02",
            title: "Besan Cheela",
            subtitle: "Chickpea Flour Pancake with Vegetables",
            impact: "GI of ~44. Insulin-sensitivity booster.",
            impactColor: "green",
            content: "Besan has a GI of around 44 — significantly lower than white flour or semolina. Load it up with onions, capsicum, spinach, and grated bottle gourd. Chickpea flour is also rich in resistant starch, which feeds beneficial gut bacteria and improves long-term insulin sensitivity.",
            tip: "Don't make it too thin — a thick chilla holds more vegetable bulk and fills you up better.",
        },
        {
            number: "03",
            title: "Eggs — Indian Style",
            subtitle: "Anda Bhurji, Masala Omelette, Boiled",
            impact: "Zero carbs. Top-tier protein source.",
            impactColor: "green",
            content: "Eggs are perhaps the most underutilized breakfast food in diabetic Indian diets — often avoided due to cholesterol myths that science has largely debunked. Options that work beautifully: anda bhurji with tomatoes and cumin, boiled egg with mint chutney, egg paratha with whole wheat atta, or a masala omelette with capsicum and turmeric.",
            tip: null,
        },
        {
            number: "04",
            title: "Savory Oats",
            subtitle: "Oats Cheela or Vegetable Oats Porridge",
            impact: "Second meal effect — lowers post-lunch sugar too.",
            impactColor: "blue",
            content: "Not the sweet, sugary oatmeal from packets — but real, rolled oats cooked savory. Mix oats with besan for chilla, cook with vegetables seasoned with mustard seeds and curry leaves, or mix into idli batter replacing a portion of rice. Beta-glucan, the soluble fiber in oats, is one of the most well-researched ingredients for blood sugar management.",
            tip: null,
        },
        {
            number: "05",
            title: "Sprouts Salad or Cheela",
            subtitle: "Moong, Chana, Matki — Sprouted",
            impact: "Dramatically lower GI vs. cooked unsprouted.",
            impactColor: "green",
            content: "Sprouting legumes dramatically lowers their GI compared to their cooked, unsprouted forms. A sprouts salad with lemon, jeera powder, chopped vegetables, and a handful of peanuts makes a refreshing, high-fiber, high-protein breakfast — especially in summer months.",
            tip: "Pair with a small cup of plain buttermilk or green tea.",
        },
        {
            number: "06",
            title: "Millet-Based Options",
            subtitle: "Ragi, Jowar, Bajra",
            impact: "Higher fiber, higher protein, lower GI than wheat.",
            impactColor: "green",
            content: "Millets have been a staple of Indian diets for centuries before wheat and rice took over. For diabetics, they're nutritionally superior in almost every way. Try ragi dosa (fermented, crispy, very low GI), jowar roti with curd, bajra khichdi, or ragi porridge garnished with nuts and seeds.",
            tip: null,
        },
        {
            number: "07",
            title: "Paneer Bhurji",
            subtitle: "The Vegetarian Egg Equivalent",
            impact: "Near-zero carbs. High calcium and protein.",
            impactColor: "green",
            content: "For vegetarians who can't eat eggs, paneer bhurji is the closest nutritional equivalent. Cottage cheese is high in protein and calcium, essentially carb-free, and — when cooked well with tomatoes, onions, and spices — deeply satisfying. Pair with a small whole wheat roti or eat as-is with vegetable soup.",
            tip: "Use fresh, homemade or low-fat paneer. Store-bought full-fat paneer is fine in moderation.",
        },
        {
            number: "08",
            title: "Vegetable Daliya",
            subtitle: "Broken Wheat + Moong Dal Mixed",
            impact: "GI of 41–50. Much better with added protein.",
            impactColor: "amber",
            content: "The problem with most daliya is how it's made — plain, no protein, no bulk vegetables. Done right, vegetable daliya with generous moong dal mixed in becomes completely different: higher protein, higher fiber, much more satiating. Cook with carrots, beans, peas, and spinach. Temper with ghee, cumin, and turmeric.",
            tip: null,
        },
        {
            number: "09",
            title: "Smarter Stuffed Paratha",
            subtitle: "Whole Wheat + Protein-Rich Fillings",
            impact: "Acceptable with the right modifications.",
            impactColor: "amber",
            content: "Parathas are not off-limits — they just need rethinking. Use whole wheat atta or mix besan/ragi flour in a 50-50 ratio. Use protein-rich fillings like paneer, moong dal, or egg. Add methi (fenugreek) leaves — which have proven hypoglycemic properties. Cook with minimal ghee (half teaspoon). Eat one medium paratha with curd.",
            tip: null,
        },
        {
            number: "10",
            title: "Idli & Dosa — Upgraded",
            subtitle: "Oats Idli, Ragi Idli, Moong Dal Dosa",
            impact: "Fermentation lowers GI and adds probiotics.",
            impactColor: "amber",
            content: "Traditional idli and dosa get a bad reputation because of high rice content and no protein pairing. Better versions: oats idli or ragi idli (substituting rice batter), moong dal dosa (completely rice-free, very high protein). Always pair with sambar made with extra dal and vegetables — this adds significant protein and fiber to the meal.",
            tip: null,
        },
        {
            number: "11",
            title: "Nuts & Seeds Bowl",
            subtitle: "Almonds, Walnuts + Pumpkin, Flax, Chia",
            impact: "Zero net carb spike. Maximum blood sugar stability.",
            impactColor: "green",
            content: "The simplest and most portable option — highly underutilized in Indian households. A measured handful of mixed nuts with a tablespoon of seeds and a small cup of whole milk or curd constitutes an excellent blood-sugar-stable breakfast. Perfect for people who aren't hungry in the morning, those who travel frequently, or as a complement to a small carb portion.",
            tip: "Walnuts contain alpha-linolenic acid, which specifically supports insulin sensitivity.",
        },
        {
            number: "12",
            title: "Thick Vegetable Lentil Soup",
            subtitle: "With Paneer or Poached Egg",
            impact: "Non-traditional but highly effective.",
            impactColor: "blue",
            content: "In Indian households, soup is reserved for dinner or illness. But a thick, protein-enriched vegetable soup makes an excellent morning meal — especially in winter. Use a lentil/moong/chickpea base for protein. Load with spinach, tomatoes, and lauki. Add grated paneer or a poached egg. Season with ginger, garlic, and black pepper — all of which support metabolic function.",
            tip: null,
        },
    ];

    const avoidItems = [
        {
            label: "White Bread & Maida",
            detail: "Puri, bhatura, biscuits — high GI, zero fiber, fast spike.",
            icon: "✗",
        },
        {
            label: "Packaged \"Health\" Cereals",
            detail: "Even multigrain versions are often high in added sugar. Check labels.",
            icon: "✗",
        },
        {
            label: "Sweetened Chai + Biscuits",
            detail: "The classic Indian morning routine is a glucose spike waiting to happen.",
            icon: "✗",
        },
        {
            label: "Fruit Juices",
            detail: "Sugar water without the fiber. Always choose whole fruit over juice.",
            icon: "✗",
        },
    ];

    const faqItems = [
        {
            q: "Is fruit okay for breakfast if I have diabetes?",
            a: "Yes, whole fruit is generally fine in moderate portions — especially lower-GI options like guava, papaya, and apple. Avoid fruit juices. Pair fruit with a protein source like curd or nuts to blunt the glucose response.",
        },
        {
            q: "Can I eat idli or dosa if I'm diabetic?",
            a: "Traditional idli in moderate quantities, paired with protein-rich sambar, is acceptable for many diabetics. Oats idli or ragi idli are better options. Always monitor your personal glucose response — individual reactions vary.",
        },
        {
            q: "How many rotis can a diabetic eat at breakfast?",
            a: "Most diabetics do well with 1–2 small whole wheat rotis at breakfast, paired with protein and vegetables. This should be finalized by your dietitian based on your actual glucose readings and medication.",
        },
        {
            q: "Should I exercise before or after breakfast?",
            a: "Both have evidence. A 10–15 minute post-breakfast walk significantly reduces post-meal glucose spikes. A morning walk before breakfast can improve fasting glucose over time. Discuss with your dietitian and doctor.",
        },
        {
            q: "How do I know if a breakfast is spiking my blood sugar?",
            a: "Test your blood glucose 1–2 hours after eating. A reading below 140 mg/dL post-meal is generally acceptable. Continuous glucose monitors (CGMs) give even more granular insight into your individual food responses.",
        },
    ];

    const impactColors = {
        green: "bg-emerald-50 text-emerald-700 border-emerald-200",
        amber: "bg-amber-50 text-amber-700 border-amber-200",
        blue: "bg-sky-50 text-sky-700 border-sky-200",
    };

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 mt-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-6 mb-8">
                <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm text-gray-500 font-medium">
                    <li>
                        <Link href="/" className="hover:text-[#217328] transition-colors">Home</Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <span>/</span>
                        <Link href="/blog" className="hover:text-[#217328] transition-colors">Blog</Link>
                    </li>
                    <li className="flex items-center gap-2 text-gray-400">
                        <span>/</span>
                        <span className="truncate max-w-[220px] md:max-w-none">Indian Breakfast for Diabetics</span>
                    </li>
                </ol>
            </nav>

            {/* ── HERO ── */}
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

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                    Indian Breakfast Choices for Diabetics:{" "}
                    <span className="text-[#217328]">Beyond Poha and Upma</span>
                </h1>

                <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
                    12 smart, culturally rooted morning meal options that manage your blood sugar, keep you full, and actually taste like Indian food.
                </p>
            </header>

            {/* ── CONTENT LAYOUT ── */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* ── MAIN ARTICLE ── */}
                <article className="lg:w-2/3">

                    {/* Featured Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-14">
                        <Image
                            src="/indian-breakfast-choices-for-diabetics-beyond-poha-upma.jpg"
                            alt="Colourful healthy Indian breakfast spread with vegetables, lentils and whole grains"
                            width={1200}
                            height={675}
                            className="object-cover w-full h-full"
                            priority
                        />
                        {/* Subtle overlay label */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-slate-600 uppercase tracking-widest">
                            Dietitian at Home • Delhi NCR & Gurgaon
                        </div>
                    </div>

                    {/* ── INTRO ── */}
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">

                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2 not-prose">
                            If you've been living with diabetes for a while, you've probably heard the same advice on repeat: <em>eat poha, eat upma, avoid sugar, avoid rice.</em> While there's truth in some of it, the reality is far more nuanced — and far more delicious.
                        </p>

                        <p>
                            As a trusted <Link href="/programs/diabetes-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">dietician in Delhi NCR</Link> serving clients across Gurgaon, Faridabad, Noida, and South Delhi, we've worked with hundreds of diabetic individuals who were bored, frustrated, and nutritionally under-served by the same generic meal advice. This blog is your guide to expanding your diabetes breakfast repertoire — with options that are deeply rooted in Indian food culture, scientifically sound, and genuinely satisfying.
                        </p>

                        {/* ── WHY BREAKFAST MATTERS ── */}
                        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-4 not-prose">
                            Why Your Breakfast Matters More Than Any Other Meal
                        </h2>
                        <p>
                            For people with Type 2 diabetes, the morning meal sets the glucose tone for the entire day. Eat something high on the glycemic index and you'll spend the rest of the morning chasing spikes, dealing with energy crashes, and craving more carbs by 10 AM.
                        </p>
                    </div>

                    {/* 4-pillar grid */}
                    <div className="grid grid-cols-2 gap-4 my-8">
                        {[
                            { icon: "📉", label: "Blunts cortisol-driven morning glucose rise" },
                            { icon: "🕙", label: "Keeps you full through mid-morning" },
                            { icon: "⚖️", label: "Reduces total glycemic load for the day" },
                            { icon: "💉", label: "Improves insulin sensitivity over time" },
                        ].map((item) => (
                            <div key={item.label} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-start gap-3">
                                <span className="text-2xl leading-none mt-0.5">{item.icon}</span>
                                <p className="text-sm font-semibold text-slate-700 leading-snug">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* What makes diabetic-friendly */}
                    <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 my-10">
                        <h3 className="text-xl font-black text-[#217328] mb-4">What Makes a Breakfast "Diabetic-Friendly"?</h3>
                        <div className="space-y-3 text-slate-700">
                            <p><strong>Glycemic Index (GI) & Load (GL):</strong> GI tells you how fast a food raises blood sugar. GL accounts for portion size. Aim for low-to-medium GI foods in reasonable portions.</p>
                            <p><strong>Protein Content:</strong> Protein slows glucose absorption and improves satiety. Most Indian breakfasts are carb-heavy and protein-poor — this is the gap to fix.</p>
                            <p><strong>Fiber:</strong> Soluble fiber (oats, vegetables, legumes) forms a gel in the gut that slows sugar absorption. Your best friend.</p>
                            <p><strong>Healthy Fats:</strong> A small amount from ghee, nuts, or seeds slows gastric emptying and blunts glucose spikes.</p>
                        </div>
                    </div>

                    {/* ── 12 BREAKFAST OPTIONS ── */}
                    <h2 className="text-3xl font-black text-slate-900 mt-14 mb-2">
                        12 Indian Breakfast Choices for Diabetics
                    </h2>
                    <p className="text-slate-500 mb-10 text-lg">That aren't poha or upma.</p>

                    <div className="space-y-6">
                        {breakfastItems.map((item) => (
                            <div key={item.number} className="border border-gray-100 rounded-3xl p-7 hover:border-[#4CAF50]/40 hover:shadow-md transition-all group">
                                <div className="flex items-start gap-5">
                                    {/* Number badge */}
                                    <div className="w-12 h-12 rounded-2xl bg-[#4CAF50]/10 flex items-center justify-center shrink-0 group-hover:bg-[#4CAF50]/20 transition-colors">
                                        <span className="text-[#217328] font-black text-sm">{item.number}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                            <div>
                                                <h3 className="text-xl font-black text-slate-900 leading-tight">{item.title}</h3>
                                                <p className="text-sm text-slate-500 font-medium mt-0.5">{item.subtitle}</p>
                                            </div>
                                          
                                        </div>
                                        <p className="text-slate-600 leading-relaxed">{item.content}</p>
                                        {item.tip && (
                                            <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                                                <span className="text-amber-500 font-black text-xs uppercase tracking-wider shrink-0 mt-0.5">Pro Tip:</span>
                                                <p className="text-amber-800 text-sm">{item.tip}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── FOODS TO AVOID ── */}
                    <h2 className="text-3xl font-black text-slate-900 mt-14 mb-6">
                        What to Limit or Avoid at Breakfast
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {avoidItems.map((item) => (
                            <div key={item.label} className="bg-red-50 border border-red-100 p-5 rounded-2xl flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-red-200 text-red-600 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">✗</span>
                                <div>
                                    <p className="font-bold text-slate-800 text-sm">{item.label}</p>
                                    <p className="text-slate-500 text-sm mt-0.5">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── PORTION SIZE SECTION ── */}
                    <div className="my-12 bg-slate-900 text-white p-10 rounded-[2.5rem]">
                        <h2 className="text-2xl font-black mb-4">The Role of Portion Size & Meal Timing</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            Even the healthiest breakfast can cause a glucose spike if eaten in large quantities. Portion discipline matters as much as food choice.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Eat breakfast within 1–2 hours of waking",
                                "Keep carb portions at breakfast smaller than at lunch",
                                "Always pair carbs with protein and fat",
                                "Eat slowly — the speed of eating affects glucose response",
                            ].map((tip) => (
                                <div key={tip} className="flex items-start gap-3 bg-white/5 rounded-2xl px-5 py-4">
                                    <span className="text-[#4CAF50] font-black text-lg leading-none shrink-0">→</span>
                                    <p className="text-slate-200 text-sm leading-snug">{tip}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-400 text-sm mt-6 leading-relaxed">
                            A <strong className="text-white">dietician in Delhi NCR</strong> who monitors your actual glucose patterns can tell you which foods <em>your</em> body responds best to — because individual response to food varies significantly, even among diabetics.
                        </p>
                    </div>

                    {/* ── GENERIC DIET CHARTS SECTION ── */}
                    <h2 className="text-3xl font-black text-slate-900 mt-14 mb-4">
                        The Problem With Generic Diabetes Diet Charts
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Most diabetes diet charts handed out at clinics are one-size-fits-all documents. They don't account for your specific HbA1C and fasting glucose levels, whether you're on medication and which type, your food preferences and cooking habits, your work schedule and meal timing, or your cultural food traditions.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        This is exactly why working with a qualified dietitian — one who knows you, tracks your progress, and adjusts your plan weekly — produces dramatically better outcomes than following a generic chart.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        If you're based in the Delhi NCR region, our{" "}
                        <Link href="/programs/diabetes-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                            diabetes management program
                        </Link>{" "}
                        offers exactly this kind of personalized, continuous care — from the comfort of your home. Our qualified dietitians work with you every week, reviewing your glucose logs, adjusting your meal plan, and helping you navigate real-life challenges like dining out, festivals, and travel.
                    </p>

                    {/* ── HOW WE SUPPORT DIFFERENTLY ── */}
                    <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                        <h2 className="text-2xl font-black mb-2">How Dietitian at Home Supports Diabetics Differently</h2>
                        <p className="text-white/80 mb-8 leading-relaxed">
                            Unlike a single clinic visit where you receive a chart and leave, our model is built for continuous support and measurable progress.
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                { icon: "🏠", text: "A trained representative visits your home monthly for measurements and health parameters" },
                                { icon: "📞", text: "Your assigned dietitian speaks with you every week — reviewing glucose readings, adherence, and challenges" },
                                { icon: "📋", text: "Your weekly meal plan is updated based on real data, not assumptions" },
                                { icon: "📱", text: "Everything syncs to a mobile app where you can log meals, scan foods, and schedule consultations" },
                            ].map((point) => (
                                <div key={point.text} className="flex items-start gap-4 bg-white/10 rounded-2xl px-5 py-4">
                                    <span className="text-xl shrink-0">{point.icon}</span>
                                    <p className="text-white/90 text-sm leading-snug">{point.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/how-it-works"
                                className="inline-block bg-white text-[#217328] px-6 py-3 rounded-2xl font-black tracking-wider uppercase text-sm hover:bg-slate-100 transition-all text-center"
                            >
                                See How It Works
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-block bg-white/10 text-white border border-white/20 px-6 py-3 rounded-2xl font-black tracking-wider uppercase text-sm hover:bg-white/20 transition-all text-center"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>

                    {/* ── BEST DIETITIAN GURGAON CLOSING ── */}
                    <blockquote className="my-10 px-8 py-5 border-l-8 border-[#217328] bg-gray-50 rounded-r-3xl">
                        <p className="italic text-2xl font-semibold text-slate-800 leading-snug mb-3">
                            "Managing diabetes with food is not about restriction — it's about understanding your body and making informed choices."
                        </p>
                        <p className="text-slate-500 text-sm font-medium">
                            — The <strong className="text-[#217328]">best dietitian in Gurgaon</strong> at Dietitian at Home
                        </p>
                    </blockquote>

                    <p className="text-slate-600 leading-relaxed">
                        The breakfasts listed in this blog are possibilities, not prescriptions. Your actual plan needs to be built around your glucose data, your lifestyle, and your goals. That's what the{" "}
                        <strong>best dietitian in Gurgaon</strong> at our practice does, week after week, with every client. If you're ready to move beyond generic diabetes advice,{" "}
                        <Link href="/contact" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                            get in touch with us today
                        </Link>
                        . Your first consultation is just a call away — and you don't have to step out of your home.
                    </p>

                    {/* ── FAQ ── */}
                    <h2 className="text-3xl font-black text-slate-900 mt-14 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <details key={i} className="group border border-gray-100 rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-bold text-slate-800 hover:bg-slate-50 transition-colors">
                                    <span>{item.q}</span>
                                    <svg className="w-5 h-5 text-[#217328] shrink-0 ml-4 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 5v14m-7-7h14" />
                                    </svg>
                                </summary>
                                <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-gray-100">
                                    <p className="pt-4">{item.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* ── RELATED READING ── */}
                    <div className="mt-14 pt-8 border-t border-gray-100">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-5">Related Reading</p>
                        <div className="grid sm:grid-cols-3 gap-3">
                            {[
                                { label: "How It Works", href: "/how-it-works", desc: "Our 10-step nutrition care process" },
                                { label: "Weight Management", href: "/programs/weight-management", desc: "For diabetics managing weight" },
                                { label: "Our Pricing", href: "/pricing", desc: "Transparent and competitive" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group block bg-slate-50 hover:bg-[#4CAF50]/5 border border-slate-100 hover:border-[#4CAF50]/30 p-5 rounded-2xl transition-all"
                                >
                                    <p className="font-black text-slate-900 text-sm group-hover:text-[#217328] transition-colors">{link.label} →</p>
                                    <p className="text-slate-500 text-xs mt-1">{link.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                </article>

                {/* ── SIDEBAR ── */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-8">

                        {/* Author / Publisher Card */}
                        <div className="bg-slate-50 p-7 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-14 h-14 rounded-2xl bg-[#217328] flex items-center justify-center shrink-0">
                                     <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
                                                                        <Image
                                                                            src="/anita-menon.jpg"
                                                                            alt="Anita Menon"
                                                                            width={64}
                                                                            height={64}
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-base font-black text-slate-900 leading-tight">Anita Menon</h4>
                                    <p className="text-[#217328] font-bold text-xs">Lead Clinical Dietitian</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-5">
                                Our team of qualified dietitians specializes in managing diabetes and other metabolic conditions through personalized, home-based nutrition care across Gurgaon and Delhi NCR.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                                Meet Our Experts
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Key Stats / Callout */}
                        <div className="bg-white p-7 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-sm font-black text-slate-900 mb-5 uppercase tracking-tight">Why It Matters</h4>
                            <div className="space-y-4">
                                {[
                                    { stat: "77M+", label: "Diabetics in India — 2nd highest globally" },
                                    { stat: "5–10%", label: "Weight reduction can restore insulin sensitivity" },
                                    { stat: "Weekly", label: "Plan adjustments = dramatically better outcomes" },
                                ].map((item) => (
                                    <div key={item.stat} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                        <span className="text-2xl font-black text-[#217328] shrink-0 leading-none">{item.stat}</span>
                                        <p className="text-slate-600 text-xs leading-snug">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Related Programs */}
                        <div className="bg-white p-7 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-sm font-black text-slate-900 mb-5 uppercase tracking-tight">Our Programs</h4>
                            <div className="space-y-3">
                                {[
                                    { label: "Diabetes Management", href: "/programs/diabetes-management" },
                                    { label: "Weight Management", href: "/programs/weight-management" },
                                    { label: "Thyroid Management", href: "/programs/thyroid-management" },
                                    { label: "How It Works", href: "/how-it-works" },
                                ].map((link) => (
                                    <Link key={link.href} href={link.href} className="block group">
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                            <span className="font-bold text-slate-700 text-sm">{link.label}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all text-sm">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                            <h4 className="text-xl font-black mb-3 relative z-10">Start Managing Diabetes Through Food</h4>
                            <p className="opacity-80 mb-7 text-sm font-medium relative z-10 leading-relaxed">
                                Get a weekly meal plan built around your glucose readings — by a qualified dietitian, delivered to your doorstep.
                            </p>
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg text-sm"
                            >
                                Book a Consultation
                            </Link>
                        </div>

                    </div>
                </aside>
            </div>

            {/* ── FOOTER CTA STRIP ── */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">
                        Ready to eat smarter for diabetes?
                    </h2>
                    <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Take the first step towards stable blood sugar with a personalized assessment from India's leading home-visit dietitians in Delhi NCR and Gurgaon.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-[#217328] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase shadow-2xl shadow-[#217328]/30 hover:-translate-y-1 transition-all text-sm"
                        >
                            Get Started Now
                        </Link>
                        <Link
                            href="/programs/diabetes-management"
                            className="bg-white text-slate-900 border border-gray-200 px-10 py-5 rounded-2xl font-black tracking-widest uppercase hover:bg-gray-50 transition-all text-sm"
                        >
                            Explore Diabetes Program
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
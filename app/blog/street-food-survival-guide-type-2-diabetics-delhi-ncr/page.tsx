import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Street Food Survival Guide for Type 2 Diabetics in Delhi NCR | Good Nutritionist in Delhi",
    description: "Finding a good nutritionist in Delhi? Learn how to navigate Delhi street food as a diabetic with our 2500-word survival guide. Expert tips for blood sugar management.",
    keywords: "good nutritionist in delhi, best dietitians in delhi, dietician in delhi ncr, diabetes diet delhi ncr, type 2 diabetes street food india, street food survival guide",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/street-food-survival-guide-type-2-diabetics-delhi-ncr',
    },
    openGraph: {
        title: "Street Food Survival Guide for Type 2 Diabetics in Delhi NCR",
        description: "How to eat out in Delhi without spiking your blood sugar. Smart swaps and survival strategies from the best dietitians in Delhi.",
        url: 'https://dieticianathome.com/blog/street-food-survival-guide-type-2-diabetics-delhi-ncr',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/street-food-survival-guide-type-2-diabetics-delhi-ncr.jpg',
                width: 1200,
                height: 630,
                alt: 'Diabetic-friendly Delhi street food spread with sprouts, tandoori items, and healthy chaat',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Street Food Survival Guide for Type 2 Diabetics in Delhi NCR",
        description: "Smart survival strategies for diabetics eating street food in Delhi NCR.",
        images: ['https://dieticianathome.com/street-food-survival-guide-type-2-diabetics-delhi-ncr.jpg'],
    },
};

export default function StreetFoodDiabeticBlog() {

    const category = "Diabetes Management";
    const readingTime = "12 min read";
    const publishDate = "March 13, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Street Food Survival Guide for Type 2 Diabetics in Delhi NCR",
        "image": "https://dieticianathome.com/street-food-survival-guide-type-2-diabetics-delhi-ncr.jpg",
        "author": {
            "@type": "Person",
            "name": "Anita Menon",
            "jobTitle": "Lead Clinical Dietitian"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Dietitian at Home",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dieticianathome.com/diet-at-home-logo.png"
            }
        },
        "datePublished": "2026-03-13",
        "description": "A comprehensive survival guide for Type 2 diabetics to enjoy Delhi NCR street food without spiking blood sugar, created by a good nutritionist in Delhi.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/street-food-survival-guide-type-2-diabetics-delhi-ncr"
        },
        "about": {
            "@type": "Thing",
            "name": "Type 2 Diabetes"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://dieticianathome.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://dieticianathome.com/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Street Food Guide for Diabetics",
                "item": "https://dieticianathome.com/blog/street-food-survival-guide-type-2-diabetics-delhi-ncr"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can a Type 2 diabetic eat golgappe?",
                "content": "Yes, but in limited quantities (3-4) and with a focus on high-fiber fillings like sprouts instead of potatoes. Avoid the sweet chutney (Sonth) as it is loaded with sugar."
            },
            {
                "@type": "Question",
                "name": "Is bhutta (corn) safe for diabetics?",
                "content": "Yes, roasted corn on the cob (bhutta) is a moderate GI food (~52). It is high in fiber and antioxidant-rich, making it one of the safest street food snacks when eaten without butter."
            },
            {
                "@type": "Question",
                "name": "What is the safest street food for diabetics in Delhi?",
                "content": "Tandoori items like paneer tikka, soya chaap (unbreaded), and roasted bhutta are the best choices because they are higher in protein and fiber and lower in refined carbs."
            },
            {
                "@type": "Question",
                "name": "How do I know if a food is spiking my blood sugar?",
                "content": "Check your blood glucose 2 hours after eating. A good nutritionist in Delhi recommends aiming for levels below 140-160 mg/dL post-meal, though this varies by individual."
            },
            {
                "@type": "Question",
                "name": "Should I consult a dietitian or just follow a diabetes diet chart?",
                "content": "A good nutritionist in Delhi provides personalized adjustments based on your real-life readings. Generic charts fail because they don't account for individual metabolic responses or lifestyle habits."
            }
        ]
    };

    const streetFoods = [
        {
            number: "01",
            title: "Golgappe / Pani Puri",
            concern: "The puri is made of maida (refined flour) and the filling is usually starchy potatoes. The Sonth (sweet chutney) is a concentrated sugar bomb.",
            swap: "Ask for a filling of boiled sprouts or chickpeas instead of potato. Stick to the spicy Jal Jeera and skip the sweet chutney entirely.",
            verdict: "LIMIT ⚠️",
            reason: "Eat max 3-4; focus on the Jal Jeera and skip the sweet syrup.",
            tip: "Drinking extra Jal Jeera (without the puri) can actually help digestion without affecting glucose levels significantly."
        },
        {
            number: "02",
            title: "Aloo Tikki Chaat",
            concern: "Deep-fried potatoes have a very high GI. When combined with sweetened curd and tamarind chutney, it's a metabolic nightmare.",
            swap: "Skip the tikki. Ask for 'Matar Chaat' (dried white peas) which is much higher in fiber and protein, and have it with extra onions and lemon.",
            verdict: "SKIP ✗",
            reason: "Fried potato starch and sugar syrups cause rapid, sustained spikes.",
            tip: "If you must have it, split one tikki with a friend and load it with extra ginger and green chilies."
        },
        {
            number: "03",
            title: "Chole Bhature",
            concern: "Deep-fried maida bhature is essentially a high-fat, high-carb sponge. Even the chole are often cooked in heavy oil.",
            swap: "Swap bhature for a Tandoori Roti or ask for just the Paneer-stuffed Kulcha (baked, not fried).",
            verdict: "SKIP ✗",
            reason: "One plate can exceed 800 calories and cause a multi-hour glucose elevation.",
            tip: null
        },
        {
            number: "04",
            title: "Paranthe Wali Gali Parathas",
            concern: "Unlike home-cooked parathas, these are deep-fried in large quantities of ghee/oil, making them extremely calorically dense.",
            swap: "Look for tandoori (clay oven) parathas instead of deep-fried ones. Choose dal or paneer stuffing over potato.",
            verdict: "SKIP ✗",
            reason: "The deep-frying process and refined flour increase glycemic load exponentially.",
            tip: "Home-style paranthas made with minimal oil are fine; the deep-fried street version is what we advise against."
        },
        {
            number: "05",
            title: "Momos (Tibetan Dumplings)",
            concern: "The outer shell is 100% maida. The veg fillings can be oily, though the steam method is better than deep-frying.",
            swap: "Look for 'Wheat Momos' (though they still have maida) or better yet, opt for Tandoori momos which have less dough-to-filling ratio.",
            verdict: "LIMIT ⚠️",
            reason: "Stick to 2-3 pieces; focus on the spicy red chili garlic chutney for flavor.",
            tip: "The spicy momo chutney is usually safe (though high in sodium), as long as it doesn't have added sugar."
        },
        {
            number: "06",
            title: "Dahi Bhalla",
            concern: "The bhallas are deep-fried lentil donuts. While lentils are good, the frying and the sugar in the curd and chutney are the issues.",
            swap: "Ask for plain curd (unsweetened) and skip the Sonth. Ask for extra pomegranate and ginger garnishing.",
            verdict: "LIMIT ⚠️",
            reason: "Probiotics in curd help, but the fried base and sugar must be controlled.",
            tip: "Removing the extra 'papdi' from your dahi bhalla plate can save you about 15-20g of simple carbs."
        },
        {
            number: "07",
            title: "Rajma Chawal (Street Style)",
            concern: "The rice used is often low-grade, high-GI white rice, and portions are usually huge.",
            swap: "Ask for double the Rajma (beans) and only 2-3 tablespoons of rice. Ask for a side of salad (sirka pyaz).",
            verdict: "LIMIT ⚠️",
            reason: "Lentils are great for diabetics; the white rice refined starch is the culprit.",
            tip: null
        },
        {
            number: "08",
            title: "Corn on the Cob (Bhutta)",
            concern: "Bhutta is actually quite safe! It's a whole grain with a moderate GI of around 52.",
            swap: "None needed! Just ensure they don't slather it in butter or margarine. Lemon and salt are your best friends.",
            verdict: "EAT ✔",
            reason: "Excellent fiber source that provides a steady release of energy without major spikes.",
            tip: "Bhutta is the 'Gold Standard' for diabetic street food snacks in Delhi winters."
        },
        {
            number: "09",
            title: "Fruit Chaat",
            concern: "Street-side fruit chaat can be safe, but vendors often sprinkle sugar or use canned fruits in syrup.",
            swap: "Ask for fresh-cut fruit only. Avoid melon or grapes in large portions; stick to guava, papaya, and apple.",
            verdict: "EAT ✔",
            reason: "High fiber and micronutrients, provided no extra sugar is added.",
            tip: "The added 'chaat masala' is fine for most diabetics, though those with high blood pressure should be careful."
        },
        {
            number: "10",
            title: "Tandoori Roti with Dal Makhani",
            concern: "Dal Makhani is often loaded with cream and butter. Tandoori roti is better than naan but still high in carbs.",
            swap: "Ask for Tandoori Roti (whole wheat) and ask if they have Yellow Dal Tadka instead of Dal Makhani.",
            verdict: "LIMIT ⚠️",
            reason: "Protein in dal is good but be wary of hidden fats and large roti sizes.",
            tip: null
        }
    ];

    const trappingItems = [
        { label: "Tamarind Chutney (Sonth)", detail: "Essentially liquid sugar and jaggery. One tablespoon can have 10g of sugar.", icon: "✗" },
        { label: "Sweet Lassi / Cold Drinks", detail: "Pure liquid sugar that enters the bloodstream instantly. Avoid completely.", icon: "✗" },
        { label: "Packaged Masala Soda", detail: "Often contains high-fructose corn syrup and artificial colors.", icon: "✗" },
        { label: "Mixed Fruit Juices", detail: "Stripped of fiber, these are effectively sugar water. Eat the fruit instead.", icon: "✗" },
    ];

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 mt-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-6 mb-8">
                <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm text-gray-500 font-medium">
                    <li><Link href="/" className="hover:text-[#217328] transition-colors">Home</Link></li>
                    <li className="flex items-center gap-2"><span>/</span><Link href="/blog" className="hover:text-[#217328] transition-colors">Blog</Link></li>
                    <li className="flex items-center gap-2 text-gray-400"><span>/</span><span className="truncate">Street Food Survival Guide for Diabetics</span></li>
                </ol>
            </nav>

            {/* ── HERO ── */}
            <header className="max-w-7xl mx-auto px-6 mb-12">
                <div className="mb-6 flex flex-wrap gap-3 items-center">
                    <span className="bg-[#4CAF50]/10 text-[#217328] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">{category}</span>
                    <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {readingTime}
                    </span>
                    <span className="text-gray-400 text-sm">{publishDate}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                    Street Food Survival Guide for <span className="text-[#217328]">Type 2 Diabetics in Delhi NCR</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-3xl font-medium leading-relaxed">
                    How to enjoy the legendary flavors of Delhi without a glucose disaster. Tips from a good nutritionist in Delhi for real-world diabetes management.
                </p>
            </header>

            {/* ── CONTENT LAYOUT ── */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
                <article className="lg:w-2/3">
                    {/* Featured Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-14">
                        <Image
                            src="/street-food-survival-guide-type-2-diabetics-delhi-ncr.jpg"
                            alt="Diabetic-friendly Delhi street food spread with sprouts, tandoori items, and healthy chaat"
                            width={1200}
                            height={675}
                            className="object-cover w-full h-full"
                            priority
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-slate-600 uppercase">
                            Dietician at Home • Delhi NCR & Gurgaon
                        </div>
                    </div>

                    {/* ── INTRO ── */}
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
                        <p>
                            If you live in Delhi, NCR, or Gurgaon and have been diagnosed with Type 2 diabetes, you’ve likely been told the same heartbreaking sentence: <strong>"Avoid street food forever."</strong> But as the <strong>best dietitians in Delhi</strong> know, that’s not a sustainable strategy. Living in the food capital of India means you will be surrounded by the aroma of fresh parathas, the crunch of golgappe, and the spice of tandoori tikkas.
                        </p>
                        <p>
                            As dieticians in Delhi NCR serving clients across Gurgaon, Faridabad, Noida, and South Delhi, we believe that <strong>diabetes management should fit your life, not the other way around.</strong> The tension is real: you want to be social and enjoy local culture, but you also want to avoid the dangerous glucose roller coaster that most street foods trigger. This guide is your "survival manual"—designed by a <strong>good nutritionist in Delhi</strong> to help you make smart swaps, understand your limits, and navigate a Delhi weekend without guilt or medical emergency.
                        </p>

                        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-4 not-prose">Why Street Food Is a Real Challenge for Type 2 Diabetics</h2>
                        <p>
                            Traditional Delhi street food is built on four things that diabetics need to watch: <strong>refined carbs (maida), starchy fillers (potatoes), hidden sugars (chutneys), and inflammatory oils.</strong> For someone with insulin resistance, these ingredients don’t just raise blood sugar; they cause a rapid spike that can stay elevated for hours.
                        </p>
                    </div>

                    {/* glucose-culprits grid */}
                    <div className="grid grid-cols-2 gap-4 my-8">
                        {[
                            { icon: "🍞", label: "Refined Maida: Zero fiber, instant glucose spike" },
                            { icon: "🥔", label: "Potato Base: High starch content, high GI" },
                            { icon: "🍯", label: "Hidden Sugars: Sweet chutneys are liquid candy" },
                            { icon: "🛢️", label: "Cooking Oils: Often low quality, driving inflammation" },
                        ].map((item) => (
                            <div key={item.label} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-start gap-3">
                                <span className="text-2xl mt-0.5">{item.icon}</span>
                                <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mt-12 mb-4">The Diabetic's Framework for Navigating Street Food</h2>
                    <p className="text-slate-700 mb-6">Before you step out, a <strong>good nutritionist in Delhi</strong> always recommends following these four golden rules:</p>
                    <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 my-10 space-y-4">
                        <p><strong>01 GI Awareness:</strong> Know your enemies. Maida and deep-fried potatoes are high GI. Sprouted beans, tandoori meats, and lentils are your allies.</p>
                        <p><strong>02 Protein Pairing:</strong> Never eat a carb alone. If you're having a small portion of rice or a kulcha, pair it with a heavy portion of rajma, chana, or paneer tikka to slow down sugar absorption.</p>
                        <p><strong>03 Portion Control:</strong> The first three bites give you 90% of the pleasure. Split plates with friends so you can taste without the "sugar load".</p>
                        <p><strong>04 Timing & Movement:</strong> Never eat high-carb street food on an empty stomach. A 10-minute walk immediately after eating street snacks can reduce your post-meal spike by 20-30%.</p>
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mt-14 mb-2">10 Iconic Delhi Street Foods — What to Eat, Swap, or Skip</h2>
                    <p className="text-slate-500 mb-10 text-lg">Your field guide to Delhi's culinary map.</p>

                    <div className="space-y-6">
                        {streetFoods.map((item) => (
                            <div key={item.number} className="border border-gray-100 rounded-3xl p-7 hover:border-[#4CAF50]/40 hover:shadow-md transition-all group">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#4CAF50]/10 flex items-center justify-center shrink-0">
                                        <span className="text-[#217328] font-black">{item.number}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 mb-4">{item.concern}</p>
                                        <div className="bg-slate-50 p-4 rounded-xl mb-4">
                                            <p className="text-sm"><strong>The Smart Swap:</strong> {item.swap}</p>
                                        </div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.verdict.includes('✔') ? 'bg-green-100 text-green-700' : item.verdict.includes('⚠') ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                                                {item.verdict}
                                            </span>
                                            <span className="text-sm text-slate-500 italic">{item.reason}</span>
                                        </div>
                                        {item.tip && (
                                            <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                                                <span className="text-amber-500 font-black text-xs uppercase shrink-0 mt-0.5">Pro Tip:</span>
                                                <p className="text-amber-800 text-sm">{item.tip}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mt-14 mb-6">Quick Reference Table</h2>
                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="p-4 font-black">Street Food</th>
                                    <th className="p-4 font-black">Verdict</th>
                                    <th className="p-4 font-black">Why</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {streetFoods.map((f) => (
                                    <tr key={f.title} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold">{f.title}</td>
                                        <td className="p-4 whitespace-nowrap">{f.verdict}</td>
                                        <td className="p-4 text-slate-500">{f.reason}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mt-14 mb-6">The Hidden Sugar Traps You Probably Didn't Know About</h2>
                    <p className="text-slate-600 mb-8">Even the "healthy" looking choices can be dangerous if you don't know what's inside. Look out for these ✗ markers:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {trappingItems.map((item) => (
                            <div key={item.label} className="bg-red-50 border border-red-100 p-5 rounded-2xl flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-red-200 text-red-600 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">{item.icon}</span>
                                <div>
                                    <p className="font-bold text-slate-800 text-sm">{item.label}</p>
                                    <p className="text-slate-500 text-sm mt-0.5">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mt-14 mb-4">How a Good Nutritionist in Delhi Makes Street Food Work For You</h2>
                    <p className="text-slate-600 mb-6">
                        You might be wondering: "If I have to skip so much, why even bother?" This is where professional guidance makes the difference. Generic diabetes charts simply tell you "No." A <strong>good nutritionist in Delhi</strong> tells you "How." By understanding your actual lifestyle, cultural food habits, and how <em>your</em> specific body responds to glucose, we build a plan that includes the foods you love.
                    </p>
                    <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                        <h2 className="text-2xl font-black mb-2">How Dietitian at Home Supports Diabetics</h2>
                        <p className="text-white/80 mb-8 leading-relaxed">Continuous support leads to measurable results. We don't just give a chart; we give an ecosystem.</p>
                        <div className="space-y-4 mb-8">
                            {[
                                { icon: "🏠", text: "Home Visits: We come to you in Gurgaon and Delhi NCR for checkups." },
                                { icon: "📞", text: "Weekly Calls: Your dietitian adjusts your plan based on your weekend eating." },
                                { icon: "📋", text: "Data-Driven Plans: We use your CGMs and glucose logs to refine your swaps." },
                                { icon: "📱", text: "App Tracking: Log your street food in the app to see the impact instantly." },
                            ].map((point) => (
                                <div key={point.text} className="flex items-start gap-4 bg-white/10 rounded-2xl px-5 py-4">
                                    <span className="text-xl shrink-0">{point.icon}</span>
                                    <p className="text-white/90 text-sm leading-snug">{point.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/programs/diabetes-management" className="inline-block bg-white text-[#217328] px-6 py-3 rounded-2xl font-black text-sm uppercase text-center">Explore Diabetes Program</Link>
                            <Link href="/how-it-works" className="inline-block bg-white/10 text-white border border-white/20 px-6 py-3 rounded-2xl font-black text-sm uppercase text-center">How It Works</Link>
                        </div>
                    </div>

                    <blockquote className="my-10 px-8 py-5 border-l-8 border-[#217328] bg-gray-50 rounded-r-3xl">
                        <p className="italic text-2xl font-semibold text-slate-800 leading-snug mb-3">
                            "Managing diabetes in Delhi is not about giving up chaat — it's about understanding which chaat, how much, and when. That's exactly what the <strong>best dietitians in Delhi</strong> help you figure out."
                        </p>
                        <p className="text-slate-500 text-sm font-medium">— Dietitian at Home, Delhi NCR</p>
                    </blockquote>

                    <h2 className="text-3xl font-black text-slate-900 mt-14 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Can a Type 2 diabetic eat golgappe?", a: "Yes, in moderation. Stick to 3-4 pieces, swap potato for sprouts, and skip the sweet chutney. The spicy water is generally diabetic-friendly." },
                            { q: "Is bhutta (corn) safe for diabetics?", a: "Yes! Bhutta is a whole grain with a moderate GI and high fiber. It's one of the safest street food options in Delhi." },
                            { q: "What is the safest street food for diabetics in Delhi?", a: "Tandoori items like Paneer Tikka or roasted Bhutta are the safest because they are low in refined carbs and higher in protein/fiber." },
                            { q: "How do I know if a food is spiking my blood sugar?", a: "Test your blood sugar 2 hours after the meal. A good nutritionist in Delhi recommends staying below 140 mg/dL post-meal for optimal management." },
                            { q: "Should I consult a dietitian or just follow a diabetes diet chart?", a: "Always consult a professional. Generic charts don't account for your specific metabolic response, medication, or cultural habits. A good nutritionist in Delhi provides the personalization needed for success." }
                        ].map((item, i) => (
                            <details key={i} className="group border border-gray-100 rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-bold text-slate-800 hover:bg-slate-50 transition-colors">
                                    <span>{item.q}</span>
                                    <svg className="w-5 h-5 text-[#217328] transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 5v14m-7-7h14" /></svg>
                                </summary>
                                <div className="px-6 pb-5 pt-0 text-slate-600 border-t border-gray-100"><p className="pt-4">{item.a}</p></div>
                            </details>
                        ))}
                    </div>

                    <div className="mt-14 pt-8 border-t border-gray-100">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-5">Related Reading</p>
                        <div className="grid sm:grid-cols-3 gap-3">
                            <Link href="/how-it-works" className="block bg-slate-50 p-5 rounded-2xl hover:bg-emerald-50 transition-colors"><p className="font-black text-sm">How It Works →</p></Link>
                            <Link href="/programs/diabetes-management" className="block bg-slate-50 p-5 rounded-2xl hover:bg-emerald-50 transition-colors"><p className="font-black text-sm">Diabetes Program →</p></Link>
                            <Link href="/pricing" className="block bg-slate-50 p-5 rounded-2xl hover:bg-emerald-50 transition-colors"><p className="font-black text-sm">View Pricing →</p></Link>
                        </div>
                    </div>

                    <p className="text-xs text-slate-400 mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <strong>Medical Disclaimer:</strong> This blog is for informational purposes only and does not constitute medical advice. Please consult your doctor and a qualified dietitian before making changes to your diabetes management plan.
                    </p>
                </article>

                {/* ── SIDEBAR ── */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-8">
                        <div className="bg-slate-50 p-7 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
                                    <Image src="/anita-menon.jpg" alt="Anita Menon" width={64} height={64} className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-base font-black text-slate-900 leading-tight">Anita Menon</h4>
                                    <p className="text-[#217328] font-bold text-xs">Lead Clinical Dietitian</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm mb-5">Our team specializes in managing diabetes through personalized, home-based nutrition care across Gurgaon and Delhi NCR.</p>
                            <Link href="/contact" className="text-[#217328] font-black text-xs uppercase hover:underline">Book a Consultation →</Link>
                        </div>
                        <div className="bg-white p-7 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-sm font-black text-slate-900 mb-5 uppercase tracking-tight">Stats in Focus</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                    <span className="text-2xl font-black text-[#217328]">77M+</span>
                                    <p className="text-slate-600 text-xs text-wrap leading-snug">Diabetics in India — 2nd highest globally</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                    <span className="text-2xl font-black text-[#217328]">1/6</span>
                                    <p className="text-slate-600 text-xs text-wrap leading-snug">Delhi NCR adults have prediabetes or diabetes</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                                    <span className="text-2xl font-black text-[#217328]">Weekly</span>
                                    <p className="text-slate-600 text-xs text-wrap leading-snug">Plan adjustments = dramatically better outcomes</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-7 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-sm font-black text-slate-900 mb-5 uppercase">Quick Links</h4>
                            <div className="space-y-3">
                                <Link href="/programs/diabetes-management" className="block bg-slate-50 p-4 rounded-xl font-bold text-sm hover:bg-[#217328] hover:text-white transition-all">Diabetes Management</Link>
                                <Link href="/programs/weight-management" className="block bg-slate-50 p-4 rounded-xl font-bold text-sm hover:bg-[#217328] hover:text-white transition-all">Weight Management</Link>
                                <Link href="/programs/thyroid-management" className="block bg-slate-50 p-4 rounded-xl font-bold text-sm hover:bg-[#217328] hover:text-white transition-all">Thyroid Management</Link>
                                <Link href="/how-it-works" className="block bg-slate-50 p-4 rounded-xl font-bold text-sm hover:bg-[#217328] hover:text-white transition-all">How It Works</Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5 text-wrap">Ready to eat smarter with diabetes?</h2>
                    <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">Take control of your blood sugar today with home-based nutrition care.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-[#217328] text-white px-10 py-5 rounded-2xl font-black uppercase text-sm shadow-xl hover:-translate-y-1 transition-all">Get Started Now</Link>
                        <Link href="/programs/diabetes-management" className="bg-white text-slate-900 border border-gray-200 px-10 py-5 rounded-2xl font-black uppercase text-sm hover:bg-gray-50 transition-all text-center">Explore Diabetes Program</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

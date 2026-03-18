import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Iron-Rich Indian Foods for Pregnancy | Dietitian in Noida – Dietitian at Home",
    description: "Tired of spinach? Discover 12+ iron-rich Indian foods perfect for pregnant women. Expert guidance from the best nutritionist in Noida — now available at your home.",
    keywords: "dietitian in noida, best nutritionist in noida, iron rich foods pregnancy, Indian foods for pregnant women, iron deficiency pregnancy, nutrition during pregnancy India, home dietitian Noida, pregnancy nutrition",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/iron-rich-indian-foods-pregnancy-guide',
    },
    openGraph: {
        title: "Iron-Rich Indian Foods for Pregnancy | Dietitian in Noida – Dietitian at Home",
        description: "Tired of spinach? Discover 12+ iron-rich Indian foods perfect for pregnant women. Expert guidance from the best nutritionist in Noida.",
        url: 'https://dieticianathome.com/blog/iron-rich-indian-foods-pregnancy-guide',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/images/blog/iron-rich-indian-foods-pregnancy.jpg',
                width: 1200,
                height: 630,
                alt: 'Iron-rich Indian foods for pregnant women — thali with rajma, methi, til and pomegranate',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Iron-Rich Indian Foods for Pregnancy | Dietitian in Noida",
        description: "12+ iron-rich Indian foods for pregnant women beyond spinach. Expert nutrition guidance at home.",
        images: ['https://dieticianathome.com/images/blog/iron-rich-indian-foods-pregnancy.jpg'],
    },
};

const ironFoods = [
    {
        number: "01",
        name: "Rajma (Kidney Beans)",
        iron: "~8 mg / 100g cooked",
        desc: "A powerhouse of iron, protein, folate, and fibre. One bowl of rajma curry covers a solid chunk of your daily iron requirement.",
        tip: "How to use: Classic rajma chawal, rajma soup, or stuffed into a whole wheat roti with tomato chutney for a Vitamin C boost.",
        protip: "Soak overnight and cook with a tomato-based gravy or squeeze of lemon to maximize iron absorption.",
    },
    {
        number: "02",
        name: "Chana Dal & Kala Chana",
        iron: "~5–6 mg / 100g cooked",
        desc: "Both yellow chana and whole black chickpeas are excellent iron sources. Kala chana has a lower glycaemic index — a bonus for blood sugar management during pregnancy.",
        tip: "How to use: Kala chana chaat with diced tomatoes and coriander, chana dal tadka, or boiled kala chana as a snack with lime and chaat masala.",
    },
    {
        number: "03",
        name: "Methi (Fenugreek Leaves)",
        iron: "~13 mg / 100g raw",
        desc: "The unsung hero. Fresh methi leaves contain significantly more iron per 100g than spinach — yet most people never think of it as an iron food.",
        tip: "How to use: Methi paratha, aloo methi sabzi, methi dal, or mixed into roti dough. Kasuri methi can be sprinkled into curries year-round.",
        caution: "Keep portions to standard culinary amounts in the third trimester. Check with your dietitian if unsure.",
    },
    {
        number: "04",
        name: "Chaulai / Amaranth Leaves",
        iron: "~2.3 mg / 100g cooked",
        desc: "Commonly eaten across UP, Bihar, Rajasthan, and Maharashtra. Loaded with iron, calcium, and Vitamin C — a natural absorption win in a single ingredient.",
        tip: "How to use: Chaulai saag with garlic and green chilli, mixed into moong dal, or blended into a paratha filling.",
    },
    {
        number: "05",
        name: "Til (Sesame Seeds)",
        iron: "~14 mg / 100g",
        desc: "Sesame seeds are exceptionally iron-dense. Black til is slightly higher in iron than white. Easy to add to any meal without changing its character.",
        tip: "How to use: Til chutney as a dip, sprinkled over salads or rice, added to raita, or as til ladoo for a sweet iron-boosting snack.",
    },
    {
        number: "06",
        name: "Horsegram (Kulthi Dal)",
        iron: "~7 mg / 100g",
        desc: "Popular in South Indian, Rajasthani, and Chhattisgarhi cooking. High in iron, protein, and polyphenols. Best consumed in moderate quantities during pregnancy.",
        tip: "How to use: Kulthi rasam, kulthi ki sabzi, or mixed into a hearty soup.",
    },
    {
        number: "07",
        name: "Dried Figs & Dates (Anjeer & Khajoor)",
        iron: "~2–3 mg / 100g",
        desc: "Convenient, zero-cooking iron sources that have been traditionally eaten during pregnancy in Indian households — and for very good reason.",
        tip: "How to use: Soak 2–3 anjeer overnight and eat in the morning. Have 2–3 medjool dates as an evening snack with a glass of orange juice.",
        caution: "Dates are calorie-dense — keep portions mindful if blood sugar is a concern.",
    },
    {
        number: "08",
        name: "Jaggery (Gud)",
        iron: "~11 mg / 100g",
        desc: "Unrefined jaggery — especially the darker variety — carries iron alongside magnesium and potassium. Replacing refined sugar with jaggery daily adds up meaningfully.",
        tip: "How to use: Swap sugar in your chai, make gud-chana snacks, or combine with til for til-gud ladoos — a double iron hit.",
    },
    {
        number: "09",
        name: "Lotus Seeds / Makhana",
        iron: "~1.4 mg / 100g",
        desc: "Frequently recommended during pregnancy for easy digestibility. Not the highest in iron but a smart daily snack that contributes consistently.",
        tip: "How to use: Roasted makhana with ghee and rock salt, makhana kheer sweetened with jaggery, or tossed into raita.",
    },
    {
        number: "10",
        name: "Bajra (Pearl Millet)",
        iron: "~8 mg / 100g dry",
        desc: "Among all Indian grains, bajra stands out for iron content. A Rajasthani staple that's underused in urban kitchens — and it shouldn't be.",
        tip: "How to use: Bajra roti with ghee and raw onion, bajra khichdi, or bajra porridge as a breakfast.",
    },
    {
        number: "11",
        name: "Moringa Leaves (Sahjan / Drumstick)",
        iron: "~28 mg / 100g dry powder",
        desc: "One of the most iron-dense plant foods in the world. Fresh moringa leaves are common in South Indian cooking and increasingly available in Delhi NCR markets.",
        tip: "How to use: Moringa stir-fried with dal, moringa paratha stuffing, or a teaspoon of moringa powder stirred into roti dough.",
        caution: "Stick to leaf preparations in culinary quantities. Check with your dietitian before using moringa powder supplements.",
    },
    {
        number: "12",
        name: "Pomegranate (Anar)",
        iron: "~0.3 mg + high Vitamin C",
        desc: "Modest iron content on its own, but its high Vitamin C makes it a brilliant companion food that significantly boosts iron absorption from the rest of your meal.",
        tip: "How to use: Add pomegranate seeds to dal, serve alongside rajma, or drink a fresh glass of anar juice 30 minutes after an iron-rich lunch.",
    },
];

const mealPlan = [
    { time: "7:00 AM", label: "Early Morning", meal: "Soaked anjeer (2 pieces) + small glass of amla juice or nimbu paani" },
    { time: "8:30 AM", label: "Breakfast", meal: "Bajra or methi paratha (2) with homemade tomato chutney + small bowl of kala chana chaat" },
    { time: "11:00 AM", label: "Mid-Morning", meal: "A handful of roasted til + 2 dates + 1 orange" },
    { time: "1:00 PM", label: "Lunch", meal: "Rajma curry + brown rice or bajra roti + chaulai saag sabzi + tomato salad", note: "Avoid curd/lassi within 1 hour — have it separately in the afternoon." },
    { time: "4:00 PM", label: "Evening Snack", meal: "Curd with makhana + a small piece of jaggery", note: "This is your calcium window — keep it separate from iron-heavy meals." },
    { time: "7:30 PM", label: "Dinner", meal: "Kulthi dal or masoor dal tadka + methi roti + roasted drumstick sabzi" },
    { time: "9:30 PM", label: "Before Bed", meal: "Warm haldi doodh (turmeric milk) if needed" },
];

const faqs = [
    {
        q: "Can I get enough iron from an Indian vegetarian diet during pregnancy?",
        a: "Yes — with careful planning. Indian vegetarian food has excellent iron sources, but non-haeme iron from plants requires smart Vitamin C pairing and avoiding inhibitors like tea at mealtimes. A structured meal plan makes this very achievable.",
    },
    {
        q: "How do I know if I have iron deficiency during pregnancy?",
        a: "Fatigue, pale skin, breathlessness, and frequent headaches are common signs. A serum ferritin and haemoglobin test will confirm your levels. Always consult your OB/GYN and a qualified dietitian to interpret results.",
    },
    {
        q: "Is it safe to eat methi every day during pregnancy?",
        a: "In culinary amounts — a paratha, a sabzi — yes, methi is safe and beneficial through most of pregnancy. In very large medicinal quantities, especially in the third trimester, check with your doctor. Day-to-day cooking portions are generally fine.",
    },
    {
        q: "Should I stop eating spinach after reading this?",
        a: "Not at all! Spinach is a fine iron source. This guide is about expanding your options so you're not dependent on a single food and you actually enjoy your meals through pregnancy. Variety is the goal.",
    },
];

export default function IronRichFoodsBlog() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Iron-Rich Indian Foods That Aren't Spinach: A Practical Guide for Pregnant Women",
        "description": "Discover 12+ iron-rich Indian foods for pregnant women beyond spinach. Expert guidance from a dietitian in Noida — available at your home through Dietitian at Home.",
        "image": "https://dieticianathome.com/images/blog/iron-rich-indian-foods-pregnancy.jpg",
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
        "datePublished": "2026-03-18",
        "dateModified": "2026-03-18",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/iron-rich-indian-foods-pregnancy-guide"
        },
        "keywords": "dietitian in noida, best nutritionist in noida, iron rich foods pregnancy, Indian foods for pregnant women, pregnancy nutrition India"
    };

    return (
        <div className="bg-white min-h-screen pt-28 pb-16 mt-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-6 mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-500 font-medium flex-wrap">
                    <li><Link href="/" className="hover:text-[#217328] transition-colors">Home</Link></li>
                    <li className="flex items-center space-x-2">
                        <span>/</span>
                        <Link href="/blog" className="hover:text-[#217328] transition-colors">Blog</Link>
                    </li>
                    <li className="flex items-center space-x-2 text-gray-400">
                        <span>/</span>
                        <span className="truncate max-w-[200px] md:max-w-none">Iron-Rich Indian Foods for Pregnancy</span>
                    </li>
                </ol>
            </nav>

            {/* Hero */}
            <header className="max-w-7xl mx-auto px-6 mb-12">
                <div className="mb-6 flex flex-wrap gap-3">
                    <span className="bg-[#4CAF50]/10 text-[#217328] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        Pregnancy Nutrition
                    </span>
                    <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        10 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                    Iron-Rich Indian Foods That Aren&apos;t Spinach:{' '}
                    <span className="text-[#217328]">A Practical Guide for Pregnant Women</span>
                </h1>
            </header>

            {/* Two-column layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* ── MAIN ARTICLE ── */}
                <article className="lg:w-2/3">

                    {/* Hero Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="https://dieticianathome.com/images/blog/iron-rich-indian-foods-pregnancy.jpg"
                            alt="Pregnant Indian woman with iron-rich foods — rajma, methi, til and pomegranate on a wooden table"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        {/* Intro */}
                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            If you&apos;re pregnant and your doctor has flagged low iron levels, chances are someone has already told you: <em>&quot;Eat more spinach.&quot;</em> And while palak is a decent source, eating it every single day gets old fast. The good news? Indian cuisine is one of the richest food traditions in the world for iron-dense ingredients — and most of them are already sitting in your kitchen.
                        </p>

                        <p>
                            Dal, rajma, methi, til, chaulai, dried fruits, jaggery — these aren&apos;t exotic add-ons. This guide is built for pregnant women who want practical, tasty, and culturally familiar iron sources beyond the spinach rut. As a{' '}
                            <strong>dietitian in Noida</strong> working with pregnant women across Delhi NCR, I&apos;ve seen firsthand how the right food choices — consistently made — can bring haemoglobin levels back up without supplements alone.
                        </p>

                        {/* Section 1 — Why Iron Matters */}
                        <h2 className="text-3xl font-black mt-12 mb-4">Why Iron Matters More Than Ever During Pregnancy</h2>
                        <p>
                            During pregnancy, your blood volume increases by nearly 50%. Your body is building an entirely new circulatory system for your baby — and iron is what makes haemoglobin, the protein that carries oxygen to both you and your growing child.
                        </p>

                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 my-6">
                            <p className="font-bold text-slate-800 mb-3">Iron deficiency anaemia during pregnancy is linked to:</p>
                            <ul className="space-y-2 list-none p-0 m-0">
                                {["Fatigue and breathlessness", "Preterm birth risk", "Low birth weight", "Impaired cognitive development in the newborn", "Postpartum complications"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-slate-700">
                                        <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p>
                            The ICMR recommends <strong>35 mg of iron per day</strong> for pregnant women — nearly double the requirement for non-pregnant adults. Most women aren&apos;t hitting this through diet alone, which is why professional guidance from a{' '}
                            <strong>dietitian in Noida</strong> or your city can make a real difference.
                        </p>

                        <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 my-8">
                            <h3 className="text-lg font-bold text-[#217328] mb-3">Important: Absorption Basics</h3>
                            <p className="text-slate-800 m-0">
                                Iron from plant-based sources (non-haeme iron) is absorbed differently than iron from meat and fish. <strong>Pairing non-haeme iron foods with Vitamin C dramatically improves absorption.</strong> Avoiding tea and coffee within an hour of iron-rich meals matters just as much as what you eat.
                            </p>
                        </div>

                        {/* Section 2 — 12 Foods */}
                        <h2 className="text-3xl font-black mt-14 mb-2">12 Iron-Rich Indian Foods to Add Right Now</h2>
                        <p className="text-slate-500 mt-0 mb-8">Ranked, sourced, and explained — with practical Indian kitchen tips for each.</p>

                    </div>

                    {/* Food Cards Grid */}
                    <div className="space-y-6 mb-12">
                        {ironFoods.map((food) => (
                            <div key={food.number} className="bg-white border border-gray-100 rounded-[2rem] p-7 shadow-sm hover:shadow-md hover:border-[#4CAF50]/30 transition-all">
                                <div className="flex items-start gap-5">
                                    <span className="text-4xl font-black text-[#4CAF50]/20 leading-none shrink-0 mt-1">{food.number}</span>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-xl font-black text-slate-900 m-0">{food.name}</h3>
                                            <span className="bg-[#4CAF50]/10 text-[#217328] text-xs font-bold px-3 py-1 rounded-full">{food.iron}</span>
                                        </div>
                                        <p className="text-slate-600 text-base leading-relaxed mb-3">{food.desc}</p>
                                        <p className="text-slate-700 text-sm bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                                            🍽️ <span className="font-semibold">Usage:</span> {food.tip.replace("How to use: ", "")}
                                        </p>
                                        {food.protip && (
                                            <p className="text-[#217328] text-sm mt-2 font-medium">
                                                💡 Pro tip: {food.protip}
                                            </p>
                                        )}
                                        {food.caution && (
                                            <p className="text-amber-700 text-sm mt-2 bg-amber-50 rounded-xl px-4 py-2 border border-amber-100">
                                                ⚠️ <span className="font-semibold">Note:</span> {food.caution}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        {/* Section 3 — Absorption */}
                        <h2 className="text-3xl font-black mt-14 mb-6">The Absorption Problem Nobody Talks About</h2>
                        <p>Getting iron into your food is only half the battle. Getting it <em>into your body</em> is the other half.</p>

                        <div className="grid md:grid-cols-2 gap-5 my-8 not-prose">
                            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                                <h4 className="text-green-800 font-black text-lg mb-4 flex items-center gap-2">
                                    <span className="w-7 h-7 bg-green-200 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                                    Boost Absorption With
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "Vitamin C — lemon, amla, tomato, anar, guava, green chilli",
                                        "Fermented foods — idli, dosa, dhokla, kanji",
                                        "Cooking in an iron kadhai",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-slate-700 text-sm">
                                            <span className="text-green-500 mt-0.5 shrink-0">→</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                                <h4 className="text-red-800 font-black text-lg mb-4 flex items-center gap-2">
                                    <span className="w-7 h-7 bg-red-200 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                                    Avoid Pairing With
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "Tea & coffee — tannins block iron absorption significantly",
                                        "Dairy (milk, curd, paneer) — calcium competes with iron",
                                        "Excess whole bran cereals at the same meal",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-slate-700 text-sm">
                                            <span className="text-red-500 mt-0.5 shrink-0">→</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p>
                            This is a nuanced area where personalised guidance genuinely helps. A professional{' '}
                            <Link href="/contact" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                dietitian in Noida
                            </Link>{' '}
                            who understands your actual meal patterns can build an iron-optimised plan that works around your habits — not a generic chart.
                        </p>

                        {/* Section 4 — Sample Day */}
                        <h2 className="text-3xl font-black mt-14 mb-6">A Sample Iron-Rich Pregnancy Day (Indian Diet)</h2>
                        <p>Here&apos;s what a well-structured, iron-focused pregnancy day might look like:</p>

                    </div>

                    {/* Meal Plan Timeline */}
                    <div className="relative my-10 not-prose">
                        <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-[#4CAF50]/20 hidden sm:block"></div>
                        <div className="space-y-5">
                            {mealPlan.map((item) => (
                                <div key={item.time} className="flex gap-5 items-start">
                                    <div className="shrink-0 w-16 text-right">
                                        <span className="text-xs font-bold text-[#217328] bg-[#4CAF50]/10 px-2 py-1 rounded-lg block">{item.time}</span>
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-[#4CAF50] mt-2 shrink-0 hidden sm:block ring-4 ring-white relative z-10"></div>
                                    <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                                        <p className="font-black text-slate-800 text-sm mb-1">{item.label}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.meal}</p>
                                        {item.note && (
                                            <p className="text-amber-700 text-xs mt-2 italic">{item.note}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        {/* Section 5 — When diet isn't enough */}
                        <h2 className="text-3xl font-black mt-14 mb-6">When Diet Alone Isn&apos;t Enough</h2>
                        <p>
                            For many pregnant women — especially those starting with borderline or low haemoglobin — diet optimisation needs to go alongside prescribed iron supplementation. These are not competing approaches: food builds long-term, sustainable iron levels; supplements give you the immediate boost.
                        </p>
                        <p>
                            But supplements can cause constipation, nausea, and stomach upset. A well-structured diet that includes Vitamin C with every iron meal, limits tea timing, and maximises absorption through fermented foods can make supplementation more tolerable and effective. This is the kind of practical, personalised guidance you get when you work with the{' '}
                            <Link href="/contact" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                best nutritionist in Noida
                            </Link>{' '}
                            through Dietitian at Home — not a printed chart, but a real plan built around your test reports, your trimester, and your lifestyle.
                        </p>

                        {/* Inline CTA */}
                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl not-prose">
                            <h3 className="text-2xl font-black mb-3">Expecting? Let&apos;s Build Your Iron Plan.</h3>
                            <p className="text-white/90 text-base mb-8 font-medium leading-relaxed">Our pregnancy nutrition specialists review your blood work, understand your food preferences, and build a practical weekly plan — delivered at your doorstep across Noida, Gurgaon &amp; Delhi NCR.</p>
                            <Link href="/programs/pregnancy-nutrition" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1 shadow-lg">
                                Explore Pregnancy Programme
                            </Link>
                        </div>

                        {/* Section 6 — Professional Guidance */}
                        <h2 className="text-3xl font-black mt-12 mb-6">Why Pregnancy Nutrition Needs a Professional</h2>
                        <p>
                            Pregnancy isn&apos;t a time to experiment with internet advice. Every trimester has different nutritional priorities, and iron needs in your first trimester are different from your third. If you have gestational diabetes, thyroid issues, or a PCOD history, the picture becomes even more complex.
                        </p>
                        <p>
                            Working with a{' '}
                            <Link href="/programs/pregnancy-nutrition" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                dietitian in Noida
                            </Link>{' '}
                            who specialises in pregnancy nutrition means: a meal plan built around your actual blood work, weekly adjustments as your pregnancy progresses, practical Indian food options you&apos;ll actually eat, and guidance that accounts for your specific medical context.
                        </p>
                        <p>
                            At Dietitian at Home, our{' '}
                            <Link href="/programs/pregnancy-nutrition" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                pregnancy nutrition programme
                            </Link>{' '}
                            combines weekly dietitian consultations with monthly at-location assessments. And because we come to you, there&apos;s no clinic trip, no waiting room, no disruption to your routine. You can also explore our{' '}
                            <Link href="/programs/postpartum-care" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                postpartum nutrition care
                            </Link>{' '}
                            for after delivery — iron replenishment post-birth matters just as much.
                        </p>

                    </div>

                    {/* FAQ Section */}
                    <div className="mt-14 mb-12">
                        <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <p className="font-black text-slate-900 mb-2 text-base">Q: {faq.q}</p>
                                    <p className="text-slate-600 text-base leading-relaxed m-0">A: {faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">
                        <h2 className="text-3xl font-black text-[#217328]">The Bottom Line</h2>
                        <p>
                            Indian cuisine doesn&apos;t need to be modified to be pregnancy-friendly — it already <em>is</em>, if you know which ingredients to lean on. Rajma, bajra, methi, til, moringa, kulthi, jaggery, chaulai — these are real, accessible, delicious foods that have been nourishing pregnant Indian women for generations.
                        </p>
                        <p>
                            The difference between a good diet and a great one during pregnancy often comes down to the details: the timing of your chai, the squeeze of lemon in your dal, the anjeer you soaked the night before. Small habits with meaningful impact.
                        </p>
                        <p>
                            If you&apos;re looking for structured, personalised guidance,{' '}
                            <Link href="/how-it-works" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                see how it works
                            </Link>{' '}
                            or{' '}
                            <Link href="/contact" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                get in touch today
                            </Link>{' '}
                            — we cover Noida, Gurgaon, and Delhi NCR, and we come to you.
                        </p>

                        {/* Author Disclaimer */}
                        <p className="text-sm text-slate-500 italic border-t border-gray-100 pt-6">
                            <em>Anita Menon is Lead Clinical Dietitian at Dietitian at Home, specialising in pregnancy and prenatal nutrition, PCOD care, and metabolic health. All dietary guidance in this article is for informational purposes only and does not replace individual medical or nutritional advice. Consult your healthcare provider before making significant changes to your pregnancy diet.</em>
                        </p>
                    </div>

                    {/* Related Reading */}
                    <div className="mt-12 not-prose">
                        <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">Related Reading</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { label: "Understanding PCOD: Nutrition Strategies That Work", href: "/blog/understanding-pcod-nutrition-strategies" },
                                { label: "Pregnancy Nutrition Programme", href: "/programs/pregnancy-nutrition" },
                                { label: "Postpartum Nutrition Care", href: "/programs/postpartum-care" },
                                { label: "How Dietitian at Home Works", href: "/how-it-works" },
                            ].map((link) => (
                                <Link key={link.href} href={link.href} className="block bg-white border border-gray-100 rounded-2xl p-4 hover:border-[#217328] hover:shadow-sm transition-all group">
                                    <span className="font-bold text-slate-700 text-sm group-hover:text-[#217328] transition-colors">{link.label}</span>
                                    <span className="block text-[#217328] text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Read more →</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                </article>

                {/* ── SIDEBAR ── */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-10">

                        {/* Author Card */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
                                    <Image
                                        src="/anita-menon.jpg"
                                        alt="Anita Menon — Lead Clinical Dietitian"
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
                                Specialising in pregnancy nutrition, women&apos;s metabolic health, and PCOD care, Anita has helped hundreds of families across Delhi NCR through structured at-home diet programmes.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                                View All Experts
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        {/* Quick Iron Reference */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-base font-black text-slate-900 mb-5 uppercase tracking-tight">Quick Iron Reference</h4>
                            <div className="space-y-3">
                                {[
                                    { food: "Moringa leaves", value: "28 mg", color: "bg-[#217328]" },
                                    { food: "Sesame seeds (Til)", value: "14 mg", color: "bg-[#2e8b3a]" },
                                    { food: "Methi leaves", value: "13 mg", color: "bg-[#3a9e47]" },
                                    { food: "Jaggery (Gud)", value: "11 mg", color: "bg-[#4CAF50]" },
                                    { food: "Rajma", value: "8 mg", color: "bg-[#66bb6a]" },
                                    { food: "Bajra", value: "8 mg", color: "bg-[#81c784]" },
                                    { food: "Horsegram (Kulthi)", value: "7 mg", color: "bg-[#a5d6a7]" },
                                ].map((item) => (
                                    <div key={item.food} className="flex items-center gap-3">
                                        <div className={`${item.color} h-2 rounded-full transition-all`} style={{ width: `${(parseInt(item.value) / 28) * 100}%`, minWidth: '12px' }}></div>
                                        <span className="text-slate-700 text-sm font-medium shrink-0">{item.food}</span>
                                        <span className="text-[#217328] font-black text-xs ml-auto shrink-0">{item.value}</span>
                                    </div>
                                ))}
                                <p className="text-slate-400 text-xs pt-1">Per 100g • approximate values</p>
                            </div>
                        </div>

                        {/* Related Services */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-base font-black text-slate-900 mb-5 uppercase tracking-tight">Our Programmes</h4>
                            <div className="space-y-3">
                                {[
                                    { label: "Pregnancy Nutrition", href: "/programs/pregnancy-nutrition" },
                                    { label: "Postpartum Care", href: "/programs/postpartum-care" },
                                    { label: "Weight Management", href: "/programs/weight-management" },
                                    { label: "How It Works", href: "/how-it-works" },
                                ].map((item) => (
                                    <Link key={item.href} href={item.href} className="block group">
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                            <span className="font-bold text-slate-800 text-sm">{item.label}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all text-lg">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <h4 className="text-2xl font-black mb-3 relative z-10">Pregnant & Need Iron Guidance?</h4>
                            <p className="opacity-90 mb-7 text-sm font-medium relative z-10 leading-relaxed">We come to your home. Weekly dietitian calls + monthly at-location assessments. Covering Noida, Gurgaon & Delhi NCR.</p>
                            <Link href="/contact" className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg text-sm">
                                Book a Consultation
                            </Link>
                        </div>

                    </div>
                </aside>
            </div>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">
                        Ready to build your pregnancy nutrition plan?
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Work with the <strong>best nutritionist in Noida</strong> — from the comfort of your home. Personalised, data-driven, and built around real Indian food.
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
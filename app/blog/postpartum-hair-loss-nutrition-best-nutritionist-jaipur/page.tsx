import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Postpartum Hair Loss & Nutrition | Best Nutritionist in Jaipur",
    description: "Struggling with hair fall after delivery? The best nutritionist in Jaipur explains the nutrition-hair loss connection and how to stop postpartum hair fall with the right diet. Find the best dietitian near me today.",
    keywords: "postpartum hair loss, best nutritionist in jaipur, best dietitian near me, hair fall after delivery, postpartum nutrition, iron deficiency hair loss, biotin for hair, postpartum care diet, nutrition for hair loss",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/postpartum-hair-loss-nutrition-best-nutritionist-jaipur',
    },
    openGraph: {
        title: "Postpartum Hair Loss & Nutrition | Best Nutritionist in Jaipur",
        description: "Struggling with hair fall after delivery? The best nutritionist in Jaipur explains the nutrition-hair loss connection. Find the best dietitian near me today.",
        url: 'https://dieticianathome.com/blog/postpartum-hair-loss-nutrition-best-nutritionist-jaipur',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/postpartum-hair-loss-nutrition-best-nutritionist-jaipur.webp',
                width: 1200,
                height: 630,
                alt: 'Flat lay of iron-rich Indian foods for postpartum nutrition – methi, palak, almonds, sesame seeds on dark wood',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Postpartum Hair Loss & Nutrition | Best Nutritionist in Jaipur",
        description: "Hair fall after delivery? Learn the nutrition-hair fall connection from the best nutritionist in Jaipur.",
        images: ['https://dieticianathome.com/postpartum-hair-loss-nutrition-best-nutritionist-jaipur.webp'],
    },
};

export default function PostpartumHairLossBlogPost() {

    const category = "Postpartum Care";
    const readingTime = "10 min read";
    const publishDate = "April 9, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Postpartum Hair Loss and Nutrition: What the Best Nutritionist in Jaipur Wants Every New Mother to Know",
                "image": "https://dieticianathome.com/postpartum-hair-loss-nutrition-best-nutritionist-jaipur.webp",
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
                "datePublished": "2026-04-09",
                "dateModified": "2026-04-09",
                "description": "Struggling with hair fall after delivery? The best nutritionist in Jaipur explains the nutrition-hair loss connection and how to stop postpartum hair fall with the right diet.",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://dieticianathome.com/blog/postpartum-hair-loss-nutrition-best-nutritionist-jaipur"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "When does postpartum hair loss start and stop?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Postpartum hair loss typically begins around 2 to 4 months after delivery and peaks between months 4 to 6. With proper nutrition support, hair regrowth usually resumes within 6 to 12 months postpartum."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which nutrients are most important to stop postpartum hair loss?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Iron, protein, biotin, zinc, Vitamin D, and omega-3 fatty acids are the most critical nutrients for postpartum hair recovery. A clinical dietitian can assess your specific deficiencies and build a targeted plan."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a dietitian help with postpartum hair fall?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. A qualified dietitian can identify nutritional deficiencies contributing to postpartum hair loss and create a personalized meal plan to restore nutrient levels and support regrowth."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is postpartum hair loss permanent?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In most cases, postpartum hair loss is not permanent. However, untreated nutritional deficiencies — especially iron and protein — can prolong or worsen hair fall. Timely dietary correction makes a significant difference."
                        }
                    }
                ]
            }
        ]
    };

    const nutrients = [
        {
            num: "01",
            name: "Iron",
            tag: "Biggest Culprit",
            tagColor: "bg-red-100 text-red-700",
            desc: "Iron deficiency is one of the leading nutritional causes of hair loss in women. Blood loss during delivery depletes iron stores significantly. Low ferritin impairs oxygen delivery to hair follicle cells, pushing hairs into the resting phase prematurely.",
            foods: ["Palak, methi, bathua", "Rajma, chana, masoor dal", "Dried apricots, raisins, dates", "Sesame seeds, pumpkin seeds", "Jaggery (gud)", "Halim / garden cress seeds"],
            tip: "Always pair iron-rich foods with Vitamin C (amla, lemon, tomato) for better absorption."
        },
        {
            num: "02",
            name: "Protein",
            tag: "Building Block",
            tagColor: "bg-blue-100 text-blue-700",
            desc: "Hair is made of keratin — a protein. Without adequate dietary protein, your body diverts it to vital organs first, deprioritising hair growth. New mothers are often significantly under-eating protein.",
            foods: ["Whole eggs (yolk matters)", "Paneer, dahi, chaas, lassi", "Moong and masoor dal", "Chicken and fish (non-veg)", "Almonds, walnuts, sunflower seeds"],
            tip: "Target 70–80g of protein daily if breastfeeding. A high-protein breakfast prevents mid-day energy crashes."
        },
        {
            num: "03",
            name: "Biotin (B7)",
            tag: "Hair Vitamin",
            tagColor: "bg-yellow-100 text-yellow-700",
            desc: "Biotin supports keratin production. The increased demands of pregnancy and breastfeeding can deplete levels, contributing to brittle hair and increased shedding.",
            foods: ["Eggs (especially yolks)", "Peanuts, almonds", "Sweet potato", "Cauliflower, carrots", "Sunflower seeds"],
            tip: null
        },
        {
            num: "04",
            name: "Zinc",
            tag: "Often Overlooked",
            tagColor: "bg-purple-100 text-purple-700",
            desc: "Zinc plays a key role in hair tissue growth and repair. It keeps the oil glands around hair follicles working properly. Zinc deficiency — common in postpartum women — is a documented cause of hair loss.",
            foods: ["Pumpkin seeds (kaddu ke beej)", "Chickpeas (chane)", "Jowar, bajra, oats", "Dairy products", "Meat and poultry (non-veg)"],
            tip: null
        },
        {
            num: "05",
            name: "Vitamin D",
            tag: "Most Indians Deficient",
            tagColor: "bg-orange-100 text-orange-700",
            desc: "Vitamin D plays a role in creating new hair follicles and sustaining the growth phase. Low Vitamin D levels have been directly associated with diffuse hair loss in women. Dietary sources alone rarely meet the requirement.",
            foods: ["Fatty fish (salmon, mackerel)", "Egg yolks", "Fortified milk and cereals", "Morning sunlight — 15–20 min"],
            tip: "This is one nutrient where supervised supplementation is often warranted. Discuss with your dietitian."
        },
        {
            num: "06",
            name: "Omega-3",
            tag: "Anti-Inflammatory",
            tagColor: "bg-teal-100 text-teal-700",
            desc: "Omega-3s nourish hair follicles, reduce scalp inflammation, and support circulation to the hair root. Low omega-3 status is linked to dry, brittle hair and increased shedding.",
            foods: ["Walnuts (akhrot)", "Flaxseeds (alsi) — ground in roti atta", "Mustard oil", "Chia seeds", "Fatty fish (non-veg)"],
            tip: null
        }
    ];

    const traditionalFoods = [
        { name: "Gondh Laddoos", benefit: "Rich in calcium, iron & protein" },
        { name: "Methi Laddoos", benefit: "Fenugreek — iron & biotin-precursors" },
        { name: "Halim Seeds", benefit: "Highest plant-based iron source" },
        { name: "Dry Fruit Mix", benefit: "Dense in zinc, biotin & omega-3s" },
        { name: "Ajwain Water", benefit: "Supports nutrient absorption" },
        { name: "Ghee", benefit: "Aids fat-soluble vitamin absorption" },
    ];

    const mealPlan = [
        { time: "6–7 AM", label: "Early Morning", meal: "7–8 soaked almonds, 2 walnuts, methi/gondh laddoo, ajwain water or warm lemon water" },
        { time: "8–9 AM", label: "Breakfast", meal: "2 whole eggs + 2 multigrain rotis with ghee OR moong dal chilla + dahi + amla chutney" },
        { time: "11 AM", label: "Mid-Morning", meal: "Small bowl of dahi or chaas + seasonal fruit (papaya, oranges, guava)" },
        { time: "1–2 PM", label: "Lunch", meal: "2 rotis + dal + sabzi (palak/methi) + salad with lemon squeeze" },
        { time: "4–5 PM", label: "Evening Snack", meal: "Roasted pumpkin seeds + flaxseed powder in warm milk OR peanut chikki" },
        { time: "7:30–8:30 PM", label: "Dinner", meal: "2 rotis + sabzi + protein-rich dish (dal/paneer/chicken/fish)" },
        { time: "Before Bed", label: "Night", meal: "Warm haldi doodh (turmeric milk) — anti-inflammatory support" },
    ];

    const faqs = [
        {
            q: "When does postpartum hair loss start and stop?",
            a: "Postpartum hair loss typically begins around 2 to 4 months after delivery and peaks between months 4 to 6. With proper nutrition support, hair regrowth usually resumes within 6 to 12 months postpartum."
        },
        {
            q: "Which nutrients are most important to stop postpartum hair loss?",
            a: "Iron, protein, biotin, zinc, Vitamin D, and omega-3 fatty acids are the most critical nutrients for postpartum hair recovery. A clinical dietitian can assess your specific deficiencies and build a targeted plan."
        },
        {
            q: "Can a dietitian help with postpartum hair fall?",
            a: "Yes — significantly. A qualified dietitian identifies the specific nutritional gaps contributing to your hair loss and builds a structured, personalised meal plan to restore those levels and support regrowth. Far more effective than guessing with supplements."
        },
        {
            q: "Is postpartum hair loss permanent?",
            a: "In most cases, no. However, untreated nutritional deficiencies — particularly iron and protein — can prolong or worsen hair fall considerably. Timely dietary correction makes a meaningful difference in the speed and completeness of recovery."
        },
        {
            q: "Should I take biotin supplements for postpartum hair loss?",
            a: "Biotin supplements are widely marketed but most effective only when you have an actual deficiency. More frequently, iron deficiency and protein inadequacy are the primary drivers. A blood test and dietitian consultation will give you a far more targeted answer."
        },
        {
            q: "Can postpartum hair loss and thyroid problems happen together?",
            a: "Yes. Postpartum thyroid dysfunction affects 5–10% of new mothers and can cause hair loss that looks similar to telogen effluvium. If hair loss is severe or accompanied by fatigue, weight changes, or temperature sensitivity, a thyroid panel is important."
        }
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
                        <span className="truncate max-w-[200px] md:max-w-none">Postpartum Hair Loss & Nutrition</span>
                    </li>
                </ol>
            </nav>

            {/* Hero */}
            <header className="max-w-7xl mx-auto px-6 mb-12">
                <div className="mb-6 flex flex-wrap gap-3">
                    <span className="bg-[#4CAF50]/10 text-[#217328] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        {category}
                    </span>
                    <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        Women&apos;s Health
                    </span>
                    <span className="text-gray-500 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {readingTime}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">{publishDate}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                    Postpartum Hair Loss & Nutrition: What the{' '}
                    <span className="text-[#217328]">Best Nutritionist in Jaipur</span>{' '}
                    Wants Every New Mother to Know
                </h1>
            </header>

            {/* Two Column Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* Main Article */}
                <article className="lg:w-2/3">

                    {/* Hero Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 bg-gray-100">
                        <Image
                            src="/postpartum-hair-loss-nutrition-best-nutritionist-jaipur.webp"
                            alt="Flat lay of Indian foods rich in iron and protein for postpartum hair recovery"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">

                        {/* Intro */}
                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            You survived pregnancy. You survived labour. And now, a few months into motherhood, you&apos;re losing your hair by the fistful every time you run a comb through it. Take a breath — you are not alone, and you are not going bald. What you eat (or don&apos;t eat) after delivery plays a massive role in how quickly and completely your hair recovers.
                        </p>

                        <p>
                            As the <strong>best nutritionist in Jaipur</strong> and across Delhi NCR, clients come to us with concerns about energy, milk supply, and weight — but postpartum hair fall is the one thing that quietly breaks confidence. This guide is for every new mother who wants real answers, not just reassurance.
                        </p>

                        {/* What is postpartum hair loss */}
                        <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900">What Is Postpartum Hair Loss, Really?</h2>
                        <p>
                            During pregnancy, elevated oestrogen levels keep your hair in the growth phase longer than usual — which is why many women enjoy thick, lustrous hair through their nine months. After delivery, oestrogen drops sharply. Your hair follicles &quot;catch up&quot; and shed all those extra strands at once.
                        </p>
                        <p>
                            This condition is called <strong>telogen effluvium</strong> — a temporary, diffuse hair shedding triggered by a physiological shock (in this case, childbirth and the hormonal shift that follows).
                        </p>

                        {/* Timeline card */}
                        <div className="bg-gradient-to-br from-[#4CAF50]/5 to-white border border-[#4CAF50]/20 rounded-3xl p-8 my-8 not-prose">
                            <h3 className="text-lg font-black text-[#217328] mb-5 uppercase tracking-wide">Key Timeline to Know</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { phase: "Shedding Begins", time: "2–4 months after delivery" },
                                    { phase: "Peak Shedding", time: "Months 4–6 postpartum" },
                                    { phase: "Regrowth Starts", time: "6–12 months with proper nutrition" },
                                ].map((item) => (
                                    <div key={item.phase} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                                        <p className="text-xs font-bold text-[#217328] uppercase tracking-widest mb-1">{item.phase}</p>
                                        <p className="text-slate-800 font-bold text-lg leading-snug">{item.time}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 text-sm mt-5">The hormonal shift is unavoidable. The <strong>severity and duration</strong> of postpartum hair loss? That&apos;s where nutrition changes everything.</p>
                        </div>

                        {/* Why nutrition matters */}
                        <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900">Why Nutrition Is the Missing Piece Nobody Talks About</h2>
                        <p>
                            Your body spent nine months prioritising your baby&apos;s development — giving away iron, calcium, protein, zinc, biotin, omega-3s, Vitamin D — often at your own expense. If you are breastfeeding, this continues after delivery too.
                        </p>
                        <p>
                            Meanwhile, your diet in the new-mother phase is usually chaotic: irregular meals, whatever is easy to eat, lots of chai and biscuits. The result is a <strong>perfect storm of nutritional deficiency</strong> that worsens and extends postpartum hair loss far beyond what hormones alone would cause.
                        </p>

                        {/* 6 Nutrients */}
                        <h2 className="text-3xl font-black mt-12 mb-2 text-slate-900">The 6 Nutrients Most Linked to Postpartum Hair Loss</h2>
                        <p className="text-slate-500 mt-0 mb-8">Each of these plays a distinct role. Missing even one can significantly slow your recovery.</p>

                        <div className="not-prose space-y-6">
                            {nutrients.map((n) => (
                                <div key={n.num} className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-5">
                                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center">
                                            <span className="text-white font-black text-sm">{n.num}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <h3 className="text-xl font-black text-slate-900">{n.name}</h3>
                                                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${n.tagColor}`}>{n.tag}</span>
                                            </div>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">{n.desc}</p>
                                            <div className="bg-slate-50 rounded-2xl p-4">
                                                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Indian Food Sources</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {n.foods.map((f) => (
                                                        <span key={f} className="bg-white text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">{f}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            {n.tip && (
                                                <p className="mt-3 text-xs text-[#217328] font-semibold flex items-start gap-1.5">
                                                    <span className="shrink-0 mt-0.5">💡</span>
                                                    {n.tip}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Traditional foods */}
                        <h2 className="text-3xl font-black mt-14 mb-4 text-slate-900">Traditional Postpartum Foods That Actually Work for Hair</h2>
                        <p>
                            Indian families have always had postpartum nutrition wisdom — the <em>jaapa</em> foods — that science is now validating. These were not just comfort food. They were structured nutritional support for a body that had just been through one of its most demanding events.
                        </p>

                        <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
                            {traditionalFoods.map((item) => (
                                <div key={item.name} className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-2xl p-4 text-center">
                                    <p className="font-black text-slate-900 text-sm mb-1">{item.name}</p>
                                    <p className="text-[#217328] text-xs font-semibold leading-snug">{item.benefit}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            The problem today is portion sizes, frequency, and consistency. Eating one methi laddoo occasionally is very different from following a structured postpartum nutrition plan. Our{' '}
                            <Link href="/programs/postpartum-care" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">Postpartum Care Program</Link>{' '}
                            is designed to bring exactly that structure to your recovery.
                        </p>

                        {/* Common mistakes */}
                        <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900">Common Mistakes New Mothers Make That Worsen Hair Fall</h2>

                        <div className="not-prose space-y-4 mb-8">
                            {[
                                { no: "1", title: "Skipping meals because there's no time", body: "Irregular, inadequate eating means your body cannot meet even its basic nutrient needs — hair follicles are the first casualty." },
                                { no: "2", title: "Crash dieting to lose baby weight quickly", body: "This is one of the worst things you can do postpartum. Aggressive caloric restriction suppresses nutrient intake drastically and dramatically worsens hair loss. Sustainable weight management after delivery looks very different." },
                                { no: "3", title: "Relying only on supplements without fixing diet", body: "No supplement compensates for a diet that is fundamentally inadequate in protein and iron. Supplements work best as support on top of a solid dietary foundation." },
                                { no: "4", title: "Not getting blood work done", body: "Many assume hair fall is 'just hormonal' without checking ferritin, Vitamin D, B12, zinc, and thyroid function. Postpartum thyroid dysfunction (affecting up to 10% of new mothers) can look identical to telogen effluvium." },
                                { no: "5", title: "Under-eating protein while breastfeeding", body: "Breastfeeding significantly increases your protein requirement. Most postpartum mothers are under-eating protein without realising it." },
                            ].map((item) => (
                                <div key={item.no} className="flex gap-4 bg-red-50/50 border border-red-100 rounded-2xl p-5">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 font-black flex items-center justify-center text-sm">{item.no}</div>
                                    <div>
                                        <p className="font-black text-slate-900 text-sm mb-1">{item.title}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* How best dietitian near me helps */}
                        <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900">How the Best Dietitian Near Me Can Change Your Postpartum Recovery</h2>
                        <p>
                            Postpartum nutrition is not one-size-fits-all. Your hair loss severity, blood reports, dietary preferences, breastfeeding status, and energy levels — all of these shape what your nutrition plan should look like.
                        </p>
                        <p>
                            Working with the <strong>best dietitian near me</strong> — someone who can actually assess your specific picture — makes the difference between guessing and knowing. A qualified clinical dietitian will:
                        </p>

                        <ul className="not-prose space-y-3 mb-6">
                            {[
                                "Review your blood reports and identify which deficiencies are actually present",
                                "Build a structured weekly meal plan meeting your protein, iron, and micronutrient targets",
                                "Account for your cultural food preferences and cooking reality as a new mother",
                                "Monitor your progress weekly and adjust the plan as your recovery progresses",
                                "Ensure postpartum nutrition also supports breastfeeding, energy levels, and gradual weight management",
                            ].map((point) => (
                                <li key={point} className="flex items-start gap-3 text-slate-700 text-base">
                                    <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-[#4CAF50]/20 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-[#217328]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <blockquote className="my-10 px-8 py-5 border-l-8 border-[#217328] bg-slate-50 rounded-r-2xl not-prose">
                            <p className="italic text-xl font-medium text-slate-800 leading-relaxed">"The mistake most people make is trying to Google their way to a solution. You end up with a supplement list that looks good on paper but doesn&apos;t fit your life."</p>
                            <p className="text-[#217328] font-black text-sm mt-3">— Anita Menon, Lead Clinical Dietitian</p>
                        </blockquote>

                        {/* Meal Plan */}
                        <h2 className="text-3xl font-black mt-12 mb-4 text-slate-900">What a Structured Postpartum Day of Eating Looks Like</h2>
                        <p className="text-slate-500 mt-0 mb-6">This is an illustration — not a prescription. Your actual plan must be built around your specific blood reports and lifestyle.</p>

                        <div className="not-prose space-y-3 mb-8">
                            {mealPlan.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                                    <div className="shrink-0 text-right min-w-[80px]">
                                        <p className="text-[#217328] font-black text-sm">{item.time}</p>
                                        <p className="text-slate-400 text-xs">{item.label}</p>
                                    </div>
                                    <div className="w-px bg-slate-200 self-stretch shrink-0"></div>
                                    <p className="text-slate-700 text-sm leading-relaxed">{item.meal}</p>
                                </div>
                            ))}
                        </div>

                        {/* When to worry */}
                        <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900">When Should You Worry? Red Flags That Need Attention</h2>

                        <div className="not-prose bg-amber-50 border border-amber-200 rounded-3xl p-7 mb-8">
                            <p className="text-amber-800 font-bold text-sm mb-4">Seek prompt attention from a doctor AND dietitian if you notice:</p>
                            <ul className="space-y-2">
                                {[
                                    "Hair loss continues aggressively beyond 12 months postpartum",
                                    "Patchy hair loss (not diffuse shedding) — could be alopecia areata",
                                    "Hair loss accompanied by extreme fatigue, cold intolerance, or weight changes (thyroid flag)",
                                    "Losing eyebrows or eyelashes in addition to scalp hair",
                                    "Blood tests reveal very low ferritin (below 30 ng/mL)",
                                ].map((flag) => (
                                    <li key={flag} className="flex items-start gap-2 text-sm text-amber-900">
                                        <span className="shrink-0 mt-0.5 text-amber-600">⚠</span>
                                        {flag}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p>
                            Our{' '}
                            <Link href="/programs/thyroid-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">Thyroid Management Program</Link>{' '}
                            supports women navigating both postpartum hair loss and thyroid dysfunction simultaneously.
                        </p>

                        {/* CTA block in article */}
                        <div className="not-prose bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                            <h3 className="text-3xl font-black mb-3">Struggling with Hair Fall After Delivery?</h3>
                            <p className="text-lg opacity-90 mb-8 font-medium">Stop guessing and start recovering. Our postpartum dietitians build structured, data-driven nutrition plans that come to your home — no clinic visits needed.</p>
                            <Link href="/contact" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                                Talk to Our Dietitians →
                            </Link>
                        </div>

                        {/* FAQ */}
                        <h2 className="text-3xl font-black mt-12 mb-6 text-slate-900">Frequently Asked Questions</h2>

                        <div className="not-prose space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden">
                                    <summary className="flex justify-between items-center cursor-pointer px-6 py-5 font-black text-slate-900 text-base list-none hover:bg-slate-50 transition-colors">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-[#217328] shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>

                        {/* Conclusion */}
                        <h2 className="text-3xl font-black mt-12 mb-6 text-[#217328]">The Bottom Line</h2>
                        <p>
                            Postpartum hair loss is real, it is common, and it is not &quot;just hormonal.&quot; Nutrition is one of the most powerful levers you have — and it is almost always under-addressed in postpartum recovery.
                        </p>
                        <p>
                            The <strong>best nutritionist in Jaipur</strong> and across Delhi NCR is not necessarily the one with the most social media followers. It is the one who takes the time to understand your specific situation and builds a plan that works in the reality of your life — as a new mother, with a newborn, with all the chaos that comes with it.
                        </p>
                        <p>
                            Dietitian at Home is built to be exactly that. Our service brings professional nutrition care directly to you — home visits, weekly dietitian calls, personalised meal plans, and continuous monitoring through the app. No travel. No waiting rooms. Just real, structured support.
                        </p>
                        <p>
                            <Link href="/contact" className="text-[#217328] font-black border-b-2 border-[#217328] hover:opacity-80 transition-opacity">Start your postpartum nutrition recovery today →</Link>
                        </p>

                        {/* Author bio */}
                        <div className="not-prose mt-12 pt-8 border-t border-slate-100">
                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-1">Written by</p>
                            <p className="text-slate-900 font-black">Anita Menon</p>
                            <p className="text-[#217328] text-sm font-semibold">Lead Clinical Dietitian, Dietitian at Home</p>
                            <p className="text-slate-500 text-sm mt-2">Specialising in women&apos;s nutrition, postpartum care, and medical nutrition therapy across PCOD/PCOS, thyroid, and metabolic conditions.</p>
                        </div>

                    </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-8">

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
                                Specialising in women&apos;s health and postpartum nutrition, Anita has helped hundreds of new mothers recover faster through structured at-home dietary support.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center">
                                View All Experts
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        {/* Related Services */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-5 uppercase tracking-tight">Our Support Plans</h4>
                            <div className="space-y-3">
                                {[
                                    { label: "Postpartum Care", href: "/programs/postpartum-care" },
                                    { label: "Pregnancy Nutrition", href: "/programs/pregnancy-nutrition" },
                                    { label: "PCOD / PCOS Care", href: "/programs/pcod-pcos" },
                                    { label: "Thyroid Management", href: "/programs/thyroid-management" },
                                    { label: "Weight Management", href: "/programs/weight-management" },
                                    { label: "How It Works", href: "/how-it-works" },
                                ].map((item) => (
                                    <Link key={item.href} href={item.href} className="block group">
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                            <span className="font-bold text-slate-800 text-sm">{item.label}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Sidebar Box */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <h4 className="text-2xl font-black mb-3 relative z-10">Get Your Postpartum Recovery Plan</h4>
                            <p className="opacity-90 mb-6 text-sm font-medium relative z-10">At-home visits. Weekly dietitian calls. Personalised meal plans. Continuous monitoring. No clinic, no waiting.</p>
                            <Link href="/contact" className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg text-sm">
                                Book a Free Consultation
                            </Link>
                            <Link href="/pricing" className="block w-full text-center mt-3 text-white/80 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors relative z-10">
                                View Pricing →
                            </Link>
                        </div>

                        {/* Quick facts */}
                        <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[2rem] p-7">
                            <h4 className="text-base font-black text-slate-900 mb-4 uppercase tracking-wide">Quick Facts</h4>
                            <div className="space-y-4">
                                {[
                                    { label: "Women affected by postpartum hair loss", stat: "~50%" },
                                    { label: "When shedding typically peaks", stat: "Month 4–6" },
                                    { label: "With proper nutrition, recovery by", stat: "6–12 months" },
                                    { label: "Indian women with low ferritin postpartum", stat: "Very common" },
                                ].map((f) => (
                                    <div key={f.label} className="flex justify-between items-start gap-3">
                                        <p className="text-slate-600 text-xs leading-snug">{f.label}</p>
                                        <p className="text-[#217328] font-black text-sm shrink-0">{f.stat}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </aside>
            </div>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">Ready to Stop the Hair Fall and Start Recovering?</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Our postpartum dietitians build personalised, data-driven plans — delivered to your home, not a clinic. Real structure. Real results.
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
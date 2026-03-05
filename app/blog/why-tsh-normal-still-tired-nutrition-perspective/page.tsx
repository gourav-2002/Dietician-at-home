import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Why Your TSH Is Normal But You Still Feel Tired | Nutritionist in Delhi",
    description: "Your TSH report says normal but fatigue won't go away? A nutritionist in Delhi explains the real nutritional reasons behind thyroid-related tiredness — and what to do about it.",
    keywords: "nutritionist in delhi, dietician noida, thyroid fatigue, TSH normal but tired, thyroid nutrition, T3 T4 conversion, selenium deficiency thyroid, thyroid dietitian delhi, at-home nutrition care, thyroid management diet",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/why-tsh-normal-still-tired-nutrition-perspective',
    },
    openGraph: {
        title: "Why Your TSH Is Normal But You Still Feel Tired | Nutritionist in Delhi",
        description: "A nutritionist in Delhi explains the real nutritional reasons behind thyroid-related tiredness — and what to do about it.",
        url: 'https://dieticianathome.com/blog/why-tsh-normal-still-tired-nutrition-perspective',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/why-tsh-normal-still-tired-nutrition-perspective.jpg',
                width: 1200,
                height: 630,
                alt: 'Tired Indian woman looking at thyroid test report, nutritionist consultation at home',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Why Your TSH Is Normal But You Still Feel Tired | Nutritionist in Delhi",
        description: "Real nutritional reasons behind thyroid-related fatigue despite normal TSH levels.",
        images: ['https://dieticianathome.com/why-tsh-normal-still-tired-nutrition-perspective.jpg'],
    },
};

export default function TshBlogPost() {

    const category = "Thyroid Health";
    const readingTime = "9 min read";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Why Your TSH Is Normal But You Still Feel Tired — A Nutrition Perspective",
        "image": "https://dieticianathome.com/why-tsh-normal-still-tired-nutrition-perspective.jpg",
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
        "datePublished": "2026-03-05",
        "description": "A nutritionist in Delhi explains why your TSH can appear normal while you still feel exhausted — and the nutritional gaps responsible for thyroid fatigue.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/why-tsh-normal-still-tired-nutrition-perspective"
        }
    };

    /*
      AI IMAGE GENERATION PROMPT:
      "Tired Indian professional woman in her 30s sitting at home, holding a pathology report,
      looking fatigued and concerned, soft natural morning light, Indian home interior,
      warm neutral tones, realistic and empathetic mood, photorealistic, high quality, 16:9 aspect ratio"
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
                        <span className="truncate max-w-[200px] md:max-w-none">TSH Normal But Still Tired</span>
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
                    Why Your TSH Is Normal But You Still Feel Tired —{' '}
                    <span className="text-[#217328]">A Nutrition Perspective</span>
                </h1>
            </header>

            {/* Content Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* Main Article Content */}
                <article className="lg:w-2/3">

                    {/* Featured Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/why-tsh-normal-still-tired-nutrition-perspective.jpg"
                            alt="Tired Indian woman looking at thyroid test report at home"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        {/* Opening Hook */}
                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            You got your thyroid test done. The doctor glanced at the report and said, <em>"TSH is normal, you're fine."</em> But you're not fine. You wake up tired, drag yourself through the afternoon, and your brain feels wrapped in cotton wool. If this sounds familiar — you're not imagining it, and you're definitely not alone.
                        </p>

                        <p>
                            As a <strong>nutritionist in Delhi</strong> working with clients across Gurgaon, Noida, and Delhi NCR, this is one of the most common frustrations I hear. People whose labs look "normal" but who feel anything but. And the answer almost always lies not in the TSH number — but in the <strong>nutrition that surrounds it</strong>.
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-3xl font-black mt-12 mb-6">What TSH Actually Tells You (And What It Doesn't)</h2>
                        <p>
                            TSH — Thyroid Stimulating Hormone — is a signal from your pituitary gland telling the thyroid to produce hormones. When doctors check TSH, they're essentially checking whether your brain is asking the thyroid to work harder or slow down.
                        </p>
                        <p>
                            But here's the gap: <strong>TSH tells you nothing about whether your thyroid hormones are actually working at the cellular level.</strong>
                        </p>
                        <p>
                            Your thyroid primarily produces T4 (thyroxine), which is an inactive hormone. For your body to actually use thyroid function — for energy, metabolism, mood, hair growth — T4 must convert to T3 (the active form). This conversion doesn't happen in the thyroid. It happens in your <strong>liver, gut, and peripheral tissues</strong>. And it is almost entirely dependent on nutrition.
                        </p>

                        <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100 my-10">
                            <h3 className="text-xl font-bold text-[#217328] mb-4">So you can have a "normal" TSH and still have:</h3>
                            <ul className="space-y-2 text-slate-800 m-0 list-none p-0">
                                {[
                                    'Poor T4 to T3 conversion',
                                    'High Reverse T3 (which blocks active T3)',
                                    'Low cellular T3 despite normal serum levels',
                                    'Nutritional deficiencies that impair thyroid hormone activity',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-[#217328] font-black mt-0.5">→</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 text-sm mt-4 m-0">None of these show up in a basic TSH test. But all of them make you feel exhausted.</p>
                        </div>

                        {/* Section 2 */}
                        <h2 className="text-3xl font-black mt-12 mb-6">The Nutritional Gaps That Explain Your Fatigue</h2>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Selenium Deficiency — The Most Overlooked Culprit</h3>
                        <p>
                            Selenium powers the enzyme (deiodinase) responsible for converting T4 into active T3. Without enough selenium, your body is literally unable to activate thyroid hormone — no matter what your TSH reads. Selenium-rich foods commonly under-consumed in Indian diets include Brazil nuts, sunflower seeds, eggs, and fish. A qualified <Link href="/programs/thyroid-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">thyroid nutritionist</Link> will almost always screen for dietary selenium insufficiency in clients presenting with fatigue despite normal thyroid labs.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Iron Deficiency — Especially in Women</h3>
                        <p>
                            Iron deficiency affects thyroid function in two major ways: it impairs thyroid peroxidase (TPO) activity, reducing T4 production, and it reduces the oxygen-carrying capacity of blood — compounding fatigue. In India, iron deficiency is extremely prevalent, particularly among women with PCOD, heavy periods, or inadequate dietary iron.
                        </p>
                        <p>
                            You can have borderline-low ferritin (stored iron) with a "normal" haemoglobin and still feel completely wiped out. If you're a woman dealing with unexplained fatigue, ask your doctor to check <strong>serum ferritin</strong> — not just haemoglobin. Learn more about how our <Link href="/programs/pcod-pcos" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">PCOD/PCOS care program</Link> addresses overlapping hormonal and nutritional concerns.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Vitamin D — The Silent Epidemic</h3>
                        <p>
                            Despite India receiving abundant sunlight, Vitamin D deficiency is shockingly common — particularly in urban professionals who spend most of their time indoors. A <strong>dietician in Noida</strong> or Delhi seeing clients from corporate environments will confirm this is a near-universal finding. Low Vitamin D worsens inflammation, disrupts immune regulation, and deepens fatigue — even when TSH looks perfect.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Magnesium — The Mineral That Does Everything</h3>
                        <p>
                            Magnesium is required for over 300 enzymatic reactions in the body, including those involved in energy production (ATP synthesis) and thyroid hormone metabolism. Magnesium deficiency is wildly underdiagnosed because standard blood tests are unreliable — most magnesium is stored in cells, not in blood. Indian diets high in refined grains and processed foods tend to be naturally low in magnesium, resulting in persistent fatigue, poor sleep, muscle cramps, and anxiety.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Zinc — The Forgotten Thyroid Mineral</h3>
                        <p>
                            Zinc is required for T4 to T3 conversion and for normal TSH receptor function. Vegetarians and vegans are at higher risk of zinc deficiency because plant-based zinc has lower bioavailability due to phytates found in legumes and whole grains — a significant concern in predominantly vegetarian Delhi NCR households.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Vitamin B12 — Bone-Deep Exhaustion</h3>
                        <p>
                            B12 deficiency is extremely common in India, particularly among vegetarians. The fatigue from B12 deficiency is often described as a bone-deep exhaustion — distinct from regular tiredness. If your TSH is normal but you can't shake the fatigue, B12 should be one of the first things ruled out.
                        </p>

                        {/* Nutrient Visual Table */}
                        <div className="grid md:grid-cols-2 gap-4 list-none p-0 my-8">
                            {[
                                { emoji: '🥚', name: 'Selenium', action: 'Activates T4 → T3 conversion', foods: 'Eggs, sunflower seeds, mushrooms' },
                                { emoji: '🫘', name: 'Iron (Ferritin)', action: 'Powers TPO enzyme, reduces fatigue', foods: 'Dal + lemon juice, rajma, spinach' },
                                { emoji: '☀️', name: 'Vitamin D', action: 'Reduces thyroid inflammation', foods: 'Sunlight, fortified milk, fatty fish' },
                                { emoji: '🥜', name: 'Magnesium', action: 'Supports ATP & hormone metabolism', foods: 'Pumpkin seeds, almonds, banana' },
                                { emoji: '🌾', name: 'Zinc', action: 'TSH receptor function', foods: 'Soaked legumes, eggs, pumpkin seeds' },
                                { emoji: '🥛', name: 'Vitamin B12', action: 'Cellular energy & nerve health', foods: 'Curd, paneer, eggs, supplements' },
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">{item.emoji}</span>
                                        <span className="font-black text-slate-900">{item.name}</span>
                                    </div>
                                    <p className="text-sm text-[#217328] font-semibold mb-1">{item.action}</p>
                                    <p className="text-xs text-slate-500">{item.foods}</p>
                                </div>
                            ))}
                        </div>

                        {/* Blockquote */}
                        <blockquote className="my-12 px-8 py-4 border-l-8 border-[#217328] bg-gray-50 italic text-2xl font-medium text-slate-800">
                            "Working with a specialised <strong>nutritionist in Delhi</strong> means your nutrition plan is built around your actual labs, lifestyle, and the realities of an Indian kitchen — not a generic chart."
                        </blockquote>

                        {/* Section 3 - Gut */}
                        <h2 className="text-3xl font-black mt-12 mb-6">The Gut-Thyroid Connection Nobody Talks About</h2>
                        <p>
                            Around 20% of thyroid hormone activation depends on healthy gut bacteria. Dysbiosis (imbalanced gut microbiome), chronic bloating, constipation, or a history of antibiotic use can significantly impair thyroid hormone activation — again, without affecting your TSH number.
                        </p>
                        <p>
                            In Indian urban diets, low fibre intake, excessive processed foods, and chronic stress all contribute to compromised gut health that quietly undermines thyroid function. Including fermented foods like curd, buttermilk, idli, and kanji can meaningfully support both gut and thyroid health.
                        </p>

                        {/* Section 4 - Stress */}
                        <h2 className="text-3xl font-black mt-12 mb-6">Cortisol, Stress & Why Working Professionals Are Hit Hard</h2>
                        <p>
                            Chronic stress elevates cortisol, which suppresses TSH production, impairs T4 to T3 conversion, and promotes Reverse T3 — which competes with and blocks active T3. For busy professionals in Delhi, Gurgaon, or Noida — long commutes, demanding work hours, irregular meals, poor sleep — the cortisol burden on thyroid function is enormous.
                        </p>
                        <p>
                            A <strong>dietician in Noida</strong> or Delhi who works with corporate clients will frequently see this pattern: labs that look fine, lives that feel broken. This is why nutrition interventions for thyroid-related fatigue must address stress physiology and meal timing alongside micronutrient corrections.
                        </p>

                        {/* Green CTA box */}
                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                            <h3 className="text-3xl font-black mb-4">Feeling Tired Despite a Normal TSH?</h3>
                            <p className="text-xl opacity-90 mb-8 font-medium">
                                Stop guessing. Our qualified dietitians take a root-cause, data-driven approach to thyroid fatigue — with weekly consultations, monthly home visits, and a personalised meal plan that actually fits your life.
                            </p>
                            <Link href="/contact" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                                Book a Free Consultation
                            </Link>
                        </div>

                        {/* Section 5 - What to Do */}
                        <h2 className="text-3xl font-black mt-12 mb-6">What a Proper Nutritional Assessment Should Cover</h2>
                        <p>
                            If you're dealing with TSH-normal-but-tired, here's what a comprehensive evaluation should include beyond your basic thyroid test:
                        </p>

                        <div className="space-y-3 my-6">
                            {[
                                { num: '01', title: 'Full Thyroid Panel', desc: 'TSH, Free T3, Free T4, Reverse T3, TPO antibodies' },
                                { num: '02', title: 'Iron Studies', desc: 'Serum ferritin, TIBC, haemoglobin — not just "haemoglobin is fine"' },
                                { num: '03', title: 'Vitamin D (25-OH)', desc: 'Optimal range matters — not just "within normal limits"' },
                                { num: '04', title: 'Vitamin B12 & Folate', desc: 'Critical for energy and nerve function, especially in vegetarians' },
                                { num: '05', title: 'Magnesium', desc: 'RBC magnesium if possible — serum levels are unreliable' },
                                { num: '06', title: 'Dietary Analysis', desc: 'What are you actually eating, and what nutritional gaps exist?' },
                            ].map((item) => (
                                <div key={item.num} className="flex items-start gap-5 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                                    <span className="text-3xl font-black text-[#4CAF50]/40 leading-none">{item.num}</span>
                                    <div>
                                        <p className="font-black text-slate-900 mb-1">{item.title}</p>
                                        <p className="text-sm text-slate-500 m-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Section 6 - What to Eat */}
                        <h2 className="text-3xl font-black mt-12 mb-6">What You Can Start Doing Today</h2>
                        <p>
                            While a proper assessment with a qualified <strong>nutritionist in Delhi</strong> is essential, here are evidence-based nutrition steps that support thyroid function immediately:
                        </p>

                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                { icon: '✔', bg: 'green', text: <><strong>Selenium-rich foods daily</strong> — eggs, sunflower seeds, mustard seeds, mushrooms</> },
                                { icon: '✔', bg: 'green', text: <><strong>Pair iron + Vitamin C</strong> — dal/rajma with lemon juice or amla</> },
                                { icon: '✔', bg: 'green', text: <><strong>Daily sunlight</strong> — 20–30 minutes for natural Vitamin D synthesis</> },
                                { icon: '✔', bg: 'green', text: <><strong>Magnesium foods</strong> — pumpkin seeds, dark leafy greens, banana, almonds</> },
                                { icon: '✔', bg: 'green', text: <><strong>Fermented foods</strong> — curd, buttermilk, idli, kanji for gut-thyroid health</> },
                                { icon: '✔', bg: 'green', text: <><strong>Consistent meal timing</strong> — erratic eating raises cortisol and disrupts thyroid metabolism</> },
                                { icon: '✘', bg: 'red', text: <><strong>Limit raw cruciferous vegetables</strong> in large amounts — can interfere with iodine uptake</> },
                                { icon: '✘', bg: 'red', text: <><strong>Skip processed, refined foods</strong> — they deplete magnesium and zinc rapidly</> },
                            ].map((item, i) => (
                                <li key={i} className={`${item.bg === 'green' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'} p-4 rounded-xl border flex items-start gap-3`}>
                                    <span className={`${item.bg === 'green' ? 'text-green-600' : 'text-red-500'} font-black mt-0.5`}>{item.icon}</span>
                                    <span className="text-sm text-slate-700">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Transition to service */}
                        <p className="mt-8">
                            If you're ready to go beyond guesswork, explore our{' '}
                            <Link href="/how-it-works" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                How It Works
                            </Link>{' '}
                            page to see how we bring a comprehensive, data-driven nutrition care experience directly to your home — without clinic visits, waiting rooms, or generic advice.
                        </p>

                        {/* Conclusion */}
                        <h2 className="text-3xl font-black mt-12 mb-6 text-[#217328]">The Bottom Line</h2>
                        <p>
                            A normal TSH is not the end of the conversation — in many cases, it's just the beginning. If you've been dismissed with a "your thyroid is fine" while your body is clearly telling you otherwise, the answer is almost certainly nutritional. The minerals, vitamins, gut health, and stress hormones that govern whether thyroid hormones actually work at a cellular level are entirely within reach — with the right guidance.
                        </p>
                        <p>
                            You deserve more than a number on a report. You deserve to feel well. Explore our{' '}
                            <Link href="/pricing" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                transparent pricing
                            </Link>{' '}
                            and take the first step toward real answers.
                        </p>

                        {/* Disclaimer */}
                        <p className="text-sm text-slate-400 italic mt-10 border-t border-slate-100 pt-6">
                            This blog is for informational and educational purposes only. It does not constitute medical advice. Please consult a qualified healthcare professional for diagnosis and treatment of thyroid conditions.
                        </p>

                        {/* Related Reads */}
                        <div className="bg-slate-50 rounded-3xl p-8 mt-10 border border-slate-100">
                            <h4 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-wide">Related Reads</h4>
                            <ul className="space-y-3 list-none p-0 m-0">
                                {[
                                    { label: 'Why Thyroid Medication Isn\'t Enough — The Nutrition Role', href: '/blog/why-thyroid-medication-isnt-enough-nutrition-role' },
                                    { label: '7 Signs You Need Professional Nutrition Care', href: '/blog/7-signs-professional-nutrition-care' },
                                    { label: 'How Our At-Home Nutrition Service Works', href: '/how-it-works' },
                                    { label: 'Explore the Thyroid Management Program', href: '/programs/thyroid-management' },
                                ].map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="flex items-center gap-3 text-[#217328] font-semibold hover:underline text-sm group">
                                            <span className="text-[#4CAF50] group-hover:translate-x-1 transition-transform">→</span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
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
                                Specialising in thyroid nutrition and women's metabolic health, Anita has helped hundreds of clients resolve fatigue and energy issues through personalised, root-cause nutrition strategies.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center">
                                View All Experts
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Key Nutrients Quick Reference */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">Key Thyroid Nutrients</h4>
                            <p className="text-xs text-slate-400 mb-6 font-medium">Often deficient despite normal TSH</p>
                            <div className="space-y-3">
                                {['Selenium', 'Iron (Ferritin)', 'Vitamin D', 'Magnesium', 'Zinc', 'Vitamin B12'].map((nutrient) => (
                                    <div key={nutrient} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                                        <span className="text-sm font-semibold text-slate-700">{nutrient}</span>
                                        <span className="text-xs bg-[#4CAF50]/10 text-[#217328] px-2 py-1 rounded-full font-bold">Check Labs</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Related Services */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Support Plans</h4>
                            <div className="space-y-4">
                                {[
                                    { label: 'Thyroid Management', href: '/programs/thyroid-management' },
                                    { label: 'PCOD/PCOS Care', href: '/programs/pcod-pcos' },
                                    { label: 'Weight Management', href: '/programs/weight-management' },
                                    { label: 'How It Works', href: '/how-it-works' },
                                ].map((item) => (
                                    <Link key={item.href} href={item.href} className="block group">
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                            <span className="font-bold text-slate-800">{item.label}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <h4 className="text-2xl font-black mb-4 relative z-10">TSH Normal. Still Tired.</h4>
                            <p className="opacity-90 mb-8 text-sm font-medium relative z-10">
                                Get a comprehensive nutritional assessment from our thyroid specialists — delivered to your home.
                            </p>
                            <Link href="/get-started" className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg">
                                Book a Consultation
                            </Link>
                        </div>

                    </div>
                </aside>
            </div>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        Ready to finally understand your thyroid fatigue?
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Get a personalised nutritional assessment from Delhi NCR's most comprehensive at-home dietitian service. No clinic visits. Real answers.
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
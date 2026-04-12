import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "How to Find a Good Dietician in Noida: What to Actually Look For",
    description: "Looking for a good dietician in Noida or the best dietician in Chandigarh? Here's exactly what to check before you hire one — no fluff, just real criteria.",
    keywords: "good dietician in noida, best dietician in chandigarh, dietician near me, how to find dietician, qualified dietitian noida, nutrition care noida, dietician chandigarh, at home dietitian",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/how-to-find-good-dietician-noida-chandigarh',
    },
    openGraph: {
        title: "How to Find a Good Dietician in Noida: What to Actually Look For",
        description: "Looking for a good dietician in Noida or the best dietician in Chandigarh? Here's exactly what to check before you hire one — no fluff, just real criteria.",
        url: 'https://dieticianathome.com/blog/how-to-find-good-dietician-noida-chandigarh',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/find-dietician-noida-chandigarh-hero.webp',
                width: 1200,
                height: 630,
                alt: 'Indian flat-lay food photography with meal plan notebook — finding a dietician in Noida and Chandigarh',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "How to Find a Good Dietician in Noida: What to Actually Look For",
        description: "Real criteria to evaluate a dietician — qualifications, frequency, personalisation, and more.",
        images: ['https://dieticianathome.com/find-dietician-noida-chandigarh-hero.webp'],
    },
};

export default function FindDieticianNoidaChandigarhBlog() {

    const category = "Nutrition Tips";
    const readingTime = "9 min read";
    const publishDate = "April 14, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://dieticianathome.com/blog/how-to-find-good-dietician-noida-chandigarh",
                "headline": "How to Find a Good Dietician in Noida or Chandigarh: What to Actually Look For",
                "description": "Looking for a good dietician in Noida or the best dietician in Chandigarh? Here's exactly what to check before you hire one — no fluff, just real criteria.",
                "image": "https://dieticianathome.com/find-dietician-noida-chandigarh-hero.webp",
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
                "datePublished": "2026-04-12",
                "dateModified": "2026-04-12",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://dieticianathome.com/blog/how-to-find-good-dietician-noida-chandigarh"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What qualifications should a good dietician in Noida have?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A good dietician in Noida should hold a B.Sc. or M.Sc. in Nutrition and Dietetics, or an RD (Registered Dietitian) certification. Always verify credentials before enrolling in any nutrition program."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How is a dietician different from a nutritionist?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A dietician holds a formal clinical degree and is qualified to work with medical conditions like diabetes, PCOD, and thyroid disorders. A nutritionist may have broader training but may not be clinically certified."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Should I look for a dietician online or offline in Noida or Chandigarh?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both work, but the best option is a service that combines professional in-person assessments with regular remote consultations — giving you the benefits of both without the inconvenience of commuting to a clinic."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How often should I consult my dietician?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Weekly consultations are the gold standard for real, measurable results. Monthly-only check-ins are too infrequent to course-correct your plan when it's not working."
                        }
                    }
                ]
            }
        ]
    };

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
                        <span className="truncate max-w-[200px] md:max-w-none">How to Find a Good Dietician in Noida or Chandigarh</span>
                    </li>
                </ol>
            </nav>

            {/* Hero Header */}
            <header className="max-w-7xl mx-auto px-6 mb-12">
                <div className="mb-6 flex flex-wrap gap-3 items-center">
                    <span className="bg-[#4CAF50]/10 text-[#217328] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        {category}
                    </span>
                    <span className="text-gray-400 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {readingTime}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">{publishDate}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                    How to Find a <span className="text-[#217328]">Good Dietician in Noida</span> or Chandigarh: What to Actually Look For
                </h1>
            </header>

            {/* Two Column Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* ── MAIN ARTICLE ── */}
                <article className="lg:w-2/3">

                    {/* Hero Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/find-dietician-noida-chandigarh-hero.webp"
                            alt="Indian flat-lay food photography with fresh ingredients and a handwritten meal plan notebook"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        {/* Intro pull quote */}
                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            Finding a good dietician in Noida sounds simple enough. You Google the term, get a list of names, scroll through a few Instagram profiles, and then… freeze. Because how do you actually evaluate someone who is going to be responsible for what goes into your body every single day?
                        </p>

                        <p>
                            This guide cuts through the noise. Whether you're in Noida, Chandigarh, or anywhere in the Delhi NCR belt, these are the criteria that actually matter — not stars on a listing site, not follower counts, not how pretty their diet chart looks.
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-3xl font-black mt-12 mb-4">Why Most People Pick the Wrong Dietician (And Regret It)</h2>
                        <p>
                            Here's what usually happens: someone decides they're serious about their weight, PCOD, thyroid, or diabetes. They look up "dietician near me," pick the one with the most reviews, pay for a plan, receive a PDF, and get… a generic chart that could have been written for anyone.
                        </p>
                        <p>
                            Three weeks later, they've lost motivation. The chart is tucked in a drawer. Nothing has changed. The problem wasn't their willpower. The problem was they picked a <em>service</em>, not a <em>professional</em>.
                        </p>
                        <p>
                            Knowing what separates a genuinely qualified and effective dietician from someone who simply markets well is the first step — and it applies whether you're searching in Noida, Chandigarh, or anywhere else.
                        </p>

                        {/* Did You Know callout */}
                        <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100 my-10">
                            <h3 className="text-xl font-bold text-[#217328] mb-3">Worth Knowing</h3>
                            <p className="text-slate-800 m-0">
                                A single wrong dietician choice doesn't just waste money — it wastes months of your time and often puts you off nutrition support entirely. Getting the selection criteria right the first time is worth every minute of research.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <h2 className="text-3xl font-black mt-12 mb-4">1. Verify Qualifications First — Non-Negotiable</h2>
                        <p>
                            A <strong>good dietician in Noida</strong> should hold at minimum a B.Sc. in Nutrition &amp; Dietetics from a recognised university. Ideally, look for:
                        </p>
                        <ul className="space-y-3 list-none p-0">
                            {[
                                "M.Sc. in Food Science & Nutrition or Clinical Dietetics",
                                "RD (Registered Dietitian) credential from a recognised body",
                                "Specialisation certification if you have PCOD, thyroid, diabetes, or another condition"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <span className="text-[#217328] font-black text-lg leading-none mt-0.5">✓</span>
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Anyone can call themselves a "nutritionist." Not everyone can call themselves a <em>clinical dietitian</em>. Ask directly. If they're vague or avoid the question, that's your answer.
                        </p>

                        {/* Section 3 */}
                        <h2 className="text-3xl font-black mt-12 mb-4">2. Specialisation Matters — General ≠ Good Enough</h2>
                        <p>
                            If you have a specific condition, you need someone who specialises in it. A dietician who primarily handles weight loss may not have the clinical depth to manage PCOS-related insulin resistance or thyroid-linked metabolic slowdown.
                        </p>
                        <p>Ask explicitly:</p>
                        <ul className="space-y-3 list-none p-0">
                            {[
                                '"How many clients with my condition have you worked with?"',
                                '"What does your protocol look like for someone with my condition?"',
                                '"Do you coordinate with doctors or endocrinologists when needed?"'
                            ].map((q, i) => (
                                <li key={i} className="italic text-slate-600 bg-slate-50 px-6 py-4 rounded-2xl border-l-4 border-[#4CAF50]">
                                    {q}
                                </li>
                            ))}
                        </ul>
                        <p>
                            A specialist will answer these confidently and in detail. A generalist will give you broad strokes. If you're managing PCOD or thyroid issues, check our guides on{' '}
                            <Link href="/programs/pcod-pcos" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">PCOD/PCOS nutrition</Link>{' '}
                            and{' '}
                            <Link href="/programs/thyroid-management" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">thyroid management through diet</Link>{' '}
                            to understand what a good programme should include.
                        </p>

                        {/* Section 4 */}
                        <h2 className="text-3xl font-black mt-12 mb-4">3. How Often Will They Actually Be Involved With You?</h2>
                        <p>
                            This is the question most people forget to ask — and arguably the most important one. A one-time consultation and a monthly check-in is not nutrition care. It's barely a starting point. Real, measurable results require <strong>weekly involvement at minimum</strong>.
                        </p>
                        <p>
                            Your adherence needs to be tracked. Your meal plan needs to evolve with your progress. If something isn't working in week two, it should be course-corrected before week three — not a month later. When evaluating any dietician — in Noida, Chandigarh, or otherwise — ask:
                        </p>
                        <ul className="space-y-3 list-none p-0">
                            {[
                                '"How frequently will we connect?"',
                                '"Who reviews my meal adherence data and how?"',
                                '"Can I reach out between consultations if I have questions?"'
                            ].map((q, i) => (
                                <li key={i} className="italic text-slate-600 bg-slate-50 px-6 py-4 rounded-2xl border-l-4 border-[#4CAF50]">
                                    {q}
                                </li>
                            ))}
                        </ul>
                        <p>
                            If the answer is "monthly check-ins and WhatsApp anytime," that's not the same as a structured weekly consultation with data review.
                        </p>

                        {/* Blockquote */}
                        <blockquote className="my-12 px-8 py-4 border-l-8 border-[#217328] bg-gray-50 italic text-2xl font-medium text-slate-800 rounded-r-3xl">
                            "Weekly involvement isn't a premium — it's the minimum standard for nutrition that actually works. Anything less is a diet chart, not care."
                        </blockquote>

                        {/* Section 5 */}
                        <h2 className="text-3xl font-black mt-12 mb-4">4. Personalisation vs. Templates — Know the Difference</h2>
                        <p>
                            The <strong>best dietician in Chandigarh</strong> or Noida isn't the one with the fanciest app or the most aesthetic meal cards. It's the one who builds your plan from <em>your</em> data — your lifestyle, food preferences, schedule, lab reports, and cooking habits.
                        </p>
                        <p>Red flags that suggest you're getting a template:</p>

                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                "You receive your meal plan within minutes of signing up",
                                "The plan doesn't ask about your dietary preferences or daily schedule",
                                "No body composition assessment before the plan is created",
                                "The plan looks identical to what your friend received for a different goal"
                            ].map((flag, i) => (
                                <li key={i} className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start gap-3">
                                    <span className="text-red-500 font-black text-lg leading-none mt-0.5">✕</span>
                                    <span className="text-slate-700 text-sm">{flag}</span>
                                </li>
                            ))}
                        </ul>

                        <p>
                            A genuinely personalised plan takes time to build. It's preceded by a thorough assessment — either in-person or with detailed data collection — and gets refined week after week as your body responds.
                        </p>

                        {/* Section 6 */}
                        <h2 className="text-3xl font-black mt-12 mb-4">5. In-Person Assessment: Still the Gold Standard</h2>
                        <p>
                            Lab reports and online forms are useful. But there is no digital substitute for a proper body composition assessment — one that captures fat percentage, muscle mass, visceral fat levels, and parameters beyond just weight.
                        </p>
                        <p>
                            If a dietician in Noida or Chandigarh is offering a plan without any physical assessment, pause and ask why. The best services combine:
                        </p>
                        <ul className="space-y-3 list-none p-0">
                            {[
                                { label: "In-person measurement", detail: "using professional-grade equipment" },
                                { label: "Regular reassessment", detail: "at least once a month, to track actual body composition changes — not just weight" },
                                { label: "Data-driven plan refinement", detail: "based on what those measurements actually show" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 bg-green-50 p-4 rounded-2xl border border-green-100">
                                    <span className="text-[#217328] font-black text-lg leading-none mt-0.5">✓</span>
                                    <span className="text-slate-700"><strong>{item.label}</strong> — {item.detail}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            This is exactly why the at-location service model exists. Going to a clinic every month is impractical for most people — but skipping assessments entirely is a mistake.{' '}
                            <Link href="/how-it-works" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">See how our service works</Link>{' '}
                            from the first visit to ongoing monthly check-ins.
                        </p>

                        {/* Mid-content CTA */}
                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                            <h3 className="text-2xl font-black mb-3">Not Sure Which Program Is Right for You?</h3>
                            <p className="text-lg opacity-90 mb-8 font-medium">
                                Our team helps you figure out the right fit — no pressure, no commitment. Just a clear conversation about your goals.
                            </p>
                            <Link href="/contact" className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1 shadow-lg">
                                Talk to Our Team
                            </Link>
                        </div>

                        {/* Section 7 */}
                        <h2 className="text-3xl font-black mt-12 mb-4">6. Technology Integration — Useful Tool or Just a Gimmick?</h2>
                        <p>
                            Many dieticians now offer apps or WhatsApp groups to share meal plans. That's fine. But does the technology actually improve your outcomes, or is it just packaging?
                        </p>
                        <p>Look for whether:</p>
                        <ul className="space-y-3 list-none p-0">
                            {[
                                "Your dietician can see your meal adherence data in real time",
                                "You can log meals — including outside meals — and scan food items",
                                "Your health parameters sync so the dietician reviews them before each consultation",
                                "The app provides cooking instructions and ingredient lists, not just meal names"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <span className="text-[#217328] font-black text-lg leading-none mt-0.5">✓</span>
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Technology should reduce friction and increase accountability — not just make the service look modern.
                        </p>

                        {/* Section 8 — Chandigarh dedicated */}
                        <h2 className="text-3xl font-black mt-12 mb-4">7. Finding the Best Dietician in Chandigarh: Same Principles, Different City</h2>
                        <p>
                            If you're based in Chandigarh or the tricity area (Mohali, Panchkula), the search process is identical. Chandigarh has a growing community of qualified nutrition professionals — but the quality varies widely.
                        </p>
                        <p>
                            The <strong>best dietician in Chandigarh</strong> for your needs is one who has verifiable clinical credentials, experience with your specific health concern, structured weekly involvement, a proper physical assessment before creating your plan, and technology that tracks adherence rather than just sharing PDFs.
                        </p>
                        <p>
                            One thing worth considering: Chandigarh residents increasingly use at-home nutrition services that bring the assessment and support to them, rather than requiring clinic visits. This is especially relevant for elderly individuals, people with mobility constraints, or anyone with a demanding schedule.
                        </p>

                        {/* Section 9 — Questions to ask */}
                        <h2 className="text-3xl font-black mt-12 mb-4">8. Questions to Ask Before You Commit</h2>
                        <p>
                            Before signing up with any dietician — in Noida, Chandigarh, or anywhere — run through this checklist:
                        </p>

                        {[
                            {
                                heading: "On Credentials",
                                questions: [
                                    "What is your educational background in nutrition?",
                                    "Are you a registered/certified clinical dietitian?",
                                    "Do you specialise in my specific condition?"
                                ]
                            },
                            {
                                heading: "On Process",
                                questions: [
                                    "How will my initial assessment be conducted?",
                                    "How frequently will we consult?",
                                    "What happens if I'm not seeing results after 4–6 weeks?"
                                ]
                            },
                            {
                                heading: "On Accountability",
                                questions: [
                                    "How will my meal adherence be tracked?",
                                    "Will I have access to a dietitian between weekly calls?",
                                    "How often will my body parameters be measured?"
                                ]
                            },
                            {
                                heading: "On Outcomes",
                                questions: [
                                    "What realistic results can I expect in 3 months?",
                                    "Do you have outcomes data from clients with similar conditions?"
                                ]
                            }
                        ].map((group, gi) => (
                            <div key={gi} className="mb-6">
                                <h3 className="text-lg font-black text-[#217328] mb-3 uppercase tracking-wide">{group.heading}</h3>
                                <ul className="space-y-2 list-none p-0">
                                    {group.questions.map((q, qi) => (
                                        <li key={qi} className="flex items-start gap-3 text-slate-700 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100">
                                            <span className="text-[#4CAF50] font-black mt-0.5">→</span>
                                            <span>{q}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <p>
                            A professional with genuine depth will welcome every one of these questions.
                        </p>

                        {/* Section 10 — Benchmark */}
                        <h2 className="text-3xl font-black mt-12 mb-4">9. What Good Nutrition Care Actually Looks Like — A Benchmark</h2>
                        <p>
                            To help you calibrate your expectations, here's what a properly structured nutrition programme should include:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                { icon: "📍", label: "Monthly at-location body assessment", detail: "At your home or preferred location" },
                                { icon: "📞", label: "Weekly dietitian consultations", detail: "Call or video, every single week" },
                                { icon: "🥗", label: "Personalised weekly meal plans", detail: "With ingredient lists and cooking steps" },
                                { icon: "📊", label: "Real-time adherence tracking", detail: "Your dietician sees your data live" },
                                { icon: "🔬", label: "Monthly plan refinement", detail: "Based on actual assessment data" },
                                { icon: "💊", label: "Condition-specific protocols", detail: "PCOD, thyroid, diabetes, and more" }
                            ].map((item, i) => (
                                <li key={i} className="bg-green-50 p-5 rounded-2xl border border-green-100">
                                    <div className="text-2xl mb-2">{item.icon}</div>
                                    <p className="font-black text-slate-900 leading-tight mb-1">{item.label}</p>
                                    <p className="text-sm text-slate-500">{item.detail}</p>
                                </li>
                            ))}
                        </ul>
                        <p>
                            If any of these are missing from what you're being offered, ask why — and decide whether the gap matters for your goals. You can see the full breakdown on our{' '}
                            <Link href="/pricing" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">pricing page</Link>{' '}
                            and{' '}
                            <Link href="/how-it-works" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">how it works page</Link>.
                        </p>

                        {/* Conclusion */}
                        <h2 className="text-3xl font-black mt-12 mb-4 text-[#217328]">Finding the Right Fit — Final Thoughts</h2>
                        <p>
                            There's no shortage of people calling themselves dieticians in Noida, Chandigarh, or any major Indian city. But a <strong>good dietician in Noida</strong> — one who will actually move the needle on your health — is someone who checks all the boxes: qualifications, specialisation, weekly involvement, personalisation, and proper assessment.
                        </p>
                        <p>
                            Don't let a polished Instagram page or a low price point be the deciding factor. The investment you make in the right nutrition professional will pay back in measurable, lasting results.
                        </p>
                        <p>
                            If you're looking for structured, at-location nutrition care with weekly dietitian consultations and monthly in-person assessments — without stepping into a clinic —{' '}
                            <Link href="/programs" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">explore our programs</Link>{' '}
                            or{' '}
                            <Link href="/contact" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">get in touch</Link>{' '}
                            and we'll help you figure out what's right for your goals.
                        </p>

                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl font-black text-slate-900 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "What qualifications should a good dietician in Noida have?",
                                    a: "A good dietician in Noida should hold a B.Sc. or M.Sc. in Nutrition and Dietetics, or an RD (Registered Dietitian) certification. Always verify credentials before enrolling in any nutrition program."
                                },
                                {
                                    q: "How is a dietician different from a nutritionist?",
                                    a: "A dietician holds a formal clinical degree and is qualified to work with medical conditions like diabetes, PCOD, and thyroid disorders. A nutritionist may have broader wellness training but may not be clinically certified for medical nutrition therapy."
                                },
                                {
                                    q: "Should I look for a dietician online or offline in Noida or Chandigarh?",
                                    a: "Both work, but the best option is a service that combines professional in-person assessments with regular remote consultations — giving you the benefits of both without the inconvenience of commuting to a clinic every week."
                                },
                                {
                                    q: "How often should I consult my dietician?",
                                    a: "Weekly consultations are the gold standard for real, measurable results. Monthly-only check-ins are too infrequent to course-correct your plan when it's not working."
                                }
                            ].map((faq, i) => (
                                <details key={i} className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-slate-900 text-lg list-none">
                                        {faq.q}
                                        <svg className="w-5 h-5 text-[#217328] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                </article>

                {/* ── SIDEBAR ── */}
                <aside className="lg:w-1/3">
                    <div className="sticky top-32 space-y-10">

                        {/* Author Card */}
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100">
                                    <Image
                                        src="/anita-menon.webp"
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
                                Anita specialises in clinical nutrition and at-home care delivery across Delhi NCR. She has worked with clients managing weight, PCOD, thyroid, and diabetes through structured, evidence-based diet protocols.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center">
                                Meet the Full Team
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Related Programs */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Programs</h4>
                            <div className="space-y-3">
                                {[
                                    { label: "Weight Management", href: "/programs/weight-management" },
                                    { label: "PCOD / PCOS Care", href: "/programs/pcod-pcos" },
                                    { label: "Thyroid Management", href: "/programs/thyroid-management" },
                                    { label: "Diabetes Management", href: "/programs/diabetes-management" },
                                    { label: "How It Works", href: "/how-it-works" },
                                ].map((link) => (
                                    <Link key={link.href} href={link.href} className="block group">
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                            <span className="font-bold text-slate-800">{link.label}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-[#217328] to-[#1a5d20] p-8 rounded-[2rem] text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <h4 className="text-2xl font-black mb-3 relative z-10">Start Your Nutrition Journey</h4>
                            <p className="opacity-90 mb-6 text-sm font-medium relative z-10">
                                At-location visits. Weekly dietitian calls. No clinic commute. Available across Noida, Gurgaon &amp; Delhi NCR.
                            </p>
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg"
                            >
                                Book a Consultation
                            </Link>
                        </div>

                        {/* Pricing Teaser */}
                        <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 p-8 rounded-[2rem]">
                            <h4 className="text-lg font-black text-slate-900 mb-4">Transparent Pricing</h4>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-600 text-sm font-medium">General Programs</span>
                                    <span className="font-black text-slate-900">₹7,500 / 3 months</span>
                                </div>
                                <div className="border-t border-[#4CAF50]/20"></div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-600 text-sm font-medium">Specialised Programs</span>
                                    <span className="font-black text-slate-900">₹9,000 / 3 months</span>
                                </div>
                            </div>
                            <Link
                                href="/pricing"
                                className="block w-full text-center border-2 border-[#217328] text-[#217328] py-3 rounded-xl font-black tracking-widest uppercase hover:bg-[#217328] hover:text-white transition-all text-sm"
                            >
                                See Full Pricing
                            </Link>
                        </div>

                    </div>
                </aside>
            </div>

            {/* Footer CTA */}
            <section className="max-w-4xl mx-auto px-6 mt-24">
                <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-[3rem] p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        Ready to find the right dietician — without leaving home?
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Structured nutrition care with monthly at-location assessments and weekly dietitian consultations. Serving Noida, Gurgaon, and Delhi NCR.
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

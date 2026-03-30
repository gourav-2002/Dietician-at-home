import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "The First 40 Days After Delivery: What Confinement Food Gets Right | Best Dietician in Jaipur",
    description: "Discover what traditional postpartum confinement foods get right — and what they miss. Expert insights from the best dietician in Jaipur on nourishing your body after delivery. Also serving dieticians in Chandigarh and across India.",
    keywords: "first 40 days after delivery, postpartum confinement food, best dietician in jaipur, postpartum nutrition India, confinement food India, jaapa diet, new mother diet, postpartum recovery, dieticians in chandigarh, home dietitian postpartum",
    alternates: {
        canonical: 'https://dieticianathome.com/blog/first-40-days-after-delivery-confinement-food',
    },
    openGraph: {
        title: "The First 40 Days After Delivery: What Confinement Food Gets Right (and Wrong)",
        description: "What traditional postpartum confinement food gets right — and where it falls short. Expert postpartum nutrition guidance for Indian new mothers.",
        url: 'https://dieticianathome.com/blog/first-40-days-after-delivery-confinement-food',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/first-40-days-confinement-food.jpg',
                width: 1200,
                height: 630,
                alt: 'Traditional Indian postpartum confinement food — methi ladoo and panjiri preparation at home',
            },
        ],
        locale: 'en_IN',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: "The First 40 Days After Delivery: What Confinement Food Gets Right (and Wrong)",
        description: "Expert postpartum nutrition guide for Indian new mothers — tradition meets clinical science.",
        images: ['https://dieticianathome.com/first-40-days-confinement-food.jpg'],
    },
};

export default function PostpartumConfinementBlog() {

    const category = "Postpartum Care";
    const readingTime = "10 min read";
    const publishDate = "March 30, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The First 40 Days After Delivery: What Traditional Confinement Food Gets Right (and Wrong)",
        "image": "https://dieticianathome.com/first-40-days-confinement-food.jpg",
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
        "datePublished": "2026-03-30",
        "description": "What traditional Indian postpartum confinement food gets right and where it falls short — expert nutritional analysis for new mothers from the best dietician in Jaipur.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dieticianathome.com/blog/first-40-days-after-delivery-confinement-food"
        }
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
                        <span className="truncate max-w-[200px] md:max-w-none">The First 40 Days After Delivery</span>
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
                    <span className="text-gray-500 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {publishDate}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                    The First 40 Days After Delivery: What Traditional Confinement Food Gets{" "}
                    <span className="text-[#217328]">Right (and Wrong)</span>
                </h1>
            </header>

            {/* Content Layout */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

                {/* Main Article */}
                <article className="lg:w-2/3">

                    {/* Hero Image */}
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
                        <Image
                            src="/first-40-days-confinement-food.jpg"
                            alt="Traditional Indian postpartum food — methi ladoo, panjiri and warming spices prepared at home for new mothers"
                            width={1200}
                            height={675}
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-p:text-lg">

                        {/* Opening pull quote */}
                        <p className="italic text-xl text-slate-600 border-l-4 border-[#4CAF50] pl-6 py-2">
                            There is a reason grandmothers across India guard their postpartum recipes with the same seriousness as heirlooms. The first 40 days after delivery have been treated as sacred recovery time for centuries — but how much of it actually holds up to modern nutritional science?
                        </p>

                        <p>
                            The first 40 days after delivery — known in different communities as <em>sutika kaal</em>, <em>jaapa</em>, or simply "the confinement period" — are built around a simple truth: a mother's body needs deep nourishment, not just rest. Women were fed specific foods, kept warm, and protected from stress. The kitchen became a form of medicine.
                        </p>
                        <p>
                            As the <strong>best dietician in Jaipur</strong> would tell you: the truth, as always, lies somewhere in the middle. Traditional practice got a remarkable amount right — and missed a few things that matter enormously.
                        </p>

                        {/* Why the 40 days matter */}
                        <h2 className="text-3xl font-black mt-12 mb-6">Why the First 40 Days Matter More Than You Think</h2>
                        <p>
                            Childbirth is one of the most physiologically demanding events a human body goes through. Whether vaginal or caesarean, your body has lost significant blood and fluid, depleted iron, zinc, folate, and B12 stores, experienced a dramatic hormonal shift, begun lactation — which burns an additional 400–500 calories per day — and started healing internal tissue.
                        </p>
                        <p>
                            The 40-day window maps closely onto what clinical literature calls the <strong>postpartum recovery period</strong> — the time when your uterus involutes, hormones restabilise, and nutritional deficits either get addressed or become chronic. What you eat in these 40 days directly affects your physical recovery speed, breast milk supply and composition, postpartum mood and energy, hair loss severity, long-term bone density, and risk of postpartum depression.
                        </p>

                        <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100 my-10">
                            <h3 className="text-xl font-bold text-[#217328] mb-4">Important to Know</h3>
                            <p className="text-slate-800 m-0">This is not the time to diet. This is the time to <strong>nourish deeply</strong>. Every meal in this window is an investment in recovery — yours and your baby's.</p>
                        </div>

                        {/* What tradition gets right */}
                        <h2 className="text-3xl font-black mt-12 mb-6">What Traditional Confinement Food Gets RIGHT</h2>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Warming Spices — Ajwain, Saunth, Methi, and Black Pepper</h3>
                        <p>
                            Traditional postpartum cooking across Rajasthan, Punjab, and North India leans heavily on warming spices. This is nutritionally sound. <strong>Ajwain</strong> aids digestion and reduces post-delivery bloating; <strong>saunth (dry ginger)</strong> has anti-inflammatory properties and supports uterine recovery; <strong>methi (fenugreek)</strong> is a well-documented galactagogue that supports breast milk production; and <strong>black pepper</strong> increases bioavailability of curcumin from turmeric. These aren't just flavours — they are functional ingredients addressing specific postpartum needs. Traditional kitchens knew this empirically long before clinical studies confirmed it.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Ghee — Liberally Used, and Rightly So</h3>
                        <p>
                            Modern health culture spent years demonising fat. Traditional postpartum diets never got that memo — and they were right. Ghee is rich in butyric acid (supports gut healing), fat-soluble vitamins A, D, E, and K (critical for tissue repair and immunity), and healthy saturated fats needed for hormone production post-delivery.
                        </p>
                        <p>
                            The fat content in ghee also helps carry fat-soluble nutrients from fenugreek, turmeric, and leafy greens into the bloodstream more effectively. The <em>methi ke ladoo</em> and <em>panjiri</em> made with generous ghee, dry fruits, and edible gum (gond) that are staples in Rajasthani postpartum cooking? Nutritionally excellent — and something even the <strong>best dietician in Jaipur</strong> will endorse without hesitation.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Daily Dry Fruits and Nuts</h3>
                        <p>
                            Almonds, cashews, walnuts, dates, raisins — traditional confinement diets pile these on with good reason. Dates provide iron and natural sugars for energy recovery and support milk production. Almonds supply calcium, magnesium, and Vitamin E — all depleted during pregnancy. Walnuts deliver Omega-3 fatty acids critical for infant brain development via breast milk. Raisins offer quick iron and easy digestion. The daily serving of mixed dry fruits is one of the smartest nutritional habits in traditional postpartum practice.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Bone Broths and Slow-Cooked Dals</h3>
                        <p>
                            Slow-cooked mutton broth, <em>paya</em> (trotters), and deeply simmered dals are standard postpartum fare in many communities. These are collagen-rich, mineral-dense, and easy to digest — ideal for a body healing from the inside out. For vegetarian households, long-cooked moong dal, masoor dal, and urad dal provide complete amino acid profiles with gentle digestion. Slow cooking also reduces anti-nutrients, improving absorption significantly.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Mandatory Rest as a Nutritional Strategy</h3>
                        <p>
                            Traditional confinement doesn't just govern food — it governs <em>rest</em>. From a nutritional standpoint: rest is when nutrients are actually used for repair. If you're running on cortisol and sleep deprivation, even the best diet won't deliver results. The confinement period's insistence on rest is, nutritionally speaking, absolutely correct.
                        </p>

                        <blockquote className="my-12 px-8 py-4 border-l-8 border-[#217328] bg-gray-50 italic text-2xl font-medium text-slate-800">
                            "Traditional kitchens were doing functional nutrition long before the term was coined. The gap isn't in their wisdom — it's in personalisation."
                        </blockquote>

                        {/* What tradition gets wrong */}
                        <h2 className="text-3xl font-black mt-12 mb-6">What Traditional Confinement Food Gets WRONG</h2>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Severe Fluid Restriction</h3>
                        <p>
                            Many traditional systems limit water intake sharply in early postpartum days — sometimes to just warm milk or ajwain water. Clinically, this is dangerous. A breastfeeding mother needs <strong>3–3.5 litres of fluid daily</strong>. Dehydration directly reduces milk supply, causes constipation, increases urinary tract infection risk, and slows uterine recovery. Warm fluids are fine — but cutting total quantity is not.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Complete Avoidance of Fruits and Raw Vegetables</h3>
                        <p>
                            "No citrus. No raw things. No cold fruits." These restrictions are widespread — and largely unfounded. Vitamin C from citrus and seasonal fruits is critical for collagen synthesis (wound healing), iron absorption from plant sources, immune function, and energy metabolism. Avoiding all fruits for 40 days means new mothers miss a key window to replenish Vitamin C, folate, and fibre.
                        </p>
                        <p>
                            <strong>The fix:</strong> Room-temperature or slightly warmed fruits — stewed apple, ripe banana, chikoo, papaya — are excellent postpartum choices. There is no clinical reason to avoid them entirely.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Calories Without Nutrient Density</h3>
                        <p>
                            Some traditional diets swing to the opposite extreme — loading new mothers with calorie-dense but micronutrient-poor foods. Commercially made ladoos using refined flour and excess sugar, or deep-fried snacks eaten multiple times a day, can cause rapid post-delivery weight gain, blood sugar instability, and gut discomfort. The preparation method matters enormously — traditional sweets made with whole wheat, ghee, and nuts are fine; shortcut versions using maida are not.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Protein Gets Overlooked</h3>
                        <p>
                            Traditional confinement diets are often carbohydrate and fat-heavy, with insufficient attention to protein. Yet protein is the primary raw material for tissue repair, milk production, hormonal recovery, and hair retention (postpartum hair loss is significantly worsened by protein deficiency). A new mother needs at least <strong>70–80g of protein per day</strong> — most traditional diets fall short.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. One-Size-Fits-All Without Medical Context</h3>
                        <p>
                            Traditional confinement food doesn't differentiate between a C-section and a normal delivery, a mother with gestational diabetes history, one with thyroid conditions, or one who is underweight versus overweight. The same <em>panjiri</em> and <em>gond ke ladoo</em> are served to all. This is where traditional practice hits its limit.
                        </p>
                        <p>
                            Modern postpartum nutrition needs to be <strong>personalised</strong> — based on delivery type, health history, blood work, weight, breastfeeding status, and lifestyle. This is exactly what structured programmes like the{" "}
                            <Link href="/programs/postpartum-care" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                postpartum care programme at Dietitian at Home
                            </Link>{" "}
                            are designed to deliver.
                        </p>

                        {/* Deficiency table */}
                        <h2 className="text-3xl font-black mt-12 mb-6">Nutrients Most Commonly Deficient After Delivery</h2>
                        <p>Even mothers who follow traditional diets carefully often emerge from the 40-day window with these deficiencies, which then affect them for years:</p>

                        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm my-8">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-[#217328] text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">Nutrient</th>
                                        <th className="px-6 py-4 font-bold">Why It's Depleted</th>
                                        <th className="px-6 py-4 font-bold">Commonly Ignored Symptom</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ["Iron", "Blood loss during delivery", "Fatigue, brain fog, breathlessness"],
                                        ["Calcium", "Redirected to breast milk", "Dental issues, leg cramps, bone loss"],
                                        ["Vitamin D", "Never adequately stored", "Fatigue, mood dips, low immunity"],
                                        ["Vitamin B12", "Heavily used during pregnancy", "Nerve-related fatigue, mood issues"],
                                        ["Omega-3", "Transferred to infant", "Postpartum depression risk"],
                                        ["Zinc", "Depleted during delivery", "Slow wound healing, hair loss"],
                                        ["Folate", "Used up during pregnancy", "Low energy, poor cell repair"],
                                    ].map(([nutrient, reason, symptom], i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-bold text-[#217328]">{nutrient}</td>
                                            <td className="px-6 py-4 text-slate-700">{reason}</td>
                                            <td className="px-6 py-4 text-slate-600">{symptom}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Sample framework */}
                        <h2 className="text-3xl font-black mt-12 mb-6">A Sample Nutrition Framework for the First 40 Days</h2>
                        <p>
                            This is not a rigid meal plan — it is a framework. For personalised guidance — whether you're looking at{" "}
                            <Link href="/programs/postpartum-care" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                dieticians in Chandigarh
                            </Link>
                            , Delhi, Jaipur, or anywhere across India — consult a professional.
                        </p>

                        <div className="space-y-4 my-8">
                            {[
                                {
                                    time: "Morning (within 30 mins of waking)",
                                    food: "Warm water with saunth + 8–10 soaked almonds + 1–2 dates",
                                },
                                {
                                    time: "Breakfast",
                                    food: "Whole wheat ajwain paratha with ghee + 2 scrambled eggs with turmeric OR moong dal cheela + warm haldi milk",
                                },
                                {
                                    time: "Mid-Morning",
                                    food: "Seasonal fruit (banana, chikoo, stewed apple) + mixed nuts",
                                },
                                {
                                    time: "Lunch",
                                    food: "Dal + sabzi + 2 rotis with ghee + small bowl of curd + methi seeds in the dal",
                                },
                                {
                                    time: "Evening",
                                    food: "1–2 pieces homemade methi ladoo or panjiri + warm ajwain water",
                                },
                                {
                                    time: "Dinner",
                                    food: "Light khichdi with ghee + protein portion (paneer, eggs, or dal) + cooked green vegetable",
                                },
                                {
                                    time: "Bedtime",
                                    food: "Warm haldi doodh with a pinch of saunth",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 bg-[#4CAF50]/5 border border-[#4CAF50]/20 p-5 rounded-2xl">
                                    <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#217328]"></div>
                                    <div>
                                        <p className="font-black text-[#217328] text-sm uppercase tracking-wide mb-1">{item.time}</p>
                                        <p className="text-slate-700 m-0">{item.food}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* When to seek help */}
                        <h2 className="text-3xl font-black mt-12 mb-6">When to Seek Professional Postpartum Nutrition Support</h2>
                        <p>If you're experiencing any of the following, traditional food alone won't be enough:</p>

                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-6">
                            {[
                                "Extreme fatigue beyond the first 2 weeks",
                                "Milk supply concerns",
                                "Rapid or no weight change postpartum",
                                "Low mood, anxiety, or signs of postpartum depression",
                                "History of gestational diabetes, thyroid, PCOD, or anaemia",
                                "C-section recovery that feels slow",
                                "Excessive hair loss after 3 months",
                                "Persistent digestive issues or bloating",
                            ].map((item, i) => (
                                <li key={i} className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start gap-2">
                                    <span className="text-red-500 font-bold mt-0.5">→</span>
                                    <span className="text-slate-700 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p>
                            Professional postpartum nutrition support works by assessing your specific parameters, reviewing blood work if needed, and building a plan that works <em>with</em> your traditional practices while filling in the gaps. You can learn more about{" "}
                            <Link href="/how-it-works" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                how the service works
                            </Link>{" "}
                            or check the{" "}
                            <Link href="/pricing" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                pricing page
                            </Link>{" "}
                            to see what's included.
                        </p>

                        {/* CTA Banner */}
                        <div className="bg-[#217328] text-white p-10 rounded-[2.5rem] my-12 shadow-xl">
                            <h3 className="text-3xl font-black mb-4">New Mother? Let's Build Your Postpartum Plan.</h3>
                            <p className="text-xl opacity-90 mb-8 font-medium">
                                Our dietitians visit you at home, build a plan around your traditional practices, and stay involved every week throughout your recovery.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-[#217328] px-8 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all transform hover:-translate-y-1"
                            >
                                Talk to Our Postpartum Dietitian
                            </Link>
                        </div>

                        {/* Conclusion */}
                        <h2 className="text-3xl font-black mt-12 mb-6 text-[#217328]">Final Thought</h2>
                        <p>
                            The women who designed India's confinement food traditions were, in their own way, nutritional scientists. They observed. They passed down what worked. They built systems of care around the most vulnerable window in a woman's life — and they got a remarkable amount right.
                        </p>
                        <p>
                            Where they fell short was not in wisdom, but in the tools available to them. They didn't have blood panels. They didn't know about Vitamin D or B12. They couldn't personalise a plan for a mother with thyroid disease versus one without. That's where modern nutrition steps in — not to replace the <em>jaapa</em>, but to make it better.
                        </p>
                        <p>
                            The first 40 days are yours. Use them well. And if you need support — whether through{" "}
                            <Link href="/programs/postpartum-care" className="text-[#217328] font-bold border-b-2 border-[#4CAF50]/30 hover:border-[#217328] transition-all">
                                dieticians in Chandigarh
                            </Link>
                            , Jaipur, or at-home across Delhi NCR — structured postpartum care is closer and more affordable than most new mothers realise.
                        </p>

                        {/* Related Posts */}
                        <div className="mt-16 pt-10 border-t border-gray-100">
                            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Related Reading</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { href: "/programs/postpartum-care", label: "Our Postpartum Care Programme" },
                                    { href: "/programs/pregnancy-nutrition", label: "Pregnancy Nutrition: Trimester by Trimester" },
                                    { href: "/programs/preconception-care", label: "Preconception Nutrition: Preparing Before Pregnancy" },
                                    { href: "/how-it-works", label: "How Dietitian at Home Works" },
                                ].map((link, i) => (
                                    <Link key={i} href={link.href} className="block group">
                                        <div className="bg-white border border-gray-100 p-4 rounded-2xl group-hover:border-[#217328] transition-all flex items-center justify-between shadow-sm">
                                            <span className="font-bold text-slate-800 text-sm">{link.label}</span>
                                            <span className="text-[#217328] opacity-0 group-hover:opacity-100 transition-all">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
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
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Anita specialises in postpartum nutrition, PCOD, thyroid management, and pregnancy care. She has helped hundreds of new mothers navigate recovery through personalised, home-based nutrition guidance.
                            </p>
                            <Link href="/care-team" className="text-[#217328] font-black text-xs uppercase tracking-widest hover:underline flex items-center">
                                View All Experts
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Related Services */}
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Related Programmes</h4>
                            <div className="space-y-4">
                                {[
                                    { href: "/programs/postpartum-care", label: "Postpartum Care" },
                                    { href: "/programs/pregnancy-nutrition", label: "Pregnancy Nutrition" },
                                    { href: "/programs/preconception-care", label: "Preconception Care" },
                                    { href: "/how-it-works", label: "How It Works" },
                                ].map((item, i) => (
                                    <Link key={i} href={item.href} className="block group">
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
                            <h4 className="text-2xl font-black mb-4 relative z-10">Postpartum Nutrition at Home</h4>
                            <p className="opacity-90 mb-8 text-sm font-medium relative z-10">
                                No clinic visits. A trained representative comes to you. Weekly dietitian consultations. Personalised meal plans from day one.
                            </p>
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-white text-[#217328] py-4 rounded-xl font-black tracking-widest uppercase hover:bg-slate-100 transition-all relative z-10 shadow-lg"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/pricing"
                                className="block w-full text-center mt-3 text-white/80 py-3 rounded-xl font-bold text-sm tracking-wide hover:text-white transition-all relative z-10"
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
                        Ready to make the first 40 days count?
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Our postpartum nutrition programme is built around your recovery — at home, every week, with a real dietitian by your side.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-[#217328] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase shadow-2xl shadow-[#217328]/30 hover:-translate-y-1 transition-all"
                        >
                            Book a Free Call
                        </Link>
                        <Link
                            href="/programs/postpartum-care"
                            className="bg-white text-slate-900 border border-gray-200 px-10 py-5 rounded-2xl font-black tracking-widest uppercase hover:bg-gray-50 transition-all"
                        >
                            View Programme
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
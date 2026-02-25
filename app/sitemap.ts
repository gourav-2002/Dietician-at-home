import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dieticianathome.com';

    // Main pages
    const mainPages = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
        { url: `${baseUrl}/how-it-works`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/care-team`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/app-tools`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/corporate-wellness`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/who-is-this-for`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    ];

    // Program pages (dynamic routes under /programs/)
    const programSlugs = [
        'weight-management',
        'pcod-pcos',
        'pregnancy-nutrition',
        'postpartum-care',
        'preconception-care',
        'thyroid-management',
        'diabetes-management',
        'cancer-recovery',
        'family-nutrition',
        'elderly-nutrition',
    ];

    const programPages = programSlugs.map((slug) => ({
        url: `${baseUrl}/programs/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Standalone program pages (not under /programs/)
    const standaloneProgramPages = [
        { url: `${baseUrl}/weight-management`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/pcod-care`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/cancer-recovery`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/thyroid-management`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/elderly-nutrition`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/diabetes-management`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/family-nutrition`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/pregnancy-nutrition`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/preconception-care`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/postpartum-care`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/programs/keto-diet`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/programs/gut-wellness`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/programs/intermittent-fasting`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    ];

    // Blog pages
    const blogPages = [
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/blog/understanding-pcod-nutrition-strategies`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/monthly-home-visits-nutrition-care-benefits`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/how-to-choose-right-dietitian-health-goals`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/elder-care-nutrition-specialized-diet-plans-seniors`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/7-signs-professional-nutrition-care`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/first-month-home-dietitian-service`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/why-traditional-diet-charts-fail`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/5-reasons-diet-failed-at-home-monitoring`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/delhi-ncr-food-culture-diet-goals-balance`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/pcod-weight-gain-dieticians-delhi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/why-thyroid-medication-isnt-enough-nutrition-role`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/indian-breakfast-choices-for-diabetics-beyond-poha-upma`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog/intermittent-fasting-vs-calorie-deficit-indian-lifestyle`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    ];

    // Legal / policy pages
    const legalPages = [
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/refund-policy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/medical-disclaimer`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/service-disclosure`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    ];

    return [
        ...mainPages,
        ...programPages,
        ...standaloneProgramPages,
        ...blogPages,
        ...legalPages,
    ];
}

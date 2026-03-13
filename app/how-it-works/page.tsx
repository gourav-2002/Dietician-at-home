import type { Metadata } from 'next';
import HowItWorks from '@/components/HowItWorks';

export const metadata: Metadata = {
    title: 'How Dietician Gurgaon Works | Best Dietician Near Me Process',
    description: 'Step-by-step guide: Monthly home visits, weekly dietician consultations, personalized meal plans & tracking. Best dietician near me in Gurgaon. No clinic visits.',
    keywords: 'dietician gurgaon, best dietician near me, how dietician at home works, nutrition program process, at-home dietician steps, meal planning process, dietician session process, home visit dietician gurgaon',
    openGraph: {
        title: 'How Dietician Gurgaon Works | Best Dietician Near Me Process',
        description: 'Step-by-step guide: Monthly home visits, weekly dietician consultations, personalized meal plans & tracking. Best dietician near me in Gurgaon. No clinic visits.',
        url: 'https://dieticianathome.com/how-it-works',
        siteName: 'Dietician at Home',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How Dietician Gurgaon Works | Best Dietician Near Me Process',
        description: 'Step-by-step guide: Monthly home visits, weekly dietician consultations, personalized meal plans & tracking. Best dietician near me in Gurgaon. No clinic visits.',
    },
    alternates: {
        canonical: 'https://dieticianathome.com/how-it-works',
    },
};

export default function HowItWorksPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Dietician at Home - How It Works',
        description: 'Understand our process: Home visits, weekly dietician consultations, and personalized meal plans.',
        url: 'https://dieticianathome.com/how-it-works',
        provider: {
            '@type': 'Organization',
            name: 'Dietician at Home',
            url: 'https://dieticianathome.com',
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://dieticianathome.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'How It Works',
                item: 'https://dieticianathome.com/how-it-works',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <HowItWorks />
        </>
    );
}
import type { Metadata } from 'next';
import WhoIsThisFor from '@/components/WhoIsThisFor';

export const metadata: Metadata = {
    title: 'Dietitian in Medanta Gurgaon | Find Dietician Dr Near Me',
    description: 'Find expert dietician dr near me & dietitian in Medanta Gurgaon area. Perfect for busy professionals, families, seniors, PCOD/diabetes patients & serious health goals.',
    keywords: 'dietitian in medanta gurgaon, dietician dr near me, who needs dietician, nutrition for busy professionals, family nutrition programs, senior citizen nutrition, medical condition diet, personalized nutrition service gurgaon',
    openGraph: {
        title: 'Dietitian in Medanta Gurgaon | Find Dietician Dr Near Me',
        description: 'Find expert dietician dr near me & dietitian in Medanta Gurgaon area. Perfect for busy professionals, families, seniors, PCOD/diabetes patients & serious health goals.',
        url: 'https://dieticianathome.com/who-is-this-for',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/persona-busy-professional.jpg',
            width: 1200,
            height: 630,
            alt: 'Who Is This For - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dietitian in Medanta Gurgaon | Find Dietician Dr Near Me',
        description: 'Find expert dietician dr near me & dietitian in Medanta Gurgaon area. Perfect for busy professionals, families, seniors, PCOD/diabetes patients & serious health goals.',
        images: ['https://dieticianathome.com/persona-busy-professional.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/who-is-this-for',
    },
};

export default function WhoIsThisForPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Dietician at Home - Specialized Care Personas',
        description: 'Find out who can benefit from our personalized at-home nutrition services in Gurgaon.',
        url: 'https://dieticianathome.com/who-is-this-for',
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
                name: 'Who Is This For',
                item: 'https://dieticianathome.com/who-is-this-for',
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
            <WhoIsThisFor />
        </>
    );
}
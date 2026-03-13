import type { Metadata } from 'next';
import CareTeam from '@/components/CareTeam';

export const metadata: Metadata = {
    title: 'Top Dietician in Gurgaon | Meet Top Dieticians Near Me',
    description: 'Meet top dieticians near me in Gurgaon. Certified clinical experts with 10+ years experience. Weekly sessions, personalized care & trained at-home visit teams.',
    keywords: 'top dietician in gurgaon, top dieticians near me, certified dieticians gurgaon, clinical nutritionist team, qualified dietician, expert nutritionist gurgaon, dietician credentials, registered dietician gurgaon, professional dietician team',
    openGraph: {
        title: 'Top Dietician in Gurgaon | Meet Top Dieticians Near Me',
        description: 'Meet top dieticians near me in Gurgaon. Certified clinical experts with 10+ years experience. Weekly sessions, personalized care & trained at-home visit teams.',
        url: 'https://dieticianathome.com/care-team',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/home-visit.jpg',
            width: 1200,
            height: 630,
            alt: 'Expert Dietician Care Team - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Top Dietician in Gurgaon | Meet Top Dieticians Near Me',
        description: 'Meet top dieticians near me in Gurgaon. Certified clinical experts with 10+ years experience. Weekly sessions, personalized care & trained at-home visit teams.',
        images: ['https://dieticianathome.com/home-visit.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/care-team',
    },
};

export default function CareTeamPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Dietician at Home - Expert Care Team',
        description: 'Meet our team of qualified clinical dieticians and nutrition experts in Gurgaon.',
        url: 'https://dieticianathome.com/care-team',
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
                name: 'Care Team',
                item: 'https://dieticianathome.com/care-team',
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
            <CareTeam />
        </>
    );
}
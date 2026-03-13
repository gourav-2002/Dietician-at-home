import type { Metadata } from 'next';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';

export const metadata: Metadata = {
    title: 'Medical Disclaimer | Licensed Dietician Near Me in Gurgaon',
    description: 'Medical disclaimer for licensed & certified dietician near me in Gurgaon. Understand scope, limitations & professional guidance boundaries of nutrition services.',
    keywords: 'licensed dietician near me, certified dietician near me, medical disclaimer, nutrition service disclaimer, dietician liability gurgaon, health service terms, professional dietician gurgaon',
    openGraph: {
        title: 'Medical Disclaimer | Licensed Dietician Near Me in Gurgaon',
        description: 'Medical disclaimer for licensed & certified dietician near me in Gurgaon. Understand scope, limitations & professional guidance boundaries of nutrition services.',
        url: 'https://dieticianathome.com/medical-disclaimer',
        siteName: 'Dietician at Home',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Medical Disclaimer | Licensed Dietician Near Me in Gurgaon',
        description: 'Medical disclaimer for licensed & certified dietician near me in Gurgaon. Understand scope & professional guidance boundaries.',
    },
    alternates: {
        canonical: 'https://dieticianathome.com/medical-disclaimer',
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function MedicalDisclaimerPage() {
    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Medical Disclaimer - Dietician at Home',
        description: 'Understand the scope and professional boundaries of our nutrition services.',
        url: 'https://dieticianathome.com/medical-disclaimer',
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
                name: 'Medical Disclaimer',
                item: 'https://dieticianathome.com/medical-disclaimer',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <MedicalDisclaimer />
        </>
    );
}
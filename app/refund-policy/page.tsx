import type { Metadata } from 'next';
import RefundPolicy from '@/components/RefundPolicy';

export const metadata: Metadata = {
    title: 'Refund Policy | Affordable Dietician Near Me in Gurgaon',
    description: 'Refund & cancellation policy for affordable dietician near me in Gurgaon. Clear terms on refund eligibility, cancellation process & money-back timelines.',
    keywords: 'affordable dietician near me, cheap dietician near me, refund policy, cancellation policy, refund terms gurgaon, program cancellation, money back policy, dietician refund gurgaon',
    openGraph: {
        title: 'Refund Policy | Affordable Dietician Near Me in Gurgaon',
        description: 'Refund & cancellation policy for affordable dietician near me in Gurgaon. Clear terms on refund eligibility, cancellation process & money-back timelines.',
        url: 'https://dieticianathome.com/refund-policy',
        siteName: 'Dietician at Home',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Refund Policy | Affordable Dietician Near Me in Gurgaon',
        description: 'Refund & cancellation policy for affordable dietician near me in Gurgaon. Clear terms on refund eligibility & money-back timelines.',
    },
    alternates: {
        canonical: 'https://dieticianathome.com/refund-policy',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RefundPolicyPage() {
    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Refund & Cancellation Policy - Dietician at Home',
        description: 'Clear terms on refund eligibility and program cancellation process.',
        url: 'https://dieticianathome.com/refund-policy',
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
                name: 'Refund Policy',
                item: 'https://dieticianathome.com/refund-policy',
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
            <RefundPolicy />
        </>
    );
}
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
        images: [{
            url: 'https://dieticianathome.com/logo.png',
            width: 1200,
            height: 630,
            alt: 'Refund Policy - Dietician at Home',
        }],
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
    return <RefundPolicy />;
}
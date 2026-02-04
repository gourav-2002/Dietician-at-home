import type { Metadata } from 'next';
import TermsAndConditions from '@/components/TermsAndConditions';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Dietician Cost Near Me - Affordable Plans',
    description: 'Terms for affordable dietician near me in Gurgaon. Service agreement with transparent dietician cost, payment terms, cancellation policy & user obligations.',
    keywords: 'dietician cost near me, cheap dietician near me, terms and conditions, service agreement, affordable dietician gurgaon, payment terms, cancellation policy, service terms gurgaon',
    openGraph: {
        title: 'Terms & Conditions | Dietician Cost Near Me - Affordable Plans',
        description: 'Terms for affordable dietician near me in Gurgaon. Service agreement with transparent dietician cost, payment terms, cancellation policy & user obligations.',
        url: 'https://dieticianathome.com/terms-and-conditions',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/logo.png',
            width: 1200,
            height: 630,
            alt: 'Terms and Conditions - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Terms & Conditions | Dietician Cost Near Me - Affordable Plans',
        description: 'Terms for affordable dietician near me in Gurgaon. Service agreement with transparent cost, payment terms & cancellation policy.',
    },
    alternates: {
        canonical: 'https://dieticianathome.com/terms-and-conditions',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsAndConditionsPage() {
    return <TermsAndConditions />;
}
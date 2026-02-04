import type { Metadata } from 'next';
import PreconceptionCare from '@/components/PreconceptionCare';

export const metadata: Metadata = {
    title: 'Best Dietician in Gurgaon | Medical Dietician Near Me',
    description: 'Best medical dietician near me in Gurgaon for preconception care. Expert fertility nutrition, pregnancy prep plans & personalized support for couples trying to conceive.',
    keywords: 'best dietician in gurgaon, medical dietician near me, preconception nutrition, fertility diet gurgaon, pregnancy preparation, preconception care, fertility dietician gurgaon, preconception meal plans, trying to conceive nutrition, pre-pregnancy nutrition',
    openGraph: {
        title: 'Best Dietician in Gurgaon | Medical Dietician Near Me',
        description: 'Best medical dietician near me in Gurgaon for preconception care. Expert fertility nutrition, pregnancy prep plans & personalized support for couples trying to conceive.',
        url: 'https://dieticianathome.com/preconception-care',
        siteName: 'Dietician at Home',
        locale: 'en_IN',
        type: 'website',
        images: [{
            url: 'https://dieticianathome.com/images/programs/preconception-care-og.jpg',
            width: 1200,
            height: 630,
            alt: 'Preconception Nutrition Care - Professional Dietician guidance for couples preparing for pregnancy'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Dietician in Gurgaon | Medical Dietician Near Me',
        description: 'Best medical dietician near me in Gurgaon for preconception care. Expert fertility nutrition, pregnancy prep plans & personalized support for couples trying to conceive.',
        images: ['https://dieticianathome.com/images/programs/preconception-care-twitter.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/preconception-care',
    },
};

export default function PreconceptionCarePage() {
    return <PreconceptionCare />;
}
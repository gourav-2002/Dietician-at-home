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
        images: [{
            url: 'https://dieticianathome.com/logo.png',
            width: 1200,
            height: 630,
            alt: 'Medical Disclaimer - Dietician at Home',
        }],
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
    return <MedicalDisclaimer />;
}
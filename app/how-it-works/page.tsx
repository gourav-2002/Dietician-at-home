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
        images: [{
            url: 'https://dieticianathome.com/how-it-works-process.jpg',
            width: 1200,
            height: 630,
            alt: 'How It Works - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How Dietician Gurgaon Works | Best Dietician Near Me Process',
        description: 'Step-by-step guide: Monthly home visits, weekly dietician consultations, personalized meal plans & tracking. Best dietician near me in Gurgaon. No clinic visits.',
        images: ['https://dieticianathome.com/how-it-works-process.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/how-it-works',
    },
};

export default function HowItWorksPage() {
    return <HowItWorks />;
}
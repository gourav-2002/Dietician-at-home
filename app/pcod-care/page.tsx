import type { Metadata } from 'next';
import PCODCare from '@/components/PcodCare';

export const metadata: Metadata = {
    title: 'Best Dietician in Gurgaon for PCOD/PCOS | Good Near Me',
    description: 'Good dietician near me for PCOD/PCOS care in Gurgaon. Specialized hormone balance, insulin management & weight loss plans with weekly at-home consultations.',
    keywords: 'best dietician in gurgaon, good dietician near me, PCOD diet plan, PCOS diet gurgaon, PCOD nutrition, PCOS weight loss diet, hormone balance diet, insulin resistance diet, PCOD dietician gurgaon, PCOS meal plan',
    openGraph: {
        title: 'Best Dietician in Gurgaon for PCOD/PCOS | Good Near Me',
        description: 'Good dietician near me for PCOD/PCOS care in Gurgaon. Specialized hormone balance, insulin management & weight loss plans with weekly at-home consultations.',
        url: 'https://dieticianathome.com/pcod-care',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/pcod-pcos-care.jpg',
            width: 1200,
            height: 630,
            alt: 'PCOD/PCOS Diet Program - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Dietician in Gurgaon for PCOD/PCOS | Good Near Me',
        description: 'Good dietician near me for PCOD/PCOS care in Gurgaon. Specialized hormone balance, insulin management & weight loss plans with weekly at-home consultations.',
        images: ['https://dieticianathome.com/pcod-pcos-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/pcod-care',
    },
};

export default function PCODCarePage() {
    return <PCODCare />;
}
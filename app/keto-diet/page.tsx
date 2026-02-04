import type { Metadata } from 'next';
import KetoPrograms from '@/components/KetoProgram';

export const metadata: Metadata = {
    title: 'Keto Dietician in Gurgaon | Best Keto Dietician Near Me',
    description: 'Expert keto dietician near me in Gurgaon for rapid fat loss. Personalized ketogenic meal plans, macros tracking & weekly at-home consultations.',
    keywords: 'keto dietician in gurgaon, keto dietician near me, keto diet, ketogenic diet gurgaon, fat loss program, keto weight loss, low carb dietician gurgaon, keto meal plan, ketogenic nutrition',
    openGraph: {
        title: 'Keto Dietician in Gurgaon | Best Keto Dietician Near Me',
        description: 'Expert keto dietician near me in Gurgaon for rapid fat loss. Personalized ketogenic meal plans, macros tracking & weekly at-home consultations.',
        url: 'https://dieticianathome.com/programs/keto-diet',
        siteName: 'Dietitian at Home',
        images: [{
            url: 'https://dieticianathome.com/keto-diet-care.jpg',
            width: 1200,
            height: 630,
            alt: 'Keto Diet Program - Dietitian at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Keto Dietician in Gurgaon | Best Keto Dietician Near Me',
        description: 'Expert keto dietician near me in Gurgaon for rapid fat loss. Personalized ketogenic meal plans, macros tracking & weekly at-home consultations.',
        images: ['https://dieticianathome.com/keto-diet-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/programs/keto-diet',
    },
};

export default function KetoDietPage() {
    return <KetoPrograms />;
}
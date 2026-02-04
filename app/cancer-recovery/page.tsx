import type { Metadata } from 'next';
import CancerRecovery from '@/components/CancerRecovery';

export const metadata: Metadata = {
    title: 'Best Cancer Recovery Nutritionist and Dietitian Near Me',
    description: 'Best nutritionists near me for cancer recovery in Gurgaon. Specialized post-treatment nutrition, immunity building & strength support with at-home care.',
    keywords: 'best nutritionist and dietitian near me, best nutritionists near me, cancer nutrition, cancer recovery diet, oncology nutrition, cancer patient diet plan, post cancer nutrition, chemotherapy diet, cancer dietician gurgaon, immunity building diet',
    openGraph: {
        title: 'Best Cancer Recovery Nutritionist and Dietitian Near Me',
        description: 'Best nutritionists near me for cancer recovery in Gurgaon. Specialized post-treatment nutrition, immunity building & strength support with at-home care.',
        url: 'https://dieticianathome.com/cancer-recovery',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/cancer-recovery-care.jpg',
            width: 1200,
            height: 630,
            alt: 'Cancer Recovery Nutrition Program - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Cancer Recovery Nutritionist and Dietitian Near Me',
        description: 'Best nutritionists near me for cancer recovery in Gurgaon. Specialized post-treatment nutrition, immunity building & strength support with at-home care.',
        images: ['https://dieticianathome.com/cancer-recovery-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/cancer-recovery',
    },
};

export default function CancerRecoveryPage() {
    return <CancerRecovery />;
}
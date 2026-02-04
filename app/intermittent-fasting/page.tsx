import type { Metadata } from 'next';
import IntermittentFasting from '@/components/IntermittentFasting';

export const metadata: Metadata = {
    title: 'Top 10 Dietician in Gurgaon | Dietician Nutritionist Near Me',
    description:
        'Top-rated dietician nutritionist near me in Gurgaon for intermittent fasting. Expert IF plans, 16:8 protocols, fat loss & metabolic health at your doorstep.',
    keywords:
        'top 10 dietician in gurgaon, dietician nutritionist near me, intermittent fasting program, intermittent fasting dietician gurgaon, IF diet plan, 16:8 fasting, metabolic health program, fat loss fasting plan, insulin resistance diet gurgaon',
    openGraph: {
        title: 'Top 10 Dietician in Gurgaon | Dietician Nutritionist Near Me',
        description:
            'Top-rated dietician nutritionist near me in Gurgaon for intermittent fasting. Expert IF plans, 16:8 protocols, fat loss & metabolic health at your doorstep.',
        url: 'https://dieticianathome.com/programs/intermittent-fasting',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/intermittent-fasting-care.jpg',
                width: 1200,
                height: 630,
                alt: 'Intermittent Fasting Program - Dietitian at Home',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Top 10 Dietician in Gurgaon | Dietician Nutritionist Near Me',
        description:
            'Top-rated dietician nutritionist near me in Gurgaon for intermittent fasting. Expert IF plans, 16:8 protocols, fat loss & metabolic health at your doorstep.',
        images: ['https://dieticianathome.com/intermittent-fasting-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/programs/intermittent-fasting',
    },
};

export default function IntermittentFastingPage() {
    return <IntermittentFasting />;
}
import type { Metadata } from 'next';
import ElderlyNutrition from '@/components/ElderlyNutrition';

export const metadata: Metadata = {
    title: 'Best Nutritionist in Gurgaon for Elderly | Near Me',
    description: 'Best nutritionist & dieticians near me for elderly care in Gurgaon. Senior nutrition plans, chronic condition management & at-home visits for aging adults.',
    keywords: 'best nutritionist in gurgaon, dieticians and nutritionists near me, elderly nutrition, senior citizen diet plan, nutrition for elderly gurgaon, geriatric nutrition, old age diet plan, senior diet program, elderly meal planning gurgaon',
    openGraph: {
        title: 'Best Nutritionist in Gurgaon for Elderly | Near Me',
        description: 'Best nutritionist & dieticians near me for elderly care in Gurgaon. Senior nutrition plans, chronic condition management & at-home visits for aging adults.',
        url: 'https://dieticianathome.com/elderly-nutrition',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/elderly-nutrition-care.jpg',
            width: 1200,
            height: 630,
            alt: 'Elderly Nutrition Program - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Nutritionist in Gurgaon for Elderly | Near Me',
        description: 'Best nutritionist & dieticians near me for elderly care in Gurgaon. Senior nutrition plans, chronic condition management & at-home visits for aging adults.',
        images: ['https://dieticianathome.com/elderly-nutrition-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/elderly-nutrition',
    },
};

export default function ElderlyNutritionPage() {
    return <ElderlyNutrition />;
}
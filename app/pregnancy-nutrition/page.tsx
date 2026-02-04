import type { Metadata } from 'next';
import PregnancyNutrition from '@/components/PregnancyNutrition';

export const metadata: Metadata = {
    title: 'Clinical Dietician Near Me for Pregnancy | Gurgaon',
    description: 'Expert clinical dietician near me & nutritionists in Gurgaon for pregnancy. Trimester-specific meal plans, gestational diabetes care & healthy weight management.',
    keywords: 'clinical dietician near me, nutritionists in gurgaon, pregnancy nutrition, pregnancy diet plan gurgaon, trimester diet plan, gestational diabetes diet, prenatal nutrition, pregnancy meal plan, pregnancy dietician gurgaon, healthy pregnancy diet',
    openGraph: {
        title: 'Clinical Dietician Near Me for Pregnancy | Gurgaon',
        description: 'Expert clinical dietician near me & nutritionists in Gurgaon for pregnancy. Trimester-specific meal plans, gestational diabetes care & healthy weight management.',
        url: 'https://dieticianathome.com/pregnancy-nutrition',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/pregnancy-nutrition-care.jpg',
            width: 1200,
            height: 630,
            alt: 'Pregnancy Nutrition Program - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Clinical Dietician Near Me for Pregnancy | Gurgaon',
        description: 'Expert clinical dietician near me & nutritionists in Gurgaon for pregnancy. Trimester-specific meal plans, gestational diabetes care & healthy weight management.',
        images: ['https://dieticianathome.com/pregnancy-nutrition-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/pregnancy-nutrition',
    },
};

export default function PregnancyNutritionPage() {
    return <PregnancyNutrition />;
}
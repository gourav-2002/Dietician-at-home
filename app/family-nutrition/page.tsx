import type { Metadata } from 'next';
import FamilyNutrition from '@/components/FamilyNutrition';

export const metadata: Metadata = {
    title: 'Family Dietician Near Me in Gurgaon | Nutritionists',
    description: 'Find family dietician & nutritionists near me in Gurgaon. Coordinated meal plans for entire household, consolidated grocery lists & at-home visits.',
    keywords: 'family dietician near me, dieticians and nutritionists near me, family nutrition program, family meal planning, family diet plan gurgaon, nutrition for family, coordinated meal planning, family dietician gurgaon, household nutrition',
    openGraph: {
        title: 'Family Dietician Near Me in Gurgaon | Nutritionists',
        description: 'Find family dietician & nutritionists near me in Gurgaon. Coordinated meal plans for entire household, consolidated grocery lists & at-home visits.',
        url: 'https://dieticianathome.com/family-nutrition',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/family-nutrition-care.jpg',
            width: 1200,
            height: 630,
            alt: 'Family Nutrition Program - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Family Dietician Near Me in Gurgaon | Nutritionists',
        description: 'Find family dietician & nutritionists near me in Gurgaon. Coordinated meal plans for entire household, consolidated grocery lists & at-home visits.',
        images: ['https://dieticianathome.com/family-nutrition-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/family-nutrition',
    },
};

export default function FamilyNutritionPage() {
    return <FamilyNutrition />;
}
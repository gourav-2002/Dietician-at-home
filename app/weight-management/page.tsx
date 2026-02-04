import type { Metadata } from 'next';
import WeightManagement from '@/components/WeightManagement';

export const metadata: Metadata = {
    title: 'Best Dietician in Gurgaon for Weight Loss | Near Me',
    description: 'Find the best dietician near me for weight loss in Gurgaon. Personalized meal plans, weekly consultations & at-home visits for sustainable weight management.',
    keywords: 'best dietician in gurgaon for weight loss, dietician near me for weight loss, weight management program, weight loss diet plan, weight gain program, calorie management, sustainable weight loss, weight loss dietician gurgaon, body composition',
    openGraph: {
        title: 'Best Dietician in Gurgaon for Weight Loss | Near Me',
        description: 'Find the best dietician near me for weight loss in Gurgaon. Personalized meal plans, weekly consultations & at-home visits for sustainable weight management.',
        url: 'https://dieticianathome.com/weight-management',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/weight-management-program.jpg',
            width: 1200,
            height: 630,
            alt: 'Weight Management Program - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Dietician in Gurgaon for Weight Loss | Near Me',
        description: 'Find the best dietician near me for weight loss in Gurgaon. Personalized meal plans, weekly consultations & at-home visits for sustainable weight management.',
        images: ['https://dieticianathome.com/weight-management-program.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/weight-management',
    },
};

export default function WeightManagementPage() {
    return <WeightManagement />;
}
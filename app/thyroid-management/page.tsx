import type { Metadata } from 'next';
import ThyroidManagement from '@/components/ThyroidManagement';

export const metadata: Metadata = {
    title: 'Good Dietician in Gurgaon for Thyroid & Weight Loss',
    description: 'Find a good dietitian near me for weight loss & thyroid management in Gurgaon. Specialized plans for hypothyroid, hyperthyroid with weekly home consultations.',
    keywords: 'good dietician in gurgaon, dietitian near me for weight loss, thyroid diet plan, hypothyroidism diet gurgaon, hyperthyroidism diet, thyroid nutrition, thyroid weight management, thyroid dietician gurgaon, metabolism support diet',
    openGraph: {
        title: 'Good Dietician in Gurgaon for Thyroid & Weight Loss',
        description: 'Find a good dietitian near me for weight loss & thyroid management in Gurgaon. Specialized plans for hypothyroid, hyperthyroid with weekly home consultations.',
        url: 'https://dieticianathome.com/thyroid-management',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/thyroid-management-care.jpg',
            width: 1200,
            height: 630,
            alt: 'Thyroid Management Program - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Good Dietician in Gurgaon for Thyroid & Weight Loss',
        description: 'Find a good dietitian near me for weight loss & thyroid management in Gurgaon. Specialized plans for hypothyroid, hyperthyroid with weekly home consultations.',
        images: ['https://dieticianathome.com/thyroid-management-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/thyroid-management',
    },
};

export default function ThyroidManagementPage() {
    return <ThyroidManagement />;
}
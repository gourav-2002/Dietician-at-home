import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
    title: 'Best Dieticians Near Me in Gurgaon | Home Nutrition Care',
    description: 'Top-rated dieticians in Gurgaon offering at-home visits, weekly consultations, personalized meal plans & health monitoring. Expert nutrition care at your doorstep.',
    keywords: 'dieticians near me, dieticians in Gurgaon, dietician at home, nutrition coaching, weight management, personalized meal plans, home nutrition service, qualified dietician, at-home dietician, Gurgaon dietician',
    openGraph: {
        title: 'Best Dieticians Near Me in Gurgaon | Home Nutrition Care',
        description: 'Top-rated dieticians in Gurgaon offering at-home visits, weekly consultations, personalized meal plans & health monitoring. Expert nutrition care at your doorstep.',
        url: 'https://dieticianathome.com',
        siteName: 'Dietician at Home',
        images: [
            {
                url: '/hero-section-dietician-at-home.jpg',
                width: 1200,
                height: 630,
                alt: 'Dietician at Home - Professional Nutrition Care',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Dieticians Near Me in Gurgaon | Home Nutrition Care',
        description: 'Top-rated dieticians in Gurgaon offering at-home visits, weekly consultations, personalized meal plans & health monitoring. Expert nutrition care at your doorstep.',
        images: ['/hero-section-dietician-at-home.jpg'],
    },
};

export default function HomePage() {
    return <HeroSection />;
}
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
    alternates: {
        canonical: 'https://dieticianathome.com',
    },
};

export default function HomePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Dietician at Home',
        image: 'https://dieticianathome.com/hero-section-dietician-at-home.jpg',
        '@id': 'https://dieticianathome.com',
        url: 'https://dieticianathome.com',
        telephone: '+918510850111',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'DLF Phase 3',
            addressLocality: 'Gurgaon',
            addressRegion: 'Haryana',
            postalCode: '122002',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 28.4595,
            longitude: 77.0266,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            opens: '09:00',
            closes: '20:00',
        },
        sameAs: [
            'https://www.facebook.com/dieticianathome',
            'https://www.instagram.com/dieticianathome',
        ],
        description: 'Top-rated dieticians in Gurgaon offering at-home visits, weekly consultations, and personalized meal plans.',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeroSection />
        </>
    );
}
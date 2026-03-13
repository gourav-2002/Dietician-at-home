import type { Metadata } from 'next';
import AppTools from '@/components/AppTools';

export const metadata: Metadata = {
    title: 'Online Dietician Near Me | Dietician Near By Me with App',
    description: 'Find online dietician near me & dietician near by me in Gurgaon. Track meals, get personalized plans, sync health data & schedule sessions via smart app.',
    keywords: 'online dietician near me, dietician near by me, nutrition tracking app, meal planning app gurgaon, calorie tracking app, health tracking app, dietician session app, wellness tracking tools, macro tracking app',
    openGraph: {
        title: 'Online Dietician Near Me | Dietician Near By Me with App',
        description: 'Find online dietician near me & dietician near by me in Gurgaon. Track meals, get personalized plans, sync health data & schedule sessions via smart app.',
        url: 'https://dieticianathome.com/app-tools',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://www.dieticianathome.com/app-tools-banner.jpg',
            width: 1200,
            height: 630,
            alt: 'Dietician at Home Mobile App Interface',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Online Dietician Near Me | Dietician Near By Me with App',
        description: 'Find online dietician near me & dietician near by me in Gurgaon. Track meals, get personalized plans, sync health data & schedule sessions via smart app.',
        images: ['https://www.dieticianathome.com/app-tools-banner.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/app-tools',
    },
};

export default function AppToolsPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Dietician at Home Mobile App & Tools',
        description: 'Track your meals, sync health data, and manage your nutrition journey with our smart app.',
        url: 'https://dieticianathome.com/app-tools',
        provider: {
            '@type': 'Organization',
            name: 'Dietician at Home',
            url: 'https://dieticianathome.com',
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://dieticianathome.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'App & Tools',
                item: 'https://dieticianathome.com/app-tools',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <AppTools />
        </>
    );
}
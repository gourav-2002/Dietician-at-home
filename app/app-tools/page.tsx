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
            url: 'https://dieticianathome.com/feature-mobile-app.png',
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
        images: ['https://dieticianathome.com/feature-mobile-app.png'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/app-tools',
    },
};

export default function AppToolsPage() {
    return <AppTools />;
}
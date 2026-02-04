import type { Metadata } from 'next';
import FAQs from '@/components/FAQs';

export const metadata: Metadata = {
    title: 'Makhija Dietician Gurgaon FAQ | Best for Weight Loss Near Me',
    description: 'FAQ: Best dietician near me for weight loss in Gurgaon. Learn about Makhija-level expertise, pricing, meal plans, at-home sessions & weight loss programs.',
    keywords: 'makhija dietician gurgaon, best dietician near me for weight loss, dietician at home FAQ, nutrition program questions, dietician service cost gurgaon, meal plan FAQ, weight loss dietician questions, dietician pricing gurgaon',
    openGraph: {
        title: 'Makhija Dietician Gurgaon FAQ | Best for Weight Loss Near Me',
        description: 'FAQ: Best dietician near me for weight loss in Gurgaon. Learn about Makhija-level expertise, pricing, meal plans, at-home sessions & weight loss programs.',
        url: 'https://dieticianathome.com/faq',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/faq-support.jpg',
            width: 1200,
            height: 630,
            alt: 'FAQ - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Makhija Dietician Gurgaon FAQ | Best for Weight Loss Near Me',
        description: 'FAQ: Best dietician near me for weight loss in Gurgaon. Learn about Makhija-level expertise, pricing, meal plans, at-home sessions & weight loss programs.',
        images: ['https://dieticianathome.com/faq-support.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/faq',
    },
};

export default function FAQPage() {
    return <FAQs />;
}
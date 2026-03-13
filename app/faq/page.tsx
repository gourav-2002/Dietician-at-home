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
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Makhija Dietician Gurgaon FAQ | Best for Weight Loss Near Me',
        description: 'FAQ: Best dietician near me for weight loss in Gurgaon. Learn about Makhija-level expertise, pricing, meal plans, at-home sessions & weight loss programs.',
    },
    alternates: {
        canonical: 'https://dieticianathome.com/faq',
    },
};

export default function FAQPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What is Dietician at Home?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Dietician at Home is a specialized at-location nutrition care service. We bring qualified expert dieticians directly to your doorstep for monthly health visits and provide weekly virtual sessions along with fully personalized meal plans through our app.',
                },
            },
            {
                '@type': 'Question',
                name: 'How is this different from other nutrition services?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Unlike traditional clinics or generic apps, we eliminate the need for travel. We provide a "Human-First" approach where a trained field representative visits you, uses data-driven tracking devices we provide, and stays involved weekly to ensure you actually hit your goals.',
                },
            },
            {
                '@type': 'Question',
                name: 'What areas do you serve?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Currently, we are serving Delhi/NCR region. We are rapidly expanding to other metropolitan cities across India soon.',
                },
            },
            {
                '@type': 'Question',
                name: 'How do I get started?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simply fill out our enquiry form or call us. A care manager will have a brief discovery call with you to understand your goals, recommend a program from the best dietician near me for weight loss, and schedule your first at-home dietician visit.',
                },
            },
        ],
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
                name: 'FAQs',
                item: 'https://dieticianathome.com/faq',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <FAQs />
        </>
    );
}
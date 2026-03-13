import type { Metadata } from 'next';
import ServiceDisclosure from '@/components/ServiceDisclosure';

export const metadata: Metadata = {
    title: 'Service Disclosure | Best Nutritionist in Delhi NCR',
    description: 'Service disclosure by best nutritionist in Delhi NCR & licensed dietician near me. Complete transparency on qualifications, scope, limitations & service standards.',
    keywords: 'best nutritionist in delhi ncr, licensed dietician near me, service disclosure, nutrition service transparency, dietician qualifications gurgaon, service scope, professional disclosure, certified nutritionist delhi ncr',
    openGraph: {
        title: 'Service Disclosure | Best Nutritionist in Delhi NCR',
        description: 'Service disclosure by best nutritionist in Delhi NCR & licensed dietician near me. Complete transparency on qualifications, scope, limitations & service standards.',
        url: 'https://dieticianathome.com/service-disclosure',
        siteName: 'Dietician at Home',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Service Disclosure | Best Nutritionist in Delhi NCR',
        description: 'Service disclosure by best nutritionist in Delhi NCR & licensed dietician near me. Complete transparency on qualifications, scope & service standards.',
    },
    alternates: {
        canonical: 'https://dieticianathome.com/service-disclosure',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ServiceDisclosurePage() {
    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Service Disclosure - Dietician at Home',
        description: 'Complete transparency on our qualifications and professional service standards.',
        url: 'https://dieticianathome.com/service-disclosure',
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
                name: 'Service Disclosure',
                item: 'https://dieticianathome.com/service-disclosure',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ServiceDisclosure />
        </>
    );
}
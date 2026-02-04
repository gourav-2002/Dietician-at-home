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
        images: [{
            url: 'https://dieticianathome.com/logo.png',
            width: 1200,
            height: 630,
            alt: 'Service Disclosure - Dietician at Home',
        }],
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
    return <ServiceDisclosure />;
}
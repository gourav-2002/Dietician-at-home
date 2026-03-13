import type { Metadata } from 'next';
import Pricing from '@/components/Pricing';

export const metadata: Metadata = {
    title: 'Dietician in Gurgaon for Weight Loss | Fees & Pricing',
    description: 'Dietician near me with fees in Gurgaon: ₹2,499/month general, ₹3,499/month specialized. Weight loss programs include home visits, weekly sessions & meal plans.',
    keywords: 'dietician in gurgaon for weight loss, dietician near me with fees, dietician pricing gurgaon, nutrition program cost, at-home dietician price, affordable dietician service, meal plan pricing gurgaon, dietician session fees',
    openGraph: {
        title: 'Dietician in Gurgaon for Weight Loss | Fees & Pricing',
        description: 'Dietician near me with fees in Gurgaon: ₹2,499/month general, ₹3,499/month specialized. Weight loss programs include home visits, weekly sessions & meal plans.',
        url: 'https://dieticianathome.com/pricing',
        siteName: 'Dietician at Home',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dietician in Gurgaon for Weight Loss | Fees & Pricing',
        description: 'Dietician near me with fees in Gurgaon: ₹2,499/month general, ₹3,499/month specialized. Weight loss programs include home visits, weekly sessions & meal plans.',
    },
    alternates: {
        canonical: 'https://dieticianathome.com/pricing',
    },
};

export default function PricingPage() {
    const pricingSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Dietician at Home Pricing',
        description: 'Flexible and affordable nutrition plans for weight loss, PCOD, and clinical nutrition in Gurgaon.',
        url: 'https://dieticianathome.com/pricing',
        priceRange: '₹2499 - ₹4999',
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
                name: 'Pricing',
                item: 'https://dieticianathome.com/pricing',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Pricing />
        </>
    );
}
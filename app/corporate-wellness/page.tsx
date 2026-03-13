import type { Metadata } from 'next';
import CorporateWellness from '@/components/CorporateWellness';

export const metadata: Metadata = {
    title: 'Dietician in Gurugram | Best for Weight Loss Corporate Wellness',
    description: 'Expert dietician in Gurugram for corporate wellness. Best dietician for weight loss near me with employee programs, HR dashboard & confidential at-office care.',
    keywords: 'dietician in gurugram, best dietician for weight loss near me, corporate wellness program gurugram, employee wellness program, workplace nutrition program, corporate dietician services, employee health program, company wellness benefits, workplace dietician gurugram',
    openGraph: {
        title: 'Dietician in Gurugram | Best for Weight Loss Corporate Wellness',
        description: 'Expert dietician in Gurugram for corporate wellness. Best dietician for weight loss near me with employee programs, HR dashboard & confidential at-office care.',
        url: 'https://dieticianathome.com/corporate-wellness',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/corporate-wellness-team.jpg',
            width: 1200,
            height: 630,
            alt: 'Corporate Wellness Programs - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dietician in Gurugram | Best for Weight Loss Corporate Wellness',
        description: 'Expert dietician in Gurugram for corporate wellness. Best dietician for weight loss near me with employee programs, HR dashboard & confidential at-office care.',
        images: ['https://dieticianathome.com/corporate-wellness-team.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/corporate-wellness',
    },
};

export default function CorporateWellnessPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Dietician at Home - Corporate Wellness',
        description: 'Professional nutrition and wellness programs for corporate employees and organizations in Gurugram.',
        url: 'https://dieticianathome.com/corporate-wellness',
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
                name: 'Corporate Wellness',
                item: 'https://dieticianathome.com/corporate-wellness',
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
            <CorporateWellness />
        </>
    );
}
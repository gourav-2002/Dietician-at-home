import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
    title: 'Privacy Policy | Best Dietician in Gurugram & Delhi NCR',
    description: 'Privacy policy for best dietician in Gurugram & nutritionist in Delhi NCR. Learn how Dietician at Home protects your health data. GDPR compliant & secure.',
    keywords: 'best dietician in gurugram, best nutritionist in delhi ncr, privacy policy, data protection, health data security, personal information policy, GDPR compliance',
    openGraph: {
        title: 'Privacy Policy | Best Dietician in Gurugram & Delhi NCR',
        description: 'Privacy policy for best dietician in Gurugram & nutritionist in Delhi NCR. Learn how Dietician at Home protects your health data. GDPR compliant & secure.',
        url: 'https://dieticianathome.com/privacy-policy',
        siteName: 'Dietician at Home',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Privacy Policy | Best Dietician in Gurugram & Delhi NCR',
        description: 'Privacy policy for best dietician in Gurugram & nutritionist in Delhi NCR. Learn how we protect your health data.',
    },
    alternates: {
        canonical: 'https://dieticianathome.com/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy - Dietician at Home',
        description: 'Learn how we protect your health data and personal information.',
        url: 'https://dieticianathome.com/privacy-policy',
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
                name: 'Privacy Policy',
                item: 'https://dieticianathome.com/privacy-policy',
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
            <PrivacyPolicy />
        </>
    );
}
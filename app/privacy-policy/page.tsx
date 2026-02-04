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
        images: [{
            url: 'https://dieticianathome.com/logo.png',
            width: 1200,
            height: 630,
            alt: 'Privacy Policy - Dietician at Home',
        }],
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
    return <PrivacyPolicy />;
}
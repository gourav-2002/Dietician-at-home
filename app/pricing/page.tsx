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
        images: [{
            url: 'https://dieticianathome.com/pricing-plans.jpg',
            width: 1200,
            height: 630,
            alt: 'Pricing Plans - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dietician in Gurgaon for Weight Loss | Fees & Pricing',
        description: 'Dietician near me with fees in Gurgaon: ₹2,499/month general, ₹3,499/month specialized. Weight loss programs include home visits, weekly sessions & meal plans.',
        images: ['https://dieticianathome.com/pricing-plans.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/pricing',
    },
};

export default function PricingPage() {
    return <Pricing />;
}
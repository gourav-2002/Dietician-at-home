import type { Metadata } from 'next';
import PostpartumCare from '@/components/PostpartumCare';

export const metadata: Metadata = {
    title: 'Medical Dietician Near Me | Best Dietician Clinic Gurgaon',
    description: 'Medical dietician near me at best dietician clinic in Gurgaon for postpartum care. Expert lactation, recovery & breastfeeding nutrition with at-home support.',
    keywords: 'medical dietician near me, best dietician clinic in gurgaon, postpartum nutrition, post delivery diet, lactation diet plan, breastfeeding nutrition, postnatal diet gurgaon, new mother nutrition, postpartum weight loss, postpartum dietician gurgaon',
    openGraph: {
        title: 'Medical Dietician Near Me | Best Dietician Clinic Gurgaon',
        description: 'Medical dietician near me at best dietician clinic in Gurgaon for postpartum care. Expert lactation, recovery & breastfeeding nutrition with at-home support.',
        url: 'https://dieticianathome.com/postpartum-care',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/postpartum-care.jpg',
            width: 1200,
            height: 630,
            alt: 'Postpartum Nutrition Program - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Medical Dietician Near Me | Best Dietician Clinic Gurgaon',
        description: 'Medical dietician near me at best dietician clinic in Gurgaon for postpartum care. Expert lactation, recovery & breastfeeding nutrition with at-home support.',
        images: ['https://dieticianathome.com/postpartum-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/postpartum-care',
    },
};

export default function PostpartumCarePage() {
    return <PostpartumCare />;
}
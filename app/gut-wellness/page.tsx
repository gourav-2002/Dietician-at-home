import type { Metadata } from 'next';
import GutWellnessProgram from '@/components/GutWellness';

export const metadata: Metadata = {
    title: 'Best Dietician Clinic in Gurgaon | IBS Dieticians Near Me',
    description:
        'Top IBS dieticians near me at best dietician clinic in Gurgaon. Expert gut health care, bloating relief, acidity management & personalized digestive wellness plans.',
    keywords:
        'best dietician clinic in gurgaon, ibs dieticians near me, gut wellness program, gut health dietician gurgaon, digestive health program, gut healing diet, bloating acidity diet, microbiome health, IBS diet plan gurgaon',
    openGraph: {
        title: 'Best Dietician Clinic in Gurgaon | IBS Dieticians Near Me',
        description:
            'Top IBS dieticians near me at best dietician clinic in Gurgaon. Expert gut health care, bloating relief, acidity management & personalized digestive wellness plans.',
        url: 'https://dieticianathome.com/programs/gut-wellness',
        siteName: 'Dietitian at Home',
        images: [
            {
                url: 'https://dieticianathome.com/gut-wellness-care.jpg',
                width: 1200,
                height: 630,
                alt: 'Gut Wellness Program - Dietitian at Home',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Dietician Clinic in Gurgaon | IBS Dieticians Near Me',
        description:
            'Top IBS dieticians near me at best dietician clinic in Gurgaon. Expert gut health care, bloating relief, acidity management & personalized digestive wellness plans.',
        images: ['https://dieticianathome.com/gut-wellness-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/programs/gut-wellness',
    },
};

export default function GutWellnessPage() {
    return <GutWellnessProgram />;
}
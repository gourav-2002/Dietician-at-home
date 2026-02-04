import type { Metadata } from 'next';
import WhoIsThisFor from '@/components/WhoIsThisFor';

export const metadata: Metadata = {
    title: 'Dietitian in Medanta Gurgaon | Find Dietician Dr Near Me',
    description: 'Find expert dietician dr near me & dietitian in Medanta Gurgaon area. Perfect for busy professionals, families, seniors, PCOD/diabetes patients & serious health goals.',
    keywords: 'dietitian in medanta gurgaon, dietician dr near me, who needs dietician, nutrition for busy professionals, family nutrition programs, senior citizen nutrition, medical condition diet, personalized nutrition service gurgaon',
    openGraph: {
        title: 'Dietitian in Medanta Gurgaon | Find Dietician Dr Near Me',
        description: 'Find expert dietician dr near me & dietitian in Medanta Gurgaon area. Perfect for busy professionals, families, seniors, PCOD/diabetes patients & serious health goals.',
        url: 'https://dieticianathome.com/who-is-this-for',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/who-is-this-for.jpg',
            width: 1200,
            height: 630,
            alt: 'Who Is This For - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dietitian in Medanta Gurgaon | Find Dietician Dr Near Me',
        description: 'Find expert dietician dr near me & dietitian in Medanta Gurgaon area. Perfect for busy professionals, families, seniors, PCOD/diabetes patients & serious health goals.',
        images: ['https://dieticianathome.com/who-is-this-for.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/who-is-this-for',
    },
};

export default function WhoIsThisForPage() {
    return <WhoIsThisFor />;
}
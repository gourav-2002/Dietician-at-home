import type { Metadata } from 'next';
import Blog from '@/components/Blog';

export const metadata: Metadata = {
    title: 'Best Nutritionists Near Me Blog | Top Dietitians Near Me',
    description: 'Blog by best nutritionists & top dietitians near me in Gurgaon. Expert weight loss tips, PCOD diet, diabetes nutrition, healthy recipes & wellness guides.',
    keywords: 'best nutritionists near me, top dietitians near me, nutrition blog gurgaon, dietician blog, weight loss tips, healthy eating blog, PCOD diet tips, diabetes nutrition, thyroid diet, wellness blog gurgaon, healthy recipes',
    openGraph: {
        title: 'Best Nutritionists Near Me Blog | Top Dietitians Near Me',
        description: 'Blog by best nutritionists & top dietitians near me in Gurgaon. Expert weight loss tips, PCOD diet, diabetes nutrition, healthy recipes & wellness guides.',
        url: 'https://dieticianathome.com/blog',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/blog-hero-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Dietician at Home Nutrition Blog',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Best Nutritionists Near Me Blog | Top Dietitians Near Me',
        description: 'Blog by best nutritionists & top dietitians near me in Gurgaon. Expert weight loss tips, PCOD diet, diabetes nutrition, healthy recipes & wellness guides.',
        images: ['https://dieticianathome.com/blog-hero-image.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/blog',
    },
};

export default function BlogPage() {
    return <Blog />;
}
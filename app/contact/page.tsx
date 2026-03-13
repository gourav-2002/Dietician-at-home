import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
    title: 'Dieticians in Gurgaon | Contact Top Dietician in Gurgaon',
    description: 'Connect with top dieticians in Gurgaon. Call +91 98994 80775 or book free consultation. Expert at-home nutrition care across DLF, Cyber City & Golf Course Road.',
    keywords: 'dieticians in gurgaon, top dietician in gurgaon, contact dietician, nutrition consultation gurgaon, book dietician appointment, dietician at home contact, best dieticians gurgaon',
    openGraph: {
        title: 'Dieticians in Gurgaon | Contact Top Dietician in Gurgaon',
        description: 'Connect with top dieticians in Gurgaon. Call +91 98994 80775 or book free consultation. Expert at-home nutrition care across DLF, Cyber City & Golf Course Road.',
        url: 'https://dieticianathome.com/contact',
        siteName: 'Dietician at Home',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dieticians in Gurgaon | Contact Top Dietician in Gurgaon',
        description: 'Connect with top dieticians in Gurgaon. Call +91 98994 80775 or book free consultation. Expert at-home nutrition care across DLF, Cyber City & Golf Course Road.',
    },
    alternates: {
        canonical: 'https://dieticianathome.com/contact',
    },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "description": "Contact Dietician at Home for expert nutrition consultation in Gurgaon.",
        "mainEntity": {
            "@type": "ProfessionalService",
            "name": "Dietician at Home",
            "telephone": "+918510850111",
            "areaServed": "Gurgaon, Delhi NCR",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gurgaon",
                "addressRegion": "Haryana",
                "addressCountry": "IN"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Contact />
        </>
    );
}
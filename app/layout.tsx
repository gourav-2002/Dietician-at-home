import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://dieticianathome.com'),
    title: 'Dietician at Home | Personalized Nutrition & Lifestyle Coaching',
    description: 'India\'s premier at-home nutrition service. Get weekly Dietician sessions, personalized meal plans, and professional wellness visits delivered to your doorstep.',
    keywords: 'Dietician at home, nutrition coaching, weight management, personalized meal plans, Delhi NCR, home nutrition service, qualified Dietician',
    authors: [{ name: 'Dietician at Home' }],
    openGraph: {
        title: 'Dietician at Home | Personalized Nutrition & Lifestyle Coaching',
        description: 'India\'s premier at-home nutrition service. Get weekly Dietician sessions, personalized meal plans, and professional wellness visits delivered to your doorstep.',
        url: 'https://dieticianathome.com',
        siteName: 'Dietician at Home',
        images: [
            {
                url: '/hero-section-dietician-at-home.jpg',
                width: 1200,
                height: 630,
                alt: 'Dietician at Home - Professional Nutrition Care',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dietician at Home | Personalized Nutrition & Lifestyle Coaching',
        description: 'India\'s premier at-home nutrition service. Get weekly Dietician sessions, personalized meal plans, and professional wellness visits.',
        images: ['/hero-section-dietician-at-home.jpg'],
    },
    verification: {
        other: {
            'facebook-domain-verification': 'q0odjcd4k4l116m6v521oaelkq2s61',
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="/favicon.png" />

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-QWKJW7EFL8"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QWKJW7EFL8');
            gtag('config', 'AW-17893204152');
          `}
                </Script>
            </head>
            <body className={`${inter.className} min-h-screen bg-white flex flex-col selection:bg-[#217328]/20`}>
                <Navbar />
                <FloatingButtons />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

import type { Metadata } from 'next';
import DiabetesManagement from '@/components/DiabetesManagement';

export const metadata: Metadata = {
    title: 'Dietitian Gurgaon for Diabetes | Weight Loss Dietician',
    description: 'Expert dietitian in Gurgaon for diabetes & weight loss. Personalized blood sugar control plans, Type 2 management & at-home consultations near me.',
    keywords: 'dietitian gurgaon, weight loss dietician near me, diabetes diet plan, diabetic diet gurgaon, diabetes nutrition, blood sugar control diet, type 2 diabetes diet, pre-diabetic diet plan, diabetes dietician gurgaon, diabetic meal planning',
    openGraph: {
        title: 'Dietitian Gurgaon for Diabetes | Weight Loss Dietician',
        description: 'Expert dietitian in Gurgaon for diabetes & weight loss. Personalized blood sugar control plans, Type 2 management & at-home consultations near me.',
        url: 'https://dieticianathome.com/diabetes-management',
        siteName: 'Dietician at Home',
        images: [{
            url: 'https://dieticianathome.com/diabetes-management-care.jpg',
            width: 1200,
            height: 630,
            alt: 'Diabetes Management Program - Dietician at Home',
        }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dietitian Gurgaon for Diabetes | Weight Loss Dietician',
        description: 'Expert dietitian in Gurgaon for diabetes & weight loss. Personalized blood sugar control plans, Type 2 management & at-home consultations near me.',
        images: ['https://dieticianathome.com/diabetes-management-care.jpg'],
    },
    alternates: {
        canonical: 'https://dieticianathome.com/diabetes-management',
    },
};

export default function DiabetesManagementPage() {
    return <DiabetesManagement />;
}
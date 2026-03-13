import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WeightManagement from '@/components/WeightManagement';
import PcodCare from '@/components/PcodCare';
import PregnancyNutrition from '@/components/PregnancyNutrition';
import PostpartumCare from '@/components/PostpartumCare';
import PreconceptionCare from '@/components/PreconceptionCare';
import ThyroidManagement from '@/components/ThyroidManagement';
import DiabetesManagement from '@/components/DiabetesManagement';
import CancerRecovery from '@/components/CancerRecovery';
import FamilyNutrition from '@/components/FamilyNutrition';
import ElderlyNutrition from '@/components/ElderlyNutrition';
import GutWellness from '@/components/GutWellness';
import KetoProgram from '@/components/KetoProgram';
import IntermittentFasting from '@/components/IntermittentFasting';

const programs = {
    'weight-management': {
        component: WeightManagement,
        title: 'Weight Management Nutrition | Sustainable Weight Loss - Dietician at Home',
        description: 'Achieve sustainable weight loss or weight gain through personalized calorie management, macro tracking, and habit formation. Expert nutrition support at your doorstep.',
        keywords: 'weight loss, weight management, sustainable weight loss, calorie management, weight gain',
    },
    'pcod-pcos': {
        component: PcodCare,
        title: 'PCOD/PCOS Care Nutrition | Nutrition Support for Women - Dietician at Home',
        description: 'Specialized nutrition support for women with PCOD/PCOS. Balanced eating habits and lifestyle changes to manage symptoms effectively.',
        keywords: 'PCOD care, PCOS nutrition, PCOD diet, hormonal balance, women health',
    },
    'pregnancy-nutrition': {
        component: PregnancyNutrition,
        title: 'Pregnancy Nutrition | Expert Guidance for Expecting Mothers - Dietician at Home',
        description: 'Comprehensive nutrition guidance for expecting mothers. Support health for both mother and baby throughout pregnancy with personalized meal plans.',
        keywords: 'pregnancy nutrition, prenatal diet, pregnancy meal plan, expecting mother nutrition',
    },
    'postpartum-care': {
        component: PostpartumCare,
        title: 'Postpartum Care Nutrition | Nutrition for New Mothers - Dietician at Home',
        description: 'Postpartum nutrition support and lactation guidance for new mothers. Focus on vitality and energy restoration after childbirth.',
        keywords: 'postpartum nutrition, lactation support, new mother diet, postnatal care',
    },
    'preconception-care': {
        component: PreconceptionCare,
        title: 'Preconception Care Nutrition | Support Reproductive Health - Dietician at Home',
        description: 'Nutritional guidance to support your health before pregnancy. Prepare your body for conception with targeted meal planning.',
        keywords: 'preconception nutrition, fertility diet, pre-pregnancy care, conception preparation',
    },
    'thyroid-management': {
        component: ThyroidManagement,
        title: 'Thyroid Management Nutrition | Dietary Support for Thyroid Health - Dietician at Home',
        description: 'Dietary guidance offering metabolism support and nutrient optimization for those with thyroid concerns.',
        keywords: 'thyroid diet, thyroid management, hypothyroid nutrition, hyperthyroid diet',
    },
    'diabetes-management': {
        component: DiabetesManagement,
        title: 'Diabetes Management Nutrition | Dietary Support for Blood Sugar - Dietician at Home',
        description: 'Nutrition planning to support healthy blood sugar management through balanced carbohydrate planning and lifestyle changes.',
        keywords: 'diabetes diet, blood sugar support, diabetic meal plan, diabetes nutrition',
    },
    'cancer-recovery': {
        component: CancerRecovery,
        title: 'Cancer Recovery Nutrition | Supportive Nutrition During Treatment - Dietician at Home',
        description: 'Supportive nutrition guidance and wellness building during and after your cancer treatment journey.',
        keywords: 'cancer nutrition, cancer recovery diet, oncology nutrition, cancer treatment support',
    },
    'family-nutrition': {
        component: FamilyNutrition,
        title: 'Family Nutrition | Coordinated Meal Planning for Families - Dietician at Home',
        description: 'Coordinated meal planning for your entire household. Consolidated ingredient lists, unified meal prep, and nutrition support for multiple family members.',
        keywords: 'family nutrition, family meal planning, household nutrition, multi-member diet',
    },
    'elderly-nutrition': {
        component: ElderlyNutrition,
        title: 'Elderly Nutrition | Age-Appropriate Nutrition for Seniors - Dietician at Home',
        description: 'Age-appropriate nutrition guidance for senior citizens with focus on mobility and general wellness.',
        keywords: 'elderly nutrition, senior diet, geriatric nutrition, senior citizen health',
    },
    'gut-wellness': {
        component: GutWellness,
        title: 'Best Dietician Clinic in Gurgaon | IBS Dieticians Near Me',
        description: 'Top IBS dieticians near me at best dietician clinic in Gurgaon. Expert gut health care, bloating relief, acidity management & personalized digestive wellness plans.',
        keywords: 'best dietician clinic in gurgaon, ibs dieticians near me, gut wellness program, gut health dietician gurgaon, digestive health program, gut healing diet, bloating acidity diet, microbiome health, IBS diet plan gurgaon',
    },
    'keto-diet': {
        component: KetoProgram,
        title: 'Keto Dietician in Gurgaon | Best Keto Dietician Near Me',
        description: 'Expert keto dietician near me in Gurgaon for rapid fat loss. Personalized ketogenic meal plans, macros tracking & weekly at-home consultations.',
        keywords: 'keto dietician in gurgaon, keto dietician near me, keto diet, ketogenic diet gurgaon, fat loss program, keto weight loss, low carb dietician gurgaon, keto meal plan, ketogenic nutrition',
    },
    'intermittent-fasting': {
        component: IntermittentFasting,
        title: 'Top 10 Dietician in Gurgaon | Dietician Nutritionist Near Me',
        description: 'Top-rated dietician nutritionist near me in Gurgaon for intermittent fasting. Expert IF plans, 16:8 protocols, fat loss & metabolic health at your doorstep.',
        keywords: 'top 10 dietician in gurgaon, dietician nutritionist near me, intermittent fasting program, intermittent fasting dietician gurgaon, IF diet plan, 16:8 fasting, metabolic health program, fat loss fasting plan, insulin resistance diet gurgaon',
    },
};

export async function generateStaticParams() {
    return Object.keys(programs).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const program = programs[params.slug as keyof typeof programs];

    if (!program) {
        return {
            title: 'Program Not Found | Dietician at Home',
        };
    }

    return {
        title: program.title,
        description: program.description,
        keywords: program.keywords,
        alternates: {
            canonical: `https://dieticianathome.com/programs/${params.slug}`,
        },
        openGraph: {
            title: program.title,
            description: program.description,
            url: `https://dieticianathome.com/programs/${params.slug}`,
            siteName: 'Dietician at Home',
            locale: 'en_IN',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: program.title,
            description: program.description,
        },
    };
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
    const program = programs[params.slug as keyof typeof programs];

    if (!program) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: program.title,
        description: program.description,
        url: `https://dieticianathome.com/programs/${params.slug}`,
        provider: {
            '@type': 'Organization',
            name: 'Dietician at Home',
            url: 'https://dieticianathome.com',
        },
    };

    const breadcrumbLd = {
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
                name: params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                item: `https://dieticianathome.com/programs/${params.slug}`,
            },
        ],
    };

    const Component = program.component;
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <Component />
        </>
    );
}

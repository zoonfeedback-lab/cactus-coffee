import type { Metadata } from 'next';
import PlantsHero from '@/components/plants/Hero';
import PlantIntro from '@/components/plants/PlantIntro';
import FeaturedPlant from '@/components/plants/FeaturedPlant';
import CategoryChips from '@/components/plants/CategoryChips';
import CareTips from '@/components/plants/CareTips';
import PlantGallery from '@/components/plants/PlantGallery';
import WhyBuyFromUs from '@/components/plants/WhyBuyFromUs';
import PlantCTA from '@/components/plants/PlantCTA';
import OfficePlantsSection from '@/components/plants/OfficePlants';
import {
    plantCategories,
    plantsData,
    careTips,
    officePlants,
} from '@/lib/plants-data';

export const metadata: Metadata = {
    title: 'Plant Shop | Cactus Coffee',
    description:
        'Browse our curated collection of premium indoor and outdoor plants. Monstera, Snake Plant, Fiddle Leaf Fig, and more — delivered to your door.',
};

export default function PlantsPage() {
    return (
        <main>
            {/* Hero (existing) */}
            <PlantsHero />

            {/* 1. Intro Section — NEW */}
            <PlantIntro />

            {/* 2 & 4. Categories + Plant Grid (existing) */}
            <CategoryChips categories={plantCategories} plants={plantsData} />

            {/* 3. Featured Plant — NEW */}
            <FeaturedPlant />

            {/* 5. Care Tips (existing, now with 3 tips) */}
            <CareTips tips={careTips} />

            {/* Office Plants (existing) */}
            <OfficePlantsSection plants={officePlants} />

            {/* 6. Gallery Lifestyle — NEW */}
            <PlantGallery />

            {/* 7. Why Buy From Us — NEW */}
            <WhyBuyFromUs />

            {/* 8. CTA Section — NEW */}
            <PlantCTA />
        </main>
    );
}

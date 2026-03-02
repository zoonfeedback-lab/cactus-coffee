import type { Metadata } from 'next';
import PlantsHero from '@/components/plants/Hero';
import PlantSubNav from '@/components/layout/PlantSubNav';
import PlantIntro from '@/components/plants/PlantIntro';
import FeaturedPlant from '@/components/plants/FeaturedPlant';
import CategoryChips from '@/components/plants/CategoryChips';
import CareTips from '@/components/plants/CareTips';
import PlantGallery from '@/components/plants/PlantGallery';
import PlantConsultation from '@/components/plants/PlantConsultation';
import PlantWorkshops from '@/components/plants/PlantWorkshops';
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
            <PlantsHero />
            <PlantSubNav />

            <PlantIntro />
            <CategoryChips categories={plantCategories} plants={plantsData} />
            <FeaturedPlant />
            <CareTips tips={careTips} />
            <OfficePlantsSection plants={officePlants} />
            <PlantGallery />
            <PlantConsultation />
            <PlantWorkshops />
            <WhyBuyFromUs />
            <PlantCTA />
        </main>
    );
}

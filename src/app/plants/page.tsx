import type { Metadata } from 'next';
import PlantsHero from '@/components/plants/Hero';
import PlantSubNav from '@/components/layout/PlantSubNav';
import CategoryChips from '@/components/plants/CategoryChips';
import WhyBuyFromUs from '@/components/plants/WhyBuyFromUs';
import PlantCTA from '@/components/plants/PlantCTA';
import {
    plantCategories,
    plantsData,
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

            <CategoryChips categories={plantCategories} plants={plantsData} />
            <WhyBuyFromUs />
            <PlantCTA />
        </main>
    );
}

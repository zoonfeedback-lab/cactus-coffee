import type { Metadata } from 'next';
import PlantsHero from '@/components/plants/Hero';
import CategoryChips from '@/components/plants/CategoryChips';
import CareTips from '@/components/plants/CareTips';
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
            <CategoryChips categories={plantCategories} plants={plantsData} />
            <CareTips tips={careTips} />
            <OfficePlantsSection plants={officePlants} />
        </main>
    );
}

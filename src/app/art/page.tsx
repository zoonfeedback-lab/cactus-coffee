import type { Metadata } from 'next';
import ExhibitionHero from '@/components/exhibition/Hero';
import FilterTabs from '@/components/exhibition/FilterTabs';
import CuratorSection from '@/components/exhibition/CuratorSection';
import { categories, galleryItems, curator } from '@/lib/exhibition-data';

export const metadata: Metadata = {
    title: 'Art Exhibition | Cactus Coffee',
    description:
        'Explore our curated collection of contemporary forest-inspired art. Painting, sculpture, digital art, and botanical works from emerging and established artists.',
};

export default function ExhibitionPage() {
    return (
        <main className="bg-[#0a0f0d]">
            <ExhibitionHero />
            <FilterTabs categories={categories} items={galleryItems} />
            <CuratorSection curator={curator} />
        </main>
    );
}

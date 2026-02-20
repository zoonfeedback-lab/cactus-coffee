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

            {/* Gold gradient divider — hero ➜ gallery */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-[#d4a843]/50 to-transparent" />
            </div>

            <FilterTabs categories={categories} items={galleryItems} />

            {/* Muted green divider — gallery ➜ curator */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-[#8a9b8f]/40 to-transparent" />
            </div>

            <CuratorSection curator={curator} />
        </main>
    );
}

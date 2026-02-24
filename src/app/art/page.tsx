import type { Metadata } from 'next';
import ExhibitionHero from '@/components/exhibition/Hero';
import FeaturedArtwork from '@/components/exhibition/FeaturedArtwork';
import EditorialGallery from '@/components/exhibition/EditorialGallery';
import CuratorSection from '@/components/exhibition/CuratorSection';
import { categories, galleryItems, curator } from '@/lib/exhibition-data';

export const metadata: Metadata = {
    title: 'Art Exhibition | Cactus Coffee',
    description:
        'Explore our curated collection of contemporary forest-inspired art. Painting, sculpture, digital art, and botanical works from emerging and established artists.',
};

/* Pick the featured item (first flagged, or fallback to first item) */
const featuredItem = galleryItems.find((i) => i.featured) ?? galleryItems[0];

/* Remove featured from the main collection to avoid duplication */
const collectionItems = galleryItems.filter((i) => i.id !== featuredItem.id);

export default function ExhibitionPage() {
    return (
        <main className="bg-white">
            <ExhibitionHero />

            {/* Subtle divider — hero ➜ featured */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <FeaturedArtwork item={featuredItem} />

            {/* Subtle divider — featured ➜ gallery */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <EditorialGallery categories={categories} items={collectionItems} />

            {/* Subtle divider — gallery ➜ curator */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CuratorSection curator={curator} />
        </main>
    );
}

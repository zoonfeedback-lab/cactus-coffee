/* ── Unified art detail data — serves artwork detail pages at /art/artwork/[id] ── */
/* Dynamically imports from gallery and exhibition data so all artwork IDs are covered */

import { galleryItems } from '@/lib/exhibition-data';
import { exhibitions } from '@/lib/exhibitions-data';

export interface ArtworkDetail {
    id: string;
    title: string;
    artist: string;
    description: string;
    category: string;
    image: string;
    medium: string;
    dimensions: string;
    year: number;
    price: number;
    status: 'available' | 'sold' | 'on-exhibition';
    source: 'gallery' | 'exhibition';
    owner?: string;
    exhibitionTitle?: string;
}

/* ── Dimensions pool ── */

const dimensionsPool = [
    '18×24"', '24×36"', '30×40"', '16×20"', '12×16"',
    '20×28"', '36×48"', '24×30"', '18×18"', '28×40"',
];

/* ── Mediums pool ── */

const mediumsPool = [
    'Oil on Canvas', 'Acrylic on Canvas', 'Watercolor on Paper',
    'Mixed Media', 'Charcoal on Paper', 'Digital Print',
    'Ink & Watercolor', 'Calligraphy Ink & Gold Leaf',
    'Acrylic & Resin', 'Reclaimed Wood',
];

/* ── Sold items (simulate some as sold) ── */

const soldGalleryIds = new Set(['gal-2', 'gal-5', 'gal-10', 'gal-15', 'gal-22', 'gal-28']);

/* ── Build gallery artwork details ── */

const galleryArtworks: ArtworkDetail[] = galleryItems.map((item, i) => ({
    id: item.id,
    title: item.title,
    artist: item.artist,
    description: item.description,
    category: item.category,
    image: item.image,
    medium: mediumsPool[i % mediumsPool.length],
    dimensions: dimensionsPool[i % dimensionsPool.length],
    year: 2024 + (i % 2),
    price: item.price,
    status: soldGalleryIds.has(item.id) ? 'sold' as const : 'available' as const,
    source: 'gallery' as const,
}));

/* ── Build exhibition artwork details ── */

const exhibitionArtworks: ArtworkDetail[] = exhibitions.flatMap((exh) =>
    exh.artworks.map((art) => ({
        id: art.id,
        title: art.title,
        artist: exh.artist,
        description: exh.description,
        category: 'painting',
        image: art.image,
        medium: art.medium,
        dimensions: dimensionsPool[Math.abs(art.id.charCodeAt(art.id.length - 1)) % dimensionsPool.length],
        year: art.year,
        price: art.price,
        status: (exh.status === 'ongoing' ? 'on-exhibition' : exh.status === 'past' ? 'sold' : 'available') as ArtworkDetail['status'],
        source: 'exhibition' as const,
        owner: exh.artist,
        exhibitionTitle: exh.title,
    }))
);

/* ── Combined artworks ── */

export const allArtworks: ArtworkDetail[] = [
    ...galleryArtworks,
    ...exhibitionArtworks,
];

/* ── Helpers ── */

export function getArtworkById(id: string): ArtworkDetail | undefined {
    return allArtworks.find((a) => a.id === id);
}

export function getAllArtworkIds(): string[] {
    return allArtworks.map((a) => a.id);
}

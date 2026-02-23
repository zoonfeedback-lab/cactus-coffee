/* ── Type definitions for the exhibition data layer ── */

export interface GalleryItem {
    id: string;
    title: string;
    category: string;
    image: string;
    size: 'sm' | 'md' | 'lg';
}

export interface Category {
    id: string;
    label: string;
    slug: string;
}

export interface Curator {
    name: string;
    role: string;
    bio: string;
    image: string;
    quote: string;
}

/* ── Data arrays ── */

export const categories: Category[] = [
    { id: 'cat-all', label: 'All Works', slug: 'all' },
    { id: 'cat-painting', label: 'Painting', slug: 'painting' },
    { id: 'cat-digital', label: 'Digital Art', slug: 'digital-art' },
    { id: 'cat-abstract', label: 'Abstract', slug: 'abstract' },
    { id: 'cat-sculpture', label: 'Sculpture', slug: 'sculpture' },
    { id: 'cat-botanical', label: 'Botanical', slug: 'botanical' },
];

const img = '/images/exhibition/arts-image.jfif';

const sizes: ('sm' | 'md' | 'lg')[] = ['sm', 'md', 'lg', 'md', 'sm', 'lg', 'md', 'sm', 'lg', 'sm'];
const cats = ['painting', 'botanical', 'sculpture', 'abstract', 'digital-art'];
const titles = [
    'Golden Canopy', 'Misty Pines', 'Organic Flow', 'Dark Geometry',
    'Verdant Bloom', 'Forest Floor', 'Ember Glow', 'Sacred Geometry',
    'Twilight Drift', 'Marble Veins', 'Coastal Haze', 'Urban Moss',
    'Quiet Storm', 'Rust & Earth', 'Solstice', 'Northern Light',
    'Ink Bloom', 'Glass Forest', 'Woven Light', 'Obsidian Mirror',
    'Petal Fall', 'Folded Silk', 'Copper Veil', 'Stone Garden',
    'Horizon Line', 'Tidal Pool', 'Paper Bark', 'Night Orchid',
    'Floating Island', 'Crimson Fog', 'Spore Pattern', 'Smoke Ring',
    'Dew Drop', 'Echo Chamber', 'Wild Grain', 'Sunken City',
];

export const galleryItems: GalleryItem[] = titles.map((title, i) => ({
    id: `gal-${i + 1}`,
    title,
    category: cats[i % cats.length],
    image: img,
    size: sizes[i % sizes.length],
}));

export const curator: Curator = {
    name: 'Isabella Moretti',
    role: 'Head of Curation',
    bio: 'This exhibition explores the symbiotic relationship between urban life and the natural world. Each piece has been carefully selected to provoke a sense of calm reflection, much like the experience of walking through a sun-dappled forest floor. We invite you to lose yourself in the textures of the brush and the silence of the pixels.',
    image: img,
    quote:
        'Art is not what you see, but what you make others see. In this collection, we focus on the invisible threads that connect our breath to the trees.',
};

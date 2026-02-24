/* ── Type definitions for the exhibition data layer ── */

export interface GalleryItem {
    id: string;
    title: string;
    artist: string;
    description: string;
    category: string;
    image: string;
    size: 'sm' | 'md' | 'lg';
    featured?: boolean;
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

const images = [
    '/images/exhibition/arts-image.jfif',
    '/images/exhibition/img-2.jfif',
    '/images/exhibition/img-3.jfif',
    '/images/exhibition/img-4.jfif',
    '/images/exhibition/img-5.jfif',
];

const cats = ['painting', 'botanical', 'sculpture', 'abstract', 'digital-art'];

const artists = [
    'Lena Hartwood', 'Omar Khayam', 'Sophia Veil', 'Kael Ashburn',
    'Mira Tanaka', 'Elias Crane', 'Nadia Solstice', 'Rune Hallberg',
    'Yara Montoya', 'Felix Noir', 'Isla Verdant', 'Nico Ferro',
];

const descriptions = [
    'Where light bends through ancient canopy, silence becomes visible.',
    'A meditation on stillness and the breath between two seasons.',
    'Organic matter dissolving into rhythm and pure gesture.',
    'The tension between order and the chaos hiding just beneath.',
    'Petals pressed against glass — nature reaching for something more.',
    'Decomposition reimagined as an act of beauty and renewal.',
    'The last embers of daylight caught in pigment and patience.',
    'Mathematical harmony found in the veins of a single leaf.',
    'That fragile hour when the sky forgets whether to sleep or wake.',
    'Stone remembering the river that carved it into being.',
    'Salt air and the erosion of certainty, rendered in soft focus.',
    'Moss reclaiming what was never truly ours to begin with.',
];

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

const sizes: ('sm' | 'md' | 'lg')[] = ['sm', 'md', 'lg', 'md', 'sm', 'lg', 'md', 'sm', 'lg', 'sm'];

export const galleryItems: GalleryItem[] = titles.map((title, i) => ({
    id: `gal-${i + 1}`,
    title,
    artist: artists[i % artists.length],
    description: descriptions[i % descriptions.length],
    category: cats[i % cats.length],
    image: images[i % images.length],
    size: sizes[i % sizes.length],
    featured: i === 0,
}));

export const curator: Curator = {
    name: 'Isabella Moretti',
    role: 'Head of Curation',
    bio: 'This exhibition explores the symbiotic relationship between urban life and the natural world. Each piece has been carefully selected to provoke a sense of calm reflection, much like the experience of walking through a sun-dappled forest floor. We invite you to lose yourself in the textures of the brush and the silence of the pixels.',
    image: images[0],
    quote:
        'Art is not what you see, but what you make others see. In this collection, we focus on the invisible threads that connect our breath to the trees.',
};

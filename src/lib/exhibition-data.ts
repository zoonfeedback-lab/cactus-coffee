/* ── Type definitions for the exhibition data layer ── */

export interface GalleryItem {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
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

export const galleryItems: GalleryItem[] = [
    {
        id: 'gal-1',
        title: 'Golden Canopy',
        category: 'painting',
        image: '/images/exhibition/arts-image.jfif',
        description:
            'An oil-on-canvas exploration of autumn light filtering through dense forest canopy.',
    },
    {
        id: 'gal-2',
        title: 'Misty Pines',
        category: 'botanical',
        image: '/images/exhibition/arts-image.jfif',
        description:
            'A photographic study of Pacific Northwest old-growth forest in morning fog.',
    },
    {
        id: 'gal-3',
        title: 'Organic Flow',
        category: 'sculpture',
        image: '/images/exhibition/arts-image.jfif',
        description:
            'A polished stainless steel sculpture inspired by the flowing forms of wind-shaped branches.',
    },
    {
        id: 'gal-4',
        title: 'Dark Geometry',
        category: 'abstract',
        image: '/images/exhibition/arts-image.jfif',
        description:
            'A minimalist digital composition exploring the tension between rigid geometry and organic decay.',
    },
    {
        id: 'gal-5',
        title: 'Verdant Bloom',
        category: 'botanical',
        image: '/images/exhibition/arts-image.jfif',
        description:
            'A hyper-detailed botanical illustration of a rare tropical flower rendered in vivid gouache.',
    },
    {
        id: 'gal-6',
        title: 'Forest Floor',
        category: 'digital-art',
        image: '/images/exhibition/arts-image.jfif',
        description:
            'A generative digital artwork simulating the fractal patterns found in moss and lichen.',
    },
];

export const curator: Curator = {
    name: 'Isabella Moretti',
    role: 'Head of Curation',
    bio: 'This exhibition explores the symbiotic relationship between urban life and the natural world. Each piece has been carefully selected to provoke a sense of calm reflection, much like the experience of walking through a sun-dappled forest floor. We invite you to lose yourself in the textures of the brush and the silence of the pixels.',
    image: '/images/exhibition/arts-image.jfif',
    quote:
        'Art is not what you see, but what you make others see. In this collection, we focus on the invisible threads that connect our breath to the trees.',
};

/* ── Type definitions for the plants data layer ── */

export interface Plant {
    id: string;
    name: string;
    image: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    light: string;
    watering: string;
    category: string;
    price: number;
    size: 'sm' | 'md' | 'lg';
}

export interface PlantCategory {
    id: string;
    label: string;
    slug: string;
}

export interface Tip {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface OfficePlant {
    id: string;
    name: string;
    image: string;
    descriptor: string;
    price: number;
}

/* ── Data arrays ── */

export const plantCategories: PlantCategory[] = [
    { id: 'pcat-all', label: 'All Plants', slug: 'all' },
    { id: 'pcat-indoor', label: 'Indoor', slug: 'indoor' },
    { id: 'pcat-outdoor', label: 'Outdoor', slug: 'outdoor' },
    { id: 'pcat-lowmaint', label: 'Low Maintenance', slug: 'low-maintenance' },
    { id: 'pcat-air', label: 'Air Purifying', slug: 'air-purifying' },
    { id: 'pcat-pet', label: 'Pet Friendly', slug: 'pet-friendly' },
];

export const plantsData: Plant[] = [
    {
        id: 'p-1',
        name: 'Monstera Deliciosa',
        image: '/images/plants/cactus-image.jfif',
        description: 'The iconic Swiss cheese plant — a statement piece for any living space with its dramatic split leaves.',
        level: 'Beginner',
        light: 'Indirect',
        watering: 'Weekly',
        category: 'indoor',
        price: 45,
        size: 'lg',
    },
    {
        id: 'p-2',
        name: 'Snake Plant',
        image: '/images/plants/img-2.jfif',
        description: 'Nearly indestructible and a powerful air purifier. Thrives in low light and needs minimal watering.',
        level: 'Beginner',
        light: 'Low Light',
        watering: 'Monthly',
        category: 'air-purifying',
        price: 32,
        size: 'sm',
    },
    {
        id: 'p-3',
        name: 'Fiddle Leaf Fig',
        image: '/images/plants/img-3.jfif',
        description: 'A showstopper with large violin-shaped leaves. The perfect architectural plant for bright rooms.',
        level: 'Advanced',
        light: 'Bright Indirect',
        watering: 'Weekly',
        category: 'indoor',
        price: 65,
        size: 'md',
    },
    {
        id: 'p-4',
        name: 'Peace Lily',
        image: '/images/plants/img-4.jfif',
        description: 'Elegant white blooms and lush green leaves. Pet-safe and one of the best air-purifying houseplants.',
        level: 'Beginner',
        light: 'Low Light',
        watering: 'Bi-Weekly',
        category: 'pet-friendly',
        price: 28,
        size: 'lg',
    },
    {
        id: 'p-5',
        name: 'Lavender',
        image: '/images/plants/img-5.jfif',
        description: 'Fragrant purple blooms that attract pollinators. Perfect for sunny patios and container gardens.',
        level: 'Intermediate',
        light: 'Full Sun',
        watering: 'Weekly',
        category: 'outdoor',
        price: 22,
        size: 'sm',
    },
    {
        id: 'p-6',
        name: 'Pothos',
        image: '/images/plants/img-2.jfif',
        description: 'A trailing vine that thrives in almost any environment. The ultimate low-maintenance houseplant.',
        level: 'Beginner',
        light: 'Any Light',
        watering: 'Weekly',
        category: 'low-maintenance',
        price: 18,
        size: 'md',
    },
    {
        id: 'p-7',
        name: 'Bird of Paradise',
        image: '/images/plants/img-3.jfif',
        description: 'Tropical drama with large banana-like leaves. Brings a bold, resort-like atmosphere indoors.',
        level: 'Intermediate',
        light: 'Bright Direct',
        watering: 'Weekly',
        category: 'indoor',
        price: 75,
        size: 'lg',
    },
    {
        id: 'p-8',
        name: 'Aloe Vera',
        image: '/images/plants/img-4.jfif',
        description: 'Medicinal and decorative — the gel soothes burns and the sculptural form looks stunning on windowsills.',
        level: 'Beginner',
        light: 'Bright Indirect',
        watering: 'Bi-Weekly',
        category: 'low-maintenance',
        price: 15,
        size: 'sm',
    },
];

export const careTips: Tip[] = [
    {
        id: 'tip-1',
        title: 'Watering 101',
        description: 'Learn the finger test and why overwatering is the #1 killer of houseplants.',
        icon: 'Droplets',
    },
    {
        id: 'tip-2',
        title: 'Lighting Guide',
        description: 'Decoding bright, indirect, dappled, and low light conditions for your home.',
        icon: 'Sun',
    },
    {
        id: 'tip-3',
        title: 'Repotting Tips',
        description: 'Know when and how to repot — giving roots room to grow keeps plants happy.',
        icon: 'Sprout',
    },
];

export const officePlants: OfficePlant[] = [
    {
        id: 'op-1',
        name: 'Desk Succulent',
        image: '/images/plants/img-5.jfif',
        descriptor: 'Tiny but tough',
        price: 12,
    },
    {
        id: 'op-2',
        name: 'Golden Pothos',
        image: '/images/plants/img-2.jfif',
        descriptor: 'Trails beautifully',
        price: 18,
    },
    {
        id: 'op-3',
        name: 'ZZ Plant',
        image: '/images/plants/img-3.jfif',
        descriptor: 'Low light master',
        price: 25,
    },
];

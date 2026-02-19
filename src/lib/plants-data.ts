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
        image: '/images/plants/plant-1.svg',
        description: 'The iconic Swiss cheese plant — a statement piece for any living space with its dramatic split leaves.',
        level: 'Beginner',
        light: 'Indirect',
        watering: 'Weekly',
        category: 'indoor',
        price: 45,
    },
    {
        id: 'p-2',
        name: 'Snake Plant',
        image: '/images/plants/plant-2.svg',
        description: 'Nearly indestructible and a powerful air purifier. Thrives in low light and needs minimal watering.',
        level: 'Beginner',
        light: 'Low Light',
        watering: 'Monthly',
        category: 'air-purifying',
        price: 32,
    },
    {
        id: 'p-3',
        name: 'Fiddle Leaf Fig',
        image: '/images/plants/plant-3.svg',
        description: 'A showstopper with large violin-shaped leaves. The perfect architectural plant for bright rooms.',
        level: 'Advanced',
        light: 'Bright Indirect',
        watering: 'Weekly',
        category: 'indoor',
        price: 65,
    },
    {
        id: 'p-4',
        name: 'Peace Lily',
        image: '/images/plants/plant-4.svg',
        description: 'Elegant white blooms and lush green leaves. Pet-safe and one of the best air-purifying houseplants.',
        level: 'Beginner',
        light: 'Low Light',
        watering: 'Bi-Weekly',
        category: 'pet-friendly',
        price: 28,
    },
    {
        id: 'p-5',
        name: 'Lavender',
        image: '/images/plants/plant-5.svg',
        description: 'Fragrant purple blooms that attract pollinators. Perfect for sunny patios and container gardens.',
        level: 'Intermediate',
        light: 'Full Sun',
        watering: 'Weekly',
        category: 'outdoor',
        price: 22,
    },
    {
        id: 'p-6',
        name: 'Pothos',
        image: '/images/plants/plant-6.svg',
        description: 'A trailing vine that thrives in almost any environment. The ultimate low-maintenance houseplant.',
        level: 'Beginner',
        light: 'Any Light',
        watering: 'Weekly',
        category: 'low-maintenance',
        price: 18,
    },
    {
        id: 'p-7',
        name: 'Bird of Paradise',
        image: '/images/plants/plant-7.svg',
        description: 'Tropical drama with large banana-like leaves. Brings a bold, resort-like atmosphere indoors.',
        level: 'Intermediate',
        light: 'Bright Direct',
        watering: 'Weekly',
        category: 'indoor',
        price: 75,
    },
    {
        id: 'p-8',
        name: 'Aloe Vera',
        image: '/images/plants/plant-8.svg',
        description: 'Medicinal and decorative — the gel soothes burns and the sculptural form looks stunning on windowsills.',
        level: 'Beginner',
        light: 'Bright Indirect',
        watering: 'Bi-Weekly',
        category: 'low-maintenance',
        price: 15,
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
];

export const officePlants: OfficePlant[] = [
    {
        id: 'op-1',
        name: 'Desk Succulent',
        image: '/images/plants/office-1.svg',
        descriptor: 'Tiny but tough',
        price: 12,
    },
    {
        id: 'op-2',
        name: 'Golden Pothos',
        image: '/images/plants/office-2.svg',
        descriptor: 'Trails beautifully',
        price: 18,
    },
    {
        id: 'op-3',
        name: 'ZZ Plant',
        image: '/images/plants/office-3.svg',
        descriptor: 'Low light master',
        price: 25,
    },
];

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
    { id: 'pcat-office', label: 'Office', slug: 'office' },
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
    {
        id: 'p-9',
        name: 'Desk Succulent',
        image: '/images/plants/img-5.jfif',
        description: 'Tiny but tough — the perfect compact companion for any desk or windowsill.',
        level: 'Beginner',
        light: 'Bright Indirect',
        watering: 'Monthly',
        category: 'office',
        price: 12,
        size: 'sm',
    },
    {
        id: 'p-10',
        name: 'ZZ Plant',
        image: '/images/plants/img-3.jfif',
        description: 'The ultimate low-light master — glossy, architectural leaves that thrive on neglect.',
        level: 'Beginner',
        light: 'Low Light',
        watering: 'Monthly',
        category: 'office',
        price: 25,
        size: 'md',
    },
    {
        id: 'p-11',
        name: 'Spider Plant',
        image: '/images/plants/img-4.jfif',
        description: 'An air-purifying champion with cascading babies. Perfect for shelves and hanging baskets.',
        level: 'Beginner',
        light: 'Indirect',
        watering: 'Weekly',
        category: 'office',
        price: 15,
        size: 'sm',
    },
    {
        id: 'p-12',
        name: 'Rubber Plant',
        image: '/images/plants/img-2.jfif',
        description: 'Bold glossy leaves that make a statement. Easy to care for and grows tall over time.',
        level: 'Beginner',
        light: 'Bright Indirect',
        watering: 'Bi-Weekly',
        category: 'office',
        price: 28,
        size: 'lg',
    },
    {
        id: 'p-13',
        name: 'Jade Plant',
        image: '/images/plants/img-5.jfif',
        description: 'A symbol of prosperity with thick, coin-shaped leaves. Thrives on bright light and minimal water.',
        level: 'Beginner',
        light: 'Bright Direct',
        watering: 'Monthly',
        category: 'office',
        price: 16,
        size: 'sm',
    },
    {
        id: 'p-14',
        name: 'Chinese Evergreen',
        image: '/images/plants/img-4.jfif',
        description: 'Thrives in shade with beautiful patterned leaves. One of the easiest office plants to grow.',
        level: 'Beginner',
        light: 'Low Light',
        watering: 'Bi-Weekly',
        category: 'office',
        price: 22,
        size: 'md',
    },
    {
        id: 'p-15',
        name: 'Bamboo Palm',
        image: '/images/plants/img-3.jfif',
        description: 'Brings a tropical desk vibe with feathery fronds. Great for adding height and texture to a workspace.',
        level: 'Intermediate',
        light: 'Indirect',
        watering: 'Weekly',
        category: 'office',
        price: 30,
        size: 'lg',
    },
    {
        id: 'p-16',
        name: 'String of Pearls',
        image: '/images/plants/img-5.jfif',
        description: 'A stunning trailing succulent with bead-like leaves. Perfect for hanging baskets and high shelves.',
        level: 'Intermediate',
        light: 'Bright Indirect',
        watering: 'Bi-Weekly',
        category: 'indoor',
        price: 24,
        size: 'sm',
    },
    {
        id: 'p-17',
        name: 'Calathea Orbifolia',
        image: '/images/plants/img-4.jfif',
        description: 'Dramatic round leaves with silver-green stripes. A true showpiece that loves humidity.',
        level: 'Advanced',
        light: 'Low Light',
        watering: 'Weekly',
        category: 'indoor',
        price: 55,
        size: 'lg',
    },
    {
        id: 'p-18',
        name: 'Rosemary',
        image: '/images/plants/img-5.jfif',
        description: 'Fragrant and functional — perfect for sunny balconies and kitchen windowsills. Great in cooking too.',
        level: 'Beginner',
        light: 'Full Sun',
        watering: 'Weekly',
        category: 'outdoor',
        price: 18,
        size: 'sm',
    },
    {
        id: 'p-19',
        name: 'Japanese Maple',
        image: '/images/plants/img-3.jfif',
        description: 'Elegant red-leafed tree ideal for patios and garden corners. Stunning autumn colour.',
        level: 'Advanced',
        light: 'Bright Direct',
        watering: 'Weekly',
        category: 'outdoor',
        price: 95,
        size: 'lg',
    },
    {
        id: 'p-20',
        name: 'Echeveria',
        image: '/images/plants/img-2.jfif',
        description: 'A rosette-forming succulent with pastel tones. Extremely low maintenance and photogenic.',
        level: 'Beginner',
        light: 'Bright Direct',
        watering: 'Monthly',
        category: 'low-maintenance',
        price: 10,
        size: 'sm',
    },
    {
        id: 'p-21',
        name: 'Cast Iron Plant',
        image: '/images/plants/img-4.jfif',
        description: 'Nearly indestructible — thrives in dark corners and with irregular watering. A true survivor.',
        level: 'Beginner',
        light: 'Low Light',
        watering: 'Monthly',
        category: 'low-maintenance',
        price: 30,
        size: 'md',
    },
    {
        id: 'p-22',
        name: 'Boston Fern',
        image: '/images/plants/img-3.jfif',
        description: 'Lush, arching fronds that purify the air beautifully. Loves humidity and indirect light.',
        level: 'Intermediate',
        light: 'Indirect',
        watering: 'Weekly',
        category: 'air-purifying',
        price: 28,
        size: 'lg',
    },
    {
        id: 'p-23',
        name: 'Areca Palm',
        image: '/images/plants/img-2.jfif',
        description: 'A natural humidifier with feathery, arching fronds. One of the best air-purifying plants.',
        level: 'Beginner',
        light: 'Bright Indirect',
        watering: 'Weekly',
        category: 'air-purifying',
        price: 42,
        size: 'lg',
    },
    {
        id: 'p-24',
        name: 'Parlour Palm',
        image: '/images/plants/cactus-image.jfif',
        description: 'A compact Victorian favourite. Non-toxic and perfect for homes with curious pets.',
        level: 'Beginner',
        light: 'Low Light',
        watering: 'Bi-Weekly',
        category: 'pet-friendly',
        price: 22,
        size: 'md',
    },
    {
        id: 'p-25',
        name: 'Haworthia',
        image: '/images/plants/img-5.jfif',
        description: 'A mini succulent with translucent leaf tips. Pet-safe and ideal for bright desks.',
        level: 'Beginner',
        light: 'Bright Indirect',
        watering: 'Monthly',
        category: 'pet-friendly',
        price: 14,
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

export const officePlants: OfficePlant[] = plantsData
    .filter(p => p.category === 'office')
    .map(p => ({ id: p.id, name: p.name, image: p.image, descriptor: p.description.split('.')[0], price: p.price }));

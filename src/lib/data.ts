/* ── Type definitions for the data layer ── */

export interface ArtItem {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
}

export interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface Plant {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
    category: string;
}

export interface CafeMenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    icon: string;
}

/* ── Data arrays ── */

export const artItems: ArtItem[] = [
    {
        id: 'art-1',
        title: 'Curated Art',
        image: '/images/art-1.svg',
        category: 'Abstract',
        description:
            'Immerse yourself in emerging contemporary artistic expression — always designed with a unique cultural workspace.',
    },
    {
        id: 'art-2',
        title: 'Urban Jungle',
        image: '/images/art-2.svg',
        category: 'Sculpture',
        description:
            'Hand-selected botanical sculptures and conceptual nature art — a unique, calming sanctuary.',
    },
    {
        id: 'art-3',
        title: 'Handcrafted Brews',
        image: '/images/art-3.svg',
        category: 'Photography',
        description:
            'Explore artisan-crafted specialty brews, prepared by skilled baristas and served in curated environments.',
    },
];

export const features: Feature[] = [
    {
        id: 'feat-1',
        icon: 'Palette',
        title: 'Curated Art',
        description:
            'Immerse emerging contemporary artists within the space — always designed with a unique cultural workspace.',
    },
    {
        id: 'feat-2',
        icon: 'Leaf',
        title: 'Urban Jungle',
        description:
            'Hand-selected botanicals and rare plants into our spaces to deliver a calming sanctuary.',
    },
    {
        id: 'feat-3',
        icon: 'Coffee',
        title: 'Handcrafted Brews',
        description:
            'Explore artisan-quality specialty brews, prepared by skilled baristas and served in curated environments.',
    },
];

export const plants: Plant[] = [
    {
        id: 'plant-1',
        name: 'Monstera Deliciosa',
        image: '/images/plant-1.svg',
        price: 45,
        rating: 5,
        category: 'Indoor',
    },
    {
        id: 'plant-2',
        name: 'Fiddle Leaf Fig',
        image: '/images/plant-2.svg',
        price: 65,
        rating: 4,
        category: 'Indoor',
    },
    {
        id: 'plant-3',
        name: 'Snake Plant Zeylanica',
        image: '/images/plant-3.svg',
        price: 30,
        rating: 5,
        category: 'Low Light',
    },
];

export const menuItems: CafeMenuItem[] = [
    {
        id: 'menu-1',
        name: 'Velvet Oat Latte',
        description:
            'Silken oat milk single-origin Yirgacheffe espresso with hint of lavender, handcrafted daily.',
        price: 750,
        icon: 'Coffee',
    },
    {
        id: 'menu-2',
        name: 'Ceremonial Matcha',
        description:
            'A premium-grade Uji matcha whisked to perfection with your choice of milk.',
        price: 850,
        icon: 'Leaf',
    },
    {
        id: 'menu-3',
        name: 'Signature Pour-Over',
        description:
            'Single-origin beans prepared by skilled baristas for the cleanest cup of coffee.',
        price: 650,
        icon: 'Coffee',
    },
    {
        id: 'menu-4',
        name: "Artist's Flat White",
        description:
            'A velvety micro-foam espresso drink — bold, smooth, and crafted with precision.',
        price: 720,
        icon: 'Coffee',
    },
];

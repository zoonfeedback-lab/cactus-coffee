export interface GearProduct {
    id: string;
    name: string;
    slug: string;
    category: 'Machines' | 'V60 Gear' | 'Moka Pots' | 'Grinders' | 'Wacaco' | 'Accessories';
    subtitle: string;
    price: string;
    originalPrice?: string;
    description: string;
    features: { label: string; value: string; icon: string }[];
    specs: { label: string; value: string }[];
    images: string[];
    badges: string[];
    inStock: boolean;
}

export const GEAR_CATEGORIES = ['All Gear', 'Machines', 'V60 Gear', 'Moka Pots', 'Grinders', 'Wacaco', 'Accessories'];

export const gearProducts: GearProduct[] = [
    {
        id: '1',
        name: 'Lelit Bianca - Dual Boiler Espresso Machine',
        slug: 'lelit-bianca',
        category: 'Machines',
        subtitle: 'Fully Automatic, Dual Boiler',
        price: '450,000',
        description: 'The Lelit Bianca is a masterpiece for the home barista who wants total control. Featuring manual flow control through its signature wooden paddle, it allows for true pressure profiling and artisanal extraction.',
        features: [
            { label: 'DUAL BOILER', value: 'Coffee & Steam', icon: 'Layers' },
            { label: 'GROUP HEAD', value: 'Legendary E61', icon: 'Coffee' },
            { label: 'CONTROL', value: 'Flow Paddle', icon: 'SlidersHorizontal' },
            { label: 'PUMP', value: 'Silent Rotary', icon: 'VolumeX' },
            { label: 'PLUMBING', value: 'Tank/Plumbed', icon: 'Droplet' },
        ],
        specs: [
            { label: 'Boiler Capacity', value: '1.5L (Steam) / 0.8L (Coffee)' },
            { label: 'Dimensions', value: '29 x 48.5 x 40 cm' },
            { label: 'Power Supply', value: '220-240V / 1400W' },
            { label: 'Weight', value: '26.5 kg' },
        ],
        images: [
            '/images/shop/gear/lelit-bianca-1.png',
            '/images/shop/gear/lelit-bianca-2.png',
            '/images/shop/gear/lelit-bianca-3.png',
            '/images/shop/gear/lelit-bianca-4.png',
            '/images/shop/gear/lelit-bianca-5.png',
        ],
        badges: ['PREMIUM', 'FEATURED'],
        inStock: true,
    },
    {
        id: '2',
        name: 'Hario V60 Starter Kit',
        slug: 'hario-v60-starter-kit',
        category: 'V60 Gear',
        subtitle: 'Includes Dripper & Filters',
        price: '8,500',
        description: 'The perfect entry into the world of pour-over coffee. The Hario V60 Starter Kit includes everything you need to brew clean, nuanced coffee at home.',
        features: [],
        specs: [],
        images: ['/images/shop/gear/hario-v60.png'],
        badges: [],
        inStock: true,
    },
    {
        id: '3',
        name: 'Bialetti Moka Express',
        slug: 'bialetti-moka-express',
        category: 'Moka Pots',
        subtitle: '3 Cup Classic, Aluminum',
        price: '12,000',
        description: 'The iconic Italian stovetop espresso maker. Brews rich, authentic stovetop espresso in just minutes.',
        features: [],
        specs: [],
        images: ['/images/shop/gear/moka-pot.png'],
        badges: [],
        inStock: true,
    },
    {
        id: '4',
        name: 'Comandante C40 MK4',
        slug: 'comandante-c40-mk4',
        category: 'Grinders',
        subtitle: 'Manual Precision, Nitro Blade',
        price: '65,000',
        description: 'Considered by many as the worlds best manual coffee grinder. Precision engineering from Germany for unparalleled grind uniformity.',
        features: [],
        specs: [],
        images: ['/images/shop/gear/comandante.png'],
        badges: [],
        inStock: true,
    },
    {
        id: '5',
        name: 'Wacaco Nanopresso',
        slug: 'wacaco-nanopresso',
        category: 'Wacaco',
        subtitle: 'Portable Espresso Maker',
        price: '18,500',
        description: 'Experience genuine espresso on the go. The Nanopresso is one of the best and most versatile portable espresso machines.',
        features: [],
        specs: [],
        images: ['/images/shop/gear/wacaco.png'],
        badges: [],
        inStock: true,
    },
    {
        id: '6',
        name: 'Niche Zero Grinder',
        slug: 'niche-zero-grinder',
        category: 'Grinders',
        subtitle: 'Premium Zero Retention Grinder',
        price: '185,000',
        description: 'The ultimate single-dosing grinder. The Niche Zero provides cafe-quality grinds with practically zero retention.',
        features: [],
        specs: [],
        images: ['/images/shop/gear/niche-zero.png'],
        badges: [],
        inStock: true,
    },
    {
        id: '7',
        name: 'Hario V60 Ceramic Set',
        slug: 'hario-v60-ceramic-set',
        category: 'V60 Gear',
        subtitle: 'Premium Ceramic Dripper',
        price: '12,500',
        description: 'A beautiful ceramic version of the classic V60. Features excellent heat retention for a superior brew.',
        features: [],
        specs: [],
        images: ['/images/shop/gear/hario-ceramic.png'],
        badges: [],
        inStock: true,
    },
    {
        id: '8',
        name: 'Precision Milk Pitcher',
        slug: 'precision-milk-pitcher',
        category: 'Accessories',
        subtitle: 'Professional Latte Art Pitcher',
        price: '8,400',
        description: 'Designed for perfect microfoam and intricate latte art. A must-have for the aspiring home barista.',
        features: [],
        specs: [],
        images: ['/images/shop/gear/milk-pitcher.png'],
        badges: [],
        inStock: true,
    },
    {
        id: '9',
        name: 'Acaia Lunar Scales',
        slug: 'acaia-lunar-scales',
        category: 'Accessories',
        subtitle: 'Smart Espresso Scale',
        price: '65,000',
        description: 'The industry standard for espresso weighing. Ultra-fast, highly accurate, and built to withstand the busy cafe environment.',
        features: [],
        specs: [],
        images: ['/images/shop/gear/acaia-scales.png'],
        badges: [],
        inStock: true,
    }
];

export function getGearProductBySlug(slug: string): GearProduct | undefined {
    return gearProducts.find(p => p.slug === slug);
}

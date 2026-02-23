export interface CoffeeItem {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    tags?: string[];
}

export interface Category {
    id: string;
    label: string;
    slug: string;
}

export interface FeaturedItem {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;
    tag: 'Popular' | 'Seasonal' | 'New' | 'Signature';
}

export const categories: Category[] = [
    { id: '1', label: 'All', slug: 'all' },
    { id: '2', label: 'Espresso', slug: 'espresso' },
    { id: '3', label: 'Brewed', slug: 'brewed' },
    { id: '4', label: 'Signature', slug: 'signature' },
    { id: '5', label: 'Seasonal', slug: 'seasonal' },
    { id: '6', label: 'Pastries', slug: 'pastries' },
];

export const featuredItems: FeaturedItem[] = [
    {
        id: 'f1',
        name: 'Midnight Velvet Latte',
        description: 'A rich espresso foundation blended with charcoal-infused coconut milk and a hint of vanilla bean.',
        image: '/images/coffee/featured-1.svg',
        price: 'PKR 1,500',
        tag: 'Signature',
    },
    {
        id: 'f2',
        name: 'Spiced Honey Cold Brew',
        description: '12-hour steeped cold brew infused with organic honey and a signature blend of warming spices.',
        image: '/images/coffee/featured-2.svg',
        price: 'PKR 1,300',
        tag: 'Popular',
    },
    {
        id: 'f3',
        name: 'Rose & Cardamom Flat White',
        description: 'Creamy oat milk and double espresso delicately flavored with rose water and freshly ground cardamom.',
        image: '/images/coffee/featured-3.svg',
        price: 'PKR 1,400',
        tag: 'Seasonal',
    }
];

export const coffeeMenu: CoffeeItem[] = [
    {
        id: '1',
        name: 'Classic Espresso',
        description: 'A concentrated shot of our signature house blend with a rich crema.',
        price: 'PKR 750',
        category: 'espresso',
        tags: ['Hot'],
    },
    {
        id: '2',
        name: 'Flat White',
        description: 'Velvety micro-foam poured over a double shot of espresso.',
        price: 'PKR 900',
        category: 'espresso',
        tags: ['Hot'],
    },
    {
        id: '3',
        name: 'Pour Over',
        description: 'Single-origin beans brewed slowly to highlight unique flavor profiles.',
        price: 'PKR 1,100',
        category: 'brewed',
        tags: ['Hot'],
    },
    {
        id: '4',
        name: 'Lavender Honey Latte',
        description: 'Our signature espresso with house-made lavender syrup and local honey.',
        price: 'PKR 1,300',
        category: 'signature',
        tags: ['Hot', 'Floral'],
    },
    {
        id: '5',
        name: 'Iced Maple Pecan',
        description: 'Cold brew shaken with maple syrup and toasted pecan notes.',
        price: 'PKR 1,400',
        category: 'seasonal',
        tags: ['Iced'],
    },
    {
        id: '6',
        name: 'Almond Croissant',
        description: 'Flaky, buttery pastry filled with sweet almond frangipane.',
        price: 'PKR 1,000',
        category: 'pastries',
        tags: ['Vegetarian'],
    },
    {
        id: '7',
        name: 'Vegan Avocado Toast',
        description: 'Sourdough topped with smashed avocado, chili flakes, and lime.',
        price: 'PKR 2,300',
        category: 'pastries',
        tags: ['Vegan'],
    }
];

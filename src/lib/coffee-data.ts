export interface CoffeeItem {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
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

export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    title: string;
}

export const categories: Category[] = [
    { id: '1', label: 'Coffee', slug: 'coffee' },
    { id: '2', label: 'Tea & Botanicals', slug: 'tea' },
    { id: '3', label: 'Pastries', slug: 'pastries' },
];

export const featuredItems: FeaturedItem[] = [
    {
        id: 'f1',
        name: 'Lavender Oat Latte',
        description: 'House-made lavender syrup, creamy oat milk, and a light, airy lavender meringue topping.',
        image: '/images/coffee/featured-1.svg',
        price: 'PKR 850',
        tag: 'New',
    },
    {
        id: 'f2',
        name: 'Matcha White Chocolate Tart',
        description: 'Ceremonial-grade matcha swirled with silky white chocolate ganache and edible flowers.',
        image: '/images/coffee/featured-2.svg',
        price: 'PKR 1,100',
        tag: 'Popular',
    },
    {
        id: 'f3',
        name: 'Artisanal Avocado Toast',
        description: 'Freshly baked sourdough topped with smashed avocado, micro-greens, radish, and sea salt.',
        image: '/images/coffee/featured-3.svg',
        price: 'PKR 1,500',
        tag: 'Seasonal',
    },
    {
        id: 'f4',
        name: 'Nitro Rose Cold Brew',
        description: 'Slow-steeped cold brew infused with rose water and nitrogen for a silky effervescent finish.',
        image: '/images/coffee/featured-1.svg',
        price: 'PKR 950',
        tag: 'Signature',
    },
];

export const coffeeMenu: CoffeeItem[] = [
    {
        id: '1',
        name: 'Artisanal Flat White',
        description: 'Double-shot on velvety steamed milk.',
        price: 'PKR 750',
        category: 'coffee',
        image: '/images/coffee/featured-1.svg',
    },
    {
        id: '2',
        name: 'Single Origin V60',
        description: 'Ethiopian hand-poured for tropical berry notes.',
        price: 'PKR 900',
        category: 'coffee',
        image: '/images/coffee/featured-2.svg',
    },
    {
        id: '3',
        name: 'House Cortado',
        description: 'Espresso cut with an equal part of warm milk.',
        price: 'PKR 650',
        category: 'coffee',
        image: '/images/coffee/featured-3.svg',
    },
    {
        id: '4',
        name: 'Double Espresso',
        description: 'A concentrated shot of our Italian-roast house blend.',
        price: 'PKR 550',
        category: 'coffee',
        image: '/images/coffee/featured-1.svg',
    },
    {
        id: '5',
        name: 'Iced Americano',
        description: 'Chilled refreshing espresso, a summer classic.',
        price: 'PKR 600',
        category: 'coffee',
        image: '/images/coffee/featured-2.svg',
    },
    {
        id: '6',
        name: 'Vanilla Bean Latte',
        description: 'Komorebi-roast espresso, Madagascar vanilla pods.',
        price: 'PKR 850',
        category: 'coffee',
        image: '/images/coffee/featured-3.svg',
    },
    {
        id: '7',
        name: 'Chamomile Honey',
        description: 'Soothing chamomile infused with locally sourced wildflower honey.',
        price: 'PKR 500',
        category: 'tea',
        image: '/images/coffee/featured-1.svg',
    },
    {
        id: '8',
        name: 'Iced Hibiscus Tonic',
        description: 'Vibrant hibiscus petals steeped cold, topped with sparkling tonic water.',
        price: 'PKR 650',
        category: 'tea',
        image: '/images/coffee/featured-2.svg',
    },
    {
        id: '9',
        name: 'Ceremonial Matcha',
        description: 'Stone-ground Uji matcha whisked to a smooth, vibrant froth.',
        price: 'PKR 900',
        category: 'tea',
        image: '/images/coffee/featured-3.svg',
    },
    {
        id: '10',
        name: 'Almond Croissant',
        description: 'Flaky, buttery pastry filled with sweet almond frangipane.',
        price: 'PKR 750',
        category: 'pastries',
        image: '/images/coffee/featured-1.svg',
    },
    {
        id: '11',
        name: 'Pistachio Danish',
        description: 'Laminated pastry with pistachio cream and crushed pistachios.',
        price: 'PKR 800',
        category: 'pastries',
        image: '/images/coffee/featured-2.svg',
    },
    {
        id: '12',
        name: 'Sourdough Bread',
        description: 'Naturally fermented for 48 hours, crusty and aromatic.',
        price: 'PKR 550',
        category: 'pastries',
        image: '/images/coffee/featured-3.svg',
    },
];

export const testimonial: Testimonial = {
    id: 't1',
    quote: 'The perfect blend of high-end art and the comfort of my own living room. The Lavender Oat Latte is a spiritual experience.',
    name: 'Bero Richards',
    title: 'Local Regular & Artist',
};

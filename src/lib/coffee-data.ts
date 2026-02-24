/* ── Full menu data for Cactus Coffee ── */

export interface MenuItem {
    name: string;
    description: string;
    single: number | null;
    double: number | null;
    image: string;
    note?: string;
}

export interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
}

export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    title: string;
}

const img = '/images/coffee/coffe-image.jfif';

/* ── The actual menu — exactly as shown on the board ── */

export const menuCategories: MenuCategory[] = [
    {
        id: 'mains',
        title: 'Mainess',
        items: [
            { name: 'Espresso', description: 'Bold and intense shot pulled to perfection from our house-roasted beans.', single: 390, double: 590, image: img },
            { name: 'Americano / Long Black', description: 'Rich espresso lengthened with hot water for a smooth, full-bodied cup.', single: 450, double: 650, image: img },
            { name: 'Cortado', description: 'Equal parts espresso and steamed milk — balanced, silky, and strong.', single: 650, double: 850, image: img },
            { name: 'Cappuccino', description: 'Classic Italian favorite with velvety micro-foam and a dusting of cocoa.', single: 550, double: 750, image: img },
            { name: 'Café Latte', description: 'Smooth espresso blended with steamed milk for a creamy, comforting drink.', single: 550, double: 750, image: img },
            { name: 'Caramel Macchiato', description: 'Layers of vanilla, steamed milk, espresso, and rich caramel drizzle.', single: 650, double: 850, image: img },
            { name: 'Spanish Latte', description: 'Sweet condensed milk meets bold espresso — indulgent and irresistible.', single: 650, double: 850, image: img },
            { name: 'Flavoured Latte', description: 'Choose your favourite syrup — vanilla, hazelnut, or seasonal specials.', single: 650, double: 850, image: img },
            { name: 'Customized Coffee', description: 'Your imagination, our craft. Tell us what you crave and we\'ll make it.', single: null, double: null, image: img, note: 'Variable' },
        ],
    },
];

/* ── Today's Special pool (one is picked daily) ── */

export interface DailySpecial {
    name: string;
    tagline: string;
    description: string;
    price: number;
    image: string;
}

export const dailySpecials: DailySpecial[] = [
    {
        name: 'Lavender Oat Latte',
        tagline: 'Floral & Creamy',
        description: 'House-made lavender syrup, creamy oat milk, and a light dusting of edible lavender on top.',
        price: 850,
        image: img,
    },
    {
        name: 'Caramel Brûlée Mocha',
        tagline: 'Rich & Indulgent',
        description: 'Dark chocolate espresso, salted caramel drizzle with a torched sugar crust finish.',
        price: 900,
        image: img,
    },
    {
        name: 'Pistachio Rose Latte',
        tagline: 'Nutty & Floral',
        description: 'Creamy pistachio milk blended with a splash of rose water and double-shot espresso.',
        price: 850,
        image: img,
    },
    {
        name: 'Matcha White Chocolate',
        tagline: 'Smooth & Earthy',
        description: 'Ceremonial-grade matcha whisked with silky white chocolate and steamed oat milk.',
        price: 800,
        image: img,
    },
    {
        name: 'Honey Cinnamon Cortado',
        tagline: 'Warm & Spiced',
        description: 'Double cortado with wildflower honey and a dusting of Saigon cinnamon.',
        price: 750,
        image: img,
    },
    {
        name: 'Coconut Cold Brew',
        tagline: 'Tropical & Refreshing',
        description: '24-hour steeped cold brew sweetened with coconut cream and toasted coconut flakes.',
        price: 700,
        image: img,
    },
    {
        name: 'Salted Maple Espresso',
        tagline: 'Sweet & Smoky',
        description: 'Double espresso with pure maple syrup and a flake of Maldon sea salt.',
        price: 750,
        image: img,
    },
];

/** Returns the special of the day based on the current date */
export function getTodaysSpecial(): DailySpecial {
    const today = new Date();
    const dayOfYear = Math.floor(
        (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    return dailySpecials[dayOfYear % dailySpecials.length];
}

export const testimonial: Testimonial = {
    id: 't1',
    quote: 'The perfect blend of high-end art and the comfort of my own living room. The Lavender Oat Latte is a spiritual experience.',
    name: 'Bero Richards',
    title: 'Local Regular & Artist',
};

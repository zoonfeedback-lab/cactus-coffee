/* ── Type definitions for the customer art data layer ── */

export interface CustomerArtwork {
    id: string;
    image: string;
    customerName: string;
    event: string;
    date: string;
    caption: string;
}

export interface MomentPhoto {
    id: string;
    image: string;
    alt: string;
}

export interface CustomerTestimonial {
    id: string;
    quote: string;
    author: string;
    event: string;
}

/* ── Customer Artworks ── */

export const customerArtworks: CustomerArtwork[] = [
    {
        id: 'cart-1',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
        customerName: 'Amina S.',
        event: 'Open Art Night',
        date: 'Jan 2026',
        caption: 'Amina lost in concentration during our January open art night — her first time using acrylics.',
    },
    {
        id: 'cart-2',
        image: 'https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=600&q=80',
        customerName: 'Usman K.',
        event: 'Weekend Workshop',
        date: 'Dec 2025',
        caption: 'Usman mixing colors on the palette — experimenting with watercolors for the very first time.',
    },
    {
        id: 'cart-3',
        image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=600&q=80',
        customerName: 'Fatima Z.',
        event: 'Open Studio Session',
        date: 'Feb 2026',
        caption: 'Fatima and friends laughing between brushstrokes during our weekend open studio session.',
    },
    {
        id: 'cart-4',
        image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=600&q=80',
        customerName: 'Ahmed R.',
        event: 'Open Art Night',
        date: 'Nov 2025',
        caption: 'Ahmed getting one-on-one guidance from our artist during his first charcoal portrait attempt.',
    },
    {
        id: 'cart-5',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
        customerName: 'Sara M.',
        event: 'Weekend Workshop',
        date: 'Jan 2026',
        caption: 'Sara adding the final touches to her canvas during our "Let Go & Paint" workshop.',
    },
    {
        id: 'cart-6',
        image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&q=80',
        customerName: 'Bilal H.',
        event: 'Open Studio Session',
        date: 'Feb 2026',
        caption: 'Bilal deep in the creative zone — cutting and pasting for his mixed-media collage.',
    },
    {
        id: 'cart-7',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
        customerName: 'Hina A.',
        event: 'Open Art Night',
        date: 'Dec 2025',
        caption: 'Hina surrounded by colorful paint supplies, ready to bring her landscape vision to life.',
    },
    {
        id: 'cart-8',
        image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=600&q=80',
        customerName: 'Zain T.',
        event: 'Weekend Workshop',
        date: 'Feb 2026',
        caption: 'Zain sketching out his bold geometric composition before adding paint.',
    },
];

/* ── Behind the Moments Photos ── */

export const momentPhotos: MomentPhoto[] = [
    {
        id: 'mom-1',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
        alt: 'Customers painting together at a long table during open art night',
    },
    {
        id: 'mom-2',
        image: 'https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=600&q=80',
        alt: 'Close-up of hands mixing watercolors on a palette',
    },
    {
        id: 'mom-3',
        image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=600&q=80',
        alt: 'Friends laughing while painting at a weekend workshop',
    },
    {
        id: 'mom-4',
        image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=600&q=80',
        alt: 'Artist guiding a participant during an open studio session',
    },
    {
        id: 'mom-5',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
        alt: 'Canvases drying on easels inside the café after a paint night',
    },
    {
        id: 'mom-6',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
        alt: 'Colorful paint supplies spread across a worktable',
    },
];

/* ── Testimonials ── */

export const customerTestimonials: CustomerTestimonial[] = [
    {
        id: 'ctest-1',
        quote: 'I had never picked up a brush before — now I have three paintings hanging in my living room. Cactus Coffee gave me a creative home.',
        author: 'Amina S.',
        event: 'Open Art Night',
    },
    {
        id: 'ctest-2',
        quote: 'The open studio sessions are magic. Great coffee, incredible vibes, and the freedom to just create without any pressure.',
        author: 'Usman K.',
        event: 'Open Studio Session',
    },
    {
        id: 'ctest-3',
        quote: 'My daughter and I attended the weekend workshop together. It was the most fun we\'ve had in months — we\'re already signed up for the next one!',
        author: 'Fatima Z.',
        event: 'Weekend Workshop',
    },
    {
        id: 'ctest-4',
        quote: 'I came for the coffee and stayed for the art. This place has completely changed how I spend my weekends.',
        author: 'Zain T.',
        event: 'Open Art Night',
    },
];

/* ── Intro Preview Images ── */

export const introImages: string[] = [
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80',
    'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=400&q=80',
    'https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=400&q=80',
];

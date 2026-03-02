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
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80',
        customerName: 'Amina S.',
        event: 'Open Art Night',
        date: 'Jan 2026',
        caption: 'Abstract landscape inspired by the Margalla Hills — painted live during our January open art night.',
    },
    {
        id: 'cart-2',
        image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80',
        customerName: 'Usman K.',
        event: 'Weekend Workshop',
        date: 'Dec 2025',
        caption: 'Vibrant floral composition using acrylic pour technique — Usman\'s very first painting.',
    },
    {
        id: 'cart-3',
        image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80',
        customerName: 'Fatima Z.',
        event: 'Open Studio Session',
        date: 'Feb 2026',
        caption: 'Delicate watercolor botanicals capturing the succulents around our café.',
    },
    {
        id: 'cart-4',
        image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80',
        customerName: 'Ahmed R.',
        event: 'Open Art Night',
        date: 'Nov 2025',
        caption: 'Expressive portrait study — Ahmed explored charcoal for the first time.',
    },
    {
        id: 'cart-5',
        image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=600&q=80',
        customerName: 'Sara M.',
        event: 'Weekend Workshop',
        date: 'Jan 2026',
        caption: 'Colorful abstract piece created during our "Let Go & Paint" session.',
    },
    {
        id: 'cart-6',
        image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80',
        customerName: 'Bilal H.',
        event: 'Open Studio Session',
        date: 'Feb 2026',
        caption: 'Mixed-media collage — Bilal combined magazine cutouts with acrylic washes.',
    },
    {
        id: 'cart-7',
        image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&q=80',
        customerName: 'Hina A.',
        event: 'Open Art Night',
        date: 'Dec 2025',
        caption: 'Miniature landscape painting — Hina\'s tribute to the Abbottabad pine forests.',
    },
    {
        id: 'cart-8',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
        customerName: 'Zain T.',
        event: 'Weekend Workshop',
        date: 'Feb 2026',
        caption: 'Bold, geometric composition exploring color theory basics.',
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

/* ── Type definitions for the studio data layer ── */

export interface SignatureWork {
    id: string;
    image: string;
    title: string;
    medium: string;
    year: string;
    size: 'sm' | 'md' | 'lg';
}

export interface LivePaintingPhoto {
    id: string;
    image: string;
    alt: string;
}

export interface StudioOffering {
    id: string;
    title: string;
    description: string;
    icon: string;
}

/* ── Artist Bio ── */

export const artistBio = {
    name: 'Sir Khalid Khayam',
    title: 'Lead Artist & Gallery Curator',
    shortBio:
        'Sir Khalid Khayam is a celebrated Pakistani artist with over 15 years of experience in fine arts, calligraphy, and commissioned artwork. His work has been exhibited in galleries across Pakistan and abroad.',
    philosophy:
        'Art is not something you observe from a distance — it is something you feel, something that moves you. Every brushstroke carries intention, every color tells a story. At Cactus Coffee, I want people to witness that story being born.',
    experience:
        '15+ years in fine arts, calligraphy, and commissioned work. Over 500 pieces created for private collectors, businesses, and public installations.',
    specialties: [
        'Oil & Acrylic Painting',
        'Arabic & Urdu Calligraphy',
        'Portrait Art',
        'Wall Murals',
        'Mixed Media',
    ],
    image: '/images/exhibition/arts-image.jfif',
};

/* ── Live Painting Photos ── */

export const livePaintingPhotos: LivePaintingPhoto[] = [
    {
        id: 'lp-1',
        image: 'https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=600&q=80',
        alt: 'Artist painting on a large canvas at the studio easel',
    },
    {
        id: 'lp-2',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
        alt: 'Close-up of brush applying paint strokes on canvas',
    },
    {
        id: 'lp-3',
        image: 'https://images.unsplash.com/photo-1452860606245-08f8e4be5e53?w=600&q=80',
        alt: 'Artist hand holding a brush with a colorful palette in view',
    },
    {
        id: 'lp-4',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
        alt: 'Painting supplies and works in progress on the studio table',
    },
];

/* ── Signature Works ── */

export const signatureWorks: SignatureWork[] = [
    {
        id: 'sw-1',
        image: 'https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=600&q=80',
        title: 'Creating "Whispers of the Valley"',
        medium: 'Oil on Canvas — In Progress',
        year: '2024',
        size: 'lg',
    },
    {
        id: 'sw-2',
        image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=600&q=80',
        title: 'Painting "Abstract Bloom" Live',
        medium: 'Acrylic on Canvas — Studio Session',
        year: '2023',
        size: 'md',
    },
    {
        id: 'sw-3',
        image: 'https://images.unsplash.com/photo-1452860606245-08f8e4be5e53?w=600&q=80',
        title: 'Mixing Colors for "Botanical Dreams"',
        medium: 'Watercolor on Paper — Palette Work',
        year: '2025',
        size: 'sm',
    },
    {
        id: 'sw-4',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
        title: 'Sketching "The Storyteller"',
        medium: 'Charcoal on Paper — Live Drawing',
        year: '2024',
        size: 'md',
    },
    {
        id: 'sw-5',
        image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&q=80',
        title: 'Layering "Echoes in Color"',
        medium: 'Mixed Media — Café Studio',
        year: '2025',
        size: 'lg',
    },
    {
        id: 'sw-6',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
        title: 'Scripting "Letters of Light"',
        medium: 'Calligraphy Ink — Live Session',
        year: '2023',
        size: 'sm',
    },
    {
        id: 'sw-7',
        image: 'https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=600&q=80',
        title: 'Detailing "Pine Forest Nocturne"',
        medium: 'Oil on Canvas — Close-Up',
        year: '2024',
        size: 'md',
    },
    {
        id: 'sw-8',
        image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=600&q=80',
        title: 'Building "Golden Hour"',
        medium: 'Acrylic & Resin — In Progress',
        year: '2025',
        size: 'lg',
    },
];

/* ── Studio Offerings ── */

export const studioOfferings: StudioOffering[] = [
    {
        id: 'offer-1',
        title: 'Open Studio Days',
        description:
            'Visit the studio during designated open days. Watch art being created, ask questions, and immerse yourself in the creative atmosphere — all while enjoying your favorite brew.',
        icon: 'door-open',
    },
    {
        id: 'offer-2',
        title: 'Live Painting Sessions',
        description:
            'Experience the magic of watching a painting come to life in real-time. Sir Khalid regularly paints in the café, turning blank canvases into stunning works before your eyes.',
        icon: 'palette',
    },
    {
        id: 'offer-3',
        title: 'Private Consultations',
        description:
            'Book a one-on-one session to discuss your commissioned artwork, interior art needs, or simply to learn about the artistic process from a seasoned professional.',
        icon: 'calendar',
    },
    {
        id: 'offer-4',
        title: 'Art Over Coffee',
        description:
            'A casual, intimate experience — sit with Sir Khalid over a cup of coffee, discuss art, philosophy, and creativity. Open to anyone who loves the world of art.',
        icon: 'coffee',
    },
];

/* ── Intro Preview Images ── */

export const studioIntroImages: string[] = [
    '/images/exhibition/arts-image.jfif',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80',
];

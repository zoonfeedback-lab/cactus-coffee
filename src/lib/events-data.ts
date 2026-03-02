/* ── Events Data ── */

export type EventStatus = 'upcoming' | 'ongoing' | 'sold-out' | 'completed';
export type EntryType = 'free' | 'paid';

export interface CafeEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image: string;
    category: string;
    status: EventStatus;
    entryType: EntryType;
    price?: string;
    seatsTotal?: number;
    seatsRemaining?: number;
    featured?: boolean;
}

export interface TimelineEvent {
    date: string;
    title: string;
    time: string;
    category: string;
}

export interface GalleryImage {
    id: string;
    src: string;
    caption: string;
}

export interface EventStat {
    value: string;
    label: string;
    suffix?: string;
}

export interface EventTestimonial {
    id: string;
    name: string;
    rating: number;
    review: string;
}

export interface EventFAQItem {
    id: string;
    question: string;
    answer: string;
}

/* ── Categories ── */
export const eventCategories = ['All', 'Music', 'Art', 'Poetry', 'Community', 'Special Nights'] as const;

/* ── Featured Event ── */
export const featuredEvent: CafeEvent = {
    id: 'evt-featured',
    title: 'Moonlit Jazz & Coffee Night',
    description:
        'An unforgettable evening under the stars on our rooftop. Live jazz trio, specialty pour-overs, and curated small plates. Limited to 60 guests for an intimate, immersive experience.',
    date: '15 Mar 2026',
    time: '7:00 PM – 11:00 PM',
    location: 'Cactus Coffee Rooftop',
    image: '/images/exhibition/img-4.jfif',
    category: 'Music',
    status: 'upcoming',
    entryType: 'paid',
    price: 'Rs. 2,500',
    seatsTotal: 60,
    seatsRemaining: 12,
    featured: true,
};

/* ── Upcoming Events ── */
export const upcomingEvents: CafeEvent[] = [
    {
        id: 'evt-1',
        title: 'Open Mic Friday',
        description: 'Singers, poets, comedians — the stage is yours. Sign up on the spot or pre-register. Free entry with any coffee order.',
        date: '7 Mar 2026',
        time: '8:00 PM – 10:30 PM',
        location: 'Main Hall',
        image: '/images/exhibition/img-3.jfif',
        category: 'Music',
        status: 'upcoming',
        entryType: 'free',
    },
    {
        id: 'evt-2',
        title: 'Verse & Chai — Poetry Evening',
        description: 'An evening of Urdu and English poetry. Share your words or simply listen. Chai and snacks included.',
        date: '10 Mar 2026',
        time: '6:00 PM – 8:30 PM',
        location: 'Gallery Lounge',
        image: '/images/exhibition/img-5.jfif',
        category: 'Poetry',
        status: 'upcoming',
        entryType: 'free',
    },
    {
        id: 'evt-3',
        title: 'Echoes in Colour — Art Exhibition',
        description: 'A two-week exhibition by emerging artists from Abbottabad and Islamabad. Opening night features live painting and music.',
        date: '12 Mar – 26 Mar 2026',
        time: 'Gallery Hours',
        location: 'Nigarkhana Art Gallery',
        image: '/images/exhibition/arts-image.jfif',
        category: 'Art',
        status: 'ongoing',
        entryType: 'free',
    },
    {
        id: 'evt-4',
        title: 'Acoustic Sunset Session',
        description: 'Live acoustic set by local guitarists on the rooftop. Golden hour vibes, specialty cold brews, and good company.',
        date: '20 Mar 2026',
        time: '5:00 PM – 7:30 PM',
        location: 'Cactus Coffee Rooftop',
        image: '/images/exhibition/img-2.jfif',
        category: 'Music',
        status: 'upcoming',
        entryType: 'paid',
        price: 'Rs. 1,000',
        seatsTotal: 40,
        seatsRemaining: 18,
    },
    {
        id: 'evt-5',
        title: 'Community Potluck Night',
        description: 'Bring a dish, share a story. A casual evening to connect, eat, and celebrate community. All are welcome.',
        date: '25 Mar 2026',
        time: '7:00 PM – 10:00 PM',
        location: 'Garden Area',
        image: '/images/exhibition/img-4.jfif',
        category: 'Community',
        status: 'upcoming',
        entryType: 'free',
    },
    {
        id: 'evt-6',
        title: 'Candlelight Stories — Special Edition',
        description: 'Storytelling by candlelight. Local authors read short fiction while you sip signature hot chocolates. A magical winter night.',
        date: '28 Mar 2026',
        time: '8:00 PM – 10:00 PM',
        location: 'Gallery Lounge',
        image: '/images/exhibition/img-3.jfif',
        category: 'Special Nights',
        status: 'upcoming',
        entryType: 'paid',
        price: 'Rs. 1,500',
        seatsTotal: 30,
        seatsRemaining: 0,
    },
];

// Mark the sold-out event
upcomingEvents[5].status = 'sold-out';

/* ── Timeline ── */
export const timelineEvents: TimelineEvent[] = [
    { date: 'Mar 7', title: 'Open Mic Friday', time: '8:00 PM', category: 'Music' },
    { date: 'Mar 10', title: 'Verse & Chai — Poetry Evening', time: '6:00 PM', category: 'Poetry' },
    { date: 'Mar 12', title: 'Echoes in Colour — Exhibition Opens', time: 'Gallery Hours', category: 'Art' },
    { date: 'Mar 15', title: 'Moonlit Jazz & Coffee Night', time: '7:00 PM', category: 'Music' },
    { date: 'Mar 20', title: 'Acoustic Sunset Session', time: '5:00 PM', category: 'Music' },
    { date: 'Mar 25', title: 'Community Potluck Night', time: '7:00 PM', category: 'Community' },
    { date: 'Mar 28', title: 'Candlelight Stories', time: '8:00 PM', category: 'Special Nights' },
];

/* ── Past Event Gallery ── */
export const eventGalleryImages: GalleryImage[] = [
    { id: 'eg-1', src: '/images/exhibition/img-4.jfif', caption: 'Open Studio Night — Jan 2026' },
    { id: 'eg-2', src: '/images/exhibition/img-5.jfif', caption: 'Botanical Illustration Session' },
    { id: 'eg-3', src: '/images/exhibition/img-3.jfif', caption: 'Open Mic Friday — Dec 2025' },
    { id: 'eg-4', src: '/images/exhibition/arts-image.jfif', caption: 'Carved Silence Exhibition' },
    { id: 'eg-5', src: '/images/exhibition/img-2.jfif', caption: 'Coffee & Sketch Morning' },
    { id: 'eg-6', src: '/images/exhibition/img-4.jfif', caption: 'Jazz Evening — Nov 2025' },
];

/* ── Highlights / Stats ── */
export const eventStats: EventStat[] = [
    { value: '50', label: 'Events Hosted', suffix: '+' },
    { value: '3000', label: 'Happy Attendees', suffix: '+' },
    { value: '25', label: 'Artists Collaborated', suffix: '+' },
    { value: '4', label: 'Years of Community', suffix: '' },
];

/* ── Testimonials ── */
export const eventTestimonials: EventTestimonial[] = [
    {
        id: 'et-1',
        name: 'Hamza Qureshi',
        rating: 5,
        review: 'The Jazz Night was pure magic. Great music, amazing coffee, and a vibe you won\'t find anywhere else in Abbottabad.',
    },
    {
        id: 'et-2',
        name: 'Amna Tariq',
        rating: 5,
        review: 'I performed at their Open Mic night and the energy was incredible. The audience, the setting — everything felt right.',
    },
    {
        id: 'et-3',
        name: 'Bilal Farooq',
        rating: 4,
        review: 'This place feels like home for creatives. The community potluck was heartwarming — strangers became friends over shared food.',
    },
];

/* ── FAQ ── */
export const eventFaqItems: EventFAQItem[] = [
    {
        id: 'efaq-1',
        question: 'Is booking required for events?',
        answer: 'Free events are walk-in friendly, but we recommend arriving early as seating is limited. Paid events require advance booking through our registration form.',
    },
    {
        id: 'efaq-2',
        question: 'Are event tickets refundable?',
        answer: 'Full refunds are available up to 48 hours before the event. After that, you may transfer your ticket to someone else at no extra cost.',
    },
    {
        id: 'efaq-3',
        question: 'Is parking available?',
        answer: 'Yes! We have free on-site parking and street parking available. For larger events, we recommend carpooling or arriving early.',
    },
    {
        id: 'efaq-4',
        question: 'Can I perform at Open Mic?',
        answer: 'Absolutely! Open Mic is open to singers, poets, comedians, and storytellers. You can sign up on the spot or pre-register through our social media.',
    },
    {
        id: 'efaq-5',
        question: 'Can I host a private event at Cactus Coffee?',
        answer: 'Yes, we offer our space for private events, birthday celebrations, and corporate gatherings. Reach out to us via the "Propose an Event" form or contact us directly.',
    },
];

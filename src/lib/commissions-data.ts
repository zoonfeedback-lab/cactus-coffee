/* ── Type definitions for the commissions data layer ── */

export interface ArtType {
    id: string;
    title: string;
    description: string;
    image: string;
}

export interface PricingPackage {
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    deliveryTime: string;
    revisions: number;
    framing: boolean;
    highlighted?: boolean;
}

export interface PortfolioItem {
    id: string;
    image: string;
    caption: string;
    size: 'sm' | 'md' | 'lg';
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    occasion: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface ArtistInfo {
    name: string;
    role: string;
    bio: string;
    philosophy: string;
    experience: string;
    image: string;
}

export interface CustomizationOption {
    id: string;
    title: string;
    items: string[];
}

export interface HowItWorksStep {
    id: string;
    step: number;
    title: string;
    description: string;
    icon: string;
}

/* ── Art Type Cards ── */

export const artTypes: ArtType[] = [
    {
        id: 'type-portrait',
        title: 'Custom Portraits',
        description: 'Beautifully rendered portraits capturing the essence of a person — from pencil sketches to full oil paintings.',
        image: 'https://i.etsystatic.com/6754895/r/il/609d99/4835139232/il_570xN.4835139232_qb4l.jpg',
    },
    {
        id: 'type-wedding',
        title: 'Couple / Wedding Art',
        description: 'Romantic keepsakes — hand-painted wedding scenes, couple portraits, and anniversary commemorations.',
        image: 'https://i.etsystatic.com/20837588/r/il/5f24bd/2041400190/il_570xN.2041400190_knbu.jpg',
    },
    {
        id: 'type-calligraphy',
        title: 'Calligraphy Pieces',
        description: 'Arabic, Urdu, and English calligraphy — Quranic verses, poetry, and personalized text in elegant script.',
        image: 'https://www.al-hadaya.com/cdn/shop/files/Premium_Arabic_Calligraphy_Resin_Painting_Personalized_Islamic_Home_Decor.jpg?v=1760161204',
    },
    {
        id: 'type-mural',
        title: 'Wall Murals',
        description: 'Large-scale murals for homes, cafés, and offices — transforming blank walls into immersive art experiences.',
        image: 'https://www.wallmur.com/media/catalog/product/cache/d2490ff774ad2196f075b30a2e194e25/o/u/ou000196_1_2.jpg',
    },
    {
        id: 'type-decor',
        title: 'Café / Office Decor Art',
        description: 'Curated artwork designed to elevate commercial spaces — from minimalist abstracts to statement pieces.',
        image: 'https://i.pinimg.com/736x/16/e7/ae/16e7aec2cf5345d62d0fdfe04fb886a2.jpg',
    },
    {
        id: 'type-pet',
        title: 'Pet Portraits',
        description: 'Charming, lifelike portraits of your beloved pets — painted with warmth, personality, and a touch of whimsy.',
        image: 'https://i.etsystatic.com/30286277/r/il/9ad740/3284830715/il_fullxfull.3284830715_rw2q.jpg',
    },
];

/* ── How It Works Steps ── */

export const howItWorksSteps: HowItWorksStep[] = [
    {
        id: 'step-1',
        step: 1,
        title: 'Submit Your Idea',
        description: 'Share your vision, reference images, and any details about the artwork you have in mind.',
        icon: 'lightbulb',
    },
    {
        id: 'step-2',
        step: 2,
        title: 'Consultation & Discussion',
        description: 'We\'ll discuss style, size, medium, timeline, and refine your concept together.',
        icon: 'messages',
    },
    {
        id: 'step-3',
        step: 3,
        title: 'Concept Approval',
        description: 'Receive a preliminary sketch or mockup for your approval before we begin the final piece.',
        icon: 'check',
    },
    {
        id: 'step-4',
        step: 4,
        title: 'Final Delivery',
        description: 'Your finished artwork is carefully packaged and delivered — ready to adorn your space.',
        icon: 'package',
    },
];

/* ── Pricing Packages ── */

export const pricingPackages: PricingPackage[] = [
    {
        id: 'pkg-basic',
        name: 'Basic',
        price: 'From PKR 8,000',
        description: 'Perfect for small, simple commissions — a meaningful personal touch.',
        features: [
            'Small size (up to 12×16")',
            'Single subject',
            'Pencil or charcoal medium',
            'Digital preview before final',
            'Unframed delivery',
        ],
        deliveryTime: '7–10 days',
        revisions: 1,
        framing: false,
    },
    {
        id: 'pkg-standard',
        name: 'Standard',
        price: 'From PKR 18,000',
        description: 'Our most popular option — detailed work with room for creative exploration.',
        features: [
            'Medium size (up to 18×24")',
            'Multiple subjects',
            'Acrylic, watercolor, or oil',
            '2 revision rounds',
            'Optional basic framing',
        ],
        deliveryTime: '14–21 days',
        revisions: 2,
        framing: true,
        highlighted: true,
    },
    {
        id: 'pkg-premium',
        name: 'Premium',
        price: 'From PKR 35,000',
        description: 'A fully immersive, gallery-quality piece — created with the utmost care and detail.',
        features: [
            'Large size (up to 30×40" or custom)',
            'Complex compositions',
            'Any medium of choice',
            'Unlimited revisions',
            'Premium framing included',
            'Certificate of authenticity',
        ],
        deliveryTime: '21–35 days',
        revisions: -1, // unlimited
        framing: true,
    },
];

/* ── Portfolio / Past Commissions ── */

export const portfolioItems: PortfolioItem[] = [
    {
        id: 'port-1',
        image: 'https://alisketchez.pk/cdn/shop/products/1_713698a8-1a2c-4358-b7e9-3f6aad780513_1800x1800.jpg?v=1662654597',
        caption: 'Custom Portrait – Anniversary Gift, 2025',
        size: 'lg',
    },
    {
        id: 'port-2',
        image: 'https://framer.pk/cdn/shop/products/Set-of-6-Calligraphy-Framed-Art-RV_670df992-5e32-49d2-b954-962b567fd1fe.jpg?v=1678537601',
        caption: 'Calligraphy Set – Home Decor Commission',
        size: 'md',
    },
    {
        id: 'port-3',
        image: 'https://image.made-in-china.com/2f0j00yJrbCiNhKwcK/Custom-Canvas-Painting-with-Frame-Modern-Frames-Picture-Home-Decoration-Wall-Art.jpg',
        caption: 'Custom Canvas – Office Wall Art',
        size: 'sm',
    },
    {
        id: 'port-4',
        image: 'https://frontstreet.art/cdn/shop/products/CommissionedPortraitSample_JeromeStueart-JeromeStueart.jpg?v=1670349789',
        caption: 'Commissioned Portrait – Personal Collection',
        size: 'md',
    },
    {
        id: 'port-5',
        image: 'https://i.etsystatic.com/20837588/r/il/5f24bd/2041400190/il_570xN.2041400190_knbu.jpg',
        caption: 'Wedding Couple Art – Nikah Gift, 2024',
        size: 'lg',
    },
    {
        id: 'port-6',
        image: 'https://www.al-hadaya.com/cdn/shop/files/Premium_Arabic_Calligraphy_Resin_Painting_Personalized_Islamic_Home_Decor.jpg?v=1760161204',
        caption: 'Arabic Calligraphy – Resin Art Commission',
        size: 'sm',
    },
    {
        id: 'port-7',
        image: 'https://i.pinimg.com/736x/16/e7/ae/16e7aec2cf5345d62d0fdfe04fb886a2.jpg',
        caption: 'Custom Café Wall Piece – Cactus Coffee',
        size: 'md',
    },
    {
        id: 'port-8',
        image: 'https://www.wallmur.com/media/catalog/product/cache/d2490ff774ad2196f075b30a2e194e25/o/u/ou000196_1_2.jpg',
        caption: 'Wall Mural – Restaurant Interior, 2025',
        size: 'lg',
    },
];

/* ── Testimonials ── */

export const testimonials: Testimonial[] = [
    {
        id: 'test-1',
        quote: 'The artwork captured our story beautifully. It\'s not just a painting — it\'s a piece of our life together.',
        author: 'Ayesha & Bilal',
        occasion: 'Wedding Anniversary',
    },
    {
        id: 'test-2',
        quote: 'I gave my mother a portrait for her birthday and she was in tears. The detail and emotion were beyond anything I expected.',
        author: 'Saad R.',
        occasion: 'Birthday Gift',
    },
    {
        id: 'test-3',
        quote: 'Our café walls went from blank to breathtaking. The mural brings so much warmth and character to the space.',
        author: 'Hamza K.',
        occasion: 'Café Interior Design',
    },
    {
        id: 'test-4',
        quote: 'The calligraphy piece is absolutely stunning. It\'s the centerpiece of our living room now.',
        author: 'Fatima N.',
        occasion: 'Home Decor',
    },
];

/* ── FAQ ── */

export const faqItems: FAQItem[] = [
    {
        id: 'faq-1',
        question: 'How long does a commissioned piece take?',
        answer: 'Delivery timelines depend on size and complexity. Small pieces take 7–10 days, standard work takes 14–21 days, and premium commissions may take up to 35 days. Rush orders can be accommodated for an additional fee.',
    },
    {
        id: 'faq-2',
        question: 'How many revisions are included?',
        answer: 'Basic commissions include 1 revision, Standard includes 2 rounds, and Premium includes unlimited revisions. We want you to be completely satisfied with your artwork.',
    },
    {
        id: 'faq-3',
        question: 'Do you ship internationally?',
        answer: 'Yes! We ship across Pakistan and internationally. Domestic shipping is included in the price. International shipping costs are calculated based on destination and artwork dimensions.',
    },
    {
        id: 'faq-4',
        question: 'What if I don\'t like the final result?',
        answer: 'We share preliminary sketches and progress photos throughout the process to ensure you\'re satisfied. If the final piece doesn\'t meet your expectations, we\'ll work with you on revisions at no extra charge.',
    },
    {
        id: 'faq-5',
        question: 'Can I visit the studio to discuss my commission?',
        answer: 'Absolutely. You\'re welcome to visit our studio at Cactus Coffee, Abbottabad. We love meeting our clients in person over a cup of coffee to discuss their vision.',
    },
    {
        id: 'faq-6',
        question: 'What mediums do you work with?',
        answer: 'We work with pencil, charcoal, watercolor, acrylic, oil paint, digital art, calligraphy inks, and resin. We\'re happy to discuss which medium best suits your vision.',
    },
];

/* ── Artist Info ── */

export const artistInfo: ArtistInfo = {
    name: 'Sir Khalid Khayan',
    role: 'Lead Artist & Gallery Curator',
    bio: 'Sir Khalid Khayan is a celebrated Pakistani artist with over 15 years of experience in fine arts, calligraphy, and commissioned artwork. His work has been exhibited in galleries across Pakistan and abroad, and he has created bespoke pieces for private collectors, businesses, and cultural institutions.',
    philosophy: 'Every commission is a conversation between the artist and the collector. I believe that art should not only be seen — it should be felt. Each piece I create carries a story, an emotion, and a connection that transcends the canvas.',
    experience: '15+ years in fine arts, calligraphy, and commissioned work. Over 500 pieces created for private collectors, businesses, and public installations.',
    image: '/images/exhibition/arts-image.jfif',
};

/* ── Customization Options ── */

export const customizationOptions: CustomizationOption[] = [
    {
        id: 'opt-size',
        title: 'Size Options',
        items: ['8×10" (Small)', '12×16" (Medium)', '18×24" (Standard)', '24×36" (Large)', '30×40" (Extra Large)', 'Custom dimensions available on request'],
    },
    {
        id: 'opt-medium',
        title: 'Medium',
        items: ['Pencil / Charcoal Sketch', 'Watercolor', 'Acrylic on Canvas', 'Oil on Canvas', 'Digital Art (High-Res Print)', 'Calligraphy Ink', 'Resin Art'],
    },
    {
        id: 'opt-framing',
        title: 'Framing',
        items: ['Unframed (rolled canvas)', 'Basic wooden frame', 'Premium gallery frame', 'Floating frame', 'Shadow box frame', 'Custom frame to specification'],
    },
    {
        id: 'opt-delivery',
        title: 'Delivery Method',
        items: ['Studio pickup (Cactus Coffee, Abbottabad)', 'Local delivery within Abbottabad (free)', 'Nationwide shipping via TCS/Leopards', 'International shipping (DHL/FedEx)', 'Digital delivery (for digital art commissions)'],
    },
    {
        id: 'opt-timeline',
        title: 'Timeline',
        items: ['Express (5–7 days) — additional charges apply', 'Standard (14–21 days)', 'Relaxed (30+ days) — for complex pieces', 'Flexible — no deadline, art takes its time'],
    },
];

/* ── Intro Preview Images ── */

export const introImages: string[] = [
    'https://i.etsystatic.com/20837588/r/il/5f24bd/2041400190/il_570xN.2041400190_knbu.jpg',
    'https://frontstreet.art/cdn/shop/products/CommissionedPortraitSample_JeromeStueart-JeromeStueart.jpg?v=1670349789',
    'https://www.al-hadaya.com/cdn/shop/files/Premium_Arabic_Calligraphy_Resin_Painting_Personalized_Islamic_Home_Decor.jpg?v=1760161204',
    'https://i.pinimg.com/736x/16/e7/ae/16e7aec2cf5345d62d0fdfe04fb886a2.jpg',
];

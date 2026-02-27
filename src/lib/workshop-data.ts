/* ── Workshop Data ── */

export interface Workshop {
    id: string;
    title: string;
    description: string;
    date: string;
    duration: string;
    instructor: string;
    seatsTotal: number;
    seatsRemaining: number;
    price: string;
    category: string;
    image: string;
    whatYouLearn: string[];
    toolsProvided: string;
    skillLevel: string;
    certificateIncluded: boolean;
}

export interface Instructor {
    id: string;
    name: string;
    title: string;
    experience: string;
    bio: string;
    image: string;
    quote: string;
    socials: { platform: string; url: string }[];
}

export interface GalleryImage {
    id: string;
    src: string;
    caption: string;
}

export interface Testimonial {
    id: string;
    name: string;
    rating: number;
    review: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface Benefit {
    icon: string;
    title: string;
    description: string;
}

/* ── Categories ── */
export const categories = ['All', 'Coffee', 'Art', 'Photography', 'Business'] as const;

/* ── Upcoming Workshops ── */
export const upcomingWorkshops: Workshop[] = [
    {
        id: 'ws-u1',
        title: 'V60 Pour Over Masterclass',
        description:
            'Learn the art of precision pour-over brewing with Hario V60. Understand water temperature, grind size, and pouring techniques.',
        date: '15 Mar 2026',
        duration: '3 Hours',
        instructor: 'Ahmad Raza',
        seatsTotal: 20,
        seatsRemaining: 5,
        price: 'Rs. 3,500',
        category: 'Coffee',
        image: '/images/exhibition/img-4.jfif',
        whatYouLearn: [
            'Bean selection and grind calibration',
            'Water temperature science',
            'Pour-over techniques and timing',
            'Tasting and cupping fundamentals',
        ],
        toolsProvided: 'V60 dripper, kettle, grinder, beans',
        skillLevel: 'Beginner',
        certificateIncluded: true,
    },
    {
        id: 'ws-u2',
        title: 'Botanical Watercolour Workshop',
        description:
            'Paint lush botanicals with watercolour under the guidance of Sir Khalid Khayan. Materials included.',
        date: '22 Mar 2026',
        duration: '4 Hours',
        instructor: 'Khalid Khayan',
        seatsTotal: 15,
        seatsRemaining: 3,
        price: 'Rs. 4,000',
        category: 'Art',
        image: '/images/exhibition/img-5.jfif',
        whatYouLearn: [
            'Colour mixing for natural tones',
            'Leaf and petal rendering techniques',
            'Composition principles',
            'Wet-on-wet vs dry brush methods',
        ],
        toolsProvided: 'Watercolour set, brush kit, paper',
        skillLevel: 'All Levels',
        certificateIncluded: true,
    },
    {
        id: 'ws-u3',
        title: 'Café Photography Basics',
        description:
            'Capture stunning food and interior shots. Learn lighting, composition, and editing for social media.',
        date: '5 Apr 2026',
        duration: '2.5 Hours',
        instructor: 'Sara Malik',
        seatsTotal: 12,
        seatsRemaining: 8,
        price: 'Rs. 3,000',
        category: 'Photography',
        image: '/images/exhibition/img-3.jfif',
        whatYouLearn: [
            'Natural light photography',
            'Flat lay composition',
            'Mobile editing workflow',
            'Instagram-ready colour grading',
        ],
        toolsProvided: 'Styling props provided',
        skillLevel: 'Beginner',
        certificateIncluded: false,
    },
    {
        id: 'ws-u4',
        title: 'Latte Art Intensive',
        description:
            'From milk texturing to rosetta pours — a hands-on deep dive into latte art with live practice.',
        date: '12 Apr 2026',
        duration: '3 Hours',
        instructor: 'Ahmad Raza',
        seatsTotal: 10,
        seatsRemaining: 2,
        price: 'Rs. 4,500',
        category: 'Coffee',
        image: '/images/exhibition/arts-image.jfif',
        whatYouLearn: [
            'Milk steaming and texturing',
            'Heart, tulip, and rosetta pours',
            'Espresso extraction basics',
            'Troubleshooting common mistakes',
        ],
        toolsProvided: 'Espresso machine, milk, cups',
        skillLevel: 'Intermediate',
        certificateIncluded: true,
    },
    {
        id: 'ws-u5',
        title: 'Build Your Café Brand',
        description:
            'Branding, social media strategy, and menu design for aspiring café owners. Real-world case studies included.',
        date: '20 Apr 2026',
        duration: '5 Hours',
        instructor: 'Zain Ul Abideen',
        seatsTotal: 20,
        seatsRemaining: 14,
        price: 'Rs. 5,000',
        category: 'Business',
        image: '/images/exhibition/img-2.jfif',
        whatYouLearn: [
            'Brand identity & positioning',
            'Social media content planning',
            'Menu design psychology',
            'Customer experience strategy',
        ],
        toolsProvided: 'Workbook & templates',
        skillLevel: 'All Levels',
        certificateIncluded: true,
    },
    {
        id: 'ws-u6',
        title: 'Nastaliq Calligraphy Basics',
        description:
            'An introductory session on Nastaliq script. Learn pen angles, letterforms, and basic compositions.',
        date: '28 Apr 2026',
        duration: '3 Hours',
        instructor: 'Khalid Khayan',
        seatsTotal: 18,
        seatsRemaining: 10,
        price: 'Rs. 3,500',
        category: 'Art',
        image: '/images/exhibition/img-3.jfif',
        whatYouLearn: [
            'Pen holding and pressure control',
            'Basic Nastaliq letterforms',
            'Word connections and flow',
            'Ink and paper selection',
        ],
        toolsProvided: 'Reed pen, ink, practice sheets',
        skillLevel: 'Beginner',
        certificateIncluded: true,
    },
];

/* ── Instructors ── */
export const instructors: Instructor[] = [
    {
        id: 'inst-1',
        name: 'Khalid Khayan',
        title: 'Art Instructor & Curator',
        experience: '15+ years in fine arts',
        bio: 'Sir Khalid Khayan is a renowned painter and calligrapher based in Abbottabad. He has been teaching botanical illustration and traditional scripts for over a decade, inspiring hundreds of students.',
        image: '/images/exhibition/publo-picaso.jfif',
        quote: '"Art is not what you see, but what you make others see."',
        socials: [
            { platform: 'Instagram', url: '#' },
            { platform: 'Facebook', url: '#' },
        ],
    },
    {
        id: 'inst-2',
        name: 'Ahmad Raza',
        title: 'Head Barista & Coffee Trainer',
        experience: '8+ years in specialty coffee',
        bio: 'Ahmad is the head barista at Cactus Coffee and a certified SCA trainer. His workshops bring the science and soul of coffee together in every cup.',
        image: '/images/exhibition/img-4.jfif',
        quote: '"Every cup tells a story — learn to listen."',
        socials: [
            { platform: 'Instagram', url: '#' },
        ],
    },
];

/* ── Past Workshop Gallery ── */
export const galleryImages: GalleryImage[] = [
    { id: 'gal-1', src: '/images/exhibition/img-5.jfif', caption: 'Botanical Illustration — Dec 2025' },
    { id: 'gal-2', src: '/images/exhibition/img-3.jfif', caption: 'Calligraphy for Beginners — Nov 2025' },
    { id: 'gal-3', src: '/images/exhibition/img-2.jfif', caption: 'Coffee & Sketch Morning — Oct 2025' },
    { id: 'gal-4', src: '/images/exhibition/img-4.jfif', caption: 'Open Studio Night — Jan 2026' },
    { id: 'gal-5', src: '/images/exhibition/arts-image.jfif', caption: 'Latte Art Jam — Sep 2025' },
    { id: 'gal-6', src: '/images/exhibition/img-5.jfif', caption: 'Watercolour Afternoon — Aug 2025' },
];

/* ── Testimonials ── */
export const testimonials: Testimonial[] = [
    {
        id: 'test-1',
        name: 'Ayesha Khan',
        rating: 5,
        review: 'The botanical illustration workshop was incredible. Sir Khalid explained every technique so clearly, and the café ambiance made it even more special.',
    },
    {
        id: 'test-2',
        name: 'Usman Ali',
        rating: 5,
        review: 'I attended the V60 pour-over masterclass and it completely changed how I brew at home. Highly recommend for coffee enthusiasts!',
    },
    {
        id: 'test-3',
        name: 'Fatima Noor',
        rating: 4,
        review: 'The calligraphy workshop was so relaxing and well-organized. I left with skills I never thought I could learn in just a few hours.',
    },
];

/* ── FAQ ── */
export const faqItems: FAQItem[] = [
    {
        id: 'faq-1',
        question: 'Who can join the workshops?',
        answer: 'Our workshops are open to everyone — students, professionals, hobbyists, and creatives of all ages. Most sessions are beginner-friendly unless stated otherwise.',
    },
    {
        id: 'faq-2',
        question: 'Do I need prior experience?',
        answer: 'Not at all! Each workshop is designed with clear skill-level guidance. Beginners are always welcome, and instructors provide step-by-step instruction.',
    },
    {
        id: 'faq-3',
        question: 'What if I miss a session?',
        answer: 'Unfortunately, workshops are one-time sessions and cannot be replayed. However, we run repeat sessions for popular workshops — follow us to stay updated.',
    },
    {
        id: 'faq-4',
        question: 'What is the refund policy?',
        answer: 'Full refunds are available up to 48 hours before the workshop date. After that, you may transfer your seat to another person at no extra charge.',
    },
    {
        id: 'faq-5',
        question: 'Are materials and tools provided?',
        answer: 'Yes! All necessary tools and materials are included in the workshop fee. Just bring your curiosity and enthusiasm.',
    },
    {
        id: 'faq-6',
        question: 'Do I get a certificate?',
        answer: 'Most workshops include a certificate of completion. Check individual workshop details for confirmation.',
    },
];

/* ── Benefits ── */
export const benefits: Benefit[] = [
    {
        icon: 'Wrench',
        title: 'Build Real Skills',
        description: 'Walk away with practical, portfolio-worthy skills you can use immediately.',
    },
    {
        icon: 'Users',
        title: 'Network with Creatives',
        description: 'Connect with like-minded individuals in an inspiring café environment.',
    },
    {
        icon: 'GraduationCap',
        title: 'Learn from Experts',
        description: 'Our instructors are practising artists, baristas, and industry professionals.',
    },
    {
        icon: 'Hand',
        title: 'Hands-on Experience',
        description: 'Every workshop is interactive — no boring lectures, just real practice.',
    },
];

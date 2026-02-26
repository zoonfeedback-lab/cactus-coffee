/* -- Art Classes data for Cactus Coffee -- */

export interface ArtClass {
    id: string;
    title: string;
    description: string;
    instructor: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
    price: number;
    image: string;
    schedule: string;
}

export interface CurriculumModule {
    id: string;
    title: string;
    description: string;
    topics: string[];
    duration: string;
}

export interface StudentPhoto {
    id: string;
    image: string;
    caption: string;
}

/* -- Available Classes -- */

const images = [
    '/images/exhibition/arts-image.jfif',
    '/images/exhibition/img-2.jfif',
    '/images/exhibition/img-3.jfif',
    '/images/exhibition/img-4.jfif',
    '/images/exhibition/img-5.jfif',
];

export const artClasses: ArtClass[] = [
    {
        id: 'cls-1',
        title: 'Fundamentals of Drawing',
        description:
            'Master the core principles of drawing including line, shape, form, and perspective. Perfect for beginners who want to build a solid foundation.',
        instructor: 'Sir Khalid Khayan',
        duration: '8 Weeks',
        level: 'Beginner',
        price: 15000,
        image: images[0],
        schedule: 'Mon & Wed, 4:00 PM - 6:00 PM',
    },
    {
        id: 'cls-2',
        title: 'Oil Painting Techniques',
        description:
            'Explore the rich world of oil painting. Learn colour mixing, brushwork, glazing, and composition through guided studio sessions.',
        instructor: 'Sir Khalid Khayan',
        duration: '10 Weeks',
        level: 'Intermediate',
        price: 22000,
        image: images[1],
        schedule: 'Tue & Thu, 5:00 PM - 7:00 PM',
    },
    {
        id: 'cls-3',
        title: 'Watercolour Workshop',
        description:
            'Discover the beauty of watercolour from washes and wet-on-wet to fine detail work. Ideal for artists looking to expand their medium range.',
        instructor: 'Sir Khalid Khayan',
        duration: '6 Weeks',
        level: 'All Levels',
        price: 12000,
        image: images[2],
        schedule: 'Sat, 10:00 AM - 1:00 PM',
    },
    {
        id: 'cls-4',
        title: 'Portrait & Figure Study',
        description:
            'Develop your ability to capture the human form. Sessions include live model drawing, anatomy study, and expressive portraiture.',
        instructor: 'Sir Khalid Khayan',
        duration: '12 Weeks',
        level: 'Advanced',
        price: 28000,
        image: images[3],
        schedule: 'Fri & Sat, 3:00 PM - 5:30 PM',
    },
    {
        id: 'cls-5',
        title: 'Calligraphy & Islamic Art',
        description:
            'Learn traditional calligraphy scripts and geometric patterns rooted in Islamic art heritage. A meditative and culturally rich experience.',
        instructor: 'Sir Khalid Khayan',
        duration: '8 Weeks',
        level: 'Beginner',
        price: 14000,
        image: images[4],
        schedule: 'Sun, 11:00 AM - 1:30 PM',
    },
    {
        id: 'cls-6',
        title: 'Mixed Media & Abstract',
        description:
            'Break creative boundaries by combining acrylics, collage, ink, and found materials into expressive abstract compositions.',
        instructor: 'Sir Khalid Khayan',
        duration: '6 Weeks',
        level: 'Intermediate',
        price: 18000,
        image: images[0],
        schedule: 'Wed & Fri, 4:00 PM - 6:00 PM',
    },
];

/* -- Curriculum Modules -- */

export const curriculum: CurriculumModule[] = [
    {
        id: 'cur-1',
        title: 'Foundation & Sketching',
        description:
            'Build core visual skills through structured drawing exercises and observational practice.',
        topics: [
            'Line quality & mark making',
            'Perspective & spatial awareness',
            'Light, shadow & value scales',
            'Composition principles',
        ],
        duration: '4 Weeks',
    },
    {
        id: 'cur-2',
        title: 'Colour Theory & Painting',
        description:
            'Understand colour relationships and apply them confidently across painting mediums.',
        topics: [
            'Colour wheel & harmony',
            'Mixing & palette management',
            'Tonal painting exercises',
            'Expressive brushwork',
        ],
        duration: '4 Weeks',
    },
    {
        id: 'cur-3',
        title: 'Artistic Expression',
        description:
            'Develop a personal voice through exploring different styles, subjects, and creative processes.',
        topics: [
            'Still life & landscape',
            'Abstract interpretation',
            'Texture & layering methods',
            'Critique & self-reflection',
        ],
        duration: '3 Weeks',
    },
    {
        id: 'cur-4',
        title: 'Portfolio & Exhibition',
        description:
            'Prepare a body of work for display. Learn professional presentation and artist statement writing.',
        topics: [
            'Portfolio curation',
            'Mounting & framing basics',
            'Artist statement writing',
            'Group exhibition preparation',
        ],
        duration: '3 Weeks',
    },
];

/* -- Student Gallery Photos -- */

export const studentPhotos: StudentPhoto[] = [
    { id: 'sp-1', image: images[0], caption: 'Students working on still life compositions' },
    { id: 'sp-2', image: images[1], caption: 'Afternoon watercolour session in progress' },
    { id: 'sp-3', image: images[2], caption: 'Learning calligraphy under guided instruction' },
    { id: 'sp-4', image: images[3], caption: 'Portrait drawing class with live model' },
    { id: 'sp-5', image: images[4], caption: 'Mixed media workshop exploration' },
    { id: 'sp-6', image: images[0], caption: 'Oil painting techniques demonstration' },
    { id: 'sp-7', image: images[1], caption: 'Students presenting their final portfolios' },
    { id: 'sp-8', image: images[2], caption: 'Collaborative mural painting session' },
];

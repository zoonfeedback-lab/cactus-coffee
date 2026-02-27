export interface BlogAuthor {
    name: string;
    role: string;
    bio: string;
    image: string;
}

export interface BlogArticle {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: BlogAuthor;
    featured?: boolean;
    popular?: boolean;
    tags: string[];
}

export const BLOG_CATEGORIES = [
    'All',
    'Coffee Guides',
    'Brewing Tips',
    'Café Stories',
    'Events Recap',
    'Artist Spotlight',
    'Business & Branding',
];

export const BLOG_TAGS = [
    'Espresso',
    'Latte Art',
    'Pour Over',
    'Café Culture',
    'Community',
    'Single Origin',
    'Cold Brew',
    'Sustainability',
    'Barista Life',
    'Plant Care',
];

export const authors: Record<string, BlogAuthor> = {
    ali: {
        name: 'Ali Raza',
        role: 'Founder & Head Barista',
        bio: 'Ali founded Cactus Coffee with a dream of blending artisan coffee culture with creative community spaces. With 8+ years behind the espresso machine, he brings passion and precision to every cup.',
        image: '/images/blog/author-ali.png',
    },
    sara: {
        name: 'Sara Khan',
        role: 'Creative Director',
        bio: 'Sara curates the artistic soul of Cactus Coffee — from gallery exhibitions to brand storytelling. She believes every latte is a canvas.',
        image: '/images/blog/author-sara.png',
    },
    hamza: {
        name: 'Hamza Malik',
        role: 'Guest Barista & Roaster',
        bio: 'A specialty coffee roaster and trainer who has worked across cafés in Islamabad and Lahore. Hamza writes about roasting science and brewing mastery.',
        image: '/images/blog/author-hamza.png',
    },
};

export const blogArticles: BlogArticle[] = [
    {
        id: '1',
        title: 'The Art of Pressure Profiling: How It Changes Your Espresso',
        slug: 'art-of-pressure-profiling',
        excerpt: 'Discover how subtle changes in pressure during extraction can unlock entirely new flavor profiles in your daily espresso. We break down the science and the soul behind the technique.',
        category: 'Coffee Guides',
        date: 'Feb 25, 2026',
        readTime: '7 min read',
        image: '/images/blog/pressure-profiling.png',
        author: authors.ali,
        featured: true,
        popular: true,
        tags: ['Espresso', 'Barista Life'],
    },
    {
        id: '2',
        title: '5 Pour-Over Mistakes You\'re Probably Making',
        slug: 'pour-over-mistakes',
        excerpt: 'Pour-over coffee seems simple, but the details matter. From grind size to water temperature, here are the five most common mistakes and how to fix them.',
        category: 'Brewing Tips',
        date: 'Feb 22, 2026',
        readTime: '5 min read',
        image: '/images/blog/pour-over.png',
        author: authors.hamza,
        popular: true,
        tags: ['Pour Over', 'Barista Life'],
    },
    {
        id: '3',
        title: 'Behind the Counter: A Day in the Life at Cactus Coffee',
        slug: 'day-in-the-life',
        excerpt: 'What does a typical morning look like at our Abbottabad café? From the first grind to the last latte art pour — here\'s the story behind your daily cup.',
        category: 'Café Stories',
        date: 'Feb 18, 2026',
        readTime: '4 min read',
        image: '/images/blog/cafe-life.png',
        author: authors.ali,
        tags: ['Café Culture', 'Community'],
    },
    {
        id: '4',
        title: 'Spotlight: The Geometric Botanics Exhibition',
        slug: 'geometric-botanics-exhibition',
        excerpt: 'Our latest gallery event brought together seven local artists to explore the intersection of geometry and nature. Here\'s a visual recap of the evening.',
        category: 'Artist Spotlight',
        date: 'Feb 14, 2026',
        readTime: '3 min read',
        image: '/images/blog/art-exhibition.png',
        author: authors.sara,
        tags: ['Community', 'Café Culture'],
    },
    {
        id: '5',
        title: 'Cold Brew vs. Iced Coffee: The Real Difference',
        slug: 'cold-brew-vs-iced-coffee',
        excerpt: 'They look similar, but the brewing process makes all the difference. Learn what sets cold brew apart and why it\'s worth the wait.',
        category: 'Coffee Guides',
        date: 'Feb 10, 2026',
        readTime: '4 min read',
        image: '/images/blog/cold-brew.png',
        author: authors.hamza,
        popular: true,
        tags: ['Cold Brew', 'Espresso'],
    },
    {
        id: '6',
        title: 'How We Built a Community Around Coffee & Art',
        slug: 'community-coffee-art',
        excerpt: 'Cactus Coffee isn\'t just a café — it\'s a gathering point. Here\'s how we intentionally designed our space to foster creativity, conversation, and connection.',
        category: 'Business & Branding',
        date: 'Feb 6, 2026',
        readTime: '6 min read',
        image: '/images/blog/community.png',
        author: authors.sara,
        tags: ['Community', 'Café Culture', 'Sustainability'],
    },
    {
        id: '7',
        title: 'The Perfect Home Latte Art: A Beginner\'s Guide',
        slug: 'home-latte-art-guide',
        excerpt: 'You don\'t need a commercial machine to pour beautiful latte art. Here\'s a step-by-step guide using gear you probably already own.',
        category: 'Brewing Tips',
        date: 'Feb 2, 2026',
        readTime: '5 min read',
        image: '/images/blog/latte-art.png',
        author: authors.ali,
        tags: ['Latte Art', 'Barista Life'],
    },
    {
        id: '8',
        title: 'Event Recap: Cactus Coffee x Local Jazz Night',
        slug: 'jazz-night-recap',
        excerpt: 'Live music, specialty drinks, and a packed rooftop — our jazz night collaboration was one for the books. Here\'s what you missed.',
        category: 'Events Recap',
        date: 'Jan 28, 2026',
        readTime: '3 min read',
        image: '/images/blog/jazz-night.png',
        author: authors.sara,
        tags: ['Community', 'Café Culture'],
    },
    {
        id: '9',
        title: 'Understanding Single Origin Coffee: Why It Matters',
        slug: 'single-origin-coffee',
        excerpt: 'Single origin coffees offer a transparency and depth of flavor that blends simply can\'t match. Learn why specialty cafés are obsessed with traceability.',
        category: 'Coffee Guides',
        date: 'Jan 22, 2026',
        readTime: '6 min read',
        image: '/images/blog/single-origin.png',
        author: authors.hamza,
        popular: true,
        tags: ['Single Origin', 'Sustainability'],
    },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
    return blogArticles.find(a => a.slug === slug);
}

export function getFeaturedArticle(): BlogArticle | undefined {
    return blogArticles.find(a => a.featured);
}

export function getPopularArticles(): BlogArticle[] {
    return blogArticles.filter(a => a.popular);
}

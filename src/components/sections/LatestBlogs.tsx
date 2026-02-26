import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Calendar } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
}

const blogs: BlogPost[] = [
    {
        id: 'blog-1',
        title: 'The Art of Coffee and Creativity',
        excerpt:
            'How the ritual of brewing coffee mirrors the creative process, and why artists have always been drawn to the cafe.',
        image: '/images/exhibition/arts-image.jfif',
        date: '22 Feb 2026',
        category: 'Culture',
    },
    {
        id: 'blog-2',
        title: 'Caring for Indoor Cacti and Succulents',
        excerpt:
            'A practical guide to keeping your desert plants thriving indoors, covering light, water, and soil essentials.',
        image: '/images/exhibition/img-3.jfif',
        date: '18 Feb 2026',
        category: 'Plants',
    },
    {
        id: 'blog-3',
        title: 'Behind the Canvas with Sir Khalid Khayan',
        excerpt:
            'A conversation with our resident art instructor on teaching, inspiration, and the future of Nigarkhana Art Gallery.',
        image: '/images/exhibition/img-2.jfif',
        date: '12 Feb 2026',
        category: 'Art',
    },
];

export default function LatestBlogs() {
    return (
        <section className="py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Latest from the Blog"
                        subtitle="Stories, tips, and behind-the-scenes from the world of Cactus Coffee."
                        align="center"
                    />
                </AnimateOnScroll>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((post, i) => (
                        <AnimateOnScroll key={post.id} animation="fade-up" delay={i * 150} className="h-full">
                            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute left-3 top-3">
                                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="mb-3 flex items-center gap-2 text-xs text-muted">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="mb-2 font-heading text-lg font-bold text-text-main transition-colors group-hover:text-primary">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-text-light line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </article>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll animation="fade-up" delay={500}>
                    <div className="mt-10 text-center">
                        <Link
                            href="/blog"
                            className="relative inline-block overflow-hidden rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                        >
                            <span className="relative z-10">View All Posts</span>
                        </Link>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

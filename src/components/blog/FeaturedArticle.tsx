import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { getFeaturedArticle } from '@/lib/blog-data';
import { ArrowRight, Clock } from 'lucide-react';

export default function FeaturedArticle() {
    const article = getFeaturedArticle();
    if (!article) return null;

    return (
        <section className="bg-surface-alt py-16 sm:py-20">
            <Container>
                <AnimateOnScroll animation="scale" duration={700}>
                    <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-border group hover:shadow-lg transition-shadow duration-500">
                        {/* Left: Cover Image */}
                        <div className="relative w-full md:w-[55%] h-72 sm:h-80 md:h-[420px] overflow-hidden bg-[#1a1a1a]">
                            <span className="absolute top-5 left-5 z-10 px-3 py-1.5 bg-accent/90 backdrop-blur-sm text-primary-dark text-[9px] font-bold uppercase tracking-widest rounded-full">
                                Featured
                            </span>
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 55vw"
                                priority
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="flex-1 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">
                                {article.category}
                            </span>
                            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-main leading-tight mb-4 tracking-tight">
                                {article.title}
                            </h2>
                            <p className="text-text-light text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                                {article.excerpt}
                            </p>

                            <div className="flex items-center gap-4 mb-8 text-xs text-text-light/70">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-surface-alt overflow-hidden relative">
                                        <Image src={article.author.image} alt={article.author.name} fill className="object-cover" sizes="28px" />
                                    </div>
                                    <span className="font-semibold text-text-main">{article.author.name}</span>
                                </div>
                                <span>·</span>
                                <span>{article.date}</span>
                                <span>·</span>
                                <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                            </div>

                            <Link
                                href={`/blog/${article.slug}`}
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-sm w-fit hover:shadow-md hover:-translate-y-0.5"
                            >
                                Read Article <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

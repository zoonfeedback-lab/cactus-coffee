'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { portfolioItems } from '@/lib/commissions-data';

export default function CommissionsPortfolio() {
    return (
        <section id="portfolio" className="bg-white py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            Our Work Speaks
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Past Commissions
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-text-light">
                            A glimpse into the stories we&apos;ve helped tell through art.
                            Every piece here was created for someone special.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Masonry grid */}
                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                    {portfolioItems.map((item, i) => (
                        <AnimateOnScroll
                            key={item.id}
                            animation="fade-up"
                            delay={i * 80}
                            duration={700}
                        >
                            <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                                <div className="group relative overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.caption}
                                        width={600}
                                        height={
                                            item.size === 'lg'
                                                ? 700
                                                : item.size === 'md'
                                                    ? 500
                                                    : 350
                                        }
                                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>
                                <div className="px-5 py-4">
                                    <p className="text-sm font-medium text-text-light italic">
                                        {item.caption}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

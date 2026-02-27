'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { eventGalleryImages } from '@/lib/events-data';

export default function EventGallery() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const amount = 340;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <section className="py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Moments That Matter"
                        subtitle="A look back at the energy, the people, and the magic from past events."
                        align="center"
                    />
                </AnimateOnScroll>

                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-text-main transition-all hover:bg-primary hover:text-white md:-left-5"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-text-main transition-all hover:bg-primary hover:text-white md:-right-5"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="scrollbar-hide flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
                    >
                        {eventGalleryImages.map((img, i) => (
                            <AnimateOnScroll key={img.id} animation="fade-up" delay={i * 100}>
                                <div className="group relative h-64 w-72 shrink-0 snap-center overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg sm:h-72 sm:w-80">
                                    <Image
                                        src={img.src}
                                        alt={img.caption}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="320px"
                                    />
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <p className="p-4 text-sm font-semibold text-white">
                                            {img.caption}
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

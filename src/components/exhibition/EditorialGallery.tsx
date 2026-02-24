'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import type { Category, GalleryItem } from '@/lib/exhibition-data';

/* ── Types ── */

interface EditorialGalleryProps {
    categories: Category[];
    items: GalleryItem[];
}

/* ── Artwork Card ── */

function ArtworkCard({ item, large = false }: { item: GalleryItem; large?: boolean }) {
    return (
        <article className="group cursor-pointer">
            <div
                className={`relative w-full overflow-hidden rounded-sm ${large ? 'aspect-[4/5]' : 'aspect-[4/3]'
                    }`}
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={large ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 50vw, 30vw'}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="p-4 sm:p-5">
                        <h3 className="font-heading text-sm font-semibold leading-snug text-white sm:text-base lg:text-lg">
                            {item.title}
                        </h3>
                        <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
                            {item.artist}
                        </p>
                        <p className="mt-0.5 text-[10px] capitalize text-white/50 sm:text-[11px]">
                            {item.category.replace('-', ' ')}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}

/* ── Magazine Row ── */

/**
 * Renders a magazine-style row:
 * - "left"  = 1 large card on the left  + 2 small stacked on the right
 * - "right" = 2 small stacked on the left + 1 large card on the right
 */
function MagazineRow({
    items,
    direction,
    animDelay,
}: {
    items: GalleryItem[];
    direction: 'left' | 'right';
    animDelay: number;
}) {
    if (items.length === 0) return null;

    // If only 1-2 items, show them in a simple grid
    if (items.length < 3) {
        return (
            <AnimateOnScroll animation="fade-up" delay={animDelay}>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {items.map((item) => (
                        <ArtworkCard key={item.id} item={item} />
                    ))}
                </div>
            </AnimateOnScroll>
        );
    }

    const [large, smallA, smallB] = items;

    const bigFirst = direction === 'left';

    return (
        <>
            {/* Desktop: flex row — large card + stacked small cards */}
            <div className={`hidden lg:flex gap-6 ${direction === 'right' ? 'flex-row-reverse' : ''}`}>
                {/* Large card — takes ~60% */}
                <div className="w-3/5">
                    <AnimateOnScroll animation={direction === 'left' ? 'fade-right' : 'fade-left'} delay={animDelay}>
                        <ArtworkCard item={large} large />
                    </AnimateOnScroll>
                </div>

                {/* Small cards stacked — takes ~40% */}
                <div className="flex w-2/5 flex-col gap-6">
                    <AnimateOnScroll animation="fade-up" delay={animDelay + 100}>
                        <ArtworkCard item={smallA} />
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-up" delay={animDelay + 200}>
                        <ArtworkCard item={smallB} />
                    </AnimateOnScroll>
                </div>
            </div>

            {/* Mobile: 2-col grid with alternating order */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
                <div className={`col-span-2 ${bigFirst ? 'order-1' : 'order-3'}`}>
                    <AnimateOnScroll animation="fade-up" delay={animDelay}>
                        <ArtworkCard item={large} large />
                    </AnimateOnScroll>
                </div>
                <div className={`col-span-1 ${bigFirst ? 'order-2' : 'order-1'}`}>
                    <AnimateOnScroll animation="fade-up" delay={animDelay + 100}>
                        <ArtworkCard item={smallA} />
                    </AnimateOnScroll>
                </div>
                <div className={`col-span-1 ${bigFirst ? 'order-3' : 'order-2'}`}>
                    <AnimateOnScroll animation="fade-up" delay={animDelay + 200}>
                        <ArtworkCard item={smallB} />
                    </AnimateOnScroll>
                </div>
            </div>
        </>
    );
}

/* ── Main Component ── */

export default function EditorialGallery({ categories, items }: EditorialGalleryProps) {
    const [activeSlug, setActiveSlug] = useState('all');

    const filteredItems =
        activeSlug === 'all'
            ? items
            : items.filter((item) => item.category === activeSlug);

    // chunk the filtered items into groups of 3 for magazine rows
    const rows: GalleryItem[][] = [];
    for (let i = 0; i < filteredItems.length; i += 3) {
        rows.push(filteredItems.slice(i, i + 3));
    }

    return (
        <section id="gallery" className="bg-white py-16 sm:py-24">
            <Container>
                {/* Section heading */}
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-6 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            The Collection
                        </h2>
                    </div>
                </AnimateOnScroll>

                {/* Underlined category tabs */}
                <div className="mb-16 flex items-center justify-center">
                    <nav className="flex gap-6 overflow-x-auto pb-1 scrollbar-hide sm:gap-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setActiveSlug(cat.slug)}
                                className={`relative shrink-0 pb-2 text-sm font-medium transition-colors duration-200 sm:text-base ${activeSlug === cat.slug
                                    ? 'text-text-main'
                                    : 'text-text-light hover:text-text-main'
                                    }`}
                            >
                                {cat.label}
                                {/* Animated underline */}
                                <span
                                    className={`absolute bottom-0 left-0 h-[1.5px] bg-text-main transition-all duration-300 ease-out ${activeSlug === cat.slug ? 'w-full' : 'w-0'
                                        }`}
                                />
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Magazine grid rows */}
                <div className="space-y-12 sm:space-y-16">
                    {rows.map((rowItems, i) => (
                        <MagazineRow
                            key={`row-${activeSlug}-${i}`}
                            items={rowItems}
                            direction={i % 2 === 0 ? 'left' : 'right'}
                            animDelay={i * 80}
                        />
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <p className="py-20 text-center font-heading text-lg italic text-text-light">
                        No works found in this category yet.
                    </p>
                )}
            </Container>
        </section>
    );
}

'use client';

import { useState } from 'react';
import type { Category, GalleryItem } from '@/lib/exhibition-data';
import GalleryCard from '@/components/ui/GalleryCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Container from '@/components/ui/Container';

interface FilterTabsProps {
    categories: Category[];
    items: GalleryItem[];
}

export default function FilterTabs({ categories, items }: FilterTabsProps) {
    const [activeSlug, setActiveSlug] = useState('all');

    const filteredItems =
        activeSlug === 'all'
            ? items
            : items.filter((item) => item.category === activeSlug);

    return (
        <section id="gallery" className="bg-white py-16 sm:py-24">
            <Container>
                {/* Tabs — horizontal scroll on mobile */}
                <div className="mb-12 flex items-center justify-center">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setActiveSlug(cat.slug)}
                                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${activeSlug === cat.slug
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'border border-border bg-white text-text-light hover:border-primary/30 hover:text-primary'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Section heading */}
                <div className="mb-10 text-center">
                    <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                        Art Collection
                    </h2>
                </div>

                {/* Gallery grid */}
                <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item, index) => (
                        <AnimateOnScroll
                            key={item.id}
                            animation="fade-up"
                            delay={index * 100}
                            className="h-full"
                        >
                            <GalleryCard item={item} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <p className="py-20 text-center text-text-light">
                        No works found in this category yet.
                    </p>
                )}
            </Container>
        </section>
    );
}

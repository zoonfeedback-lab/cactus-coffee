'use client';

import { useState } from 'react';
import type { Category, GalleryItem } from '@/lib/exhibition-data';
import GalleryCard from '@/components/ui/GalleryCard';
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
                {/* Section heading */}
                <div className="mb-8 text-center">
                    <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                        Art Collection
                    </h2>
                </div>

                {/* Filter tabs */}
                <div className="mb-12 flex items-center justify-center">
                    <div className="flex gap-2 overflow-x-auto rounded-full border border-border bg-white p-1 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setActiveSlug(cat.slug)}
                                className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${activeSlug === cat.slug
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-text-light hover:text-primary'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pinterest-style masonry grid */}
                <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
                    {filteredItems.map((item) => (
                        <GalleryCard key={item.id} item={item} />
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

'use client';

import React, { useRef } from 'react';
import { categories } from '@/lib/coffee-data';
import Container from '@/components/ui/Container';

interface CategoryTabsProps {
    activeCategory: string;
    setActiveCategory: (slug: string) => void;
}

export default function CategoryTabs({ activeCategory, setActiveCategory }: CategoryTabsProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="menu" className="sticky top-20 z-40 bg-white/80 backdrop-blur-md py-4 border-b border-border">
            <Container>
                <div
                    ref={scrollContainerRef}
                    className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.slug)}
                            className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${activeCategory === category.slug
                                ? 'bg-primary text-white shadow-sm'
                                : 'border border-border bg-white text-text-light hover:border-primary/30 hover:text-primary'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </Container>
        </section>
    );
}

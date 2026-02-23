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
        <section id="menu" className="sticky top-20 z-40 bg-background/80 backdrop-blur-md py-4 border-b border-borderColor/20">
            <Container>
                <div
                    ref={scrollContainerRef}
                    className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 justify-start md:justify-center"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.slug)}
                            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category.slug
                                ? 'bg-primaryBrown text-accentCream shadow-md'
                                : 'bg-surfaceLight text-textLight hover:bg-backgroundWarm border border-borderColor/30'
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

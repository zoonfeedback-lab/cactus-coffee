'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import CoffeeMenuItem from '@/components/ui/CoffeeMenuItem';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { coffeeMenu, categories } from '@/lib/coffee-data';

interface MenuSectionProps {
    activeCategory: string;
}

export default function MenuSection({ activeCategory }: MenuSectionProps) {
    const filteredItems = activeCategory === 'all'
        ? coffeeMenu
        : coffeeMenu.filter(item => item.category === activeCategory);

    const displayCategories = activeCategory === 'all'
        ? categories.filter(c => c.slug !== 'all')
        : categories.filter(c => c.slug === activeCategory);

    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                {/* Centered section heading */}
                <div className="mb-12 text-center">
                    <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                        Our Menu
                    </h2>
                </div>

                <div className="space-y-16">
                    {displayCategories.map((category) => {
                        const catItems = filteredItems.filter(item => item.category === category.slug);
                        if (catItems.length === 0) return null;

                        return (
                            <AnimateOnScroll key={category.id} animation="fade-up">
                                <div className="flex items-center gap-4 mb-8">
                                    <h3 className="text-xl font-bold text-text-main capitalize sm:text-2xl">
                                        {category.label}
                                    </h3>
                                    <div className="h-px flex-1 bg-border" />
                                </div>
                                <div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
                                    {catItems.map((item) => (
                                        <CoffeeMenuItem key={item.id} {...item} />
                                    ))}
                                </div>
                            </AnimateOnScroll>
                        );
                    })}
                </div>

                {filteredItems.length === 0 && (
                    <p className="py-20 text-center text-text-light">
                        No items found in this category.
                    </p>
                )}
            </Container>
        </section>
    );
}

'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import CoffeeMenuItem from '@/components/ui/CoffeeMenuItem';
import { coffeeMenu, categories } from '@/lib/coffee-data';

interface MenuSectionProps {
    activeCategory: string;
}

export default function MenuSection({ activeCategory }: MenuSectionProps) {
    const filteredItems = activeCategory === 'all'
        ? coffeeMenu
        : coffeeMenu.filter(item => item.category === activeCategory);

    // Group items by category for cleaner display if 'all' is selected
    const displayCategories = activeCategory === 'all'
        ? categories.filter(c => c.slug !== 'all')
        : categories.filter(c => c.slug === activeCategory);

    return (
        <section className="py-20 bg-surfaceLight">
            <Container>
                <div className="space-y-16">
                    {displayCategories.map((category) => {
                        const catItems = filteredItems.filter(item => item.category === category.slug);
                        if (catItems.length === 0) return null;

                        return (
                            <div key={category.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <div className="flex items-center gap-4 mb-8">
                                    <h3 className="text-2xl font-bold text-primaryBrown capitalize">
                                        {category.label}
                                    </h3>
                                    <div className="h-px flex-1 bg-borderColor/30" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                    {catItems.map((item) => (
                                        <CoffeeMenuItem key={item.id} {...item} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-textLight italic">No items found in this category.</p>
                    </div>
                )}
            </Container>
        </section>
    );
}

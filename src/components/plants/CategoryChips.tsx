'use client';

import { useState } from 'react';
import type { PlantCategory, Plant } from '@/lib/plants-data';
import PlantDetailCard from '@/components/ui/PlantDetailCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Container from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

interface CategoryChipsProps {
    categories: PlantCategory[];
    plants: Plant[];
}

export default function CategoryChips({ categories, plants }: CategoryChipsProps) {
    const [activeSlug, setActiveSlug] = useState('all');

    const filteredPlants =
        activeSlug === 'all'
            ? plants
            : plants.filter((p) => p.category === activeSlug);

    return (
        <section id="featured" className="bg-bg py-12 sm:py-16">
            <Container>
                {/* Chips — horizontal scroll on mobile */}
                <div className="mb-10 flex items-center justify-center">
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
                <div className="mb-8 text-center">
                    <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl">
                        Our Collection
                    </h2>
                </div>

                {/* Plant grid */}
                <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
                    {filteredPlants.map((plant, index) => (
                        <AnimateOnScroll
                            key={plant.id}
                            animation="fade-up"
                            delay={index * 80}
                            className="h-full"
                        >
                            <PlantDetailCard plant={plant} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {filteredPlants.length === 0 && (
                    <p className="py-16 text-center text-text-light">
                        No plants found in this category yet.
                    </p>
                )}
            </Container>
        </section>
    );
}

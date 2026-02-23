'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { ArrowRight } from 'lucide-react';
import { coffeeMenu, categories } from '@/lib/coffee-data';

export default function CollectionSection() {
    const [activeSlug, setActiveSlug] = useState('coffee');

    const filteredItems = coffeeMenu.filter(
        (item) => item.category === activeSlug
    );

    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                {/* Centered heading */}
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-10 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            The Collection
                        </h2>
                    </div>
                </AnimateOnScroll>

                {/* Filter tabs */}
                <div className="mb-12 flex items-center justify-center">
                    <div className="flex gap-2 rounded-full border border-border bg-white p-1">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveSlug(cat.slug)}
                                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${activeSlug === cat.slug
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-text-light hover:text-primary'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid of items with circular images */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item, index) => (
                        <AnimateOnScroll
                            key={item.id}
                            animation="fade-up"
                            delay={index * 80}
                        >
                            <div className="group flex items-center gap-5 rounded-2xl bg-white p-4 transition-shadow duration-300 hover:shadow-md">
                                {/* Circular image */}
                                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-border-light">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold text-text-main sm:text-base">
                                        {item.name}
                                    </h3>
                                    <p className="mt-0.5 text-xs text-text-light line-clamp-1 sm:text-sm">
                                        {item.description}
                                    </p>
                                    <span className="mt-1 inline-block text-sm font-bold text-primary">
                                        {item.price}
                                    </span>
                                </div>

                                {/* Arrow */}
                                <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-200 group-hover:scale-110">
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* View Full Menu button */}
                <div className="mt-12 text-center">
                    <Link
                        href="#"
                        className="relative inline-block overflow-hidden rounded-full border border-text-main/30 px-8 py-3 text-sm font-semibold text-text-main transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-primary before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                    >
                        <span className="relative z-10">View Full Menu</span>
                    </Link>
                </div>
            </Container>
        </section>
    );
}

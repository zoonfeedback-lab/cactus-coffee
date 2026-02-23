'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { featuredItems } from '@/lib/coffee-data';

export default function FeaturedSpecials() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <Container>
                {/* Centered heading */}
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            Today&apos;s Specials
                        </h2>
                        <p className="mx-auto mt-2 max-w-md text-sm text-text-light sm:text-base">
                            Curated seasonal delights prepared fresh this morning.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* 3-column grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredItems.slice(0, 3).map((item, index) => (
                        <AnimateOnScroll
                            key={item.id}
                            animation="fade-up"
                            delay={index * 100}
                        >
                            <div className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-lg">
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <span className="absolute top-3 left-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                                        {item.tag}
                                    </span>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="mb-2 flex items-start justify-between gap-2">
                                        <h3 className="text-base font-bold text-text-main">
                                            {item.name}
                                        </h3>
                                        <span className="shrink-0 text-base font-bold text-primary">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="mb-4 text-sm leading-relaxed text-text-light line-clamp-2">
                                        {item.description}
                                    </p>
                                    <button className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-main transition-colors hover:border-primary hover:text-primary">
                                        Add to Order
                                    </button>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Sparkles } from 'lucide-react';
import { getTodaysSpecial } from '@/lib/coffee-data';

export default function TodaysSpecial() {
    const special = getTodaysSpecial();

    return (
        <section className="bg-white py-16 sm:py-20">
            <Container>
                <div className="mx-auto max-w-xl text-center">
                    {/* Badge */}
                    <AnimateOnScroll animation="fade-up">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                            <Sparkles className="h-4 w-4" />
                            Today&apos;s Special
                        </div>
                    </AnimateOnScroll>

                    {/* Image */}
                    <AnimateOnScroll animation="fade-up" delay={80}>
                        <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg sm:h-56 sm:w-56">
                            <Image
                                src={special.image}
                                alt={special.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </AnimateOnScroll>

                    {/* Name */}
                    <AnimateOnScroll animation="fade-up" delay={150}>
                        <h2 className="mb-2 font-heading text-3xl font-bold text-text-main sm:text-4xl lg:text-5xl">
                            {special.name}
                        </h2>
                    </AnimateOnScroll>

                    {/* Tagline */}
                    <AnimateOnScroll animation="fade-up" delay={250}>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                            {special.tagline}
                        </p>
                    </AnimateOnScroll>

                    {/* Description */}
                    <AnimateOnScroll animation="fade" delay={350}>
                        <p className="mx-auto mb-6 max-w-md text-base leading-relaxed text-text-light sm:text-lg">
                            {special.description}
                        </p>
                    </AnimateOnScroll>

                    {/* Price */}
                    <AnimateOnScroll animation="fade-up" delay={450}>
                        <span className="inline-block rounded-full bg-text-main px-6 py-2.5 text-lg font-bold text-white">
                            PKR {special.price}
                        </span>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

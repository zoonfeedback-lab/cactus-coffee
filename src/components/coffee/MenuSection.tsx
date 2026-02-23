import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { menuCategories } from '@/lib/coffee-data';

export default function FullMenu() {
    return (
        <section id="menu" className="bg-surface-alt py-16 sm:py-24">
            <Container>
                {/* Section heading */}
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-4 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            {menuCategories[0].title}
                        </h2>
                        <div className="mx-auto mt-2 h-0.5 w-16 bg-primary" />
                    </div>
                    {/* Single / Double legend */}
                    <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-text-light">
                        Single &nbsp;·&nbsp; Double
                    </p>
                </AnimateOnScroll>

                {/* 3-column menu grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {menuCategories[0].items.map((item, i) => (
                        <AnimateOnScroll key={item.name} animation="fade-up" delay={i * 60}>
                            <div className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                                {/* Circular image */}
                                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        loading={i < 6 ? 'eager' : 'lazy'}
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <h3 className="text-sm font-bold text-text-main sm:text-base">
                                        {item.name}
                                    </h3>
                                    {item.note ? (
                                        <p className="mt-1 text-sm italic text-text-light">
                                            — {item.note} —
                                        </p>
                                    ) : (
                                        <div className="mt-1 flex items-center gap-3">
                                            <span className="rounded-full bg-surface-alt px-3 py-0.5 text-xs font-semibold text-text-main">
                                                {item.single}
                                            </span>
                                            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                                                {item.double}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

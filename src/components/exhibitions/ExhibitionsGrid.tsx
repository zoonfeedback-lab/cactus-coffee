'use client';

import { useState } from 'react';
import { Exhibition } from '@/lib/exhibitions-data';
import ExhibitionCard from './ExhibitionCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Container from '@/components/ui/Container';

const filters = [
    { label: 'All', value: 'all' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Ongoing', value: 'ongoing' },
    { label: 'Past', value: 'past' },
] as const;

type FilterValue = (typeof filters)[number]['value'];

export default function ExhibitionsGrid({
    exhibitions,
}: {
    exhibitions: Exhibition[];
}) {
    const [active, setActive] = useState<FilterValue>('all');

    const filtered =
        active === 'all'
            ? exhibitions
            : exhibitions.filter((e) => e.status === active);

    return (
        <section id="exhibitions" className="bg-surface-alt py-16 sm:py-24">
            <Container>
                {/* Section heading */}
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-4 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            All Exhibitions
                        </h2>
                        <div className="mx-auto mt-2 h-0.5 w-16 bg-primary" />
                    </div>
                </AnimateOnScroll>

                {/* Filter chips */}
                <AnimateOnScroll animation="fade-up" delay={100}>
                    <div className="mb-10 flex flex-wrap justify-center gap-2">
                        {filters.map((f) => (
                            <button
                                key={f.value}
                                type="button"
                                onClick={() => setActive(f.value)}
                                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${active === f.value
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-white text-text-light hover:bg-primary/10 hover:text-primary'
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </AnimateOnScroll>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((exh, i) => (
                        <AnimateOnScroll
                            key={exh.id}
                            animation="fade-up"
                            delay={i * 80}
                        >
                            <ExhibitionCard exhibition={exh} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="py-12 text-center text-sm text-text-light">
                        No exhibitions found for this filter.
                    </p>
                )}
            </Container>
        </section>
    );
}

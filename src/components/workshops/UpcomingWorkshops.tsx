'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';
import { Calendar, Clock, User, Users } from 'lucide-react';
import { categories, upcomingWorkshops } from '@/lib/workshop-data';
import type { Workshop } from '@/lib/workshop-data';

function WorkshopCard({ ws }: { ws: Workshop }) {
    const [expanded, setExpanded] = useState(false);
    const isLimited = ws.seatsRemaining <= 5;

    return (
        <article className="group h-full overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={ws.image}
                    alt={ws.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Category badge */}
                <div className="absolute left-3 top-3">
                    <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                        {ws.category}
                    </span>
                </div>
                {/* Limited Seats ribbon */}
                {isLimited && (
                    <div className="absolute right-0 top-4">
                        <span className="inline-block rounded-l-full bg-[#F59E0B] px-3 py-1 text-xs font-bold text-white shadow-md">
                            Only {ws.seatsRemaining} left!
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="mb-2 font-heading text-lg font-bold text-text-main transition-colors group-hover:text-primary">
                    {ws.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text-light line-clamp-2">
                    {ws.description}
                </p>

                {/* Meta info */}
                <div className="mb-4 space-y-2 text-xs text-muted">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{ws.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{ws.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <User className="h-3.5 w-3.5" />
                        <span>{ws.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="h-3.5 w-3.5" />
                        <span>{ws.seatsRemaining} / {ws.seatsTotal} seats available</span>
                    </div>
                </div>

                {/* Price + Register */}
                <div className="flex items-center justify-between border-t border-border-light pt-4">
                    <span className="font-heading text-lg font-bold text-primary">{ws.price}</span>
                    <button className="rounded-full bg-primary px-5 py-2 text-xs font-bold text-white transition-colors duration-300 hover:bg-primary-dark">
                        Register Now
                    </button>
                </div>

                {/* Toggle details */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 w-full text-center text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                    {expanded ? 'Hide Details ↑' : 'View Details ↓'}
                </button>

                {/* Expandable details */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="rounded-xl bg-surface-alt p-4 text-sm">
                        <h4 className="mb-2 font-heading font-bold text-text-main text-sm">What You&apos;ll Learn</h4>
                        <ul className="mb-3 space-y-1 text-text-light">
                            {ws.whatYouLearn.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-1 text-text-light text-xs">
                            <p><span className="font-semibold text-text-main">Tools:</span> {ws.toolsProvided}</p>
                            <p><span className="font-semibold text-text-main">Skill Level:</span> {ws.skillLevel}</p>
                            <p><span className="font-semibold text-text-main">Certificate:</span> {ws.certificateIncluded ? 'Yes ✓' : 'Not included'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function UpcomingWorkshops() {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const filtered =
        activeCategory === 'All'
            ? upcomingWorkshops
            : upcomingWorkshops.filter((ws) => ws.category === activeCategory);

    return (
        <section id="upcoming-workshops" className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Upcoming Workshops"
                        subtitle="Secure your seat in our next creative session. Limited spots available."
                        align="center"
                    />
                </AnimateOnScroll>

                {/* Category filter pills */}
                <AnimateOnScroll animation="fade-up" delay={150}>
                    <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-primary text-white shadow-md'
                                        : 'border border-border bg-white text-text-light hover:border-primary/30 hover:text-primary'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </AnimateOnScroll>

                {/* Workshop grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((ws, i) => (
                        <AnimateOnScroll key={ws.id} animation="fade-up" delay={i * 120} className="h-full">
                            <WorkshopCard ws={ws} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="py-16 text-center text-text-light">
                        <p className="text-lg">No workshops in this category yet. Check back soon!</p>
                    </div>
                )}
            </Container>
        </section>
    );
}

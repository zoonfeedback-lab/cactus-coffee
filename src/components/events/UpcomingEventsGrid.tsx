'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { eventCategories, upcomingEvents } from '@/lib/events-data';
import type { CafeEvent, EventStatus } from '@/lib/events-data';

const statusConfig: Record<EventStatus, { label: string; classes: string }> = {
    upcoming: { label: 'Upcoming', classes: 'bg-[#22C55E]/15 text-[#22C55E]' },
    ongoing: { label: 'Ongoing', classes: 'bg-blue-500/15 text-blue-600' },
    'sold-out': { label: 'Sold Out', classes: 'bg-red-500/15 text-red-500' },
    completed: { label: 'Completed', classes: 'bg-muted/15 text-muted' },
};

function EventCard({ evt }: { evt: CafeEvent }) {
    const status = statusConfig[evt.status];
    const isSoldOut = evt.status === 'sold-out';

    return (
        <article className="group h-full overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isSoldOut ? 'grayscale' : ''}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Status badge */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${status.classes}`}>
                        {status.label}
                    </span>
                </div>
                {/* Entry type badge */}
                <div className="absolute right-3 top-3">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${evt.entryType === 'free'
                            ? 'bg-white/90 text-[#22C55E] backdrop-blur-sm'
                            : 'bg-white/90 text-text-main backdrop-blur-sm'
                        }`}>
                        {evt.entryType === 'free' ? 'Free' : evt.price}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="mb-2 font-heading text-lg font-bold text-text-main transition-colors group-hover:text-primary">
                    {evt.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text-light line-clamp-2">
                    {evt.description}
                </p>

                {/* Meta */}
                <div className="mb-4 space-y-2 text-xs text-muted">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{evt.location}</span>
                    </div>
                    {evt.seatsTotal && (
                        <div className="flex items-center gap-2">
                            <Users className="h-3.5 w-3.5" />
                            <span>{evt.seatsRemaining} / {evt.seatsTotal} seats</span>
                        </div>
                    )}
                </div>

                {/* Register button */}
                <button
                    disabled={isSoldOut}
                    className={`w-full rounded-full py-2.5 text-xs font-bold transition-colors duration-300 ${isSoldOut
                            ? 'cursor-not-allowed bg-muted/20 text-muted'
                            : 'bg-primary text-white hover:bg-primary-dark'
                        }`}
                >
                    {isSoldOut ? 'Sold Out' : evt.entryType === 'free' ? 'RSVP Now' : 'Book Now'}
                </button>
            </div>
        </article>
    );
}

export default function UpcomingEventsGrid() {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const filtered =
        activeCategory === 'All'
            ? upcomingEvents
            : upcomingEvents.filter((evt) => evt.category === activeCategory);

    return (
        <section id="upcoming-events" className="py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Upcoming Events"
                        subtitle="Find your next experience. Music, art, poetry, or community — there's something for everyone."
                        align="center"
                    />
                </AnimateOnScroll>

                {/* Category filter pills */}
                <AnimateOnScroll animation="fade-up" delay={150}>
                    <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
                        {eventCategories.map((cat) => (
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

                {/* Event grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((evt, i) => (
                        <AnimateOnScroll key={evt.id} animation="fade-up" delay={i * 120} className="h-full">
                            <EventCard evt={evt} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="py-16 text-center text-text-light">
                        <p className="text-lg">No events in this category yet. Check back soon!</p>
                    </div>
                )}
            </Container>
        </section>
    );
}

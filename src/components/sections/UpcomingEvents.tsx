import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Event {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    location: string;
}

const events: Event[] = [
    {
        id: 'evt-1',
        title: 'Open Studio Night',
        description:
            'An evening of live painting, coffee tastings, and conversations with local artists. Over 50 guests attended.',
        image: '/images/exhibition/img-4.jfif',
        date: '10 Jan 2026',
        time: '6:00 PM - 9:00 PM',
        location: 'Nigarkhana Art Gallery',
    },
    {
        id: 'evt-2',
        title: 'Botanical Illustration Workshop',
        description:
            'A one-day hands-on workshop on drawing plants and flowers, led by Sir Khalid Khayan. 25 participants joined.',
        image: '/images/exhibition/img-5.jfif',
        date: '18 Dec 2025',
        time: '10:00 AM - 3:00 PM',
        location: 'Cactus Coffee, Mandian',
    },
    {
        id: 'evt-3',
        title: 'Carved Silence Exhibition',
        description:
            'Twelve hand-carved wooden sculptures by Kael Ashburn, inspired by the quiet corners of old-growth forests.',
        image: '/images/exhibition/arts-image.jfif',
        date: '5 Jan - 5 Feb 2026',
        time: 'Gallery Hours',
        location: 'Nigarkhana Art Gallery',
    },
];

export default function UpcomingEvents() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Past Events"
                        subtitle="Highlights from recent exhibitions and gatherings at Cactus Coffee."
                        align="center"
                    />
                </AnimateOnScroll>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((evt, i) => (
                        <AnimateOnScroll key={evt.id} animation="fade-up" delay={i * 150} className="h-full">
                            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={evt.image}
                                        alt={evt.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute left-3 top-3">
                                        <span
                                            className="inline-block rounded-full bg-muted/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted"
                                        >
                                            Past
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="mb-3 font-heading text-lg font-bold text-text-main transition-colors group-hover:text-primary">
                                        {evt.title}
                                    </h3>
                                    <p className="mb-4 text-sm leading-relaxed text-text-light line-clamp-2">
                                        {evt.description}
                                    </p>
                                    <div className="space-y-2 text-xs text-muted">
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
                                    </div>
                                </div>
                            </article>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll animation="fade-up" delay={500}>
                    <div className="mt-10 text-center">
                        <Link
                            href="/events"
                            className="relative inline-block overflow-hidden rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                        >
                            <span className="relative z-10">View All Events</span>
                        </Link>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

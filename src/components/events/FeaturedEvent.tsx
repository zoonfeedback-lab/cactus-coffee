import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Calendar, Clock, MapPin, Users, Ticket } from 'lucide-react';
import { featuredEvent } from '@/lib/events-data';

export default function FeaturedEvent() {
    const evt = featuredEvent;
    const isLimited = evt.seatsRemaining !== undefined && evt.seatsRemaining <= 15;

    return (
        <section id="featured-event" className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                            Don&apos;t Miss This
                        </span>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Featured Event
                        </h2>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="scale" duration={700}>
                    <div className="group relative overflow-hidden rounded-3xl border border-border shadow-lg">
                        {/* Background image */}
                        <div className="relative h-72 sm:h-96 md:h-[28rem]">
                            <Image
                                src={evt.image}
                                alt={evt.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="100vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                            {/* Badges */}
                            <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">
                                <span className="inline-block rounded-full bg-[#22C55E] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                                    {evt.category}
                                </span>
                                {isLimited && (
                                    <span className="inline-block rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-bold text-white shadow">
                                        Only {evt.seatsRemaining} seats left!
                                    </span>
                                )}
                            </div>

                            {/* Content overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
                                <h3 className="mb-3 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                                    {evt.title}
                                </h3>
                                <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                                    {evt.description}
                                </p>

                                {/* Meta row */}
                                <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-4 w-4" />
                                        <span>{evt.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="h-4 w-4" />
                                        <span>{evt.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4" />
                                        <span>{evt.location}</span>
                                    </div>
                                    {evt.seatsTotal && (
                                        <div className="flex items-center gap-1.5">
                                            <Users className="h-4 w-4" />
                                            <span>{evt.seatsRemaining} / {evt.seatsTotal} seats</span>
                                        </div>
                                    )}
                                </div>

                                {/* CTA row */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <button className="flex items-center gap-2 rounded-full bg-[#22C55E] px-7 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#16a34a] hover:shadow-xl">
                                        <Ticket className="h-4 w-4" />
                                        Book Now — {evt.price}
                                    </button>
                                    <span className="text-xs text-white/50">
                                        {evt.entryType === 'paid' ? 'Paid Entry' : 'Free Entry'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

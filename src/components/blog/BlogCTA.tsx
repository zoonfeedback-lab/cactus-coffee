import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { CalendarDays, MapPin, Paintbrush } from 'lucide-react';

export default function BlogCTA() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={600}>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            Explore More
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight mb-4">
                            Discover Coffee. Create Moments.
                        </h2>
                        <p className="text-text-light text-sm sm:text-base leading-relaxed">
                            From workshops to live events to visiting our café — there&apos;s always something brewing at Cactus Coffee.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/workshops"
                            className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Paintbrush size={16} className="transition-transform group-hover:rotate-12" /> View Workshops
                        </Link>
                        <Link
                            href="/events"
                            className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 text-sm hover:bg-primary/5"
                        >
                            <CalendarDays size={16} /> See Upcoming Events
                        </Link>
                        <Link
                            href="/visit"
                            className="group inline-flex items-center justify-center gap-2 bg-surface border border-border text-text-main font-bold py-4 px-8 rounded-full transition-all duration-300 text-sm hover:border-primary/40 hover:text-primary"
                        >
                            <MapPin size={16} /> Visit Our Café
                        </Link>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

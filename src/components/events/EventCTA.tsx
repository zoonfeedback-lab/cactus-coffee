import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function EventCTA() {
    return (
        <section className="py-16 sm:py-24" aria-labelledby="event-cta-heading">
            <Container>
                <AnimateOnScroll animation="scale" duration={700}>
                    <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-sm sm:px-12 sm:py-20">
                        <h2
                            id="event-cta-heading"
                            className="mb-4 font-heading text-3xl font-bold text-text-main sm:text-4xl"
                        >
                            Don&apos;t Miss the Next Experience
                        </h2>
                        <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-text-light">
                            Follow us for updates on live music, art openings, and community gatherings. The best nights happen when you show up.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="#upcoming-events"
                                className="relative inline-block overflow-hidden rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                            >
                                <span className="relative z-10">View Upcoming Events</span>
                            </Link>
                            <Link
                                href="/visit"
                                className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-text-light transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                            >
                                Subscribe for Updates
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

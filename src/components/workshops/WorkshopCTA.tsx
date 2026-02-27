import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function WorkshopCTA() {
    return (
        <section className="py-16 sm:py-24" aria-labelledby="workshop-cta-heading">
            <Container>
                <AnimateOnScroll animation="scale" duration={700}>
                    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#f0fdf4] via-surface to-[#f0fdf4] px-6 py-14 text-center shadow-sm sm:px-12 sm:py-20">
                        {/* Decorative dots */}
                        <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-accent/10" />
                        <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-accent/10" />

                        <div className="relative z-10">
                            <h2
                                id="workshop-cta-heading"
                                className="mb-4 font-heading text-3xl font-bold text-text-main sm:text-4xl"
                            >
                                Ready to Join the Next Workshop?
                            </h2>
                            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-text-light">
                                Don&apos;t miss your chance to learn, create, and connect. Seats fill up fast — reserve yours today.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    href="#upcoming-workshops"
                                    className="relative inline-block overflow-hidden rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                                >
                                    <span className="relative z-10">View Upcoming Workshops</span>
                                </Link>
                                <Link
                                    href="/visit"
                                    className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-text-light transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

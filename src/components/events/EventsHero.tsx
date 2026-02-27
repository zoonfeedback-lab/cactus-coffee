import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { ChevronDown } from 'lucide-react';

export default function EventsHero() {
    return (
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
            <Image
                src="/images/hero-section pic.jfif"
                alt="Events and gatherings at Cactus Coffee"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

            <Container className="relative z-10 py-20 text-center sm:py-24">
                <div className="mx-auto max-w-3xl">
                    <AnimateOnScroll animation="fade-down" duration={800}>
                        <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Unforgettable <span className="text-[#A8C5A0]">Experiences</span>
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade" delay={300} duration={800}>
                        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                            Live music, art exhibitions, poetry evenings, and community gatherings — experiences that move the soul.
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-up" delay={600} duration={800}>
                        <a
                            href="#featured-event"
                            className="relative inline-block overflow-hidden rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                        >
                            <span className="relative z-10">See What&apos;s Happening</span>
                        </a>
                    </AnimateOnScroll>
                </div>
            </Container>

            <a
                href="#events-overview"
                aria-label="Scroll to content"
                className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/50 transition-colors duration-300 hover:text-primary"
            >
                <ChevronDown className="h-7 w-7" />
            </a>
        </section>
    );
}

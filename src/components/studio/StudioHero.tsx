import Image from 'next/image';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { ChevronDown } from 'lucide-react';

export default function StudioHero() {
    return (
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/hero-section pic.jfif"
                alt="Art Studio of Sir Khalid Khayam at Cactus Coffee"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

            {/* Content */}
            <Container className="relative z-10 py-20 text-center sm:py-24">
                <div className="mx-auto max-w-3xl">
                    <AnimateOnScroll animation="fade-down" duration={800}>
                        <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="italic text-[#A8C5A0]">The Art Studio</span>
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade" delay={300} duration={800}>
                        <p className="mx-auto mb-2 text-lg font-semibold tracking-wide text-white/90 sm:text-xl">
                            Sir Khalid Khayam
                        </p>
                        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                            Where art comes to life — inside Cactus Coffee. Watch, learn,
                            and experience creativity firsthand.
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-up" delay={600} duration={800}>
                        <Link
                            href="#studio-intro"
                            className="relative inline-block overflow-hidden rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                        >
                            <span className="relative z-10">Discover the Studio</span>
                        </Link>
                    </AnimateOnScroll>
                </div>
            </Container>

            {/* Scroll-down indicator */}
            <a
                href="#studio-intro"
                aria-label="Scroll to learn more"
                className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/50 transition-colors duration-300 hover:text-[#A8C5A0]"
            >
                <ChevronDown className="h-7 w-7" />
            </a>
        </section>
    );
}

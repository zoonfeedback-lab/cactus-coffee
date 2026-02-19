import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function ExhibitionHero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0f0d]">
            {/* Background image */}
            <Image
                src="/images/exhibition/hero-forest.svg"
                alt="Dense forest canopy representing the exhibition's natural art theme"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d]/30 via-[#0a0f0d]/50 to-[#0a0f0d]/85" />

            {/* Content */}
            <Container className="relative z-10 py-32 text-center">
                <div className="mx-auto max-w-3xl">
                    <AnimateOnScroll animation="fade-down" duration={800}>
                        <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="italic text-[#d4a843]">Curated Art</span>
                            <br />
                            That Speaks
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade" delay={300} duration={800}>
                        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                            An immersive digital journey through our latest forest-inspired collection,
                            exploring the intersection of organic life and abstract thought.
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-up" delay={600} duration={800}>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button href="#gallery" size="lg">
                                Explore Collection
                            </Button>
                            <a
                                href="#curator"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#d4a843]/40 hover:bg-white/5"
                            >
                                Virtual Tour
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

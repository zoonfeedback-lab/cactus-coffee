import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function HeroSection() {
    return (
        <section className="relative mt-28 flex min-h-[75vh] items-center justify-center overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/hero-bg.svg"
                alt="Cactus Coffee — a curated space with art, plants, and specialty coffee"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

            {/* Content */}
            <Container className="relative z-10 py-20 text-center sm:py-24">
                <div className="mx-auto max-w-3xl">
                    <AnimateOnScroll animation="fade-down" duration={800}>
                        <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Cactus <span className="text-[#A8C5A0]">Coffee</span>
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade" delay={300} duration={800}>
                        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                            A curated space for creativity, greenery, and handcrafted brews.
                            Come explore the harmony of art and nature designed for the soul.
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fade-up" delay={600} duration={800}>
                        <Button href="/visit" size="sm">
                            Explore the Experience
                        </Button>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

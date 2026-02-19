import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function PlantsHero() {
    return (
        <section className="bg-bg pb-8 pt-24 sm:pb-12 sm:pt-28">
            <Container>
                <div className="relative overflow-hidden rounded-3xl">
                    {/* Background image */}
                    <div className="relative aspect-[4/3] sm:aspect-[21/9] lg:aspect-[3/1]">
                        <Image
                            src="/images/plants/hero-greenhouse.svg"
                            alt="Lush greenhouse interior filled with tropical plants"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-10 md:p-16">
                            <AnimateOnScroll animation="fade-right" duration={800}>
                                <span className="mb-2 inline-block text-[10px] font-semibold uppercase tracking-widest text-accent-light sm:text-xs">
                                    Summer Collection 2026
                                </span>
                                <h1 className="mb-2 font-heading text-2xl font-bold leading-tight text-white sm:mb-3 sm:text-4xl md:text-5xl lg:text-6xl">
                                    Bring Nature Home
                                </h1>
                                <p className="mb-4 max-w-md text-xs leading-relaxed text-white/70 sm:mb-6 sm:text-sm md:text-base">
                                    Curated greenery for your living gallery. Elevate your space with our
                                    hand-picked selection of premium indoor plants.
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    <Button href="#featured" size="md">
                                        Shop All Plants
                                    </Button>
                                    <a
                                        href="/art"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:px-6 sm:py-2.5 sm:text-sm"
                                    >
                                        View Gallery
                                    </a>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

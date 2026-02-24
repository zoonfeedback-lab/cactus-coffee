import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import type { GalleryItem } from '@/lib/exhibition-data';

interface FeaturedArtworkProps {
    item: GalleryItem;
}

export default function FeaturedArtwork({ item }: FeaturedArtworkProps) {
    return (
        <section className="bg-white py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade" duration={1200}>
                    {/* Large featured image with slow zoom */}
                    <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-sm">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="object-cover transition-transform duration-[3000ms] ease-out hover:scale-105"
                        />
                    </div>
                </AnimateOnScroll>

                {/* Artwork info */}
                <AnimateOnScroll animation="fade-up" delay={400} duration={800}>
                    <div className="mx-auto mt-10 max-w-2xl text-center">
                        <h2 className="font-heading text-3xl font-bold leading-tight text-text-main sm:text-4xl lg:text-5xl">
                            {item.title}
                        </h2>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-light">
                            {item.artist}
                        </p>
                        <p className="mt-5 font-heading text-base italic leading-relaxed text-text-light/80 sm:text-lg">
                            &ldquo;{item.description}&rdquo;
                        </p>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

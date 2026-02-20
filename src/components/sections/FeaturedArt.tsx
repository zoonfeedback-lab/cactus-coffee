import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ArtCard from '@/components/ui/ArtCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { artItems } from '@/lib/data';

export default function FeaturedArt() {
    return (
        <section id="featured-art" className="py-16 sm:py-24" aria-labelledby="featured-art-heading">
            <Container>
                {/* Centered heading + subtitle */}
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Featured Art"
                        subtitle="Explore our rotating collection of contemporary works from emerging and established artists."
                        align="center"
                    />
                </AnimateOnScroll>

                {/* 3 Art cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {artItems.map((item, index) => (
                        <AnimateOnScroll key={item.id} animation="fade-up" delay={index * 150} className="h-full">
                            <ArtCard item={item} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* Centered "View in Gallery" link */}
                <AnimateOnScroll animation="fade-up" delay={500}>
                    <div className="mt-10 text-center">
                        <Link
                            href="/art"
                            className="relative inline-block overflow-hidden rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                        >
                            <span className="relative z-10">View in Gallery</span>
                        </Link>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

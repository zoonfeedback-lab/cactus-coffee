import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ArtCard from '@/components/ui/ArtCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { artItems } from '@/lib/data';

export default function FeaturedArt() {
    return (
        <section className="py-16 sm:py-24" aria-labelledby="featured-art-heading">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="flex items-end justify-between">
                        <SectionTitle
                            title="Featured Art"
                            subtitle="Explore our rotating collection of contemporary works from emerging and established artists."
                        />
                        <Link
                            href="/art"
                            className="mb-10 hidden items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark sm:flex"
                        >
                            View Art Gallery
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </AnimateOnScroll>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {artItems.map((item, index) => (
                        <AnimateOnScroll key={item.id} animation="fade-up" delay={index * 150} className="h-full">
                            <ArtCard item={item} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* Mobile link */}
                <div className="mt-8 text-center sm:hidden">
                    <Link
                        href="/art"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                    >
                        View Art Gallery
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

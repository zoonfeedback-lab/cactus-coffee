import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import PlantCard from '@/components/ui/PlantCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { plants } from '@/lib/data';

export default function PopularPlants() {
    return (
        <section className="bg-primary-dark py-16 sm:py-24" aria-labelledby="popular-plants-heading">
            <Container>
                {/* Centered heading + subtitle */}
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Popular Plants"
                        subtitle="Bring nature home with our curated selection of indoor plants, carefully sourced and nurtured."
                        align="center"
                        className="[&_h2]:text-white [&_p]:text-white/60"
                    />
                </AnimateOnScroll>

                {/* 3 Plant cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {plants.map((item, index) => (
                        <AnimateOnScroll key={item.id} animation="fade-up" delay={index * 100}>
                            <PlantCard item={item} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* Centered button with same style as Featured Art */}
                <AnimateOnScroll animation="fade-up" delay={500}>
                    <div className="mt-10 text-center">
                        <Link
                            href="/plants"
                            className="relative inline-block overflow-hidden rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                        >
                            <span className="relative z-10">View All Plants</span>
                        </Link>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

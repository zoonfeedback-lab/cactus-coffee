import React from 'react';
import Container from '@/components/ui/Container';
import FeaturedCoffeeCard from '@/components/ui/FeaturedCoffeeCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { featuredItems } from '@/lib/coffee-data';

export default function FeaturedSpecials() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <Container>
                {/* Centered heading */}
                <div className="mb-12 text-center">
                    <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                        Limited Editions
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                        Featured <span className="italic text-primary">Specials</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-base text-text-light">
                        Discover our seasonal highlights and signature creations, crafted by our expert baristas for a limited time.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <AnimateOnScroll animation="fade-up" delay={0} className="lg:col-span-2">
                        <FeaturedCoffeeCard {...featuredItems[0]} />
                    </AnimateOnScroll>
                    {featuredItems.slice(1).map((item, index) => (
                        <AnimateOnScroll key={item.id} animation="fade-up" delay={(index + 1) * 100}>
                            <FeaturedCoffeeCard {...item} />
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

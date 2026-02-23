import React from 'react';
import Container from '@/components/ui/Container';
import FeaturedCoffeeCard from '@/components/ui/FeaturedCoffeeCard';
import { featuredItems } from '@/lib/coffee-data';

export default function FeaturedSpecials() {
    return (
        <section className="py-20 bg-background">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <span className="text-accentGreen font-bold uppercase tracking-widest text-sm mb-4 block">
                            Limited Editions
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primaryBrown font-amberly">
                            Featured <span className="text-primary italic">Specials</span>
                        </h2>
                    </div>
                    <p className="text-textLight max-w-sm">
                        Discover our seasonal highlights and signature creations, crafted by our expert baristas for a limited time.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* First one can be full width or just part of the grid */}
                    <div className="lg:col-span-2">
                        <FeaturedCoffeeCard {...featuredItems[0]} />
                    </div>
                    {featuredItems.slice(1).map((item) => (
                        <FeaturedCoffeeCard key={item.id} {...item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

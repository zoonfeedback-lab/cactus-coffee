'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { artTypes } from '@/lib/commissions-data';

export default function ArtTypesGrid() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            Explore Your Options
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Types of Commissioned Art
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-text-light">
                            From intimate portraits to large-scale murals — discover the many
                            ways we can bring your vision to life.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {artTypes.map((type, i) => (
                        <AnimateOnScroll
                            key={type.id}
                            animation="fade-up"
                            delay={i * 100}
                            duration={700}
                        >
                            <div className="group overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={type.image}
                                        alt={type.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-2 font-heading text-lg font-bold text-text-main">
                                        {type.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-text-light">
                                        {type.description}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

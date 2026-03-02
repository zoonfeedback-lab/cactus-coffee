'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { momentPhotos } from '@/lib/customer-art-data';

export default function BehindTheMoments() {
    return (
        <section className="bg-[#FAF7F0] py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            Behind the Moments
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            The Joy of Creating Together
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-light">
                            Candid snapshots from our painting sessions — messy palettes,
                            focused faces, and a whole lot of laughter. This is what art
                            at Cactus Coffee really looks like.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Photo grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {momentPhotos.map((photo, i) => (
                        <AnimateOnScroll
                            key={photo.id}
                            animation="scale"
                            delay={i * 100}
                            duration={700}
                        >
                            <div className="group relative overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl">
                                <Image
                                    src={photo.image}
                                    alt={photo.alt}
                                    width={600}
                                    height={400}
                                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <p className="absolute bottom-0 left-0 w-full translate-y-2 px-4 pb-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    {photo.alt}
                                </p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

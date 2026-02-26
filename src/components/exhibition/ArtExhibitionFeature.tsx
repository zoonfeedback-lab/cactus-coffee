import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Palette, Info } from 'lucide-react';

export default function ArtExhibitionFeature() {
    return (
        <section className="bg-surface py-20 sm:py-32">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Image Area */}
                    <AnimateOnScroll animation="fade-right">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src="/images/exhibition/arts-image.jfif"
                                alt="Art Exhibition at Cactus Coffee"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white text-sm font-medium tracking-wide">
                                ✦ Current Exhibition: Forest Echoes
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Text Area */}
                    <AnimateOnScroll animation="fade-left" delay={200}>
                        <div className="max-w-xl">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                                <Palette className="h-4 w-4" />
                                Art Exhibitions
                            </span>
                            <h2 className="mb-6 font-heading text-3xl font-bold text-text-main sm:text-4xl lg:text-5xl">
                                A Canvas for Local Talent
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-text-light">
                                At Cactus Coffee, we believe that an inspiring space requires inspiring art. Our cafe doubles as a gallery, rotating exhibits from talented local and emerging artists every few months.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-alt text-primary">
                                        <span className="font-heading text-xl font-bold">1</span>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-lg font-bold text-text-main">Immersive Experience</h3>
                                        <p className="text-text-light">Sip your favorite handcrafted brew while surrounded by thought-provoking canvases and sculptures.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-alt text-primary">
                                        <span className="font-heading text-xl font-bold">2</span>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-lg font-bold text-text-main">Opening Nights</h3>
                                        <p className="text-text-light">Join us for special opening events to meet the artists, learn about their processes, and mingle with the community.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-alt text-primary">
                                        <span className="font-heading text-xl font-bold">3</span>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-lg font-bold text-text-main">Ever-Changing Vibe</h3>
                                        <p className="text-text-light">With every new exhibition, the atmosphere of the cafe transforms, ensuring there is always something new to inspire you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

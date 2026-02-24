import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ArtForSaleFeature() {
    return (
        <section className="bg-surface-alt py-20 sm:py-32">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Text Area */}
                    <AnimateOnScroll animation="fade-right">
                        <div className="max-w-xl order-2 lg:order-1">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                                <Tag className="h-4 w-4" />
                                Art For Sale
                            </span>
                            <h2 className="mb-6 font-heading text-3xl font-bold text-text-main sm:text-4xl lg:text-5xl">
                                Bring The Gallery Home
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-text-light">
                                Fall in love with a piece on our walls? The vast majority of the art displayed at Cactus Coffee is available for purchase directly from the artists.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
                                    <h3 className="mb-2 text-lg font-bold text-text-main">Support Local Creativity</h3>
                                    <p className="text-sm text-text-light">100% of art sales go directly to the artists, helping foster Abbottabad's thriving creative community.</p>
                                </div>
                                <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
                                    <h3 className="mb-2 text-lg font-bold text-text-main">A Piece for Every Budget</h3>
                                    <p className="text-sm text-text-light">From small prints and postcards to large original oil canvases, you can find the perfect piece to take home.</p>
                                </div>
                            </div>

                            <Link
                                href="#gallery"
                                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary-dark"
                            >
                                Browse Current Gallery <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </AnimateOnScroll>

                    {/* Image Area */}
                    <AnimateOnScroll animation="fade-left" delay={200}>
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl order-1 lg:order-2">
                            <div className="absolute inset-0 bg-primary-dark/5" />
                            <Image
                                src="/images/exhibition/img-2.jfif"
                                alt="Art for sale at Cactus Coffee"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />

                            {/* Price tag decorative bubble */}
                            <div className="absolute top-6 right-6 flex h-16 w-16 rotate-12 flex-col items-center justify-center rounded-full bg-accent text-white shadow-lg">
                                <span className="text-xs font-semibold">from</span>
                                <span className="font-heading text-lg font-bold leading-none">₨5k</span>
                            </div>
                        </div>
                    </AnimateOnScroll>

                </div>
            </Container>
        </section>
    );
}

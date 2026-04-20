'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { customerArtworks } from '@/lib/customer-art-data';

export default function CustomerArtGallery() {
    return (
        <section id="customer-gallery" className="bg-white py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            Community Gallery
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Art Created by Our Customers
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-light">
                            Each piece was born inside our café — during workshops, open art
                            nights, and open studio sessions. Real art, by real people.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Masonry grid */}
                <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                    {customerArtworks.map((artwork, i) => (
                        <AnimateOnScroll
                            key={artwork.id}
                            animation="fade-up"
                            delay={i * 80}
                            duration={700}
                        >
                            <div className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                                {/* Image */}
                                <div className="group relative overflow-hidden">
                                    <Image
                                        src={artwork.image}
                                        alt={`Artwork by ${artwork.customerName}`}
                                        width={600}
                                        height={450}
                                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <div className="mb-2 flex items-center justify-between">
                                        <p className="text-sm font-bold text-text-main">
                                            {artwork.customerName}
                                        </p>
                                        <span className="rounded-full bg-[#FAF7F0] px-3 py-0.5 text-xs font-medium text-primary">
                                            {artwork.event}
                                        </span>
                                    </div>
                                    <p className="mb-1 text-xs text-text-light">
                                        {artwork.date}
                                    </p>
                                    <p className="text-sm leading-relaxed text-text-light">
                                        {artwork.caption}
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

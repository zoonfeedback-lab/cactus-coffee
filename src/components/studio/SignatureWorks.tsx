'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { signatureWorks } from '@/lib/studio-data';

export default function SignatureWorks() {
    return (
        <section id="signature-works" className="bg-[#FAF7F0] py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            Selected Works
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Signature Artworks
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-light">
                            A curated selection of works by Sir Khalid Khayam — spanning
                            oil paintings, calligraphy, portraits, and mixed media.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Masonry gallery */}
                <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                    {signatureWorks.map((work, i) => (
                        <AnimateOnScroll
                            key={work.id}
                            animation="fade-up"
                            delay={i * 80}
                            duration={700}
                        >
                            <div className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                                {/* Image */}
                                <div className="group relative overflow-hidden">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        width={600}
                                        height={450}
                                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="mb-1 font-heading text-base font-bold text-text-main">
                                        {work.title}
                                    </h3>
                                    <p className="text-sm text-text-light">
                                        {work.medium}
                                    </p>
                                    <p className="mt-1 text-xs text-text-light/70">
                                        {work.year}
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

'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { introImages } from '@/lib/customer-art-data';

export default function CustomerArtIntro() {
    return (
        <section id="intro" className="bg-[#FAF7F0] py-20 sm:py-28">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Copy */}
                    <AnimateOnScroll animation="fade-right" duration={800}>
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                                Our Creative Community
                            </p>
                            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-text-main sm:text-4xl lg:text-5xl">
                                Where Coffee Meets{' '}
                                <span className="italic text-primary">Creativity</span>
                            </h2>
                            <p className="mb-4 text-base leading-relaxed text-text-light sm:text-lg">
                                At Cactus Coffee, art isn&apos;t just on the walls — it&apos;s
                                made right here, by people like you. Our workshops, open art
                                nights, and open studio sessions invite everyone to pick up a
                                brush and create something beautiful.
                            </p>
                            <p className="mb-4 text-base leading-relaxed text-text-light sm:text-lg">
                                Whether you&apos;re a seasoned artist or holding a paintbrush
                                for the very first time, there&apos;s a seat and an easel
                                waiting for you. No experience needed — just curiosity and a
                                love for making things.
                            </p>
                            <p className="text-base leading-relaxed text-text-light sm:text-lg">
                                This gallery celebrates the art our community has created.
                                Every piece tells a story of discovery, joy, and{' '}
                                <em>that magical first brushstroke</em>.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — Image grid */}
                    <AnimateOnScroll animation="fade-left" delay={200} duration={800}>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {introImages.map((src, i) => (
                                <div
                                    key={i}
                                    className={`group relative overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl ${i === 0 ? 'row-span-2' : ''
                                        }`}
                                >
                                    <Image
                                        src={src}
                                        alt={`Community art preview ${i + 1}`}
                                        width={400}
                                        height={i === 0 ? 600 : 280}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { artistBio } from '@/lib/studio-data';

export default function StudioIntro() {
    return (
        <section id="studio-intro" className="bg-[#FAF7F0] py-20 sm:py-28">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Artist image */}
                    <AnimateOnScroll animation="fade-right" duration={800}>
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src={artistBio.image}
                                alt={artistBio.name}
                                width={600}
                                height={700}
                                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <p className="text-lg font-bold text-white">
                                    {artistBio.name}
                                </p>
                                <p className="text-sm text-white/70">
                                    {artistBio.title}
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — Bio */}
                    <AnimateOnScroll animation="fade-left" delay={200} duration={800}>
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                                Meet the Artist
                            </p>
                            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-text-main sm:text-4xl lg:text-5xl">
                                {artistBio.name}
                            </h2>
                            <p className="mb-4 text-base leading-relaxed text-text-light sm:text-lg">
                                {artistBio.shortBio}
                            </p>
                            <blockquote className="mb-6 border-l-4 border-primary pl-5 italic text-text-main">
                                &ldquo;{artistBio.philosophy}&rdquo;
                            </blockquote>
                            <p className="mb-6 text-sm text-text-light">
                                {artistBio.experience}
                            </p>

                            {/* Specialties */}
                            <div className="flex flex-wrap gap-2">
                                {artistBio.specialties.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

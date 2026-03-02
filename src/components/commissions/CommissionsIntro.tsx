'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { introImages } from '@/lib/commissions-data';

export default function CommissionsIntro() {
    return (
        <section id="intro" className="bg-[#FAF7F0] py-20 sm:py-28">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Copy */}
                    <AnimateOnScroll animation="fade-right" duration={800}>
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                                Made Just for You
                            </p>
                            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-text-main sm:text-4xl lg:text-5xl">
                                What Is{' '}
                                <span className="italic text-primary">Commissioned Art?</span>
                            </h2>
                            <p className="mb-4 text-base leading-relaxed text-text-light sm:text-lg">
                                Commissioned art is a deeply personal experience — artwork created
                                exclusively for you, inspired by your memories, stories, events,
                                and the spaces you love.
                            </p>
                            <p className="mb-4 text-base leading-relaxed text-text-light sm:text-lg">
                                Whether it&apos;s a portrait to celebrate a milestone, calligraphy
                                that speaks to your soul, or a statement piece for your café walls
                                — every stroke is handcrafted with care, patience, and intention.
                            </p>
                            <p className="text-base leading-relaxed text-text-light sm:text-lg">
                                This is not mass-produced art. This is <em>your</em> story, told
                                through the language of paint, ink, and canvas.
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
                                        alt={`Commissioned art preview ${i + 1}`}
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

'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { livePaintingPhotos } from '@/lib/studio-data';

export default function LivePainting() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left — Copy */}
                    <AnimateOnScroll animation="fade-right" duration={800}>
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                                Live at Cactus Coffee
                            </p>
                            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-text-main sm:text-4xl lg:text-5xl">
                                Watch Art Come{' '}
                                <span className="italic text-primary">to Life</span>
                            </h2>
                            <p className="mb-4 text-base leading-relaxed text-text-light sm:text-lg">
                                One of the most unique things about Cactus Coffee is the
                                opportunity to watch Sir Khalid Khayam paint live — right
                                inside the café. A blank canvas transforms into a masterpiece
                                while you sip your coffee.
                            </p>
                            <p className="mb-4 text-base leading-relaxed text-text-light sm:text-lg">
                                The studio space is open, inviting, and filled with the
                                energy of creation. Visitors are welcome to observe, ask
                                questions, and experience the artistic process up close.
                            </p>
                            <p className="text-base leading-relaxed text-text-light sm:text-lg">
                                It&apos;s not just a café. It&apos;s a living,
                                breathing art studio.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — Photo grid */}
                    <AnimateOnScroll animation="fade-left" delay={200} duration={800}>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {livePaintingPhotos.map((photo, i) => (
                                <div
                                    key={photo.id}
                                    className={`group relative overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl ${i === 0 ? 'row-span-2' : ''
                                        }`}
                                >
                                    <Image
                                        src={photo.image}
                                        alt={photo.alt}
                                        width={400}
                                        height={i === 0 ? 600 : 280}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

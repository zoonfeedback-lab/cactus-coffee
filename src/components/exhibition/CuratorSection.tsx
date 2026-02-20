import Image from 'next/image';
import Container from '@/components/ui/Container';
import QuoteCard from '@/components/ui/QuoteCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import type { Curator } from '@/lib/exhibition-data';

interface CuratorSectionProps {
    curator: Curator;
}

export default function CuratorSection({ curator: c }: CuratorSectionProps) {
    return (
        <section id="curator" className="bg-white py-16 sm:py-24">
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left — Curator bio */}
                    <AnimateOnScroll animation="fade-right">
                        <div>
                            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#d4a843]">
                                The Curator&apos;s Note
                            </span>
                            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-text-main sm:text-4xl">
                                Bridging the gap between the{' '}
                                <span className="italic">wild</span> and the{' '}
                                <span className="italic">refined.</span>
                            </h2>
                            <p className="mb-8 text-sm leading-relaxed text-text-light sm:text-base">
                                {c.bio}
                            </p>

                            {/* Curator avatar */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
                                    <Image
                                        src={c.image}
                                        alt={c.name}
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-text-main">{c.name}</p>
                                    <p className="text-xs text-text-light">{c.role}</p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — Quote card */}
                    <AnimateOnScroll animation="fade-left" delay={200}>
                        <QuoteCard quote={c.quote} />
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

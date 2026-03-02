import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { artistInfo } from '@/lib/commissions-data';
import { Palette, Quote } from 'lucide-react';

export default function ArtistIntro() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
                    {/* Photo */}
                    <AnimateOnScroll
                        animation="fade-right"
                        duration={800}
                        className="lg:col-span-2"
                    >
                        <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-lg lg:max-w-none">
                            <Image
                                src={artistInfo.image}
                                alt={artistInfo.name}
                                width={500}
                                height={600}
                                className="w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="flex items-center gap-2 text-white">
                                    <Palette className="h-4 w-4" />
                                    <span className="text-sm font-medium">
                                        {artistInfo.experience}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Bio */}
                    <AnimateOnScroll
                        animation="fade-left"
                        delay={200}
                        duration={800}
                        className="lg:col-span-3"
                    >
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                                Meet the Artist
                            </p>
                            <h2 className="mb-2 font-heading text-3xl font-bold text-text-main sm:text-4xl">
                                {artistInfo.name}
                            </h2>
                            <p className="mb-6 text-sm font-medium text-primary">
                                {artistInfo.role}
                            </p>
                            <p className="mb-5 text-base leading-relaxed text-text-light">
                                {artistInfo.bio}
                            </p>

                            {/* Philosophy quote */}
                            <div className="relative rounded-xl border border-border-light bg-[#FAF7F0] p-6">
                                <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />
                                <p className="text-sm italic leading-relaxed text-text-main">
                                    &ldquo;{artistInfo.philosophy}&rdquo;
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

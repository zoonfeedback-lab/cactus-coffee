import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import type { OfficePlant } from '@/lib/plants-data';

interface OfficePlantsProps {
    plants: OfficePlant[];
}

export default function OfficePlantsSection({ plants }: OfficePlantsProps) {
    return (
        <section className="bg-bg py-16 sm:py-20">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-2 flex items-end justify-between">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl">
                            Perfect for the Office
                        </h2>
                        <p className="hidden text-sm text-text-light sm:block">
                            Low light tolerant and air-purifying varieties
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {plants.map((plant, index) => (
                        <AnimateOnScroll key={plant.id} animation="fade-up" delay={index * 100}>
                            <div className="flex items-center gap-4 rounded-2xl border border-border-light bg-white p-4 transition-all duration-300 hover:shadow-md">
                                {/* Image */}
                                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-surface-alt">
                                    <Image
                                        src={plant.image}
                                        alt={plant.name}
                                        fill
                                        sizes="80px"
                                        className="object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Content */}
                                <div>
                                    <h3 className="font-heading text-base font-semibold text-text-main">
                                        {plant.name}
                                    </h3>
                                    <p className="text-xs text-text-light">{plant.descriptor}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

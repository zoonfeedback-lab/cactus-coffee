'use client';

import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { studioOfferings } from '@/lib/studio-data';
import { DoorOpen, Palette, CalendarDays, Coffee } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    'door-open': <DoorOpen className="h-7 w-7" />,
    palette: <Palette className="h-7 w-7" />,
    calendar: <CalendarDays className="h-7 w-7" />,
    coffee: <Coffee className="h-7 w-7" />,
};

export default function StudioExperience() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            The Studio Experience
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            What You Can Do Here
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-light">
                            The studio at Cactus Coffee is more than a workspace — it&apos;s
                            an open invitation to connect with art in a meaningful way.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid gap-6 sm:grid-cols-2">
                    {studioOfferings.map((offering, i) => (
                        <AnimateOnScroll
                            key={offering.id}
                            animation="fade-up"
                            delay={i * 100}
                            duration={700}
                        >
                            <div className="group rounded-2xl border border-border-light bg-[#FAF7F0] p-7 transition-all duration-300 hover:shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                    {iconMap[offering.icon]}
                                </div>
                                <h3 className="mb-2 font-heading text-lg font-bold text-text-main">
                                    {offering.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-text-light">
                                    {offering.description}
                                </p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

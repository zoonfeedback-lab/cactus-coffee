'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { eventStats } from '@/lib/events-data';

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 1500;
                    const steps = 40;
                    const increment = target / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="font-heading text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
            {count.toLocaleString()}{suffix}
        </div>
    );
}

export default function EventHighlights() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                            Our Impact
                        </span>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Built by Community
                        </h2>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {eventStats.map((stat, i) => (
                        <AnimateOnScroll key={stat.label} animation="fade-up" delay={i * 120}>
                            <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <AnimatedNumber target={parseInt(stat.value)} suffix={stat.suffix || ''} />
                                <span className="mt-2 text-sm font-semibold text-text-light">{stat.label}</span>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

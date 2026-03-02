'use client';

import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { customerTestimonials } from '@/lib/customer-art-data';
import { Quote } from 'lucide-react';

export default function CustomerTestimonials() {
    return (
        <section className="bg-white py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            What Participants Say
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Stories from Our Community
                        </h2>
                    </div>
                </AnimateOnScroll>

                <div className="grid gap-6 sm:grid-cols-2">
                    {customerTestimonials.map((t, i) => (
                        <AnimateOnScroll
                            key={t.id}
                            animation="fade-up"
                            delay={i * 100}
                            duration={700}
                        >
                            <div className="relative rounded-2xl border border-border-light bg-[#FAF7F0] p-7 transition-all duration-300 hover:shadow-md">
                                <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/10" />
                                <p className="mb-5 text-base italic leading-relaxed text-text-main">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div>
                                    <p className="text-sm font-bold text-text-main">
                                        {t.author}
                                    </p>
                                    <p className="text-xs text-text-light">{t.event}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

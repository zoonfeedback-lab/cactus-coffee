import React from 'react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { testimonial } from '@/lib/coffee-data';

export default function TestimonialSection() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    {/* Large quote icon */}
                    <AnimateOnScroll animation="fade-up">
                        <div className="mb-6 text-5xl font-bold leading-none text-primary sm:text-6xl">
                            &ldquo;&rdquo;
                        </div>
                    </AnimateOnScroll>

                    {/* Quote */}
                    <AnimateOnScroll animation="fade-up" delay={150}>
                        <blockquote className="mb-8 font-heading text-lg font-bold italic leading-relaxed text-text-main sm:text-xl md:text-2xl">
                            &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                    </AnimateOnScroll>

                    {/* Author */}
                    <AnimateOnScroll animation="fade-up" delay={300}>
                        <div className="flex flex-col items-center gap-2">
                            {/* Avatar placeholder */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                                {testimonial.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-text-main">
                                    {testimonial.name}
                                </p>
                                <p className="text-xs text-text-light">
                                    {testimonial.title}
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

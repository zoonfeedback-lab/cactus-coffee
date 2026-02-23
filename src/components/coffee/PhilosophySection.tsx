import React from 'react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function PhilosophySection() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <Container>
                {/* Centered heading */}
                <div className="mb-12 text-center">
                    <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                        Our Philosophy
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                        Bean to Cup: <span className="italic text-primary">A Conscious Journey</span>
                    </h2>
                </div>

                <div className="mx-auto max-w-3xl space-y-8 text-center">
                    <AnimateOnScroll animation="fade-up" delay={0}>
                        <p className="text-base leading-relaxed text-text-light sm:text-lg">
                            At Cactus Coffee, we believe that exceptional coffee starts with respect for the land and the people who cultivate it. Our beans are sourced from small-scale sustainable farms that prioritize biodiversity and fair labor practices.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-up" delay={150}>
                        <p className="text-base leading-relaxed text-text-light sm:text-lg">
                            Every batch is hand-roasted in small quantities to unlock the unique DNA of the origin. Whether it&apos;s the citrus notes of an Ethiopian Yirgacheffe or the chocolatey depths of a Brazilian Cerrado, our roasting process is a tribute to the bean&apos;s heritage.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-up" delay={300}>
                        <p className="text-base font-medium leading-relaxed text-text-main italic sm:text-lg">
                            &ldquo;We don&apos;t just brew coffee; we cultivate experiences that connect people to nature and art.&rdquo;
                        </p>
                    </AnimateOnScroll>

                    {/* Stats */}
                    <AnimateOnScroll animation="fade-up" delay={400}>
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-12">
                            <div>
                                <h4 className="text-3xl font-bold text-primary">100%</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Ethically Sourced</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-primary">Small</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Batch Roasted</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-primary">Organic</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Certifications</p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

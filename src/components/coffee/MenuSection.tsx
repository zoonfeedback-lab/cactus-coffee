import React from 'react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import MenuAccordionGrid from '@/components/coffee/MenuAccordionGrid';
import { menuCategories } from '@/lib/coffee-data';

export default function FullMenu() {
    return (
        <section id="menu" className="bg-surface-alt py-16 sm:py-24">
            <Container>
                {/* Section heading */}
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-4 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            {menuCategories[0].title}
                        </h2>
                        <div className="mx-auto mt-2 h-0.5 w-16 bg-primary" />
                    </div>
                    {/* Single / Double legend */}
                    <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-text-light">
                        Single &nbsp;·&nbsp; Double
                    </p>
                </AnimateOnScroll>

                {/* Accordion menu grid */}
                <AnimateOnScroll animation="fade-up" delay={100}>
                    <MenuAccordionGrid items={menuCategories[0].items} />
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

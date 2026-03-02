'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/lib/workshop-data';

export default function WorkshopFAQ() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Frequently Asked Questions"
                        subtitle="Everything you need to know before joining a workshop."
                        align="center"
                    />
                </AnimateOnScroll>

                <div className="mx-auto max-w-3xl space-y-3">
                    {faqItems.map((faq, i) => {
                        const isOpen = openId === faq.id;
                        return (
                            <AnimateOnScroll key={faq.id} animation="fade-up" delay={i * 80}>
                                <div className="rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:border-primary/20">
                                    <button
                                        onClick={() => toggle(faq.id)}
                                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="font-heading text-base font-bold text-text-main">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="border-t border-border-light px-5 pb-5 pt-4 text-sm leading-relaxed text-text-light">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

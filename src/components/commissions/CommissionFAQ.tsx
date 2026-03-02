'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { faqItems } from '@/lib/commissions-data';
import { ChevronDown } from 'lucide-react';

export default function CommissionFAQ() {
    const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="bg-white py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            Common Questions
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                    </div>
                </AnimateOnScroll>

                <div className="mx-auto max-w-3xl space-y-3">
                    {faqItems.map((faq, i) => {
                        const isOpen = openId === faq.id;
                        return (
                            <AnimateOnScroll
                                key={faq.id}
                                animation="fade-up"
                                delay={i * 80}
                                duration={600}
                            >
                                <div
                                    className={`overflow-hidden rounded-xl border transition-all duration-300 ${isOpen
                                            ? 'border-primary/20 bg-[#FAF7F0] shadow-sm'
                                            : 'border-border-light bg-white'
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggle(faq.id)}
                                        className="flex w-full items-center justify-between px-6 py-4 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="pr-4 font-heading text-base font-bold text-text-main">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${isOpen
                                                ? 'max-h-96 opacity-100'
                                                : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="border-t border-border-light px-6 py-4 text-sm leading-relaxed text-text-light">
                                            {faq.answer}
                                        </p>
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

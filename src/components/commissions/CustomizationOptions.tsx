'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { customizationOptions } from '@/lib/commissions-data';
import { ChevronDown } from 'lucide-react';

export default function CustomizationOptions() {
    const [openId, setOpenId] = useState<string | null>(customizationOptions[0]?.id ?? null);

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="bg-[#FAF7F0] py-20 sm:py-28">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left — Heading */}
                    <AnimateOnScroll animation="fade-right" duration={700}>
                        <div className="lg:sticky lg:top-24">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                                Tailored to You
                            </p>
                            <h2 className="mb-4 font-heading text-3xl font-bold text-text-main sm:text-4xl">
                                Customization Options
                            </h2>
                            <p className="text-base leading-relaxed text-text-light">
                                Every commission is fully customizable. Explore the options
                                below — and if you don&apos;t see what you need, just ask.
                                We love bringing unique ideas to life.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — Accordion */}
                    <AnimateOnScroll animation="fade-left" delay={200} duration={700}>
                        <div className="space-y-3">
                            {customizationOptions.map((option) => {
                                const isOpen = openId === option.id;
                                return (
                                    <div
                                        key={option.id}
                                        className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${isOpen
                                                ? 'border-primary/20 shadow-sm'
                                                : 'border-border-light'
                                            }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggle(option.id)}
                                            className="flex w-full items-center justify-between px-6 py-4 text-left"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="font-heading text-base font-bold text-text-main">
                                                {option.title}
                                            </span>
                                            <ChevronDown
                                                className={`h-5 w-5 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out ${isOpen
                                                    ? 'max-h-96 opacity-100'
                                                    : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <ul className="space-y-2 border-t border-border-light px-6 py-4">
                                                {option.items.map((item, j) => (
                                                    <li
                                                        key={j}
                                                        className="flex items-start gap-2 text-sm text-text-light"
                                                    >
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

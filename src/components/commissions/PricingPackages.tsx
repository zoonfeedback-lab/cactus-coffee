'use client';

import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { pricingPackages } from '@/lib/commissions-data';
import { Check, Star, Clock, RotateCcw, Frame } from 'lucide-react';

export default function PricingPackages() {
    return (
        <section className="bg-[#FAF7F0] py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            Transparent Pricing
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Packages & Pricing
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-text-light">
                            Choose the package that fits your vision. Every commission is
                            unique — these are starting points, and we&apos;re happy to customize.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {pricingPackages.map((pkg, i) => (
                        <AnimateOnScroll
                            key={pkg.id}
                            animation="fade-up"
                            delay={i * 120}
                            duration={700}
                        >
                            <div
                                className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${pkg.highlighted
                                        ? 'border-primary/30 ring-2 ring-primary/10'
                                        : 'border-border-light'
                                    }`}
                            >
                                {/* Popular badge */}
                                {pkg.highlighted && (
                                    <div className="flex items-center justify-center gap-1.5 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                                        <Star className="h-3.5 w-3.5 fill-current" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="flex flex-1 flex-col p-7">
                                    <h3 className="mb-1 font-heading text-xl font-bold text-text-main">
                                        {pkg.name}
                                    </h3>
                                    <p className="mb-4 text-2xl font-bold text-primary">
                                        {pkg.price}
                                    </p>
                                    <p className="mb-6 text-sm leading-relaxed text-text-light">
                                        {pkg.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="mb-6 flex-1 space-y-3">
                                        {pkg.features.map((feature, j) => (
                                            <li
                                                key={j}
                                                className="flex items-start gap-3 text-sm text-text-main"
                                            >
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Meta info */}
                                    <div className="space-y-2 border-t border-border-light pt-5">
                                        <div className="flex items-center gap-2 text-xs text-text-light">
                                            <Clock className="h-3.5 w-3.5 text-muted" />
                                            Delivery: {pkg.deliveryTime}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-text-light">
                                            <RotateCcw className="h-3.5 w-3.5 text-muted" />
                                            Revisions:{' '}
                                            {pkg.revisions === -1
                                                ? 'Unlimited'
                                                : pkg.revisions}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-text-light">
                                            <Frame className="h-3.5 w-3.5 text-muted" />
                                            Framing:{' '}
                                            {pkg.framing ? 'Available' : 'Not included'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

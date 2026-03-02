'use client';

import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { howItWorksSteps } from '@/lib/commissions-data';
import { Lightbulb, MessageSquare, CheckCircle2, Package } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    lightbulb: <Lightbulb className="h-7 w-7" />,
    messages: <MessageSquare className="h-7 w-7" />,
    check: <CheckCircle2 className="h-7 w-7" />,
    package: <Package className="h-7 w-7" />,
};

export default function HowItWorks() {
    return (
        <section className="bg-[#FAF7F0] py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-16 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            Simple & Transparent
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            How It Works
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-text-light">
                            From your first idea to the finished piece — here&apos;s how we
                            bring your vision to life.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting line (desktop) */}
                    <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block" />

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {howItWorksSteps.map((step, i) => (
                            <AnimateOnScroll
                                key={step.id}
                                animation="fade-up"
                                delay={i * 150}
                                duration={700}
                            >
                                <div className="relative text-center">
                                    {/* Step number + icon */}
                                    <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-primary/20 bg-white shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                                        <span className="mb-1 text-xs font-bold uppercase tracking-wider text-primary/60">
                                            Step {step.step}
                                        </span>
                                        <span className="text-primary">
                                            {iconMap[step.icon]}
                                        </span>
                                    </div>

                                    <h3 className="mb-2 font-heading text-lg font-bold text-text-main">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-text-light">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

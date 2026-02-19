import Container from '@/components/ui/Container';
import TipCard from '@/components/ui/TipCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { ArrowRight } from 'lucide-react';
import type { Tip } from '@/lib/plants-data';

interface CareTipsProps {
    tips: Tip[];
}

export default function CareTips({ tips }: CareTipsProps) {
    return (
        <section className="bg-surface-alt py-16 sm:py-20">
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left — heading */}
                    <AnimateOnScroll animation="fade-right">
                        <div>
                            <h2 className="mb-4 font-heading text-2xl font-bold text-text-main sm:text-3xl">
                                Plant Care Tips
                            </h2>
                            <p className="mb-6 text-sm leading-relaxed text-text-light sm:text-base">
                                New to plant parenting? Our experts have curated the essential guides
                                to keep your indoor garden thriving.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                            >
                                Browse Full Guides
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — tip cards */}
                    <AnimateOnScroll animation="fade-left" delay={200}>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            {tips.map((tip) => (
                                <TipCard key={tip.id} tip={tip} />
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

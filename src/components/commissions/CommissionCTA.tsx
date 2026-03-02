import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CommissionCTA() {
    return (
        <section className="bg-primary-dark py-20 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
                            Ready to Create Something{' '}
                            <span className="italic text-[#A8C5A0]">Beautiful?</span>
                        </h2>
                        <p className="mb-8 text-base leading-relaxed text-white/70">
                            Your story deserves to be told through art. Let&apos;s craft
                            a piece that lives with you — a memory made timeless.
                        </p>
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="#commission-form"
                                className="inline-flex items-center gap-2 rounded-full bg-[#A8C5A0] px-8 py-3.5 text-sm font-bold text-primary-dark transition-all duration-300 hover:bg-[#93B58F] hover:shadow-lg"
                            >
                                Start Your Commission
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#portfolio"
                                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                            >
                                View Past Work
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

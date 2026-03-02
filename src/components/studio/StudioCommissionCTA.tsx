import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function StudioCommissionCTA() {
    return (
        <section className="bg-primary-dark py-20 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
                            Want a Piece of Your{' '}
                            <span className="italic text-[#A8C5A0]">Own?</span>
                        </h2>
                        <p className="mb-8 text-base leading-relaxed text-white/70">
                            Commission a custom artwork by Sir Khalid Khayam — a painting
                            crafted exclusively for you, your space, or your story. Or book
                            a consultation to explore your ideas over coffee.
                        </p>
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/art/commissions#commission-form"
                                className="inline-flex items-center gap-2 rounded-full bg-[#A8C5A0] px-8 py-3.5 text-sm font-bold text-primary-dark transition-all duration-300 hover:bg-[#93B58F] hover:shadow-lg"
                            >
                                Request a Commission
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/art/commissions"
                                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                            >
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

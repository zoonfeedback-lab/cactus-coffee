import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const pills = [
    { emoji: '☕', label: 'Fresh Coffee' },
    { emoji: '🎨', label: 'Rotating Art' },
    { emoji: '🌿', label: 'Rare Plants' },
] as const;

export default function CTASection() {
    return (
        <section className="py-16 sm:py-24" aria-labelledby="cta-heading">
            <Container>
                <AnimateOnScroll animation="scale" duration={700}>
                    <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-sm sm:px-12 sm:py-20">
                        <h2
                            id="cta-heading"
                            className="mb-4 font-heading text-3xl font-bold text-text-main sm:text-4xl"
                        >
                            Ready to visit our space?
                        </h2>
                        <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-text-light">
                            Located in Mandian, Abbottabad, join us for a unique
                            confluence of inspiration, greenery, and the perfect cup.
                        </p>

                        <Link
                            href="/visit"
                            className="relative mb-8 inline-block overflow-hidden rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                        >
                            <span className="relative z-10">Visit Our Space</span>
                        </Link>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {pills.map((pill) => (
                                <span
                                    key={pill.label}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-surface-alt px-4 py-2 text-sm font-medium text-text-main"
                                >
                                    <span aria-hidden="true">{pill.emoji}</span>
                                    {pill.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/workshop-data';

export default function WorkshopTestimonials() {
    return (
        <section className="bg-surface py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="What Students Say"
                        subtitle="Hear from creatives who joined our workshops."
                        label="Testimonials"
                        align="center"
                    />
                </AnimateOnScroll>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <AnimateOnScroll key={t.id} animation="fade-up" delay={i * 150}>
                            <div className="flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/30">
                                {/* Stars */}
                                <div className="mb-4 flex gap-1">
                                    {[...Array(5)].map((_, si) => (
                                        <Star
                                            key={si}
                                            className={`h-5 w-5 ${si < t.rating ? 'fill-accent text-accent' : 'fill-border text-border'}`}
                                        />
                                    ))}
                                </div>
                                {/* Name */}
                                <div className="mb-4">
                                    <div className="font-heading text-lg font-bold text-text-main">{t.name}</div>
                                    <div className="text-sm text-text-light">Workshop Participant</div>
                                </div>
                                {/* Review */}
                                <blockquote className="flex-grow text-text-light leading-relaxed">
                                    &ldquo;{t.review}&rdquo;
                                </blockquote>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

import type { Metadata } from 'next';
import PlantsHero from '@/components/plants/Hero';
import PlantSubNav from '@/components/layout/PlantSubNav';
import CareTips from '@/components/plants/CareTips';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { careTips } from '@/lib/plants-data';

export const metadata: Metadata = {
    title: 'Plant Care Tips | Cactus Coffee',
    description: 'Learn essential plant care — watering guides, lighting tips, repotting advice and more from our certified botanists.',
};

export default function PlantCarePage() {
    return (
        <main>
            <PlantsHero />
            <PlantSubNav />

            {/* Intro */}
            <section className="bg-surface py-16 sm:py-24 text-center">
                <Container>
                    <AnimateOnScroll animation="fade-up" duration={600}>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            Green Thumb Guide
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-4">
                            Plant Care Tips
                        </h2>
                        <p className="text-text-light text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                            New to plant parenting? Our experts have curated the essential guides to keep your indoor garden thriving.
                        </p>
                    </AnimateOnScroll>
                </Container>
            </section>

            <CareTips tips={careTips} />

            {/* FAQ */}
            <section className="bg-surface py-16 sm:py-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <AnimateOnScroll animation="fade-up">
                            <h2 className="font-heading text-2xl font-bold text-text-main mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {[
                                    { q: 'How often should I water my indoor plants?', a: 'Most indoor plants need watering when the top inch of soil feels dry. Overwatering is the #1 cause of plant death — always check before pouring.' },
                                    { q: 'Where should I place my plants for best light?', a: 'South-facing windows provide the brightest light. East and west windows give moderate light. North windows are best for low-light plants like pothos and snake plants.' },
                                    { q: 'How do I avoid yellow leaves?', a: 'Yellow leaves usually signal overwatering, poor drainage, or too much direct sun. Check your watering routine first, then adjust light exposure.' },
                                    { q: 'When should I repot my plant?', a: 'Repot when you see roots coming out of the drainage hole, the plant becomes top-heavy, or growth slows despite good care. Spring is the best time to repot.' },
                                ].map((faq) => (
                                    <div key={faq.q} className="bg-surface-alt rounded-2xl border border-border p-6">
                                        <h3 className="text-sm font-bold text-text-main mb-2">{faq.q}</h3>
                                        <p className="text-xs text-text-light leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>
                    </div>
                </Container>
            </section>
        </main>
    );
}

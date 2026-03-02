import type { Metadata } from 'next';
import PlantsHero from '@/components/plants/Hero';
import PlantSubNav from '@/components/layout/PlantSubNav';
import PlantWorkshops from '@/components/plants/PlantWorkshops';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export const metadata: Metadata = {
    title: 'Plant Workshops | Cactus Coffee',
    description: 'Join our hands-on plant workshops — terrarium building, succulent propagation, and more. Learn from our resident botanists.',
};

export default function WorkshopsPage() {
    return (
        <main>
            <PlantsHero />
            <PlantSubNav />

            {/* Intro */}
            <section className="bg-surface py-16 sm:py-24 text-center">
                <Container>
                    <AnimateOnScroll animation="fade-up" duration={600}>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            Hands-On Learning
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-4">
                            Plant Workshops
                        </h2>
                        <p className="text-text-light text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                            Get your hands dirty with our community workshops — all materials provided, expert-led, and always fun.
                        </p>
                    </AnimateOnScroll>
                </Container>
            </section>

            <PlantWorkshops />

            {/* What's Included */}
            <section className="bg-surface py-16 sm:py-20">
                <Container>
                    <AnimateOnScroll animation="fade-up">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="font-heading text-2xl font-bold text-text-main mb-8">What&apos;s Included</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    { emoji: '🌱', title: 'All Materials', desc: 'Plants, soil, pots, tools — everything you need is on us.' },
                                    { emoji: '☕', title: 'Complimentary Coffee', desc: 'Enjoy a cup of our finest brew while you learn.' },
                                    { emoji: '📜', title: 'Take-Home Guide', desc: 'Leave with a printed care guide for your creation.' },
                                ].map((item) => (
                                    <div key={item.title} className="bg-surface-alt rounded-2xl border border-border p-6">
                                        <span className="text-3xl mb-3 block">{item.emoji}</span>
                                        <h3 className="text-sm font-bold text-text-main mb-2">{item.title}</h3>
                                        <p className="text-xs text-text-light leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>
                </Container>
            </section>
        </main>
    );
}

import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Leaf, Wind, PawPrint, Home } from 'lucide-react';

const benefits = [
    { icon: Leaf, title: 'Low Maintenance', desc: 'Ideal for busy lifestyles' },
    { icon: Wind, title: 'Air Purifying', desc: 'Cleaner, fresher spaces' },
    { icon: PawPrint, title: 'Pet Friendly', desc: 'Safe for furry friends' },
    { icon: Home, title: 'Perfect for Apartments', desc: 'Compact & stylish' },
];

export default function PlantIntro() {
    return (
        <section className="bg-surface py-16 sm:py-24">
            <Container>
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                    {/* Left: Text */}
                    <AnimateOnScroll animation="fade-up" duration={600} className="flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            Why Plants Matter
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-6 leading-tight">
                            Nature Meets<br />
                            <span className="text-primary">Creative Culture</span>
                        </h2>
                        <p className="text-text-light text-sm sm:text-base leading-relaxed max-w-lg">
                            At Cactus Coffee, plants aren&apos;t just decoration — they&apos;re part of the experience. Our curated selection of indoor plants brings <strong className="text-text-main font-semibold">air-purifying benefits</strong>, a calm café atmosphere, and a creative environment that inspires. Whether you&apos;re looking for a low-maintenance desk companion or a statement piece for your living room, every plant is hand-picked for quality and beauty.
                        </p>
                    </AnimateOnScroll>

                    {/* Right: Benefit Cards */}
                    <div className="w-full lg:w-auto grid grid-cols-2 gap-4 lg:gap-5">
                        {benefits.map((b, idx) => (
                            <AnimateOnScroll
                                key={b.title}
                                animation="fade-up"
                                delay={idx * 100}
                                className="bg-surface-alt rounded-2xl border border-border p-5 sm:p-6 flex flex-col items-start gap-3 hover:shadow-md hover:border-primary/20 transition-all duration-500"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <b.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-text-main mb-1">{b.title}</h3>
                                    <p className="text-[11px] text-text-light/70">{b.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

import type { Metadata } from 'next';
import PlantsHero from '@/components/plants/Hero';
import PlantSubNav from '@/components/layout/PlantSubNav';
import OfficePlantsSection from '@/components/plants/OfficePlants';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { officePlants } from '@/lib/plants-data';
import { Monitor, Lightbulb, Droplets, Leaf } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Office Plants | Cactus Coffee',
    description: 'Low-light tolerant, air-purifying plants perfect for desks, meeting rooms, and workspaces.',
};

const officePerks = [
    { icon: Monitor, title: 'Reduce Screen Fatigue', desc: 'Green views ease eye strain and boost focus.' },
    { icon: Lightbulb, title: 'Boost Productivity', desc: 'Studies show plants improve concentration by 15%.' },
    { icon: Droplets, title: 'Improve Air Quality', desc: 'Natural filtration removes toxins and adds moisture.' },
    { icon: Leaf, title: 'Reduce Stress', desc: 'Plants lower cortisol levels and create calm spaces.' },
];

export default function OfficePlantsPage() {
    return (
        <main>
            <PlantsHero />
            <PlantSubNav />

            {/* Intro */}
            <section className="bg-surface py-16 sm:py-24 text-center">
                <Container>
                    <AnimateOnScroll animation="fade-up" duration={600}>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            Workspace Greenery
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-4">
                            Perfect for the Office
                        </h2>
                        <p className="text-text-light text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                            Low-light tolerant and air-purifying varieties that transform any workspace.
                        </p>
                    </AnimateOnScroll>
                </Container>
            </section>

            {/* Why Plants at Work */}
            <section className="bg-surface-alt py-16 sm:py-20">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {officePerks.map((p, idx) => (
                            <AnimateOnScroll key={p.title} animation="fade-up" delay={idx * 100}>
                                <div className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-md transition-all duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                                        <p.icon size={22} />
                                    </div>
                                    <h3 className="text-sm font-bold text-text-main mb-2">{p.title}</h3>
                                    <p className="text-xs text-text-light leading-relaxed">{p.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </Container>
            </section>

            <OfficePlantsSection plants={officePlants} />
        </main>
    );
}

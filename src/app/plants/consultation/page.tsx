import type { Metadata } from 'next';
import PlantsHero from '@/components/plants/Hero';
import PlantSubNav from '@/components/layout/PlantSubNav';
import PlantConsultation from '@/components/plants/PlantConsultation';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Clock, Video, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Plant Consultation | Cactus Coffee',
    description: 'Book a one-on-one plant consultation with our certified botanists — personalized lighting analysis, watering schedules, and expert advice.',
};

const formats = [
    { icon: MapPin, title: 'In-Café Session', desc: 'Visit us with your plant and get hands-on advice in person.', time: '30 min' },
    { icon: Video, title: 'Virtual Session', desc: 'Jump on a Zoom call — show us your setup and get tailored tips.', time: '20 min' },
    { icon: Clock, title: 'Quick Chat', desc: 'Drop by anytime during café hours for free quick plant advice.', time: '5 min' },
];

export default function ConsultationPage() {
    return (
        <main>
            <PlantsHero />
            <PlantSubNav />

            {/* Intro */}
            <section className="bg-surface py-16 sm:py-24 text-center">
                <Container>
                    <AnimateOnScroll animation="fade-up" duration={600}>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            Expert Help
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-4">
                            Plant Consultation
                        </h2>
                        <p className="text-text-light text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                            Our certified botanists are here to help you troubleshoot yellowing leaves, pest problems, and everything in between.
                        </p>
                    </AnimateOnScroll>
                </Container>
            </section>

            {/* Session Formats */}
            <section className="bg-surface-alt py-16 sm:py-20">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {formats.map((f, idx) => (
                            <AnimateOnScroll key={f.title} animation="fade-up" delay={idx * 100}>
                                <div className="bg-white rounded-2xl border border-border p-7 text-center hover:shadow-md transition-all duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                                        <f.icon size={22} />
                                    </div>
                                    <h3 className="text-sm font-bold text-text-main mb-1">{f.title}</h3>
                                    <span className="text-[10px] text-primary font-semibold uppercase tracking-wider mb-3 block">{f.time}</span>
                                    <p className="text-xs text-text-light leading-relaxed">{f.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </Container>
            </section>

            <PlantConsultation />
        </main>
    );
}

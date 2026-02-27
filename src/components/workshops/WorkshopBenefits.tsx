import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';
import { Wrench, Users, GraduationCap, Hand } from 'lucide-react';
import { benefits } from '@/lib/workshop-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Wrench,
    Users,
    GraduationCap,
    Hand,
};

export default function WorkshopBenefits() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Why Join Our Workshops?"
                        subtitle="More than just learning — it's an experience."
                        align="center"
                    />
                </AnimateOnScroll>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {benefits.map((b, i) => {
                        const Icon = iconMap[b.icon];
                        return (
                            <AnimateOnScroll key={b.title} animation="fade-up" delay={i * 120}>
                                <div className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0fdf4] text-[#22C55E] transition-colors duration-300 group-hover:bg-[#22C55E] group-hover:text-white">
                                        {Icon && <Icon className="h-7 w-7" />}
                                    </div>
                                    <h3 className="mb-2 font-heading text-base font-bold text-text-main">
                                        {b.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-text-light">
                                        {b.description}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

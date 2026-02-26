import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import type { CurriculumModule } from '@/lib/art-classes-data';
import { BookOpen } from 'lucide-react';

interface CurriculumSectionProps {
    modules: CurriculumModule[];
}

export default function CurriculumSection({ modules }: CurriculumSectionProps) {
    return (
        <section id="curriculum" className="bg-white py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            Curriculum
                        </h2>
                        <div className="mx-auto mt-3 h-0.5 w-16 bg-primary" />
                        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-light sm:text-base">
                            A structured learning path designed by Sir Khalid Khayan to take
                            you from fundamentals to exhibition-ready work.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {modules.map((mod, i) => (
                        <AnimateOnScroll key={mod.id} animation="fade-up" delay={i * 100}>
                            <div className="h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:p-8">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <BookOpen className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-text-main">
                                            {mod.title}
                                        </h3>
                                        <p className="text-xs font-medium text-primary">
                                            {mod.duration}
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-4 text-sm leading-relaxed text-text-light">
                                    {mod.description}
                                </p>
                                <ul className="space-y-2">
                                    {mod.topics.map((topic) => (
                                        <li
                                            key={topic}
                                            className="flex items-start gap-2 text-sm text-text-light"
                                        >
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8C5A0]" />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

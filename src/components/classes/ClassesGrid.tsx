import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import type { ArtClass } from '@/lib/art-classes-data';
import { Clock, GraduationCap, CalendarDays } from 'lucide-react';

const levelColor: Record<string, string> = {
    Beginner: 'bg-success/10 text-success',
    Intermediate: 'bg-primary/10 text-primary',
    Advanced: 'bg-amber-500/10 text-amber-600',
    'All Levels': 'bg-violet-500/10 text-violet-600',
};

interface ClassesGridProps {
    classes: ArtClass[];
}

export default function ClassesGrid({ classes }: ClassesGridProps) {
    return (
        <section id="classes" className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            Available Classes
                        </h2>
                        <div className="mx-auto mt-3 h-0.5 w-16 bg-primary" />
                        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-light sm:text-base">
                            Enrol in one of our studio classes and start your artistic journey today.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {classes.map((cls, i) => (
                        <AnimateOnScroll key={cls.id} animation="fade-up" delay={i * 80}>
                            <div className="group h-full overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden sm:h-52">
                                    <Image
                                        src={cls.image}
                                        alt={cls.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Level badge */}
                                    <div className="absolute left-3 top-3">
                                        <span
                                            className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${levelColor[cls.level] || 'bg-muted/15 text-muted'}`}
                                        >
                                            {cls.level}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="mb-2 font-heading text-lg font-bold text-text-main transition-colors group-hover:text-primary">
                                        {cls.title}
                                    </h3>

                                    <p className="mb-4 text-sm leading-relaxed text-text-light line-clamp-3">
                                        {cls.description}
                                    </p>

                                    {/* Meta rows */}
                                    <div className="space-y-2 text-xs text-muted">
                                        <div className="flex items-center gap-2">
                                            <GraduationCap className="h-3.5 w-3.5" />
                                            <span>{cls.instructor}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-3.5 w-3.5" />
                                            <span>{cls.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="h-3.5 w-3.5" />
                                            <span>{cls.schedule}</span>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="mt-4 border-t border-border pt-4">
                                        <span className="text-lg font-bold text-[#A8C5A0]">
                                            PKR {cls.price.toLocaleString()}
                                        </span>
                                        <span className="ml-1 text-xs text-text-light">/ course</span>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

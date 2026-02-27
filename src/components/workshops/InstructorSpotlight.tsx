import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';
import { Instagram, Facebook } from 'lucide-react';
import { instructors } from '@/lib/workshop-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Instagram,
    Facebook,
};

export default function InstructorSpotlight() {
    return (
        <section className="py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Meet Your Instructors"
                        subtitle="Passionate experts who bring creativity, skill, and warmth to every session."
                        align="center"
                    />
                </AnimateOnScroll>

                <div className="space-y-12">
                    {instructors.map((inst, i) => (
                        <AnimateOnScroll key={inst.id} animation="fade-up" delay={i * 200}>
                            <div className={`flex flex-col items-center gap-8 rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md md:flex-row md:p-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Image */}
                                <div className="relative h-56 w-56 shrink-0 overflow-hidden rounded-full border-4 border-surface-alt shadow-lg md:h-64 md:w-64">
                                    <Image
                                        src={inst.image}
                                        alt={inst.name}
                                        fill
                                        className="object-cover"
                                        sizes="256px"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="mb-1 font-heading text-2xl font-bold text-text-main">
                                        {inst.name}
                                    </h3>
                                    <p className="mb-1 text-sm font-semibold text-primary">{inst.title}</p>
                                    <p className="mb-4 text-xs text-muted">{inst.experience}</p>
                                    <p className="mb-5 text-base leading-relaxed text-text-light">
                                        {inst.bio}
                                    </p>

                                    {/* Quote */}
                                    <blockquote className="mb-5 border-l-4 border-accent pl-4 text-sm italic text-text-light">
                                        {inst.quote}
                                    </blockquote>

                                    {/* Socials */}
                                    <div className="flex items-center justify-center gap-3 md:justify-start">
                                        {inst.socials.map((s) => {
                                            const Icon = iconMap[s.platform];
                                            return (
                                                <a
                                                    key={s.platform}
                                                    href={s.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-alt text-text-light transition-all hover:bg-primary hover:text-white"
                                                    aria-label={s.platform}
                                                >
                                                    {Icon && <Icon className="h-4 w-4" />}
                                                </a>
                                            );
                                        })}
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

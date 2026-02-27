import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';
import { timelineEvents } from '@/lib/events-data';

const categoryColors: Record<string, string> = {
    Music: 'bg-[#22C55E]',
    Art: 'bg-[#8B5CF6]',
    Poetry: 'bg-[#F59E0B]',
    Community: 'bg-[#3B82F6]',
    'Special Nights': 'bg-[#EC4899]',
};

export default function EventTimeline() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="March at a Glance"
                        subtitle="Your month ahead — every experience mapped out."
                        align="center"
                    />
                </AnimateOnScroll>

                <div className="mx-auto max-w-2xl">
                    {/* Vertical timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[39px] top-0 bottom-0 w-px bg-border sm:left-[47px]" />

                        <div className="space-y-6">
                            {timelineEvents.map((evt, i) => (
                                <AnimateOnScroll key={i} animation="fade-left" delay={i * 100}>
                                    <div className="group flex items-start gap-5 sm:gap-6">
                                        {/* Date circle */}
                                        <div className="relative z-10 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md sm:h-24 sm:w-24">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                                                {evt.date.split(' ')[0]}
                                            </span>
                                            <span className="font-heading text-xl font-bold text-text-main sm:text-2xl">
                                                {evt.date.split(' ')[1]}
                                            </span>
                                        </div>

                                        {/* Event info */}
                                        <div className="flex flex-1 flex-col justify-center rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md sm:p-5">
                                            <div className="mb-1.5 flex flex-wrap items-center gap-2">
                                                <span className={`inline-block h-2 w-2 rounded-full ${categoryColors[evt.category] || 'bg-muted'}`} />
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                                                    {evt.category}
                                                </span>
                                            </div>
                                            <h3 className="font-heading text-base font-bold text-text-main transition-colors group-hover:text-primary sm:text-lg">
                                                {evt.title}
                                            </h3>
                                            <span className="mt-1 text-xs text-text-light">{evt.time}</span>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

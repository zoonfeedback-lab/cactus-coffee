import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Music, Palette, BookOpen, Users, Coffee, Sparkles } from 'lucide-react';

const eventTypes = [
    { icon: Music, label: 'Live Music' },
    { icon: BookOpen, label: 'Open Mic' },
    { icon: Palette, label: 'Art Exhibitions' },
    { icon: Sparkles, label: 'Poetry Evenings' },
    { icon: Coffee, label: 'Coffee Tastings' },
    { icon: Users, label: 'Community' },
];

export default function EventsOverview() {
    return (
        <section id="events-overview" className="py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="mb-4 block text-xs font-bold tracking-widest text-[#22C55E] uppercase">
                            WHAT WE HOST
                        </span>
                        <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                            More Than Just Events
                        </h2>
                        <p className="text-lg leading-relaxed text-text-light">
                            Cactus Coffee is a living stage for Abbottabad&apos;s creative community. From soul-stirring open mic nights to curated art openings, every gathering is designed to inspire, connect, and celebrate.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Icon row */}
                <AnimateOnScroll animation="fade-up" delay={200}>
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                        {eventTypes.map((item, i) => (
                            <div
                                key={item.label}
                                className="group flex flex-col items-center gap-2.5 transition-transform duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${i * 80}ms` }}
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0fdf4] text-[#22C55E] transition-colors duration-300 group-hover:bg-[#22C55E] group-hover:text-white">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <span className="text-xs font-semibold text-text-light">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

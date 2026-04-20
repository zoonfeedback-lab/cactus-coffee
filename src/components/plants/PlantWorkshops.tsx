import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Clock } from 'lucide-react';

const workshops = [
    {
        title: 'Terrarium Building 101',
        description: 'Create your own miniature ecosystem in glass. All materials provided.',
        date: 'Sat, Nov 12 @ 10AM',
        image: '/images/plants/img-4.jfif',
    },
    {
        title: 'Succulent Propagation',
        description: 'Learn the secrets of growing infinite plants from just a single leaf.',
        date: 'Sun, Nov 13 @ 2PM',
        image: '/images/plants/img-5.jfif',
    },
];

export default function PlantWorkshops() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={600}>
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight mb-3">
                            Learn &amp; Grow Together
                        </h2>
                        <p className="text-text-light text-sm leading-relaxed">
                            Join our community workshops and get your hands dirty with the experts.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {workshops.map((ws, idx) => (
                        <AnimateOnScroll key={ws.title} animation="fade-up" delay={idx * 120}>
                            <div className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-sm border border-border/30">
                                <Image
                                    src={ws.image}
                                    alt={ws.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Content overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                                    {/* Date badge */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full w-fit mb-3 border border-white/10">
                                        <Clock size={11} /> {ws.date}
                                    </span>

                                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white leading-tight mb-2">
                                        {ws.title}
                                    </h3>
                                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
                                        {ws.description}
                                    </p>
                                    <Link
                                        href="/workshops"
                                        className="text-primary text-sm font-bold hover:text-accent transition-colors w-fit"
                                    >
                                        Join Workshop →
                                    </Link>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

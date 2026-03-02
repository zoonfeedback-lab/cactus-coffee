import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { BookOpen, Users, Sparkles, Award } from 'lucide-react';

const highlights = [
    {
        icon: BookOpen,
        title: 'Beginner Friendly',
        description: 'No prior experience needed for most workshops.',
    },
    {
        icon: Users,
        title: 'Limited Seats',
        description: 'Small groups for personalised attention.',
    },
    {
        icon: Sparkles,
        title: 'Hands-on Practice',
        description: 'Learn by doing — every session is interactive.',
    },
    {
        icon: Award,
        title: 'Certificate Provided',
        description: 'Get recognised for your new creative skills.',
    },
];

export default function WorkshopIntro() {
    return (
        <section id="workshop-intro" className="py-16 sm:py-24">
            <Container>
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
                    {/* Left: Intro text */}
                    <AnimateOnScroll animation="fade-right">
                        <div className="max-w-lg">
                            <span className="mb-4 block text-xs font-bold tracking-widest text-[#22C55E] uppercase">
                                LEARN · CREATE · GROW
                            </span>
                            <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-text-main sm:text-4xl md:text-5xl">
                                Workshops That Inspire
                            </h2>
                            <p className="text-lg leading-relaxed text-text-light">
                                From the art of the perfect pour-over to botanical watercolours and Nastaliq calligraphy — our workshops are designed to spark creativity, build real skills, and bring people together in the warm atmosphere of Cactus Coffee.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Right: Feature cards 2x2 grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {highlights.map((item, i) => (
                            <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 100}>
                                <div className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-1">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0fdf4] text-[#22C55E] transition-colors group-hover:bg-[#22C55E] group-hover:text-white">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-1.5 font-heading text-base font-bold text-text-main">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-text-light">
                                        {item.description}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

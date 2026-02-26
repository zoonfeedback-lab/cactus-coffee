import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Calendar, MapPin, Users } from 'lucide-react';

interface Workshop {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    attendees: string;
    location: string;
}

const workshops: Workshop[] = [
    {
        id: 'ws-1',
        title: 'Botanical Illustration Workshop',
        description:
            'A hands-on session on drawing plants and flowers led by Sir Khalid Khayan. Participants explored pencil and watercolour techniques.',
        image: '/images/exhibition/img-5.jfif',
        date: '18 Dec 2025',
        attendees: '25 Participants',
        location: 'Cactus Coffee, Mandian',
    },
    {
        id: 'ws-2',
        title: 'Calligraphy for Beginners',
        description:
            'An introductory workshop covering Naskh and Nastaliq scripts. Students practiced letterforms and basic compositions.',
        image: '/images/exhibition/img-3.jfif',
        date: '5 Nov 2025',
        attendees: '18 Participants',
        location: 'Nigarkhana Art Gallery',
    },
    {
        id: 'ws-3',
        title: 'Coffee and Sketch Morning',
        description:
            'A relaxed weekend session combining specialty coffee tasting with on-the-spot sketching. Open to all skill levels.',
        image: '/images/exhibition/img-2.jfif',
        date: '22 Oct 2025',
        attendees: '30 Participants',
        location: 'Cactus Coffee, Mandian',
    },
];

export default function PastWorkshops() {
    return (
        <section className="py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Past Workshops"
                        subtitle="Highlights from creative sessions hosted at Cactus Coffee and Nigarkhana Art Gallery."
                        align="center"
                    />
                </AnimateOnScroll>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {workshops.map((ws, i) => (
                        <AnimateOnScroll key={ws.id} animation="fade-up" delay={i * 150} className="h-full">
                            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={ws.image}
                                        alt={ws.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute left-3 top-3">
                                        <span className="inline-block rounded-full bg-muted/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted">
                                            Past
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="mb-3 font-heading text-lg font-bold text-text-main transition-colors group-hover:text-primary">
                                        {ws.title}
                                    </h3>
                                    <p className="mb-4 text-sm leading-relaxed text-text-light line-clamp-2">
                                        {ws.description}
                                    </p>
                                    <div className="space-y-2 text-xs text-muted">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-3.5 w-3.5" />
                                            <span>{ws.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-3.5 w-3.5" />
                                            <span>{ws.attendees}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-3.5 w-3.5" />
                                            <span>{ws.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll animation="fade-up" delay={500}>
                    <div className="mt-10 text-center">
                        <Link
                            href="/workshops"
                            className="relative inline-block overflow-hidden rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                        >
                            <span className="relative z-10">View All Workshops</span>
                        </Link>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

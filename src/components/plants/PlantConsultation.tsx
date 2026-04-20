import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { CheckCircle2, CalendarDays, ShieldCheck } from 'lucide-react';

const benefits = [
    'Personalized lighting analysis for your home',
    'Custom fertilization and watering schedules',
    'In-person or virtual Zoom sessions',
];

export default function PlantConsultation() {
    return (
        <section className="bg-surface py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="scale" duration={700}>
                    <div className="flex flex-col md:flex-row bg-surface-alt rounded-3xl overflow-hidden border border-border shadow-sm">
                        {/* Left: Image */}
                        <div className="relative w-full md:w-[45%] h-72 sm:h-80 md:h-auto min-h-[320px] bg-[#2d5a3d] overflow-hidden">
                            <Image
                                src="/images/plants/img-3.jfif"
                                alt="Plant care expert tending to indoor plants"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 45vw"
                            />
                            {/* Expert Care Badge */}
                            <div className="absolute bottom-5 left-5 bg-white rounded-2xl p-4 shadow-lg max-w-[220px]">
                                <div className="flex items-center gap-2 mb-2">
                                    <ShieldCheck size={18} className="text-primary" />
                                    <div>
                                        <p className="text-sm font-bold text-text-main leading-none">Expert Care</p>
                                        <p className="text-[10px] text-primary font-medium">Certified Botanists</p>
                                    </div>
                                </div>
                                <p className="text-xs font-bold text-text-main">
                                    98% <span className="font-normal text-text-light">Survival rate after advice</span>
                                </p>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="flex-1 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-main leading-tight mb-2 tracking-tight">
                                Need help keeping them<br />
                                <span className="text-primary">alive?</span>
                            </h2>
                            <p className="text-text-light text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                                Our coffee isn&apos;t the only thing that&apos;s premium. We offer one-on-one plant consultations to help you troubleshoot yellowing leaves, lighting issues, or pest problems.
                            </p>

                            {/* Checklist */}
                            <ul className="space-y-3 mb-8">
                                {benefits.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-text-main">
                                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary-dark hover:bg-[#1a2e1a] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 text-sm w-fit shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Book a Consultation <CalendarDays size={16} />
                            </Link>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Mic, Mail, Palette } from 'lucide-react';

const reasons = [
    { icon: Mic, label: 'Perform at Open Mic' },
    { icon: Palette, label: 'Exhibit Your Art' },
    { icon: Mail, label: 'Host a Private Event' },
];

export default function HostAnEvent() {
    return (
        <section className="py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#f0fdf4] via-surface to-[#f0fdf4] px-6 py-14 text-center shadow-sm sm:px-12 sm:py-20">
                        {/* Decorative shapes */}
                        <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-accent/10" />
                        <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-accent/10" />

                        <div className="relative z-10">
                            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                                Collaborate
                            </span>
                            <h2 className="mb-4 font-heading text-3xl font-bold text-text-main sm:text-4xl">
                                Looking to Perform, Exhibit, or Host?
                            </h2>
                            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-text-light">
                                Cactus Coffee is a platform for creators. Whether you&apos;re a musician, artist, poet, or community organiser — we&apos;d love to hear from you.
                            </p>

                            {/* Reason icons */}
                            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
                                {reasons.map((r) => (
                                    <div key={r.label} className="flex items-center gap-2 text-sm text-text-light">
                                        <r.icon className="h-4 w-4 text-primary" />
                                        <span>{r.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    href="/visit"
                                    className="relative inline-block overflow-hidden rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                                >
                                    <span className="relative z-10">Propose an Event</span>
                                </Link>
                                <Link
                                    href="/visit"
                                    className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-text-light transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

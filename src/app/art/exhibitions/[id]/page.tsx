import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { exhibitions, getExhibitionById } from '@/lib/exhibitions-data';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { ArrowLeft, Calendar } from 'lucide-react';

/* ── Static params for all exhibitions ── */
export function generateStaticParams() {
    return exhibitions.map((e) => ({ id: e.id }));
}

/* ── Dynamic metadata ── */
type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const exh = getExhibitionById(id);
    if (!exh) return { title: 'Exhibition Not Found' };
    return {
        title: `${exh.title} — ${exh.artist} | Cactus Coffee`,
        description: exh.description,
    };
}

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
    upcoming: { bg: 'bg-primary/10', text: 'text-primary', label: 'Upcoming' },
    ongoing: { bg: 'bg-success/10', text: 'text-success', label: 'Ongoing' },
    past: { bg: 'bg-muted/15', text: 'text-muted', label: 'Past' },
};

function formatDateRange(start: string, end: string): string {
    const s = new Date(start);
    const e = new Date(end);
    const sDay: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    const eFull: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return `${s.toLocaleDateString('en-GB', sDay)} – ${e.toLocaleDateString('en-GB', eFull)}`;
}

export default async function ExhibitionDetailPage({ params }: PageProps) {
    const { id } = await params;
    const exh = getExhibitionById(id);
    if (!exh) notFound();

    const badge = statusStyles[exh.status];

    return (
        <main className="min-h-screen bg-bg">
            {/* ── Hero banner ── */}
            <section className="relative flex min-h-[45vh] items-end overflow-hidden">
                <Image
                    src={exh.image}
                    alt={exh.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

                <Container className="relative z-10 pb-12 pt-32">
                    <Link
                        href="/art/exhibitions"
                        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-[#A8C5A0]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Exhibitions
                    </Link>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <span
                                className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${badge.bg} ${badge.text}`}
                            >
                                {badge.label}
                            </span>
                            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                                {exh.title}
                            </h1>
                            <div className="mt-3 flex items-center gap-2 text-sm text-white/60">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDateRange(exh.startDate, exh.endDate)}</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── Artist info ── */}
            <section className="bg-white py-12 sm:py-16">
                <Container>
                    <AnimateOnScroll animation="fade-up">
                        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                            {/* Artist portrait */}
                            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg sm:h-32 sm:w-32">
                                <Image
                                    src={exh.artistImage}
                                    alt={exh.artist}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl">
                                    {exh.artist}
                                </h2>
                                <p className="mt-1 text-sm font-medium text-primary">
                                    Featured Artist
                                </p>
                                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-light sm:text-base">
                                    {exh.artistBio}
                                </p>
                                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-light sm:text-base">
                                    {exh.description}
                                </p>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </Container>
            </section>

            {/* ── Divider ── */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            {/* ── Artworks gallery ── */}
            <section className="bg-surface-alt py-14 sm:py-20">
                <Container>
                    <AnimateOnScroll animation="fade-up">
                        <div className="mb-10 text-center">
                            <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl">
                                Artworks
                            </h2>
                            <div className="mx-auto mt-2 h-0.5 w-16 bg-primary" />
                            <p className="mt-3 text-sm text-text-light">
                                {exh.artworks.length} pieces in this exhibition
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                        {exh.artworks.map((art, i) => (
                            <AnimateOnScroll
                                key={art.id}
                                animation="fade-up"
                                delay={i * 60}
                            >
                                <div className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src={art.image}
                                            alt={art.title}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-heading text-base font-bold text-text-main">
                                            {art.title}
                                        </h3>
                                        <p className="mt-1 text-xs text-text-light">
                                            {art.medium} · {art.year}
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}

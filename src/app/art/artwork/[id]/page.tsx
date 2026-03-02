import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ArtSubNav from '@/components/layout/ArtSubNav';
import { getArtworkById, getAllArtworkIds, allArtworks } from '@/lib/art-shop-data';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/* ── Static Params ── */

export function generateStaticParams() {
    return getAllArtworkIds().map((id) => ({ id }));
}

/* ── Dynamic Metadata ── */

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const artwork = getArtworkById(id);
    if (!artwork) return { title: 'Artwork Not Found | Cactus Coffee' };
    return {
        title: `${artwork.title} by ${artwork.artist} | Cactus Coffee`,
        description: artwork.description,
    };
}

/* ── Status Badge ── */

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        available: 'bg-green-100 text-green-800 border-green-200',
        sold: 'bg-red-100 text-red-800 border-red-200',
        'on-exhibition': 'bg-amber-100 text-amber-800 border-amber-200',
    };
    const labels: Record<string, string> = {
        available: 'Available',
        sold: 'Sold',
        'on-exhibition': 'On Exhibition',
    };
    return (
        <span
            className={`inline-block rounded-full border px-4 py-1 text-xs font-bold uppercase tracking-wider ${styles[status]}`}
        >
            {labels[status]}
        </span>
    );
}

/* ── Page Component ── */

export default async function ArtworkDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const artwork = getArtworkById(id);
    if (!artwork) notFound();

    const related = allArtworks
        .filter((a) => a.category === artwork.category && a.id !== artwork.id)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Back link */}
            <div className="border-b border-border bg-white">
                <Container className="py-4">
                    <Link
                        href={artwork.source === 'exhibition' ? '/art/exhibitions' : '/arts'}
                        className="inline-flex items-center gap-2 text-sm font-medium text-text-light transition-colors hover:text-primary"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {artwork.source === 'exhibition' ? 'Back to Exhibitions' : 'Back to Gallery'}
                    </Link>
                </Container>
            </div>

            <ArtSubNav />

            {/* Product Detail */}
            <section className="py-16 sm:py-24">
                <Container>
                    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
                        {/* Left — Image */}
                        <AnimateOnScroll animation="fade-right" duration={800}>
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                                <Image
                                    src={artwork.image}
                                    alt={artwork.title}
                                    width={800}
                                    height={600}
                                    priority
                                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${artwork.status === 'sold' ? 'opacity-60 grayscale' : ''}`}
                                />
                                {artwork.status === 'sold' && (
                                    <div className="absolute left-0 top-6 bg-red-600 px-6 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-lg">
                                        Sold
                                    </div>
                                )}
                            </div>
                        </AnimateOnScroll>

                        {/* Right — Details */}
                        <AnimateOnScroll animation="fade-left" delay={200} duration={800}>
                            <div>
                                <StatusBadge status={artwork.status} />

                                <h1 className="mb-2 mt-4 font-heading text-3xl font-bold text-text-main sm:text-4xl">
                                    {artwork.title}
                                </h1>

                                <p className="mb-6 text-base text-text-light">
                                    by{' '}
                                    <span className="font-semibold text-text-main">
                                        {artwork.artist}
                                    </span>
                                </p>

                                <p className="mb-6 font-heading text-3xl font-bold text-primary">
                                    PKR {artwork.price.toLocaleString()}
                                </p>

                                {/* Details grid */}
                                <div className="mb-8 grid grid-cols-2 gap-4 rounded-2xl border border-border-light bg-[#FAF7F0] p-6">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-text-light">Medium</p>
                                        <p className="mt-1 text-sm font-medium text-text-main">{artwork.medium}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-text-light">Dimensions</p>
                                        <p className="mt-1 text-sm font-medium text-text-main">{artwork.dimensions}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-text-light">Year</p>
                                        <p className="mt-1 text-sm font-medium text-text-main">{artwork.year}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-text-light">Source</p>
                                        <p className="mt-1 text-sm font-medium text-text-main capitalize">
                                            {artwork.source === 'exhibition'
                                                ? `Exhibition: ${artwork.exhibitionTitle}`
                                                : 'Gallery Collection'}
                                        </p>
                                    </div>
                                </div>

                                <p className="mb-8 text-base leading-relaxed text-text-light">
                                    {artwork.description}
                                </p>

                                {artwork.owner && (
                                    <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
                                        <p className="text-sm text-amber-800">
                                            <span className="font-bold">Owned by:</span>{' '}
                                            {artwork.owner} · Part of the{' '}
                                            <em>{artwork.exhibitionTitle}</em> exhibition.
                                        </p>
                                    </div>
                                )}

                                {/* Action buttons */}
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    {artwork.status !== 'sold' ? (
                                        <Link
                                            href={`mailto:art@cactuscoffee.com?subject=Inquiry: ${artwork.title}&body=Hi, I'm interested in "${artwork.title}" by ${artwork.artist} (PKR ${artwork.price.toLocaleString()}).`}
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
                                        >
                                            Inquire to Buy
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    ) : (
                                        <span className="inline-flex items-center justify-center rounded-full bg-gray-200 px-8 py-3.5 text-sm font-bold text-gray-500">
                                            This Piece Has Been Sold
                                        </span>
                                    )}
                                    <Link
                                        href="/arts"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-text-main transition-all duration-300 hover:bg-[#FAF7F0]"
                                    >
                                        Browse More Art
                                    </Link>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Related Artworks */}
                    {related.length > 0 && (
                        <div className="mt-20">
                            <div className="flex justify-center">
                                <div className="mb-16 h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
                            </div>
                            <AnimateOnScroll animation="fade-up" duration={700}>
                                <h2 className="mb-10 text-center font-heading text-2xl font-bold text-text-main sm:text-3xl">
                                    You May Also Like
                                </h2>
                            </AnimateOnScroll>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {related.map((r, i) => (
                                    <AnimateOnScroll key={r.id} animation="fade-up" delay={i * 100} duration={700}>
                                        <Link
                                            href={`/art/artwork/${r.id}`}
                                            className="group block overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                                        >
                                            <div className="relative overflow-hidden">
                                                <Image
                                                    src={r.image}
                                                    alt={r.title}
                                                    width={400}
                                                    height={300}
                                                    className={`aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105 ${r.status === 'sold' ? 'opacity-60 grayscale' : ''}`}
                                                />
                                                {r.status === 'sold' && (
                                                    <div className="absolute left-0 top-3 bg-red-600 px-3 py-0.5 text-[10px] font-bold uppercase text-white">Sold</div>
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-heading text-sm font-bold text-text-main">{r.title}</h3>
                                                <p className="text-xs text-text-light">{r.artist}</p>
                                                <p className="mt-1 font-heading text-sm font-bold text-primary">PKR {r.price.toLocaleString()}</p>
                                            </div>
                                        </Link>
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        </div>
                    )}
                </Container>
            </section>
        </main>
    );
}

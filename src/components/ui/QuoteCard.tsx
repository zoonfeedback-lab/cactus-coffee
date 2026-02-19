import { ArrowRight } from 'lucide-react';

interface QuoteCardProps {
    quote: string;
    ctaLabel?: string;
    ctaHref?: string;
}

export default function QuoteCard({
    quote,
    ctaLabel = 'Read Full Interview',
    ctaHref = '#',
}: QuoteCardProps) {
    return (
        <div className="rounded-2xl bg-[#1a2620] p-8 sm:p-10">
            {/* Accent quote icon */}
            <span className="mb-4 inline-block font-heading text-5xl leading-none text-[#d4a843]">
                &ldquo;
            </span>
            <blockquote className="mb-6 font-heading text-lg leading-relaxed text-[#c4d0c8] italic sm:text-xl">
                &ldquo;{quote}&rdquo;
            </blockquote>
            <a
                href={ctaHref}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#d4a843] transition-colors duration-200 hover:text-[#e8c36a]"
            >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
            </a>
        </div>
    );
}

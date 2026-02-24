import Image from 'next/image';
import Link from 'next/link';
import { Exhibition } from '@/lib/exhibitions-data';
import { Calendar } from 'lucide-react';

const statusStyles: Record<Exhibition['status'], { bg: string; text: string; label: string }> = {
    upcoming: { bg: 'bg-primary/10', text: 'text-primary', label: 'Upcoming' },
    ongoing: { bg: 'bg-success/10', text: 'text-success', label: 'Ongoing' },
    past: { bg: 'bg-muted/15', text: 'text-muted', label: 'Past' },
};

function formatDateRange(start: string, end: string): string {
    const s = new Date(start);
    const e = new Date(end);
    const opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    const sDay: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };

    if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
        return `${s.toLocaleDateString('en-GB', sDay)} – ${e.getDate()} ${e.toLocaleDateString('en-GB', opts)}`;
    }
    return `${s.toLocaleDateString('en-GB', sDay)} – ${e.toLocaleDateString('en-GB', sDay)}, ${e.getFullYear()}`;
}

export default function ExhibitionCard({ exhibition }: { exhibition: Exhibition }) {
    const badge = statusStyles[exhibition.status];

    return (
        <Link href={`/art/exhibitions/${exhibition.id}`} className="block">
            <div className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                {/* Image */}
                <div className="relative h-52 overflow-hidden sm:h-60">
                    <Image
                        src={exhibition.image}
                        alt={exhibition.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Status badge */}
                    <div className="absolute left-3 top-3">
                        <span
                            className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${badge.bg} ${badge.text}`}
                        >
                            {badge.label}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    <h3 className="mb-3 font-heading text-lg font-bold text-text-main transition-colors group-hover:text-primary sm:text-xl">
                        {exhibition.title}
                    </h3>

                    {/* Artist row with portrait */}
                    <div className="mb-3 flex items-center gap-3">
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                            <Image
                                src={exhibition.artistImage}
                                alt={exhibition.artist}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-text-main">
                                {exhibition.artist}
                            </p>
                            <p className="text-xs text-text-light line-clamp-1">
                                {exhibition.artistBio}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-text-light line-clamp-3">
                        {exhibition.description}
                    </p>

                    {/* Date range */}
                    <div className="flex items-center gap-2 text-xs text-muted">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{formatDateRange(exhibition.startDate, exhibition.endDate)}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

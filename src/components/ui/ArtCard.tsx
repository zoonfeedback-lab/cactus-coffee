import Image from 'next/image';
import type { ArtItem } from '@/lib/data';

interface ArtCardProps {
    item: ArtItem;
}

export default function ArtCard({ item }: ArtCardProps) {
    return (
        <article className="group relative h-full overflow-hidden rounded-2xl bg-surface shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="relative aspect-[3/2] w-full overflow-hidden sm:aspect-[3/4]">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay — slides up from bottom on hover */}
                <div className="absolute inset-0 flex flex-col justify-end transition-all duration-500">
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Content slides up */}
                    <div className="relative z-10 translate-y-full p-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
                        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-accent-light">
                            {item.category}
                        </span>
                        <h3 className="mb-2 font-heading text-xl font-semibold text-white">
                            {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/80">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}

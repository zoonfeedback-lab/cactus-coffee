import Image from 'next/image';
import type { GalleryItem } from '@/lib/exhibition-data';

interface GalleryCardProps {
    item: GalleryItem;
}

const aspectMap = {
    sm: 'aspect-[3/4]',
    md: 'aspect-square',
    lg: 'aspect-[3/5]',
} as const;

export default function GalleryCard({ item }: GalleryCardProps) {
    return (
        <article className="group relative w-full overflow-hidden rounded-xl bg-surface transition-all duration-300 hover:shadow-xl">
            <div className={`relative w-full overflow-hidden ${aspectMap[item.size]}`}>
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="p-4">
                        <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-primary">
                            {item.category.replace('-', ' ')}
                        </span>
                        <h3 className="text-sm font-bold text-white sm:text-base">
                            {item.title}
                        </h3>
                    </div>
                </div>
            </div>
        </article>
    );
}

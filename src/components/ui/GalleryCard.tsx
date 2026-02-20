import Image from 'next/image';
import type { GalleryItem } from '@/lib/exhibition-data';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

interface GalleryCardProps {
    item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
    return (
        <article className="group relative h-full overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="relative aspect-[3/2] w-full overflow-hidden sm:aspect-[3/4]">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                {/* Dark overlay slides up on hover */}
                <div className="absolute inset-0 flex flex-col justify-end transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 translate-y-full p-5 transition-transform duration-500 ease-out group-hover:translate-y-0">
                        <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-[#d4a843]">
                            {item.category.replace('-', ' ')}
                        </span>
                        <h3 className="mb-1 font-heading text-lg font-semibold text-white">
                            {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/70">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}

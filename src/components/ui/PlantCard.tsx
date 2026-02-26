import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Plant } from '@/lib/data';

interface PlantCardProps {
    item: Plant;
}

export default function PlantCard({ item }: PlantCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl">
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl sm:aspect-[3/4]">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="p-4">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                            {item.category}
                        </span>
                        <h3 className="font-heading text-sm font-semibold text-white sm:text-base">
                            {item.name}
                        </h3>
                        <div className="mt-1 flex gap-0.5" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-3 w-3 ${i < item.rating
                                        ? 'fill-warning text-warning'
                                        : 'fill-white/30 text-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

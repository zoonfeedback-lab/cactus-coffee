import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Plant } from '@/lib/data';

interface PlantCardProps {
    item: Plant;
}

export default function PlantCard({ item }: PlantCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl bg-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative mb-4 aspect-[3/2] overflow-hidden rounded-xl bg-surface-alt sm:aspect-[3/4]">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="space-y-1.5">
                <span className="text-xs font-medium uppercase tracking-wider text-text-light">
                    {item.category}
                </span>
                <h3 className="font-heading text-base font-semibold text-text-main">
                    {item.name}
                </h3>
                <div className="flex items-center">
                    <div className="flex gap-0.5" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`h-3.5 w-3.5 ${i < item.rating
                                    ? 'fill-warning text-warning'
                                    : 'fill-muted/30 text-muted/30'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

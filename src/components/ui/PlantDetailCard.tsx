import Image from 'next/image';
import Link from 'next/link';
import type { Plant } from '@/lib/plants-data';
import { Droplets, Sun } from 'lucide-react';

interface PlantDetailCardProps {
    plant: Plant;
}

const aspectMap = {
    sm: 'aspect-[3/4]',
    md: 'aspect-square',
    lg: 'aspect-[3/5]',
} as const;

export default function PlantDetailCard({ plant }: PlantDetailCardProps) {
    return (
        <Link href={`/plants/${plant.id}`} className="block">
            <article className="group relative w-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className={`relative w-full overflow-hidden ${aspectMap[plant.size]}`}>
                    <Image
                        src={plant.image}
                        alt={plant.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    {/* Hover overlay — identical to art gallery */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="p-4">
                            {/* Badges row */}
                            <div className="mb-2 flex flex-wrap gap-1.5">
                                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                                    {plant.level}
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
                                    <Sun className="h-2.5 w-2.5" />
                                    {plant.light}
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
                                    <Droplets className="h-2.5 w-2.5" />
                                    {plant.watering}
                                </span>
                            </div>
                            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-primary">
                                {plant.category.replace('-', ' ')}
                            </span>
                            <h3 className="text-sm font-bold text-white sm:text-base">
                                {plant.name}
                            </h3>
                        </div>
                    </div>

                    {/* Always-visible category badge (top-left) */}
                    <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                            {plant.category.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}

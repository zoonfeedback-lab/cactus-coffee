import Image from 'next/image';
import type { Plant } from '@/lib/plants-data';
import Badge from '@/components/ui/Badge';
import { Droplets, Sun } from 'lucide-react';

interface PlantDetailCardProps {
    plant: Plant;
}

export default function PlantDetailCard({ plant }: PlantDetailCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-alt">
                <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                {/* Category badge */}
                <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                        {plant.category.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                </div>
                {/* Level badge */}
                <div className="absolute right-3 top-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${plant.level === 'Beginner'
                        ? 'bg-green-500/20 text-green-700'
                        : plant.level === 'Intermediate'
                            ? 'bg-amber-500/20 text-amber-700'
                            : 'bg-red-500/20 text-red-700'
                        }`}>
                        {plant.level}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <div className="mb-2">
                    <h3 className="font-heading text-lg font-semibold text-text-main">
                        {plant.name}
                    </h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-text-light">
                    {plant.description}
                </p>

                {/* Badges */}
                <div className="mt-auto flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-alt px-2.5 py-1 text-xs text-text-light">
                        <Sun className="h-3 w-3" />
                        {plant.light}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-alt px-2.5 py-1 text-xs text-text-light">
                        <Droplets className="h-3 w-3" />
                        {plant.watering}
                    </span>
                </div>
            </div>
        </article>
    );
}

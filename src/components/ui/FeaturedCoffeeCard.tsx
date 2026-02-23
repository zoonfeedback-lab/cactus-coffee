import React from 'react';
import Image from 'next/image';
import Badge from './Badge';

interface FeaturedCoffeeCardProps {
    name: string;
    description: string;
    image: string;
    price: string;
    tag?: string;
}

export default function FeaturedCoffeeCard({
    name,
    description,
    image,
    price,
    tag,
}: FeaturedCoffeeCardProps) {
    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl md:flex-row">
            {tag && (
                <div className="absolute top-4 left-4 z-10">
                    <Badge label={tag} variant="green" />
                </div>
            )}

            <div className="relative h-64 w-full overflow-hidden md:h-auto md:w-1/2">
                <div className="absolute inset-0 z-10 bg-primary/10 transition-colors duration-500 group-hover:bg-transparent" />
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-1 flex-col justify-center bg-surface-alt p-8 transition-colors duration-500 group-hover:bg-accent-light/10">
                <div className="mb-4">
                    <h3 className="mb-2 text-2xl font-bold text-text-main transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                        {name}
                    </h3>
                    <p className="text-base leading-relaxed text-text-light md:text-lg">
                        {description}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-bold text-text-main">{price}</span>
                    <button className="text-sm font-bold text-primary transition-all hover:underline">
                        Details →
                    </button>
                </div>
            </div>
        </div>
    );
}

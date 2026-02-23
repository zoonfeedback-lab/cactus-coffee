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
        <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row h-full">
            {tag && (
                <div className="absolute top-4 left-4 z-10">
                    <Badge label={tag} variant="green" />
                </div>
            )}

            <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-primaryBrown/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="flex-1 p-8 flex flex-col justify-center bg-surfaceLight group-hover:bg-accentCream/30 transition-colors duration-500">
                <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-primaryBrown mb-2 group-hover:translate-x-1 transition-transform duration-300">
                        {name}
                    </h3>
                    <p className="text-textLight text-base md:text-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-bold text-primaryBrown">{price}</span>
                    <button className="text-sm font-bold text-accentGreen hover:underline transition-all">
                        Details →
                    </button>
                </div>
            </div>
        </div>
    );
}

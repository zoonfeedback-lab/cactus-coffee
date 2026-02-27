'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [mainImageIndex, setMainImageIndex] = useState(0);

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Main Featured Image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-[#E8DCC2] rounded-3xl overflow-hidden shadow-sm border border-border">
                {images.length > 0 ? (
                    <Image
                        src={images[mainImageIndex]}
                        alt={`${productName} - View ${mainImageIndex + 1}`}
                        fill
                        className="object-cover object-center transition-all duration-500 hover:scale-[1.02]"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-light/50">
                        No Image Available
                    </div>
                )}
            </div>

            {/* Thumbnails (Only show if multiple images exist) */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3 sm:gap-4">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setMainImageIndex(idx)}
                            className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 ${mainImageIndex === idx
                                    ? 'border-[#6A945B] shadow-md scale-[1.02]'
                                    : 'border-transparent opacity-70 hover:opacity-100 hover:border-gray-200 bg-gray-100'
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 25vw, 15vw"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

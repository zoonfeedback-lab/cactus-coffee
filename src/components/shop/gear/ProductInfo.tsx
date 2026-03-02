'use client';

import React from 'react';
import { ShoppingBag, ChevronRight, Layers, Coffee, SlidersHorizontal, VolumeX, Droplet } from 'lucide-react';
import type { GearProduct } from '@/lib/gear-data';

// Simple icon mapper based on string names returned from data
const getIcon = (iconStr: string) => {
    switch (iconStr) {
        case 'Layers': return <Layers size={18} />;
        case 'Coffee': return <Coffee size={18} />;
        case 'SlidersHorizontal': return <SlidersHorizontal size={18} />;
        case 'VolumeX': return <VolumeX size={18} />;
        case 'Droplet': return <Droplet size={18} />;
        default: return <ChevronRight size={18} />;
    }
};

interface ProductInfoProps {
    product: GearProduct;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    return (
        <div className="flex flex-col w-full">
            {/* Header Area */}
            <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6A945B] mb-2 block">
                    {product.category === 'Machines' ? 'Professional Series' : product.category}
                </span>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111] leading-tight mb-4">
                    {product.name}
                </h1>

                <div className="flex flex-wrap items-center gap-4">
                    <span className="text-2xl font-bold text-text-main">
                        <span className="text-sm mr-1 opacity-70 italic font-normal">PKR</span>
                        {product.price}
                    </span>
                    {product.inStock && (
                        <span className="px-3 py-1 bg-[#fcf2ea] text-[#d48152] text-[10px] font-bold uppercase tracking-widest rounded-full">
                            In Stock
                        </span>
                    )}
                </div>
            </div>

            {/* Description */}
            <div className="mb-8 prose prose-sm text-text-light">
                <p className="leading-relaxed">
                    {product.description}
                </p>
            </div>

            {/* Highlighted Feature Badges / Mini Grid */}
            {product.features && product.features.length > 0 && (
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 mb-8">
                    {product.features.map((feature, idx) => (
                        <div key={idx} className="bg-[#fcfcfc] border border-border rounded-xl p-4 flex flex-col justify-center">
                            <div className="text-[#6A945B] mb-2">
                                {getIcon(feature.icon)}
                            </div>
                            <span className="text-[9px] font-bold text-text-light uppercase tracking-widest mb-1">
                                {feature.label}
                            </span>
                            <span className="text-sm font-semibold text-text-main">
                                {feature.value}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#6A945B] hover:bg-[#5b804d] text-white font-bold py-4 px-6 rounded-full transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5">
                    <ShoppingBag size={18} />
                    Add to Cart
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-text-main border-2 border-text-main font-bold py-4 px-6 rounded-full transition-colors text-sm">
                    Buy Now
                </button>
            </div>

            {/* Tech Specs */}
            {product.specs && product.specs.length > 0 && (
                <div className="pt-8 border-t border-border mt-auto">
                    <h3 className="font-heading text-lg font-bold text-text-main mb-6">
                        Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {product.specs.map((spec, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border/50 gap-1 sm:gap-4">
                                <span className="text-xs text-[#8aa6b6] font-medium">{spec.label}</span>
                                <span className="text-xs font-semibold text-text-main sm:text-right">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

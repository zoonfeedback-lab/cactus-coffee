'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { gearProducts, GEAR_CATEGORIES } from '@/lib/gear-data';
import { ShoppingCart, ListFilter } from 'lucide-react';

export default function GearProductGrid() {
    const [activeCategory, setActiveCategory] = useState('All Gear');

    // Filter products
    const filteredProducts = gearProducts.filter((product) => {
        if (activeCategory === 'All Gear') return true;
        return product.category === activeCategory;
    });

    return (
        <section id="collections" className="bg-[#fcfaf8] py-16 sm:py-24" aria-labelledby="products-heading">
            <Container>
                {/* Filters & Sorting */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">

                    {/* Categories Pill List */}
                    <div className="flex flex-wrap items-center gap-2">
                        {GEAR_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${activeCategory === category
                                        ? 'bg-[#6A945B] text-white border-[#6A945B]'
                                        : 'bg-white text-text-light border-border hover:border-[#6A945B]/50 hover:text-[#6A945B]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Simple Sort Dropdown Mimic */}
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-light cursor-pointer hover:text-[#6A945B] transition-colors bg-white px-4 py-2 rounded-full border border-border">
                        <ListFilter size={14} className="opacity-70" />
                        <span>Sort: Featured</span>
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {filteredProducts.map((product, index) => (
                            <AnimateOnScroll
                                key={product.id}
                                animation="fade-up"
                                delay={index * 100}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg hover:border-[#6A945B]/30 transition-all duration-500"
                            >
                                {/* Image Container */}
                                <Link href={`/shop/gear/${product.slug}`} className="block relative w-full h-72 sm:h-80 bg-[#141414] overflow-hidden">
                                    {/* Badges */}
                                    {product.badges.length > 0 && (
                                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                            {product.badges.map(badge => (
                                                <span key={badge} className="px-2.5 py-1 bg-[#6A945B]/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest rounded-md border border-white/20">
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </Link>

                                {/* Content */}
                                <div className="flex flex-col flex-grow p-6 sm:p-7">
                                    <div className="mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#6A945B] mb-2 block">
                                            {product.category}
                                        </span>
                                        <Link href={`/shop/gear/${product.slug}`}>
                                            <h3 className="font-heading text-lg font-bold text-text-main line-clamp-1 group-hover:text-[#6A945B] transition-colors">
                                                {product.name}
                                            </h3>
                                        </Link>
                                        <p className="text-xs text-text-light mt-1.5 line-clamp-1">
                                            {product.subtitle}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 flex flex-col gap-4">
                                        {/* Price */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-text-main">
                                                <span className="text-xs mr-1 opacity-70 italic">PKR</span>
                                                {product.price}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-text-light/50 line-through">
                                                    PKR {product.originalPrice}
                                                </span>
                                            )}
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button className="w-full flex items-center justify-center gap-2 bg-[#6A945B] hover:bg-[#5b804d] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed">
                                            <ShoppingCart size={16} />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-text-light">No products found in this category.</p>
                    </div>
                )}
            </Container>
        </section>
    );
}

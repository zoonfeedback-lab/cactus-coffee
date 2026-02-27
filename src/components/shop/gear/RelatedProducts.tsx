import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { gearProducts } from '@/lib/gear-data';
import { ArrowRight } from 'lucide-react';

export default function RelatedProducts() {
    // Just grab 4 specific accessories for the "Complete Your Setup" section 
    // to match the mockup (Niche Zero, Hario V60 Ceramic, Milk Pitcher, Acaia Scales)
    const highlightSlugs = [
        'niche-zero-grinder',
        'hario-v60-ceramic-set',
        'precision-milk-pitcher',
        'acaia-lunar-scales'
    ];

    const related = highlightSlugs.map(slug => gearProducts.find(p => p.slug === slug)).filter(Boolean);

    if (related.length === 0) return null;

    return (
        <section className="bg-bg py-16 sm:py-24 border-t border-border/50">
            <Container>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#d48152] mb-2 block">
                            Barista Essentials
                        </span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-text-main">
                            Complete Your Setup
                        </h2>
                    </div>

                    <Link
                        href="/shop/gear"
                        className="flex items-center gap-2 text-sm font-bold text-[#6A945B] hover:text-[#5b804d] transition-colors group"
                    >
                        View all accessories
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {related.map((product, idx) => (
                        <AnimateOnScroll
                            key={product!.id}
                            animation="fade-up"
                            delay={idx * 100}
                            className="group flex flex-col"
                        >
                            <Link href={`/shop/gear/${product!.slug}`} className="block relative aspect-square bg-[#E8DCC2] rounded-3xl overflow-hidden mb-4 shadow-sm border border-border/40 hover:border-[#6A945B]/30 transition-colors">
                                <Image
                                    src={product!.images[0]}
                                    alt={product!.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </Link>

                            <div className="px-2">
                                <Link href={`/shop/gear/${product!.slug}`}>
                                    <h3 className="font-heading text-sm font-bold text-text-main line-clamp-1 group-hover:text-[#6A945B] transition-colors mb-1">
                                        {product!.name}
                                    </h3>
                                </Link>
                                <p className="text-xs text-text-light/70 font-medium">
                                    PKR {product!.price}
                                </p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

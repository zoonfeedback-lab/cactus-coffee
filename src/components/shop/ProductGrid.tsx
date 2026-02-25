import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { ShoppingCart, SlidersHorizontal } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Desert Sun Roast',
        type: 'Whole Bean • 12oz Bag',
        price: 18.00,
        image: '/images/shop/desert_sun_roast.png',
        roast: 'LIGHT ROAST',
        tags: ['Floral', 'Citrus', 'Honey'],
        bgColor: 'bg-[#F9F9F4]' // Light off-white for product card
    },
    {
        id: 2,
        name: 'Midnight Oasis',
        type: 'Ground • 12oz Bag',
        price: 22.00,
        image: '/images/shop/midnight_oasis.png',
        roast: 'DARK ROAST',
        tags: ['Smoky', 'Cacao', 'Earth'],
        bgColor: 'bg-[#F9F9F4]'
    },
    {
        id: 3,
        name: 'Prickly Pear Blend',
        type: 'Whole Bean • 12oz Bag',
        price: 20.00,
        image: '/images/shop/prickly_pear.png',
        roast: 'PREMIUM ROAST',
        tags: ['Nutty', 'Sweet', 'Berry'],
        bgColor: 'bg-[#F9F9F4]'
    }
];

export default function ProductGrid() {
    return (
        <section id="discover" className="py-20 sm:py-28 bg-[#FDFDF9]">
            <Container>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <h2 className="font-heading text-3xl font-extrabold text-[#0F2942] sm:text-4xl">
                        Discover Your Roast
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-2">
                        <button className="rounded-full bg-[#7CA16C] px-5 py-2 text-xs font-semibold text-white transition-colors duration-300">
                            All Roasts
                        </button>
                        <button className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#516E8B] border border-gray-200 transition-colors duration-300 hover:border-[#7CA16C]">
                            Light Roast
                        </button>
                        <button className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#516E8B] border border-gray-200 transition-colors duration-300 hover:border-[#7CA16C]">
                            Medium Roast
                        </button>
                        <button className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#516E8B] border border-gray-200 transition-colors duration-300 hover:border-[#7CA16C]">
                            Dark Roast
                        </button>
                        <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold flex items-center gap-2 text-[#0F2942] border border-gray-200 transition-colors duration-300 hover:border-[#7CA16C] ml-auto md:ml-2">
                            <SlidersHorizontal size={14} /> Sort
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <AnimateOnScroll
                            key={product.id}
                            animation="fade-up"
                            delay={index * 100}
                            duration={700}
                        >
                            <div className={`rounded-[32px] overflow-hidden ${product.bgColor} p-6 shadow-sm border border-black/5 hover:shadow-xl transition-shadow duration-500 h-full flex flex-col`}>

                                {/* Image Container */}
                                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-6 bg-gradient-to-b from-[#E7E7E0] to-[#F1F1E8]">
                                    {/* Roast Badge */}
                                    <div className="absolute top-4 left-4 z-10 bg-[#7CA16C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                                        {product.roast}
                                    </div>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-8 transition-transform duration-700 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content Container */}
                                <div className="flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className="font-heading text-xl font-bold text-[#0F2942]">
                                                {product.name}
                                            </h3>
                                            <span className="text-[#6D9359] font-bold text-lg">
                                                ${product.price.toFixed(2)}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-[#88A1B5] mb-4">
                                            {product.type}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {product.tags.map(tag => (
                                                <span key={tag} className="text-[11px] font-medium text-[#688E59] bg-[#EAF2E7] px-3 py-1 rounded-full border border-[#D5E6CF]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="w-full bg-[#0B1A2A] hover:bg-[#1A324E] text-white rounded-full py-4 px-6 font-semibold flex items-center justify-center gap-2 transition-colors duration-300">
                                        <ShoppingCart size={18} />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

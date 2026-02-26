import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const newArrivals = [
    {
        id: 1,
        name: 'Desert Bloom Roast',
        description: 'Notes of jasmine, honey, and sun-ripened citrus fruits.',
        price: 'PKR 950',
        image: '/images/new-arrivals/desert_bloom.png',
        isNew: true,
    },
    {
        id: 2,
        name: 'Agave Infused Cold Brew',
        description: 'A smooth 18-hour steep with organic blue agave nectar.',
        price: 'PKR 950',
        image: '/images/new-arrivals/agave_cold_brew.png',
        isNew: true,
    },
    {
        id: 3,
        name: 'Midnight Oasis Blend',
        description: 'Dark, smoky roasting profile with hints of vanilla bean.',
        // We couldn't fetch the third image due to capacity, using a placeholder image from the visit page for now
        image: '/images/hero-section pic.jfif',
        price: 'PKR 950',
        isNew: true,
    }
];

export default function NewArrivalsSection() {
    return (
        <section className="bg-surface py-16 sm:py-24" aria-labelledby="new-arrivals-heading">
            <Container>
                {/* Section Header */}
                <AnimateOnScroll animation="fade-up" className="text-center mb-12">
                    <h2
                        id="new-arrivals-heading"
                        className="font-heading text-3xl font-extrabold text-text-main sm:text-4xl mb-4"
                    >
                        New Arrivals
                    </h2>
                    <p className="text-text-light text-sm sm:text-base max-w-2xl mx-auto">
                        Discover our latest seasonal finds and limited edition roasts.
                    </p>
                </AnimateOnScroll>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {newArrivals.map((item, index) => (
                        <AnimateOnScroll
                            key={item.id}
                            animation="fade-up"
                            delay={index * 100}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                                {item.isNew && (
                                    <div className="absolute top-4 left-4 z-10 bg-[#7CA16C] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        NEW
                                    </div>
                                )}
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-text-main mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-text-light italic mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="font-bold text-[#7CA16C] text-lg">
                                        {item.price}
                                    </span>
                                    <button className="bg-text-main text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors">
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

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Coffee } from 'lucide-react';

export default function ShopBeansSection() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24" aria-labelledby="shop-beans-heading">
            <Container>
                <AnimateOnScroll animation="scale" duration={700}>
                    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 rounded-3xl border border-border bg-surface p-6 shadow-sm md:flex-row md:p-8 lg:p-12 overflow-hidden">

                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h2
                                id="shop-beans-heading"
                                className="mb-4 font-heading text-3xl font-bold text-text-main sm:text-4xl"
                            >
                                Shop Our Beans (Dr. Bean)
                            </h2>
                            <p className="mb-8 max-w-xl text-base leading-relaxed text-text-light mx-auto md:mx-0">
                                Take the Cactus Coffee experience home with you. Explore our curated selection of house-roasted beans, carefully sourced and perfected for your daily brew.
                            </p>

                            <Link
                                href="/shop"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-primary px-8 py-4 text-base font-semibold text-primary transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:border-[#A8C5A0] hover:before:translate-x-0"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Coffee className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                                    Explore Dr. Bean
                                </span>
                            </Link>
                        </div>

                        {/* Side Image */}
                        <div className="relative h-64 w-full flex-shrink-0 overflow-hidden rounded-2xl md:h-80 md:w-2/5 lg:w-1/2">
                            <Image
                                src="/images/coffee/coffee-beans-shop.png"
                                alt="Freshly roasted Dr. Bean coffee"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

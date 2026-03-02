import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Droplets, Sun, Sparkles, ArrowRight } from 'lucide-react';

export default function FeaturedPlant() {
    return (
        <section className="bg-surface-alt py-16 sm:py-20">
            <Container>
                <AnimateOnScroll animation="scale" duration={700}>
                    <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-border group hover:shadow-lg transition-shadow duration-500">
                        {/* Left: Plant Image */}
                        <div className="relative w-full md:w-[50%] h-72 sm:h-80 md:h-[420px] overflow-hidden bg-[#e8f0e4]">
                            <Image
                                src="/images/plants/cactus-image.jfif"
                                alt="Monstera Deliciosa"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <span className="absolute top-5 left-5 z-10 px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                                Featured
                            </span>
                        </div>

                        {/* Right: Content */}
                        <div className="flex-1 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">
                                Premium Collection
                            </span>
                            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-main leading-tight mb-4 tracking-tight">
                                Monstera Deliciosa
                            </h2>
                            <p className="text-text-light text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                                The iconic Swiss cheese plant — a statement piece for any living space with its dramatic split leaves. Easy to care for and always in style.
                            </p>

                            {/* Care Info */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 text-xs text-text-light">
                                    <Sparkles size={14} className="text-primary" />
                                    <span className="font-semibold">Beginner Friendly</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-text-light">
                                    <Sun size={14} className="text-amber-500" />
                                    <span>Indirect Light</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-text-light">
                                    <Droplets size={14} className="text-blue-400" />
                                    <span>Weekly Watering</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <span className="text-2xl font-extrabold text-text-main">
                                    <span className="text-sm font-normal italic opacity-70 mr-1">PKR</span>4,500
                                </span>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-7 rounded-full transition-all duration-300 text-sm hover:shadow-md hover:-translate-y-0.5"
                                >
                                    View Details <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

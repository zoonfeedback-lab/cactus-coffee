import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

export default function GearHero() {
    return (
        <section className="bg-surface py-8 lg:py-12">
            <Container>
                <div className="flex flex-col md:flex-row bg-surface-alt rounded-3xl overflow-hidden shadow-sm border border-border">
                    {/* Left: Image */}
                    <div className="relative h-64 md:h-96 lg:h-[450px] w-full md:w-1/2 overflow-hidden bg-[#1A1A1A]">
                        <Image
                            src="/images/shop/gear/lelit-bianca-1.png"
                            alt="Lelit Bianca Espresso Machine"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            priority
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6A945B] bg-[#f0f9f0] px-3 py-1 rounded-full border border-[#6A945B]/20">
                                Premium Selection
                            </span>
                        </div>

                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111] leading-[1.1] tracking-tight mb-6">
                            Professional<br />
                            <span className="text-[#6A945B]">Coffee Gear</span>
                        </h1>

                        <p className="text-text-light/80 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                            Elevate your home brewing experience with our curated selection of high-end tools, from
                            <strong className="text-text-main font-semibold mx-1">Italian espresso machines</strong>
                            to precision
                            <strong className="text-text-main font-semibold mx-1">manual grinders.</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#collections"
                                className="inline-flex justify-center items-center gap-2 bg-[#6A945B] hover:bg-[#5b804d] text-white font-bold py-3.5 px-8 rounded-full transition-colors text-sm"
                            >
                                Shop Collections <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="#specials"
                                className="inline-flex justify-center items-center gap-2 bg-[#f0f9f0] hover:bg-[#e2f0e2] text-[#333] font-bold py-3.5 px-8 rounded-full transition-colors text-sm"
                            >
                                View Specials
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

import React from 'react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Check } from 'lucide-react';

export default function CactusRewardsSection() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24" aria-labelledby="rewards-heading">
            <Container>
                <AnimateOnScroll animation="scale" duration={700} className="flex justify-center">
                    <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm max-w-[420px] w-full text-center">
                        <h2 id="rewards-heading" className="font-heading text-2xl font-bold text-text-main mb-2">
                            Cactus Rewards
                        </h2>
                        <p className="text-sm text-text-light mb-8">
                            Buy 9 coffees and get 1 free
                        </p>

                        <div className="grid grid-cols-5 gap-3 sm:gap-4 justify-items-center mb-6">
                            {/* 7 Filled Stamps */}
                            {[...Array(7)].map((_, i) => (
                                <div key={`filled-${i}`} className="w-11 h-11 sm:w-12 sm:h-12 bg-[#6A945B] rounded-full flex items-center justify-center text-white">
                                    <Check size={18} strokeWidth={3} className="opacity-90" />
                                </div>
                            ))}
                            {/* 3 Empty Stamps */}
                            {[...Array(3)].map((_, i) => (
                                <div key={`empty-${i}`} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#6A945B] bg-white"></div>
                            ))}
                        </div>

                        <div className="w-full relative pt-4">
                            <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#6A945B] w-[70%] rounded-full"></div>
                            </div>
                            <p className="text-[11px] text-text-light mt-4 font-medium tracking-wide">
                                7 / 10 Stamps Collected
                            </p>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

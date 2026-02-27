'use client';

import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function GearNewsletter() {
    return (
        <section className="bg-surface py-16 sm:py-24 overflow-hidden">
            <Container>
                <AnimateOnScroll animation="scale" duration={600}>
                    <div className="w-full max-w-5xl mx-auto bg-surface-alt rounded-[2.5rem] p-10 sm:p-14 lg:p-20 border border-[#eee]/50 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6A945B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                        {/* Text */}
                        <div className="flex-1 text-center md:text-left relative z-10 w-full">
                            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111] mb-4 tracking-tight">
                                Master your craft.
                            </h2>
                            <p className="text-text-light text-sm sm:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
                                Get exclusive brewing guides and early access to limited edition coffee gear releases.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="w-full md:max-w-md relative z-10">
                            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 bg-white border border-gray-200 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-[#6A945B]/50 transition-all text-sm placeholder:text-gray-400"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-[#111] hover:bg-black text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

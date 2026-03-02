'use client';

import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function BlogNewsletter() {
    return (
        <section className="bg-surface py-16 sm:py-24 overflow-hidden">
            <Container>
                <AnimateOnScroll animation="scale" duration={600}>
                    <div className="w-full max-w-4xl mx-auto bg-primary-dark rounded-[2.5rem] p-10 sm:p-14 lg:p-16 relative overflow-hidden text-center">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3 block relative z-10">
                            Newsletter
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight relative z-10">
                            Stay Inspired
                        </h2>
                        <p className="text-white/60 text-sm sm:text-base mb-8 max-w-md mx-auto relative z-10">
                            Get weekly coffee &amp; creativity insights delivered straight to your inbox.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3.5 outline-none focus:ring-2 focus:ring-accent/50 text-white placeholder:text-white/30 text-sm transition-all"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm whitespace-nowrap shadow-md hover:shadow-lg"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

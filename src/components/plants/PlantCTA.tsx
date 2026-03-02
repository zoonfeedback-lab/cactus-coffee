import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { MapPin, ShoppingBag, Mail } from 'lucide-react';

export default function PlantCTA() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={600}>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            Get Started
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight mb-4">
                            Bring Nature Into<br />Your Space.
                        </h2>
                        <p className="text-text-light text-sm sm:text-base leading-relaxed">
                            Whether it&apos;s a single desk succulent or a full café makeover — we&apos;re here to help you go green.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/visit"
                            className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <MapPin size={16} /> Visit Our Café
                        </Link>
                        <Link
                            href="/plants"
                            className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 text-sm hover:bg-primary/5"
                        >
                            <ShoppingBag size={16} /> Shop Plants
                        </Link>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 bg-surface border border-border text-text-main font-bold py-4 px-8 rounded-full transition-all duration-300 text-sm hover:border-primary/40 hover:text-primary"
                        >
                            <Mail size={16} /> Contact for Bulk Orders
                        </Link>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

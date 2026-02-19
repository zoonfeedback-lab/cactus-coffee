import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import MenuItem from '@/components/ui/MenuItem';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { menuItems } from '@/lib/data';

export default function CafeSpecials() {
    return (
        <section
            className="bg-primary-dark py-16 sm:py-24"
            aria-labelledby="cafe-specials-heading"
        >
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Café Specials"
                        subtitle="Handcrafted beverages made with the finest ethically-sourced ingredients."
                        className="[&_h2]:text-white [&_p]:text-white/60"
                    />
                </AnimateOnScroll>

                <div className="grid gap-4 sm:grid-cols-2">
                    {menuItems.map((item, index) => (
                        <AnimateOnScroll key={item.id} animation="fade-up" delay={index * 100}>
                            <MenuItem item={item} />
                        </AnimateOnScroll>
                    ))}
                </div>

                <AnimateOnScroll animation="fade" delay={400}>
                    <div className="mt-10 text-center">
                        <Link
                            href="/cafe"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-accent hover:bg-white/10"
                        >
                            View Full Menu
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

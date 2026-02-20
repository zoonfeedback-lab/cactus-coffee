import Link from 'next/link';
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
                {/* Centered heading + subtitle */}
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        title="Café Specials"
                        subtitle="Handcrafted beverages made with the finest ethically-sourced ingredients."
                        align="center"
                        className="[&_h2]:text-white [&_p]:text-white/60"
                    />
                </AnimateOnScroll>

                {/* Menu list */}
                <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-1">
                    {menuItems.map((item, index) => (
                        <AnimateOnScroll key={item.id} animation="fade-up" delay={index * 100}>
                            <MenuItem item={item} />
                        </AnimateOnScroll>
                    ))}
                </div>

                {/* Centered button with same sweep animation */}
                <AnimateOnScroll animation="fade-up" delay={500}>
                    <div className="mt-10 text-center">
                        <Link
                            href="/cafe"
                            className="relative inline-block overflow-hidden rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-[#A8C5A0] before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0"
                        >
                            <span className="relative z-10">View Full Menu</span>
                        </Link>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

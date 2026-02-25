import type { Metadata } from 'next';
import Hero from '@/components/coffee/Hero';
import TodaysSpecial from '@/components/coffee/FeaturedSpecials';
import FullMenu from '@/components/coffee/MenuSection';
import ShopBeansSection from '@/components/coffee/ShopBeansSection';
import TestimonialSection from '@/components/coffee/PhilosophySection';

export const metadata: Metadata = {
    title: 'Coffee Menu | Cactus Coffee',
    description:
        'Explore our full coffee menu — espresso, lattes, macchiatos, and more. Hand-roasted specialty beans served in Mandian, Abbottabad.',
};

export default function CoffeePage() {
    return (
        <main className="min-h-screen bg-bg">
            {/* Hero Section */}
            <Hero />

            {/* Today's Special — one item, centered, larger */}
            <TodaysSpecial />

            {/* Full Menu — categorized like the physical menu */}
            <FullMenu />

            {/* Shop Beans Section */}
            <ShopBeansSection />

            {/* Testimonial / Quote */}
            <TestimonialSection />
        </main>
    );
}

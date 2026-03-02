import type { Metadata } from 'next';
import GearHero from '@/components/shop/gear/GearHero';
import GearProductGrid from '@/components/shop/gear/GearProductGrid';
import GearNewsletter from '@/components/shop/gear/GearNewsletter';

export const metadata: Metadata = {
    title: 'Professional Coffee Gear | Cactus Coffee',
    description: 'Elevate your home brewing experience with our curated selection of high-end tools, from Italian espresso machines to precision manual grinders.',
};

export default function GearShopPage() {
    return (
        <main className="min-h-screen bg-surface">
            {/* Split Hero Banner */}
            <GearHero />

            {/* Categorized Product Grid */}
            <GearProductGrid />

            {/* Newsletter CTA */}
            <GearNewsletter />
        </main>
    );
}

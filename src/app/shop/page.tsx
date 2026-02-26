import type { Metadata } from 'next';
import ShopHero from '@/components/shop/ShopHero';
import ProductGrid from '@/components/shop/ProductGrid';
import ProcessSection from '@/components/shop/ProcessSection';

export const metadata: Metadata = {
    title: 'Explore Dr. Bean | Cactus Coffee',
    description: 'Experience the essence of the desert in every cup with our signature roasts. Small-batch crafted for the ultimate home brewing experience.',
};
// Bean shop page

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-[#FDFDF9]">
            {/* The background color #FDFDF9 matches the soft white/cream background of the mockup */}
            <ShopHero />

            <ProductGrid />

            <ProcessSection />
        </main>
    );
}

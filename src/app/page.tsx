import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedArt from '@/components/sections/FeaturedArt';
import PopularPlants from '@/components/sections/PopularPlants';
import CafeSpecials from '@/components/sections/CafeSpecials';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Cactus Coffee | Art · Plants · Coffee — Abbottabad',
  description:
    'A curated space blending contemporary art, lush botanicals, and handcrafted specialty coffee. Visit us in Mandian, Abbottabad.',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CafeSpecials />
      <FeaturedArt />
      <PopularPlants />
      <CTASection />
    </main>
  );
}

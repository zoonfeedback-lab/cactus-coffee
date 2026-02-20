import HeroSection from '@/components/sections/HeroSection';
import FeaturedArt from '@/components/sections/FeaturedArt';
import PopularPlants from '@/components/sections/PopularPlants';
import CafeSpecials from '@/components/sections/CafeSpecials';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedArt />
      <PopularPlants />
      <CafeSpecials />
      <CTASection />
    </main>
  );
}

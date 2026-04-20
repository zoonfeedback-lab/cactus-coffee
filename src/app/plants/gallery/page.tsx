import type { Metadata } from 'next';
import PlantsHero from '@/components/plants/Hero';
import PlantSubNav from '@/components/layout/PlantSubNav';
import PlantGallery from '@/components/plants/PlantGallery';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export const metadata: Metadata = {
    title: 'Plant Gallery | Cactus Coffee',
    description: 'A visual journey of greenery inside Cactus Coffee — plants near coffee tables, on shelves, hanging above, and brightening our café.',
};

export default function PlantGalleryPage() {
    return (
        <main>
            <PlantsHero />
            <PlantSubNav />

            {/* Intro */}
            <section className="bg-surface py-16 sm:py-24 text-center">
                <Container>
                    <AnimateOnScroll animation="fade-up" duration={600}>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            Visual Stories
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-4">
                            Plants in the Café
                        </h2>
                        <p className="text-text-light text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                            A glimpse at how greenery transforms our café into a calm, creative sanctuary.
                        </p>
                    </AnimateOnScroll>
                </Container>
            </section>

            <PlantGallery />
        </main>
    );
}

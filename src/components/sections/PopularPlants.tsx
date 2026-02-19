import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import PlantCard from '@/components/ui/PlantCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { plants } from '@/lib/data';

export default function PopularPlants() {
    return (
        <section className="py-16 sm:py-24" aria-labelledby="popular-plants-heading">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <SectionTitle
                        label="Available In-Store"
                        title="Popular Plants"
                        subtitle="Bring nature home with our curated selection of indoor plants, carefully sourced and nurtured."
                    />
                </AnimateOnScroll>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {plants.map((item, index) => (
                        <AnimateOnScroll key={item.id} animation="fade-up" delay={index * 100}>
                            <PlantCard item={item} />
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

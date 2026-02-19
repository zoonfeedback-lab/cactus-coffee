import Container from '@/components/ui/Container';
import FeatureCard from '@/components/ui/FeatureCard';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { features } from '@/lib/data';

export default function Features() {
    return (
        <section
            className="bg-surface-alt py-16 sm:py-24"
            aria-labelledby="features-heading"
        >
            <Container>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, index) => (
                        <AnimateOnScroll key={item.id} animation="fade-up" delay={index * 150} className="h-full">
                            <FeatureCard item={item} />
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

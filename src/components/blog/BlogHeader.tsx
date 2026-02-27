import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function BlogHeader() {
    return (
        <section className="bg-surface py-16 sm:py-24 text-center">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={600}>
                    <div className="max-w-2xl mx-auto">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-4 block">
                            Stories &amp; Insights
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight mb-6 leading-[1.1]">
                            The Cactus Journal
                        </h1>
                        <p className="text-text-light text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
                            Coffee education, brewing guides, behind-the-scenes stories, artist spotlights, event recaps, and the creative culture that makes Cactus Coffee unique.
                        </p>
                    </div>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

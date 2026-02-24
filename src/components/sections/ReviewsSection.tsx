import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Ibrahim Shafqat Naveed",
        role: "Local Artist",
        content: "Cactus Coffee is my absolute favorite spot in Abbottabad. The vibrant plants and incredible art create such an inspiring atmosphere. And their V60 pour over is unmatched!",
        rating: 5,
    },
    {
        name: "Zain Ahmed",
        role: "Student",
        content: "A beautiful hidden gem. The aesthetic is so calming and the staff is incredibly friendly. I love coming here to study and enjoy a piece of their chocolate cake.",
        rating: 4,
    },
    {
        name: "Waqas Tariq",
        role: "Plant Enthusiast",
        content: "Not only is the coffee fantastic, but their plant selection is amazing! I bought a beautiful Monstera here and got great care tips from the barista. A truly unique cafe.",
        rating: 3,
    }
];

export default function ReviewsSection() {
    return (
        <section className="bg-surface py-20 sm:py-32">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-16 text-center">
                        <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                            Testimonials
                        </span>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            What Our Guests Say
                        </h2>
                    </div>
                </AnimateOnScroll>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, i) => (
                        <AnimateOnScroll key={i} animation="fade-up" delay={i * 150}>
                            <div
                                className="flex flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/30"
                            >
                                <div className="mb-4 flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                                    ))}
                                </div>
                                <div className="mb-6">
                                    <div className="font-heading font-bold text-text-main text-lg">{review.name}</div>
                                    <div className="text-sm text-text-light">{review.role}</div>
                                </div>
                                <blockquote className="flex-grow text-text-light leading-relaxed">
                                    "{review.content}"
                                </blockquote>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}


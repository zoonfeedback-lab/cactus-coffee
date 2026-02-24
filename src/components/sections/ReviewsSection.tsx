import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Rabee Habib",
        role: "1 review · 6 photos",
        content: "10/10. The best coffee bar in town. After living in Abottabad for an year and half and trying every coffee place I could, this is by far the best one I've come across. It's especially a good spot for studying/working. The cafe has a beautiful art gallery and decor. Good customer service and an overall pleasant experience.",
        rating: 5,
    },
    {
        name: "Rana Nofil",
        role: "1 review",
        content: "Never had coffee this smooth , flavourfull and pure anywhere in Pakistan . Coffee speacilisits !! The atmosphere is cozy , melodious and full of art , having canvases for you to paint and later displayed , having pets for a complete natural cohesive environment .",
        rating: 5,
    },
    {
        name: "Musafir",
        role: "2 reviews · 1 photo",
        content: "Cactus Coffee is a great spot in Abbottabad  for coffee lovers who enjoy a calm and welcoming atmosphere. The coffee is rich, smooth, and well balanced made with quality beans that you can truly taste in every sip. The café has a cozy vibe, perfect for relaxing, catching up with friends, or spending some quiet time alone.",
        rating: 5,
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


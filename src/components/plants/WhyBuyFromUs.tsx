import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { ShieldCheck, Heart, MapPin, MessageCircle } from 'lucide-react';

const reasons = [
    { icon: ShieldCheck, title: 'Hand-picked Quality', desc: 'Every plant is personally inspected for health and beauty before arriving at our shelves.' },
    { icon: Heart, title: 'Healthy Root Systems', desc: 'We guarantee strong, well-established roots so your plant thrives from day one.' },
    { icon: MapPin, title: 'Local Sourcing', desc: 'Supporting local nurseries and growers across Pakistan for a smaller carbon footprint.' },
    { icon: MessageCircle, title: 'Expert Advice', desc: 'Our team is always ready to help you pick the right plant and keep it thriving.' },
];

export default function WhyBuyFromUs() {
    return (
        <section className="bg-surface py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={600}>
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            Our Promise
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-4">
                            Why Buy From Us
                        </h2>
                        <p className="text-text-light text-sm leading-relaxed">
                            We bring the same care and quality to our plants as we do to our coffee.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((r, idx) => (
                        <AnimateOnScroll
                            key={r.title}
                            animation="fade-up"
                            delay={idx * 100}
                            className="bg-surface-alt rounded-2xl border border-border p-7 text-center hover:shadow-md hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                                <r.icon size={22} />
                            </div>
                            <h3 className="font-heading text-sm font-bold text-text-main mb-2">{r.title}</h3>
                            <p className="text-xs text-text-light leading-relaxed">{r.desc}</p>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

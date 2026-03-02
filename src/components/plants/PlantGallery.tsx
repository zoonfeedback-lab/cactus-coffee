import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const galleryImages = [
    { src: '/images/plants/cactus-image.jfif', alt: 'Plants near coffee table', span: 'col-span-2 row-span-2' },
    { src: '/images/plants/img-2.jfif', alt: 'Snake plant on shelf', span: '' },
    { src: '/images/plants/img-3.jfif', alt: 'Hanging plants in café', span: '' },
    { src: '/images/plants/img-4.jfif', alt: 'Customers enjoying plant corner', span: 'col-span-2' },
    { src: '/images/plants/img-5.jfif', alt: 'Potted plants on windowsill', span: '' },
];

export default function PlantGallery() {
    return (
        <section className="bg-surface-alt py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={600}>
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                            In Our Space
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-4">
                            Plants in the Café
                        </h2>
                        <p className="text-text-light text-sm leading-relaxed">
                            A glimpse at how greenery transforms our café into a calm, creative sanctuary.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Masonry Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
                    {galleryImages.map((img, idx) => (
                        <AnimateOnScroll
                            key={idx}
                            animation="fade-up"
                            delay={idx * 80}
                            className={`relative rounded-2xl overflow-hidden group ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

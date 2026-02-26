import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import type { StudentPhoto } from '@/lib/art-classes-data';

interface StudentGalleryProps {
    photos: StudentPhoto[];
}

export default function StudentGallery({ photos }: StudentGalleryProps) {
    return (
        <section className="bg-white py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            Inside the Studio
                        </h2>
                        <div className="mx-auto mt-3 h-0.5 w-16 bg-primary" />
                        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-light sm:text-base">
                            A glimpse into our art classes and the creative energy of our students.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                    {photos.map((photo, i) => (
                        <AnimateOnScroll key={photo.id} animation="fade-up" delay={i * 60}>
                            <div className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl">
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={photo.image}
                                        alt={photo.caption}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Caption overlay on hover */}
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <p className="p-4 text-sm font-medium text-white">
                                            {photo.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

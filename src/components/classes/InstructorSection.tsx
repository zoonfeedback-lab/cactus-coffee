import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const instructor = {
    name: 'Sir Khalid Khayam',
    role: 'Lead Instructor, Nigarkhana Art Gallery',
    bio: 'Sir Khalid Khayam is a classically trained visual artist with over 15 years of experience in painting, drawing, and calligraphy. A graduate of the National College of Arts, he has exhibited across Pakistan and mentored hundreds of aspiring artists. His teaching philosophy centres on building strong fundamentals while encouraging each student to discover their own creative voice.',
    image: '/images/exhibition/publo-picaso.jfif',
};

export default function InstructorSection() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left — Instructor bio */}
                    <AnimateOnScroll animation="fade-right">
                        <div>
                            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-[#A8C5A0]">
                                Meet Your Instructor
                            </span>
                            <h2 className="mb-2 font-heading text-3xl font-bold leading-tight text-text-main sm:text-4xl">
                                {instructor.name}
                            </h2>
                            <p className="mb-6 text-sm font-medium text-primary">
                                {instructor.role}
                            </p>
                            <p className="text-sm leading-relaxed text-text-light sm:text-base">
                                {instructor.bio}
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — Large photo */}
                    <AnimateOnScroll animation="fade-left" delay={200}>
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                            <Image
                                src={instructor.image}
                                alt={instructor.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

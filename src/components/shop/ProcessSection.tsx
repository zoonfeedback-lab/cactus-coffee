import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Sun, Leaf } from 'lucide-react';

export default function ProcessSection() {
    return (
        <section id="process" className="py-20 sm:py-28 bg-[#FDFDF9]">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2">
                        <AnimateOnScroll animation="fade-right" duration={700}>
                            <h2 className="mb-6 font-heading text-3xl font-extrabold text-[#0F2942] sm:text-4xl md:text-5xl">
                                Our Roasting Process
                            </h2>
                            <p className="mb-10 text-base leading-relaxed text-[#516E8B] custom-text-width">
                                Inspired by the harsh yet beautiful desert landscape, our roasting technique mimics the slow, intense heat of the Arizona sun. We use a custom-engineered air roaster that ensures every bean is heated evenly, preserving the delicate oils and unique flavor profiles of our high-altitude harvests.
                            </p>

                            <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
                                {/* Feature 1 */}
                                <div className="flex gap-4 items-start sm:w-1/2">
                                    <div className="flex-shrink-0 bg-[#E8F0E4] p-3 rounded-full text-[#7CA16C]">
                                        <Sun size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0F2942] mb-1">
                                            Solar-Assisted
                                        </h4>
                                        <p className="text-sm text-[#516E8B] leading-relaxed">
                                            Harnessing desert energy for sustainable roasting.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex gap-4 items-start sm:w-1/2">
                                    <div className="flex-shrink-0 bg-[#E8F0E4] p-3 rounded-full text-[#7CA16C]">
                                        <Leaf size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0F2942] mb-1">
                                            Small Batch
                                        </h4>
                                        <p className="text-sm text-[#516E8B] leading-relaxed">
                                            Never more than 20lbs roasted at once for quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right: Images */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px]">
                        <AnimateOnScroll animation="fade-left" duration={800} delay={200} className="absolute left-0 bottom-0 w-3/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-[#FDFDF9]">
                            <Image
                                src="/images/shop/process_machine.png"
                                alt="Modern coffee roasting machine"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 30vw"
                            />
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-left" duration={800} className="absolute right-0 top-0 w-[65%] h-[85%] rounded-3xl overflow-hidden shadow-xl z-10 border-4 border-[#FDFDF9]">
                            <Image
                                src="/images/shop/process_person.png"
                                alt="Artisan coffee roaster inspecting beans"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 30vw"
                            />
                        </AnimateOnScroll>
                    </div>

                </div>
            </Container>
        </section>
    );
}

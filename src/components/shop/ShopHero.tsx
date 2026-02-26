import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function ShopHero() {
    return (
        <section className="relative overflow-hidden bg-[#F4F5ED] pt-32 pb-16 sm:pt-40 sm:pb-24">
            {/* Background decorative shape */}
            <div className="absolute top-0 right-0 w-full h-full md:w-[60%] bg-[#E8F0E4] rounded-bl-[150px] md:rounded-bl-[300px] -z-10" />

            <Container>
                <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">

                    {/* Left: Image */}
                    <AnimateOnScroll animation="fade-right" duration={800} className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[450px]">
                        <Image
                            src="/images/shop/dr_bean_hero.png"
                            alt="Burlap sack full of roasted coffee beans"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </AnimateOnScroll>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2 lg:pl-4 xl:pl-8">
                        <AnimateOnScroll animation="fade-up" duration={800} delay={200}>
                            <h3 className="mb-4 text-xs font-bold tracking-widest text-[#7CA16C] uppercase bg-transparent">
                                THE MASTER ROASTER'S COLLECTION
                            </h3>
                            <h1 className="mb-6 font-heading text-4xl font-extrabold text-[#0F2942] sm:text-5xl md:text-6xl leading-[1.1]">
                                Dr. Beans -<br />Roast at Home
                            </h1>
                            <p className="mb-8 max-w-lg text-base leading-relaxed text-[#516E8B] md:text-lg">
                                Experience the essence of the desert in every cup with our signature roasts. Small-batch crafted for the ultimate home brewing experience.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    href="#discover"
                                    className="rounded-full bg-[#7CA16C] px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#688E59]"
                                >
                                    Shop All Beans
                                </Link>
                                <Link
                                    href="#process"
                                    className="rounded-full border-2 border-[#7CA16C] px-8 py-3.5 text-sm font-semibold text-[#7CA16C] transition-colors duration-300 hover:bg-[#7CA16C] hover:text-white"
                                >
                                    Learn Our Process
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    </div>

                </div>
            </Container>
        </section>
    );
}

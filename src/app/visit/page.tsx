import Image from 'next/image';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Visit Us | Cactus Coffee',
    description: 'Find us in the heart of the creative district. Join us for a unique confluence of inspiration, greenery, and the perfect cup.',
};

export default function VisitPage() {
    return (
        <main className="bg-bg text-text-main pb-24">
            {/* 1. Hero Section */}
            <section className="relative mt-28 flex min-h-[75vh] items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
                    alt="Interior of Cactus Coffee Cafe"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/40" />

                <Container className="relative z-10 text-center px-4">
                    <AnimateOnScroll animation="fade-down" duration={800}>
                        <h1 className="mb-4 font-heading text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                            More Than a Cafe
                        </h1>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade" delay={200} duration={800}>
                        <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl font-medium mb-8">
                            A curated sanctuary where specialty coffee, fine art, and lush botany converge to nourish the modern soul.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fade-up" delay={400} duration={800}>
                        <a
                            href="#our-roots"
                            className="inline-block rounded-full bg-[#39ff14] px-8 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105"
                        >
                            Explore the Space
                        </a>
                    </AnimateOnScroll>
                </Container>
            </section>

            {/* 2. Our Roots Section */}
            <section id="our-roots" className="py-20 md:py-32">
                <Container>
                    <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 lg:gap-24">
                        <AnimateOnScroll animation="fade-right">
                            <div className="max-w-xl">
                                <span className="mb-4 block text-xs font-bold tracking-widest text-[#22C55E] uppercase">
                                    OUR ROOTS
                                </span>
                                <h2 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-5xl">
                                    A Journey of Senses
                                </h2>
                                <div className="space-y-6 text-text-light text-lg">
                                    <p>
                                        Born from a desire to create a "Third Space" that feels like a living gallery, Art + Plants + Coffee was founded in 2020. We believe that your daily coffee ritual should be surrounded by life and inspiration.
                                    </p>
                                    <p>
                                        Every corner of our space is intentionally designed — from the rotating local artist features to the humidity-controlled plant nursery. It's a place where time slows down, and creativity grows alongside our rare Monstera Deliciosas.
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-left" delay={200}>
                            <div className="relative">
                                {/* Green accent shadow block */}
                                <div className="absolute -left-6 -bottom-6 h-48 w-48 rounded-3xl bg-[#bbf7d0]/50 -z-10" />
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1577083864036-7c9869151e06?auto=format&fit=crop&q=80&w=1200"
                                        alt="Gallery view inside the cafe"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </Container>
            </section>

            {/* 3. Features Grid Section */}
            <section className="bg-surface-alt py-20 md:py-32">
                <Container>
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight md:text-4xl text-text-main">
                            Why Art + Plants + Coffee?
                        </h2>
                        <p className="text-text-light text-lg">
                            The hybrid concept designed to inspire your daily ritual through three core pillars of aesthetic living.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <AnimateOnScroll animation="fade-up" delay={100}>
                            <div className="h-full rounded-3xl bg-surface p-10 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0fdf4] text-[#22C55E]">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <h3 className="mb-3 font-heading text-xl font-bold">Curated Art</h3>
                                <p className="text-text-light leading-relaxed">
                                    Rotating exhibitions from local contemporary artists, giving them a stage while providing you with ever-changing inspiration.
                                </p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-up" delay={200}>
                            <div className="h-full rounded-3xl bg-surface p-10 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0fdf4] text-[#22C55E]">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                </div>
                                <h3 className="mb-3 font-heading text-xl font-bold">Urban Jungle</h3>
                                <p className="text-text-light leading-relaxed">
                                    A hand-picked selection of rare and native tropical plants. From air-purifying giants to desktop succulents.
                                </p>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-up" delay={300}>
                            <div className="h-full rounded-3xl bg-surface p-10 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0fdf4] text-[#22C55E]">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <h3 className="mb-3 font-heading text-xl font-bold">Crafted Brews</h3>
                                <p className="text-text-light leading-relaxed">
                                    Ethically sourced beans roasted to perfection by local masters, served with precision and care in every cup.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </Container>
            </section>

            {/* 4. Visit Our Sanctuary Section (Location / Map) */}
            <section className="py-20 md:py-32">
                <Container>
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-24">
                        <AnimateOnScroll animation="fade-right">
                            <div className="max-w-lg">
                                <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-text-main md:text-5xl">
                                    Visit Our Sanctuary
                                </h2>
                                <p className="mb-12 text-lg text-text-light">
                                    We are located in the heart of the creative district, an easy walk from the main square.
                                </p>

                                <div className="space-y-8">
                                    {/* Location */}
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-[#22C55E]">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-text-main">Location</h3>
                                            <address className="not-italic text-text-light mt-1">
                                                Mandian<br />
                                                Abbottabad, KPK<br />
                                                Pakistan
                                            </address>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-[#22C55E]">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </div>
                                        <div className="w-full">
                                            <h3 className="font-bold text-text-main">Hours</h3>
                                            <div className="mt-1 space-y-1 text-text-light">
                                                <div className="flex justify-between w-full max-w-[240px]">
                                                    <span>Mon - Fri:</span> <span>7:00AM - 8:00PM</span>
                                                </div>
                                                <div className="flex justify-between w-full max-w-[240px]">
                                                    <span>Saturday:</span> <span>8:00AM - 9:00PM</span>
                                                </div>
                                                <div className="flex justify-between w-full max-w-[240px]">
                                                    <span>Sunday:</span> <span>9:00AM - 5:00PM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact */}
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-[#22C55E]">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-text-main">Contact</h3>
                                            <div className="mt-1 flex flex-col space-y-1 text-text-light">
                                                <a href="mailto:hello@cactuscoffee.com" className="hover:text-primary transition-colors">hello@cactuscoffee.com</a>
                                                <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="https://maps.google.com" target="_blank" rel="noreferrer"
                                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-text-main px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                    Get Directions
                                </a>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fade-left" delay={200} className="relative h-[500px] w-full overflow-hidden rounded-3xl bg-surface-alt border border-border">
                            <iframe
                                src="https://maps.google.com/maps?q=Mandian,%20Abbottabad,%20KPK,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 h-full w-full border-0 grayscale opacity-80 mix-blend-multiply hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                            ></iframe>

                            {/* Map marker overlay for absolute center style */}
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-col items-center select-none transform -translate-y-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#39ff14] text-black shadow-lg">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <div className="mt-2 rounded bg-white px-3 py-1 text-sm font-bold text-black shadow-md">
                                        We're here!
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </Container>
            </section>

            {/* 5. Follow the Journey (Instagram grid) */}
            <section className="mb-12">
                <div className="mb-8 text-center">
                    <h2 className="font-heading text-2xl font-bold tracking-tight">Follow the journey</h2>
                    <p className="text-text-light">@art_plants_coffee</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 bg-surface">
                    <a href="#" className="group relative aspect-square overflow-hidden bg-black">
                        <Image src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf" alt="Coffee Pour" fill className="object-cover opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" sizes="(max-width: 768px) 50vw, 20vw" />
                    </a>
                    <a href="#" className="group relative aspect-square overflow-hidden bg-black">
                        <Image src="https://images.unsplash.com/photo-1554118811-1e0d58224f24" alt="Plant closeup" fill className="object-cover opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" sizes="(max-width: 768px) 50vw, 20vw" />
                    </a>
                    <a href="#" className="group relative aspect-square overflow-hidden bg-black">
                        <Image src="https://images.unsplash.com/photo-1511920170033-f8396924c348" alt="Latte Art" fill className="object-cover opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" sizes="(max-width: 768px) 50vw, 20vw" />
                    </a>
                    <a href="#" className="group relative aspect-square overflow-hidden bg-black hidden md:block">
                        <Image src="https://images.unsplash.com/photo-1544816155-12df9643f363" alt="Artist painting" fill className="object-cover opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" sizes="(max-width: 768px) 50vw, 20vw" />
                    </a>
                    <a href="#" className="group relative aspect-square overflow-hidden bg-black hidden lg:block">
                        <Image src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65" alt="Store Front" fill className="object-cover opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" sizes="(max-width: 768px) 50vw, 20vw" />
                    </a>
                </div>
            </section>
        </main>
    );
}

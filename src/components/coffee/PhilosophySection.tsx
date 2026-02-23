import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function PhilosophySection() {
    return (
        <section className="py-24 bg-backgroundWarm/30">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="order-2 lg:order-1">
                        <span className="text-accentGreen font-bold uppercase tracking-widest text-sm mb-4 block">
                            Our Philosophy
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primaryBrown mb-8 leading-tight font-amberly">
                            Bean to Cup: <br />
                            <span className="text-primary italic">A Conscious Journey</span>
                        </h2>

                        <div className="space-y-6 text-textLight text-lg leading-relaxed">
                            <p>
                                At Cactus Coffee, we believe that exceptional coffee starts with respect for the land and the people who cultivate it. Our beans are sourced from small-scale sustainable farms that prioritize biodiversity and fair labor practices.
                            </p>
                            <p>
                                Every batch is hand-roasted in small quantities to unlock the unique DNA of the origin. Whether it's the citrus notes of an Ethiopian Yirgacheffe or the chocolatey depths of a Brazilian Cerrado, our roasting process is a tribute to the bean's heritage.
                            </p>
                            <p className="font-medium text-primaryBrown">
                                "We don't just brew coffee; we cultivate experiences that connect people to nature and art."
                            </p>
                        </div>

                        <div className="mt-10 flex gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-accentGreen">100%</h4>
                                <p className="text-sm text-textMuted uppercase tracking-wider font-bold">Ethically Sourced</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-accentGreen">Small</h4>
                                <p className="text-sm text-textMuted uppercase tracking-wider font-bold">Batch Roasted</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-accentGreen">Organic</h4>
                                <p className="text-sm text-textMuted uppercase tracking-wider font-bold">Certifications</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Ambiance Image Grid */}
                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg transform -rotate-2">
                                <Image
                                    src="/images/coffee/ambiance-1.jpg"
                                    alt="Coffee Roasting Process"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-64 mt-8 rounded-3xl overflow-hidden shadow-lg transform rotate-3">
                                <Image
                                    src="/images/coffee/ambiance-2.jpg"
                                    alt="Sustainable Coffee Farm"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-64 -mt-12 rounded-3xl overflow-hidden shadow-lg transform rotate-2">
                                <Image
                                    src="/images/coffee/ambiance-3.jpg"
                                    alt="Artisan Barista at Work"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg transform -rotate-1">
                                <Image
                                    src="/images/coffee/ambiance-4.jpg"
                                    alt="Coffee Shop Interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

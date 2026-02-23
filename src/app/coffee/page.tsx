'use client';

import React from 'react';
import Hero from '@/components/coffee/Hero';
import FeaturedSpecials from '@/components/coffee/FeaturedSpecials';
import CollectionSection from '@/components/coffee/MenuSection';
import TestimonialSection from '@/components/coffee/PhilosophySection';

export default function CoffeePage() {
    return (
        <main className="min-h-screen bg-bg">
            {/* Hero Section – unchanged */}
            <Hero />

            {/* Today's Specials – horizontal card carousel */}
            <FeaturedSpecials />

            {/* The Collection – filter tabs + circular image grid */}
            <CollectionSection />

            {/* Testimonial / Quote */}
            <TestimonialSection />
        </main>
    );
}

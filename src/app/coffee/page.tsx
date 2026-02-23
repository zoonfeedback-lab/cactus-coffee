'use client';

import React from 'react';
import Hero from '@/components/coffee/Hero';
import TodaysSpecial from '@/components/coffee/FeaturedSpecials';
import FullMenu from '@/components/coffee/MenuSection';
import TestimonialSection from '@/components/coffee/PhilosophySection';

export default function CoffeePage() {
    return (
        <main className="min-h-screen bg-bg">
            {/* Hero Section */}
            <Hero />

            {/* Today's Special — one item, centered, larger */}
            <TodaysSpecial />

            {/* Full Menu — categorized like the physical menu */}
            <FullMenu />

            {/* Testimonial / Quote */}
            <TestimonialSection />
        </main>
    );
}

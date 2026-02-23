'use client';

import React, { useState } from 'react';
import Hero from '@/components/coffee/Hero';
import CategoryTabs from '@/components/coffee/CategoryTabs';
import FeaturedSpecials from '@/components/coffee/FeaturedSpecials';
import MenuSection from '@/components/coffee/MenuSection';
import PhilosophySection from '@/components/coffee/PhilosophySection';

export default function CoffeePage() {
    const [activeCategory, setActiveCategory] = useState('all');

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <Hero />

            {/* Sticky Navigation Tabs */}
            <CategoryTabs
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* Featured Specials Section */}
            <FeaturedSpecials />

            {/* Full Menu Section */}
            <MenuSection activeCategory={activeCategory} />

            {/* Philosophy Section */}
            <PhilosophySection />
        </main>
    );
}

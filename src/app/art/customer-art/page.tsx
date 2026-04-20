import type { Metadata } from 'next';
import CustomerArtHero from '@/components/customer-art/CustomerArtHero';
import ArtSubNav from '@/components/layout/ArtSubNav';
import CustomerArtIntro from '@/components/customer-art/CustomerArtIntro';
import CustomerArtGallery from '@/components/customer-art/CustomerArtGallery';
import BehindTheMoments from '@/components/customer-art/BehindTheMoments';
import CustomerTestimonials from '@/components/customer-art/CustomerTestimonials';
import SubmitArtworkCTA from '@/components/customer-art/SubmitArtworkCTA';

export const metadata: Metadata = {
    title: 'Art by Customers | Cactus Coffee',
    description:
        'Explore the beautiful artwork created by our community during workshops, open art nights, and studio sessions at Cactus Coffee.',
};

export default function CustomerArtPage() {
    return (
        <main className="min-h-screen bg-white">
            <CustomerArtHero />

            <ArtSubNav />

            <CustomerArtIntro />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CustomerArtGallery />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <BehindTheMoments />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CustomerTestimonials />

            <SubmitArtworkCTA />
        </main>
    );
}

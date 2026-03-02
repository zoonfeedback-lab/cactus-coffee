import type { Metadata } from 'next';
import CommissionsHero from '@/components/commissions/CommissionsHero';
import ArtSubNav from '@/components/layout/ArtSubNav';
import CommissionsIntro from '@/components/commissions/CommissionsIntro';
import ArtTypesGrid from '@/components/commissions/ArtTypesGrid';
import HowItWorks from '@/components/commissions/HowItWorks';
import CommissionsPortfolio from '@/components/commissions/CommissionsPortfolio';
import PricingPackages from '@/components/commissions/PricingPackages';
import ArtistIntro from '@/components/commissions/ArtistIntro';
import CustomizationOptions from '@/components/commissions/CustomizationOptions';
import CommissionTestimonials from '@/components/commissions/CommissionTestimonials';
import CommissionForm from '@/components/commissions/CommissionForm';
import CommissionFAQ from '@/components/commissions/CommissionFAQ';
import CommissionCTA from '@/components/commissions/CommissionCTA';

export const metadata: Metadata = {
    title: 'Commissioned Art | Nigarkhana Art Gallery',
    description:
        'Request personalized, handcrafted artwork — portraits, calligraphy, murals, and more. Created exclusively for you at Nigarkhana Art Gallery, Cactus Coffee.',
};

export default function CommissionsPage() {
    return (
        <main className="min-h-screen bg-bg">
            <CommissionsHero />

            <ArtSubNav />

            <CommissionsIntro />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <ArtTypesGrid />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <HowItWorks />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CommissionsPortfolio />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <PricingPackages />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <ArtistIntro />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CustomizationOptions />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CommissionTestimonials />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CommissionForm />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CommissionFAQ />

            <CommissionCTA />
        </main>
    );
}

import type { Metadata } from 'next';
import StudioHero from '@/components/studio/StudioHero';
import ArtSubNav from '@/components/layout/ArtSubNav';
import StudioIntro from '@/components/studio/StudioIntro';
import LivePainting from '@/components/studio/LivePainting';
import SignatureWorks from '@/components/studio/SignatureWorks';
import StudioExperience from '@/components/studio/StudioExperience';
import StudioCommissionCTA from '@/components/studio/StudioCommissionCTA';

export const metadata: Metadata = {
    title: 'Art Studio – Sir Khalid Khayam | Cactus Coffee',
    description:
        'Discover the art studio of Sir Khalid Khayam at Cactus Coffee. Watch live painting, explore signature works, and book private sessions.',
};

export default function StudioPage() {
    return (
        <main className="min-h-screen bg-white">
            <StudioHero />

            <ArtSubNav />

            <StudioIntro />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <LivePainting />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <SignatureWorks />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <StudioExperience />

            <StudioCommissionCTA />
        </main>
    );
}

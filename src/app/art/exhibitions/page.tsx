import type { Metadata } from 'next';
import ExhibitionsHero from '@/components/exhibitions/ExhibitionsHero';
import ArtSubNav from '@/components/layout/ArtSubNav';
import ExhibitionsGrid from '@/components/exhibitions/ExhibitionsGrid';
import ArtistContact from '@/components/exhibitions/ArtistContact';
import { exhibitions } from '@/lib/exhibitions-data';

export const metadata: Metadata = {
    title: 'Exhibitions | Cactus Coffee',
    description:
        'Browse past, ongoing, and upcoming artist exhibitions hosted at Cactus Coffee. Discover the artists who bring our walls to life.',
};

export default function ExhibitionsPage() {
    return (
        <main className="min-h-screen bg-bg">
            <ExhibitionsHero />

            <ArtSubNav />

            <ExhibitionsGrid exhibitions={exhibitions} />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <ArtistContact />
        </main>
    );
}

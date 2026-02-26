import type { Metadata } from 'next';
import ExhibitionsHero from '@/components/exhibitions/ExhibitionsHero';
import ArtSubNav from '@/components/layout/ArtSubNav';
import ExhibitionsGrid from '@/components/exhibitions/ExhibitionsGrid';
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
        </main>
    );
}

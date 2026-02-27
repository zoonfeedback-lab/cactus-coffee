import type { Metadata } from 'next';
import WorkshopHero from '@/components/workshops/WorkshopHero';
import WorkshopIntro from '@/components/workshops/WorkshopIntro';
import UpcomingWorkshops from '@/components/workshops/UpcomingWorkshops';
import InstructorSpotlight from '@/components/workshops/InstructorSpotlight';
import WorkshopBenefits from '@/components/workshops/WorkshopBenefits';
import PastWorkshopGallery from '@/components/workshops/PastWorkshopGallery';
import WorkshopTestimonials from '@/components/workshops/WorkshopTestimonials';
import WorkshopFAQ from '@/components/workshops/WorkshopFAQ';
import WorkshopCTA from '@/components/workshops/WorkshopCTA';

export const metadata: Metadata = {
    title: 'Workshops | Cactus Coffee',
    description:
        'Join hands-on workshops in coffee brewing, botanical art, calligraphy, photography, and more at Cactus Coffee, Abbottabad.',
};

export default function WorkshopsPage() {
    return (
        <main className="bg-bg text-text-main">
            <WorkshopHero />
            <WorkshopIntro />
            <UpcomingWorkshops />
            <InstructorSpotlight />
            <WorkshopBenefits />
            <PastWorkshopGallery />
            <WorkshopTestimonials />
            <WorkshopFAQ />
            <WorkshopCTA />
        </main>
    );
}

import type { Metadata } from 'next';
import EventsHero from '@/components/events/EventsHero';
import EventsOverview from '@/components/events/EventsOverview';
import FeaturedEvent from '@/components/events/FeaturedEvent';
import UpcomingEventsGrid from '@/components/events/UpcomingEventsGrid';
import EventTimeline from '@/components/events/EventTimeline';
import EventGallery from '@/components/events/EventGallery';
import EventHighlights from '@/components/events/EventHighlights';
import EventTestimonials from '@/components/events/EventTestimonials';
import HostAnEvent from '@/components/events/HostAnEvent';
import EventFAQ from '@/components/events/EventFAQ';
import EventCTA from '@/components/events/EventCTA';

export const metadata: Metadata = {
    title: 'Events | Cactus Coffee',
    description:
        'Live music, art exhibitions, poetry evenings, and community gatherings at Cactus Coffee, Abbottabad. Experiences that move the soul.',
};

export default function EventsPage() {
    return (
        <main className="bg-bg text-text-main">
            <EventsHero />
            <EventsOverview />
            <FeaturedEvent />
            <UpcomingEventsGrid />
            <EventTimeline />
            <EventGallery />
            <EventHighlights />
            <EventTestimonials />
            <HostAnEvent />
            <EventFAQ />
            <EventCTA />
        </main>
    );
}

import type { Metadata } from 'next';
import ClassesHero from '@/components/classes/ClassesHero';
import ArtSubNav from '@/components/layout/ArtSubNav';
import InstructorSection from '@/components/classes/InstructorSection';
import CurriculumSection from '@/components/classes/CurriculumSection';
import ClassesGrid from '@/components/classes/ClassesGrid';
import StudentGallery from '@/components/classes/StudentGallery';
import { artClasses, curriculum, studentPhotos } from '@/lib/art-classes-data';

export const metadata: Metadata = {
    title: 'Art Classes | Nigarkhana Art Gallery',
    description:
        'Join art classes taught by Sir Khalid Khayan. Drawing, painting, calligraphy and more at Nigarkhana Art Gallery.',
};

export default function ArtClassesPage() {
    return (
        <main className="min-h-screen bg-bg">
            <ClassesHero />

            <ArtSubNav />

            <InstructorSection />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CurriculumSection modules={curriculum} />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <ClassesGrid classes={artClasses} />

            {/* Subtle divider */}
            <div className="flex justify-center">
                <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <StudentGallery photos={studentPhotos} />
        </main>
    );
}

import { Palette, Leaf, Coffee } from 'lucide-react';
import type { Feature } from '@/lib/data';

interface FeatureCardProps {
    item: Feature;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Palette,
    Leaf,
    Coffee,
};

export default function FeatureCard({ item }: FeatureCardProps) {
    const Icon = iconMap[item.icon] ?? Palette;

    return (
        <article className="group flex h-full flex-col items-center rounded-2xl bg-surface p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-text-inverse">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold text-text-main">
                {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-light">
                {item.description}
            </p>
        </article>
    );
}

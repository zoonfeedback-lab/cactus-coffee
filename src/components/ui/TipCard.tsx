import { Droplets, Sun, Sprout } from 'lucide-react';
import type { Tip } from '@/lib/plants-data';

interface TipCardProps {
    tip: Tip;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Droplets,
    Sun,
    Sprout,
};

export default function TipCard({ tip }: TipCardProps) {
    const Icon = iconMap[tip.icon] ?? Droplets;

    return (
        <div className="rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
            </div>
            <h4 className="mb-2 font-heading text-base font-semibold text-text-main">
                {tip.title}
            </h4>
            <p className="text-sm leading-relaxed text-text-light">
                {tip.description}
            </p>
        </div>
    );
}

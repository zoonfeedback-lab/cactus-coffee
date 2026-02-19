import { Coffee, Leaf } from 'lucide-react';
import type { CafeMenuItem } from '@/lib/data';

interface MenuItemProps {
    item: CafeMenuItem;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Coffee,
    Leaf,
};

export default function MenuItem({ item }: MenuItemProps) {
    const Icon = iconMap[item.icon] ?? Coffee;

    return (
        <article className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
                <div className="mb-1">
                    <h3 className="font-heading text-base font-semibold text-white">
                        {item.name}
                    </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/60">
                    {item.description}
                </p>
            </div>
        </article>
    );
}

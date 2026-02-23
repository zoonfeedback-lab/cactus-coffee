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
        <article className="group flex flex-col gap-1 transition-all duration-300">
            <div className="flex items-baseline gap-2">
                {/* Icon and Name */}
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-primary">
                        {item.name}
                    </h3>
                </div>

                {/* Dotted Leader */}
                <div className="min-w-[20px] flex-1 border-b border-dotted border-primary/20 mb-1.5" />

                {/* Price */}
                <div className="font-heading font-bold text-accent whitespace-nowrap">
                    {item.price} PKR
                </div>
            </div>

            {/* Description */}
            <p className="pl-11 pr-4 text-sm leading-relaxed text-text-light transition-colors group-hover:text-text-main">
                {item.description}
            </p>
        </article>
    );
}

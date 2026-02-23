import React from 'react';
import Badge from './Badge';

interface CoffeeMenuItemProps {
    name: string;
    description: string;
    price: string;
    tags?: string[];
}

export default function CoffeeMenuItem({ name, description, price, tags }: CoffeeMenuItemProps) {
    return (
        <div className="group flex justify-between gap-4 rounded-2xl border border-transparent p-4 transition-colors duration-300 hover:border-border hover:bg-surface-alt">
            <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                    <h4 className="text-lg font-bold text-text-main transition-colors group-hover:text-primary">
                        {name}
                    </h4>
                    {tags?.map((tag) => (
                        <Badge key={tag} label={tag} variant="muted" />
                    ))}
                </div>
                <p className="max-w-md text-sm text-text-light line-clamp-2">
                    {description}
                </p>
            </div>
            <div className="text-right">
                <span className="text-lg font-bold text-text-main">{price}</span>
            </div>
        </div>
    );
}

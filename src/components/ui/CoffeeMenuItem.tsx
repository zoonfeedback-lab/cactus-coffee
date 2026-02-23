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
        <div className="group flex justify-between gap-4 p-4 rounded-2xl hover:bg-backgroundWarm/50 transition-colors duration-300 border border-transparent hover:border-borderColor/30">
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-bold text-primaryBrown group-hover:text-accentGreen transition-colors">
                        {name}
                    </h4>
                    {tags?.map((tag) => (
                        <Badge key={tag} label={tag} variant="muted" />
                    ))}
                </div>
                <p className="text-sm text-textLight line-clamp-2 max-w-md">
                    {description}
                </p>
            </div>
            <div className="text-right">
                <span className="text-lg font-bold text-primaryBrown">{price}</span>
            </div>
        </div>
    );
}

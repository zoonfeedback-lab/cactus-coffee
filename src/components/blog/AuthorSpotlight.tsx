import React from 'react';
import Image from 'next/image';
import { authors } from '@/lib/blog-data';

export default function AuthorSpotlight() {
    const author = authors.ali; // Spotlight lead author

    return (
        <div className="bg-white rounded-3xl border border-border p-6 shadow-sm text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-4 block">
                Author Spotlight
            </span>
            <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                />
            </div>
            <h3 className="font-heading text-base font-bold text-text-main mb-1">
                {author.name}
            </h3>
            <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-3">
                {author.role}
            </p>
            <p className="text-xs text-text-light leading-relaxed">
                {author.bio}
            </p>
        </div>
    );
}

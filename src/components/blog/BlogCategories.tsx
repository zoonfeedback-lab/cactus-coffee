'use client';

import React from 'react';
import { BLOG_CATEGORIES } from '@/lib/blog-data';

interface BlogCategoriesProps {
    active: string;
    onChange: (category: string) => void;
}

export default function BlogCategories({ active, onChange }: BlogCategoriesProps) {
    return (
        <div className="flex flex-wrap items-center gap-2 mb-10">
            {BLOG_CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${active === cat
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-text-light border-border hover:border-primary/50 hover:text-primary'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

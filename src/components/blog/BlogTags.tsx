import React from 'react';
import { BLOG_TAGS } from '@/lib/blog-data';
import { Tag } from 'lucide-react';

export default function BlogTags() {
    return (
        <div className="bg-white rounded-3xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
                <Tag size={14} className="text-primary" />
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-text-main">
                    Popular Tags
                </h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {BLOG_TAGS.map((tag) => (
                    <span
                        key={tag}
                        className="px-4 py-1.5 bg-surface-alt text-text-light text-[11px] font-semibold rounded-full border border-border hover:border-primary/40 hover:text-primary hover:bg-white cursor-pointer transition-all duration-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

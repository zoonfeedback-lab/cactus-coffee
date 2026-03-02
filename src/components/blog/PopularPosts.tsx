import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPopularArticles } from '@/lib/blog-data';
import { TrendingUp } from 'lucide-react';

export default function PopularPosts() {
    const popular = getPopularArticles();
    if (popular.length === 0) return null;

    return (
        <div className="bg-white rounded-3xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={16} className="text-primary" />
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-text-main">
                    Popular Posts
                </h3>
            </div>
            <ul className="space-y-5">
                {popular.slice(0, 4).map((article, idx) => (
                    <li key={article.id}>
                        <Link href={`/blog/${article.slug}`} className="flex items-start gap-4 group">
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-surface-alt">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="64px"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-text-main line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                    {article.title}
                                </h4>
                                <span className="text-[10px] text-text-light/60 mt-1 block">{article.readTime}</span>
                            </div>
                        </Link>
                        {idx < popular.slice(0, 4).length - 1 && <hr className="border-border/30 mt-5" />}
                    </li>
                ))}
            </ul>
        </div>
    );
}

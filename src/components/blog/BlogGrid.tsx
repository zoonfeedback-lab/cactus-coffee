import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import type { BlogArticle } from '@/lib/blog-data';

interface BlogGridProps {
    articles: BlogArticle[];
}

export default function BlogGrid({ articles }: BlogGridProps) {
    if (articles.length === 0) {
        return (
            <div className="py-20 text-center">
                <p className="text-text-light">No articles found in this category.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
                <article
                    key={article.id}
                    className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-500"
                >
                    {/* Thumbnail */}
                    <Link href={`/blog/${article.slug}`} className="block relative w-full h-56 sm:h-52 overflow-hidden">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary text-[9px] font-bold uppercase tracking-widest rounded-full">
                            {article.category}
                        </span>
                    </Link>

                    {/* Content */}
                    <div className="flex flex-col flex-grow p-6">
                        <Link href={`/blog/${article.slug}`}>
                            <h3 className="font-heading text-lg font-bold text-text-main line-clamp-2 group-hover:text-primary transition-colors mb-2 leading-snug">
                                {article.title}
                            </h3>
                        </Link>
                        <p className="text-xs text-text-light leading-relaxed line-clamp-2 mb-4 flex-grow">
                            {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border/40 text-[11px] text-text-light/60">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                                <span>·</span>
                                <span>{article.date}</span>
                            </div>
                            <Link href={`/blog/${article.slug}`} className="flex items-center gap-1 font-bold text-primary hover:text-primary-dark transition-colors">
                                Read <ArrowUpRight size={12} />
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

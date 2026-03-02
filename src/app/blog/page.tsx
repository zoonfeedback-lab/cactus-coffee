'use client';

import React, { useState, useMemo } from 'react';
import Container from '@/components/ui/Container';
import BlogHeader from '@/components/blog/BlogHeader';
import FeaturedArticle from '@/components/blog/FeaturedArticle';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogPagination from '@/components/blog/BlogPagination';
import PopularPosts from '@/components/blog/PopularPosts';
import AuthorSpotlight from '@/components/blog/AuthorSpotlight';
import BlogTags from '@/components/blog/BlogTags';
import BlogNewsletter from '@/components/blog/BlogNewsletter';
import BlogCTA from '@/components/blog/BlogCTA';
import { blogArticles } from '@/lib/blog-data';

const ARTICLES_PER_PAGE = 6;

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    // Filter articles (exclude featured from the grid)
    const filteredArticles = useMemo(() => {
        const nonFeatured = blogArticles.filter(a => !a.featured);
        if (activeCategory === 'All') return nonFeatured;
        return nonFeatured.filter(a => a.category === activeCategory);
    }, [activeCategory]);

    // Reset to page 1 when category changes
    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    // Paginate
    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * ARTICLES_PER_PAGE,
        currentPage * ARTICLES_PER_PAGE
    );

    return (
        <main className="min-h-screen bg-surface">
            {/* 1. Blog Introduction */}
            <BlogHeader />

            {/* 2. Featured Article Hero */}
            <FeaturedArticle />

            {/* 3–5 & 7–8. Main Content + Sidebar */}
            <section className="bg-surface py-16 sm:py-24">
                <Container>
                    {/* 3. Category Filters */}
                    <BlogCategories active={activeCategory} onChange={handleCategoryChange} />

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* LEFT: Blog Grid + Pagination */}
                        <div className="flex-1 min-w-0">
                            {/* 4. Blog Grid */}
                            <BlogGrid articles={paginatedArticles} />

                            {/* 9. Pagination */}
                            <BlogPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>

                        {/* RIGHT: Sidebar */}
                        <aside className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-8">
                            {/* 5. Popular Posts */}
                            <PopularPosts />

                            {/* 7. Author Spotlight */}
                            <AuthorSpotlight />

                            {/* 8. Tags */}
                            <BlogTags />
                        </aside>
                    </div>
                </Container>
            </section>

            {/* 6. Newsletter Subscription */}
            <BlogNewsletter />

            {/* 10. CTA Section */}
            <BlogCTA />
        </main>
    );
}

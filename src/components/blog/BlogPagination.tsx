'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function BlogPagination({ currentPage, totalPages, onPageChange }: BlogPaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <nav className="flex items-center justify-center gap-2 mt-14" aria-label="Blog pagination">
            {/* Previous */}
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-white text-text-light hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous page"
            >
                <ChevronLeft size={16} />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${currentPage === page
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-white border border-border text-text-light hover:border-primary hover:text-primary'
                        }`}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                >
                    {page}
                </button>
            ))}

            {/* Next */}
            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-white text-text-light hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next page"
            >
                <ChevronRight size={16} />
            </button>
        </nav>
    );
}

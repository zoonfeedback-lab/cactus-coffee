'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MenuItem } from '@/lib/coffee-data';

/* ── helpers ── */

/** Split items into columns of `size` */
function chunk<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

/* ── per-column accordion ── */

interface AccordionColumnProps {
    items: MenuItem[];
    columnIndex: number;
    expandedId: string | null;
    onToggle: (id: string) => void;
}

function AccordionColumn({ items, columnIndex, expandedId, onToggle }: AccordionColumnProps) {
    // keep a min-height so the group doesn't shrink when items collapse
    // fixed height = collapsed size of all items, so expanding never
    // pushes other column groups
    const colH = items.length * 104;

    return (
        <div className="flex flex-col overflow-hidden" style={{ height: colH }}>
            {items.map((item, idx) => {
                const itemId = `${columnIndex}-${idx}`;
                const isExpanded = expandedId === itemId;

                // hide siblings in the same group when one is expanded
                const isHiddenInThisColumn =
                    expandedId !== null &&
                    expandedId.startsWith(`${columnIndex}-`) &&
                    !isExpanded;

                return (
                    <div
                        key={item.name}
                        className={`overflow-hidden rounded-2xl border transition-all duration-500 ease-in-out ${isExpanded
                            ? 'flex-1 flex flex-col border-primary/40 bg-white shadow-lg'
                            : 'border-border bg-white hover:border-primary/30 hover:shadow-md'
                            } ${isHiddenInThisColumn
                                ? 'mb-0 max-h-0 scale-95 border-transparent opacity-0'
                                : isExpanded
                                    ? 'mb-4 opacity-100'
                                    : 'mb-4 max-h-40 opacity-100'
                            }`}
                        style={{
                            transitionProperty:
                                'max-height, opacity, transform, border-color, box-shadow, margin-bottom',
                        }}
                    >
                        {/* Compact / clickable header */}
                        <button
                            type="button"
                            onClick={() => onToggle(itemId)}
                            className="group flex w-full items-center gap-4 p-4 text-left"
                        >
                            {/* Circular image */}
                            <div
                                className={`relative shrink-0 overflow-hidden rounded-full border-2 border-primary/20 transition-all duration-500 ${isExpanded ? 'h-20 w-20' : 'h-14 w-14'
                                    }`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Name */}
                            <div className="flex-1">
                                <h3
                                    className={`font-bold text-text-main transition-all duration-300 ${isExpanded
                                        ? 'text-lg sm:text-xl'
                                        : 'text-sm sm:text-base'
                                        }`}
                                >
                                    {item.name}
                                </h3>
                                {!isExpanded && !item.note && (
                                    <div className="mt-1 flex items-center gap-2">
                                        <span className="text-xs text-text-light">
                                            PKR {item.single}
                                        </span>
                                        <span className="text-[10px] text-text-light/50">
                                            /
                                        </span>
                                        <span className="text-xs font-semibold text-primary">
                                            PKR {item.double}
                                        </span>
                                    </div>
                                )}
                                {!isExpanded && item.note && (
                                    <p className="mt-1 text-xs italic text-text-light">
                                        — {item.note} —
                                    </p>
                                )}
                            </div>

                            {/* Expand / collapse chevron */}
                            <svg
                                className={`h-5 w-5 shrink-0 text-text-light transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Expanded details */}
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded
                                ? 'flex-1 opacity-100'
                                : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="border-t border-border/50 px-4 pb-5 pt-4">
                                {/* Description */}
                                <p className="mb-4 text-sm leading-relaxed text-text-light">
                                    {item.description}
                                </p>

                                {/* Prices */}
                                {item.note ? (
                                    <p className="text-sm font-semibold italic text-primary">
                                        Price: {item.note}
                                    </p>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-full bg-surface-alt px-4 py-1.5">
                                            <span className="text-xs uppercase tracking-wider text-text-light">
                                                Single
                                            </span>
                                            <span className="ml-2 text-sm font-bold text-text-main">
                                                PKR {item.single}
                                            </span>
                                        </div>
                                        <div className="rounded-full bg-primary/10 px-4 py-1.5">
                                            <span className="text-xs uppercase tracking-wider text-primary/70">
                                                Double
                                            </span>
                                            <span className="ml-2 text-sm font-bold text-primary">
                                                PKR {item.double}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

/* ── main grid ── */

interface MenuAccordionGridProps {
    items: MenuItem[];
    columns?: number;
}

export default function MenuAccordionGrid({
    items,
    columns = 3,
}: MenuAccordionGridProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleToggle = (id: string) =>
        setExpandedId((prev) => (prev === id ? null : id));

    const perColumn = Math.ceil(items.length / columns);
    const cols = chunk(items, perColumn);

    return (
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cols.map((colItems, ci) => (
                <AccordionColumn
                    key={ci}
                    items={colItems}
                    columnIndex={ci}
                    expandedId={expandedId}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    );
}

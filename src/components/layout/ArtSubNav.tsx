'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const artTabs = [
    { label: 'Gallery', href: '/art' },
    { label: 'Exhibitions', href: '/art/exhibitions' },
    { label: 'Classes', href: '/art/classes' },
];

export default function ArtSubNav() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/art') return pathname === '/art';
        return pathname === href || pathname.startsWith(href + '/');
    };

    return (
        <nav
            aria-label="Art sections"
            className="sticky top-0 z-40 border-b border-border bg-white"
        >
            <ul className="scrollbar-hide flex items-center justify-center gap-2 overflow-x-auto px-6">
                {artTabs.map((tab) => (
                    <li key={tab.href}>
                        <Link
                            href={tab.href}
                            className={`relative block px-6 py-4 text-sm font-semibold tracking-wide transition-colors duration-200 ${isActive(tab.href)
                                ? 'text-primary'
                                : 'text-text-light hover:text-text-main'
                                }`}
                        >
                            {tab.label}
                            {/* Active underline */}
                            <span
                                className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${isActive(tab.href)
                                    ? 'w-full opacity-100'
                                    : 'w-0 opacity-0'
                                    }`}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

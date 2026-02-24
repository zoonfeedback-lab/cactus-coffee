'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface SubLink {
    label: string;
    href: string;
}

interface NavLink {
    label: string;
    href: string;
    subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
    { label: 'Coffee', href: '/coffee' },
    {
        label: 'Art',
        href: '/art',
        subLinks: [
            { label: 'Gallery', href: '/art' },
            { label: 'Exhibitions', href: '/art/exhibitions' },
        ],
    },
    { label: 'Plants', href: '/plants' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setMobileOpen(false);
        setDesktopDropdown(null);
        setMobileDropdown(null);
    }, [pathname]);

    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(href + '/');

    const handleMouseEnter = (label: string) => {
        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        setDesktopDropdown(label);
    };

    const handleMouseLeave = () => {
        dropdownTimeout.current = setTimeout(
            () => setDesktopDropdown(null),
            150
        );
    };

    return (
        <header
            className={`relative z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''
                }`}
        >
            <nav aria-label="Main navigation">
                {/* Logo */}
                <div className="flex justify-center pt-5 pb-4">
                    <Link href="/" className="block">
                        <Image
                            src="/images/cactus-logo.png"
                            alt="Cactus Coffee logo"
                            width={100}
                            height={100}
                            className="h-20 w-auto sm:h-24"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop links */}
                <ul className="hidden items-center justify-center gap-16 pb-4 md:flex">
                    {navLinks.map((link) => (
                        <li
                            key={link.label}
                            className="relative"
                            onMouseEnter={() =>
                                link.subLinks
                                    ? handleMouseEnter(link.label)
                                    : undefined
                            }
                            onMouseLeave={
                                link.subLinks ? handleMouseLeave : undefined
                            }
                        >
                            {link.subLinks ? (
                                <>
                                    <button
                                        type="button"
                                        className={`flex items-center gap-1 text-base font-bold tracking-wide transition-colors duration-200 hover:text-primary ${isActive(link.href)
                                                ? 'text-primary'
                                                : 'text-text-main'
                                            }`}
                                    >
                                        {link.label}
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${desktopDropdown === link.label
                                                    ? 'rotate-180'
                                                    : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Desktop dropdown */}
                                    <div
                                        className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 ${desktopDropdown === link.label
                                                ? 'pointer-events-auto translate-y-0 opacity-100'
                                                : 'pointer-events-none -translate-y-1 opacity-0'
                                            }`}
                                    >
                                        <ul className="min-w-[160px] overflow-hidden rounded-xl border border-border bg-white py-1 shadow-lg">
                                            {link.subLinks.map((sub) => (
                                                <li key={sub.href}>
                                                    <Link
                                                        href={sub.href}
                                                        className={`block px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-primary ${pathname ===
                                                                sub.href
                                                                ? 'text-primary'
                                                                : 'text-text-main'
                                                            }`}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`text-base font-bold tracking-wide transition-colors duration-200 hover:text-primary ${isActive(link.href)
                                            ? 'text-primary'
                                            : 'text-text-main'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <div className="flex justify-center pb-3 md:hidden">
                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-text-main transition-colors hover:bg-accent/10"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden border-t border-border bg-white transition-all duration-500 ease-in-out md:hidden ${mobileOpen
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col items-center gap-1 py-4">
                    {navLinks.map((link) => (
                        <li
                            key={link.label}
                            className="w-full text-center"
                        >
                            {link.subLinks ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setMobileDropdown((prev) =>
                                                prev === link.label
                                                    ? null
                                                    : link.label
                                            )
                                        }
                                        className={`mx-auto flex items-center gap-1 rounded-lg px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-primary ${isActive(link.href)
                                                ? 'text-primary'
                                                : 'text-text-main'
                                            }`}
                                    >
                                        {link.label}
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-200 ${mobileDropdown === link.label
                                                    ? 'rotate-180'
                                                    : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Mobile sub-links */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${mobileDropdown === link.label
                                                ? 'max-h-40 opacity-100'
                                                : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <ul className="flex flex-col items-center gap-0.5 pb-2">
                                            {link.subLinks.map((sub) => (
                                                <li key={sub.href}>
                                                    <Link
                                                        href={sub.href}
                                                        className={`block rounded-lg px-6 py-2 text-sm transition-colors hover:bg-accent/10 hover:text-primary ${pathname ===
                                                                sub.href
                                                                ? 'font-medium text-primary'
                                                                : 'text-text-light'
                                                            }`}
                                                        onClick={() =>
                                                            setMobileOpen(false)
                                                        }
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`block rounded-lg px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-primary ${isActive(link.href)
                                            ? 'text-primary'
                                            : 'text-text-main'
                                        }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

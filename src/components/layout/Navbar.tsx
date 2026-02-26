'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'Coffee', href: '/coffee' },
    { label: 'Art', href: '/art' },
    { label: 'Plants', href: '/plants' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(href + '/');

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
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className={`text-base font-bold tracking-wide transition-colors duration-200 hover:text-primary ${isActive(link.href)
                                    ? 'text-primary'
                                    : 'text-text-main'
                                    }`}
                            >
                                {link.label}
                            </Link>
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
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

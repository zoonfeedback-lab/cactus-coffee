'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Coffee', href: '/cafe' },
    { label: 'Arts', href: '/art' },
    { label: 'Plants', href: '/plants' },
] as const;

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''
                }`}
        >
            {/* Centered stacked layout */}
            <nav aria-label="Main navigation">
                {/* Logo – centered, slightly larger */}
                <div className="flex justify-center pt-5 pb-2">
                    <Link href="/" className="block">
                        <Image
                            src="/images/cactus-logo.png"
                            alt="Cactus Coffee logo"
                            width={80}
                            height={80}
                            className="h-16 w-auto sm:h-20"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop links – centered row */}
                <ul className="hidden items-center justify-center gap-10 pb-4 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-lg font-medium tracking-wide text-text-main transition-colors duration-200 hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger – centered under logo */}
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
                className={`overflow-hidden border-t border-border bg-surface/95 backdrop-blur-md transition-all duration-500 ease-in-out md:hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col items-center gap-1 py-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="block rounded-lg px-6 py-2.5 text-sm font-medium text-text-main transition-colors hover:bg-accent/10 hover:text-primary"
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

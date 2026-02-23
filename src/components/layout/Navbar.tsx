'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'Coffee', href: '/coffee' },
    { label: 'Art Gallery', href: '/art' },
    { label: 'Plants', href: '/plants' },
] as const;

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

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

                {/* Desktop links – centered row */}
                <ul className="hidden items-center justify-center gap-16 pb-4 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-base font-bold tracking-wide transition-colors duration-200 hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-text-main'
                                    }`}
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
                className={`overflow-hidden border-t border-border bg-white transition-all duration-500 ease-in-out md:hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col items-center gap-1 py-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block rounded-lg px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-text-main'
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

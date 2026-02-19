'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Art', href: '/art' },
    { label: 'Plants', href: '/plants' },
    { label: 'Café', href: '/cafe' },
    { label: 'About Us', href: '/about' },
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
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-surface/95 shadow-sm backdrop-blur-md'
                : 'bg-transparent'
                }`}
        >
            <Container>
                <nav
                    className="flex h-14 items-center justify-between gap-4 sm:h-20"
                    aria-label="Main navigation"
                >
                    {/* Brand */}
                    <Link
                        href="/"
                        className={`shrink-0 font-heading text-base font-bold transition-colors duration-300 sm:text-xl ${scrolled ? 'text-primary' : 'text-white'
                            }`}
                    >
                        <span className="sm:hidden">Cactus Coffee</span>
                        <span className="hidden sm:inline">Cactus Coffee</span>
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-200 ${scrolled
                                        ? 'text-text-main hover:text-primary'
                                        : 'text-white/90 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button href="/visit" size="sm">
                            Visit Our Space
                        </Button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors md:hidden ${scrolled
                            ? 'text-text-main hover:bg-accent/10'
                            : 'text-white hover:bg-white/10'
                            }`}
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
                </nav>
            </Container>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden border-t border-border bg-surface/95 backdrop-blur-md transition-all duration-300 md:hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <Container>
                    <ul className="flex flex-col gap-1 py-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-text-main transition-colors hover:bg-accent/10 hover:text-primary"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="mt-2 px-4">
                            <Button href="/visit" size="sm" className="w-full">
                                Visit Our Space
                            </Button>
                        </li>
                    </ul>
                </Container>
            </div>
        </header>
    );
}

import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Art Gallery', href: '/art' },
    { label: 'Plant Shop', href: '/plants' },
    { label: 'Café Menu', href: '/cafe' },
    { label: 'About Us', href: '/about' },
] as const;

const services = [
    'Art Exhibitions',
    'Plant Consultations',
    'Specialty Coffee',
    'Private Events',
    'Workshop Spaces',
] as const;

const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
] as const;

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white/80">
            <Container>
                <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="mb-4 font-heading text-xl font-bold text-white">
                            Cactus Coffee
                        </h3>
                        <p className="mb-6 text-sm leading-relaxed text-white/60">
                            A curated space for creativity, greenery, and handcrafted brews.
                            Come explore the harmony of art and nature.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-200 hover:bg-accent/30 hover:text-white"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 transition-colors duration-200 hover:text-accent-light"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Services
                        </h4>
                        <ul className="space-y-2.5">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-sm text-white/60">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <span className="text-sm text-white/60">
                                    123 Creative District, Arts Quarter
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 shrink-0 text-accent" />
                                <a
                                    href="mailto:hello@artnaturecoffee.com"
                                    className="text-sm text-white/60 transition-colors hover:text-accent-light"
                                >
                                    hello@artnaturecoffee.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 shrink-0 text-accent" />
                                <a
                                    href="tel:+1234567890"
                                    className="text-sm text-white/60 transition-colors hover:text-accent-light"
                                >
                                    (123) 456-7890
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 py-6">
                    <p className="text-center text-xs text-white/40">
                        &copy; {new Date().getFullYear()} Cactus Coffee. All
                        rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

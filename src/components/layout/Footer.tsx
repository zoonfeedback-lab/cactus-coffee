import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';

const quickLinks = [
    { label: 'Coffee', href: '/coffee' },
    { label: 'Art Gallery', href: '/art' },
    { label: 'Plants', href: '/plants' },

] as const;

const services = [
    'Art Exhibitions',
    'Plant Consultations',
    'Specialty Coffee',
    'Private Events',
    'Workshop Spaces',
] as const;

const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/cactuscoffee01?igsh=MTA1cGVqZ3psOTI5', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/people/Cactus-Coffee/61579279110315/#', label: 'Facebook' },
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

                    {/* Contact & Hours */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Opening Hours
                        </h4>
                        <ul className="mb-6 space-y-1 text-sm text-white/60">
                            <li>Mon&ndash;Fri: 10 am &ndash; 11:30 pm</li>
                            <li>Sat&ndash;Sun: 10 am &ndash; 1 am</li>
                        </ul>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <span className="text-sm text-white/60">
                                    Sardar Plaza, PMA Link Rd, Jinnahabad Abbottabad, 22010
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <a href="tel:03104557777" className="text-sm text-white/60 transition-colors hover:text-accent-light">
                                    0310 4557777
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Join the Brew
                        </h4>
                        <p className="mb-4 text-sm text-white/60">
                            Get updates on new seasonal roasts and art exhibitions.
                        </p>
                        <form className="space-y-3" aria-label="Newsletter signup">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    aria-label="Email address"
                                    suppressHydrationWarning
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50"
                                />
                            </div>
                            <button type="submit" suppressHydrationWarning className="w-full bg-accent hover:bg-accent-light text-primary-dark font-bold py-2.5 rounded-full transition-colors text-sm">
                                Subscribe
                            </button>
                        </form>
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

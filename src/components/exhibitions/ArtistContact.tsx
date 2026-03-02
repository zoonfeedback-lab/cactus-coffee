'use client';

import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Mail, Upload, Instagram, Globe, FileText, ShieldCheck } from 'lucide-react';

const guidelines = [
    'Submit a portfolio of at least 5 recent works',
    'Works must be original and created within the last 2 years',
    'Digital submissions accepted in JPEG or PNG (min 300 DPI)',
    'Selected artists will be contacted within 2 weeks',
    'Exhibition duration is typically 3 to 4 weeks',
    'Gallery provides framing support and opening night coordination',
];

const socials = [
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'Website', href: '#', icon: Globe },
];

export default function ArtistContact() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <Container>
                <AnimateOnScroll animation="fade-up">
                    <div className="mb-12 text-center">
                        <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl lg:text-4xl">
                            Exhibit Your Work
                        </h2>
                        <div className="mx-auto mt-3 h-0.5 w-16 bg-primary" />
                        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-light sm:text-base">
                            Interested in showcasing your art at Nigarkhana Art Gallery?
                            Fill out the form below and our team will review your portfolio.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left — Contact Form */}
                    <AnimateOnScroll animation="fade-right">
                        <form
                            className="space-y-5 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div>
                                <label htmlFor="artist-name" className="mb-1.5 block text-sm font-semibold text-text-main">
                                    Full Name
                                </label>
                                <input
                                    id="artist-name"
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-text-main outline-none transition-colors focus:border-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="artist-email" className="mb-1.5 block text-sm font-semibold text-text-main">
                                    <span className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-primary" />
                                        Email Address
                                    </span>
                                </label>
                                <input
                                    id="artist-email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-text-main outline-none transition-colors focus:border-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="artist-medium" className="mb-1.5 block text-sm font-semibold text-text-main">
                                    Art Medium
                                </label>
                                <input
                                    id="artist-medium"
                                    type="text"
                                    placeholder="e.g. Oil painting, Sculpture, Digital art"
                                    className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-text-main outline-none transition-colors focus:border-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="artist-message" className="mb-1.5 block text-sm font-semibold text-text-main">
                                    Tell Us About Your Work
                                </label>
                                <textarea
                                    id="artist-message"
                                    rows={4}
                                    placeholder="Describe your artistic practice and what you'd like to exhibit..."
                                    className="w-full resize-none rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-text-main outline-none transition-colors focus:border-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="artist-portfolio" className="mb-1.5 block text-sm font-semibold text-text-main">
                                    <span className="flex items-center gap-2">
                                        <Upload className="h-4 w-4 text-primary" />
                                        Portfolio Upload
                                    </span>
                                </label>
                                <div className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface-alt px-4 py-8 text-center transition-colors hover:border-primary/40">
                                    <div>
                                        <Upload className="mx-auto mb-2 h-6 w-6 text-muted" />
                                        <p className="text-sm text-text-light">
                                            Drag and drop files or{' '}
                                            <span className="font-semibold text-primary">browse</span>
                                        </p>
                                        <p className="mt-1 text-xs text-muted">
                                            PDF, JPEG, PNG (max 10MB)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Terms checkbox */}
                            <div className="flex items-start gap-3">
                                <input
                                    id="artist-terms"
                                    type="checkbox"
                                    className="mt-1 h-4 w-4 rounded border-border text-primary accent-primary"
                                />
                                <label htmlFor="artist-terms" className="text-xs leading-relaxed text-text-light">
                                    I agree to the exhibition terms and conditions, including gallery commission
                                    policies and artwork handling guidelines.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-red-700"
                            >
                                Submit Application
                            </button>
                        </form>
                    </AnimateOnScroll>

                    {/* Right — Guidelines, Social Links & Terms */}
                    <AnimateOnScroll animation="fade-left" delay={200}>
                        <div className="space-y-8">
                            {/* Exhibition Guidelines */}
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-text-main">
                                    <FileText className="h-5 w-5 text-primary" />
                                    Exhibition Guidelines
                                </h3>
                                <ul className="space-y-3">
                                    {guidelines.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-sm leading-relaxed text-text-light"
                                        >
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8C5A0]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-text-main">
                                    <Globe className="h-5 w-5 text-primary" />
                                    Connect With Us
                                </h3>
                                <div className="flex gap-3">
                                    {socials.map((s) => (
                                        <a
                                            key={s.label}
                                            href={s.href}
                                            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-main transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
                                        >
                                            <s.icon className="h-4 w-4 text-primary" />
                                            {s.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="rounded-2xl border border-border bg-surface-alt p-6">
                                <h3 className="mb-3 flex items-center gap-2 font-heading text-lg font-bold text-text-main">
                                    <ShieldCheck className="h-5 w-5 text-primary" />
                                    Terms &amp; Conditions
                                </h3>
                                <div className="space-y-2 text-xs leading-relaxed text-text-light">
                                    <p>
                                        By submitting your application, you agree that all submitted artwork is your
                                        original creation. The gallery reserves the right to select, curate, and
                                        position works within the exhibition space.
                                    </p>
                                    <p>
                                        A standard gallery commission of 20% applies to all sales made during the
                                        exhibition. Artwork must be delivered at least one week prior to the opening
                                        date. The gallery provides insurance coverage during the exhibition period.
                                    </p>
                                    <p>
                                        For detailed terms, please contact us at{' '}
                                        <span className="font-semibold text-primary">art@nigarkhana.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}

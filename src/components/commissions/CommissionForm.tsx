'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Upload, Send } from 'lucide-react';

const sizeOptions = [
    '8×10" (Small)',
    '12×16" (Medium)',
    '18×24" (Standard)',
    '24×36" (Large)',
    '30×40" (Extra Large)',
    'Custom',
];

const budgetRanges = [
    'Under PKR 10,000',
    'PKR 10,000 – 20,000',
    'PKR 20,000 – 35,000',
    'PKR 35,000 – 50,000',
    'PKR 50,000+',
    'Not sure yet',
];

export default function CommissionForm() {
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : '');
    };

    return (
        <section id="commission-form" className="bg-[#FAF7F0] py-20 sm:py-28">
            <Container>
                <AnimateOnScroll animation="fade-up" duration={700}>
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                            Let&apos;s Create Together
                        </p>
                        <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                            Request a Commission
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-text-light">
                            Tell us about the artwork you have in mind. We&apos;ll get back to you
                            within 24 hours to discuss your vision.
                        </p>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fade-up" delay={200} duration={700}>
                    <form
                        className="mx-auto max-w-2xl space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        {/* Name & Email */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="commission-name"
                                    className="mb-1.5 block text-sm font-semibold text-text-main"
                                >
                                    Your Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    id="commission-name"
                                    type="text"
                                    required
                                    placeholder="Full name"
                                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-main placeholder:text-muted transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="commission-email"
                                    className="mb-1.5 block text-sm font-semibold text-text-main"
                                >
                                    Email <span className="text-red-400">*</span>
                                </label>
                                <input
                                    id="commission-email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-main placeholder:text-muted transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                                />
                            </div>
                        </div>

                        {/* Occasion */}
                        <div>
                            <label
                                htmlFor="commission-occasion"
                                className="mb-1.5 block text-sm font-semibold text-text-main"
                            >
                                Occasion <span className="text-xs text-muted">(optional)</span>
                            </label>
                            <input
                                id="commission-occasion"
                                type="text"
                                placeholder="e.g., Wedding, Birthday, Home Decor..."
                                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-main placeholder:text-muted transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                htmlFor="commission-description"
                                className="mb-1.5 block text-sm font-semibold text-text-main"
                            >
                                Describe Your Idea <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                id="commission-description"
                                required
                                rows={4}
                                placeholder="Tell us about the artwork you envision — colours, mood, subject, any references..."
                                className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-main placeholder:text-muted transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* File upload */}
                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-text-main">
                                Reference Images{' '}
                                <span className="text-xs text-muted">(optional)</span>
                            </label>
                            <label
                                htmlFor="commission-files"
                                className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-white px-4 py-6 text-sm text-muted transition-colors hover:border-primary/30 hover:text-text-light"
                            >
                                <Upload className="h-5 w-5" />
                                {fileName || 'Click to upload reference images'}
                            </label>
                            <input
                                id="commission-files"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>

                        {/* Size & Budget */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="commission-size"
                                    className="mb-1.5 block text-sm font-semibold text-text-main"
                                >
                                    Preferred Size
                                </label>
                                <select
                                    id="commission-size"
                                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-main transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                                >
                                    <option value="">Select a size</option>
                                    {sizeOptions.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="commission-budget"
                                    className="mb-1.5 block text-sm font-semibold text-text-main"
                                >
                                    Budget Range
                                </label>
                                <select
                                    id="commission-budget"
                                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-main transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                                >
                                    <option value="">Select your budget</option>
                                    {budgetRanges.map((b) => (
                                        <option key={b} value={b}>
                                            {b}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Deadline */}
                        <div>
                            <label
                                htmlFor="commission-deadline"
                                className="mb-1.5 block text-sm font-semibold text-text-main"
                            >
                                Desired Deadline{' '}
                                <span className="text-xs text-muted">(optional)</span>
                            </label>
                            <input
                                id="commission-deadline"
                                type="date"
                                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-main transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
                        >
                            <Send className="h-4 w-4" />
                            Submit Commission Request
                        </button>

                        <p className="text-center text-xs text-muted">
                            We&apos;ll respond within 24 hours. No commitment required.
                        </p>
                    </form>
                </AnimateOnScroll>
            </Container>
        </section>
    );
}

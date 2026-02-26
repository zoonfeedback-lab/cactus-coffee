interface SectionTitleProps {
    title: string;
    subtitle?: string;
    label?: string;
    align?: 'left' | 'center';
    className?: string;
}

export default function SectionTitle({
    title,
    subtitle,
    label,
    align = 'left',
    className = '',
}: SectionTitleProps) {
    const alignClasses = align === 'center' ? 'text-center' : 'text-left';

    return (
        <div className={`mb-10 ${alignClasses} ${className}`}>
            {label && (
                <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                    {label}
                </span>
            )}
            <h2 className="font-heading text-3xl font-bold text-text-main sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className={`mt-3 max-w-2xl text-base text-text-light sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}

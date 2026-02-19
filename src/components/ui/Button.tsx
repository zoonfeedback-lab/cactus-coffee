import Link from 'next/link';

interface ButtonProps {
    variant?: 'primary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit';
}

const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
} as const;

const variantClasses = {
    primary:
        'bg-primary text-text-inverse hover:bg-primary-dark shadow-sm hover:shadow-md',
    outline:
        'border-2 border-primary text-primary hover:bg-primary hover:text-text-inverse',
} as const;

export default function Button({
    variant = 'primary',
    size = 'md',
    href,
    children,
    className = '',
    type = 'button',
}: ButtonProps) {
    const baseClasses =
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2';

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes}>
            {children}
        </button>
    );
}

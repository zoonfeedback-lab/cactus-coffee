interface BadgeProps {
    label: string;
    variant?: 'green' | 'outline' | 'muted';
}

export default function Badge({ label, variant = 'green' }: BadgeProps) {
    const styles = {
        green: 'bg-primary/10 text-primary',
        outline: 'border border-border text-text-light',
        muted: 'bg-surface-alt text-text-light',
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles[variant]}`}
        >
            {label}
        </span>
    );
}

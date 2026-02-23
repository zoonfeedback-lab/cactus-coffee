import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

export default function Input({ icon, className = '', ...props }: InputProps) {
    return (
        <div className="relative w-full">
            {icon && (
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted">
                    {icon}
                </div>
            )}
            <input
                className={`w-full bg-surface-light border border-borderColor rounded-full py-2 ${icon ? 'pl-10' : 'px-4'
                    } pr-4 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 ${className}`}
                {...props}
            />
        </div>
    );
}

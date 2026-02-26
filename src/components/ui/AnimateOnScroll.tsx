'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale';
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
}

const animationStyles: Record<string, { hidden: string; visible: string }> = {
    'fade-up': {
        hidden: 'opacity-0 translate-y-10',
        visible: 'opacity-100 translate-y-0',
    },
    'fade-down': {
        hidden: 'opacity-0 -translate-y-10',
        visible: 'opacity-100 translate-y-0',
    },
    'fade-left': {
        hidden: 'opacity-0 translate-x-10',
        visible: 'opacity-100 translate-x-0',
    },
    'fade-right': {
        hidden: 'opacity-0 -translate-x-10',
        visible: 'opacity-100 translate-x-0',
    },
    fade: {
        hidden: 'opacity-0',
        visible: 'opacity-100',
    },
    scale: {
        hidden: 'opacity-0 scale-95',
        visible: 'opacity-100 scale-100',
    },
};

export default function AnimateOnScroll({
    children,
    className = '',
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    threshold = 0.15,
    once = true,
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(element);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, once]);

    const { hidden, visible } = animationStyles[animation];

    return (
        <div
            ref={ref}
            className={`transition-all ease-out ${isVisible ? visible : hidden} ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

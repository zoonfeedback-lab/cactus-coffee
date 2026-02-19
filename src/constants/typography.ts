/** Typography tokens for consistent type scale */
export const typography = {
    fontFamily: {
        heading: '"Playfair Display", Georgia, serif',
        body: '"Inter", system-ui, sans-serif',
    },
    fontSize: {
        xs: '0.75rem',     // 12px
        sm: '0.875rem',    // 14px
        base: '1rem',      // 16px
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '3.75rem',  // 60px
    },
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
    },
    lineHeight: {
        tight: '1.15',
        snug: '1.3',
        normal: '1.5',
        relaxed: '1.7',
    },
} as const;

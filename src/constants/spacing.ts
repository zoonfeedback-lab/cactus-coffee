/** Spacing tokens for consistent layout rhythm */
export const spacing = {
    container: {
        maxWidth: '80rem',   // 1280px
        paddingX: {
            mobile: '1rem',    // 16px
            tablet: '1.5rem',  // 24px
            desktop: '2rem',   // 32px
        },
    },
    section: {
        paddingY: {
            mobile: '4rem',    // 64px
            desktop: '6rem',   // 96px
        },
    },
    gap: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
    },
} as const;

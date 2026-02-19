/** Centralized color tokens — earthy palette for Art, Nature & Coffee */
export const colors = {
    primary: '#2D5A3D',
    primaryDark: '#1E3F2B',
    primaryLight: '#3A7A52',
    accent: '#8FBC8F',
    accentLight: '#A8D5A8',

    background: '#FAF7F2',
    surface: '#FFFFFF',
    surfaceAlt: '#F0F5EF',

    text: '#1F2937',
    textLight: '#6B7280',
    textInverse: '#FFFFFF',

    muted: '#9CA3AF',
    border: '#E5E1DB',
    borderLight: '#F0EDE8',

    success: '#22C55E',
    warning: '#F59E0B',

    gradientPrimary: {
        from: '#2D5A3D',
        to: '#1E3F2B',
    },
} as const;

export type ColorToken = keyof typeof colors;

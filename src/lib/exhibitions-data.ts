/* ── Exhibitions data for Cactus Coffee ── */

export interface Artwork {
    id: string;
    title: string;
    image: string;
    medium: string;
    year: number;
    price: number;
}

export interface Exhibition {
    id: string;
    title: string;
    artist: string;
    artistBio: string;
    artistImage: string;
    description: string;
    image: string;
    startDate: string;
    endDate: string;
    status: 'upcoming' | 'ongoing' | 'past';
    artworks: Artwork[];
}

const artistPhoto = '/images/exhibition/publo-picaso.jfif';

const images = [
    '/images/exhibition/arts-image.jfif',
    '/images/exhibition/img-2.jfif',
    '/images/exhibition/img-3.jfif',
    '/images/exhibition/img-4.jfif',
    '/images/exhibition/img-5.jfif',
];

/** Build artwork entries for an exhibition */
function makeArtworks(prefix: string, count: number): Artwork[] {
    const mediums = ['Oil on canvas', 'Acrylic on wood', 'Mixed media', 'Watercolour', 'Digital print', 'Charcoal on paper'];
    const titles = [
        'Awakening', 'Solitude', 'Verdant Pulse', 'Fragments',
        'Echoes', 'Bloom', 'Shifting Grounds', 'Quiet Fire',
    ];
    const prices = [18000, 25000, 32000, 15000, 42000, 28000, 35000, 20000];
    return Array.from({ length: count }, (_, i) => ({
        id: `${prefix}-art-${i + 1}`,
        title: titles[i % titles.length],
        image: images[i % images.length],
        medium: mediums[i % mediums.length],
        year: 2025 + (i % 2),
        price: prices[i % prices.length],
    }));
}

export const exhibitions: Exhibition[] = [
    {
        id: 'exh-1',
        title: 'Forest Reimagined',
        artist: 'Lena Hartwood',
        artistBio:
            'London-based painter exploring the intersection of urban decay and organic growth.',
        artistImage: artistPhoto,
        description:
            'A breathtaking series of large-scale oil paintings that reimagine familiar forests as living, breathing organisms. Luminous greens and deep earth tones invite viewers into a world where nature reclaims the spaces we have abandoned.',
        image: images[0],
        startDate: '2026-03-01',
        endDate: '2026-03-31',
        status: 'upcoming',
        artworks: makeArtworks('exh-1', 6),
    },
    {
        id: 'exh-2',
        title: 'Stillness Between Seasons',
        artist: 'Omar Khayam',
        artistBio:
            'Islamabad-born mixed-media artist known for meditative, large-format works.',
        artistImage: artistPhoto,
        description:
            'A contemplative collection of mixed-media pieces that capture the quiet transitional moments in nature. Khayam layers handmade paper, ink, and pressed botanicals to evoke the hush before a storm.',
        image: images[1],
        startDate: '2026-02-10',
        endDate: '2026-03-15',
        status: 'ongoing',
        artworks: makeArtworks('exh-2', 8),
    },
    {
        id: 'exh-3',
        title: 'Petals & Pixels',
        artist: 'Mira Tanaka',
        artistBio:
            'Tokyo digital artist bridging traditional Japanese aesthetics with generative code.',
        artistImage: artistPhoto,
        description:
            'An immersive digital art exhibition where algorithmic flower arrangements bloom on screens and walls. Code-generated botanical forms respond to ambient sound, creating a living, ever-changing gallery.',
        image: images[2],
        startDate: '2026-04-01',
        endDate: '2026-04-30',
        status: 'upcoming',
        artworks: makeArtworks('exh-3', 5),
    },
    {
        id: 'exh-4',
        title: 'Carved Silence',
        artist: 'Kael Ashburn',
        artistBio:
            'Sculptor from Portland who works exclusively with reclaimed wood and stone.',
        artistImage: artistPhoto,
        description:
            'Twelve hand-carved wooden sculptures inspired by the quiet corners of old-growth forests. Each piece is made from salvaged timber, giving new life to fallen trees and celebrating the beauty of impermanence.',
        image: images[3],
        startDate: '2026-01-05',
        endDate: '2026-02-05',
        status: 'past',
        artworks: makeArtworks('exh-4', 7),
    },
    {
        id: 'exh-5',
        title: 'Chlorophyll Dreams',
        artist: 'Isla Verdant',
        artistBio:
            'Botanical illustrator and watercolourist based in Edinburgh.',
        artistImage: artistPhoto,
        description:
            'Oversized watercolour illustrations depicting rare and endangered plant species. Hyper-detailed brushwork reveals the intricate beauty of leaves, roots, and blossoms that most of us will never see in the wild.',
        image: images[4],
        startDate: '2025-11-15',
        endDate: '2025-12-20',
        status: 'past',
        artworks: makeArtworks('exh-5', 6),
    },
    {
        id: 'exh-6',
        title: 'Rust & Renewal',
        artist: 'Nico Ferro',
        artistBio:
            'Argentine sculptor and painter exploring industrial decay through an organic lens.',
        artistImage: artistPhoto,
        description:
            'Iron meets moss in this provocative collection where Ferro welds reclaimed metal into skeletal tree forms, then allows real moss and lichen to colonise the surfaces. A raw dialogue between industry and nature.',
        image: images[0],
        startDate: '2025-10-01',
        endDate: '2025-11-10',
        status: 'past',
        artworks: makeArtworks('exh-6', 5),
    },
];

/** Lookup a single exhibition by id */
export function getExhibitionById(id: string): Exhibition | undefined {
    return exhibitions.find((e) => e.id === id);
}

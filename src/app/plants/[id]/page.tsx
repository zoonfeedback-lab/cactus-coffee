import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { plantsData } from '@/lib/plants-data';
import Container from '@/components/ui/Container';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { ArrowLeft, Sun, Droplets, Sparkles, ShoppingBag, Leaf } from 'lucide-react';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return plantsData.map((plant) => ({
        id: plant.id,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const plant = plantsData.find(p => p.id === id);
    if (!plant) return { title: 'Plant Not Found' };

    return {
        title: `${plant.name} | Cactus Coffee Plant Shop`,
        description: plant.description,
    };
}

export default async function PlantDetailPage({ params }: Props) {
    const { id } = await params;
    const plant = plantsData.find(p => p.id === id);

    if (!plant) {
        notFound();
    }

    // Get related plants (same category, excluding current)
    const related = plantsData
        .filter(p => p.category === plant.category && p.id !== plant.id)
        .slice(0, 4);

    // Level-to-color mapping
    const levelColor = {
        Beginner: 'bg-green-50 text-green-700 border-green-200',
        Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
        Advanced: 'bg-red-50 text-red-700 border-red-200',
    };

    return (
        <main className="min-h-screen bg-surface">
            {/* Hero image */}
            <section className="relative w-full h-72 sm:h-96 lg:h-[500px] bg-[#e8f0e4] overflow-hidden">
                <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <Container className="relative h-full flex flex-col justify-end pb-10 sm:pb-14">
                    <Link
                        href="/plants"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-semibold mb-6 transition-colors w-fit"
                    >
                        <ArrowLeft size={14} /> Back to Plants
                    </Link>
                    <span className={`px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full w-fit mb-3 border ${levelColor[plant.level]}`}>
                        {plant.level}
                    </span>
                    <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                        {plant.name}
                    </h1>
                </Container>
            </section>

            {/* Content */}
            <Container className="py-12 sm:py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* LEFT: Main Info */}
                    <div className="flex-1 min-w-0">
                        {/* Description */}
                        <div className="mb-10">
                            <h2 className="font-heading text-xl font-bold text-text-main mb-4">About This Plant</h2>
                            <p className="text-text-light text-sm sm:text-base leading-relaxed">
                                {plant.description}
                            </p>
                            <p className="text-text-light text-sm sm:text-base leading-relaxed mt-4">
                                Each plant from Cactus Coffee is hand-selected for health and beauty. We guarantee strong root systems and vibrant foliage — so your new green companion thrives from day one. Pair it with one of our handcrafted pots or let it shine on its own.
                            </p>
                        </div>

                        {/* Care Guide */}
                        <div className="mb-10">
                            <h2 className="font-heading text-xl font-bold text-text-main mb-6">Care Guide</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-surface-alt rounded-2xl border border-border p-5 flex flex-col items-center text-center gap-2">
                                    <Sun size={22} className="text-amber-500" />
                                    <span className="text-xs font-bold text-text-main">Light</span>
                                    <span className="text-[11px] text-text-light">{plant.light}</span>
                                </div>
                                <div className="bg-surface-alt rounded-2xl border border-border p-5 flex flex-col items-center text-center gap-2">
                                    <Droplets size={22} className="text-blue-400" />
                                    <span className="text-xs font-bold text-text-main">Watering</span>
                                    <span className="text-[11px] text-text-light">{plant.watering}</span>
                                </div>
                                <div className="bg-surface-alt rounded-2xl border border-border p-5 flex flex-col items-center text-center gap-2">
                                    <Sparkles size={22} className="text-primary" />
                                    <span className="text-xs font-bold text-text-main">Difficulty</span>
                                    <span className="text-[11px] text-text-light">{plant.level}</span>
                                </div>
                            </div>
                        </div>

                        {/* Related Plants */}
                        {related.length > 0 && (
                            <div>
                                <h2 className="font-heading text-xl font-bold text-text-main mb-6">
                                    More <span className="text-primary">{plant.category.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}</span> Plants
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {related.map((r) => (
                                        <Link key={r.id} href={`/plants/${r.id}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-500">
                                            <div className="relative h-36 overflow-hidden">
                                                <Image src={r.image} alt={r.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="text-xs font-bold text-text-main line-clamp-1 group-hover:text-primary transition-colors">
                                                    {r.name}
                                                </h4>
                                                <span className="text-[10px] text-text-light/60 mt-1 block">PKR {r.price.toLocaleString()}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Sidebar */}
                    <aside className="w-full lg:w-80 xl:w-96 shrink-0">
                        <div className="lg:sticky lg:top-32 flex flex-col gap-6">
                            {/* Price & Actions Card */}
                            <div className="bg-white rounded-3xl border border-border p-7 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl font-extrabold text-text-main">
                                        <span className="text-sm font-normal italic opacity-70 mr-1">PKR</span>
                                        {plant.price.toLocaleString()}
                                    </span>
                                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[9px] font-bold uppercase tracking-widest rounded-full border border-green-200">
                                        In Stock
                                    </span>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-full transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                        <ShoppingBag size={16} /> Add to Cart
                                    </button>
                                    <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary font-bold py-3.5 rounded-full transition-colors text-sm hover:bg-primary/5">
                                        Buy Now
                                    </button>
                                </div>

                                <p className="text-[10px] text-text-light/50 mt-4 text-center">
                                    Also available at our Mandian, Abbottabad café.
                                </p>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-white rounded-3xl border border-border p-7 shadow-sm">
                                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-text-main mb-5 flex items-center gap-2">
                                    <Leaf size={14} className="text-primary" /> Quick Facts
                                </h3>
                                <ul className="space-y-3 text-xs text-text-light">
                                    <li className="flex justify-between border-b border-border/30 pb-3">
                                        <span>Category</span>
                                        <span className="font-semibold text-text-main">{plant.category.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/30 pb-3">
                                        <span>Light</span>
                                        <span className="font-semibold text-text-main">{plant.light}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/30 pb-3">
                                        <span>Watering</span>
                                        <span className="font-semibold text-text-main">{plant.watering}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/30 pb-3">
                                        <span>Difficulty</span>
                                        <span className="font-semibold text-text-main">{plant.level}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Size</span>
                                        <span className="font-semibold text-text-main">{plant.size === 'sm' ? 'Small' : plant.size === 'md' ? 'Medium' : 'Large'}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}

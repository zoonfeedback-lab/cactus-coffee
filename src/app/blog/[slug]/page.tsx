import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, blogArticles, getPopularArticles } from '@/lib/blog-data';
import Container from '@/components/ui/Container';
import { ArrowLeft, Clock, CalendarDays, Tag } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogArticles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) return { title: 'Article Not Found' };

    return {
        title: `${article.title} | The Cactus Journal`,
        description: article.excerpt,
    };
}

export default async function BlogArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = blogArticles
        .filter(a => a.id !== article.id && a.category === article.category)
        .slice(0, 3);

    const popularArticles = getPopularArticles().filter(a => a.id !== article.id).slice(0, 4);

    return (
        <main className="min-h-screen bg-surface">
            {/* Hero Banner */}
            <section className="relative w-full h-72 sm:h-96 lg:h-[480px] bg-[#1a1a1a] overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover opacity-80"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <Container className="relative h-full flex flex-col justify-end pb-10 sm:pb-14">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-semibold mb-6 transition-colors w-fit"
                    >
                        <ArrowLeft size={14} /> Back to Journal
                    </Link>
                    <span className="px-3 py-1 bg-accent/90 text-primary-dark text-[9px] font-bold uppercase tracking-widest rounded-full w-fit mb-4">
                        {article.category}
                    </span>
                    <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl tracking-tight">
                        {article.title}
                    </h1>
                </Container>
            </section>

            {/* Article Meta + Content */}
            <Container className="py-12 sm:py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* LEFT: Article Body */}
                    <article className="flex-1 min-w-0">
                        {/* Author & Meta Bar */}
                        <div className="flex flex-wrap items-center gap-5 pb-8 mb-8 border-b border-border">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full overflow-hidden relative border-2 border-primary/20">
                                    <Image src={article.author.image} alt={article.author.name} fill className="object-cover" sizes="44px" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-text-main">{article.author.name}</p>
                                    <p className="text-[11px] text-primary font-medium">{article.author.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-text-light/60">
                                <span className="flex items-center gap-1.5"><CalendarDays size={13} /> {article.date}</span>
                                <span className="flex items-center gap-1.5"><Clock size={13} /> {article.readTime}</span>
                            </div>
                        </div>

                        {/* Article Content (Mock rich text) */}
                        <div className="prose prose-lg max-w-none text-text-light leading-[1.9]">
                            <p className="text-lg text-text-main font-medium leading-relaxed mb-6">
                                {article.excerpt}
                            </p>

                            <p>
                                At Cactus Coffee, we believe that great coffee is more than just a drink — it&apos;s an experience that connects people, sparks creativity, and brings communities together. This article dives deep into the story behind {article.title.toLowerCase()}, exploring the craft, the culture, and the passion that drives us daily.
                            </p>

                            <h2 className="font-heading text-2xl font-bold text-text-main mt-10 mb-4">The Beginning</h2>
                            <p>
                                Every great story starts with a seed of inspiration. For us, it was the desire to create a space where coffee enthusiasts, artists, and curious minds could come together. From carefully selecting our beans to designing our café space, every detail has been thoughtfully curated. Whether you&apos;re a seasoned barista or just discovering specialty coffee, there&apos;s always more to explore above and beyond.
                            </p>

                            <h2 className="font-heading text-2xl font-bold text-text-main mt-10 mb-4">The Process</h2>
                            <p>
                                Quality starts at the source. We work with trusted suppliers to ensure our beans meet the highest standards. Each batch goes through meticulous roasting to bring out its unique character — from the rich, chocolatey notes of our house blend to the bright, fruity undertones of our single-origin selections. The roasting process itself is both art and science, requiring precision and intuition in equal measure.
                            </p>

                            <blockquote className="border-l-4 border-primary bg-surface-alt rounded-r-xl p-6 my-8 italic text-text-main/80">
                                &ldquo;Coffee is a language in itself. Every cup tells a story of the hands that grew it, roasted it, and brewed it.&rdquo;
                            </blockquote>

                            <h2 className="font-heading text-2xl font-bold text-text-main mt-10 mb-4">Looking Forward</h2>
                            <p>
                                As we continue to grow, our commitment to quality, community, and creativity remains at the heart of everything we do. We&apos;re excited about the future and the many cups of inspiration yet to come. Stay tuned for more stories from The Cactus Journal — your window into the world behind the counter.
                            </p>
                        </div>

                        {/* Tags */}
                        {article.tags.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-border">
                                <div className="flex items-center gap-2 mb-4">
                                    <Tag size={14} className="text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-text-main">Tags</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-surface-alt text-text-light text-[11px] font-semibold rounded-full border border-border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Related Articles */}
                        {relatedArticles.length > 0 && (
                            <div className="mt-16">
                                <h3 className="font-heading text-xl font-bold text-text-main mb-8">
                                    More in <span className="text-primary">{article.category}</span>
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {relatedArticles.map(related => (
                                        <Link key={related.id} href={`/blog/${related.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-500">
                                            <div className="relative h-40 overflow-hidden">
                                                <Image src={related.image} alt={related.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, 33vw" />
                                            </div>
                                            <div className="p-5">
                                                <h4 className="text-sm font-bold text-text-main line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                    {related.title}
                                                </h4>
                                                <span className="text-[10px] text-text-light/60 mt-2 block">{related.readTime}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    {/* RIGHT: Sidebar */}
                    <aside className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-8">
                        {/* Popular Posts */}
                        <div className="bg-white rounded-3xl border border-border p-6 shadow-sm lg:sticky lg:top-32">
                            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-text-main mb-6">
                                Popular Articles
                            </h3>
                            <ul className="space-y-5">
                                {popularArticles.map((post, idx) => (
                                    <li key={post.id}>
                                        <Link href={`/blog/${post.slug}`} className="flex items-start gap-4 group">
                                            <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-surface-alt">
                                                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="56px" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-xs font-bold text-text-main line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                    {post.title}
                                                </h4>
                                                <span className="text-[10px] text-text-light/60 mt-1 block">{post.readTime}</span>
                                            </div>
                                        </Link>
                                        {idx < popularArticles.length - 1 && <hr className="border-border/30 mt-5" />}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter Mini */}
                        <div className="bg-primary-dark rounded-3xl p-6 text-center">
                            <h3 className="font-heading text-base font-bold text-white mb-2">Stay Inspired</h3>
                            <p className="text-white/50 text-xs mb-4">Get weekly coffee & creativity insights.</p>
                            <form className="flex flex-col gap-2" action="#">
                                <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-accent/50" />
                                <button type="submit" className="bg-accent hover:bg-accent-light text-primary-dark font-bold py-2.5 rounded-full text-xs transition-colors">Subscribe</button>
                            </form>
                        </div>
                    </aside>
                </div>
            </Container>
        </main>
    );
}

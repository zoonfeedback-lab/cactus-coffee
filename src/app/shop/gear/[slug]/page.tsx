import { notFound } from 'next/navigation';
import { getGearProductBySlug, gearProducts } from '@/lib/gear-data';
import Container from '@/components/ui/Container';
import ProductGallery from '@/components/shop/gear/ProductGallery';
import ProductInfo from '@/components/shop/gear/ProductInfo';
import RelatedProducts from '@/components/shop/gear/RelatedProducts';
import GearNewsletter from '@/components/shop/gear/GearNewsletter';

interface Props {
    params: {
        slug: string;
    };
}

// Generate static params so Next.js knows which pages to build
export async function generateStaticParams() {
    return gearProducts.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const product = getGearProductBySlug(params.slug);
    if (!product) return { title: 'Product Not Found' };

    return {
        title: `${product.name} | Cactus Coffee Gear`,
        description: product.description,
    };
}

export default function GearProductPage({ params }: Props) {
    const product = getGearProductBySlug(params.slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-bg">
            <Container className="pt-8 sm:pt-12 pb-16 sm:pb-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left: Sticky Image Gallery */}
                    <div className="w-full lg:w-[50%] xl:w-[55%]">
                        <div className="lg:sticky lg:top-32">
                            <ProductGallery images={product.images} productName={product.name} />
                        </div>
                    </div>

                    {/* Right: Scrolling Product Info */}
                    <div className="w-full lg:w-[50%] xl:w-[45%] lg:pt-4">
                        <ProductInfo product={product} />
                    </div>

                </div>
            </Container>

            {/* Related Products Section */}
            <RelatedProducts />

            {/* Re-use Newsletter block */}
            <GearNewsletter />
        </main>
    );
}

import { getLabelFromTag } from '@/services/labelService';
import { getProductById } from '@/services/productService';
import { Suspense } from 'react';
import Link from 'next/link';
import ProductBuyInfo from '@/components/ProductBuyInfo';
import ProductImageCarousel from '@/components/ProductImageCarousel';
import RelatedProductsList from '@/components/RelatedProductsList';
import RelatedProductsListPlaceholder from '@/components/placeholders/RelatedProductsListPlaceholder';

type Props = {
	params: {
		id: string;
	};
};

const RELATED_PRODUCTS_LIMIT = 4;

export default async function ProductDetail({ params }: Props) {
	const id: string = params.id;
	const product = await getProductById(id);

	const category = getLabelFromTag(product.category);

	return (
		<div className="mx-auto space-y-4">
			<span>
				<Link href={`/category/${product.category}`}>Categoría</Link> {'> '}
				<Link href={`/category/${product.category}`} className="capitalize">
					{category}
				</Link>
			</span>
			<main className="grid p-8 bg-white rounded-md sm:grid-cols-2 gap-6 md:gap-12">
				<ProductImageCarousel images={product.images} />
				<ProductBuyInfo product={product} />
				<div className="mt-4 md:mt-0 sm:col-span-2">
					<h2 className="text-xl font-bold">
						Caracteristicas de {product.title}
					</h2>
					<p>{product.description}</p>
				</div>
			</main>
			<section>
				<h2 className="text-2xl font-bold">Productos relacionados</h2>
				<Suspense
					fallback={
						<RelatedProductsListPlaceholder
							productAmount={RELATED_PRODUCTS_LIMIT}
						/>
					}
				>
					<RelatedProductsList
						category={product.category}
						productsAmount={RELATED_PRODUCTS_LIMIT}
					/>
				</Suspense>
			</section>
		</div>
	);
}

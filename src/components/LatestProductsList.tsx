import { getAllProducts } from '@/services/productService';
import { Product } from '@/lib/definitions';
import RelatedProductCard from './RelatedProductCard';

const PRODUCT_LIMIT = 4;

export default async function LatestProductsList() {
	const latestProducts: Product[] = await getAllProducts(PRODUCT_LIMIT);

	// This is just to show the skeleton loading animation
	const pause = new Promise((resolve) => setTimeout(resolve, 1000));
	await pause;
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{latestProducts.map((product) => (
				<RelatedProductCard product={product} key={product.id} />
			))}
		</div>
	);
}

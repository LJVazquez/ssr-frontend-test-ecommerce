import { getProductsByCategory } from '@/services/productService';
import RelatedProductCard from './RelatedProductCard';
import { Product } from '@/lib/definitions';

type Props = {
	category: string;
	productsAmount: number;
};

export default async function RelatedProductsList({
	category,
	productsAmount,
}: Props) {
	const relatedProducts = await getProductsByCategory(category, productsAmount);

	// This is just to show the skeleton loading animation
	const pause = new Promise((resolve) => setTimeout(resolve, 1000));
	await pause;

	return (
		<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
			{relatedProducts.map((product: Product) => {
				return (
					<RelatedProductCard
						product={product}
						key={product.title + product.id}
					/>
				);
			})}
		</div>
	);
}

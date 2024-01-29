import { getProductsByCategory } from '@/services/productService';
import { Product } from '@/lib/definitions';
import ProductCard from '@/components/ProductCard';
import SearchNotFound from '@/components/SearchNotFound';

type Props = {
	params: { category: string };
};

export default async function Categories({ params }: Props) {
	const category: string = decodeURI(params.category);
	const categoryItems: Product[] = await getProductsByCategory(category);

	// This is just to show the skeleton loading animation
	const pause = new Promise((resolve) => setTimeout(resolve, 1000));
	await pause;

	if (categoryItems.length > 0) {
		return (
			<>
				<h1 className="text-2xl font-bold">
					Se encontraron {categoryItems.length} resultados
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{categoryItems.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</div>
			</>
		);
	}

	return <SearchNotFound />;
}

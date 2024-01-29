import ProductCard from '@/components/ProductCard';
import SearchNotFound from '@/components/SearchNotFound';
import { Product } from '@/lib/definitions';
import { searchProduct } from '@/services/productService';

type Props = {
	params: { product: string };
};

export default async function ProductSearchResultList({ params }: Props) {
	const searchedProduct: string = decodeURI(params.product);
	const foundProducts: Product[] = await searchProduct(searchedProduct);

	// This is just to show the skeleton loading animation
	const pause = new Promise((resolve) => setTimeout(resolve, 1000));
	await pause;

	if (foundProducts.length > 0) {
		return (
			<>
				<h1 className="text-2xl font-bold">
					Se encontraron {foundProducts.length} resultados
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{foundProducts.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</div>
			</>
		);
	}

	return <SearchNotFound />;
}

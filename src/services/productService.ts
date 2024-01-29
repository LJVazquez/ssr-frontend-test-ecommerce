import { ApiProduct, Product } from '@/lib/definitions';
import * as productRepository from '@/repositories/productRepository';

export const searchProduct = async (product: string): Promise<Product[]> => {
	const res = await productRepository.search(product);
	const foundProducts = res.products.map((apiProduct) =>
		AdaptProductFromApi(apiProduct)
	);

	return foundProducts;
};

export const getProductById = async (id: string): Promise<Product> => {
	const apiProduct = await productRepository.findById(id);
	const product = AdaptProductFromApi(apiProduct);

	return product;
};

export const getCategories = async (): Promise<string[]> => {
	const apiCategories: string[] = await productRepository.findAllCategories();
	return apiCategories;
};

export const getProductsByCategory = async (
	category: string,
	limit?: number
): Promise<Product[]> => {
	const res = await productRepository.findByCategory(category, limit);
	const foundProducts = res.products.map((apiProduct: ApiProduct) =>
		AdaptProductFromApi(apiProduct)
	);

	return foundProducts;
};

export const getAllProducts = async (limit?: number): Promise<Product[]> => {
	const res = await productRepository.findAll(limit);
	const foundProducts = res.products.map((apiProduct: ApiProduct) =>
		AdaptProductFromApi(apiProduct)
	);

	return foundProducts;
};

const AdaptProductFromApi = (apiProduct: ApiProduct): Product => {
	const product: Product = {
		id: apiProduct.id,
		title: apiProduct.title,
		description: apiProduct.description,
		price: apiProduct.price,
		discountPercentage: apiProduct.discountPercentage,
		rating: apiProduct.rating,
		stock: apiProduct.stock,
		brand: apiProduct.brand,
		category: apiProduct.category,
		thumbnail: apiProduct.thumbnail,
		images: apiProduct.images,
	};

	return product;
};

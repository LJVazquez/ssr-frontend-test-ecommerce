import { ApiProductSearch } from '@/lib/definitions';
import { ApiProduct } from '../lib/definitions';

const BASE_URL = process.env.DUMMY_JSON_BASE_URL;

export const search = async (product: string): Promise<ApiProductSearch> => {
	try {
		const res = await fetch(`${BASE_URL}/products/search?q=${product}`);

		const data: ApiProductSearch = await res.json();
		return data;
	} catch (e: any) {
		console.error('error while searching products', e);
		throw new Error(e.message);
	}
};

export const findById = async (id: string) => {
	try {
		const res = await fetch(`${BASE_URL}/products/${id}`);
		const data: ApiProduct = await res.json();
		return data;
	} catch (e: any) {
		console.error('error while fetching product', e);
		throw new Error(e.message);
	}
};

export const findAllCategories = async () => {
	try {
		const res = await fetch(`${BASE_URL}/products/categories`);
		const data: string[] = await res.json();
		return data;
	} catch (e: any) {
		console.error('error while fetching categories', e);
		throw new Error(e.message);
	}
};

export const findByCategory = async (category: string, limit: number) => {
	try {
		const limitParam = limit ? `?limit=${limit}` : '';
		const url = `${BASE_URL}/products/category/${category}${limitParam}`;
		const res = await fetch(url);

		const data: { products: ApiProduct[] } = await res.json();
		return data;
	} catch (e: any) {
		console.error('error while fetching products by category', e);
		throw new Error(e.message);
	}
};

export const findAll = async (limit?: number) => {
	try {
		const limitParam = limit ? `?limit=${limit}` : '';
		const url = `${BASE_URL}/products${limitParam}`;

		const res = await fetch(url);

		const data: { products: ApiProduct[] } = await res.json();
		return data;
	} catch (e: any) {
		console.error('error while fetching products', e);
		throw new Error(e.message);
	}
};

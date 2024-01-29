'use client';

import { Product } from '@/lib/definitions';
import { Button } from './ui/button';
import { useCart } from '@/contexts/CartContext';

type Props = {
	product: Product;
};

export default function AddToCartButton({ product }: Props) {
	const { cartProducts, addProductToCart, removeProductFromCart } = useCart();

	const handleAddProduct = () => {
		addProductToCart(product);
	};

	const handleRemoveProduct = () => {
		removeProductFromCart(product.id);
	};

	const isProductOutOfStock = product.stock === 0;
	const isProductInCart = cartProducts.some(
		(cartProduct) => cartProduct.id === product.id
	);

	if (isProductOutOfStock) {
		return (
			<div className="mt-4 space-y-2 text-center">
				<Button disabled className="w-full">
					Producto agotado
				</Button>
			</div>
		);
	}

	return (
		<div className="mt-4 space-y-2 text-center">
			<p className="text-sm">
				{product.stock === 1
					? '¡Última unidad disponible!'
					: `Quedan ${product.stock} unidades disponibles`}
			</p>
			{isProductInCart ? (
				<Button
					onClick={handleRemoveProduct}
					className="bg-white border border-pink-400 text-pink-400 hover:bg-pink-100 w-full"
				>
					Quitar del carrito
				</Button>
			) : (
				<Button onClick={handleAddProduct} className="w-full">
					Añadir al carrito
				</Button>
			)}
		</div>
	);
}

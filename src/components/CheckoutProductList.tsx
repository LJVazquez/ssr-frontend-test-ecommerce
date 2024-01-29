'use client';

import CheckoutProduct from './CheckoutProduct';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/definitions';

export default function CheckoutProductList() {
	const { grandTotal, cartProducts } = useCart();
	const productsIds = cartProducts.map((product: Product) => product.id);

	return (
		<section className="p-4 bg-white rounded-lg md:col-span-2 mb-4">
			<input type="hidden" name="items" value={JSON.stringify(productsIds)} />
			<h2 className="text-lg font-semibold">Tu carrito</h2>
			<div className="mt-4 space-y-2">
				{cartProducts.length > 0 ? (
					cartProducts.map((product: Product) => (
						<CheckoutProduct key={product.id} product={product} />
					))
				) : (
					<p>No hay productos en tu carrito</p>
				)}

				<div className="flex items-center justify-between">
					<span className="text-lg font-semibold">Total</span>
					<span className="text-lg font-semibold">${grandTotal}</span>
				</div>
			</div>
		</section>
	);
}

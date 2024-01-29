import { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../lib/definitions';

type Props = {
	children: React.ReactNode;
};

type CartContextType = {
	cartProducts: Product[];
	addProductToCart: (product: Product) => void;
	removeProductFromCart: (id: number) => void;
	clearCart: () => void;
	grandTotal: number;
};

export const CartContext = createContext<CartContextType>(null as any);

export function CartProvider({ children }: Props) {
	const [cartProducts, setCartProducts] = useState<Product[]>([]);

	const addProductToCart = (product: Product) => {
		const updatedCartProducts = [...cartProducts, product];
		setCartProducts(updatedCartProducts);
		saveCartProductsToLocalstorage(updatedCartProducts);
	};

	const removeProductFromCart = (id: number) => {
		const updatedCartProducts = cartProducts.filter(
			(product) => product.id !== id
		);
		setCartProducts(updatedCartProducts);
		saveCartProductsToLocalstorage(updatedCartProducts);
	};

	const clearCart = () => {
		setCartProducts([]);
		saveCartProductsToLocalstorage([]);
	};

	const grandTotal: number = cartProducts.reduce(
		(acc, product) => acc + product.price,
		0
	);

	const saveCartProductsToLocalstorage = (cartProducts: Product[]) => {
		localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
	};

	useEffect(() => {
		const storedCartProducts = localStorage.getItem('cartProducts');

		if (storedCartProducts) {
			setCartProducts(JSON.parse(storedCartProducts));
		}
	}, []);

	const cartContextValue: CartContextType = {
		cartProducts,
		addProductToCart,
		removeProductFromCart,
		clearCart,
		grandTotal,
	};

	return (
		<CartContext.Provider value={cartContextValue}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used inside a CartProvider children');
	}
	return context;
}

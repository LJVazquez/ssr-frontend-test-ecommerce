'use client';
import Link from 'next/link';
import { CartIcon } from './ui/icons';
import { useCart } from '@/contexts/CartContext';

export default function NavCart() {
	const { cartProducts } = useCart();

	return (
		<Link
			href="/checkout"
			className="flex space-x-1 hover:text-gray-300 transition"
		>
			<span>{cartProducts.length}</span> <CartIcon />
		</Link>
	);
}

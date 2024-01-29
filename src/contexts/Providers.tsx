'use client';

import { CartProvider } from './CartContext';

type Props = {
	children: React.ReactNode;
};

export function Providers({ children }: Props) {
	return <CartProvider>{children}</CartProvider>;
}

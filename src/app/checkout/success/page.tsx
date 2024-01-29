'use client';
import { useCart } from '@/contexts/CartContext';
import { useEffect } from 'react';
import Image from 'next/image';

type Props = {
	searchParams: {
		order_id: string;
	};
};

export default function SuccessPage({ searchParams }: Props) {
	const orderId = searchParams.order_id;
	const { clearCart } = useCart();

	useEffect(() => {
		clearCart();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex mt-10 justify-center p-4 sm:p-0">
			<main className="text-center bg-white p-4 rounded-lg">
				<h1 className="font-medium text-2xl">
					¡Orden Nº {orderId} creada con éxito!
				</h1>
				<Image
					src="/order-confirmation.svg"
					width={500}
					height={500}
					alt="order confirmation"
				/>
			</main>
		</div>
	);
}

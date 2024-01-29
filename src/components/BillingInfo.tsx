import React from 'react';
import { Input } from './ui/input';

export default function CheckoutBillingInfo() {
	return (
		<section className="mb-4 p-4 bg-white rounded-lg">
			<h2 className="text-lg font-semibold">Facturación</h2>
			<div className="mt-4 space-y-4">
				<Input
					required
					className="py-2"
					name="card"
					placeholder="Numero de tarjeta"
					type="number"
				/>
				<Input
					required
					className="py-2"
					name="expiry"
					placeholder="Fecha de expiración"
					type="text"
					pattern="[0-9]{2}\/[0-9]{2}"
				/>
				<Input
					required
					className="py-2"
					name="cvc"
					placeholder="CVC"
					type="text"
					maxLength={3}
				/>
			</div>
		</section>
	);
}

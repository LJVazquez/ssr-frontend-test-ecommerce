import React from 'react';
import { Input } from './ui/input';

export default function CheckoutAdressInfo() {
	return (
		<section className="mb-4 p-4 bg-white rounded-lg">
			<h2 className="text-lg font-semibold">Información de envío</h2>
			<div className="mt-4 space-y-4">
				<Input
					type="text"
					className="py-2"
					name="name"
					placeholder="Nombre"
					required
				/>
				<Input
					type="email"
					className="py-2"
					name="email"
					placeholder="Email"
					required
				/>
				<Input
					type="text"
					className="py-2"
					name="address"
					placeholder="Dirección"
					required
				/>
				<Input
					type="text"
					className="py-2"
					name="city"
					placeholder="Ciudad"
					required
				/>
				<Input
					type="text"
					className="py-2"
					name="state"
					placeholder="Provincia"
					required
				/>
				<Input
					type="text"
					className="py-2"
					name="zip"
					placeholder="Código Postal"
					required
				/>
			</div>
		</section>
	);
}

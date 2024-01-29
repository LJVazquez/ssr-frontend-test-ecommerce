'use server';

import { redirect } from 'next/navigation';

export const generateOrder = (formData: FormData) => {
	const data = Object.fromEntries(formData.entries());
	data.items = JSON.parse(data.items as string);

	console.log('data', data);

	redirect(`/checkout/success?order_id=${(Math.random() * 10000).toFixed(0)}`);
};

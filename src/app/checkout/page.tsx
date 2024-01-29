'use server';
import { Button } from '@/components/ui/button';
import { generateOrder } from '@/lib/actions';
import CheckoutBillingInfo from '@/components/BillingInfo';
import CheckoutAdressInfo from '@/components/CheckoutAdressInfo';
import CheckoutProductList from '../../components/CheckoutProductList';

export default async function Component() {
	return (
		<main className="container px-6 py-8">
			<h1 className="text-2xl font-bold mb-4 col-span-4">Checkout</h1>
			<form
				action={generateOrder}
				className="md:grid md:grid-cols-4 gap-x-4 md:gap-x-8"
			>
				<CheckoutProductList />
				<div className="md:col-span-2">
					<CheckoutAdressInfo />
					<div>
						<CheckoutBillingInfo />
						<Button className="w-full">Completar compra</Button>
					</div>
				</div>
			</form>
		</main>
	);
}

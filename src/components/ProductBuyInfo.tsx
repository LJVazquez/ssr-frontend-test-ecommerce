import { Product } from '@/lib/definitions';
import { StarIcon } from 'lucide-react';
import AddToCartButton from './AddToCartButton';

type Props = {
	product: Product;
};

export default function ProductBuyInfo({ product }: Props) {
	return (
		<div className="md:p-6 flex flex-col justify-between">
			<div className="space-y-3">
				<div className="flex justify-between items-start">
					<div>
						<h1 className="font-semibold text-3xl lg:text-4xl">
							{product.title}
						</h1>
						<span>{product.brand}</span>
					</div>
					<div className="flex items-center text-yellow-500">
						<StarIcon /> {product.rating}
					</div>
				</div>
				<div className="text-4xl font-semibold">$ {product.price}</div>
				<p className="text-sm">
					O en 6 cuotas fijas de{' '}
					<strong>${(product.price / 6).toFixed(2)}</strong> pagando con nuestra
					linea exclusiva de crédito
				</p>
				<p className="font-semibold">Lo que debes saber de este producto:</p>
				<ul className="text-sm list-disc list-inside">
					<li>Lorem, ipsum dolor.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>
			</div>

			<AddToCartButton product={product} />
		</div>
	);
}

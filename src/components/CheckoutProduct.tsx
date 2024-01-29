import { Product } from '@/lib/definitions';
import Image from 'next/image';
import { TrashCanIcon } from './ui/icons';
import { useCart } from '@/contexts/CartContext';

type Props = {
	product: Product;
};

export default function CheckoutProduct({ product }: Props) {
	const { removeProductFromCart } = useCart();

	const handleRemoveProduct = () => {
		removeProductFromCart(product.id);
	};

	return (
		<div className="flex items-start justify-between space-x-2">
			<div className="flex space-x-4">
				<Image
					src={product.thumbnail}
					width={100}
					height={100}
					alt={product.title}
					className="rounded-lg aspect-square"
					priority
				/>
				<div className="">
					<span className="truncate text-pretty max-h-[100px] block">
						<abbr title={product.title}>{product.title}</abbr>
					</span>
					<span className="font-bold">${product.price}</span>
				</div>
			</div>
			<button type="button" onClick={handleRemoveProduct}>
				<TrashCanIcon />
			</button>
		</div>
	);
}

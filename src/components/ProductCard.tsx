import { Product } from '@/lib/definitions';
import { StarIcon } from './ui/icons';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	product: Product;
};

export default function ProductCard({ product }: Props) {
	return (
		<Link
			href={`/product/${product.id}`}
			className="grid grid-cols-5 sm:block sm:hover:shadow-md p-4 sm:rounded-lg delay-200 border-b border-slate-300 sm:border-0"
		>
			<Image
				alt={product.title}
				className="col-span-2 object-cover aspect-square rounded-lg"
				height={300}
				width={400}
				src={product.thumbnail}
			/>
			<div className="col-span-3 px-4 sm:px-0 sm:py-4 sm:space-y-0">
				<div className="sm:flex justify-between">
					<h3 className="truncate text-pretty sm:text-nowrap break-all max-h-20 sm:text-sm">
						<abbr title={product.title}>{product.title}</abbr>
					</h3>
					<div className="flex items-center text-sm text-yellow-500">
						<StarIcon /> {product.rating}
					</div>
				</div>
				<h4 className="font-semibold text-base text-xl">${product.price}</h4>
			</div>
		</Link>
	);
}

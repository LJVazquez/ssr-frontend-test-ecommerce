import { Product } from '@/lib/definitions';
import { StarIcon } from './ui/icons';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	product: Product;
};

export default function RelatedProductCard({ product }: Props) {
	return (
		<Link
			href={`/product/${product.id}`}
			className="sm:block hover:shadow-md p-4 sm:rounded-lg"
		>
			<Image
				alt={product.title}
				className="col-span-2 object-cover aspect-square rounded-lg"
				height={300}
				width={400}
				src={product.thumbnail}
			/>
			<div className="col-span-3 px-1 sm:px-0 sm:py-4 sm:space-y-0 mt-1">
				<div className="sm:flex justify-between">
					<h3 className="truncate text-sm">
						<abbr title={product.title}>
							{product.title} Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Voluptas, provident?
						</abbr>
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

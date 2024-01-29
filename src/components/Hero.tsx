import Image from 'next/image';

import ProductSearchBar from './ProductSearchBar';

export default function Hero() {
	return (
		<div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center text-pink-400">
			<Image
				src="/hero.svg"
				height={550}
				width={550}
				alt="Hero image"
				className="object-cover sm:w-full md:order-last"
				priority
			/>
			<div className="block space-y-4 ">
				<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
					Tus productos favoritos en un solo lugar.
				</h1>
				<p className="text-gray-500 md:text-xl">
					Explorá todo lo que tenemos para vos en FakeShop.
				</p>
				<ProductSearchBar />
			</div>
		</div>
	);
}

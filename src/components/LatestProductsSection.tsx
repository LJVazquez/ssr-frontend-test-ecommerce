import { Suspense } from 'react';
import Image from 'next/image';
import LatestProductsList from './LatestProductsList';
import ProductSearchPlaceholder from './placeholders/ProductListPlaceholder';

export default function LatestProductsSection() {
	return (
		<section className="px-4 py-10 sm:py-20 mb-4 bg-white" id="latest">
			<div className="container">
				<div className="flex flex-col items-center gap-4 mb-4">
					<Image
						src="/online-shopping.svg"
						alt="latest products"
						width={100}
						height={100}
						priority
					/>
					<h2 className="text-2xl font-bold">Últimos productos</h2>
				</div>
				<Suspense fallback={<ProductSearchPlaceholder productAmount={4} />}>
					<LatestProductsList />
				</Suspense>
			</div>
		</section>
	);
}

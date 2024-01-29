import ProductCardPlaceholder from '@/components/placeholders/ProductCardPlaceholder';

type Props = {
	productAmount?: number;
	includeSearchResultsTitle?: boolean;
};

export default function ProductSearchPlaceholder({
	productAmount = 8,
	includeSearchResultsTitle,
}: Props) {
	const arr = Array.from({ length: productAmount });

	return (
		<div className="space-y-4">
			{includeSearchResultsTitle && (
				<div className="text-2xl animate-pulse bg-slate-300 h-[2rem] w-56"></div>
			)}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{arr.map((_, i) => (
					<ProductCardPlaceholder key={i} />
				))}
			</div>
		</div>
	);
}

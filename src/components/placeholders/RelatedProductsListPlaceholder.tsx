import RelatedProductCardPlaceholder from './ProductCardPlaceholder';

type Props = {
	productAmount: number;
};

export default function RelatedProductsListPlaceholder({
	productAmount,
}: Props) {
	const arr = Array.from({ length: productAmount });

	return (
		<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
			{arr.map((_, i) => {
				return <RelatedProductCardPlaceholder key={i} />;
			})}
		</div>
	);
}

import ProductSearchBar from '@/components/ProductSearchBar';

type Props = {
	children: React.ReactNode;
	params: { product: string };
};

export default function layout({ children, params }: Props) {
	const searchedProduct: string = decodeURI(params.product);

	return (
		<div className="p-4 md:p-6">
			<div className="mb-4">
				<ProductSearchBar initialSearchString={searchedProduct} />
			</div>
			{children}
		</div>
	);
}

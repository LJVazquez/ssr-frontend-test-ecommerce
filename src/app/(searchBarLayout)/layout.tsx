import ProductSearchBar from '@/components/ProductSearchBar';

type Props = {
	children: React.ReactNode;
};

export default function layout({ children }: Props) {
	return (
		<div className="p-4 md:p-6">
			<div className="mb-4">
				<ProductSearchBar />
			</div>
			{children}
		</div>
	);
}

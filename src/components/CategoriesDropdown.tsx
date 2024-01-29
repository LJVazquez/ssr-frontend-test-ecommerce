import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getLabelFromTag } from '@/services/labelService';
import { getCategories } from '@/services/productService';
import Link from 'next/link';

export async function CategoriesDropdown() {
	const categories = await getCategories();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className="bg-black hover:bg-black hover:text-gray-300 border-0 px-0"
			>
				<Button variant="outline">Categorías</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				{categories.map((category) => (
					<DropdownMenuItem key={category}>
						<Link href={`/category/${category}`}>
							{getLabelFromTag(category)}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

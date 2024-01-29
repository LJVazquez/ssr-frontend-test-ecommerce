import Link from 'next/link';
import { HandBagIcon } from './ui/icons';
import { CategoriesDropdown } from './CategoriesDropdown';
import NavCart from './NavCart';

export default function Navbar() {
	return (
		<nav className="bg-black text-white flex">
			<div className="container my-auto">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex font-bold space-x-1">
						<HandBagIcon />
						<span>FakeShop</span>
					</Link>

					<div className="flex items-center space-x-6">
						<CategoriesDropdown />
						<NavCart />
					</div>
				</div>
			</div>
		</nav>
	);
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Providers } from '../contexts/Providers';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'FakeShop',
	description:
		'Comprá tus productos favoritps en FakeShop. Encontrá miles de marcas y productos a precios increíbles.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<Providers>
				<body
					className={`${inter.className} bg-[#ebebeb] flex flex-col justify-between min-h-full`}
				>
					<div>
						<Navbar />
						{children}
					</div>
					<Footer />
				</body>
			</Providers>
		</html>
	);
}

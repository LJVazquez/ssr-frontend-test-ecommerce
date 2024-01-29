import Link from 'next/link';
import Image from 'next/image';

export default function notFound() {
	return (
		<main className="flex mt-10 flex-col mx-auto items-center space-y-4">
			<Image src="/not-found.svg" width={500} height={500} alt="404" />
			<h1 className="text-2xl font-bold text-center">
				Parece que esta página no existe
			</h1>
			<Link href="/" className="text-sm">
				Volver al home
			</Link>
		</main>
	);
}

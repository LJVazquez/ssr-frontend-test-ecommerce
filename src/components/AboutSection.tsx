import Image from 'next/image';

export default function AboutSection() {
	return (
		<section
			id="about"
			className="px-4 py-10 sm:py-20 space-y-4 flex flex-col items-center"
		>
			<Image
				src="/coding.svg"
				alt="latest products"
				width={200}
				height={200}
				className="mx-auto mb-4"
			/>
			<h2 className="text-2xl font-bold">Acerca de esta app</h2>
			<p className="max-w-xl text-pretty">
				Esta App es parte de una prueba técnica nivel semi senior de frontend
				especializado en React y Next.js. La misma consiste de realizar un
				E-Commerce que consuma la API de productos de{' '}
				<a href="https://dummyjson.com/docs/products" className="font-semibold">
					DummyJson
				</a>
				.
			</p>
			<p>Algunos de los puntos clave son:</p>
			<ul className="list-inside list-disc">
				<li>Utilizar ultima versión de Next</li>
				<li>Utilizar mayormente componentes SSR</li>
				<li>Realizar la confirmación de compra mediante un Server Action</li>
				<li>Uso de TypeScript</li>
				<li>Diseño responsive</li>
			</ul>
		</section>
	);
}

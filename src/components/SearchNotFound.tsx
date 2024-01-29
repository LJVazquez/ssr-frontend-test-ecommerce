import Image from 'next/image';

export default function SearchNotFound() {
	return (
		<div className="bg-white rounded-lg p-6 flex flex-col sm:flex-row justify-center items-center gap-6 max-w-4xl mx-auto mt-12">
			<Image
				src="/missing.webp"
				width={200}
				height={200}
				alt="product not found"
			/>
			<div className="space-y-2 my-auto text-pretty">
				<h3 className="font-semibold text-xl">
					No hay publicaciones que coincidan con tu búsqueda
				</h3>
				<p className="max-w-md">
					Podés probar revisando tu ortografía, utilizando palabras más
					genéricas, o buscando por categorías.
				</p>
			</div>
		</div>
	);
}

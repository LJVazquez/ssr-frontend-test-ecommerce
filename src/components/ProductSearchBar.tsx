'use client';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductSearchBar({ initialSearchString = '' }) {
	const router = useRouter();
	const [searchString, setSearchString] = useState(initialSearchString);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/${searchString}`);
	};

	return (
		<form className="flex max-w-md items-center gap-2" onSubmit={handleSubmit}>
			<Input
				name="searchString"
				placeholder="Buscá productos, marcas y mas"
				type="search"
				value={searchString}
				onChange={(e) => setSearchString(e.target.value)}
				className="py-2 h-10"
			/>
			<Button>Buscar</Button>
		</form>
	);
}

'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function ProductDetailBackButton() {
	const router = useRouter();
	const pathName = usePathname();

	return (
		<>
			<button onClick={() => router.back()} className="text-sm">
				Volver
			</button>
			<span className="text-sm text-slate-400">|</span>
		</>
	);
}

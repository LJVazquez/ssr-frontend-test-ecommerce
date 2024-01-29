import AboutSection from '@/components/AboutSection';
import Hero from '@/components/Hero';
import LatestProductsSection from '@/components/LatestProductsSection';

export default function Home() {
	return (
		<>
			<main className="container py-12 md:py-36 px-8 md:px-12">
				<Hero />
			</main>
			<LatestProductsSection />
			<AboutSection />
		</>
	);
}

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';
import Image from 'next/image';

type Props = {
	images: string[];
};

export default function ProductImageCarousel({ images }: Props) {
	return (
		<div className="md:p-6">
			<Carousel className="w-full max-w-md">
				<CarouselContent>
					{images.map((url, i) => (
						<CarouselItem key={url}>
							<Image
								alt={`Product Image ${i + 1}`}
								className="aspect-square object-contain"
								height={600}
								src={url}
								width={600}
								priority
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="hidden md:block">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</div>
	);
}

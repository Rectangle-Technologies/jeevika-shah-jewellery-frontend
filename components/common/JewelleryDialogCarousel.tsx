import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

interface JewelleryDialogProps {
    imageList: string[]
}

function JewelleryDialogCarousel({ imageList }: JewelleryDialogProps) {
    return (
		<Carousel className="w-full">
			<CarouselContent>
				{imageList.map((src, index) => (
					<CarouselItem key={src + index.toString()}>
						<div className="relative p-1 h-[300px]">
							<Image src={src} fill alt="Jewellery" className=" mx-auto" />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}

export default JewelleryDialogCarousel

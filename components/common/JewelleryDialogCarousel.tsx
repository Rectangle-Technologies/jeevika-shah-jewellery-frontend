import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { imgSrcModifier } from "@/utils/functions/image";

interface JewelleryDialogProps {
	imageList: string[];
}

function JewelleryDialogCarousel({ imageList }: JewelleryDialogProps) {
	return (
		<Carousel className="w-full">
			{imageList.map((src, index) => (
				<div key={src + index.toString()} className="relative p-1 h-[300px]">
					<Image src={imgSrcModifier(src)} fill alt="Jewellery" className="mx-auto" />
				</div>
			))}
		</Carousel>
	);
}

export default JewelleryDialogCarousel;

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
		<Carousel
			className="w-full"
			showThumbs={true}
			renderThumbs={() =>
				imageList.map((src, index) => (
					<div key={"thumb-" + src + index.toString()} className="relative w-16 h-16">
						<Image src={imgSrcModifier(src)} alt="Jewellery thumbnail" fill className="object-cover rounded" sizes="64px" />
					</div>
				))
			}
		>
			{imageList.map((src, index) => (
				<div key={src + index.toString()} className="relative p-1 h-[400px] w-auto">
					<Image src={imgSrcModifier(src)} fill alt="Jewellery" className="mx-auto" />
				</div>
			))}
		</Carousel>
	);
}

export default JewelleryDialogCarousel;

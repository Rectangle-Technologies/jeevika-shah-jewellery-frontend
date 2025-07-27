import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { imgSrcModifier } from "@/utils/functions/image";
import InnerImageZoom from "react-inner-image-zoom";
import "inner-image-zoom/lib/styles.min.css";

interface JewelleryDialogProps {
	imageList: string[];
}

function JewelleryDialogCarousel({ imageList }: JewelleryDialogProps) {
	return (
		<Carousel
			className="w-full md:w-[90%]"
			showThumbs={true}
			renderThumbs={() =>
				imageList.map((src, index) => (
					<div
						key={"thumb-" + src + index.toString()}
						className="relative w-16 h-16"
					>
						<Image
							src={imgSrcModifier(src)}
							alt="Jewellery thumbnail"
							fill
							sizes="64px"
							className="object-cover rounded mx-auto"
						/>
					</div>
				))
			}
		>
			{imageList.map((src, index) => {
				if (src.includes("mp4") || src.includes("mov")) {
					return (
						<div key={src + index.toString()} className="relative w-full h-full flex items-center">
							<video
								src={imgSrcModifier(src)}
								controls
								autoPlay
								muted
								loop
								playsInline
								className="w-full h-full mx-auto rounded-xl shadow-md"
							/>
						</div>
					);
				}
				else {
					return (
						<div key={src + index.toString()} className="relative w-[100%]">
							<InnerImageZoom
								src={imgSrcModifier(src)}
								zoomSrc={imgSrcModifier(src)}
								zoomType="hover"
								fullscreenOnMobile={true}
							/>
							{/* <Image src={imgSrcModifier(src)} fill alt="Jewellery" className="mx-auto" /> */}
						</div>
					);
				}
			})}
		</Carousel>
	);
}

export default JewelleryDialogCarousel;

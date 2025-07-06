"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import "inner-image-zoom/lib/styles.min.css";

interface PersonalisedPiecesProps {
	carouselImages: string[];
}

function PersonalisedPieces({ carouselImages }: PersonalisedPiecesProps) {
	return (
		<div className="w-full mx-auto p-3 flex flex-col gap-2 items-center">
			<p className="text-center text-xl font-semibold text-gray-700 mt-6">Personalized Pieces</p>
			<p className="text-center text-lg text-gray-700 mt-2">Elevate your style with Personalized Bracelets, Earrings, Rings & Necklaces, adorned with your name.</p>

			<Carousel
				className="w-full md:w-[70%] lg:w-[55%]"
				showThumbs={true}
				renderThumbs={() =>
					carouselImages.map((src, index) => (
						<div key={"thumb-" + src + index.toString()} className="relative w-16 h-16">
							<Image src={src} alt="Jewellery thumbnail" fill sizes="64px" className="object-cover rounded mx-auto" />
						</div>
					))
				}
			>
				{carouselImages.map((src, index) => (
					<div key={src + index.toString()} className="relative w-[100%]">
						<InnerImageZoom src={src} zoomSrc={src} zoomType="hover" />
						{/* <Image src={imgSrcModifier(src)} fill alt="Jewellery" className="mx-auto" /> */}
					</div>
				))}
			</Carousel>
			<Button asChild type="button" className="p-6 mt-2 font-normal cursor-pointer">
				<Link href="https://wa.me/9879438794" target="_blank" rel="noopener noreferrer">
					Customise via WhatsApp
				</Link>
			</Button>
		</div>
	);
}

export default PersonalisedPieces;

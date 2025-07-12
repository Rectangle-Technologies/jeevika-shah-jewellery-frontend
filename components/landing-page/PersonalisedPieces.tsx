"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface PersonalisedPiecesProps {
	carouselImages: string[];
}

function PersonalisedPieces({ carouselImages }: PersonalisedPiecesProps) {
	return (
		<div className="w-full mx-auto p-3 flex flex-col gap-2 items-center">
			<p className="text-center text-2xl font-semibold text-gray-700 mt-6">Personalized Pieces</p>
			<p className="text-center w-full md:w-[70%] text-gray-700 mt-2">Elevate your style with Personalized Bracelets, Earrings, Rings & Necklaces, adorned with your name.</p>

			<Carousel className="w-full md:w-[70%] lg:w-[55%] lg:hidden" showThumbs={false} autoPlay={true} infiniteLoop={true}>
				{carouselImages.map((src, index) => (
					<div key={src + index.toString()} className="relative h-[400px]">
						{/* <InnerImageZoom src={src} zoomSrc={src} zoomType="hover" /> */}
						<Image src={src} fill alt="Jewellery" className="mx-auto" />
					</div>
				))}
			</Carousel>
			<div className="w-full hidden mx-auto lg:flex lg:justify-evenly my-5">
				{carouselImages.map((src, index) => (
					<div key={src + index.toString()} className="relative h-[300px] w-[300px]">
						{/* <InnerImageZoom src={src} zoomSrc={src} zoomType="hover" className="h-[300px]" /> */}
						<Image src={src} fill alt="Personalised Jewellery" className="mx-auto object-fill" />
					</div>
				))}
			</div>
			<Button asChild type="button" className="p-6 mt-2 font-normal cursor-pointer">
				<Link href="https://wa.me/9879438794" target="_blank" rel="noopener noreferrer">
					Customise via WhatsApp
				</Link>
			</Button>
		</div>
	);
}

export default PersonalisedPieces;

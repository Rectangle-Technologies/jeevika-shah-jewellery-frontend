"use client";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { imgSrcModifier } from "@/utils/functions/image";
import { MetalPrices } from "@/utils/functions/product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

interface JewelleryCardProps {
	jewelleryItem: Item;
	metalPrices?: MetalPrices | undefined;
}
function JewelleryCard({ jewelleryItem, metalPrices }: JewelleryCardProps) {
	const [hovered, setHovered] = React.useState(false);
	const [primaryImage, setPrimaryImage] = React.useState(jewelleryItem.images[0]);
	const [hoverImage, setHoverImage] = React.useState(jewelleryItem.images[1]);
	const [imgSrcModified, setImgSrcModified] = React.useState(true);

	// React.useEffect(() => {
	// 	if (!imgSrcModified) {
	// 		if (primaryImage) setPrimaryImage(imgSrcModifier(jewelleryItem.images[0]));
	// 		if (hoverImage) setHoverImage(imgSrcModifier(jewelleryItem.images[1]));
	// 		setImgSrcModified(true);
	// 	}
	// }, [jewelleryItem]);

	return (
		<Card className="w-full md:w-11/12 mx-auto my-3 py-0 rounded-none">
			<CardContent onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="px-0">
				<Link href={`/product/${jewelleryItem._id}`} className="flex flex-col justify-between h-full">
					{imgSrcModified ? (
						<div className="relative flex flex-col items-center justify-end p-3 h-[150px] w-[150px] mx-auto overflow-hidden">
							{/* Primary image */}
							{primaryImage && <Image src={primaryImage} alt={jewelleryItem.name} priority sizes="150px" fill className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`} />}

							{/* Hover image */}
							{hoverImage && <Image src={hoverImage} alt={`${jewelleryItem.name} hover`} fill sizes="150px" className={`object-cover transition-opacity duration-500 ease-in delay-100 ${hovered ? "opacity-100" : "opacity-0"}`} />}
						</div>
					) : (
						<div>
							<Skeleton className="h-[150px] w-[150px]" />
						</div>
					)}

					<div className="p-3">
						<CardTitle className="text-center font-normal">{jewelleryItem.name}</CardTitle>
						{jewelleryItem.calculatedPrice !== undefined && <CardDescription className="text-center mt-10">From &#8377; {jewelleryItem.calculatedPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</CardDescription>}
					</div>
				</Link>
			</CardContent>
		</Card>
	);
}

export default JewelleryCard;

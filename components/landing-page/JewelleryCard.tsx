"use client";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { MetalPrices } from "@/utils/functions/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
						<div className="relative aspect-square w-full max-w-[300px] mx-auto overflow-hidden">
							{/* Primary image */}
							{primaryImage && <Image src={primaryImage} alt={jewelleryItem.name} priority fill className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`} />}

							{/* Hover image */}
							{hoverImage && <Image src={hoverImage} alt={`${jewelleryItem.name} hover`} fill className={`object-cover transition-opacity duration-500 ease-in delay-100 ${hovered ? "opacity-100" : "opacity-0"}`} />}
						</div>
					) : (
						<div className="aspect-square w-full max-w-[300px] mx-auto">
							<Skeleton className="w-full h-full" />
						</div>
					)}

					<div className="p-3">
						<CardTitle className="text-center font-normal">{jewelleryItem.name}</CardTitle>
						{jewelleryItem.calculatedPrice !== undefined && (
							<CardDescription className="text-center mt-10">
								From ₹
								{jewelleryItem.calculatedPrice.toLocaleString("en-IN", {
									maximumFractionDigits: 0,
								})}
							</CardDescription>
						)}
					</div>
				</Link>
			</CardContent>
		</Card>
	);
}

export default JewelleryCard;

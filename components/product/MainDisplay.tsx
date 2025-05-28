"use client";
import React from "react";
import JewelleryDialogCarousel from "../common/JewelleryDialogCarousel";
import Link from "next/link";
import JewewllerySizeTable from "../common/JewewllerySizeTable";
import { Button } from "../ui/button";
import { HeartIcon, MinusIcon, PlusIcon } from "lucide-react";
import JewelleryOriginTab from "../common/JewelleryOriginTab";
import { useCounterStore } from "@/providers/cart-store-providers";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import SocialShareButtons from "./SocialShareButton";

interface MainDisplayProps {
	jewellery: Item;
}

function MainDisplay({ jewellery }: MainDisplayProps) {
	const { addToCart, removeItem, cartItems } = useCounterStore((state) => state);

	return (
		<div className="w-full md:w-[95%] mx-auto flex flex-col md:flex-row md:items-center gap-4 text-md">
			<div className="mx-auto w-full  md:w-1/2 px-3 md:px-12">
				<JewelleryDialogCarousel imageList={jewellery.images} />
			</div>
			<div className="text-start w-full md:w-1/2 px-3 md:px-12 flex flex-col items-start gap-4 text-gray-600">
				<p className="text-2xl text-black">{jewellery.name}</p>
				<p className="text-md">$ {jewellery.costOfDiamond + jewellery.costOfLabour + jewellery.miscellaneousCost}</p>
				<p className="text-md">{jewellery.description}</p>
				<div className="text-sm">
					<Link href="/policies/shipping-policy" className="font-bold underline">
						Shipping
					</Link>{" "}
					will be calculated at the checkout.
				</div>
				<div className="">Metal: {jewellery.karatOfGold}K Gold</div>
				<p>Please Allow Between 2 to 3 Weeks To Finalize And Deliver Your Product.</p>
				<JewewllerySizeTable jewellerySizes={jewellery.sizes} />
				<JewelleryOriginTab />
				<div className="w-full flex items-center justify-between gap-2">
					<div className="flex items-center  gap-6">
						<Button className=" cursor-pointer" onClick={() => addToCart(jewellery)}>
							<PlusIcon />
						</Button>
						<p>{cartItems.find((item) => item.item.name === jewellery.name)?.count || 0}</p>
						<Button className="cursor-pointer" onClick={() => removeItem(jewellery)} disabled={cartItems.find((item) => item.item.name === jewellery.name)?.count === 0}>
							<MinusIcon />
						</Button>
					</div>
					<div className="flex items-center gap-4">
						<Button type="button" className=" cursor-pointer">
							Buy it now
						</Button>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<HeartIcon className="cursor-pointer" />
								</TooltipTrigger>
								<TooltipContent>
									<p>Add to Wishlist</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</div>
				{/* store information */}
				<div className="">
					<p></p>
				</div>

				{/* share this */}
				<SocialShareButtons url={`${process.env.NEXT_PUBLIC_BASE_URL}/product/${jewellery._id}`} hashtag="#jeevika_shah_jewellery" title="Check this out!" />
			</div>
		</div>
	);
}

export default MainDisplay;

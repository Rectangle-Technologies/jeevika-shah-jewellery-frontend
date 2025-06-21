"use client";
import React from "react";
import JewelleryDialogCarousel from "../common/JewelleryDialogCarousel";
import Link from "next/link";
// import JewewllerySizeTable from "../common/JewewllerySizeTable";
import { Button } from "../ui/button";
import { HeartIcon, MinusIcon, PlusIcon } from "lucide-react";
import JewelleryOriginTab from "../common/JewelleryOriginTab";
import { useCounterStore } from "@/providers/cart-store-providers";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import SocialShareButtons from "./SocialShareButton";
import JewellerySizeDropdown from "./JewellerySizeDropdown";
import { useRouter } from "next/navigation";
import { calculatePricing } from "js-product-pricing-calculator";
import { centralPricing } from "@/constants";

interface MainDisplayProps {
	jewellery: Item;
}

function MainDisplay({ jewellery }: MainDisplayProps) {
	const { addToCart, cartItems } = useCounterStore((state) => state);
	const router = useRouter();
	const [count, setCount] = React.useState(cartItems.find((item) => item.productId === jewellery._id)?.quantity || 1);
	const [size, setSize] = React.useState(cartItems.find((item) => item.productId === jewellery._id)?.size || jewellery.sizes[0].displayName);
	const [type, setType] = React.useState(cartItems.find((item) => item.productId === jewellery._id)?.diamondType || "natural");

	return (
		<div className="w-full md:w-[95%] mx-auto flex flex-col md:flex-row md:items-center gap-4 text-md mt-5">
			<div className="w-full  md:w-1/2">
				<JewelleryDialogCarousel imageList={jewellery.images} />
			</div>
			<div className="text-start w-full md:w-1/2 px-3 flex flex-col items-start gap-6 text-gray-600">
				<p className="text-3xl font-bold text-gray-800">{jewellery.name}</p>
				<p className="text-xl">
					&#8377;{" "}
					{calculatePricing(
						jewellery,
						centralPricing,
						jewellery.sizes.filter((jewellerySize) => jewellerySize.displayName === size)
					).finalPrice.toFixed(2)}
				</p>
				<p className="text-md">{jewellery.description}</p>
				<p className="">Metal: {jewellery.karatOfGold} Karat Gold</p>
				<p>Weight: Approx {jewellery.weightOfGold} gm (Weight is subject to change depending on the size)</p>
				{/* <JewewllerySizeTable jewellerySizes={jewellery.sizes} /> */}
				<JewellerySizeDropdown jewellerySizes={jewellery.sizes} setSize={setSize} />
				{Object.keys(jewellery).includes("isNaturalDiamond") && Object.keys(jewellery).includes("isLabDiamond") && <JewelleryOriginTab setType={setType} />}
				<div className="w-full flex flex-col justify-between gap-6">
					<div className="flex items-center lg:justify-between gap-2 lg:gap-6">
						<div className="flex items-center gap-3 lg:gap-6 lg:w-1/3">
							<Button
								className=" cursor-pointer"
								onClick={() => {
									setCount(count + 1);
								}}
							>
								<PlusIcon />
							</Button>
							<p>{count}</p>
							<Button
								className="cursor-pointer"
								onClick={() => {
									setCount(count - 1);
								}}
								disabled={cartItems.find((item) => item.item.name === jewellery.name)?.quantity === 0}
							>
								<MinusIcon />
							</Button>
						</div>
						<Button type="button" onClick={() => addToCart(jewellery._id, jewellery, size, type, count)} className="w-2/3 cursor-pointer">
							Add to Cart
						</Button>
					</div>
					<div className="flex items-center justify-between">
						<Button
							type="button"
							className=" cursor-pointer w-[90%]"
							onClick={() => {
								addToCart(jewellery._id, jewellery, size, type, count);
								router.push("/checkout");
							}}
						>
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
				<p>Please Allow Between 2 to 3 Weeks To Finalize And Deliver Your Product.</p>
				<p>The price shown is inclusive of all taxes and fees.</p>
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

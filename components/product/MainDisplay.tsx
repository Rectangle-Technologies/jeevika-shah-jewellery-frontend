"use client";
import React from "react";
import JewelleryDialogCarousel from "./JewelleryDialogCarousel";
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
import { MetalPrices } from "@/utils/functions/product";
import { computeDiamondType } from "@/utils/functions/image";
import Link from "next/link";
import JewelleryMetalTab from "../common/JewelleryMetalTab";

interface MainDisplayProps {
	jewellery: Item;
	metalPrices: MetalPrices | undefined;
}

function determineDiamondType(isNaturalDiamond: boolean, isLabDiamond: boolean, isCentralisedDiamond: boolean) {
	if (isNaturalDiamond && isLabDiamond) {
		return "lab-grown";
	} else if (isNaturalDiamond) {
		return "natural";
	} else {
		return "lab-grown";
	}
}

function MainDisplay({ jewellery, metalPrices }: MainDisplayProps) {
	const { addToCart, cartItems } = useCounterStore((state) => state);
	const router = useRouter();
	const [count, setCount] = React.useState(cartItems.find((item) => item.productId === jewellery._id)?.quantity || 1);
	const [size, setSize] = React.useState(cartItems.find((item) => item.productId === jewellery._id)?.size || jewellery.sizes[0].displayName);
	const [type, setType] = React.useState(cartItems.find((item) => item.productId === jewellery._id)?.diamondType || determineDiamondType(jewellery.isNaturalDiamond, jewellery.isLabDiamond, jewellery.isCentralisedDiamond));
	const [karatOfGold, setKaratOfGold] = React.useState(cartItems.find((item) => item.productId === jewellery._id)?.karatOfGold || 14);

	return (
		<div className="w-full md:w-[95%] mx-auto flex flex-col md:flex-row gap-4 text-md mt-7">
			<div className="w-full  md:w-1/2">
				<JewelleryDialogCarousel imageList={jewellery.images} />
			</div>
			<div className="text-start w-full md:w-1/2 px-3 flex flex-col items-start gap-6 text-gray-600">
				<p className="text-3xl font-bold text-gray-800">{jewellery.name}</p>
				{jewellery.skuId && <p className="text-md">SKU ID: {jewellery.skuId}</p>}
				{!jewellery.isChatWithUs && <p className="text-xl">&#8377; {calculatePricing(jewellery, metalPrices, jewellery.sizes.filter((jewellerySize) => jewellerySize.displayName === size)[0], computeDiamondType(type), karatOfGold).finalPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>}
				<p className="text-md">{jewellery.description}</p>
				<p>Weight: Approx {jewellery.weightOfGold} gm (Weight is subject to change depending on the size)</p>
				<p>We use only premium quality diamonds which are graded VVS and VS unless stated otherwise.</p>
				{/* <JewewllerySizeTable jewellerySizes={jewellery.sizes} /> */}
				{jewellery.isChatWithUs ? (
					<Button asChild type="button" className="p-6 mt-2 font-normal cursor-pointer">
						<Link href="https://wa.me/9879438794" target="_blank" rel="noopener noreferrer">
							Customise via WhatsApp
						</Link>
					</Button>
				) : (
					<div className="flex flex-col gap-6">
						{jewellery.sizes.length > 1 && <JewellerySizeDropdown jewellerySizes={jewellery.sizes} setSize={setSize} />}
						{jewellery.sizes.length === 1 && <div className="flex items-center gap-2">Size: {jewellery.sizes[0].displayName}</div>}
						<JewelleryMetalTab setKaratOfGold={setKaratOfGold} />
						{jewellery.isLabDiamond && jewellery.isNaturalDiamond && <JewelleryOriginTab setType={setType} />}
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
								<Button type="button" onClick={() => addToCart(jewellery._id, jewellery, size, type, count, karatOfGold)} className="w-2/3 cursor-pointer">
									Add to Cart
								</Button>
							</div>
							<div className="flex items-center justify-between">
								<Button
									type="button"
									className=" cursor-pointer w-[90%]"
									onClick={async () => {
										await addToCart(jewellery._id, jewellery, size, type, count, karatOfGold);
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
						<p>All products are make to order and will take 7-15 days to ship.</p>
						<p>The price shown is inclusive of all taxes and fees.</p>
						{/* store information */}
						<div className="">
							<p></p>
						</div>
					</div>
				)}

				{/* share this */}
				<SocialShareButtons url={`${process.env.NEXT_PUBLIC_BASE_URL}/product/${jewellery._id}`} hashtag="#jeevika_shah_jewellery" title="Check this out!" />
			</div>
		</div>
	);
}

export default MainDisplay;

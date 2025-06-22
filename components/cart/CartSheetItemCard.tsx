import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { CircleXIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useCounterStore } from "@/providers/cart-store-providers";
import { imgSrcModifier } from "@/utils/functions/image";
import { formatDiamondType } from "@/utils/functions/checkout";
import { centralPricing } from "@/constants";
import { calculatePricing } from "js-product-pricing-calculator";

interface CartSheetItemCardProps {
	cartItem: IndividualCartItem;
}

function CartSheetItemCard({ cartItem }: CartSheetItemCardProps) {
	const { addToCart, removeItems } = useCounterStore((state) => state);
	const columnHeading = "text-black text-xs";
	const itemDetailStyle = "mx-auto text-center";
	return (
		<Card className="gap-2 relative">
			<CircleXIcon className="text-red-500 cursor-pointer absolute right-2 top-2" onClick={() => removeItems(cartItem.item, "delete")} />

			<CardHeader>
				<CardTitle>{cartItem.item.name}</CardTitle>
				<CardDescription>{formatDiamondType(cartItem.diamondType)} diamond</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row items-center gap-5 relative">
				<div className="relative h-[200px] w-full md:w-1/3">
					<Image src={imgSrcModifier(cartItem.item.images[0])} fill alt={cartItem.item.name} className="object-cover" />
				</div>
				<div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-400">
					<div className={itemDetailStyle}>
						<p className={columnHeading}>Size</p>
						<p key={cartItem.size}>{cartItem.size}</p>
					</div>

					<div className={itemDetailStyle}>
						<p className={columnHeading}>Price</p>₹ {calculatePricing(cartItem.item, centralPricing, cartItem.item.sizes.filter((size) => size.displayName === cartItem.size)[0]).finalPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
					</div>

					<div className={itemDetailStyle}>
						<p className={columnHeading}>Qty</p>
						<div className="flex items-center gap-3 my-2">
							<PlusIcon onClick={() => addToCart(cartItem.item._id, cartItem.item, cartItem.size, cartItem.diamondType, 1)} className="text-black border border-black rounded-full cursor-pointer hover:shadow" />
							<p>{cartItem.quantity}</p>
							<MinusIcon onClick={() => removeItems(cartItem.item, "reduce")} className="text-black border border-black rounded-full cursor-pointer hover:shadow" />
						</div>
					</div>

					<div className={itemDetailStyle}>
						<p className={columnHeading}>Total</p>₹{" "}
						{(
							cartItem.quantity *
							calculatePricing(
								cartItem.item,
								centralPricing,
								cartItem.item.sizes.filter((size) => size.displayName === cartItem.size)[0]
							).finalPrice
						).toLocaleString("en-IN", { maximumFractionDigits: 0 })}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default CartSheetItemCard;

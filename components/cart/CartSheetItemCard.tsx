import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { CircleXIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useCounterStore } from "@/providers/cart-store-providers";

interface CartSheetItemCardProps {
	cartItem: { item: Item; count: number };
}

function CartSheetItemCard({ cartItem }: CartSheetItemCardProps) {
	const { addToCart, removeItem, removeItems } = useCounterStore((state) => state);
	const columnHeading = "text-black text-xs";
	const itemDetailStyle = "mx-auto text-center";
	return (
		<Card className="gap-2 relative">
			<CircleXIcon className="text-red-500 absolute right-2 top-2" onClick={() => removeItems(cartItem.item)} />

			<CardHeader>
				<CardTitle>{cartItem.item.name}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row items-center gap-5 relative">
				<div className="relative h-[200px] w-full md:w-1/3">
					<Image src={cartItem.item.images[0]} fill alt={cartItem.item.name} className="object-cover" />
				</div>
				<div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-400">
					<div className={itemDetailStyle}>
						<p className={columnHeading}>Size</p>
						{cartItem.item.sizes.map((size) => (
							<p key={size.displayName}>
								{size.displayName} - {size.weightOfMetal}
							</p>
						))}
					</div>

					<div className={itemDetailStyle}>
						<p className={columnHeading}>Price</p>
						{cartItem.item.costOfDiamond + cartItem.item.costOfLabour + cartItem.item.miscellaneousCost}
					</div>

					<div className={itemDetailStyle}>
						<p className={columnHeading}>Qty</p>
						<div className="flex items-center gap-3 my-2">
							<PlusIcon onClick={() => addToCart(cartItem.item)} className="text-black border border-black rounded-full cursor-pointer hover:shadow" />
							<p>{cartItem.count}</p>
							<MinusIcon onClick={() => removeItem(cartItem.item)} className="text-black border border-black rounded-full cursor-pointer hover:shadow" />
						</div>
					</div>

					<div className={itemDetailStyle}>
						<p className={columnHeading}>Total</p>
						{cartItem.count * (cartItem.item.costOfDiamond + cartItem.item.costOfLabour + cartItem.item.miscellaneousCost)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default CartSheetItemCard;

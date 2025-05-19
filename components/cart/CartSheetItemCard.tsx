import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

interface CartSheetItemCardProps {
	cartItem: { item: Item; count: number };
}

function CartSheetItemCard({ cartItem }: CartSheetItemCardProps) {
	return (
		<Card className="gap-2">
			<CardHeader>
				<CardTitle>{cartItem.item.name}</CardTitle>
			</CardHeader>
			<CardContent className="flex items-center gap-5">
				<div className="relative h-[100px] w-1/3">
					<Image src={cartItem.item.images[0]} fill alt={cartItem.item.name} className="object-cover" />
				</div>
				<div className="w-2/3 text-sm text-gray-400">
					<div className="">
						{cartItem.item.sizes.map((size) => (
							<p key={size.displayName}>
								{size.displayName} - {size.weightOfMetal}
							</p>
						))}
					</div>
					<div className="">
						<p>
							{cartItem.count} X  {cartItem.item.costOfDiamond + cartItem.item.costOfLabour + cartItem.item.miscellaneousCost} = {cartItem.count * (cartItem.item.costOfDiamond + cartItem.item.costOfLabour + cartItem.item.miscellaneousCost)}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default CartSheetItemCard;

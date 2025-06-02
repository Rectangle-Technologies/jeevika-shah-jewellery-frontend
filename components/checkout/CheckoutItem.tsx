import { imgSrcModifier } from "@/utils/functions/image";
import Image from "next/image";
import React from "react";

interface CheckoutItemProps {
	item: IndividualCartItem;
}

function CheckoutItem({ item }: CheckoutItemProps) {
	return (
		<div className="flex items-center justify-between border shadow-md p-4 rounded-md bg-white">
			<div className="flex items-center gap-3">
				{/* image */}
				<div className="w-24 h-24 relative">
					<Image src={imgSrcModifier(item.item.images[0])} alt={item.item.name} fill className="object-cover" />
					<div className="absolute top-0 right-0 bg-gray-400 text-white text-sm px-2 py-1 rounded-full">
						<p>{item.quantity}</p>
					</div>
				</div>
				{/* item details */}
				<div className="">
					<p className="text-lg font-semibold">{item.item.name}</p>
					<p>{item.size}</p>
				</div>
			</div>
			{/* price */}
			<p className=" items-center">USD {(item.item.costOfDiamond + item.item.costOfLabour + item.item.miscellaneousCost).toFixed(2)}</p>
		</div>
	);
}

export default CheckoutItem;

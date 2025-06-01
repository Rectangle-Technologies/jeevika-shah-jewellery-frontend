import { imgSrcModifier } from "@/utils/functions/image";
import Image from "next/image";
import React from "react";

interface CheckoutItemProps {
	item: IndividualCartItem;
}

function CheckoutItem({ item }: CheckoutItemProps) {
	return (
		<div className="flex items-center justify-between border shadow-md p-4 rounded-md bg-white">
			<div className="flex items-center gap-3 w-5/6">
				{/* image */}
				<Image src={imgSrcModifier(item.item.images[0])} alt={item.item.name} width={100} height={100} />
				{/* item details */}
				<div className="">
					<p className="text-xl font-semibold">{item.item.name}</p>
					<p>{item.size}</p>
				</div>
			</div>
			{/* price */}
			<p className=" items-center">USD {(item.item.costOfDiamond + item.item.costOfLabour + item.item.miscellaneousCost).toFixed(2)}</p>
		</div>
	);
}

export default CheckoutItem;

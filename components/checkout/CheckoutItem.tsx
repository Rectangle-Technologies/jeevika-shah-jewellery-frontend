import { formatDiamondType } from "@/utils/functions/checkout";
import { imgSrcModifier } from "@/utils/functions/image";
import Image from "next/image";
import React from "react";

interface CheckoutItemProps {
	item: {
		productId: {
			_id: string;
			name: string;
			images: string[];
		};
		quantity: number;
		price: number;
		size: string;
		diamondType: string;
		_id: string;
	};
}

function CheckoutItem({ item }: CheckoutItemProps) {
	return (
		<div className="flex items-center justify-between border shadow-md p-4 rounded-md bg-white">
			<div className="flex items-center gap-3">
				{/* image */}
				<div className="w-24 h-24 relative">
					<Image src={imgSrcModifier(item.productId.images[0])} alt={item.productId.name} fill className="object-cover" />
					<div className="absolute top-0 right-0 bg-gray-400 text-white text-sm px-2 py-1 rounded-full">
						<p>{item.quantity}</p>
					</div>
				</div>
				{/* item details */}
				<div className="">
					<p className="text-lg font-semibold">{item.productId.name}</p>
					<p>{formatDiamondType(item.diamondType)}</p>
					<p>{item.size}</p>
					{/* price */}
					<p className="md:hidden items-center">&#8377; {item.price}</p>
				</div>
			</div>
			{/* price */}
			<p className="hidden md:flex items-center">&#8377; {(item.price * item.quantity).toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
		</div>
	);
}

export default CheckoutItem;

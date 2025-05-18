"use client";
import React, { useContext } from "react";
import JewelleryDialogCarousel from "../common/JewelleryDialogCarousel";
import Link from "next/link";
import JewewllerySizeTable from "../common/JewewllerySizeTable";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { StoreContext } from "@/contexts/storeProvider";

interface MainDisplayProps {
	jewellery: Item;
}
function MainDisplay({ jewellery }: MainDisplayProps) {
    const { addToCart, removeItem, cartItems } = useContext(StoreContext);
	return (
		<div className="w-full md:w-[95%] mx-auto flex flex-col md:flex-row md:items-center gap-4">
			<div className="mx-auto w-full  md:w-1/2 px-3 md:px-12">
				<JewelleryDialogCarousel imageList={jewellery.images} />
			</div>
			<div className="text-start w-full md:w-1/2 px-3 md:px-12 flex flex-col items-start gap-4">
				<p className="text-2xl font-bold">{jewellery.name}</p>
				<p className="text-md">{jewellery.description}</p>
				<div className="text-sm">
					<Link href="/policies/shipping-policy" className="font-bold underline">
						Shipping
					</Link>{" "}
					will be calculated at the checkout.
				</div>
				<div className="text-sm">Metal: {jewellery.karatOfGold}K Gold</div>
				<JewewllerySizeTable jewellerySizes={jewellery.sizes} />
				<div className="flex items-center  gap-2">
					<Button className=" cursor-pointer" onClick={() => addToCart(jewellery)}>
						<PlusIcon />
					</Button>
					<p>{cartItems.find((item) => item.item.name === jewellery.name)?.count || 0}</p>
					<Button className="cursor-pointer" onClick={() => removeItem(jewellery)} disabled={cartItems.find((item) => item.item.name === jewellery.name)?.count === 0}>
						<MinusIcon />
					</Button>
				</div>
				<Button className="mt-4 cursor-pointer">Buy it now</Button>
			</div>
		</div>
	);
}

export default MainDisplay;

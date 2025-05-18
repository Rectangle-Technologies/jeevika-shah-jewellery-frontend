"use client";
import React, { useContext } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import JewelleryDialogCarousel from "./JewelleryDialogCarousel";
import JewewllerySizeTable from "./JewewllerySizeTable";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { StoreContext } from "@/contexts/storeProvider";
import Link from "next/link";

interface JewelleryDialogProps {
	jewellery: Item;
}

function JewelleryDialog({ jewellery }: JewelleryDialogProps) {
	const { addToCart, removeItem, cartItems } = useContext(StoreContext);
	return (
		<Dialog>
			<DialogTrigger className="absolute cursor-pointer px-2 py-1 rounded-md bg-gray-700 text-white">Explore Options</DialogTrigger>
			<DialogContent className="md:min-w-3xl flex flex-col md:flex-row md:items-center overflow-y-scroll max-h-4/5 hide-scrollbar">
				<div className="mx-auto w-full  md:w-[60%] px-12">
					<JewelleryDialogCarousel imageList={jewellery.images} />
				</div>
				<DialogHeader className="text-start">
					<DialogTitle>{jewellery.name}</DialogTitle>
					<DialogDescription>{jewellery.description}</DialogDescription>
					<div className="text-sm">
						<Link href="/policies/shipping-policy" className="font-bold underline">Shipping</Link> will be calculated at the checkout.
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
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

export default JewelleryDialog;

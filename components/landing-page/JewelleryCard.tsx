import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

interface JewelleryCardProps {
	jewelleryItem: Item;
}
function JewelleryCard({ jewelleryItem }: JewelleryCardProps) {
	return (
		<Card className="w-full pt-0">
			{/* <CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>Deploy your new project in one-click.</CardDescription>
			</CardHeader> */}
			<CardContent className="px-0">
				<Image src={jewelleryItem.image_url} alt={jewelleryItem.name} width={200} height={200} className="w-full mb-4 rounded-t-lg" />
				<div className="px-3">
					<CardTitle className="text-lg text-center">{jewelleryItem.name}</CardTitle>
					<CardDescription className="text-center text-xl italic">From ${jewelleryItem.price}</CardDescription>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button className="w-full">Add to Cart</Button>
			</CardFooter>
		</Card>
	);
}

export default JewelleryCard;

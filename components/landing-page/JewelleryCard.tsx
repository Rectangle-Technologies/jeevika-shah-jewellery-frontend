"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

interface JewelleryCardProps {
	jewelleryItem: Item;
}
function JewelleryCard({ jewelleryItem }: JewelleryCardProps) {
	const [hovered, setHovered] = React.useState(false);
	return (
		<Card className="w-full py-0 ">
			<CardContent onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="px-0">
				<div className="flex flex-col items-center justify-end  p-3 h-[300px]  bg-cover bg-center" style={{ backgroundImage: `url(${jewelleryItem.image_url})` }}>
					{hovered && <Button className=" cursor-pointer">Explore Options</Button>}
				</div>
				<div className="p-3">
					<CardTitle className=" text-center">{jewelleryItem.name}</CardTitle>
					<CardDescription className="text-center text-xl italic">From ${jewelleryItem.price}</CardDescription>
				</div>
			</CardContent>
		</Card>
	);
}

export default JewelleryCard;

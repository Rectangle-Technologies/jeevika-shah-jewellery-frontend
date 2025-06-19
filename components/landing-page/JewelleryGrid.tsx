"use client";
import React from "react";
import JewelleryCard from "./JewelleryCard";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface JewelleryGridProps {
	jewelleryItems?: Item[];
	suggestions?: { _id: string; name: string; images: string[] }[];
}

function JewelleryGrid({ jewelleryItems, suggestions }: JewelleryGridProps) {
	// get current path
	const path = usePathname();
	return (
		<div className="w-full md:w-[95%] mx-auto p-3 flex flex-col items-center">
			{jewelleryItems && (
				<div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 my-5 w-full">
					{jewelleryItems?.map((item, index) => {
						return <JewelleryCard key={item.name + index.toString()} jewelleryItem={item} />;
					})}
				</div>
			)}
			{suggestions && (
				<div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 my-5 w-full">
					{suggestions?.map((item, index) => {
						return <JewelleryCard key={item.name + index.toString()} jewelleryItem={item} />;
					})}
				</div>
			)}
			{path === "/" && <Button className="p-6 w-[200px] cursor-pointer"><Link href="/collections/all">VIEW ALL</Link></Button>}
		</div>
	);
}

export default JewelleryGrid;

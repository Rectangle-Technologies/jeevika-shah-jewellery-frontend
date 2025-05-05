import { jewelleryItems } from "@/constants";
import React from "react";
import JewelleryCard from "./JewelleryCard";

function JewelleryGrid() {
	return (
		<div className="w-full mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
			{jewelleryItems.map((item) => {
				return <JewelleryCard key={item.id} jewelleryItem={item} />;
			})}
		</div>
	);
}

export default JewelleryGrid;

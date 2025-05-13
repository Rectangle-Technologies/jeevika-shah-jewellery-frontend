import { jewelleryItems } from "@/constants";
import React from "react";
import JewelleryCard from "./JewelleryCard";
import { Button } from "../ui/button";

function JewelleryGrid() {
	return (
		<div className="w-full md:w-[95%] mx-auto p-3 flex flex-col items-center">
			<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
				{jewelleryItems.map((item) => {
					return <JewelleryCard key={item.id} jewelleryItem={item} />;
				})}
			</div>
			<Button className="p-6 w-[200px] cursor-pointer">VIEW ALL</Button>
		</div>
	);
}

export default JewelleryGrid;

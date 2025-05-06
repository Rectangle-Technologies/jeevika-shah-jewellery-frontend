import { jewelleryCategories } from "@/constants";
import React from "react";
import JewelleryGridCard from "./JewelleryGridCard";

function JewelleryCategory() {
	return (
		<div className="p-3 flex flex-col gap-6">
			{jewelleryCategories.map((category) => (
				<JewelleryGridCard key={category.title} category={category} />
			))}
		</div>
	);
}

export default JewelleryCategory;

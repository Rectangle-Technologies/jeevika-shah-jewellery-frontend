import { jewelleryCategories } from "@/constants";
import React from "react";
import JewelleryGridCard from "./JewelleryGridCard";

function JewelleryCategory() {
	return (
		<div className="p-3 w-full md:w-4/5 mx-auto flex flex-col md:grid md:grid-cols-2 md: my-10 gap-6">
			{jewelleryCategories.map((category) => (
				<JewelleryGridCard key={category.title} category={category} />
			))}
		</div>
	);
}

export default JewelleryCategory;

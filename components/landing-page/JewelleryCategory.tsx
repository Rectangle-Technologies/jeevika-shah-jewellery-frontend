import React from "react";
import JewelleryGridCard from "./JewelleryGridCard";
import { getCategories } from "@/utils/functions/collection";

async function JewelleryCategory() {
	const jewelleryCategories = await getCategories();
	return <div className="p-3 w-full md:w-4/5 mx-auto flex flex-col md:grid md:grid-cols-2 md: my-10 gap-6">{jewelleryCategories.map((category) => category.image && <JewelleryGridCard key={category.name} category={category} />)}</div>;
}

export default JewelleryCategory;

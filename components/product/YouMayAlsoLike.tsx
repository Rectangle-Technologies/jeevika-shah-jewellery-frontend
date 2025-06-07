import React from "react";
import JewelleryGrid from "../landing-page/JewelleryGrid";

interface YouMayAlsoLikeProps {
	suggestedItems: { _id: string; name: string; images: string[] }[];
}
function YouMayAlsoLike({ suggestedItems }: YouMayAlsoLikeProps) {
	return (
		<div className="w-full md:w-[95%] mx-auto mt-20 flex flex-col items-center ">
			<p className="text-2xl">YOU MAY ALSO LIKE</p>
			<JewelleryGrid suggestions={suggestedItems} />
		</div>
	);
}

export default YouMayAlsoLike;

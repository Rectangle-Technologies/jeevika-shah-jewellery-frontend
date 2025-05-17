"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import JewelleryDialog from "../common/JewelleryDialog";

interface JewelleryCardProps {
	jewelleryItem: Item;
}
function JewelleryCard({ jewelleryItem }: JewelleryCardProps) {
	const [hovered, setHovered] = React.useState(false);
	return (
		<Card className="w-full md:w-11/12 mx-auto my-3 py-0 rounded-none">
			<CardContent
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className="px-0"
			>
				<div className="relative flex flex-col items-center justify-end p-3 h-[250px] w-full overflow-hidden">
					{/* Primary image */}
					<div
						className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"
							}`}
						style={{
							backgroundImage: `url(${jewelleryItem.images[0]})`,
						}}
					></div>

					{/* Hover image */}
					<div
						className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in delay-100 ${hovered ? "opacity-100" : "opacity-0"
							} ${hovered ? "cursor-pointer" : ""}`}
						style={{ backgroundImage: `url(${jewelleryItem.images[1]})` }}
					></div>

					<JewelleryDialog jewellery={jewelleryItem} />
				</div>

				<div className="p-3">
					<CardTitle className="text-center font-normal">
						{jewelleryItem.name}
					</CardTitle>
					<CardDescription className="text-center mt-10">
						From $
						{jewelleryItem.costOfDiamond +
							jewelleryItem.costOfLabour +
							jewelleryItem.miscellaneousCost}
					</CardDescription>
				</div>
			</CardContent>
		</Card>
	);
}

export default JewelleryCard;

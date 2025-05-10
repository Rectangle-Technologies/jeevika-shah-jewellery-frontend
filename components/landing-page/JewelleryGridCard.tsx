"use client";
import React from "react";

interface JewelleryGridCardProps {
	category: {
		title: string;
		image_url: string;
	};
}

function JewelleryGridCard({ category }: JewelleryGridCardProps) {
	return (
		<div className="relative bg-cover bg-center h-[250px] group" style={{ backgroundImage: `url(${category.image_url})` }}>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
				{/* Animated Title */}
				<p className="h-4/5 w-4/5 flex items-center justify-center text-white text-4xl border-2 border-white transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">{category.title.toUpperCase()}</p>
			</div>
		</div>
	);
}

export default JewelleryGridCard;

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
				<p className="text-white text-4xl border border-white px-28 py-16 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">{category.title}</p>
			</div>
		</div>
	);
}

export default JewelleryGridCard;

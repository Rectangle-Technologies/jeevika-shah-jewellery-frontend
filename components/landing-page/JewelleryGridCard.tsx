"use client";
import Link from "next/link";
import React from "react";

interface JewelleryGridCardProps {
	category: {
		name: string;
		image: string;
	};
}

function JewelleryGridCard({ category }: JewelleryGridCardProps) {
	return (
		<Link href={`/collections/${category.name.toLowerCase()}`} className="relative w-full aspect-[5/3] bg-cover bg-center group" style={{ backgroundImage: `url(${category.image})` }}>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
				<p className="h-4/5 w-4/5 flex items-center justify-center text-white text-4xl border-2 border-white transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">{category.name.toUpperCase()}</p>
			</div>
		</Link>
	);
}

export default JewelleryGridCard;

"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function PersonalisedPieces() {
	const [hovered, setHovered] = React.useState(false);

	return (
		<div className="w-full mx-auto p-3 flex flex-col gap-2 items-center">
			<p className="text-center text-xl font-semibold text-gray-700 mt-6">Personalized Pieces</p>
			<p className="text-center text-lg text-gray-700 mt-2">Elevate your style with Personalized Bracelets, Earrings, Rings & Necklaces, adorned with your name.</p>

			<div className="relative w-full md:w-[300px] h-[400px] mt-4 cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
				{/* Base Image */}
				<Image src="/assets/landing-page/personalised_piece.webp" alt="Personalised Pieces" fill className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`} />

				{/* Hover Image */}
				<Image src="/assets/landing-page/personalised_piece_hovered.webp" alt="Personalised Pieces Hovered" fill className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`} />
			</div>
			<p className="text-center text-lg text-gray-700 mt-2">Mother of Pearl Initial Ring with Diamonds</p>
            <Button className="text-xl cursor-pointer">Customise via WhatsApp</Button>
		</div>
	);
}

export default PersonalisedPieces;

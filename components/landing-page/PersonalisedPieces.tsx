"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function PersonalisedPieces() {

	return (
		<div className="w-full mx-auto p-3 flex flex-col gap-2 items-center">
			<p className="text-center text-xl font-semibold text-gray-700 mt-6">Personalized Pieces</p>
			<p className="text-center text-lg text-gray-700 mt-2">Elevate your style with Personalized Bracelets, Earrings, Rings & Necklaces, adorned with your name.</p>

			<div className="relative w-full md:w-[300px] h-[400px] md:h-[350px] mt-4">
				<Image src="/assets/landing-page/personalised_piece.webp" alt="Personalised Pieces" fill className={`object-cover transition-opacity duration-500`} />
			</div>
            <Button className="p-6 mt-2 font-normal cursor-pointer">Customise via WhatsApp</Button>
		</div>
	);
}

export default PersonalisedPieces;

"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface PersonalisedPiecesProps {
	bgImageSrc?: string;
}

function PersonalisedPieces({ bgImageSrc }: PersonalisedPiecesProps) {
	return (
		<div className="w-full mx-auto p-3 flex flex-col gap-2 items-center">
			<p className="text-center text-xl font-semibold text-gray-700 mt-6">Personalized Pieces</p>
			<p className="text-center text-lg text-gray-700 mt-2">Elevate your style with Personalized Bracelets, Earrings, Rings & Necklaces, adorned with your name.</p>

			<div className="relative w-full md:w-[300px] h-[400px] md:h-[350px] mt-4">
				<Image src={bgImageSrc as string} alt="Personalised Pieces" fill className={`object-cover transition-opacity duration-500`} />
			</div>
			<Button asChild type="button" className="p-6 mt-2 font-normal cursor-pointer">
				<Link href="https://wa.me/9879438794" target="_blank" rel="noopener noreferrer">
					Customise via WhatsApp
				</Link>
			</Button>
		</div>
	);
}

export default PersonalisedPieces;

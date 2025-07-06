import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BannerProps {
	bgImageSrc?: string;
}

function Banner({ bgImageSrc }: BannerProps) {

	return (
		<div className={`h-[calc(100vh-64px)] md:h-screen bg-top-right md:bg-right-bottom bg-cover bg-no-repeat flex flex-col items-center justify-center relative overflow-hidden`} style={bgImageSrc ? { backgroundImage: `url(${bgImageSrc})` } : undefined}>
			<div className="absolute h-full w-full bg-black opacity-30 md:opacity-20 z-10"></div>

			<Button
				type="button"
				variant="outline"
				className={`
					text-xl bg-transparent text-white p-6 h-12 rounded-full z-30 cursor-pointer
					opacity-0 translate-y-8 animate-fade-in-up font-light
				`}
				asChild
			>
				<Link href="/collections/all">Shop Now</Link>
			</Button>
		</div>
	);
}

export default Banner;

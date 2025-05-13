import React from "react";
import { Button } from "../ui/button";

function Banner() {
	return (
		<div className="h-[calc(100vh-64px)] md:h-screen bg-[url('/assets/landing-page/background-mobile.webp')] bg-top-right md:bg-right-bottom bg-cover bg-no-repeat flex flex-col items-center justify-center relative overflow-hidden">
			<div className="absolute h-full w-full bg-black opacity-30 md:opacity-20 z-10"></div>

			<Button
				type="button"
				variant="outline"
				className={`
					text-xl bg-transparent text-white p-6 h-12 rounded-full z-30 cursor-pointer
					opacity-0 translate-y-8 animate-fade-in-up font-light
				`}
			>
				Shop Now
			</Button>
		</div>
	);
}

export default Banner;

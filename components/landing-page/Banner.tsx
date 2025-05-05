import React from "react";
import { Button } from "../ui/button";

function Banner() {
	return (
		<div className="h-[calc(100vh-64px)] bg-[url('/assets/landing-page/background-mobile.webp')] bg-top-right bg-cover bg-no-repeat flex flex-col items-center justify-center relative">
			<div className="absolute h-full w-full bg-black opacity-30"></div>
			<Button type="button" variant="outline" className="text-xl bg-transparent text-white py-3 px-6 h-12 rounded-full z-30">
				Shop Now
			</Button>
		</div>
	);;
}

export default Banner;

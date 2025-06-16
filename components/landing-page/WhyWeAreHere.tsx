import React from "react";

interface WhyWeAreHereProps {
	bgImageSrc?: string;
}

function WhyWeAreHere({ bgImageSrc }: WhyWeAreHereProps) {
	return (
		<div className="w-full mx-auto p-3 mt-10 flex flex-col items-center bg-cover bg-center relative h-[500px] md:h-[calc(100vh-164px)]" style={bgImageSrc ? { backgroundImage: `url(${bgImageSrc})` } : undefined}>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
			<div className="z-30 h-full w-full flex flex-col items-center justify-center gap-4 text-center text-white">
				<p className="text-center text-2xl md:text-3xl font-bold">Why We're Here</p>
				<p className="text-justify font-semibold  text-lg w-11/ md:w-3/5 mx-auto">
					We're a family business making beautiful jewelry. We craft beautiful pieces just for you, whether you prefer simple, fancy, or custom designs. Every piece is handmade in our in-house atelier —all to elevate your confidence, sophistication, and appreciation
				</p>
			</div>
		</div>
	);
}

export default WhyWeAreHere;

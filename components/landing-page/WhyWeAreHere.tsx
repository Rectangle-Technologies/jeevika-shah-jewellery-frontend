import React from "react";

interface WhyWeAreHereProps {
	bgImageSrc?: string;
}

function WhyWeAreHere({ bgImageSrc }: WhyWeAreHereProps) {
	return (
		<div className="w-full mx-auto p-3 mt-10 flex flex-col items-center bg-cover bg-center relative h-[500px] md:h-[calc(100vh-164px)]" style={bgImageSrc ? { backgroundImage: `url(${bgImageSrc})` } : undefined}>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
			<div className="z-30 h-full w-full flex flex-col items-center justify-center gap-4 text-center text-white">
				<p className="text-center text-2xl md:text-3xl font-semibold">Why We're Here</p>
				<p className="text-justify font-normal  text-lg w-11/ md:w-3/5 mx-auto">
					We understand the desire for jewellery that feels both elegant and personal—pieces that seamlessly complement your everyday style while reflecting your individuality. Every piece is made with precision, care, and a deep appreciation for the person who wears it. We take pride in crafting jewellery that not only enhances your look but also empowers you with confidence.
				</p>
			</div>
		</div>
	);
}

export default WhyWeAreHere;

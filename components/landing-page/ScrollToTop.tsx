"use client";

import { ChevronUpIcon, MoveUpIcon } from "lucide-react";
import React from "react";

function ScrollToTop() {
	const [scrolled, setScrolled] = React.useState(false);
	const [hover, setHover] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 100);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleScrollToTop} className={`${scrolled ? "flex" : "hidden"} fixed bottom-4 right-4 md:bottom-10 md:right-13 z-50 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center cursor-pointer overflow-hidden`}>
			{/* Icon container */}
			<div className="relative w-5 h-5 flex items-center justify-center">
				<ChevronUpIcon className={`absolute transition-all duration-300 ${hover ? "opacity-0 scale-90" : "opacity-100 scale-100"}`} />
				<MoveUpIcon className={`absolute transition-all duration-700 ${hover ? "opacity-100 scale-100" : "opacity-0 scale-90"}`} />
			</div>
		</div>
	);
}

export default ScrollToTop;

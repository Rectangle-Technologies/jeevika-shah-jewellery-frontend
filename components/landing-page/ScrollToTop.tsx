'use client';

import { MoveUpIcon } from "lucide-react";
import React from "react";

function ScrollToTop() {
    const [scrolled, setScrolled] = React.useState(false);

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
    }
	return (
		<div className={`${scrolled ? "flex" : "hidden"} fixed bottom-4 right-4 z-50 bg-white shadow-md rounded-full w-10 h-10 items-center justify-center`} onClick={handleScrollToTop}>
			<MoveUpIcon />
		</div>
	);
}

export default ScrollToTop;

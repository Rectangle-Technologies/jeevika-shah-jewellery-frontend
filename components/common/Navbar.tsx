"use client";
import React from "react";
import NavbarSheet from "./NavbarSheet";
import Image from "next/image";
import { ShoppingBagIcon } from "lucide-react";
import { StoreContext } from "@/contexts/storeProvider";

function Navbar() {
	const { getCartLength } = React.useContext(StoreContext)!;
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

	return (
		<nav className={`flex items-center justify-between py-2 px-4 ${scrolled ? "bg-white shadow-md" : "bg-transparent"} z-50 fixed w-full top-0 transition-colors duration-300`}>
			<div>
				<NavbarSheet />
			</div>
			<div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
				<Image
					src="/assets/logo-primary.png"
					alt="Jeevika Shah Jewellery logo"
					fill
					className="object-contain"
				/>
			</div>
			<div className="flex items-center gap-2">
				<ShoppingBagIcon className={`${scrolled ? "text-black" : "text-white"}`} />
				<span className="bg-black text-white rounded-full w-7 h-7 flex items-center justify-center">{getCartLength()}</span>
			</div>
		</nav>
	);
}

export default Navbar;

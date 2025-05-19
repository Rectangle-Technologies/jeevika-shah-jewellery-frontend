"use client";
import React from "react";
import NavbarSheet from "./NavbarSheet";
import Image from "next/image";
import { UserCircleIcon } from "lucide-react";
import Link from "next/link";
import NavigationMenuDemo from "./NavigationMenuDemo";
import { usePathname } from "next/navigation";
import CartSheet from "../cart/CartSheet";
import { useCounterStore } from "@/providers/cart-store-providers";

function Navbar() {
	const { getCartLength } = useCounterStore((state) => state);
	const path = usePathname();
	const [scrolled, setScrolled] = React.useState(false);
	const [hovered, setHovered] = React.useState(false);
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
		<nav onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={` ${scrolled || hovered || path !== "/" ? "bg-white text-black shadow-md" : "bg-transparent text-white"} z-50 fixed w-full  top-0 transition-colors duration-300`}>
			<div className="flex items-center justify-between py-2 px-4 md:w-[90%] mx-auto">
				<div className="flex md:hidden">
					<NavbarSheet />
				</div>
				<div className="hidden md:flex items-center gap-4 md:w-1/4">
					<NavigationMenuDemo />
				</div>
				<Link href="/" className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
					<Image src="/assets/logo-primary.png" alt="Jeevika Shah Jewellery logo" fill className="object-contain" />
				</Link>
				<div className="flex items-center justify-end gap-2 md:gap-3 md:w-1/4">
					<Link href={"/profile"} className="hidden md:flex">
						<UserCircleIcon className="cursor-pointer" />
					</Link>
					<CartSheet />
					<span className="bg-black text-white rounded-full w-7 h-7 flex items-center justify-center">{getCartLength()}</span>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

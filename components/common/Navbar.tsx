"use client";
import React from "react";
import NavbarSheet from "./NavbarSheet";
import Image from "next/image";
import { ShoppingBagIcon, UserCircleIcon } from "lucide-react";
import Link from "next/link";
import NavigationMenuDemo from "./NavigationMenuDemo";
import { usePathname } from "next/navigation";
// import CartSheet from "../cart/CartSheet";
import { useCounterStore } from "@/providers/cart-store-providers";

interface NavbarProps {
	navbarLinks: { title: string; link?: string; subLinks?: { title: string; link: string }[] }[];
}

function Navbar({ navbarLinks }: NavbarProps) {
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
			{path !== "/login" && path !== "/sign-up" ? (
				<div className="flex items-center justify-between py-2 px-4 md:w-[90%] mx-auto">
					<div className="flex md:hidden">
						<NavbarSheet navbarLinks={navbarLinks} />
					</div>
					<div className="hidden md:flex items-center gap-4 md:w-1/4">
						<NavigationMenuDemo navbarLinks={navbarLinks} />
					</div>
					<Link href="/" className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
						<Image src="/assets/logo-secondary.png" alt="Jeevika Shah Jewellery logo" fill className="object-contain" />
					</Link>
					<div className="flex items-center justify-end gap-2 md:gap-3 md:w-1/4">
						<Link href={"/profile"} className="hidden md:flex">
							<UserCircleIcon className="cursor-pointer" />
						</Link>
						{/* <CartSheet /> */}
						<Link href={"/cart"}>
							<ShoppingBagIcon className="cursor-pointer" />
						</Link>
						<span className="bg-black text-white rounded-full w-7 h-7 flex items-center justify-center">{getCartLength()}</span>
					</div>
				</div>
			) : (
				<div className="flex items-center justify-between px-4 md:w-[90%] mx-auto">
					<Link href="/" className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
						<Image src="/assets/logo-secondary.png" alt="Jeevika Shah Jewellery logo" fill className="object-contain" />
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;

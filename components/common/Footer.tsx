import { FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
	const footerOptions: { title: string; link: string }[] = [
		{
			title: "About Us",
			link: "/about-us",
		},
		{
			title: "Exchange & Refund Policy",
			link: "/exchange-and-refund-policy",
		},
		{
			title: "Privacy Policy",
			link: "/privacy-policy",
		},
	];
	return (
		<footer className="flex flex-col items-center justify-center py-2 bg-[#767676] text-white px-4">
			<Image src="/assets/logo-primary.png" alt="Jeevika Shah Jewellery logo" width={150} height={150} />
			<div className="flex items-center gap-2 text-md">
				{footerOptions.map((option, index) => (
					<Link key={option.title + index.toString()} href={option.link} className="hover:underline py-1">
						{option.title}
					</Link>
				))}
			</div>
			<div className="flex items-center justify-center pb-8 gap-2 my-5 border-b-2 border-white w-full">
				<Link href="https://www.facebook.com/jeevikashahjewellery/" className="hover:underline py-1">
					<FacebookIcon />
				</Link>
				<Link href="https://www.instagram.com/jeevikashahjewellery/" className="hover:underline py-1">
					<InstagramIcon />
				</Link>
			</div>
			<div className="">© 2025 All rights reserved</div>
		</footer>
	);
}

export default Footer;

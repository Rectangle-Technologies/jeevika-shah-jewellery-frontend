import { footerOptions } from "@/constants";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {

	return (
		<footer className="w-full flex flex-col items-center justify-center py-2 bg-[#3A0519] text-white px-4 md:px-10">
			<Image src="/assets/logo-primary.png" alt="Jeevika Shah Jewellery logo" width={150} height={150} />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-md">
				{footerOptions.map((option, index) => (
					<Link key={option.title + index.toString()} href={option.link} className="hover:underline py-1 text-center">
						{option.title}
					</Link>
				))}
			</div>
			<div className="flex items-center justify-center pb-8 gap-2 my-5 border-b-2 border-white w-full">
				<Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK!} className="hover:underline py-1">
					<FacebookIcon />
				</Link>
				<Link href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK!} className="hover:underline py-1">
					<InstagramIcon />
				</Link>
			</div>
			<div className="py-4">© {new Date().getFullYear()} All rights reserved</div>
		</footer>
	);
}

export default Footer;

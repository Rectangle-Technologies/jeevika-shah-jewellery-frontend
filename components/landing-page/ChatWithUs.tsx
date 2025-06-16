import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ChatWithUsProps {
	bgImageSrc?: string;
}

function ChatWithUs({ bgImageSrc }: ChatWithUsProps) {
	return (
		<div style={bgImageSrc ? { backgroundImage: `url(${bgImageSrc})` } : undefined} className="w-full mx-auto p-3 flex flex-col items-center h-[500px] md:h-[calc(100vh-64px)] bg-cover bg-center relative text-white my-10">
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
			<div className="z-30 h-full w-full flex flex-col items-center justify-center gap-4 text-center md:text-2xl md:font-semibold ">
				<p>LET'S SHARE THE PASSION & HELP YOU CREATE A PIECE.</p>
				<p>JUST FOR YOU.</p>
				<Button type="button" asChild className="rounded-none border border-white hover:bg-white hover:text-black p-6 bg-transparent text-xl cursor-pointer mt-10">
					<Link href="https://wa.me/9879438794" target="_blank" rel="noopener noreferrer">
						CHAT WITH US
					</Link>
				</Button>
			</div>
		</div>
	);
}

export default ChatWithUs;

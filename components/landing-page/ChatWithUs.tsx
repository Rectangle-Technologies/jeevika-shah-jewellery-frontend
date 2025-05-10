import React from "react";
import { Button } from "../ui/button";

function ChatWithUs() {
	return (
		<div className="w-full mx-auto p-3 flex flex-col items-center h-[500px] md:h-[calc(100vh-64px)] bg-cover bg-center relative text-white my-10" style={{ backgroundImage: `url('/assets/landing-page/chat-with-us.webp')` }}>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
			<div className="z-30 h-full w-full flex flex-col items-center justify-center gap-4 text-center md:text-2xl md:font-semibold ">
				<p>LET'S SHARE THE PASSION & HELP YOU CREATE A PIECE.</p>
				<p>JUST FOR YOU.</p>
				<Button type="button" className="rounded-none border border-white hover:bg-white hover:text-black py-5 px-6 bg-transparent text-xl cursor-pointer mt-10">CHAT WITH US</Button>
			</div>
		</div>
	);
}

export default ChatWithUs;

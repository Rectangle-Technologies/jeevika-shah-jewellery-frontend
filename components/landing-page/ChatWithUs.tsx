import React from "react";
import { Button } from "../ui/button";

function ChatWithUs() {
	return (
		<div className="w-full mx-auto p-3 flex flex-col items-center h-[500px] bg-cover bg-center relative text-white" style={{ backgroundImage: `url('/assets/landing-page/chat-with-us.webp')` }}>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
			<div className="z-30 h-full w-full flex flex-col items-center justify-center gap-4 text-center">
				<p>LET'S SHARE THE PASSION & HELP YOU CREATE A PIECE.</p>
				<p>JUST FOR YOU.</p>
				<Button type="button" className="rounded-none border border-white py-5 px-6 bg-transparent text-xl cursor-pointer">CHAT WITH US</Button>
			</div>
		</div>
	);
}

export default ChatWithUs;

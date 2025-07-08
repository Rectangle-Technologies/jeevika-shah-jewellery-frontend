import Image from "next/image";
import React from "react";

function ProcessingPayment() {
	return (
		<div className="fixed bg-white/35 backdrop-blur-sm z-50 top-0 left-0 h-screen w-screen flex flex-col gap-4 items-center justify-center">
            <Image src="/assets/logo-secondary.png" alt="loading" width={100} height={100} />
			<div className="loader"></div>
			<p className="text-black">Processing payment details! Please wait.</p>
		</div>
	);
}

export default ProcessingPayment;

import Image from "next/image";
import React from "react";

function WhatsAppFloatingButton() {
	return (
		<div className="fixed bottom-20 right-3 md:bottom-25 md:right-12 z-50">
			<Image src="/assets/landing-page/whatsapp.png" alt="WhatsApp Icon" width={50} height={50} />
		</div>
	);
}

export default WhatsAppFloatingButton;

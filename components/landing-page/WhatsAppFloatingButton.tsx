import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhatsAppFloatingButton() {
	return (
		<div className="fixed bottom-20 right-3 md:bottom-25 md:right-12 z-50">
			<Link href="https://wa.me/9879438794" target="_blank" rel="noopener noreferrer">
				<Image src="/assets/landing-page/whatsapp.png" alt="WhatsApp Icon" width={50} height={50} />
			</Link>
		</div>
	);
}

export default WhatsAppFloatingButton;

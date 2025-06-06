import React from "react";
import type { Metadata } from "next";

// SEO metadata for this page
export const metadata: Metadata = {
	title: "Shipping Policy | Jeevika Shah Jewellery",
	description: "Read the shipping policy of Jeevika Shah Jewellery. Learn about our free shipping within India, insured delivery, and important guidelines for receiving your order.",
	keywords: ["Shipping Policy", "Free Shipping", "Jeevika Shah", "Jewellery", "Insured Delivery", "Jewelry India", "Order Guidelines", "Delivery Time"],
	openGraph: {
		title: "Shipping Policy | Jeevika Shah Jewellery",
		description: "Read the shipping policy of Jeevika Shah Jewellery. Learn about our free shipping within India, insured delivery, and important guidelines for receiving your order.",
		url: `${process.env.DOMAIN}/policies/shipping-policy`,
		siteName: "Jeevika Shah Jewellery",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Shipping Policy | Jeevika Shah Jewellery",
		description: "Read the shipping policy of Jeevika Shah Jewellery. Learn about our free shipping within India, insured delivery, and important guidelines for receiving your order.",
	},
};

function ShippingPolicyPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
			<p className="text-3xl font-bold">Shipping Policy</p>
			<section className="space-y-4 leading-[2]">
				<p>
					Every masterpiece of jewellery you buy from Jeevika Shah is packed with utmost affection and care by the team. We provide <strong>FREE shipping on all orders within India</strong>. Your order will be completely insured and mailed to you.
				</p>
				<p>Before receiving or signing for receipt, we strongly advise all clients to inspect the shipment for damage or tampering. JS is committed to deliver make to order products in 14-15 business working days.</p>
			</section>
		</div>
	);
}

export default ShippingPolicyPage;

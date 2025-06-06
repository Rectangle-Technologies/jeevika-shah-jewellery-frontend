import React from "react";
import type { Metadata } from "next";

// SEO metadata for this page
export const metadata: Metadata = {
	title: "Buy Back Policy | Jeevika Shah Jewellery",
	description: "Read the buy back policy of Jeevika Shah Jewellery. Learn about our 100% gold buy back policy, required documentation, and important terms regarding gold and diamond buy back.",
	keywords: ["Buy Back Policy", "Gold Buy Back", "Jeevika Shah", "Jewellery", "Gold Refund", "Diamond Policy", "Jewelry India", "Authentication Card"],
	openGraph: {
		title: "Buy Back Policy | Jeevika Shah Jewellery",
		description: "Read the buy back policy of Jeevika Shah Jewellery. Learn about our 100% gold buy back policy, required documentation, and important terms regarding gold and diamond buy back.",
		url: `${process.env.DOMAIN}/policies/buy-back-policy`,
		siteName: "Jeevika Shah Jewellery",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Buy Back Policy | Jeevika Shah Jewellery",
		description: "Read the buy back policy of Jeevika Shah Jewellery. Learn about our 100% gold buy back policy, required documentation, and important terms regarding gold and diamond buy back.",
	},
};

function BuyBackPolicyPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
			<p className="text-3xl font-bold">Buy Back Policy</p>
			<section className="space-y-4 leading-[2]">
				<p>
					We have a <strong>100% gold buy back policy</strong>.
				</p>
				<p>To avail this policy, you must present the original purchase receipt and the JS authentication card provided at the time of purchase. Gold prices will be determined according to the current market rates.</p>
				<p>All jewellery will be inspected by our manufacturing team. In case of no tampering, the amount will be refunded to you within 15-20 days.</p>
				<p>Please note that we do not buy back diamonds.</p>
			</section>
		</div>
	);
}

export default BuyBackPolicyPage;
